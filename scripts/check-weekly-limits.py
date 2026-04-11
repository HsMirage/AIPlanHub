#!/usr/bin/env python3
"""
check-weekly-limits.py
周期检查各平台周限数据是否更新，如有变化则更新 data.js 并输出报告

用法: python3 check-weekly-limits.py [--dry-run]
     python3 check-weekly-limits.py --minimax-only

输出: reports/report-weekly-limits-YYYYMMDD.json
"""

import sys
import os
import re
import json
import time
import argparse
from datetime import datetime

sys.path.insert(0, os.path.expanduser(
    '~/Library/Application Support/QClaw/openclaw/config/skills/browser-cdp/scripts'))

from browser_launcher import BrowserLauncher
from cdp_client import CDPClient
from page_snapshot import PageSnapshot
from browser_actions import BrowserActions

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(PROJECT_ROOT, 'scripts', 'data.js')
LINKS_JSON = os.path.join(PROJECT_ROOT, 'scripts', 'platform-links.json')
REPORT_DIR = os.path.join(PROJECT_ROOT, 'reports')

os.makedirs(REPORT_DIR, exist_ok=True)


# ────────────────────────────────────────────────
# 读取当前 data.js 中的 reqWeek
# ────────────────────────────────────────────────
def get_current_week_limits(data_js_path):
    """返回 {(platform, name): reqWeek}"""
    with open(data_js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    limits = {}
    # 匹配每个 entry 行
    lines = content.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]
        m = re.search(r"platform:'([^']+)'.*?name:'([^']+)'", line)
        if m:
            platform, name = m.group(1), m.group(2)
            # 向前或向后找 reqWeek
            for j in range(i, min(i + 8, len(lines))):
                wm = re.search(r'reqWeek:(\d+|null)', lines[j])
                if wm:
                    val = None if wm.group(1) == 'null' else int(wm.group(1))
                    limits[(platform, name)] = val
                    break
        i += 1
    return limits


def update_data_js_reqweek(data_js_path, platform, plan_name, new_val):
    """更新 data.js 中指定 entry 的 reqWeek，返回是否成功"""
    with open(data_js_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    updated = False
    in_entry = False
    entry_start = -1

    for i, line in enumerate(lines):
        if f"platform:'{platform}'" in line and f"name:'{plan_name}'" in line:
            in_entry = True
            entry_start = i
        if in_entry:
            m = re.search(r'reqWeek:(\d+|null)', line)
            if m:
                old_val = None if m.group(1) == 'null' else int(m.group(1))
                if old_val != new_val:
                    lines[i] = re.sub(r'reqWeek:\d+|reqWeek:null', f'reqWeek:{new_val}', line)
                    updated = True
                in_entry = False
                break
            # 防止跨太多行
            if i - entry_start > 8:
                in_entry = False

    if updated:
        with open(data_js_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
    return updated


# ────────────────────────────────────────────────
# 周限提取逻辑（按平台定制）
# ────────────────────────────────────────────────
PLATFORM_PATTERNS = {
    'z.ai': [
        (r'每周[^\d]{0,10}(\d[\d,]*)', '每周期匹配'),
    ],
    'Kimi': [
        (r'每周[^\d]{0,10}(\d[\d,]*)', '每周额度'),
    ],
    'MiniMax': [
        (r'每[57]?h(?:our)?[^/\d]{0,20}(\d[\d,]*)', '每X小时额度'),
        (r'每[57]?\s*h(?:our)?[^/\d]{0,20}(\d[\d,]*)', '每X小时额度v2'),
    ],
    '讯飞星辰': [
        (r'每周[^\d]{0,10}(\d[\d,]*)', '每周次'),
        (r'每订阅月[^\d]{0,10}(\d[\d,]*)', '每月次'),
    ],
    '字节·方舟': [
        (r'每周[^\d]{0,10}(\d[\d,]*)', '每周次'),
    ],
    '阿里·百炼': [
        (r'每周[^\d]{0,10}(\d[\d,]*)', '每周次'),
    ],
}


def extract_weekly_limits(text, platform):
    """从页面文本提取周限数字列表"""
    results = []
    patterns = PLATFORM_PATTERNS.get(platform, PLATFORM_PATTERNS['Kimi'])

    for pat, label in patterns:
        for m in re.finditer(pat, text, re.IGNORECASE):
            val = int(m.group(1).replace(',', ''))
            if 50 <= val <= 10_000_000:  # 合理范围
                ctx = text[max(0, m.start()-40):m.end()+40].replace('\n', ' ').strip()
                results.append({'value': val, 'label': label, 'context': ctx})

    # 去重
    seen = set()
    unique = []
    for r in results:
        if r['value'] not in seen:
            seen.add(r['value'])
            unique.append(r)
    return unique


# ────────────────────────────────────────────────
# MiniMax 特殊：计算 reqWeek = req5h × 10
# ────────────────────────────────────────────────
def minimax_formula(text):
    """从 MiniMax 页面提取 req5h，计算 reqWeek = req5h * 10"""
    matches = re.findall(r'(\d[\d,]*)\s*(?:次)?模型调用\s*/\s*5小时', text)
    results = []
    for m in matches:
        req5h = int(m.replace(',', ''))
        req_week = req5h * 10
        results.append({'req5h': req5h, 'reqWeek': req_week})
    return results


# ────────────────────────────────────────────────
# 浏览器交互
# ────────────────────────────────────────────────
def get_page_text(client, url, reuse_domain=None):
    """获取页面文本（优先复用标签，否则新建）"""
    snapshot = PageSnapshot(client)
    tabs = client.list_tabs()

    tab = None
    if reuse_domain:
        for t in tabs:
            if reuse_domain in t.get('url', ''):
                tab = t
                break

    if tab:
        print(f'    [复用标签] {tab["id"]}')
        client.attach(tab['id'])
    else:
        print(f'    [新建标签] {url}')
        tab_info = client.create_tab(url)
        tab = tab_info
        client.attach(tab['id'])
        time.sleep(5)

    time.sleep(2)
    tree = snapshot.accessibility_tree(max_chars=500_000)
    client.close_tab(tab['id'])
    return tree


def get_minimax_real_usage(client):
    """MiniMax：提取用户当前实际用量（5h窗口 + 本周）"""
    snapshot = PageSnapshot(client)
    tabs = client.list_tabs()

    mm_tab = None
    for t in tabs:
        if 'minimaxi.com/user-center' in t.get('url', ''):
            mm_tab = t
            break

    if mm_tab:
        client.attach(mm_tab['id'])
        time.sleep(2)
    else:
        tab_info = client.create_tab('https://platform.minimaxi.com/user-center/payment/token-plan')
        mm_tab = tab_info
        client.attach(mm_tab['id'])
        time.sleep(5)

    # 提取文本（重点在"本周"标签）
    text = snapshot.accessibility_tree(max_chars=200_000)
    client.close_tab(mm_tab['id'])

    # 解析用量
    usage = {}
    # 5h窗口: "178 / 600" 等
    for m in re.finditer(r'(\d+)\s*/\s*(\d+)\s*(?:%\s*已使用)?', text):
        used, total = int(m.group(1)), int(m.group(2))
        ctx = text[max(0, m.start()-30):m.end()+30].replace('\n', ' ').strip()
        if used <= total and total > 0:
            usage[f'{used}/{total}'] = {'used': used, 'total': total, 'context': ctx}

    return text, usage


# ────────────────────────────────────────────────
# 主流程
# ────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description='检查各平台周限是否更新')
    parser.add_argument('--dry-run', action='store_true', help='只报告，不写入')
    parser.add_argument('--minimax-only', action='store_true', help='只检查 MiniMax')
    args = parser.parse_args()

    print('🔍 周限周期检查启动')
    print(f'   模式: {"DRY-RUN" if args.dry_run else "写入模式"}')

    # 加载链接配置
    with open(LINKS_JSON, 'r', encoding='utf-8') as f:
        links_data = json.load(f)

    # 加载当前 data.js
    current = get_current_week_limits(DATA_JS)

    print('\n📋 当前已记录 reqWeek:')
    for (platform, name), val in sorted(current.items()):
        tag = '' if val is None else f'→ {val}'
        print(f'   {platform} / {name}: {tag}')

    # 连接浏览器
    launcher = BrowserLauncher()
    cdp_url = launcher.launch(browser='edge', reuse_profile=True)
    client = CDPClient(cdp_url)
    client.connect()
    print('✅ 浏览器已连接')

    results = {
        'timestamp': datetime.now().isoformat(),
        'dryRun': args.dry_run,
        'checks': [],
        'changes': [],
        'errors': [],
    }

    platforms = list(links_data.keys())
    if args.minimax_only:
        platforms = ['MiniMax']
    platforms = [p for p in platforms if p != '_meta']

    for platform in platforms:
        info = links_data[platform]
        print(f'\n🔎 {platform}')
        print(f'   链接: {info["link"]}')

        try:
            if platform == 'MiniMax':
                # MiniMax: 获取实际用量
                page_text, usage = get_minimax_real_usage(client)
                print(f'   → MiniMax 实际用量: {usage}')
                # 同时获取公式计算的 reqWeek
                calc = minimax_formula(page_text)
                print(f'   → 公式计算 reqWeek: {calc}')
                results['checks'].append({
                    'platform': platform,
                    'link': info['link'],
                    'realUsage': usage,
                    'formulaCalc': calc,
                })
                # 从公式计算更新 data.js
                current_mm = {k: v for (p, k), v in current.items() if p == 'MiniMax'}
                for item in calc:
                    plan_map = {
                        600: 'Starter',
                        1500: 'Plus',
                        4500: 'Max',
                        30000: 'Ultra 极速版',
                    }
                    if item['req5h'] in plan_map:
                        plan_name = plan_map[item['req5h']]
                        current_val = current_mm.get(plan_name)
                        new_val = item['reqWeek']
                        if current_val != new_val:
                            results['changes'].append({
                                'platform': platform,
                                'plan': plan_name,
                                'old': current_val,
                                'new': new_val,
                                'formula': f'req5h({item["req5h"]}) × 10 = {new_val}',
                                'link': info['link'],
                            })
                            if not args.dry_run:
                                updated = update_data_js_reqweek(DATA_JS, platform, plan_name, new_val)
                                print(f'   ✅ 更新 {plan_name}: {current_val} → {new_val}')
                            else:
                                print(f'   ⚡ 将更新 {plan_name}: {current_val} → {new_val}')
            else:
                # 其他平台：获取页面文本
                domain = info['link'].split('/')[2]
                page_text = get_page_text(client, info['link'], reuse_domain=domain)
                found = extract_weekly_limits(page_text, platform)
                print(f'   → 找到 {len(found)} 个数字: {[f["value"] for f in found]}')

                results['checks'].append({
                    'platform': platform,
                    'link': info['link'],
                    'foundNumbers': found,
                    'dataJsCurrent': {k: v for (p, k), v in current.items() if p == platform},
                })

        except Exception as e:
            print(f'   ❌ 错误: {e}')
            results['errors'].append({'platform': platform, 'error': str(e)})

    client.close()

    # 保存报告
    today = datetime.now().strftime('%Y%m%d')
    report_path = os.path.join(REPORT_DIR, f'report-weekly-limits-{today}.json')
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f'\n📄 报告: {report_path}')

    # 摘要
    print('\n========== 摘要 ==========')
    print(f'检查平台: {len(platforms)}')
    print(f'发现变化: {len(results["changes"])}')
    for c in results['changes']:
        print(f'  • {c["platform"]} / {c["plan"]}: {c["old"]} → {c["new"]}')
        print(f'    来源: {c["link"]}')
    if results['errors']:
        print(f'错误: {len(results["errors"])}')
        for e in results['errors']:
            print(f'  • {e["platform"]}: {e["error"]}')


if __name__ == '__main__':
    main()
