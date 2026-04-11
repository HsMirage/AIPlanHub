// ===== Plans Data =====
const PLANS = [
  // 智谱AI - 官网实测：月付/季付(9折)/年付(8折)，2月12日已涨价30%起，取消首购优惠
  // 2026.04.07更新：Lite移除GLM-5，新增GLM-4.x系列；Pro/Max保留GLM-5
  // 2026.04.11通过已登录Edge实测：docs.bigmodel.cn官方文档明确显示每周限额
  // 每周限额为prompts数，换算请求数×15（每次prompt约15-20次模型调用）；月限额为API定价折算估算值
  { platform:'智谱AI', name:'Lite', monthly:49, quarterly:132.3, yearly:470.4, firstMonth:null,
    models:['GLM-5.1','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:1200, reqMonth:24000, reqWeek:6000, benefits:['免费MCP','20+编程工具'], note:'季付¥44.1/月·年付¥39.2/月·GLM-5.1已开放·Lite不含GLM-5·每周400prompts×15≈6000请求', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },
  { platform:'智谱AI', name:'Pro', monthly:149, quarterly:402.3, yearly:1430.4, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:6000, reqMonth:120000, reqWeek:30000, benefits:['免费MCP','优先体验新模型'], note:'季付¥134.1/月·年付¥119.2/月·Pro含GLM-5·每周2000prompts×15≈30000请求', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },
  { platform:'智谱AI', name:'Max', monthly:469, quarterly:1266.3, yearly:4502.4, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:24000, reqMonth:600000, reqWeek:120000, benefits:['免费MCP','高峰期专属资源'], note:'季付¥422.1/月·年付¥375.2/月·Max含GLM-5·每周8000prompts×15≈120000请求', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },

  // z.ai（智谱国际版）- ⚠️ 2026.04.11价格大幅上调！
  // 月付: $18/$72/$160（Lite/Pro/Max）；季付: $54/$216/$480（首季$43.74/$174.96/$388.8）
  // 年付: $172.80/$691.20/$1536（首年$155.52/$622.08/$1382.4享-10%）；Friend Gift享10%优惠
  // 原价月付$10/$30/$80→现价$18/$72/$160涨幅约80%；年付从$75/$226/$604涨至$172.80/$691.20/$1536涨幅约130%
  // 页面显示prompts数，按1prompt≈15次调用折算为请求数；reqWeek=null（页面未公开周限额）
  // 支持模型不变；支持月付/季付/年付三种方式
  { platform:'z.ai', name:'Lite', monthly:18, quarterly:54, yearly:172.80, firstMonth:null,
    models:['GLM-5.1','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5-Air'], req5h:1200, reqMonth:null, reqWeek:null, benefits:['3× Claude Pro 用量','兼容 Claude Code/Cursor/Cline 等 20+ 工具'], note:'⚠️月付涨至$18(原$10)·季付$54(首季$43.74)·年付$172.8(首年$155.52享-10%)·Friend Gift享10%·支持月付/季付/年付·req5h=80prompts×15≈1200请求', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },
  { platform:'z.ai', name:'Pro', monthly:72, quarterly:216, yearly:691.20, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5-Air'], req5h:6000, reqMonth:null, reqWeek:null, benefits:['5× Lite 用量','优先体验新模型','40%-60% 更快响应'], note:'⚠️月付涨至$72(原$30)·季付$216(首季$174.96)·年付$691.2(首年$622.08享-10%)·Friend Gift享10%·含MCP·支持月付/季付/年付·req5h=400prompts×15≈6000请求', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },
  { platform:'z.ai', name:'Max', monthly:160, quarterly:480, yearly:1536, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5-Air'], req5h:24000, reqMonth:null, reqWeek:null, benefits:['4× Pro 用量','高峰期保证性能','抢先体验新模型'], note:'⚠️月付涨至$160(原$80)·季付$480(首季$388.8)·年付$1536(首年$1382.4享-10%)·Friend Gift享10%·支持月付/季付/年付·req5h=1600prompts×15≈24000请求', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },

  // Kimi - 官网实测：连续包月原价/连续包年折扣价
  // 2026.04.07更新：新增连续包年首月优惠价；官网不公开具体请求数额度
  { platform:'Kimi', name:'Andante', monthly:49, quarterly:null, yearly:468, firstMonth:39,
    models:['Kimi-K2.5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['专属编程额度','旗舰模型抢先体验'], note:'年付¥39/月·连续包年首月¥39·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Moderato', monthly:99, quarterly:null, yearly:948, firstMonth:79,
    models:['Kimi-K2.5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['每周更新额度','多设备共享'], note:'年付¥79/月·连续包年首月¥79·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Allegretto', monthly:199, quarterly:null, yearly:1908, firstMonth:159,
    models:['Kimi-K2.5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['充足每周额度','高并发上限'], note:'年付¥159/月·连续包年首月¥159·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Allegro', monthly:699, quarterly:null, yearly:6708, firstMonth:559,
    models:['Kimi-K2.5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['澎湃额度','高强度开发'], note:'年付¥559/月·连续包年首月¥559·请求数未公开', link:'https://www.kimi.com/code/zh' },

  // MiniMax - 3月23日已升级为 Token Plan（全模态统一订阅），Plus及以上额外赠多模态额度
  // 2026.04.11实测：Token Plan 规则为"每周可使用额度为『每5小时额度』的 10 倍" → reqWeek = req5h × 10
  { platform:'MiniMax', name:'Starter', monthly:29, quarterly:null, yearly:290, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:600, reqMonth:9000, reqWeek:6000, benefits:['TPS ~50','Token Plan'], note:'年付¥24.2/月·reqWeek=req5h×10·每周6000次·每5h额度滑动刷新', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Plus', monthly:49, quarterly:null, yearly:490, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:1500, reqMonth:22500, reqWeek:15000, benefits:['TPS ~50','赠多模态额度（视频/语音/音乐/图像）'], note:'年付¥40.8/月·Token Plan·reqWeek=req5h×10=15000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Max', monthly:119, quarterly:null, yearly:1190, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:4500, reqMonth:67500, reqWeek:45000, benefits:['TPS ~50','赠多模态额度（视频/语音/音乐/图像）'], note:'年付¥99.2/月·Token Plan·reqWeek=req5h×10=45000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Plus 极速版', monthly:98, quarterly:null, yearly:980, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:1500, reqMonth:22500, reqWeek:15000, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan·reqWeek=req5h×10=15000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Max 极速版', monthly:199, quarterly:null, yearly:1990, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:4500, reqMonth:67500, reqWeek:45000, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan·reqWeek=req5h×10=45000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Ultra 极速版', monthly:899, quarterly:null, yearly:8990, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:30000, reqMonth:450000, reqWeek:300000, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan·reqWeek=req5h×10=300000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },

  // 字节·方舟 - 首月Lite约¥8.9，支持Doubao-Seed-2.0-pro/lite/Code系列/DeepSeek-V3.2/Kimi-K2.5/GLM-4.7
  // ⚠️ 双层计费：名义按调用次数，实际Token消耗大会被按2-3次甚至更多次扣费（蓝点网/V2EX/微博多源证实）
  // 2026.04.11通过已登录Edge实测：volcengine.com/docs/82379/2165245页面中间位置显示每周限额，reqWeek=9000/45000
  { platform:'字节·方舟', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:null,
    models:['Doubao-Seed-2.0-pro','Doubao-Seed-2.0-lite','Doubao-Seed-Code','DeepSeek-V3.2','Kimi-K2.5','GLM-4.7','MiniMax-M2.5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['ArkClaw 7天试用','Auto智能选模型'], note:'首月优惠已结束(原¥8.9)·⚠双层计费·额度消耗远快于同行·每周一00:00刷新', link:'https://volcengine.com/L/jmiEa1dptck/' },
  { platform:'字节·方舟', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['Doubao-Seed-2.0-pro','Doubao-Seed-2.0-lite','Doubao-Seed-Code','DeepSeek-V3.2','Kimi-K2.5','GLM-4.7','MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['免费ArkClaw','Auto智能选模型'], note:'首月优惠已结束(原¥49.9)·⚠双层计费·Pro三四天可用完月额度·每周一00:00刷新', link:'https://volcengine.com/L/jmiEa1dptck/' },

  // 阿里·百炼 - Lite套餐已停止新购（2026.03.20起），当前仅显示Pro套餐
  // 2026.04.08核对：帮助文档(last-modified 2026-04-03)显示Qwen3.5-Plus等模型；控制台显示Pro暂时售罄
  // 2026.04.10核对：帮助文档明确写"每周45,000次请求"，reqWeek=45000
  { platform:'阿里·百炼', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['Qwen3.5-Plus','Qwen3-Coder-Next','Qwen3-Coder-Plus','Qwen3-Max-2026-01-23','GLM-5','GLM-4.7','Kimi-K2.5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['多模型自由切换'], note:'Lite已停止新购(3.20起)·Pro当前暂时售罄·活动已结束·每周45000次', link:'https://www.aliyun.com/minisite/goods?userCode=hun0t0sf' },

  // 京东云 - JoyBuilder Coding Plan，帮助文档更新于 2026.04.03；活动规则页显示首购优惠持续到 2026.06.30，每天10:30限量开放
  // 官方宣称高峰期无明显降速；社区有截断/卡顿与未到 5h 上限触发 rate_limit 的反馈
  // 2026.04.11通过已登录Edge实测：docs.jdcloud.com套餐页明确显示每周限额，reqWeek=9000/45000
  { platform:'京东云', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:19.9,
    models:['DeepSeek-V3.2','GLM-5','GLM-4.7','MiniMax-M2.5','Kimi-K2.5','Kimi-K2-Turbo','Qwen3-Coder'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['多工具额度共享','支持主流 AI 编程工具'], note:'首月¥19.9·每天10:30限量·禁API调用', link:'https://3.cn/2-K9GY29' },
  { platform:'京东云', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:99.9,
    models:['DeepSeek-V3.2','GLM-5','GLM-4.7','MiniMax-M2.5','Kimi-K2.5','Kimi-K2-Turbo','Qwen3-Coder'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['5× Lite 用量','支持主流 AI 编程工具'], note:'首月¥99.9·每天10:30限量·禁API调用', link:'https://3.cn/2-K9GY29' },

  // 移动云 - 帮助文档更新于 2026.04.09；活动页显示 Lite/Pro 首购券后价分别为 ¥7.9 / ¥39.9
  // 当前仅支持 MiniMax-M2.5，订购区仅华北-呼和浩特与湖北-武汉；Coding Plan 严禁 API 调用
  // 2026.04.11通过已登录Edge实测：官网套餐页显示每周限额，reqWeek=9000/45000
  { platform:'移动云', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:7.9,
    models:['MiniMax-M2.5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['适配 Claude Code/OpenCode/OpenClaw'], note:'首月¥7.9·仅 MiniMax-M2.5·禁API调用', link:'https://ecloud.10086.cn/portal/act/codingplan' },
  { platform:'移动云', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:39.9,
    models:['MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['适配 Claude Code/OpenCode/OpenClaw'], note:'首月¥39.9·仅 MiniMax-M2.5·呼和浩特/武汉可购·禁API调用', link:'https://ecloud.10086.cn/portal/act/codingplan' },

  // 天翼云 - 订阅页(https://ctxirang.ctyun.cn/maas/codingPlan)与文档页(https://www.ctyun.cn/document/11061839/11092415)实测
  // 3档套餐均暂时售罄，每日10:00补货；文档给的是prompt档位，按1prompt≈15次调用折算为请求数
  // 2026.04.11实测：订阅页确认Lite¥49/Pro¥149/Max¥469；reqWeek=6000/30000/120000（估算值，页面不直接显示）
  // 付费倍率：高阶模型（GLM-5/5.1/5-Turbo）高峰3x/非高峰2x抵扣，即实际可用量约为标称值的1/2~1/3
  // ⚠️ 注意：页面显示的prompts数是扣倍率前的理论值，高阶模型实际可用量更少
  { platform:'天翼云', name:'GLM Lite', monthly:49, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:1200, reqMonth:24000, reqWeek:6000, benefits:['GLM 全家桶','支持 Claude Code/OpenCode/OpenClaw/Cline'], note:'暂时售罄·每日10:00补货·高阶模型高峰3x/非高峰2x抵扣·实际可用量约为标称1/2~1/3', link:'https://ctxirang.ctyun.cn/maas/codingPlan' },
  { platform:'天翼云', name:'GLM Pro', monthly:149, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:6000, reqMonth:120000, reqWeek:30000, benefits:['GLM 全家桶','低峰期动态提升并发'], note:'暂时售罄·每日10:00补货·GLM-5/5.1/5-Turbo 用量消耗更快·实际可用量约为标称1/2~1/3', link:'https://ctxirang.ctyun.cn/maas/codingPlan' },
  { platform:'天翼云', name:'GLM Max', monthly:469, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:24000, reqMonth:480000, reqWeek:120000, benefits:['GLM 全家桶','推荐 2+ 项目并发开发'], note:'暂时售罄·每日10:00补货·高阶模型倍率抵扣影响实际可用量·实际可用量约为标称1/2~1/3', link:'https://ctxirang.ctyun.cn/maas/codingPlan' },

  // 联通云 - Coding Plan 概述文档显示当前资源紧张；限流时会自动切换到负载更轻模型，套餐页为 Lite / Pro 两档
  // 仅允许 AI 编程工具使用，严禁 API 调用；当前公开文档主入口为帮助中心
  // 2026.04.11通过已登录Edge实测：support.cucloud.cn文档明确显示每周限额，reqWeek=9000/45000，已支持GLM-5.1
  { platform:'联通云', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','GLM-5.1','GLM-5','Kimi-K2.5','Qwen3.5-397B-A17B','Qwen3-235B-A22B','DeepSeek-V3.1'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['多模型动态路由','兼容 Claude Code/OpenCode/OpenClaw/CoPaw'], note:'资源紧张·贵阳/济南可用·禁API调用·已支持GLM-5.1', link:'https://support.cucloud.cn/document/127/591/2357.html?id=2357&arcid=7015' },
  { platform:'联通云', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','GLM-5.1','GLM-5','Kimi-K2.5','Qwen3.5-397B-A17B','Qwen3-235B-A22B','DeepSeek-V3.1'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['多模型动态路由','兼容 Claude Code/OpenCode/OpenClaw/CoPaw'], note:'资源紧张·限流时自动切模型·禁API调用·已支持GLM-5.1', link:'https://support.cucloud.cn/document/127/591/2357.html?id=2357&arcid=7015' },

  // 优云 - 页面于 2026.04.10 核对；同时提供一次性按量包与包月畅享包，这里记录 3 档包月套餐
  // 官方 FAQ 明确支持 API / Chatbot / Codex CLI；积分与 Token 的换算由模型倍率决定
  // 2026.04.10核对：积分制非请求数，无req5h/reqMonth/reqWeek概念
  { platform:'优云', name:'Lite', monthly:49.9, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.1','MiniMax-M2.5','GLM-5','Kimi-K2.5','DeepSeek-V3.2'], req5h:null, reqMonth:null, reqWeek:null, benefits:['允许 API 调用','支持 Codex CLI/CherryStudio'], note:'另有¥6.9/19.9/199一次性按量包·积分倍率需看规则页', tokenDaily:700, tokenUnit:' 积分', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云', name:'Plus', monthly:199, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.1','MiniMax-M2.5','GLM-5','Kimi-K2.5','DeepSeek-V3.2'], req5h:null, reqMonth:null, reqWeek:null, benefits:['允许 API 调用','支持 Codex CLI/CherryStudio'], note:'另有¥6.9/19.9/199一次性按量包·限时赠 OpenClaw 云端服务', tokenDaily:2800, tokenUnit:' 积分', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云', name:'Pro', monthly:499, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.1','MiniMax-M2.5','GLM-5','Kimi-K2.5','DeepSeek-V3.2'], req5h:null, reqMonth:null, reqWeek:null, benefits:['允许 API 调用','支持 Codex CLI/CherryStudio'], note:'积分制·限时赠 OpenClaw 云端服务·允许客户端/API 场景', tokenDaily:7000, tokenUnit:' 积分', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },

  // 腾讯·Coding - Coding Plan（按请求次数），仅月付，无季付/年付；Lite限量抢购（每天10点），首月¥7.9；Pro首月¥39.9
  // 2026.04.11实测：页面仅显示"1月 日常价：40元/200元"，无季付/年付选项
  // 2026.04.10核对：活动页明确写每周请求数，reqWeek=9000/45000
  { platform:'腾讯·Coding', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:7.9,
    models:['HY-2.0','GLM-5','Kimi-K2.5','MiniMax-M2.5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['企业生态强'], note:'仅月付·Coding Plan·首月¥7.9·Lite限量抢购', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Coding', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:39.9,
    models:['HY-2.0','GLM-5','Kimi-K2.5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['企业生态强'], note:'仅月付·Coding Plan·首月¥39.9', link:'https://curl.qcloud.com/1Uogyigq' },

  // 腾讯·Token - Token Plan（按 Token 额度计费），4月3日上线，兼容 Claude Code/Cursor/OpenClaw 等
  // 文档：https://cloud.tencent.com/document/product/1772/129449
  // 注意：仅限 AI 工具使用，禁止 API 调用（违者封禁）；暂不支持多模态
  // 2026.04.10核对：Token Plan无请求数概念，reqWeek=null
  { platform:'腾讯·Token', name:'Lite', monthly:39, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['3500万 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'], note:'Token Plan·约70轮问答·禁API调用', tokenMonth:3500, link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Standard', monthly:99, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['1亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'], note:'Token Plan·约200轮问答·禁API调用', tokenMonth:10000, link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Pro', monthly:299, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['3.2亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'], note:'Token Plan·高频AI开发·禁API调用', tokenMonth:32000, link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Max', monthly:599, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['6.5亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'], note:'Token Plan·重度开发首选·禁API调用', tokenMonth:65000, link:'https://curl.qcloud.com/1Uogyigq' },

  // 百度·千帆 - 2月11日上线；每日10:30和17:00限量补货，Lite首月¥9.9
  // 2026.04.10核对：帮助文档明确写每周限额，reqWeek=9000/45000
  { platform:'百度·千帆', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:9.9,
    models:['Kimi-K2.5','DeepSeek-V3.2','GLM-5','MiniMax-M2.5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:[], note:'每日10:30/17:00限量补货', link:'https://cloud.baidu.com/campaign/ambassador-product/index.html?ambassadorId=b00e3bb5d042440fbfaccf545e8e52f0#knowledge-model' },
  { platform:'百度·千帆', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['Kimi-K2.5','DeepSeek-V3.2','GLM-5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:[], note:'每日10:30/17:00限量补货', link:'https://cloud.baidu.com/campaign/ambassador-product/index.html?ambassadorId=b00e3bb5d042440fbfaccf545e8e52f0#knowledge-model' },

  // 讯飞星辰 - MaaS平台 Astron Coding Plan，焕新版(4.9上线)3档套餐，按请求次数流控
  // 官方文档：https://www.xfyun.cn/doc/spark/CodingPlan.html
  // 2026.04.11核实：焕新版名称为无忧版/专业版/高效版（旧版称入门版/专业版/高效版）
  // 无忧版：请求次数不限（按日Tokens流控）；专业版：req5h=1200/reqWeek=9000/reqMonth=18000；高效版：req5h=6000/reqWeek=45000/reqMonth=90000
  // 焕新版周限额每周一00:00(UTC+8)重置；5h限额滑动窗口刷新
  { platform:'讯飞星辰', name:'无忧版', monthly:19, quarterly:null, yearly:null, firstMonth:3.9,
    models:['Qwen3.5-35B-A3B','DeepSeek-V3.2','GLM-4.7-Flash'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['每日2000万Tokens','QPS 20'], note:'焕新版(4.9)无忧版·请求次数不限·按日Tokens流控·首月¥3.9', tokenDaily:2000, link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },
  { platform:'讯飞星辰', name:'专业版', monthly:39, quarterly:null, yearly:null, firstMonth:7.9,
    models:['Spark X2','Qwen3.5-35B-A3B','DeepSeek-V3.2','GLM-4.7-Flash','GLM-5','MiniMax-M2.5','Kimi-K2.5'], req5h:1200, reqMonth:18000, reqWeek:9000,
    benefits:['每5h最多1200次请求','每周最多9000次请求','QPS 5'], note:'焕新版(4.9)专业版·Spark X2独家·每周9000次·每周一00:00重置', link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },
  { platform:'讯飞星辰', name:'高效版', monthly:199, quarterly:null, yearly:null, firstMonth:39.9,
    models:['Spark X2','Qwen3.5-35B-A3B','DeepSeek-V3.2','GLM-4.7-Flash','GLM-5','MiniMax-M2.5','Kimi-K2.5'], req5h:6000, reqMonth:90000, reqWeek:45000,
    benefits:['每5h最多6000次请求','每周最多45000次请求','QPS 20'], note:'焕新版(4.9)高效版·Spark X2独家·每周45000次·每周一00:00重置', link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },

  // 小米·MiMo - 4月3日上线 Token Plan，统一 Credit 体系，首购88折（仅限一次）
  // Credit 倍率：MiMo-V2-Omni 256k→1x, MiMo-V2-Pro 256k→2x, MiMo-V2-Pro 256k~1M→4x, MiMo-V2-TTS→0x（限时免费）
  // 2026.04.10核对：Token Plan无请求数概念，reqWeek=null
  { platform:'小米·MiMo', name:'Lite', monthly:39, quarterly:null, yearly:null, firstMonth:34.32,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['兼容 Claude Code/OpenCode/OpenClaw'], note:'首购88折·Credit≠Token(Pro=2x/Omni=1x)·性价比低于同行', tokenMonth:6000, tokenUnit:' Credits', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Standard', monthly:99, quarterly:null, yearly:null, firstMonth:87.12,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['兼容 Claude Code/OpenCode/OpenClaw'], note:'首购88折·3.3× Lite用量·性价比低于同行', tokenMonth:20000, tokenUnit:' Credits', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Pro', monthly:329, quarterly:null, yearly:null, firstMonth:289.52,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['兼容 Claude Code/OpenCode/OpenClaw'], note:'首购88折·11.7× Lite用量·性价比低于同行', tokenMonth:70000, tokenUnit:' Credits', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Max', monthly:659, quarterly:null, yearly:null, firstMonth:579.92,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['兼容 Claude Code/OpenCode/OpenClaw'], note:'首购88折·26.7× Lite用量·性价比低于同行', tokenMonth:160000, tokenUnit:' Credits', link:'https://platform.xiaomimimo.com/#/token-plan' },

  // 无问芯穹 — 2档套餐，多模型聚合，首月5折优惠
  // 2026.04.07更新：首月优惠已从公开页面隐藏，两档均显示"暂时售罄"
  // 2026.04.11通过已登录Edge实测：docs.infini-ai.com官方文档明确显示每周/每月限额，已支持GLM-5.1
  { platform:'无问芯穹', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:19.9,
    models:['DeepSeek-V3.2','MiniMax-M2.5','Kimi-K2.5','GLM-5.1','GLM-5'], req5h:1000, reqMonth:12000, reqWeek:6000, benefits:['多模型聚合','月费最低'], note:'首月¥19.9(页面已隐藏)·暂时售罄·次月¥40·月限额12000·已支持GLM-5.1', link:'https://cloud.infini-ai.com/login?redirect=/genstudio/invitation&invite_code=qYRvZBVl' },
  { platform:'无问芯穹', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:99.9,
    models:['DeepSeek-V3.2','MiniMax-M2.5','Kimi-K2.5','GLM-5.1','GLM-5'], req5h:5000, reqMonth:60000, reqWeek:30000, benefits:['5倍Lite用量','专业高级场景'], note:'首月¥99.9(页面已隐藏)·暂时售罄·次月¥200·月限额60000·已支持GLM-5.1', link:'https://cloud.infini-ai.com/login?redirect=/genstudio/invitation&invite_code=qYRvZBVl' },
];
// ===== Platform Ratings =====
const RATINGS = [
  {
    name: '智谱AI', score: 5,
    reasons: ['独家 GLM-5.1（3月27日上线）', '免费 MCP 调用额度', '20+ 编程工具支持']
  },
  {
    name: 'z.ai', score: 2,
    reasons: ['⚠️ 2026.04.11价格暴涨：月付涨至$18/$72/$160(涨幅80%)，年付涨至$172/$691/$1536(涨幅130%)', '相比国内同行无性价比·美元计费月付已是国内月付的3~5倍', 'GLM-5.1/GLM-5 全模型支持·季付-10%/年付-20%优惠·MCP 免费调用']
  },
  {
    name: 'Kimi', score: 3,
    reasons: ['独家 Kimi-K2.5 / Kimi-K2', '请求数未公开', '年付折扣可观']
  },
  {
    name: 'MiniMax', score: 5,
    reasons: ['定价最低无需抢购', '独家 MiniMax-M2.7', '已升级 Token Plan·赠多模态额度']
  },
  {
    name: '字节·方舟', score: 3,
    reasons: ['计费不透明·无用量明细·蓝点网/微博多源实锤', '速度慢·超卖严重·付费仍用数据训练', '首月¥8.9·支持Doubao/Kimi/GLM/MiniMax多模型']
  },
  {
    name: '阿里·百炼', score: 4,
    reasons: ['支持 Qwen3.5-Plus / Qwen3-Coder 系列', 'Lite 停止新购·Pro 当前暂时售罄', '固定¥200/月·每月90,000次请求']
  },
  {
    name: '天翼云', score: 5,
    reasons: ['除智谱官方外唯一支持 GLM-5.1', 'GLM 全家桶覆盖最完整', '第三方测速上游·GLM-5-Turbo 速度表现好']
  },
  {
    name: '优云', score: 3,
    reasons: ['允许 API 调用·支持 Codex CLI/CherryStudio', '按量包+包月并存·套餐形态灵活', '积分制换算复杂·个别模型存在异常波动']
  },
  {
    name: '京东云', score: 4,
    reasons: ['支持 DeepSeek-V3.2 / GLM-5 / Qwen3-Coder', '7 模型覆盖·兼容 Claude Code/Cursor/OpenClaw', '价格标准·第三方测速中上游']
  },
  {
    name: '联通云', score: 3,
    reasons: ['6 模型覆盖·兼容 Claude Code/OpenCode/OpenClaw', '标准 Lite/Pro 定价·支持动态模型路由', '当前资源紧张·Kimi 通道稳定性明显偏弱']
  },
  {
    name: '腾讯·Coding', score: 3,
    reasons: ['Coding Plan·按请求次数计费', '首月¥7.9·Lite 限量抢购', '支持 GLM-5 / Kimi-K2.5 / MiniMax-M2.5']
  },
  {
    name: '移动云', score: 2,
    reasons: ['首月¥7.9 / ¥39.9·价格友好', '仅 MiniMax-M2.5·可选模型明显偏少', '第三方测速 TTFT 偏慢·且仅特定资源池可购']
  },
  {
    name: '腾讯·Token', score: 2,
    reasons: ['Token Plan·按 Token 计费更透明', '7 模型覆盖（HY 2.0 Think/T1/TurboS 独家）', '¥39 起·兼容 Claude Code/Cursor/OpenClaw']
  },
  {
    name: '百度·千帆', score: 3,
    reasons: ['支持文心4.5Turbo / DeepSeek-V3.2', '每日10:30/17:00限量补货', '首月¥9.9']
  },
  {
    name: '讯飞星辰', score: 2,
    reasons: ['焕新版(4.9)专业版/高效版有周限·无忧版不限请求', '支持Spark X2/GLM-5/Kimi/MiniMax/DeepSeek', '焕新版后为请求次数流控（非日Tokens）']
  },
  {
    name: '小米·MiMo', score: 1,
    reasons: ['Credit≠Token·Pro 2x/Omni 1x 实际缩水', '¥39 仅 30M token(Pro)·性价比远低于同行', '兼容 Claude Code 但定价无竞争力']
  },
  {
    name: '无问芯穹', score: 3,
    reasons: ['Lite首月¥19.9·次月¥40', 'Pro首月¥99.9·次月¥200', '多模型聚合（DeepSeek/Kimi/GLM/MiniMax）']
  }
];
