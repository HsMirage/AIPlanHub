// ===== Image AI Plans Data =====
const IMAGE_PLANS = [
  // Midjourney — 国际平台，国内广泛使用
  { platform:'Midjourney', name:'Basic', monthly:70, yearly:672, credits:'3.3h Fast GPU/月', resolution:'多比例输出',
    features:['Discord 使用','文生图','图生图','放大','SD 视频'], note:'官方 $10/月·年付 $96（按 $1≈¥7.0 估算）', link:'https://midjourney.com' },
  { platform:'Midjourney', name:'Standard', monthly:210, yearly:2016, credits:'15h Fast GPU/月+无限Relax', resolution:'多比例输出',
    features:['Relax 模式','无限图片生成','文生图','图生图','SD & HD 视频'], note:'官方 $30/月·年付 $288（按 $1≈¥7.0 估算）', link:'https://midjourney.com' },
  { platform:'Midjourney', name:'Pro', monthly:420, yearly:4032, credits:'30h Fast GPU/月+无限Relax', resolution:'多比例输出',
    features:['Stealth 模式','商用授权','12 并发任务','无限图片+SD & HD 视频'], note:'官方 $60/月·年付 $576（按 $1≈¥7.0 估算）', link:'https://midjourney.com' },
  { platform:'Midjourney', name:'Mega', monthly:840, yearly:8064, credits:'60h Fast GPU/月+无限Relax', resolution:'多比例输出',
    features:['最高并发','Stealth 模式','商用授权','12 并发任务','无限图片+SD & HD 视频'], note:'官方 $120/月·年付 $1,152（按 $1≈¥7.0 估算）', link:'https://midjourney.com' },

  // 即梦 — 字节跳动旗下，图片+视频+数字人
  { platform:'即梦', name:'基础会员', monthly:69, yearly:393, credits:'725 积分/月', resolution:'多尺寸',
    features:['文生图','图生图','文生视频','Seedance 2.0','智能画布'], note:'连续包月¥69/月·首年连续包年¥393/年（6折）·次年¥659/年·单月购买¥79', link:'https://jimeng.jianying.com' },
  { platform:'即梦', name:'标准会员', monthly:199, yearly:1099, credits:'2210 积分/月', resolution:'多尺寸',
    features:['文生图','图生图','文生视频','Seedance 2.0','数字人','配音生成'], note:'连续包月¥199/月·首年连续包年¥1099/年（6折）·次年¥1899/年·单月购买¥239', link:'https://jimeng.jianying.com' },
  { platform:'即梦', name:'高级会员', monthly:499, yearly:3099, credits:'6160 积分/月', resolution:'多尺寸',
    features:['全功能解锁','文生视频','数字人','大师模式','专属客服','商用权益'], note:'连续包月¥499/月·首年连续包年¥3099/年（6折）·次年¥5199/年·单月购买¥649', link:'https://jimeng.jianying.com' },

  // 通义万相 — 阿里巴巴（万相2.6）
  { platform:'通义万相', name:'免费', monthly:0, yearly:null, credits:'每日免费额度', resolution:'多尺寸',
    features:['文生图','6个风格模板','无限生成（慢速）'], note:'万相 2.6 已支持图片+视频+音频生成·API 按阿里云百炼控制台计费', link:'https://tongyi.aliyun.com/wan/pricing' },
  { platform:'通义万相', name:'标准会员', monthly:72, yearly:432, credits:'300 灵感值/月', resolution:'多尺寸',
    features:['文生图','图生图','3个图片+3个视频并发','去品牌水印','高清放大','无限生成（慢速）'], note:'官方页显示：¥72/月·连续包年等价¥36/月（5折）·连续包月 6.5折', link:'https://tongyi.aliyun.com/wan/pricing' },
  { platform:'通义万相', name:'高级会员', monthly:288, yearly:1740, credits:'1200 灵感值/月', resolution:'多尺寸',
    features:['全功能解锁','8个视频+5个图片并发','高清放大','更长视频（10s/15s）','商用授权'], note:'官方页显示：¥288/月·连续包年等价¥145/月（5折）·连续包月 6.5折', link:'https://tongyi.aliyun.com/wan/pricing' },

  // Liblib AI (哩布哩布) — 模型社区+创作平台
  { platform:'Liblib AI', name:'基础版', monthly:null, yearly:399, credits:'800 积分/月', resolution:'不限',
    features:['10万+模型','WebUI/ComfyUI','训练 LoRA','视频生成','Kling/MJ V7'], note:'年付¥399·原价¥588（限时68折）·可随时取消', link:'https://www.liblib.art/viphome?referralCode=mk7xHT4K' },
  { platform:'Liblib AI', name:'专业版', monthly:null, yearly:499, credits:'1800 积分/月', resolution:'不限',
    features:['10万+模型','视频生成','训练 LoRA','Kling/MJ V7','智能分镜'], note:'年付¥499·原价¥948（限时53折）·次年¥639', link:'https://www.liblib.art/viphome?referralCode=mk7xHT4K' },
  { platform:'Liblib AI', name:'大师版', monthly:null, yearly:1299, credits:'5800 积分/月', resolution:'不限',
    features:['顶级算力','训练 LoRA','Kling 免费赠送','MJ V7','商用授权'], note:'年付¥1299·原价¥2748（限时47折）', link:'https://www.liblib.art/viphome?referralCode=mk7xHT4K' },
  { platform:'Liblib AI', name:'旗舰版', monthly:null, yearly:2999, credits:'15800 积分/月', resolution:'不限',
    features:['顶级算力','Kling 免费送20条','MJ V7','商用授权','20 并发任务'], note:'年付¥2999·原价¥7548（限时4折）', link:'https://www.liblib.art/viphome?referralCode=mk7xHT4K' },
  { platform:'Liblib AI', name:'尊享版', monthly:null, yearly:6599, credits:'34000 积分/月', resolution:'不限',
    features:['无限并发','Kling 免费送60条','MJ V7','商用授权','500GB 存储'], note:'年付¥6599·原价¥16788（限时39折）', link:'https://www.liblib.art/viphome?referralCode=mk7xHT4K' },

  // 堆友 (d.design) — 阿里巴巴设计平台
  { platform:'堆友', name:'月卡', monthly:59, yearly:null, credits:'2400 堆豆/月', resolution:'2048×2048',
    features:['国风/科幻/卡通/写实','文生图','图生视频','AI 试衣','3D 素材'], note:'¥59/月', link:'https://d.design' },
  { platform:'堆友', name:'季卡', monthly:53, yearly:null, credits:'2400 堆豆/月', resolution:'2048×2048',
    features:['国风/科幻/卡通/写实','文生图','图生视频','AI 试衣','3D 素材'], note:'¥53/月·季度共省¥48·到期前按¥159/季自动续费', link:'https://d.design' },
  { platform:'堆友', name:'年卡', monthly:null, yearly:399, credits:'2400 堆豆/月', resolution:'2048×2048',
    features:['国风/科幻/卡通/写实','文生图','图生视频','AI 试衣','3D 素材','商用授权'], note:'¥399/年·原价¥828（约4.8折）·到期前按¥399/年自动续费', link:'https://d.design' },

  // 文心一格 — 已于 2025-04-01 合并至文心一言
  { platform:'文心一格(已合并)', name:'已迁移至文心一言', monthly:null, yearly:null, credits:'—', resolution:'—',
    features:['已下线'], note:'2025年4月1日起服务合并至文心一言（yiyan.baidu.com）·绘画功能可在文心一言中继续使用', link:'https://yiyan.baidu.com' },
];

// ===== Image Platform Ratings =====
const IMAGE_RATINGS = [
  {
    name: '即梦', score: 5,
    reasons: ['字节 Seedance 2.0 模型', '图片+视频+数字人+配音四合一', '三档定价（¥69/¥199/¥499）清晰']
  },
  {
    name: 'Midjourney', score: 5,
    reasons: ['官方四档定价公开透明', 'Fast GPU 时长分层明确', '视频生成+Stealth 权益分层清晰']
  },
  {
    name: 'Liblib AI', score: 5,
    reasons: ['10万+ 免费模型', 'WebUI/ComfyUI/Kling/MJ V7 一站式', '五档会员覆盖全场景', '视频+语音+音乐全能']
  },
  {
    name: '通义万相', score: 4,
    reasons: ['万相 2.6 图片+视频+数字人', '阿里云百炼生态整合', '标准/高级会员新增·API 灵活按量计费']
  },
  {
    name: '堆友', score: 3,
    reasons: ['国风/设计向特色', '阿里设计生态', '年卡¥399 性价比高', '月卡/季卡/年卡多档选择']
  },
];
