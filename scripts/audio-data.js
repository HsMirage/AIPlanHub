// ===== Audio AI Plans Data =====
const AUDIO_PLANS = [
  // Suno AI — 全球最流行的 AI 音乐生成平台
  { platform:'Suno', name:'Free', monthly:0, yearly:null, credits:'50积分/日（约10首歌）', audioLen:'4分钟',
    features:['文生音乐','歌词生成','v4.5-all模型'], note:'官方定价页：每天 50 credits·仅限非商用·访问 v4.5-all 模型·共享队列最多4首并发', link:'https://suno.com' },
  { platform:'Suno', name:'Pro', monthly:69, yearly:661, credits:'2500积分/月（约500首歌）', audioLen:'4分钟',
    features:['文生音乐','商用授权','优先队列','10个任务并发','v5.5模型'], note:'官方 $10/月；年付 $96/年（$8/月，省20%）·当前春季特惠首年再省20%（$6.40/月）·Pro描述含v5.5但对比表仅列v4~v5', link:'https://suno.com' },
  { platform:'Suno', name:'Premier', monthly:207, yearly:1984, credits:'10000积分/月（约2000首歌）', audioLen:'4分钟',
    features:['文生音乐','商用授权','最高优先级','Suno Studio','v5.5模型'], note:'官方 $30/月；年付 $288/年（$24/月，省20%）·当前春季特惠首年再省20%（$19.20/月）·解锁全部功能含 Suno Studio', link:'https://suno.com' },

  // Udio — AI 音乐生成新秀
  { platform:'Udio', name:'Free', monthly:0, yearly:null, credits:'10积分/日+100积分/月', audioLen:'2分10秒',
    features:['文生音乐','多种风格','歌词生成'], note:'官方定价页：10 credits/日，月总上限 100·仅限非商用·每日最多3首2分钟长歌', link:'https://www.udio.com' },
  { platform:'Udio', name:'Standard', monthly:69, yearly:662, credits:'2400积分/月', audioLen:'2分10秒',
    features:['更长音乐','商用授权','Voice Control','歌词编辑'], note:'官方 $10/月；年付 $96/年（$8/月）·2400 credits/月·无每日上限', link:'https://www.udio.com' },
  { platform:'Udio', name:'Pro', monthly:207, yearly:1984, credits:'6000积分/月', audioLen:'2分10秒',
    features:['最长音乐','商用授权','10首并发生成','全部功能'], note:'官方 $30/月；年付 $288/年（$24/月）·6000 credits/月·10首并发生成', link:'https://www.udio.com' },

  // 天工AI — 昆仑万维，SkyMusic 模型 · 2026.04.16 核对订阅页
  { platform:'天工AI', name:'免费版', monthly:0, yearly:null, credits:'首月每日1500积分·次月起每周1500积分', audioLen:'3分钟',
    features:['SkyMusic 模型','文生音乐','中文优化','歌词生成'], note:'免费积分1日/7日内有效·普通任务生成通道·100次/月积分预估·定时任务1个', link:'https://www.tiangong.cn' },
  { platform:'天工AI', name:'会员', monthly:45, yearly:547, credits:'10000积分/月', audioLen:'3分钟',
    features:['SkyMusic 模型','文生音乐','中文优化','专属任务通道','10个定时任务'], note:'连续包月¥45/月（93折）·月度¥48/月·季度¥141/季（98折）·年度¥547/年（95折）·10000积分/月·积分预估100次/月', link:'https://www.tiangong.cn' },

  // 海螺AI（MiniMax Audio）— 2026.04.14 核对订阅页；支持月度/年度切换和横向套餐卡片
  // 当前订阅页展示 5 档：免费 / 标准版 / 创作版 / 专业版 / 大师版；年度价格分别折合 ¥32 / 98 / 188 / 588 每月
  { platform:'海螺AI', name:'免费', monthly:0, yearly:null, credits:'0声贝', audioLen:'0分钟（限时免费活动）',
    features:['Music 2.6','Speech 2.8','300+高质音色','3个专属音色卡槽'], note:'订阅页免费档·当前显示“Music 2.6 开启14天免费生成”·限时免费期间新创歌曲可商用', link:'https://www.minimaxi.com/audio/subscribe' },
  { platform:'海螺AI', name:'标准版', monthly:36, yearly:384, credits:'10万声贝（≈330首歌曲）', audioLen:'≈120分钟高清音频',
    features:['Music 2.6','Speech 2.8','10个专属音色卡槽','新创歌曲可商用'], note:'月度 ¥36/月；年度 ¥384/年（折合¥32/月，优惠11%）', link:'https://www.minimaxi.com/audio/subscribe' },
  { platform:'海螺AI', name:'创作版', monthly:108, yearly:1176, credits:'33万声贝（≈1100首歌曲）', audioLen:'≈400分钟高清音频',
    features:['Music 2.6','Speech 2.8','30个专属音色卡槽','新创歌曲可商用'], note:'月度 ¥108/月（标价¥128，优惠16%）；年度 ¥1176/年（折合¥98/月，优惠23%）', link:'https://www.minimaxi.com/audio/subscribe' },
  { platform:'海螺AI', name:'专业版', monthly:208, yearly:2256, credits:'75万声贝（≈2500首歌曲）', audioLen:'≈900分钟高清音频',
    features:['Music 2.6','Speech 2.8','50个专属音色卡槽','新创歌曲可商用'], note:'月度 ¥208/月（标价¥268，优惠22%）；年度 ¥2256/年（折合¥188/月，优惠30%）', link:'https://www.minimaxi.com/audio/subscribe' },
  { platform:'海螺AI', name:'大师版', monthly:688, yearly:7056, credits:'300万声贝（≈1万首歌曲）', audioLen:'≈3600分钟高清音频',
    features:['Music 2.6','Speech 2.8','200个专属音色卡槽','新创歌曲可商用'], note:'月度 ¥688/月（标价¥1088，优惠37%）；年度 ¥7056/年（折合¥588/月，优惠46%）', link:'https://www.minimaxi.com/audio/subscribe' },

  // Ace Studio — AI 歌声合成
  { platform:'Ace Studio', name:'Artist', monthly:null, yearly:1741, credits:'Generative Kits ~330分钟/月', audioLen:'不限',
    features:['AI 歌声合成','AI Instruments','1个 Vocal Slot','1个 Voice Changer Slot','AI生成无限次'], note:'官网年付正价 $20.73/月（$248.76/年）·2年 Rent-to-Own 转永久授权·当前有春季折扣价 $16.58/月', link:'https://acestudio.ai' },
  { platform:'Ace Studio', name:'Artist Pro', monthly:null, yearly:2310, credits:'Generative Kits ~660分钟/月', audioLen:'不限',
    features:['AI 歌声合成','AI Instruments','5个 Vocal Slots','10个 Voice Changer Slots','AI生成无限次'], note:'官网年付正价 $27.5/月（$330/年）·2年 Rent-to-Own 转永久授权·当前有春季折扣价 $22/月', link:'https://acestudio.ai' },
];

// ===== Audio Platform Ratings =====
const AUDIO_RATINGS = [
  {
    name: 'Suno', score: 5,
    reasons: ['官方帮助中心写明免费 50 credits/日', 'Pro / Premier 支持商用', '年付有 20% 折扣']
  },
  {
    name: '天工AI', score: 4,
    reasons: ['SkyMusic 模型中文优化', '会员10000积分/月（¥45起）', '年付95折·专属任务通道', '昆仑万维技术加持']
  },
  {
    name: 'Udio', score: 4,
    reasons: ['官方公开有 Standard / Pro 两个月费档', '帮助中心 credits 口径存在新旧差异', '需以最新帮助中心页为准']
  },
  {
    name: 'Ace Studio', score: 3,
    reasons: ['AI 歌声合成专业', 'MIDI 集成', '适合歌声制作与工程流程']
  },
  {
    name: '海螺AI', score: 3,
    reasons: ['已上线免费+4档订阅会员', 'Music 2.6 / Speech 2.8 纳入会员权益', '年度折扣明显，大师版最高省46%']
  },
];
