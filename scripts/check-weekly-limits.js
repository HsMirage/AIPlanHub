/**
 * check-weekly-limits.js
 * 周期检查各平台周限数据是否更新，如有变化则更新 data.js 并输出报告
 *
 * 用法: node check-weekly-limits.js
 *      node check-weekly-limits.js --dry-run  (只输出变化，不写入)
 *
 * 输出: report-weekly-limits-YYYYMMDD.json
 */

const fs = require('fs');
const path = require('path');
const CDP = require('chrome-remote-interface');

// ============ 配置 ============
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_JS = path.join(PROJECT_ROOT, 'scripts', 'data.js');
const LINKS_JSON = path.join(PROJECT_ROOT, 'scripts', 'platform-links.json');
const REPORT_DIR = path.join(PROJECT_ROOT, 'reports');
const EDGE_PORT = 9334; // 用户 Edge CDP 端口

const DRY_RUN = process.argv.includes('--dry-run');

// ============ 工具函数 ============
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function launchBrowser() {
  try {
    const client = await CDP({ port: EDGE_PORT });
    return client;
  } catch (e) {
    console.error('❌ 无法连接 Edge CDP，请确认 Edge 已开启调试端口');
    throw e;
  }
}

async function getTab(client, urlPattern) {
  const { Target } = client;
  const tabs = await Target.getTargets();
  for (const t of tabs) {
    if (urlPattern && t.url().includes(urlPattern)) {
      return t;
    }
  }
  return null;
}

async function openTab(client, url) {
  const { Target } = client;
  const { targetId } = await Target.createTarget({ url });
  const client2 = await CDP({ target: targetId });
  return { targetId, client: client2 };
}

async function getPageSnapshot(client) {
  const { Page } = client;
  await Page.enable();
  const { content } = await Page.getContent();
  return content;
}

async function getAccessibilityTree(client, maxChars = 80000) {
  const { Accessibility } = client;
  await Accessibility.enable();
  const snapshot = await Accessibility.getFullAXTree();
  return accessibilityTreeToText(snapshot.nodes[0], 0, maxChars);
}

function accessibilityTreeToText(node, depth, maxChars, collected = { text: '', count: 0 }) {
  if (!node) return '';
  let indent = '  '.repeat(depth);
  let line = '';
  if (node.role && node.role.value !== 'rootWebArea') {
    const role = node.role.value;
    const name = (node.name && node.name.value) || '';
    const value = (node.value && node.value.value) || '';
    if (name || value) {
      line = `${indent}[${role}] ${name}${value ? ' = ' + value : ''}`;
      collected.text += line + '\n';
      collected.count += line.length;
    }
  }
  if (collected.count < maxChars && node.children) {
    for (const child of node.children) {
      accessibilityTreeToText(child, depth + 1, maxChars, collected);
    }
  }
  return collected.text;
}

// 从文本中提取周限相关数字
function extractWeeklyLimits(text, platform) {
  const results = [];
  const lines = text.split('\n');

  // 针对不同平台配置提取规则
  const patterns = {
    'z.ai': [
      /(?:每|每|每周|weekly)[\s:：]*(\d+[\d,]*)\s*(?:次|requests?|prompts?|times?)/gi,
    ],
    'Kimi': [
      /(?:每|每周)[\s:：]*(\d+[\d,]*)\s*(?:次|requests?|prompts?)/gi,
    ],
    'MiniMax': [
      /(?:每|每周|week)[\s:：]*(?:「[^」]*」\s*的?\s*)?(\d+[\d,]*)\s*(?:倍|times?)?/gi,
      /(?:每\s*5?\s*h(?:our)?s?)[\s:：]*(\d+[\d,]*)/gi,
    ],
    '讯飞星辰': [
      /(?:每周|周)[\s:：]*(\d+[\d,]*)\s*(?:次|requests?)/gi,
      /(?:每订阅月|每月|monthly)[\s:：]*(\d+[\d,]*)\s*(?:次|requests?)/gi,
    ],
    '字节·方舟': [
      /(?:每周|周)[\s:：]*(\d+[\d,]*)\s*(?:次|requests?)/gi,
    ],
    '阿里·百炼': [
      /(?:每周|周)[\s:：]*(\d+[\d,]*)\s*(?:次|requests?)/gi,
    ],
  };

  const platformPatterns = patterns[platform] || patterns['Kimi'];

  for (const pattern of platformPatterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const num = parseInt(match[1].replace(/,/g, ''), 10);
      const ctx = text.substring(Math.max(0, match.index - 60), match.index + match[0].length + 60);
      results.push({ value: num, context: ctx.trim() });
    }
  }

  // 去重
  const seen = new Set();
  return results.filter(r => {
    if (seen.has(r.value)) return false;
    seen.add(r.value);
    return true;
  });
}

// 读取 data.js 中的周限
function getCurrentWeekLimits(dataJsContent) {
  const limits = {};
  const planRegex = /\{[\s\S]*?platform:'([^']+)'[\s\S]*?name:'([^']+)'[\s\S]*?reqWeek:(\d+|null)/g;
  let match;
  while ((match = planRegex.exec(dataJsContent)) !== null) {
    const platform = match[1];
    const name = match[2];
    const reqWeek = match[3] === 'null' ? null : parseInt(match[3], 10);
    if (!limits[platform]) limits[platform] = {};
    limits[platform][name] = reqWeek;
  }
  return limits;
}

// 更新 data.js 中的 reqWeek
function updateDataJs(dataJsContent, platform, planName, newReqWeek) {
  // 找到对应平台和计划的行
  const lines = dataJsContent.split('\n');
  let updated = false;
  let updatedLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(`platform:'${platform}'`) && line.includes(`name:'${planName}'`)) {
      // 找同一 entry 的 reqWeek 行
      for (let j = i; j < Math.min(i + 5, lines.length); j++) {
        if (lines[j].includes('reqWeek:')) {
          const oldWeek = lines[j].match(/reqWeek:(\d+|null)/)?.[1];
          if (oldWeek !== String(newReqWeek)) {
            lines[j] = lines[j].replace(/reqWeek:\d+|reqWeek:null/, `reqWeek:${newReqWeek}`);
            updated = true;
            updatedLine = j;
          }
          break;
        }
      }
    }
  }
  return { content: lines.join('\n'), updated, updatedLine };
}

// ============ 主流程 ============
async function main() {
  console.log('🔍 开始周期周限检查...');
  console.log(`模式: ${DRY_RUN ? 'DRY-RUN（只报告，不写入）' : '写入模式'}`);

  // 确保报告目录存在
  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
  }

  // 读取配置
  const linksData = JSON.parse(fs.readFileSync(LINKS_JSON, 'utf8'));
  const dataJsContent = fs.readFileSync(DATA_JS, 'utf8');
  const currentLimits = getCurrentWeekLimits(dataJsContent);

  console.log('\n📋 当前已记录周限:');
  for (const [platform, plans] of Object.entries(currentLimits)) {
    for (const [name, limit] of Object.entries(plans)) {
      console.log(`  ${platform} / ${name}: ${limit === null ? 'null' : limit}`);
    }
  }

  // 连接浏览器
  let client;
  let ownBrowser = false;
  try {
    client = await launchBrowser();
  } catch (e) {
    console.error('浏览器连接失败:', e.message);
    process.exit(1);
  }

  const results = {
    timestamp: new Date().toISOString(),
    dryRun: DRY_RUN,
    checks: [],
    changes: [],
    errors: [],
  };

  const platforms = Object.keys(linksData).filter(k => k !== '_meta');

  for (const platform of platforms) {
    const info = linksData[platform];
    console.log(`\n🔎 检查: ${platform}`);
    console.log(`   链接: ${info.link}`);
    console.log(`   方法: ${info.method}`);

    try {
      // 查找或打开标签
      let targetId, tabClient;
      const existingTab = await getTab(client, info.link.split('/')[2]);
      if (existingTab) {
        console.log('   → 复用已有标签');
        tabClient = await CDP({ target: existingTab.id() });
        targetId = existingTab.id();
      } else {
        console.log('   → 打开新标签');
        ({ targetId, client: tabClient } = await openTab(client, info.link));
        await sleep(5000);
      }

      const { Page, Runtime } = tabClient;
      await Page.enable();

      // 执行 JavaScript 获取页面文本
      const expr = `
        (function() {
          var clone = document.body ? document.body.innerText : '';
          var headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5')).map(h => h.innerText).join('\\n');
          var paragraphs = Array.from(document.querySelectorAll('p,td,th,li,span')).map(el => el.innerText).join('\\n');
          return clone + '\\n' + headings + '\\n' + paragraphs;
        })()
      `;
      const { result } = await Runtime.evaluate({ expression: expr, returnByValue: true });
      const pageText = result.value || '';

      // 提取周限数字
      const found = extractWeeklyLimits(pageText, platform);

      console.log(`   → 找到 ${found.length} 个相关数字:`, found.map(f => f.value));

      results.checks.push({
        platform,
        link: info.link,
        method: info.method,
        note: info.note,
        foundNumbers: found,
        dataJsCurrent: currentLimits[platform] || {},
      });

      // 与 data.js 比对
      if (currentLimits[platform]) {
        for (const [planName, currentWeek] of Object.entries(currentLimits[platform])) {
          if (currentWeek !== null) continue; // 已有具体数字，跳过

          // 在 found 中寻找该平台的周限
          for (const item of found) {
            if (item.value >= 100 && item.value <= 1000000) {
              // 看起来是有效的周限数字
              const change = {
                platform,
                planName,
                oldValue: currentWeek,
                newValue: item.value,
                context: item.context,
                link: info.link,
              };
              results.changes.push(change);
              console.log(`   ⚡ 发现可能更新: ${planName}: null → ${item.value}`);
              console.log(`     上下文: ${item.context}`);

              if (!DRY_RUN) {
                const { content: newContent, updated } = updateDataJs(dataJsContent, platform, planName, item.value);
                if (updated) {
                  fs.writeFileSync(DATA_JS, newContent);
                  console.log(`   ✅ 已更新 data.js`);
                }
              }
            }
          }
        }
      }

      // 关闭标签
      const { Target } = client;
      await Target.closeTarget({ targetId });
      await tabClient.close();

    } catch (err) {
      console.error(`   ❌ 出错: ${err.message}`);
      results.errors.push({ platform, error: err.message });
    }
  }

  await client.close();

  // 写报告
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const reportPath = path.join(REPORT_DIR, `report-weekly-limits-${today}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 报告已保存: ${reportPath}`);

  // 输出摘要
  console.log('\n========== 检查摘要 ==========');
  console.log(`平台检查数: ${platforms.length}`);
  console.log(`发现变化: ${results.changes.length}`);
  if (results.changes.length > 0) {
    console.log('\n变化详情:');
    for (const c of results.changes) {
      console.log(`  • ${c.platform} / ${c.planName}: ${c.oldValue} → ${c.newValue}`);
      console.log(`    来源: ${c.link}`);
    }
  }
  if (results.errors.length > 0) {
    console.log(`\n错误: ${results.errors.length}`);
    for (const e of results.errors) {
      console.log(`  • ${e.platform}: ${e.error}`);
    }
  }

  return results;
}

main().catch(console.error);
