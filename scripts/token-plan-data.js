// ===== Token Plan Data =====
// 2026.04.21 新增 Token Plan 页面 — 从 Coding Plan 中分离纯 Credits/Token 计费平台
// 每家的 Credits 计算方式不同，具体可用 Token 额度请进入官网查询
// 注：MiniMax 虽然名称为 Token Plan，但本质还是请求数计费，已移回 Coding Plan

const TOKEN_PLANS = [
  // 阿里·Token Plan（团队版）- Credits 统一计量，按坐席数订阅；支持文本+图像生成；华北2地域；不支持退款
  // 帮助文档更新时间：2026-04-20；文本模型：qwen3.6-plus/glm-5/MiniMax-M2.5/deepseek-v3.2
  { platform:'阿里·Token Plan', name:'标准坐席', monthly:198, quarterly:null, yearly:null, firstMonth:null,
    models:['qwen3.6-plus','glm-5','MiniMax-M2.5','deepseek-v3.2','qwen-image-2.0','qwen-image-2.0-pro','wan2.7-image','wan2.7-image-pro'],
    creditsMonth:25000, creditsNote:'¥198/坐席/月', benefits:['Credits统一计量','文本+图像生成','多模型切换'],
    note:'25000 Credits/月·标准档·适合轻度AI辅助·华北2地域·不支持退款', link:'https://common-buy.aliyun.com/token-plan' },
  { platform:'阿里·Token Plan', name:'高级坐席', monthly:698, quarterly:null, yearly:null, firstMonth:null,
    models:['qwen3.6-plus','glm-5','MiniMax-M2.5','deepseek-v3.2','qwen-image-2.0','qwen-image-2.0-pro','wan2.7-image','wan2.7-image-pro'],
    creditsMonth:100000, creditsNote:'¥698/坐席/月', benefits:['4倍标准坐席用量','Credits统一计量'],
    note:'100000 Credits/月·高级档·适合高频AI编码', link:'https://common-buy.aliyun.com/token-plan' },
  { platform:'阿里·Token Plan', name:'尊享坐席', monthly:1398, quarterly:null, yearly:null, firstMonth:null,
    models:['qwen3.6-plus','glm-5','MiniMax-M2.5','deepseek-v3.2','qwen-image-2.0','qwen-image-2.0-pro','wan2.7-image','wan2.7-image-pro'],
    creditsMonth:250000, creditsNote:'¥1398/坐席/月', benefits:['10倍标准坐席用量','Credits统一计量'],
    note:'250000 Credits/月·尊享档·适合重度AI编码', link:'https://common-buy.aliyun.com/token-plan' },
  { platform:'阿里·Token Plan', name:'共享用量包', monthly:5000, quarterly:null, yearly:null, firstMonth:null,
    models:['qwen3.6-plus','glm-5','MiniMax-M2.5','deepseek-v3.2','qwen-image-2.0','qwen-image-2.0-pro','wan2.7-image','wan2.7-image-pro'],
    creditsMonth:625000, creditsNote:'¥5000/个', benefits:['跨坐席共享','弹性用量'],
    note:'625000 Credits/个·有效期1个月·额度到期清零·可叠加购买', link:'https://common-buy.aliyun.com/token-plan' },

  // 腾讯·Token - Token Plan（按 Token 额度计费），4月3日上线，兼容 Claude Code/Cursor/OpenClaw 等
  // 文档：https://cloud.tencent.com/document/product/1772/129449
  // 注意：仅限 AI 工具使用，禁止 API 调用（违者封禁）；暂不支持多模态
  // tokenMonth 单位为"万 Tokens"，显示为 3500万/1亿/3.2亿/6.5亿
  { platform:'腾讯·Token', name:'Lite', monthly:39, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'],
    tokenMonth:3500, tokenUnit:'万 Tokens', benefits:['3500万 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'],
    note:'Token Plan·约70轮问答·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Standard', monthly:99, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'],
    tokenMonth:10000, tokenUnit:'万 Tokens', benefits:['1亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'],
    note:'Token Plan·约200轮问答·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Pro', monthly:299, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'],
    tokenMonth:32000, tokenUnit:'万 Tokens', benefits:['3.2亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'],
    note:'Token Plan·高频AI开发·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },
  { platform:'腾讯·Token', name:'Max', monthly:599, quarterly:null, yearly:null, firstMonth:null,
    models:['HY-2.0','HY-2.0-Think','GLM-5','Kimi-K2.5','MiniMax-M2.5','Hunyuan-T1','Hunyuan-TurboS'],
    tokenMonth:65000, tokenUnit:'万 Tokens', benefits:['6.5亿 Tokens/月','兼容 Claude Code/Cursor/OpenClaw'],
    note:'Token Plan·重度开发首选·禁API调用', link:'https://curl.qcloud.com/1Uogyigq' },

  // 小米·MiMo - Token Plan，统一 Credit 体系，首购88折（仅限一次）
  // Credit 倍率：MiMo-V2-Omni 256k→1x, MiMo-V2-Pro 256k→2x, MiMo-V2-Pro 256k~1M→4x, MiMo-V2-TTS→0x（限时免费）
  { platform:'小米·MiMo', name:'Lite', monthly:39, quarterly:null, yearly:null, firstMonth:34.32,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'],
    creditsMonth:6000, creditsUnit:' Credits', benefits:['兼容 Claude Code/OpenCode/OpenClaw'],
    note:'首购88折·Credit≠Token(Pro=2x/Omni=1x)·性价比低于同行', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Standard', monthly:99, quarterly:null, yearly:null, firstMonth:87.12,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'],
    creditsMonth:20000, creditsUnit:' Credits', benefits:['兼容 Claude Code/OpenCode/OpenClaw'],
    note:'首购88折·3.3× Lite用量·性价比低于同行', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Pro', monthly:329, quarterly:null, yearly:null, firstMonth:289.52,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'],
    creditsMonth:70000, creditsUnit:' Credits', benefits:['兼容 Claude Code/OpenCode/OpenClaw'],
    note:'首购88折·11.7× Lite用量·性价比低于同行', link:'https://platform.xiaomimimo.com/#/token-plan' },
  { platform:'小米·MiMo', name:'Max', monthly:659, quarterly:null, yearly:null, firstMonth:579.92,
    models:['MiMo-V2-Pro','MiMo-V2-Omni','MiMo-V2-TTS'],
    creditsMonth:160000, creditsUnit:' Credits', benefits:['兼容 Claude Code/OpenCode/OpenClaw'],
    note:'首购88折·26.7× Lite用量·性价比低于同行', link:'https://platform.xiaomimimo.com/#/token-plan' },

  // 优云 - 积分制，非请求数，无req5h/reqMonth/reqWeek概念
  // 另有一次性按量包；积分与 Token 的换算由模型倍率决定
  { platform:'优云', name:'Lite', monthly:49.9, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','Qwen3.6-Plus','MiniMax-M2.1','MiniMax-M2.5','GLM-5','Kimi-K2.5','DeepSeek-V3.2'],
    creditsMonth:null, creditsDaily:700, creditsUnit:' 积分', benefits:['允许 API 调用','支持 Codex CLI/CherryStudio'],
    note:'另有¥6.9/19.9/199一次性按量包·积分倍率需看规则页', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云', name:'Plus', monthly:199, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','Qwen3.6-Plus','MiniMax-M2.1','MiniMax-M2.5','GLM-5','Kimi-K2.5','DeepSeek-V3.2'],
    creditsMonth:null, creditsDaily:2800, creditsUnit:' 积分', benefits:['允许 API 调用','支持 Codex CLI/CherryStudio'],
    note:'另有¥6.9/19.9/199一次性按量包·限时赠 OpenClaw 云端服务', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云', name:'Pro', monthly:499, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.1','Qwen3.6-Plus','MiniMax-M2.1','MiniMax-M2.5','GLM-5','Kimi-K2.5','DeepSeek-V3.2'],
    creditsMonth:null, creditsDaily:7000, creditsUnit:' 积分', benefits:['允许 API 调用','支持 Codex CLI/CherryStudio'],
    note:'积分制·限时赠 OpenClaw 云端服务·允许客户端/API 场景', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
];

// ===== Token Plan Ratings =====
const TOKEN_RATINGS = [
  {
    name: '腾讯·Token', score: 1,
    reasons: ['Token Plan·但无公开用量计算器·用户无法自测透明度', 'Lite 3500万 Tokens/月 偏少·约70轮问答即耗尽', '禁API调用·仅限 AI 工具', '高峰期可能限速']
  },
  {
    name: '小米·MiMo', score: 1,
    reasons: ['Credit≠Token·Pro 2x/Omni 1x 实际缩水', '¥39 仅 6000 Credits，性价比远低于同行', '兼容 Claude Code 但定价无竞争力']
  },
  {
    name: '阿里·Token Plan', score: 2,
    reasons: ['Credits统一计量·文本+图像双模态', '¥198起按坐席订阅·可扩展', '支持qwen3.6-plus/glm-5/MiniMax-M2.5/deepseek-v3.2', '不支持退款']
  },
  {
    name: '优云', score: 3,
    reasons: ['支持GLM-5.1·Qwen3.6-Plus', '允许 API 调用·支持 Codex CLI/CherryStudio', '按量包+包月并存·套餐形态灵活', '积分倍率需看规则页']
  },
];
