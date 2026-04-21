// ===== Plans Data =====
const PLANS = [
  // 智谱AI - 官网实测：月付/季付(9折)/年付(8折)，2月12日已涨价30%起，取消首购优惠
  // 2026.04.07更新：Lite移除GLM-5，新增GLM-4.x系列；Pro/Max保留GLM-5
  // 2026.04.11通过已登录Edge实测：docs.bigmodel.cn官方文档明确显示每周限额
  // 每周限额为prompts数，换算请求数×15（每次prompt约15-20次模型调用）；月限额为API定价折算估算值
  // 2026.04.17核对：文档页模型列表更新为「所有套餐均支持 GLM-5.1、GLM-5-Turbo、GLM-4.7、GLM-4.5-Air」；GLM-4.6/GLM-4.5已下线
  // 2026.04.20核对：文档页显示Max每月约32000 prompts (480000次调用)，更新为与文档一致
  { platform:'智谱AI', name:'Lite', monthly:49, quarterly:132.3, yearly:470.4, firstMonth:null,
    models:['GLM-5.1','GLM-5-Turbo','GLM-4.7','GLM-4.5-Air'], req5h:1200, reqMonth:24000, reqWeek:6000, benefits:['免费MCP','20+编程工具'], note:'季付¥44.1/月·年付¥39.2/月·Lite不含GLM-5·高阶模型高峰3x/非高峰2x抵扣·实际可用量约为标称1/2~1/3', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },
  { platform:'智谱AI', name:'Pro', monthly:149, quarterly:402.3, yearly:1430.4, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.5-Air'], req5h:6000, reqMonth:120000, reqWeek:30000, benefits:['免费MCP','优先体验新模型'], note:'季付¥134.1/月·年付¥119.2/月·Pro含GLM-5·高阶模型高峰3x/非高峰2x抵扣·实际可用量约为标称1/2~1/3', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },
  { platform:'智谱AI', name:'Max', monthly:469, quarterly:1266.3, yearly:4502.4, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.5-Air'], req5h:24000, reqMonth:480000, reqWeek:120000, benefits:['免费MCP','高峰期专属资源'], note:'季付¥422.1/月·年付¥375.2/月·Max含GLM-5·高阶模型高峰3x/非高峰2x抵扣·实际可用量约为标称1/2~1/3', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },

  // z.ai（智谱国际版）- ⚠️ 2026.04.11价格大幅上调！
  // 月付: $18/$72/$160（Lite/Pro/Max）；季付: $54/$216/$480（首季$43.74/$174.96/$388.8享Friend Gift 10%）
  // 年付: $172.80/$691.20/$1536（首年$155.52/$622.08/$1382.4享-20%）；Friend Gift享10%优惠
  // 原价月付$10/$30/$80→现价$18/$72/$160涨幅约80%；年付从$75/$226/$604涨至$172.80/$691.20/$1536涨幅约130%
  // 页面显示prompts数，按1prompt≈15次调用折算为请求数；reqWeek=null（页面未公开周限额）
  // 支持模型不变；支持月付/季付/年付三种方式
  // 2026.04.17核对：月付/季付/年付价格不变；Friend Gift首月10%优惠（Lite $16.2/Pro $64.8/Max $144首月）
  { platform:'z.ai', name:'Lite', monthly:18, quarterly:54, yearly:172.80, firstMonth:null,
    models:['GLM-5.1','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5-Air'], req5h:1200, reqMonth:24000, reqWeek:6000, benefits:['3× Claude Pro 用量','兼容 Claude Code/Cursor/Cline 等 20+ 工具'], note:'⚠️月付$18·季付$54·年付$172.8·Friend Gift首月10%优惠($16.2)·沿用智谱同档位周/月请求数口径·高阶模型高峰3x/非高峰2x抵扣·实际可用量约为标称1/2~1/3', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },
  { platform:'z.ai', name:'Pro', monthly:72, quarterly:216, yearly:691.20, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5-Air'], req5h:6000, reqMonth:120000, reqWeek:30000, benefits:['5× Lite 用量','优先体验新模型','40%-60% 更快响应'], note:'⚠️月付$72·季付$216·年付$691.2·Friend Gift首月10%优惠($64.8)·沿用智谱同档位周/月请求数口径·高阶模型高峰3x/非高峰2x抵扣·实际可用量约为标称1/2~1/3', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },
  { platform:'z.ai', name:'Max', monthly:160, quarterly:480, yearly:1536, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5-Air'], req5h:24000, reqMonth:600000, reqWeek:120000, benefits:['4× Pro 用量','高峰期保证性能','抢先体验新模型'], note:'⚠️月付$160·季付$480·年付$1536·Friend Gift首月10%优惠($144)·沿用智谱同档位周/月请求数口径·高阶模型高峰3x/非高峰2x抵扣·实际可用量约为标称1/2~1/3', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },

  // OpenCode Go - 2026.04.14 核对中文文档页；当前为单档订阅，限额按美元预算而非固定请求数
  // 官方说明：首月 $5，次月起 $10；5h / 周 / 月预算分别为 $12 / $30 / $60，实际请求数随模型成本变化
  // 2026.04.17核对：文档(2026-04-16更新)新增 Qwen3.5 Plus / Qwen3.6 Plus / MiniMax M2.7
  { platform:'OpenCode Go', name:'Go', currency:'$', monthly:10, quarterly:null, yearly:null, firstMonth:5,
    models:['Qwen3.6-Plus','GLM-5.1','MiniMax-M2.7','kimi-k2.6','Kimi-K2.5','qwen3.5','qwen3-next','MiniMax-M2.5','MiMo-V2-Pro','MiMo-V2-Omni'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['首月$5','OpenCode 原生接入'], note:'Beta·5h预算$12·每周$30·每月$60·实际请求数随模型而变·可切换为超额使用 Zen 余额', link:'https://opencode.ai/zh/go' },

  // Kimi - 官网实测：连续包月原价/连续包年折扣价
  // 2026.04.14更新：Kimi Code 页面显示 K2.6-code-preview 已上线；全部 Kimi Code Plan 可使用
  { platform:'Kimi', name:'Andante', monthly:49, quarterly:null, yearly:468, firstMonth:39,
    models:['kimi-k2.6','Kimi-K2.5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['专属编程额度','旗舰模型抢先体验'], note:'年付¥39/月·连续包年首月¥39·K2.6已上线·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Moderato', monthly:99, quarterly:null, yearly:948, firstMonth:79,
    models:['kimi-k2.6','Kimi-K2.5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['每周更新额度','多设备共享'], note:'年付¥79/月·连续包年首月¥79·K2.6已上线·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Allegretto', monthly:199, quarterly:null, yearly:1908, firstMonth:159,
    models:['kimi-k2.6','Kimi-K2.5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['充足每周额度','高并发上限'], note:'年付¥159/月·连续包年首月¥159·K2.6已上线·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Allegro', monthly:699, quarterly:null, yearly:6708, firstMonth:559,
    models:['kimi-k2.6','Kimi-K2.5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['澎湃额度','高强度开发'], note:'年付¥559/月·连续包年首月¥559·K2.6已上线·请求数未公开', link:'https://www.kimi.com/code/zh' },

  // MiniMax - Token Plan（3月23日升级），不同套餐开放不同的语音/视频/音乐/图像额度
  // 2026.04.11实测：Token Plan 规则为"每周可使用额度为『每5小时额度』的 10 倍" → reqWeek = req5h × 10
  { platform:'MiniMax', name:'Starter', monthly:29, quarterly:null, yearly:290, firstMonth:null,
    models:['MiniMax-M2.7','Music-2.6'], req5h:600, reqMonth:9000, reqWeek:6000, benefits:['TPS ~50','Token Plan'], note:'年付¥24.2/月·Music-2.6当前100首/天限免·reqWeek=req5h×10·每周6000次·每5h额度滑动刷新', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Plus', monthly:49, quarterly:null, yearly:490, firstMonth:null,
    models:['MiniMax-M2.7','speech-2.8-hd','speech-2.6-hd','speech-02-hd','Music-2.6','image-01'], req5h:1500, reqMonth:22500, reqWeek:15000, benefits:['TPS ~50','赠多模态额度（语音/音乐/图像）'], note:'年付¥40.8/月·TTS HD / Music-2.6 / image-01已开放·reqWeek=req5h×10=15000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Max', monthly:119, quarterly:null, yearly:1190, firstMonth:null,
    models:['MiniMax-M2.7','speech-2.8-hd','speech-2.6-hd','speech-02-hd','Hailuo-2.3-Fast','Hailuo-2.3','Music-2.6','image-01'], req5h:4500, reqMonth:67500, reqWeek:45000, benefits:['TPS ~50','赠多模态额度（视频/语音/音乐/图像）'], note:'年付¥99.2/月·Hailuo-2.3 / TTS HD / Music-2.6 / image-01已开放·reqWeek=req5h×10=45000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Plus 极速版', monthly:98, quarterly:null, yearly:980, firstMonth:null,
    models:['MiniMax-M2.7','speech-2.8-hd','speech-2.6-hd','speech-02-hd','Music-2.6','image-01'], req5h:1500, reqMonth:22500, reqWeek:15000, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan·极速版·TTS HD / Music-2.6 / image-01已开放·reqWeek=req5h×10=15000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Max 极速版', monthly:199, quarterly:null, yearly:1990, firstMonth:null,
    models:['MiniMax-M2.7','speech-2.8-hd','speech-2.6-hd','speech-02-hd','Hailuo-2.3-Fast','Hailuo-2.3','Music-2.6','image-01'], req5h:4500, reqMonth:67500, reqWeek:45000, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan·极速版·Hailuo-2.3 / TTS HD / Music-2.6 / image-01已开放·reqWeek=req5h×10=45000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },
  { platform:'MiniMax', name:'Ultra 极速版', monthly:899, quarterly:null, yearly:8990, firstMonth:null,
    models:['MiniMax-M2.7','speech-2.8-hd','speech-2.6-hd','speech-02-hd','Hailuo-2.3-Fast','Hailuo-2.3','Music-2.6','image-01'], req5h:30000, reqMonth:450000, reqWeek:300000, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan·极速版·Hailuo-2.3 / TTS HD / Music-2.6 / image-01已开放·reqWeek=req5h×10=300000', link:'https://platform.minimaxi.com/subscribe/token-plan?code=G2vbq30tXz&source=link' },

  // 字节·方舟 - 首月Lite约¥8.9，支持Doubao-Seed-2.0-pro/lite/Code系列/DeepSeek-V3.2/Kimi-K2.5/GLM-4.7
  // ⚠️ 双层计费：名义按调用次数，实际Token消耗大会被按2-3次甚至更多次扣费（蓝点网/V2EX/微博多源证实）
  // 2026.04.11通过已登录Edge实测：volcengine.com/docs/82379/2165245页面中间位置显示每周限额，reqWeek=9000/45000
  // 2026.04.16：页面新增「包季」按钮，季付=月付×3（Lite ¥120，Pro ¥600）
  // 2026.04.17核对：文档(2026-04-13更新)新增Doubao-Seed-2.0-Code模型；Auto智能路由模式；Kimi-K2-thinking已于3月31日下线
  { platform:'字节·方舟', name:'Lite', monthly:40, quarterly:120, yearly:null, firstMonth:null,
    models:['Doubao-Seed-2.0-pro','Doubao-Seed-2.0-lite','Doubao-Seed-2.0-Code','Doubao-Seed-Code','DeepSeek-V3.2','Kimi-K2.5','GLM-4.7','MiniMax-M2.5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['ArkClaw 7天试用','Auto智能选模型','联网搜索免费额度'], note:'首月优惠已结束(原¥8.9)·⚠双层计费·额度消耗远快于同行·每周一00:00刷新·新增Doubao-Seed-2.0-Code', link:'https://volcengine.com/L/jmiEa1dptck/' },
  { platform:'字节·方舟', name:'Pro', monthly:200, quarterly:600, yearly:null, firstMonth:null,
    models:['Doubao-Seed-2.0-pro','Doubao-Seed-2.0-lite','Doubao-Seed-2.0-Code','Doubao-Seed-Code','DeepSeek-V3.2','Kimi-K2.5','GLM-4.7','MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['免费ArkClaw','Auto智能选模型','联网搜索免费额度'], note:'首月优惠已结束(原¥49.9)·⚠双层计费·Pro三四天可用完月额度·每周一00:00刷新·新增Doubao-Seed-2.0-Code', link:'https://volcengine.com/L/jmiEa1dptck/' },

  // 阿里·百炼 - Lite套餐已停止新购（2026.03.20起），4月13日起停止续费与升级；当前仅显示Pro套餐
  // 2026.04.11核对：官方Coding Plan概述页显示qwen3.6-plus为Pro专属权益；控制台显示Pro暂时售罄
  // 2026.04.10核对：帮助文档明确写"每周45,000次请求"，reqWeek=45000
  // 2026.04.17核对：文档(2026-04-14更新)确认Lite 4/13起停止续费升级；首续5折活动4/1结束；Pro限量抢购·每日09:30补货
  // 2026.04.20核对：页面显示Pro仍为售罄状态，每周45000次请求限额信息未变
  { platform:'阿里·百炼', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['Qwen3.6-Plus','Qwen3.5-Plus','Qwen3-Coder-Next','Qwen3-Coder-Plus','Qwen3-Max-2026-01-23','GLM-5','GLM-4.7','Kimi-K2.5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['多模型自由切换'], note:'Lite已停止新购(3.20)及续费(4.13)·Pro专属Qwen3.6-Plus·Pro限量抢购·每日09:30补货·首续5折4/1结束·每周45000次', link:'https://www.aliyun.com/minisite/goods?userCode=hun0t0sf' },

  // 京东云 - JoyBuilder Coding Plan，帮助文档更新于 2026.04.03；活动规则页显示首购优惠持续到 2026.06.30，每天10:30限量开放
  // 官方宣称高峰期无明显降速；社区有截断/卡顿与未到 5h 上限触发 rate_limit 的反馈
  // 2026.04.11通过已登录Edge实测：docs.jdcloud.com套餐页明确显示每周限额，reqWeek=9000/45000
  { platform:'京东云', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:19.9,
    models:['DeepSeek-V3.2','GLM-5','GLM-4.7','MiniMax-M2.5','Kimi-K2.5','Kimi-K2-Turbo','Qwen3-Coder'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['多工具额度共享','支持主流 AI 编程工具'], note:'首月¥19.9·每天10:30限量·禁API调用', link:'https://3.cn/2-L8H4QY' },
  { platform:'京东云', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:99.9,
    models:['DeepSeek-V3.2','GLM-5','GLM-4.7','MiniMax-M2.5','Kimi-K2.5','Kimi-K2-Turbo','Qwen3-Coder'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['5× Lite 用量','支持主流 AI 编程工具'], note:'首月¥99.9·每天10:30限量·禁API调用', link:'https://3.cn/2-L8H4QY' },

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
  // 2026.04.17核实：文档(2026-04-15更新)新增包年套餐选项（价格未公开）；限时福利GLM-5.1/5-Turbo非高峰期1x抵扣至4月底
  { platform:'天翼云', name:'GLM Lite', monthly:49, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:1200, reqMonth:24000, reqWeek:6000, benefits:['GLM 全家桶','支持 Claude Code/OpenCode/OpenClaw/Cline'], note:'暂时售罄·每日10:00补货·高阶模型高峰3x/非高峰2x抵扣·实际可用量约为标称1/2~1/3', link:'https://ctxirang.ctyun.cn/maas/codingPlan' },
  { platform:'天翼云', name:'GLM Pro', monthly:149, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:6000, reqMonth:120000, reqWeek:30000, benefits:['GLM 全家桶','低峰期动态提升并发'], note:'暂时售罄·每日10:00补货·GLM-5/5.1/5-Turbo 用量消耗更快·实际可用量约为标称1/2~1/3', link:'https://ctxirang.ctyun.cn/maas/codingPlan' },
  { platform:'天翼云', name:'GLM Max', monthly:469, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5-Air'], req5h:24000, reqMonth:480000, reqWeek:120000, benefits:['GLM 全家桶','推荐 2+ 项目并发开发'], note:'暂时售罄·每日10:00补货·高阶模型倍率抵扣影响实际可用量·实际可用量约为标称1/2~1/3', link:'https://ctxirang.ctyun.cn/maas/codingPlan' },

  // 联通云 - Coding Plan 概述文档显示当前资源紧张；限流时会自动切换到负载更轻模型，套餐页为 Lite / Pro 两档
  // 仅允许 AI 编程工具使用，严禁 API 调用；当前公开文档主入口为帮助中心
  // 2026.04.11通过已登录Edge实测：support.cucloud.cn文档明确显示每周限额，reqWeek=9000/45000，已支持GLM-5.1
  // 2026.04.17核实：文档更新(2026-04-16)，新增广州一区/武汉四区可用；武汉四区支持GLM-5/Kimi-K2.5；DeepSeek-V3.1已从模型列表移除
  { platform:'联通云', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','GLM-5.1','GLM-5','Kimi-K2.5','Qwen3.5-397B-A17B','Qwen3-235B-A22B'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['多模型动态路由','兼容 Claude Code/OpenCode/OpenClaw/CoPaw'], note:'资源紧张·贵阳/济南/广州/武汉可用·禁API调用·武汉四区支持GLM-5/Kimi-K2.5', link:'https://support.cucloud.cn/document/127/591/2357.html?id=2357&arcid=7015' },
  { platform:'联通云', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','GLM-5.1','GLM-5','Kimi-K2.5','Qwen3.5-397B-A17B','Qwen3-235B-A22B'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['多模型动态路由','兼容 Claude Code/OpenCode/OpenClaw/CoPaw'], note:'资源紧张·限流时自动切模型·禁API调用·武汉四区支持GLM-5/Kimi-K2.5', link:'https://support.cucloud.cn/document/127/591/2357.html?id=2357&arcid=7015' },

  // 蓝耘元生代云 - 2026.04.15 核对官方 Coding Plan 活动页；三模型混合套餐，季付9折、年付8折
  // 页面明确显示 MiniMax-M2.5 / Step-3.5-Flash / GLM-5.1 三模型通用；采用每5小时+每周双维度限制
  // 官方入口购买页使用 maas 控制台，站外活动页说明购买不可叠加代金券/优惠券
  { platform:'蓝耘元生代云', name:'入门版', monthly:49, quarterly:132.3, yearly:470.4, firstMonth:null,
    models:['MiniMax-M2.5','Step-3.5-Flash','GLM-5.1'], req5h:1200, reqMonth:null, reqWeek:6000, benefits:['三模型通用','兼容 Claude Code/OpenCode/Cline'], note:'季付9折·年付8折·每5小时1200次·每周6000次·独立API Key·不可叠加券', link:'https://console.lanyun.net/#/register?promoterCode=3ef0f72996' },
  { platform:'蓝耘元生代云', name:'专业版', monthly:149, quarterly:402.3, yearly:1430.4, firstMonth:null,
    models:['MiniMax-M2.5','Step-3.5-Flash','GLM-5.1'], req5h:6000, reqMonth:null, reqWeek:30000, benefits:['三模型通用','复杂开发任务支持'], note:'季付9折·年付8折·每5小时6000次·每周30000次·优先技术支持·不可叠加券', link:'https://console.lanyun.net/#/register?promoterCode=3ef0f72996' },
  { platform:'蓝耘元生代云', name:'高级版', monthly:469, quarterly:1266.3, yearly:4502.4, firstMonth:null,
    models:['MiniMax-M2.5','Step-3.5-Flash','GLM-5.1'], req5h:24000, reqMonth:null, reqWeek:120000, benefits:['三模型通用','企业级 SLA 优化'], note:'季付9折·年付8折·每5小时24000次·每周120000次·团队协作优化·不可叠加券', link:'https://console.lanyun.net/#/register?promoterCode=3ef0f72996' },

  // 腾讯·Coding - Coding Plan（按请求次数），仅月付，无季付/年付；Lite限量抢购（每天10点），首月¥7.9；Pro首月¥39.9
  // 2026.04.11实测：页面仅显示"1月 日常价：40元/200元"，无季付/年付选项
  // 2026.04.10核对：活动页明确写每周请求数，reqWeek=9000/45000
  { platform:'腾讯·Coding', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:7.9,
    models:['HY-2.0','GLM-5','Kimi-K2.5','MiniMax-M2.5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['企业生态强'], note:'仅月付·Coding Plan·Lite限量抢购·首月优惠已结束',    link:'https://cloud.tencent.com/document/product/1823/130092' },
  { platform:'腾讯·Coding', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:39.9,
    models:['HY-2.0','GLM-5','Kimi-K2.5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['企业生态强'], note:'仅月付·Coding Plan·首月¥39.9', link:'https://cloud.tencent.com/document/product/1823/130092' },

  // 百度·千帆 - 2月11日上线；每日10:30和17:00限量补货
  // 2026.04.10核对：帮助文档明确写每周限额，reqWeek=9000/45000
  // 2026.04.17核实：首月¥9.9优惠已取消，页面显示"AI编程场景专享，首月40元"
  { platform:'百度·千帆', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:null,
    models:['Kimi-K2.5','DeepSeek-V3.2','GLM-5','MiniMax-M2.5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:[], note:'每日10:30/17:00限量补货', link:'https://cloud.baidu.com/campaign/ambassador-product/index.html?ambassadorId=b00e3bb5d042440fbfaccf545e8e52f0#knowledge-model' },
  { platform:'百度·千帆', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['Kimi-K2.5','DeepSeek-V3.2','GLM-5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:[], note:'每日10:30/17:00限量补货', link:'https://cloud.baidu.com/campaign/ambassador-product/index.html?ambassadorId=b00e3bb5d042440fbfaccf545e8e52f0#knowledge-model' },

  // 讯飞星辰 - MaaS平台 Astron Coding Plan，焕新版(4.9上线)3档套餐，按请求次数流控
  // 官方文档：https://www.xfyun.cn/doc/spark/CodingPlan.html
  // 2026.04.13核实：文档v2.1 + 已登录Edge订阅页“订阅新套餐”弹窗
  // 无忧版支持 Qwen3.5-35B-A3B / Qwen3-Coder-Next-FP8 / GLM-4.7-Flash
  // 专业版支持 Spark X2 / GLM-5 / MiniMax-M2.5 / Kimi-K2.5 / DeepSeek-V3.2 / GLM-4.7-Flash / Qwen3.5-35B-A3B / Qwen3-Coder-Next-FP8 / Qwen3.5-397B-A17B
  // 高效版比专业版额外开放 GLM-5.1；无忧版请求次数不限；专业版 req5h=1200/reqWeek=9000/reqMonth=18000；高效版 req5h=6000/reqWeek=45000/reqMonth=90000
  // 焕新版5h/周/月流控均按支付时间滑动统计；5h每整点刷新，周流控次日08:00:00(UTC+8)重置
  { platform:'讯飞星辰', name:'无忧版', monthly:19, quarterly:null, yearly:null, firstMonth:3.9,
    models:['Qwen3.5-35B-A3B','Qwen3-Coder-Next-FP8','GLM-4.7-Flash'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:[], note:'焕新版(4.9)无忧版·首购¥3.9·重复购买¥19·请求次数不限·完整列表以订阅页为准', link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },
  { platform:'讯飞星辰', name:'专业版', monthly:39, quarterly:null, yearly:null, firstMonth:null,
    models:['Spark X2','GLM-5','MiniMax-M2.5','Kimi-K2.5','DeepSeek-V3.2','GLM-4.7-Flash','Qwen3.5-35B-A3B','Qwen3-Coder-Next-FP8','Qwen3.5-397B-A17B'], req5h:1200, reqMonth:18000, reqWeek:9000,
    benefits:[], note:'焕新版(4.9)专业版·¥39/月·主力模型精简展示·完整列表以订阅页为准·次日08:00刷新', link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },
  { platform:'讯飞星辰', name:'高效版', monthly:199, quarterly:null, yearly:null, firstMonth:null,
    models:['Spark X2','GLM-5','GLM-5.1','MiniMax-M2.5','Kimi-K2.5','DeepSeek-V3.2','GLM-4.7-Flash','Qwen3.5-35B-A3B','Qwen3-Coder-Next-FP8','Qwen3.5-397B-A17B'], req5h:6000, reqMonth:90000, reqWeek:45000,
    benefits:[], note:'焕新版(4.9)高效版·¥199/月·主力模型精简展示·完整列表以订阅页为准·次日08:00刷新', link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },

  // 阶跃星辰 - Step Plan 概览页于 2026.04.14 核对；当前 4 档套餐均为月付，使用 Prompt 作为计量单位
  // 文档明确 1 Prompt≈15~20 次模型调用；这里按 1 Prompt≈15 次模型调用折算 req5h / reqWeek，月总额度未公开
  // 2026.04.17核对：新增 stepaudio-2.5-tts 语音模型；MCP 暂未上线；官方专用 Base URL 为 https://api.stepfun.com/step_plan/v1
  { platform:'阶跃星辰', name:'Flash Mini', monthly:49, quarterly:null, yearly:null, firstMonth:null,
    models:['Step 3.5 Flash 2603','Step 3.5 Flash','StepAudio-2.5-TTS'], req5h:1500, reqMonth:null, reqWeek:6000,
    benefits:['Step 3.5 Flash 系列','支持主流 Agent 工具'], note:'入门版·100 Prompt / 5h≈1500次模型调用·周限400 Prompt≈6000次·支持微信/Stripe·新增TTS语音模型', link:'https://platform.stepfun.com/docs/zh/step-plan/overview' },
  { platform:'阶跃星辰', name:'Flash Plus', monthly:99, quarterly:null, yearly:null, firstMonth:null,
    models:['Step 3.5 Flash 2603','Step 3.5 Flash','StepAudio-2.5-TTS'], req5h:6000, reqMonth:null, reqWeek:24000,
    benefits:['Step 3.5 Flash 系列','支持主流 Agent 工具'], note:'进阶版·400 Prompt / 5h≈6000次模型调用·周限1600 Prompt≈24000次·MCP 暂未支持·新增TTS语音模型', link:'https://platform.stepfun.com/docs/zh/step-plan/overview' },
  { platform:'阶跃星辰', name:'Flash Pro', monthly:199, quarterly:null, yearly:null, firstMonth:null,
    models:['Step 3.5 Flash 2603','Step 3.5 Flash','StepAudio-2.5-TTS'], req5h:22500, reqMonth:null, reqWeek:90000,
    benefits:['Step 3.5 Flash 系列','支持主流 Agent 工具'], note:'专业版·1500 Prompt / 5h≈22500次模型调用·周限6000 Prompt≈90000次·适合复杂任务·新增TTS语音模型', link:'https://platform.stepfun.com/docs/zh/step-plan/overview' },
  { platform:'阶跃星辰', name:'Flash Max', monthly:699, quarterly:null, yearly:null, firstMonth:null,
    models:['Step 3.5 Flash 2603','Step 3.5 Flash','StepAudio-2.5-TTS'], req5h:75000, reqMonth:null, reqWeek:300000,
    benefits:['Step 3.5 Flash 系列','支持主流 Agent 工具'], note:'旗舰版·5000 Prompt / 5h≈75000次模型调用·周限2万 Prompt≈30万次·适合团队协作·新增TTS语音模型', link:'https://platform.stepfun.com/docs/zh/step-plan/overview' },

  // 快手 StreamLake - 2026.04.14 通过官网页 + 配置接口 + 商品接口核对；4 档月度计划已上线
  // 官方 FAQ 说明 1 Prompt≈15~20 次模型调用；这里按 1 Prompt≈15 次模型调用折算 req5h，周/月总额度暂未公开
  // 当前订阅与按量用户规格均为 60 RPM / 200万 TPM；订阅仅限 OpenClaw / Claude Code / OpenCode 等合规编程工具
  { platform:'快手 StreamLake', name:'Mini', monthly:29, quarterly:null, yearly:null, firstMonth:null,
    models:['KAT-Coder-Pro V2','KAT-Coder-Pro V1'], req5h:600, reqMonth:null, reqWeek:null,
    benefits:['KAT-Coder-Pro V2','支持 OpenClaw/Claude/OpenCode'], note:'40 Prompt / 5h≈600次模型调用·固定窗口计费·当前 60 RPM / 200万 TPM·禁止 API 二次集成', link:'https://www.streamlake.com/marketing/coding-plan' },
  { platform:'快手 StreamLake', name:'Starter', monthly:70, quarterly:null, yearly:null, firstMonth:null,
    models:['KAT-Coder-Pro V2','KAT-Coder-Pro V1'], req5h:1500, reqMonth:null, reqWeek:null,
    benefits:['KAT-Coder-Pro V2','支持 OpenClaw/Claude/OpenCode'], note:'100 Prompt / 5h≈1500次模型调用·适配日常核心开发场景·禁止 API 二次集成', link:'https://www.streamlake.com/marketing/coding-plan' },
  { platform:'快手 StreamLake', name:'Pro', monthly:140, quarterly:null, yearly:null, firstMonth:null,
    models:['KAT-Coder-Pro V2','KAT-Coder-Pro V1'], req5h:4500, reqMonth:null, reqWeek:null,
    benefits:['KAT-Coder-Pro V2','支持 OpenClaw/Claude/OpenCode'], note:'300 Prompt / 5h≈4500次模型调用·Starter 3倍用量·禁止 API 二次集成', link:'https://www.streamlake.com/marketing/coding-plan' },
  { platform:'快手 StreamLake', name:'Max', monthly:350, quarterly:null, yearly:null, firstMonth:null,
    models:['KAT-Coder-Pro V2','KAT-Coder-Pro V1'], req5h:15000, reqMonth:null, reqWeek:null,
    benefits:['KAT-Coder-Pro V2','支持 OpenClaw/Claude/OpenCode'], note:'1000 Prompt / 5h≈15000次模型调用·适合高强度开发·禁止 API 二次集成', link:'https://www.streamlake.com/marketing/coding-plan' },

  // 无问芯穹 — 2档套餐，多模型聚合，首月5折优惠已于2026.03.31结束
  // 2026.04.07更新：首月优惠已从公开页面隐藏，3月31日正式结束
  // 2026.04.11通过已登录Edge实测：docs.infini-ai.com官方文档明确显示每周/每月限额，已支持GLM-5.1
  // 2026.04.17核对：文档(2026-04-09更新)新增4个模型(DeepSeek-V3.2-Thinking/MiniMax-M2.1/MiniMax-M2.7/GLM-4.7)
  { platform:'无问芯穹', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:19.9,
    models:['DeepSeek-V3.2-Thinking','DeepSeek-V3.2','MiniMax-M2.7','MiniMax-M2.1','MiniMax-M2.5','GLM-4.7','Kimi-K2.5','GLM-5.1','GLM-5'], req5h:1000, reqMonth:12000, reqWeek:6000,    benefits:['多模型聚合','月费最低'], note:'首月5折优惠已结束(2026.03.31)·暂时售罄·次月¥40·月限额12000',link:'https://cloud.infini-ai.com/login?redirect=/genstudio/invitation&invite_code=qYRvZBVl' },
  { platform:'无问芯穹', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:99.9,
    models:['DeepSeek-V3.2-Thinking','DeepSeek-V3.2','MiniMax-M2.7','MiniMax-M2.1','MiniMax-M2.5','GLM-4.7','Kimi-K2.5','GLM-5.1','GLM-5'], req5h:5000, reqMonth:60000, reqWeek:30000,    benefits:['5倍Lite用量','专业高级场景'], note:'首月5折优惠已结束(2026.03.31)·暂时售罄·次月¥200·月限额60000',link:'https://cloud.infini-ai.com/login?redirect=/genstudio/invitation&invite_code=qYRvZBVl' },

  // Alaya Code - 2026.04.18 新增
  // 文档：https://codingplan.alayanew.com/docs/billing
  // 3档套餐：Lite ¥39/月、Plus ¥199/月、Max ¥699/月
  // ⚠️ 官网未公开具体请求数，页面仅显示"5h窗口配额"概念但无具体数值
  { platform:'Alaya Code', name:'Lite', monthly:39, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','MiniMax-M2.1'], req5h:null, reqMonth:null, reqWeek:null, benefits:['兼容 Claude Code/OpenCode/OpenClaw'],
    note:'⚠️如果官网仍未公开请求数·请谨慎购买', link:'https://codingplan.alayanew.com/docs/billing' },
  { platform:'Alaya Code', name:'Plus', monthly:199, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','MiniMax-M2.1','GLM-5'], req5h:null, reqMonth:null, reqWeek:null, benefits:['兼容 Claude Code/OpenCode/OpenClaw'],
    note:'⚠️如果官网仍未公开请求数·请谨慎购买', link:'https://codingplan.alayanew.com/docs/billing' },
  { platform:'Alaya Code', name:'Max', monthly:699, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','MiniMax-M2.1','GLM-5','GLM-5.1'], req5h:null, reqMonth:null, reqWeek:null, benefits:['兼容 Claude Code/OpenCode/OpenClaw'],
    note:'⚠️如果官网仍未公开请求数·请谨慎购买', link:'https://codingplan.alayanew.com/docs/billing' },

  // Ollama - 2026.04.18 新增，官方定价页：https://ollama.com/pricing
  // 3档套餐：Free $0、Pro $20/月($200/年)、Max $100/月
  // 使用 GPU 时间计费，非固定请求数/Token数；有5h会话限制和每周限制，但具体数值未公开
  // 支持模型列表：https://ollama.com/search?c=cloud
  { platform:'Ollama', name:'Free', currency:'$', monthly:0, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','qwen3.5','qwen3-coder-next','MiniMax-M2.7','kimi-k2.6','kimi-k2.5','deepseek-v3','llama4','gemma4'], req5h:null, reqMonth:null, reqWeek:null, benefits:['免费使用','40,000+社区模型'],
    note:'⚠️免费版额度有限·具体请求数不公开', link:'https://ollama.com/pricing' },
  { platform:'Ollama', name:'Pro', currency:'$', monthly:20, quarterly:null, yearly:200, firstMonth:null,
    models:['GLM-5.1','qwen3.5','qwen3-coder-next','MiniMax-M2.7','kimi-k2.6','kimi-k2.5','deepseek-v3','llama4','qwen3-next','nemotron-3-super','gemma4'], req5h:null, reqMonth:null, reqWeek:null, benefits:['50x Free额度','3并发模型','上传共享私有模型'],
    note:'⚠️具体请求数不公开·年付$200更划算', link:'https://ollama.com/pricing' },
  { platform:'Ollama', name:'Max', currency:'$', monthly:100, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','qwen3.5','qwen3-coder-next','MiniMax-M2.7','kimi-k2.6','kimi-k2.5','deepseek-v3','llama4','qwen3-next','nemotron-3-super','devstral-small-2','gemma4'], req5h:null, reqMonth:null, reqWeek:null, benefits:['5x Pro额度','10并发模型','适合高强度开发'],
    note:'⚠️具体请求数不公开', link:'https://ollama.com/pricing' },
];
// ===== Platform Ratings =====
const RATINGS = [
  {
    name: '智谱AI', score: 4,
    reasons: ['独家 GLM-5.1（3月27日上线）', '免费 MCP 调用额度', '20+ 编程工具支持', '中国的A/，小心你的号！']
  },
  {
    name: 'z.ai', score: 2,
    reasons: ['支持GLM-5.1', '⚠️ 2026.04.11价格暴涨：月付涨至$18/$72/$160(涨幅80%)，年付涨至$172/$691/$1536(涨幅130%)', '相比国内同行无性价比·美元计费月付已是国内月付的3~5倍']
  },
  {
    name: 'OpenCode Go', score: 3,
    reasons: ['首月$5·次月$10', 'GLM/Kimi/MiMo/MiniMax 多模型接入', '速度快，但是用量偏少', '额度按美元预算计费·当前仍为 Beta']
  },
  {
    name: 'Kimi', score: 3,
    reasons: ['K2.6-code-preview 已上线', '请求数未公开', '年付折扣可观', '网友反馈：额度消耗较快']
  },
  {
    name: 'MiniMax', score: 5,
    reasons: ['定价最低无需抢购', '独家 MiniMax-M2.7', '已升级 Token Plan·支持语音/视频/音乐/图像', '请求数计费透明']
  },
  {
    name: '字节·方舟', score: 2,
    reasons: ['计费不透明·无用量明细·蓝点网/微博多源实锤', '速度慢·超卖严重·付费仍用数据训练', '首月¥8.9·支持Doubao/Kimi/GLM/MiniMax多模型']
  },
  {
    name: '阿里·百炼', score: 4,
    reasons: ['独家 Qwen3.6-Plus', 'Lite 停止新购·Pro 限量抢购每日09:30补货', '固定¥200/月·每月90,000次请求']
  },
  {
    name: '天翼云', score: 5,
    reasons: ['支持GLM-5.1', 'GLM 全家桶覆盖最完整', '第三方测速上游·GLM-5-Turbo 速度表现好']
  },
  {
    name: '京东云', score: 4,
    reasons: ['支持 DeepSeek-V3.2 / GLM-5 / Qwen3-Coder', '7 模型覆盖·兼容 Claude Code/Cursor/OpenClaw', '价格标准·第三方测速中上游']
  },
  {
    name: '联通云', score: 3,
    reasons: ['支持GLM-5.1', '6 模型覆盖·支持动态模型路由', '当前资源紧张GLM-5.1很慢+429限流', '测试发现GLM-5.1调用工具有问题，等待修复', '没有异常扣费情况，挺耐用']
  },
  {
    name: '蓝耘元生代云', score: 4,
    reasons: ['支持GLM-5.1', '价格与智谱同档·季付9折年付8折', '高峰与非高峰差异化扣额', '模型可选较少']
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
    name: '百度·千帆', score: 4,
    reasons: ['支持 GLM-5、MiniMax-M2.5、Kimi-K2.5、DeepSeek-V3.2 等模型', '每日10:30/17:00限量补货', '首月¥9.9']
  },
  {
    name: '讯飞星辰', score: 3,
    reasons: ['焕新版(4.9)专业版/高效版有周限·无忧版不限请求', '高效版支持GLM-5.1', '整合星火X2与 GLM/Kimi/MiniMax/DeepSeek/Qwen 等模型', '焕新版后为请求次数流控（非日Tokens）']
  },
  {
    name: '阶跃星辰', score: 4,
    reasons: ['Step 3.5 Flash / 2603·极速性能默认开放', '新增 StepAudio-2.5-TTS 语音模型', '¥49 起·Prompt 配额清晰·支持主流 Agent 工具', 'MCP 暂未支持·当前主要开放 Flash 系列']
  },
  {
    name: '快手 StreamLake', score: 3,
    reasons: ['独家 KAT-Coder-Pro V2 / V1', 'Mini ¥29 起·支持 OpenClaw/Claude Code/OpenCode', '当前仅自家模型体系·且禁止 API 二次集成']
  },
  {
    name: '无问芯穹', score: 3,
    reasons: ['支持GLM-5.1', 'Lite首月¥19.9·Pro首月¥99.9', '多模型聚合（DeepSeek/Kimi/GLM/MiniMax）']
  },
  {
    name: 'Alaya Code', score: 2,
    reasons: ['不同套餐可用模型不同', '具体请求数不清晰', '支持模型较少']
  },
  {
    name: 'Ollama', score: 3,
    reasons: ['支持GLM5.1', '可用模型40,000+', '请求速度中等偏上', '具体请求数未公开！']
  }
];
