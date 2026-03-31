// ===== Audio AI Plans Data =====
const AUDIO_PLANS = [
  // Suno AI — 全球最流行的 AI 音乐生成平台
  { platform:'Suno', name:'Free', monthly:0, yearly:null, credits:'50积分/日（约10首歌）', audioLen:'4分钟',
    features:['文生音乐','歌词生成','v4.5-all模型'], note:'官方定价页：每天 50 credits·仅限非商用·访问 v4.5-all 模型', link:'https://suno.com' },
  { platform:'Suno', name:'Pro', monthly:69, yearly:661, credits:'2500积分/月（约500首歌）', audioLen:'4分钟',
    features:['文生音乐','商用授权','优先队列','10个任务并发','v5.5模型'], note:'官方 $10/月；年付 $96/年（$8/月，省20%）·支持 v5.5 最新模型', link:'https://suno.com' },
  { platform:'Suno', name:'Premier', monthly:207, yearly:1984, credits:'10000积分/月（约2000首歌）', audioLen:'4分钟',
    features:['文生音乐','商用授权','最高优先级','Suno Studio','v5.5模型'], note:'官方 $30/月；年付 $288/年（$24/月，省20%）·解锁全部功能含 Suno Studio', link:'https://suno.com' },

  // Udio — AI 音乐生成新秀
  { platform:'Udio', name:'Free', monthly:0, yearly:null, credits:'10积分/日+100积分/月', audioLen:'2分10秒',
    features:['文生音乐','多种风格','歌词生成'], note:'官方定价页：10 credits/日，月总上限 100·仅限非商用·每日最多3首2分钟长歌', link:'https://www.udio.com' },
  { platform:'Udio', name:'Standard', monthly:69, yearly:662, credits:'2400积分/月', audioLen:'2分10秒',
    features:['更长音乐','商用授权','Voice Control','歌词编辑'], note:'官方 $10/月；年付 $96/年（$8/月）·2400 credits/月·无每日上限', link:'https://www.udio.com' },
  { platform:'Udio', name:'Pro', monthly:207, yearly:1984, credits:'6000积分/月', audioLen:'2分10秒',
    features:['最长音乐','商用授权','10首并发生成','全部功能'], note:'官方 $30/月；年付 $288/年（$24/月）·6000 credits/月·10首并发生成', link:'https://www.udio.com' },

  // 天工AI — 昆仑万维，SkyMusic 模型
  { platform:'天工AI', name:'免费版', monthly:0, yearly:null, credits:'每日免费额度', audioLen:'3分钟',
    features:['SkyMusic 模型','文生音乐','中文优化','歌词生成'], note:'天工SkyMusic 目前完全免费开放使用，暂无付费套餐·官网：music.tiangong.cn', link:'https://music.tiangong.cn' },

  // MiniMax 海螺AI — 音乐模型 API
  { platform:'海螺AI', name:'Music-2.0', monthly:null, yearly:null, credits:'¥0.25/首', audioLen:'不限',
    features:['API 接入','文生音乐','多变音色','丰富乐器'], note:'MiniMax开放平台按量计费：Music-2.0 ¥0.25/首；歌词生成 ¥0.05/首', link:'https://platform.minimaxi.com/docs/guides/pricing-paygo' },
  { platform:'海螺AI', name:'Music-2.5+', monthly:null, yearly:null, credits:'¥1.0/首', audioLen:'不限',
    features:['API 接入','最新模型','纯音乐解锁','突破风格边界'], note:'MiniMax开放平台按量计费：Music-2.5+ ¥1.0/首（最新）；Music-2.5 ¥1.0/首', link:'https://platform.minimaxi.com/docs/guides/pricing-paygo' },

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
    reasons: ['SkyMusic 模型中文优化', '国内用户免费无限量使用', '昆仑万维技术加持']
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
    reasons: ['API 灵活接入', 'MiniMax 技术加持', '开发者友好']
  },
];
