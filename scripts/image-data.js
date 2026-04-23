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

  // 即梦 — 字节跳动旗下统一会员体系（图片/视频/数字人共用）
  // 更新日期: 2026-04-23 | 来源: 以 Video 任务核对的统一会员信息同步到 Image
  // 2026-04-23: 新增1元试用7天、积分月度上限、4K模型免费截止日期
  { platform:'即梦', name:'基础会员', monthly:69, yearly:393, credits:'725 积分/月(最多2900张图)', resolution:'多尺寸',
    features:['文生图','图生图','智能画布','图片4.0 2K模型','局部重绘','去水印'], note:'1元试用7天(立得165积分)·统一会员体系·连续包月¥69/月·首年连续包年¥393/年（6折）·次年¥659/年·单月购买¥79', link:'https://jimeng.jianying.com' },
  { platform:'即梦', name:'高级会员', monthly:499, yearly:3099, credits:'6160 积分/月(最多24640张图)', resolution:'多尺寸',
    features:['全功能解锁','文生图','图生图','图片4.0 4K模型','大师模式','商用权益'], note:'1元试用7天(立得165积分)·统一会员体系·连续包月¥499/月·首年连续包年¥3099/年（6折）·次年¥5199/年·单月购买¥649·4K模型2026.11.06前高级会员免费', link:'https://jimeng.jianying.com' },

  // 通义万相 — 阿里巴巴（万相2.6）
  // 更新日期: 2026-04-12 | 来源: CDP 浏览器抓取 | 价格核实: 连续包年5折·连续包月6.5折
  { platform:'通义万相', name:'免费', monthly:0, yearly:null, credits:'每日免费额度', resolution:'多尺寸',
    features:['文生图','6个风格模板','无限生成（慢速）','同时提交1个视频+1个图片任务'], note:'万相 2.6 已支持图片+视频+音频生成·API 按阿里云百炼控制台计费', link:'https://tongyi.aliyun.com/wan/pricing' },
  { platform:'通义万相', name:'标准会员', monthly:47, yearly:432, credits:'300 灵感值/月', resolution:'多尺寸',
    features:['文生图','图生图','3个图片+3个视频并发','去品牌水印','高清放大','1080p视频','10s&15s视频'], note:'连续包月¥47/月(6.5折)·连续包年等价¥36/月(5折)·原价¥72/月', link:'https://tongyi.aliyun.com/wan/pricing' },
  { platform:'通义万相', name:'高级会员', monthly:187, yearly:1740, credits:'1200 灵感值/月', resolution:'多尺寸',
    features:['全功能解锁','8个视频+5个图片并发','高清放大','更长视频（10s/15s）','商用授权'], note:'连续包月¥187/月(6.5折)·连续包年等价¥145/月(5折)·原价¥288/月', link:'https://tongyi.aliyun.com/wan/pricing' },

  // Liblib AI (哩布哩布) — 模型社区+创作平台
  // 更新日期: 2026-04-12 | 来源: CDP 浏览器抓取 | 新增: Seedance 2.0 VIP, kling 3.0/O3 智能分镜
  { platform:'Liblib AI', name:'基础版', monthly:null, yearly:399, credits:'800 积分/月', resolution:'不限',
    features:['10万+模型','WebUI/ComfyUI','训练 LoRA','视频生成','Seedance 2.0 VIP','kling 3.0/O3','智能分镜'], note:'年付¥399(限时68折)·原价¥588·次年¥399/年·4.16元/100积分·每日赠送20积分', link:'https://www.liblib.art/viphome' },
  { platform:'Liblib AI', name:'专业版', monthly:null, yearly:499, credits:'1800 积分/月', resolution:'不限',
    features:['10万+模型','视频生成','训练 LoRA','Seedance 2.0 VIP','kling 3.0/O3','智能分镜','6并发'], note:'年付¥499(限时53折)·原价¥948·次年¥639/年·2.31元/100积分·每日赠送20积分', link:'https://www.liblib.art/viphome' },
  { platform:'Liblib AI', name:'大师版', monthly:null, yearly:1299, credits:'5800 积分/月', resolution:'不限',
    features:['顶级算力','训练 LoRA','Seedance 2.0 VIP','kling 3.0/O3','智能分镜','10并发','130GB存储'], note:'年付¥1299(限时47折)·原价¥2748·108元/月·1.87元/100积分·每日赠送20积分', link:'https://www.liblib.art/viphome' },
  { platform:'Liblib AI', name:'旗舰版', monthly:null, yearly:2999, credits:'15800 积分/月', resolution:'不限',
    features:['顶级算力','Seedance 2.0 VIP','kling 3.0/O3','智能分镜','20并发','商用授权'], note:'年付¥2999(限时4折)·原价¥7548·250元/月·1.58元/100积分', link:'https://www.liblib.art/viphome' },
  { platform:'Liblib AI', name:'尊享版', monthly:null, yearly:6599, credits:'34000 积分/月', resolution:'不限',
    features:['无限并发','Seedance 2.0 VIP','kling 3.0/O3','智能分镜','SD2+Kling共送180条','商用授权'], note:'年付¥6599(限时39折)·原价¥16788·550元/月·1.62元/100积分', link:'https://www.liblib.art/viphome' },

  // 堆友 (d.design) — 阿里巴巴设计平台
  // 更新日期: 2026-04-13 | 来源: CDP 浏览器抓取（领猫超卡弹窗）
  // 标准版: ¥24.92起/月，2400堆豆，8并发，海量设计专辑（¥39/月·¥36.33/季·¥299/年）
  // 专业版: ¥33.25起/月，3200堆豆，不限并发，设计Agent，商用授权（¥59/月·¥53/季·¥399/年）
  // 团队版: ¥33.25起/月，2400堆豆(全员共享)，1TB存储，权限管理（仅年卡¥399/年·1席位）
  { platform:'堆友', name:'标准版', monthly:39, yearly:299, credits:'2400 堆豆/月', resolution:'2048×2048',
    features:['文生图','图生视频','AI试衣','3D素材','海报Agent','无水印','8并发','海量设计专辑'], note:'月卡¥39/季卡¥36.33/年卡¥299·¥24.92/月起', link:'https://d.design' },
  { platform:'堆友', name:'专业版', monthly:59, yearly:399, credits:'3200 堆豆/月', resolution:'2048×2048',
    features:['文生图','图生视频','AI试衣','3D素材','海报Agent','不限并发','设计Agent','商用授权'], note:'月卡¥59/季卡¥53/年卡¥399·¥33.25/月起', link:'https://d.design' },
  { platform:'堆友', name:'团队版', monthly:null, yearly:399, credits:'2400 堆豆/月(全员共享)', resolution:'2048×2048',
    features:['团队权限管理','堆豆全员共享','品牌资产管理','数据看板','1TB云存储','商用授权'], note:'仅年卡¥399/年(1席位)·¥33.25/月起', link:'https://d.design' },

  // 文心一格 — 已于 2025-04-01 合并至文心一言
  { platform:'文心一格(已合并)', name:'已迁移至文心一言', monthly:null, yearly:null, credits:'—', resolution:'—',
    features:['已下线'], note:'2025年4月1日起服务合并至文心一言（yiyan.baidu.com）·绘画功能可在文心一言中继续使用', link:'https://yiyan.baidu.com' },

  // ChatGPT - 第三方渠道售卖
  { platform:'ChatGPT', name:'Token', monthly:10, yearly:null, credits:'100 刀', resolution:'多尺寸',
    features:['长期有效','GPT-Image-2 生图'], note:'⚠️第三方渠道·GPT-Image-2模型8分钱一次', link:'https://pay.ldxp.cn/shop/mirage' },
];

// ===== Image Platform Ratings =====
const IMAGE_RATINGS = [
  {
    name: '即梦', score: 5,
    reasons: ['字节 Seedance 2.0 统一会员体系', '图片侧重点：文生图/图生图/智能画布/4K模型', '两档定价（¥69/¥499）精简清晰']
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
  {
    name: 'ChatGPT', score: 5, isAd: true,
    reasons: ['10元100刀额度，长期有效', 'GPT-Image-2模型8分钱一次']
  },
];
