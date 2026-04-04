// ===== Plans Data =====
const PLANS = [
  // 智谱AI — 官网实测：月付/季付(9折)/年付(8折)，2月12日已涨价30%起，取消首购优惠
  { platform:'智谱AI', name:'Lite', monthly:49, quarterly:132.3, yearly:470.4, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo'], req5h:1200, reqMonth:24000, benefits:['免费MCP','20+编程工具'], note:'季付¥44.1/月·年付¥39.2/月·GLM-5.1已开放', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },
  { platform:'智谱AI', name:'Pro', monthly:149, quarterly:402.3, yearly:1430.4, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo'], req5h:6000, reqMonth:120000, benefits:['免费MCP','优先体验新模型'], note:'季付¥134.1/月·年付¥119.2/月', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },
  { platform:'智谱AI', name:'Max', monthly:469, quarterly:1266.3, yearly:4502.4, firstMonth:null,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo'], req5h:24000, reqMonth:600000, benefits:['免费MCP','高峰期专属资源'], note:'季付¥422.1/月·年付¥375.2/月', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },

  // z.ai（智谱国际版）— 支持 GLM-5.1/GLM-5，季付-10%/年付-30%，邀请链接含首月/首季/首年优惠
  { platform:'z.ai', name:'Lite', monthly:10, quarterly:24, yearly:75, firstMonth:9,
    models:['GLM-5.1','GLM-5-Turbo','GLM-4.7'], req5h:80, reqMonth:null, benefits:['3× Claude Pro 用量','兼容 Claude Code/Cursor/Cline 等 20+ 工具'], note:'国际站不限购不降智·季付$8/月·年付$6.25/月·Friend Gift 首$9', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },
  { platform:'z.ai', name:'Pro', monthly:30, quarterly:72, yearly:226, firstMonth:27,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7'], req5h:400, reqMonth:null, benefits:['5× Lite 用量','优先体验新模型','40%–60% 更快响应'], note:'国际站不限购不降智·季付$24/月·年付$18.8/月·含 MCP', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },
  { platform:'z.ai', name:'Max', monthly:80, quarterly:194, yearly:604, firstMonth:72,
    models:['GLM-5.1','GLM-5','GLM-5-Turbo','GLM-4.7'], req5h:1600, reqMonth:null, benefits:['4× Pro 用量','高峰期保证性能','抢先体验新模型'], note:'国际站不限购不降智·季付$64.7/月·年付$50.3/月', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },

  // Kimi — 官网实测：连续包月原价/连续包年折扣价
  { platform:'Kimi', name:'Andante', monthly:49, quarterly:null, yearly:468, firstMonth:null,
    models:['Kimi-K2.5'], req5h:null, reqMonth:null, benefits:['专属编程额度','旗舰模型抢先体验'], note:'年付¥39/月·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Moderato', monthly:99, quarterly:null, yearly:948, firstMonth:null,
    models:['Kimi-K2.5'], req5h:null, reqMonth:null, benefits:['每周更新额度','多设备共享'], note:'年付¥79/月·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Allegretto', monthly:199, quarterly:null, yearly:1908, firstMonth:null,
    models:['Kimi-K2.5'], req5h:null, reqMonth:null, benefits:['充足每周额度','高并发上限'], note:'年付¥159/月·请求数未公开', link:'https://www.kimi.com/code/zh' },
  { platform:'Kimi', name:'Allegro', monthly:699, quarterly:null, yearly:6708, firstMonth:null,
    models:['Kimi-K2.5'], req5h:null, reqMonth:null, benefits:['澎湃额度','高强度开发'], note:'年付¥559/月·请求数未公开', link:'https://www.kimi.com/code/zh' },

  // MiniMax — 3月23日已升级为 Token Plan（全模态统一订阅），Plus及以上额外赠多模态额度
  { platform:'MiniMax', name:'Starter', monthly:29, quarterly:null, yearly:290, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:600, reqMonth:9000, benefits:['TPS ~50','Token Plan'], note:'年付¥24.2/月', link:'https://platform.minimaxi.com/subscribe/token-plan?code=7EEmX0yfbU&source=link' },
  { platform:'MiniMax', name:'Plus', monthly:49, quarterly:null, yearly:490, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:1500, reqMonth:22500, benefits:['TPS ~50','赠多模态额度（视频/语音/音乐/图像）'], note:'年付¥40.8/月·Token Plan', link:'https://platform.minimaxi.com/subscribe/token-plan?code=7EEmX0yfbU&source=link' },
  { platform:'MiniMax', name:'Max', monthly:119, quarterly:null, yearly:1190, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:4500, reqMonth:67500, benefits:['TPS ~50','赠多模态额度（视频/语音/音乐/图像）'], note:'年付¥99.2/月·Token Plan', link:'https://platform.minimaxi.com/subscribe/token-plan?code=7EEmX0yfbU&source=link' },
  { platform:'MiniMax', name:'Plus 极速版', monthly:98, quarterly:null, yearly:980, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:1500, reqMonth:22500, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan', link:'https://platform.minimaxi.com/subscribe/token-plan?code=7EEmX0yfbU&source=link' },
  { platform:'MiniMax', name:'Max 极速版', monthly:199, quarterly:null, yearly:1990, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:4500, reqMonth:67500, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan', link:'https://platform.minimaxi.com/subscribe/token-plan?code=7EEmX0yfbU&source=link' },
  { platform:'MiniMax', name:'Ultra 极速版', monthly:899, quarterly:null, yearly:8990, firstMonth:null,
    models:['MiniMax-M2.7'], req5h:30000, reqMonth:450000, benefits:['TPS ~100','赠多模态额度'], note:'Token Plan', link:'https://platform.minimaxi.com/subscribe/token-plan?code=7EEmX0yfbU&source=link' },

  // 字节·方舟 — 首月Lite约¥8.9，支持Doubao-Seed-2.0系列/DeepSeek-V3.2/Kimi-K2.5/GLM-4.7
  // ⚠️ 双层计费：名义按调用次数，实际Token消耗大会被按2-3次甚至更多次扣费（蓝点网/V2EX/微博多源证实）
  { platform:'字节·方舟', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:8.9,
    models:['Doubao-Seed-2.0','Doubao-Seed-Code','DeepSeek-V3.2','Kimi-K2.5','GLM-4.7','MiniMax-M2.5'], req5h:1200, reqMonth:18000, benefits:['ArkClaw 7天试用','Auto智能选模型'], note:'首月¥8.9·⚠双层计费·额度消耗远快于同行', link:'https://volcengine.com/L/jmiEa1dptck/' },
  { platform:'字节·方舟', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:49.9,
    models:['Doubao-Seed-2.0','Doubao-Seed-Code','DeepSeek-V3.2','Kimi-K2.5','GLM-4.7','MiniMax-M2.5'], req5h:6000, reqMonth:90000, benefits:['免费ArkClaw','Auto智能选模型'], note:'首月¥49.9·⚠双层计费·Pro三四天可用完月额度', link:'https://volcengine.com/L/jmiEa1dptck/' },

  // 阿里·百炼 — Lite套餐已售罄（截至3月），目前仅Pro可购；千问Plus已升级至Qwen3.6
  { platform:'阿里·百炼', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:39.9,
    models:['Qwen3.6-Plus','Qwen3-Coder','GLM-5','Kimi-K2.5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, benefits:['多模型自由切换'], note:'Lite已售罄·仅Pro可购·首月¥39.9', link:'https://www.aliyun.com/minisite/goods?userCode=hun0t0sf' },

  // 腾讯·Coding — Coding Plan（按请求次数），Lite限量抢购（每天10点），首月¥7.9；Pro首月¥39.9
  { platform:'腾讯·Coding', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:7.9,
    models:['HY-2.0','GLM-5','Kimi-K2.5','MiniMax-M2.5'], req5h:1200, reqMonth:18000, benefits:['企业生态强'], note:'Coding Plan·首月¥7.9·Lite限量抢购', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Coding', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:39.9,
    models:['HY-2.0','GLM-5','Kimi-K2.5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, benefits:['企业生态强'], note:'Coding Plan·首月¥39.9', link:'https://curl.qcloud.com/1Uogyigq' },

  // 腾讯·Token — Token Plan（按 Token 额度计费），4月3日上线，兼容 Claude Code/Cursor/OpenClaw 等
  // 文档：https://cloud.tencent.com/document/product/1772/129449
  // 注意：仅限 AI 工具使用，禁止 API 调用（违者封禁）；暂不支持多模态
  { platform:'腾讯·Token', name:'Lite', monthly:39, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'], req5h:null, reqMonth:null,
    benefits:['3500万 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'], note:'Token Plan·约70轮问答·禁API调用', tokenMonth:3500, link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Standard', monthly:99, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'], req5h:null, reqMonth:null,
    benefits:['1亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'], note:'Token Plan·约200轮问答·禁API调用', tokenMonth:10000, link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Pro', monthly:299, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'], req5h:null, reqMonth:null,
    benefits:['3.2亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'], note:'Token Plan·高频AI开发·禁API调用', tokenMonth:32000, link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Max', monthly:599, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'], req5h:null, reqMonth:null,
    benefits:['6.5亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'], note:'Token Plan·重度开发首选·禁API调用', tokenMonth:65000, link:'https://curl.qcloud.com/1Uogyigq' },

  // 百度·千帆 — 2月11日上线；每日10:30和17:00限量补货，Lite首月¥9.9
  { platform:'百度·千帆', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:9.9,
    models:['Kimi-K2.5','DeepSeek-V3.2','GLM-5','MiniMax-M2.5'], req5h:1200, reqMonth:18000, benefits:[], note:'每日10:30/17:00限量补货', link:'https://cloud.baidu.com/campaign/ambassador-product/index.html?ambassadorId=b00e3bb5d042440fbfaccf545e8e52f0#knowledge-model' },
  { platform:'百度·千帆', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['Kimi-K2.5','DeepSeek-V3.2','GLM-5','MiniMax-M2.5'], req5h:6000, reqMonth:90000, benefits:[], note:'每日10:30/17:00限量补货', link:'https://cloud.baidu.com/campaign/ambassador-product/index.html?ambassadorId=b00e3bb5d042440fbfaccf545e8e52f0#knowledge-model' },

  // 讯飞星辰 — MaaS平台 Astron Coding Plan，3档套餐，按日Tokens流控，次月版将改为请求次数
  // 官方文档：https://www.xfyun.cn/doc/spark/CodingPlan.html
  { platform:'讯飞星辰', name:'入门版', monthly:19, quarterly:null, yearly:null, firstMonth:3.9,
    models:['Qwen3.5-35B','DeepSeek-V3.2','GLM-4.7-Flash'], req5h:null, reqMonth:null,
    benefits:['每日2000万Tokens','QPS 20'], note:'首购¥3.9·叠加购买¥19/月', tokenDaily:2000, link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },
  { platform:'讯飞星辰', name:'专业版', monthly:39, quarterly:null, yearly:null, firstMonth:7.9,
    models:['Qwen3.5-35B','DeepSeek-V3.2','GLM-4.7-Flash','GLM-5','MiniMax-M2.5','Kimi-K2.5'], req5h:null, reqMonth:null,
    benefits:['每日1000万Tokens','QPS 5'], note:'首购¥7.9·叠加购买¥39/月', tokenDaily:1000, link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },
  { platform:'讯飞星辰', name:'高效版', monthly:199, quarterly:null, yearly:null, firstMonth:39.9,
    models:['Qwen3.5-35B','DeepSeek-V3.2','GLM-4.7-Flash','GLM-5','MiniMax-M2.5','Kimi-K2.5'], req5h:null, reqMonth:null,
    benefits:['每日5000万Tokens','QPS 20'], note:'首购¥39.9·叠加购买¥199/月', tokenDaily:5000, link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },

  // 小米·MiMo — 4月3日上线 Token Plan，统一 Credit 体系，首购88折（仅限一次）
  // Credit 倍率：MiMo-V2-Omni 256k→1x, MiMo-V2-Pro 256k→2x, MiMo-V2-Pro 256k~1M→4x, MiMo-V2-TTS→0x（限时免费）
  { platform:'小米·MiMo', name:'Lite', monthly:39, quarterly:null, yearly:null, firstMonth:34.32,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'], req5h:null, reqMonth:null,
    benefits:['6000万 Credits·Pro 实际仅30M Token','兼容 Claude Code/OpenCode/OpenClaw'], note:'首购88折·Credit≠Token(Pro=2x/Omni=1x)·性价比低于同行', tokenMonth:6000, tokenUnit:' Credits', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Standard', monthly:99, quarterly:null, yearly:null, firstMonth:87.12,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'], req5h:null, reqMonth:null,
    benefits:['2亿 Credits·Pro 实际仅100M Token','兼容 Claude Code/OpenCode/OpenClaw'], note:'首购88折·3.3× Lite用量·性价比低于同行', tokenMonth:20000, tokenUnit:' Credits', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Pro', monthly:329, quarterly:null, yearly:null, firstMonth:289.52,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'], req5h:null, reqMonth:null,
    benefits:['7亿 Credits·Pro 实际仅350M Token','兼容 Claude Code/OpenCode/OpenClaw'], note:'首购88折·11.7× Lite用量·性价比低于同行', tokenMonth:70000, tokenUnit:' Credits', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Max', monthly:659, quarterly:null, yearly:null, firstMonth:579.92,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'], req5h:null, reqMonth:null,
    benefits:['16亿 Credits·Pro 实际仅800M Token','兼容 Claude Code/OpenCode/OpenClaw'], note:'首购88折·26.7× Lite用量·性价比低于同行', tokenMonth:160000, tokenUnit:' Credits', link:'https://platform.xiaomimimo.com/#/token-plan' },

  // 无问芯穹 — 2档套餐，多模型聚合，首月5折优惠
  { platform:'无问芯穹', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:19.9,
    models:['DeepSeek-V3.2','MiniMax-M2.5','Kimi-K2.5','GLM-5'], req5h:1000, reqMonth:null, benefits:['多模型聚合','月费最低'], note:'首月¥19.9·次月¥40', link:'https://cloud.infini-ai.com/login?redirect=/genstudio/invitation&invite_code=qYRvZBVl' },
  { platform:'无问芯穹', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:99.9,
    models:['DeepSeek-V3.2','MiniMax-M2.5','Kimi-K2.5','GLM-5'], req5h:5000, reqMonth:null, benefits:['5倍Lite用量','专业高级场景'], note:'首月¥99.9·次月¥200', link:'https://cloud.infini-ai.com/login?redirect=/genstudio/invitation&invite_code=qYRvZBVl' },
];
// ===== Platform Ratings =====
const RATINGS = [
  {
    name: '智谱AI', score: 5,
    reasons: ['独家 GLM-5.1（3月27日上线）', '免费 MCP 调用额度', '20+ 编程工具支持']
  },
  {
    name: 'z.ai', score: 5,
    reasons: ['智谱国际版·美元计费', 'GLM-5.1/GLM-5 全模型支持', '季付-10%/年付-30%·MCP 免费调用']
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
    name: '字节·方舟', score: 2,
    reasons: ['⚠双层计费：Token消耗大按2-3次扣费·额度远不够用', '计费不透明·无用量明细·蓝点网/微博多源实锤', '速度慢·超卖严重·付费仍用数据训练']
  },
  {
    name: '阿里·百炼', score: 3,
    reasons: ['独家 Qwen3.6-Plus / Qwen3-Coder', 'Lite 已售罄·仅 Pro 可购', '首月¥39.9']
  },
  {
    name: '腾讯·Coding', score: 3,
    reasons: ['Coding Plan·按请求次数计费', '首月¥7.9·Lite 限量抢购', '支持 GLM-5 / Kimi-K2.5 / MiniMax-M2.5']
  },
  {
    name: '腾讯·Token', score: 4,
    reasons: ['Token Plan·按 Token 计费更透明', '7 模型覆盖（HY 2.0 Think/T1/TurboS 独家）', '¥39 起·兼容 Claude Code/Cursor/OpenClaw']
  },
  {
    name: '百度·千帆', score: 3,
    reasons: ['支持文心4.5Turbo / DeepSeek-V3.2', '每日10:30/17:00限量补货', '首月¥9.9']
  },
  {
    name: '讯飞星辰', score: 3,
    reasons: ['3档套餐·首购低至¥3.9', '按日Tokens流控·每日最高5000万', '支持GLM-5/Kimi/MiniMax/DeepSeek']
  },
  {
    name: '小米·MiMo', score: 2,
    reasons: ['Credit≠Token·Pro 2x/Omni 1x 实际缩水', '¥39 仅 30M token(Pro)·性价比远低于同行', '兼容 Claude Code 但定价无竞争力']
  },
  {
    name: '无问芯穹', score: 4,
    reasons: ['Lite首月¥19.9·次月¥40', 'Pro首月¥99.9·次月¥200', '多模型聚合（DeepSeek/Kimi/GLM/MiniMax）']
  }
];
