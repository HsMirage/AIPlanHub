// ===== Token Plan Data =====
// 2026.04.21 新增 Token Plan 页面 — 从 Coding Plan 中分离纯 Credits/Token 计费平台
// 每家的 Credits 计算方式不同，具体可用 Token 额度请进入官网查询
// 注：MiniMax 虽然名称为 Token Plan，但本质还是请求数计费，已移回 Coding Plan

const TOKEN_PLANS = [
  // 阿里·Token Plan（团队版）- Credits 统一计量，按坐席数订阅；支持文本+图像生成；华北2地域；不支持退款
  // 帮助文档更新时间：2026-04-20；文本模型：Qwen3.6-Plus/GLM-5/MiniMax-M2.5/DeepSeek-V3.2
  { platform:'阿里·Token Plan', name:'标准坐席', monthly:198, quarterly:null, yearly:null, firstMonth:null,
    models:['Qwen3.6-Plus','GLM-5','MiniMax-M2.5','DeepSeek-V3.2','Qwen-Image-2.0','Qwen-Image-2.0-Pro','Wan-2.7-Image','Wan-2.7-Image-Pro'],
    creditsMonth:25000, creditsNote:'¥198/坐席/月', benefits:['Credits统一计量','文本+图像生成','多模型切换'],
    note:'25000 Credits/月·标准档·适合轻度AI辅助·华北2地域·不支持退款', link:'https://common-buy.aliyun.com/token-plan' },
  { platform:'阿里·Token Plan', name:'高级坐席', monthly:698, quarterly:null, yearly:null, firstMonth:null,
    models:['Qwen3.6-Plus','GLM-5','MiniMax-M2.5','DeepSeek-V3.2','Qwen-Image-2.0','Qwen-Image-2.0-Pro','Wan-2.7-Image','Wan-2.7-Image-Pro'],
    creditsMonth:100000, creditsNote:'¥698/坐席/月', benefits:['4倍标准坐席用量','Credits统一计量'],
    note:'100000 Credits/月·高级档·适合高频AI编码', link:'https://common-buy.aliyun.com/token-plan' },
  { platform:'阿里·Token Plan', name:'尊享坐席', monthly:1398, quarterly:null, yearly:null, firstMonth:null,
    models:['Qwen3.6-Plus','GLM-5','MiniMax-M2.5','DeepSeek-V3.2','Qwen-Image-2.0','Qwen-Image-2.0-Pro','Wan-2.7-Image','Wan-2.7-Image-Pro'],
    creditsMonth:250000, creditsNote:'¥1398/坐席/月', benefits:['10倍标准坐席用量','Credits统一计量'],
    note:'250000 Credits/月·尊享档·适合重度AI编码', link:'https://common-buy.aliyun.com/token-plan' },
  { platform:'阿里·Token Plan', name:'共享用量包', monthly:5000, quarterly:null, yearly:null, firstMonth:null,
    models:['Qwen3.6-Plus','GLM-5','MiniMax-M2.5','DeepSeek-V3.2','Qwen-Image-2.0','Qwen-Image-2.0-Pro','Wan-2.7-Image','Wan-2.7-Image-Pro'],
    creditsMonth:625000, creditsNote:'¥5000/个', benefits:['跨坐席共享','弹性用量'],
    note:'625000 Credits/个·有效期1个月·额度到期清零·可叠加购买', link:'https://common-buy.aliyun.com/token-plan' },

  // 腾讯·Token - Token Plan（按 Token 额度计费），4月3日上线，兼容 Claude Code/Cursor/OpenClaw 等
  // 2026.04.24 新增 Hy Token Plan 系列（基于 Hy3 Preview 模型），价格比通用版更优惠
  // 文档：https://cloud.tencent.com/document/product/1772/129449
  // 注意：仅限 AI 工具使用，禁止 API 调用（违者封禁）；暂不支持多模态
  // tokenMonth 单位为"万 Tokens"，显示为 3500万/1亿/3.2亿/6.5亿
  // 通用 Token Plan 系列
  { platform:'腾讯·Token', name:'Lite', monthly:39, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','MiniMax-M2.7','GLM-5','GLM-5.1','Kimi-K2.5','Auto'],
    tokenMonth:3500, tokenUnit:'万 Tokens', benefits:['3500万 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'],
    note:'通用Token Plan·约70轮问答·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Standard', monthly:99, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','MiniMax-M2.7','GLM-5','GLM-5.1','Kimi-K2.5','Auto'],
    tokenMonth:10000, tokenUnit:'万 Tokens', benefits:['1亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'],
    note:'通用Token Plan·约200轮问答·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Pro', monthly:299, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','MiniMax-M2.7','GLM-5','GLM-5.1','Kimi-K2.5','Auto'],
    tokenMonth:32000, tokenUnit:'万 Tokens', benefits:['3.2亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'],
    note:'通用Token Plan·高频AI开发·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Max', monthly:599, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','MiniMax-M2.7','GLM-5','GLM-5.1','Kimi-K2.5','Auto'],
    tokenMonth:65000, tokenUnit:'万 Tokens', benefits:['6.5亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'],
    note:'通用Token Plan·重度开发首选·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  // Hy Token Plan 系列 (2026.04.24 新增，基于腾讯自研 Hy3 Preview 模型)
  { platform:'腾讯·Token', name:'Hy Lite', monthly:28, quarterly:null, yearly:null, firstMonth:null,
    models:['Hy3 preview'],
    tokenMonth:3500, tokenUnit:'万 Tokens', benefits:['3500万 Tokens/月','Hy3 Preview模型','价格比通用版低28%'],
    note:'Hy Token Plan·新用户首选·约70轮问答·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Hy Standard', monthly:78, quarterly:null, yearly:null, firstMonth:null,
    models:['Hy3 preview'],
    tokenMonth:10000, tokenUnit:'万 Tokens', benefits:['1亿 Tokens/月','Hy3 Preview模型','价格比通用版低21%'],
    note:'Hy Token Plan·日常使用·约200轮问答·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Hy Pro', monthly:238, quarterly:null, yearly:null, firstMonth:null,
    models:['Hy3 preview'],
    tokenMonth:32000, tokenUnit:'万 Tokens', benefits:['3.2亿 Tokens/月','Hy3 Preview模型','价格比通用版低20%'],
    note:'Hy Token Plan·高频AI开发·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Hy Max', monthly:468, quarterly:null, yearly:null, firstMonth:null,
    models:['Hy3 preview'],
    tokenMonth:65000, tokenUnit:'万 Tokens', benefits:['6.5亿 Tokens/月','Hy3 Preview模型','价格比通用版低22%'],
    note:'Hy Token Plan·重度开发首选·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },

  // 小米·MiMo - Token Plan，2026.04.23 重大更新：改成年付制，额度大幅提升，新增 MiMo-V2.5 系列
  // Credit 倍率：MiMo-V2.5-Pro 256k→1x, MiMo-V2.5 256k→1x, MiMo-V2-Omni 256k→1x, MiMo-V2-Pro 256k→2x, MiMo-V2-TTS→0x（限时免费）
  // 非高峰期(16:00-24:00 UTC) 0.8x 系数消耗；包月7折，包年88折
  { platform:'小米·MiMo', name:'Lite', monthly:468, quarterly:null, yearly:411.84, firstMonth:34.32,
    models:['MiMo-V2.5-Pro','MiMo-V2.5','MiMo-V2.5-TTS-VoiceClone','MiMo-V2.5-TTS-VoiceDesign','MiMo-V2.5-TTS','MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'],
    creditsYear:720000000, creditsUnit:' Credits', benefits:['包年88折','支持 Claude Code/OpenCode/OpenClaw','非高峰期0.8x'],
    note:'年付¥411.84·72亿Credits/年·首月¥34.32·包年88折', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Standard', monthly:1188, quarterly:null, yearly:1045.44, firstMonth:87.12,
    models:['MiMo-V2.5-Pro','MiMo-V2.5','MiMo-V2.5-TTS-VoiceClone','MiMo-V2.5-TTS-VoiceDesign','MiMo-V2.5-TTS','MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'],
    creditsYear:2400000000, creditsUnit:' Credits', benefits:['3.3×Lite用量','包年88折','非高峰期0.8x'],
    note:'年付¥1045.44·240亿Credits/年·首月¥87.12·包年88折', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Pro', monthly:3948, quarterly:null, yearly:3474.24, firstMonth:289.52,
    models:['MiMo-V2.5-Pro','MiMo-V2.5','MiMo-V2.5-TTS-VoiceClone','MiMo-V2.5-TTS-VoiceDesign','MiMo-V2.5-TTS','MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'],
    creditsYear:8400000000, creditsUnit:' Credits', benefits:['11.7×Lite用量','包年88折','非高峰期0.8x'],
    note:'年付¥3474.24·840亿Credits/年·首月¥289.52·包年88折', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Max', monthly:7908, quarterly:null, yearly:6959.04, firstMonth:579.92,
    models:['MiMo-V2.5-Pro','MiMo-V2.5','MiMo-V2.5-TTS-VoiceClone','MiMo-V2.5-TTS-VoiceDesign','MiMo-V2.5-TTS','MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'],
    creditsYear:19200000000, creditsUnit:' Credits', benefits:['26.7×Lite用量','包年88折','非高峰期0.8x'],
    note:'年付¥6959.04·1920亿Credits/年·首月¥579.92·包年88折', link:'https://platform.xiaomimimo.com/#/token-plan' },

  // OpenCode Go - 2026.04.21 从 Coding Plan 移入；类似 Token Plan，按美元滚动预算而非固定请求数
  // 官方FAQ：5h预算$12·每周$30·每月$60，实际请求数随模型成本变化
  // 首月$5，次月起$10；可切换为超额使用 Zen 余额
  // 文档：https://opencode.ai/zh/go
  { platform:'OpenCode Go', name:'Go', currency:'$', monthly:10, quarterly:null, yearly:null, firstMonth:5,
    models:['Qwen3.6-Plus','GLM-5.1','MiniMax-M2.7','Kimi-K2.6','Kimi-K2.5','Qwen3.5','Qwen3-Next','MiniMax-M2.5','MiMo-V2-Pro','MiMo-V2-Omni'],
    creditsBudget:'$12/5h $30/周 $60/月', benefits:['首月$5','OpenCode 原生接入'],
    note:'Beta·Token Plan·实际请求数随模型成本变化·可切换为超额使用 Zen 余额', link:'https://opencode.ai/zh/go' },

  // ChatGPT Token - 第三方渠道售卖
  { platform:'ChatGPT', name:'Token', monthly:10, quarterly:null, yearly:null, firstMonth:null,
    models:['GPT-5.4','GPT-Image-2','GPT-5.3-Codex','GPT-5.2','GLM-5.1','Kimi-K2.6'],
    creditsMonth:100, creditsUnit:' 刀', benefits:['长期有效','站点模型任选'],
    note:'⚠️第三方渠道·Token计费·GPT-Image-2模型8分钱一次', link:'https://pay.ldxp.cn/shop/mirage' },
];

// ===== Token Plan Ratings =====
const TOKEN_RATINGS=[
  {
    name: '腾讯·Token', score: 1,
    reasons: ['Token Plan·但无公开用量计算器·用户无法自测透明度', 'Lite 3500万 Tokens/月 偏少·约70轮问答即耗尽', '禁API调用·仅限 AI 工具', '高峰期可能限速']
  },
  {
    name: '小米·MiMo', score: 2,
    reasons: ['改为年付制·包年88折·额度大幅提升', '新增 MiMo-V2.5-Pro 旗舰模型', '非高峰期 0.8x 系数', 'TTS 限时免费']
  },
  {
    name: 'OpenCode Go', score: 3,
    reasons: ['Token Plan·按美元滚动预算$12/5h·$30/周·$60/月', 'Beta·模型丰富（Qwen3.6-Plus/GLM-5.1/MiniMax-M2.7等）', '实际请求数随模型成本变化·用户无法自测', '可切换超额使用 Zen 余额']
  },
  {
    name: '阿里·Token Plan', score: 2,
    reasons: ['Credits统一计量·文本+图像双模态', '¥198起按坐席订阅·可扩展', '支持Qwen3.6-Plus/GLM-5/MiniMax-M2.5/DeepSeek-V3.2', '不支持退款']
  },
  {
    name: 'ChatGPT', score: 5, isAd: true,
    reasons: ['10元100刀额度，长期有效', '站点模型任选', 'GPT-Image-2模型8分钱一次']
  },
];
