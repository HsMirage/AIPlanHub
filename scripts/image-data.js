// ===== Image AI Plans Data =====
const IMAGE_PLANS = [
  // Midjourney — 国际平台，国内广泛使用
  { platform:'Midjourney', name:'Basic', monthly:70, yearly:672, credits:'3.3h Fast GPU/月', resolution:'多比例输出',
    features:['Discord 使用','文生图','图生图','放大','SD 视频生成'], note:'官方 $10/月·年付 $96（按 $1≈¥7.0 估算）', link:'https://midjourney.com' },
  { platform:'Midjourney', name:'Standard', monthly:210, yearly:2016, credits:'15h Fast GPU/月+无限Relax', resolution:'多比例输出',
    features:['Relax 模式','无限图片生成','文生图','图生图','SD&HD 视频'], note:'官方 $30/月·年付 $288（按 $1≈¥7.0 估算）', link:'https://midjourney.com' },
  { platform:'Midjourney', name:'Pro', monthly:420, yearly:4032, credits:'30h Fast GPU/月+无限Relax', resolution:'多比例输出',
    features:['Stealth 模式','商用授权','12 并发任务','无限图片+SD 视频'], note:'官方 $60/月·年付 $576（按 $1≈¥7.0 估算）', link:'https://midjourney.com' },
  { platform:'Midjourney', name:'Mega', monthly:840, yearly:8064, credits:'60h Fast GPU/月+无限Relax', resolution:'多比例输出',
    features:['最高并发','Stealth 模式','商用授权','12 并发任务','无限图片+SD 视频'], note:'官方 $120/月·年付 $1,152（按 $1≈¥7.0 估算）', link:'https://midjourney.com' },

  // 即梦 — 字节跳动旗下，图片+视频+数字人
  { platform:'即梦', name:'基础会员', monthly:79, yearly:659, credits:'500–1080 积分/月', resolution:'多尺寸',
    features:['文生图','图生图','文生视频','Seedance 2.0','智能画布'], note:'连续包月¥69/月·年卡¥659（约¥55/月）·积分按活动浮动', link:'https://jimeng.jianying.com' },
  { platform:'即梦', name:'标准会员', monthly:239, yearly:949, credits:'4000 积分/月', resolution:'多尺寸',
    features:['文生图','图生图','文生视频','Seedance 2.0','数字人','配音生成'], note:'连续包月首月¥119→¥199/月·年卡首年¥949→次年¥1899', link:'https://jimeng.jianying.com' },
  { platform:'即梦', name:'高级会员', monthly:649, yearly:2599, credits:'高阶积分额度', resolution:'多尺寸',
    features:['全功能解锁','文生视频','数字人','大师模式','专属客服','商用权益'], note:'年卡¥2599（自动续费）·适合重度创作者与商业用途', link:'https://jimeng.jianying.com' },

  // 通义万相 — 阿里巴巴（万相2.6）
  { platform:'通义万相', name:'按量计费', monthly:null, yearly:null, credits:'按量计费+每日免费额度', resolution:'多尺寸',
    features:['文生图','图生图','文生视频','数字人','API 接入','万相 2.6'], note:'万相 2.6 已支持图片+视频+音频生成·API 按阿里云百炼控制台计费', link:'https://tongyi.aliyun.com/wanxiang' },

  // Liblib AI (哩布哩布) — 模型社区+创作平台
  { platform:'Liblib AI', name:'基础版', monthly:null, yearly:399, credits:'800 积分/月', resolution:'不限',
    features:['10万+模型','WebUI/ComfyUI','训练 LoRA','视频生成','Kling/MJ V7'], note:'年付¥399·原价¥588·约3200张图片或80个视频/月', link:'https://www.liblib.art' },
  { platform:'Liblib AI', name:'专业版', monthly:null, yearly:639, credits:'1800 积分/月', resolution:'不限',
    features:['10万+模型','视频生成','训练 LoRA','Kling/MJ V7','智能分镜'], note:'年付¥639·原价¥948·约7200张图片或180个视频/月', link:'https://www.liblib.art' },
  { platform:'Liblib AI', name:'大师版', monthly:null, yearly:1299, credits:'5800 积分/月', resolution:'不限',
    features:['顶级算力','训练 LoRA','Kling 免费赠送','MJ V7','商用授权'], note:'年付¥1299·原价¥2748·约23200张图片或580个视频/月', link:'https://www.liblib.art' },
  { platform:'Liblib AI', name:'旗舰版', monthly:null, yearly:2999, credits:'15800 积分/月', resolution:'不限',
    features:['顶级算力','Kling 免费送5条','MJ V7','商用授权','20 并发任务'], note:'年付¥2999·原价¥11322·约63200张图片或1580个视频/月', link:'https://www.liblib.art' },
  { platform:'Liblib AI', name:'尊享版', monthly:null, yearly:6599, credits:'34000 积分/月', resolution:'不限',
    features:['无限并发','Kling 免费送10条','MJ V7','商用授权','500GB 存储'], note:'年付¥6599·原价¥25182·约136000张图片或3400个视频/月', link:'https://www.liblib.art' },

  // 堆友 (d.design) — 阿里巴巴设计平台
  { platform:'堆友', name:'年卡会员', monthly:null, yearly:799, credits:'按年计费', resolution:'2048×2048',
    features:['国风/科幻/卡通/写实','文生图','图生图','文生视频','AI 试衣','3D 素材'], note:'年付¥799·原价¥1152（约4.5折）·原双年卡¥2072', link:'https://d.design' },

  // 文心一格 — 已于 2025-04-01 合并至文心一言
  { platform:'文心一格(已合并)', name:'已迁移至文心一言', monthly:null, yearly:null, credits:'—', resolution:'—',
    features:['已下线'], note:'2025年4月1日起服务合并至文心一言（yiyan.baidu.com）·绘画功能可在文心一言中继续使用', link:'https://yiyan.baidu.com' },
];

// ===== Image Platform Ratings =====
const IMAGE_RATINGS = [
  {
    name: '即梦', score: 5,
    reasons: ['字节 Seedance 2.0 模型', '图片+视频+数字人+配音四合一', '三档定价清晰（79/239/649）']
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
    reasons: ['万相 2.6 图片+视频+数字人', '阿里云百炼生态整合', 'API 灵活按量计费', '中文提示词优秀']
  },
  {
    name: '堆友', score: 3,
    reasons: ['国风/设计向特色', '阿里设计生态', '年卡¥799 性价比中等', '视频+3D 素材扩展']
  },
];
