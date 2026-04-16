// ===== Video AI Plans Data =====
const VIDEO_PLANS = [
  // pai.video (PixVerse 国内版 / 拍我AI) — 推广链接
  { platform:'pai.video', name:'基础版(免费)', monthly:0, yearly:null, credits:'120初始+60积分/日', videoLen:'4-8秒', resolution:'720P',
    features:['文生视频','图生视频','音生视频','2并发','有水印'], note:'每日UTC 0点赠送60积分·当日有效不累积·文件夹上限30个', link:'https://share.pai.video/referral/U0NMCK13' },
  { platform:'pai.video', name:'标准版', monthly:79, yearly:758, credits:'1200积分/月', videoLen:'4-8秒', resolution:'720P',
    features:['文生视频','图生视频','音生视频','无水印','无限模板','预览省20%积分'], note:'月付¥63(年付¥758)·3并发·积分包额外赠送10%', link:'https://share.pai.video/referral/U0NMCK13' },
  { platform:'pai.video', name:'专业版', monthly:239, yearly:2298, credits:'6000积分/月', videoLen:'4-8秒', resolution:'1080P',
    features:['文生视频','图生视频','音生视频','无水印','无限模板','批量生成(4张)','错峰省30%积分'], note:'月付¥192(年付¥2298)·5并发·积分包额外赠送30%', link:'https://share.pai.video/referral/U0NMCK13' },
  { platform:'pai.video', name:'尊享版', monthly:459, yearly:4398, credits:'15000积分/月', videoLen:'4-8秒', resolution:'1080P',
    features:['文生视频','图生视频','音生视频','无水印','无限模板','批量生成(4张)','错峰省50%积分'], note:'月付¥367(年付¥4398)·8并发·积分包额外赠送50%', link:'https://share.pai.video/referral/U0NMCK13' },

  // 即梦 (Jimeng) — 字节跳动旗下统一会员体系（图片/视频/数字人共用）— 更新于 2026.04.15
  { platform:'即梦', name:'免费版', monthly:0, yearly:null, credits:'60~100积分/日', videoLen:'5秒', resolution:'标清',
    features:['Seedance 全系列','文生视频','图生视频'], note:'统一会员体系·每日免费领取积分·当月有效不累积·带水印·分辨率受限', link:'https://jimeng.jianying.com' },
  { platform:'即梦', name:'基础会员', monthly:69, yearly:393, credits:'725积分/月', videoLen:'5-15秒', resolution:'1080P',
    features:['Seedance 2.0','文生视频','图生视频','音生视频','闲置5折','去水印'], note:'统一会员体系·单月¥79·连续包月¥69·首年连续包年¥393(6折)·次年¥659·725积分/月', link:'https://jimeng.jianying.com' },
  // 标准会员已下架
  { platform:'即梦', name:'高级会员', monthly:499, yearly:3099, credits:'6160积分/月', videoLen:'5-15秒', resolution:'1080P',
    features:['Seedance 2.0','文生视频','图生视频','音生视频','闲置9折','补帧60FPS','5并发'], note:'统一会员体系·单月¥649·连续包月¥499·首年连续包年¥3099(6折)·次年¥5199·6160积分/月', link:'https://jimeng.jianying.com' },

  // 通义万相 — 阿里巴巴（万相2.6）
  { platform:'通义万相', name:'免费', monthly:0, yearly:null, credits:'每日免费额度', videoLen:'未注明', resolution:'未注明',
    features:['文生视频','图生视频','1个视频并发','1个图片并发','无限生成（慢速）'], note:'官方页显示：免费版·1个视频并发·1个图片并发·6个文生图风格模板·无限生成（慢速）', link:'https://tongyi.aliyun.com/wan/pricing' },
  { platform:'通义万相', name:'标准会员', monthly:72, yearly:432, credits:'300 灵感值/月', videoLen:'10秒/15秒', resolution:'1080P',
    features:['文生视频','图生视频','3个视频并发','去品牌水印','高清放大','1080P'], note:'官方页显示：¥72/月·连续包年等价¥36/月（5折）·连续包月 6.5折·最多加速60个视频或1200张图片/月', link:'https://tongyi.aliyun.com/wan/pricing' },
  { platform:'通义万相', name:'高级会员', monthly:288, yearly:1740, credits:'1200 灵感值/月', videoLen:'10秒/15秒', resolution:'1080P',
    features:['文生视频','图生视频','8个视频并发','去品牌水印','高清放大','1080P'], note:'官方页显示：¥288/月·连续包年等价¥145/月（5折）·连续包月 6.5折·最多加速240个视频或4800张图片/月', link:'https://tongyi.aliyun.com/wan/pricing' },

  // 快手可灵 (Kling) — 5档会员 + 年卡
  { platform:'快手可灵', name:'免费版', monthly:0, yearly:null, credits:'每月登录赠送灵感值', videoLen:'5秒', resolution:'720P',
    features:['每日免费','文生视频','图生视频','有水印'], note:'灵感值当月有效不累积·不可商用·排队时间较长·主体创建30个', link:'https://kling.kuaishou.com' },
  { platform:'快手可灵', name:'黄金会员', monthly:66, yearly:554, credits:'660灵感值/月', videoLen:'5-10秒', resolution:'1080P',
    features:['高清画质','更长视频','去水印','可商用','加速生成','不限并发'], note:'原价¥66/月·连续包月¥58/月·首月¥46·7天试用¥5.99(新客)', link:'https://kling.kuaishou.com' },
  { platform:'快手可灵', name:'铂金会员', monthly:266, yearly:2234, credits:'3000灵感值/月', videoLen:'5-10秒', resolution:'1080P',
    features:['高清画质','更长视频','去水印','可商用','优先队列','图片3.0一年免费'], note:'原价¥266/月·连续包月¥234/月·首月¥186·年付¥2234', link:'https://kling.kuaishou.com' },
  { platform:'快手可灵', name:'钻石会员', monthly:666, yearly:5594, credits:'8000灵感值/月', videoLen:'3-15秒', resolution:'1080P',
    features:['高清画质','15秒长视频','去水印','可商用','优先队列','图片3.0一年免费'], note:'原价¥666/月·连续包月¥586/月·首月¥466·年付¥5594', link:'https://kling.kuaishou.com' },
  { platform:'快手可灵', name:'黑金会员', monthly:1314, yearly:11079, credits:'26000灵感值/月', videoLen:'3-15秒', resolution:'1080P',
    features:['高清画质','15秒长视频','去水印','可商用','最高优先级','限量内测功能','图片3.0一年免费'], note:'原价¥1314/月·连续包月¥1149/月·首月¥916·年付¥11079·主体创建500个', link:'https://kling.kuaishou.com' },

  // 海螺AI (HailuoAI) — MiniMax 旗下 — 更新于 2026.04.16
  { platform:'海螺AI', name:'基础会员', monthly:105, yearly:660, credits:'1000贝壳/月', videoLen:'6-10秒', resolution:'768P/1080P',
    features:['Hailuo 2.3','文生视频','图生视频','无水印下载','Hailuo 1.0 6秒'], note:'原价¥105/月·连续包月¥68/月(65折)·年付¥660(约¥55/月)', link:'https://hailuoai.com/subscribe' },
  { platform:'海螺AI', name:'标准会员', monthly:385, yearly:2352, credits:'4500贝壳/月', videoLen:'6-10秒', resolution:'768P/1080P',
    features:['Hailuo 2.3 10秒','文生视频','图生视频','双任务并发','Seedream 5.0无限','Midjourney V7无限'], note:'原价¥385/月·连续包月¥196/月(57折)·年付¥2352(约¥196/月)', link:'https://hailuoai.com/subscribe' },
  { platform:'海螺AI', name:'大师会员', monthly:799, yearly:5556, credits:'10500贝壳/月', videoLen:'6-10秒', resolution:'768P/1080P',
    features:['Hailuo 2.0/2.3 限时无限','文生视频','图生视频','双任务并发','Seedream 5.0 2K无限','Midjourney V7无限'], note:'原价¥799/月·连续包月¥463/月(58折)·年付¥5556(约¥463/月)', link:'https://hailuoai.com/subscribe' },
  { platform:'海螺AI', name:'至臻会员', monthly:899, yearly:10788, credits:'12000贝壳/月', videoLen:'6-10秒', resolution:'768P/1080P',
    features:['Hailuo 2.0/2.3 限时无限','Hailuo 1.0 无限','双任务并发','Seedream 5.0 3K无限','全能图片Pro 4K'], note:'原价¥899/月·年付¥10788(约¥899/月)', link:'https://hailuoai.com/subscribe' },
  { platform:'海螺AI', name:'尊享会员', monthly:1399, yearly:16788, credits:'20000贝壳/月', videoLen:'6-10秒', resolution:'768P/1080P',
    features:['Hailuo 2.0/2.3 系列模型无限','Hailuo 1.0 系列模型无限','双任务并发','Seedream 5.0 3K无限','全能图片Pro 4K','光影工作室无限'], note:'原价¥1399/月·年付¥16788(约¥1399/月)·全系列无限生成', link:'https://hailuoai.com/subscribe' },

  // Vidu — 生数科技
  { platform:'Vidu', name:'免费版', monthly:0, yearly:null, credits:'登录赠送积分', videoLen:'6-8秒', resolution:'720P',
    features:['文生视频','图生视频','参考生视频'], note:'登录赠送试用积分·错峰生成·不可商用·主体库10个/月', link:'https://www.vidu.cn/login?invite_code=LVTeijeEqYBnn2Xx' },
  { platform:'Vidu', name:'标准版', monthly:48, yearly:579, credits:'800积分/月', videoLen:'6-8秒', resolution:'1080P',
    features:['文生视频','图生视频','参考生视频','快速通道','Agent部分功能','H265/H264 Pro'], note:'月付¥48·年付¥579(约¥48/月)·200视频/月·主体库50个·可商用·连续包月最低8.5折', link:'https://www.vidu.cn/login?invite_code=LVTeijeEqYBnn2Xx' },
  { platform:'Vidu', name:'专业版', monthly:179, yearly:2148, credits:'4000积分/月', videoLen:'6-8秒', resolution:'1080P',
    features:['文生视频','图生视频','参考生视频','高速通道','Agent部分功能','新功能优先体验'], note:'月付¥179·年付¥2148(约¥179/月)·1000视频/月·主体库100个·可商用', link:'https://www.vidu.cn/login?invite_code=LVTeijeEqYBnn2Xx' },
  { platform:'Vidu', name:'旗舰版', monthly:559, yearly:6710, credits:'8000积分/月', videoLen:'6-8秒', resolution:'1080P/4K',
    features:['文生视频','图生视频','参考生视频','极速通道','Agent全部权益','超清4K','Q2 1080p生图无限','错峰免费每日200视频'], note:'月付¥559·年付¥6710(约¥559/月)·主体库300个·标记为超值之选·可商用', link:'https://www.vidu.cn/login?invite_code=LVTeijeEqYBnn2Xx' },

  // 腾讯混元视频 — 仅 API，无 Web 端会员
  { platform:'腾讯混元', name:'旧接口·资源包', monthly:null, yearly:null, credits:'预付费资源包·1年有效', videoLen:'按接口', resolution:'按接口',
    features:['视频风格化 32.5~26元/分','图片跳舞 12~8.7元/次','图片唱演 44~42元/分'], note:'腾讯云文档最新确认；旧接口三选一计费（资源包/后付费/并发）；免费额度：视频风格化 5分钟·图片跳舞 5次·图片唱演 5分钟', link:'https://cloud.tencent.com/document/product/1616/79753' },
  { platform:'腾讯混元', name:'旧接口·后付费', monthly:null, yearly:null, credits:'月结阶梯', videoLen:'按接口', resolution:'按接口',
    features:['视频风格化 25~32元/分','图片跳舞 9~14元/次','图片唱演 45元/分(日结)'], note:'腾讯云文档最新确认；后付费月结·阶梯定价·图片唱演为日结', link:'https://cloud.tencent.com/document/product/1616/79753' },
  { platform:'腾讯混元', name:'新接口·积分资源包', monthly:null, yearly:null, credits:'积分制·1元/积分·5000积分起', videoLen:'5秒', resolution:'480P/720P/1080P',
    features:['图生视频 2~5积分/次','混元生视频 1.5~3积分/次','人像驱动 1~2积分/秒','人脸融合 0.5积分/秒','视频特效(按模板)'], note:'腾讯云文档最新确认；新积分制接口·默认5并发·后付费1.2元/积分(日结)·免费额度50积分', link:'https://cloud.tencent.com/document/product/1616/118994' },
  { platform:'腾讯混元', name:'并发计费', monthly:null, yearly:null, credits:'按并发数计费', videoLen:'不限', resolution:'不限',
    features:['旧接口 16500~17800元/并发/月','新接口叠加包 20000元/并发/月','新接口纯并发 25000元/并发/月'], note:'腾讯云文档最新确认；旧接口(风格化16500/跳舞17800/唱演17500)；新接口叠加包1000元/天·纯并发1500元/天；适合企业大批量调用', link:'https://cloud.tencent.com/document/product/1616/79753' },
];

// ===== Video Platform Ratings =====
const VIDEO_RATINGS = [
  {
    name: '快手可灵', score: 5,
    reasons: ['免费每月登录赠送灵感值', '业界领先视频质量', '5档会员(黄金/铂金/钻石/黑金)+年卡', 'Kling 3.0 智能分镜·15秒长视频·1080P']
  },
  {
    name: 'Vidu', score: 4,
    reasons: ['4档会员(免费/标准¥48/专业¥179/旗舰¥559)', '年付最低7折·连续包月8.5折', '1080P+4K超清·Agent功能·可商用']
  },
  {
    name: '通义万相', score: 4,
    reasons: ['官方会员公开透明(免费/标准¥72/高级¥288)', '300/1200灵感值·3/8视频并发', '1080P高清·10秒/15秒视频']
  },
  {
    name: '海螺AI', score: 4,
    reasons: ['5档会员体系(基础¥68连续包月起)', '1000~20000贝壳/月·年付限时4折', 'Hailuo 2.3最新模型·至臻/尊享含无限生成']
  },
  {
    name: 'pai.video', score: 4,
    reasons: ['拍我AI·PixVerse国内版', '4档会员(免费/标准¥79/专业¥239/尊享¥459)', '多模态输入(文/图/音)·积分制灵活·错峰折扣']
  },
  {
    name: '即梦', score: 4,
    reasons: ['字节跳动 Seedance 2.0 全系列模型', '统一会员体系(免费/基础¥69/高级¥499)', '视频侧重点：15秒长视频·1080P高清·闲置折扣低至5折']
  },
  {
    name: '腾讯混元', score: 3,
    reasons: ['仅 API 服务·无 Web 端会员', '新积分制接口(图生视频/混元生视频/人像驱动等)', '资源包/后付费/并发三种计费·文档已验证最新']
  },
];
