// ===== Plans Data =====
// Last Updated: 2026.09.18（Coding cron·CDP批量抓取25条目成功23·2平台发生变化——①xKiro：模型目录93→102款(新增LongCat-2.0+Qwen系列12款·移除DeepSeek V3.1/V3.2与Codex 5.3 Spark·api.xkiro.com/v1/models权威源两次一致·价格/周额度$35/70/140/700/1400不变) ②OpenCode Go：模型37→38款(新增Union Alpha限时免费模型·opencode官方·信息页显示∞额度·API两次一致)+DS-V4.1-Flash限时4倍用量横幅仍在(9.20结束)·$10/月不变；其余 智谱AI(GLM-5.3系+抵扣系数表一致)/z.ai/Kimi/MiniMax(三档价格/年付折扣/积分购买/M2.7参考调用量全一致)/字节方舟/阿里百炼/腾讯Coding/移动云/优云智算(6档价格额度全一致)/讯飞星辰(登录态·套餐卡未渲染·延续观察)/阶跃星辰/快手StreamLake(首页无Coding定价区·延续)/Ollama(Free/Pro$20/Team$500+模型定价表19款与09.16记录一致)/OpenStarry(CDP渲染旧缓存页陷阱·源站直连两次sha一致·正文 星序¥9.9/星衍¥19.9/星途¥99+自选 均与data一致·JSON-LD为旧SEO残留勿信)/CatPaw/CharmHyper/稳明光语纪(销售页仅渲染Lite卡·延续09.12四档记录)/蓝耘/MiMo(桌面客户端邀测横幅+Claw特价·Token Plan数据不变)/TaoToken(新一轮抢购进行中·倒计时3天14时·Lite ¥39已售罄·Pro ¥99/Max ¥299抢购中·双Flash·价格额度不变)/CommandCode(五档$1/$10/$20/$100/$200·月额度$10/$70/$80/$150/$300·请求估算15K/75K/100K/219K/437K全一致) 经核对无变化；获取失败：联通云(主站)/AtomCode(SSL协议错误·延续)
// 前次：2026.09.05 Coding cron：🔄阶跃星辰 Step-Image-Edit-2 将于 2026.10.10 下线；其余 23 条无变化
// 前次：2026.09.02 Coding cron：商汤SenseNova 模型总览恢复 7 款；监控URL更新：字节·方舟迁移至 82379/1925114；Kimi 改走帮助中心页
const PLANS = [
  // 智谱AI - 2026.08.11 重大重构：改为积分制 + 价格大幅上调（月付Lite ¥118/Pro ¥538/Max ¥1078，原¥49/¥149/¥469）
  // 2026.08.15核对：文档已更新为 GLM-5.3 为主模型（历史模型 GLM-5.2/GLM-5.1 自动切换至 GLM-5.3）；新增 GLM-4.6V 视觉理解 MCP；价格/积分额度不变
  // 2026.08.27核对：文档更新——所有套餐支持 GLM-5.3、GLM-5.3-Flash（GLM-5.2/5.1 自动切换至 GLM-5.3·GLM-5-Turbo/4.7 自动切换至 GLM-5.3-Flash）；新增 GLM-5.3-Flash（含视觉理解 MCP）抵扣系数 2.3/0.56/8；价格/积分额度不变
  // 季付8折：Lite ¥94.4/月(¥283.2/季)、Pro ¥430.4/月(¥1291.2/季)、Max ¥862.4/月(¥2587.2/季)
  // 年付7折：Lite ¥82.6/月(¥991.2/年)、Pro ¥376.6/月(¥4519.2/年)、Max ¥754.6/月(¥9055.2/年)
  // 积分额度：Lite 2000/5h·10000/周；Pro 12000/5h·60000/周；Max 28000/5h·140000/周（原按prompts计，现按积分计）
  // 积分抵扣：GLM-5.3 Input 6.9/Cached 1.7/Output 24；非高峰(周一~五14:00-18:00外)按50%抵扣
  // 所有套餐统一支持 GLM-5.3、GLM-5.3-Flash（08.27更新）；MCP(视觉理解/联网搜索/网页读取/开源仓库)与模型共享积分额度
  { platform:'智谱AI', name:'Lite', monthly:118, quarterly:283.2, yearly:991.2, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash'], req5h:2000, reqMonth:null, reqWeek:10000, benefits:['积分制·支持MCP','20+编程工具'],    note:'⚠️2026.08.11改积分制+涨价·月付¥118·季付8折¥94.4/月·年付7折¥82.6/月·2000积分/5h·10000积分/周·GLM-5.3抵扣Input6.9/Output24·GLM-5.3-Flash抵扣2.3/0.56/8·非高峰50%·GLM-5-Turbo/4.7自动切换至5.3-Flash·MCP共享额度', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },
  { platform:'智谱AI', name:'Pro', monthly:538, quarterly:1291.2, yearly:4519.2, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash'], req5h:12000, reqMonth:null, reqWeek:60000, benefits:['积分制·优先体验新模型','6倍Lite额度'], note:'⚠️2026.08.11改积分制+涨价·月付¥538·季付8折¥430.4/月·年付7折¥376.6/月·12000积分/5h·60000积分/周·GLM-5.3抵扣Input6.9/Output24·GLM-5.3-Flash抵扣2.3/0.56/8·非高峰50%·GLM-5-Turbo/4.7自动切换至5.3-Flash·MCP共享额度', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },
  { platform:'智谱AI', name:'Max', monthly:1078, quarterly:2587.2, yearly:9055.2, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash'], req5h:28000, reqMonth:null, reqWeek:140000, benefits:['积分制·高峰期专属资源','14倍Lite额度'], note:'⚠️2026.08.11改积分制+涨价·月付¥1078·季付8折¥862.4/月·年付7折¥754.6/月·28000积分/5h·140000积分/周·GLM-5.3抵扣Input6.9/Output24·GLM-5.3-Flash抵扣2.3/0.56/8·非高峰50%·GLM-5-Turbo/4.7自动切换至5.3-Flash·MCP共享额度', link:'https://www.bigmodel.cn/glm-coding?ic=DGRQECTZFB' },

  // z.ai（智谱国际版）- 2026.08.11 核对：改为积分制，Pro/Max涨价（月付Lite $18/Pro $80/Max $168，原$18/$72/$160）
  // 2026.08.15核对：FAQ 确认 All plans support GLM-5.3, GLM-5-Turbo, GLM-4.7（GLM-5.2→GLM-5.3）
  // 2026.08.27核对：FAQ 更新——All plans support GLM-5.3, GLM-5-Flash（GLM-5-Turbo/GLM-4.7 不再列出·国际版命名）
  // 2026.08.29核对：FAQ 更新——All plans support GLM-5.3, GLM-5.3-Flash（GLM-5-Flash 已不再列出·与国际版命名统一为 GLM-5.3-Flash·两次独立抓取一致）
  // 季付-20%：Lite $14.4/月($43.2/季)、Pro $64/月($192/季)、Max $134.4/月($403.2/季)
  // 年付-30%：Lite $12.6/月($151.2/年)、Pro $56/月($672/年)、Max $117.6/月($1411.2/年)
  // 积分额度与智谱国内版一致：Lite 2000/5h·10000/周；Pro 12000/5h·60000/周；Max 28000/5h·140000/周
  // 积分抵扣：GLM-5.3 Input 6.9/Cached 1.7/Output 24；非高峰(周一~五14:00-18:00外)按50%抵扣
  // 支持模型（08.29更新）：GLM-5.3/GLM-5.3-Flash；MCP(视觉理解/联网搜索/网页读取/Zread)共享积分额度
  { platform:'z.ai', name:'Lite', monthly:18, quarterly:43.2, yearly:151.2, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash'], req5h:2000, reqMonth:null, reqWeek:10000, benefits:['3× Claude Pro 用量','兼容 Claude Code/Cursor/Cline 等 20+ 工具'], note:'⚠️2026.08.11改积分制·月付$18(未变)·季付-20%$14.4/月·年付-30%$12.6/月·2000积分/5h·10000积分/周·GLM-5.3抵扣Input6.9/Output24·非高峰50%·支持GLM-5.3+GLM-5.3-Flash(FAQ 08.29更新)·MCP共享额度', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },
  { platform:'z.ai', name:'Pro', monthly:80, quarterly:192, yearly:672, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash'], req5h:12000, reqMonth:null, reqWeek:60000, benefits:['5× Lite 用量','优先体验新模型','40%-60% 更快响应'], note:'⚠️2026.08.11改积分制+涨价($72→$80)·季付-20%$64/月·年付-30%$56/月·12000积分/5h·60000积分/周·GLM-5.3抵扣Input6.9/Output24·非高峰50%·支持GLM-5.3+GLM-5.3-Flash(FAQ 08.29更新)·MCP共享额度', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },
  { platform:'z.ai', name:'Max', monthly:168, quarterly:403.2, yearly:1411.2, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash'], req5h:28000, reqMonth:null, reqWeek:140000, benefits:['4× Pro 用量','高峰期保证性能','抢先体验新模型'], note:'⚠️2026.08.11改积分制+涨价($160→$168)·季付-20%$134.4/月·年付-30%$117.6/月·28000积分/5h·140000积分/周·GLM-5.3抵扣Input6.9/Output24·非高峰50%·支持GLM-5.3+GLM-5.3-Flash(FAQ 08.29更新)·MCP共享额度', link:'https://z.ai/subscribe?ic=V6PINPKB9I' },

  // Kimi - 官网实测：连续包月原价/连续包年折扣价
  // 2026.04.25核对：页面显示"¥39/月 ¥49"格式，实际为年付月均(¥468÷12=¥39)与月付单价(¥49)的对比，非首月优惠
  //   firstMonth 改为 null（无首月优惠）
  // 2026.06.13核对：K2.7 Code 正式版已上线，全面替代 K2.6
  // 2026.08.09核对：连续包月恢复为¥49/¥99/¥199/¥699；年付价格仍为¥468/¥948/¥1908/¥6708。K3仅Moderato及以上可用，K2.5将于8.31全平台下线。
  // 2026.08.20核对：价格不变；套餐卡片「立即订购」显示为「已预约」（预约制开放），K3 1M上下文横幅持续
  // 2026.08.25核对：CN 价格不变（连续包月¥49/99/199/699·年付¥468/948/1908/6708·新增 Adagio 免费档 0元）；国际站 pricing 页预告「New Membership Plans Coming Soon——Kimi 与 Kimi Code 权益将分离」·新档位（Moderato $15/月均等 USD）Join Waitlist·观察项不影响本地数据
  // 2026.09.01核对：Kimi API 官方文档确认 kimi-k2.5 全平台已于 2026.08.31 正式下线（已停止向新注册用户开放·腾讯云 API 亦同日移除）→ K2.5 按已下架处理从 models 移除
  { platform:'Kimi', name:'Andante', monthly:49, quarterly:null, yearly:468, firstMonth:null,
    models:['kimi-k2.7-code'], req5h:null, reqMonth:null, reqWeek:null, benefits:['专属编程额度','旗舰模型抢先体验'], note:'月付¥49·年付¥468(年付月均¥39)·K2.7 Code已上线替代K2.6·K2.5已于8.31全平台下线·K3仅Moderato及以上可用·请求数未公开', link:'https://kimi-bot.com/activities/zh-cn/viral-referral/share?scenario=invite&from=share_poster&invitation_code=ANRBYG' },
  { platform:'Kimi', name:'Moderato', monthly:99, quarterly:null, yearly:948, firstMonth:null,
    models:['Kimi-K3','kimi-k2.7-code'], req5h:null, reqMonth:null, reqWeek:null, benefits:['每周更新额度','多设备共享','支持K3模型'], note:'月付¥99·年付¥948(年付月均¥79)·K3已上线·K2.7 Code已上线替代K2.6·K2.5已于8.31全平台下线·请求数未公开', link:'https://kimi-bot.com/activities/zh-cn/viral-referral/share?scenario=invite&from=share_poster&invitation_code=ANRBYG' },
  { platform:'Kimi', name:'Allegretto', monthly:199, quarterly:null, yearly:1908, firstMonth:null,
    models:['Kimi-K3','kimi-k2.7-code'], req5h:null, reqMonth:null, reqWeek:null, benefits:['充足的每周额度','高并发上限','支持K3模型'], note:'月付¥199·年付¥1908(年付月均¥159)·K3已上线·K2.7 Code已上线替代K2.6·K2.5已于8.31全平台下线·请求数未公开', link:'https://kimi-bot.com/activities/zh-cn/viral-referral/share?scenario=invite&from=share_poster&invitation_code=ANRBYG' },
  { platform:'Kimi', name:'Allegro', monthly:699, quarterly:null, yearly:6708, firstMonth:null,
    models:['Kimi-K3','kimi-k2.7-code'], req5h:null, reqMonth:null, reqWeek:null, benefits:['澎湃额度','高强度开发','支持K3模型'], note:'月付¥699·年付¥6708(年付月均¥559)·K3已上线·K2.7 Code已上线替代K2.6·K2.5已于8.31全平台下线·请求数未公开', link:'https://kimi-bot.com/activities/zh-cn/viral-referral/share?scenario=invite&from=share_poster&invitation_code=ANRBYG' },

  // MiniMax - 2026.06.01 全面升级为 M3 体系：原 Starter/极速版系列已下架，仅保留 Plus/Max/Ultra 三档
  // 新结构：所有套餐均支持 M3/M2.7 全系模型，文本/图像/语音/音乐共享额度，1M 长上下文
  // M2.7 参考值（与M3共用配额）：Plus 1500次/5h、Max 4500次/5h、Ultra 15000次/5h
  // M2.7-highspeed 参考值：Plus 750次/5h、Max 2250次/5h、Ultra 7500次/5h
  // 2026.06.05核对：Ultra token count 55亿→71亿，M3编程调用 ~110000→~140000/月（Plus/Max不变）
  // 年付立省2个月：Plus ¥588→¥490、Max ¥1490→¥1190、Ultra ¥5628→¥4690
  // 2026.07.16核对：积分购买调整—¥30=4,285积分(原5,000)·¥150=21,430积分(原27,500)·¥500=71,435积分(原105,000)
  // 2026.08.26核对：积分购买数值再次上调—¥30=4,489积分(原4,285)·¥150=22,460(原21,430)·¥500=74,900(原71,435)·两次独立抓取一致（约+4.8%）
  // 2026.08.19核对：页面新增公告「Music 全系列模型自 2026-08-20 起停止服务，无法在 Token Plan 中调用音乐模型」；价格/三档/M2.7参考值/积分不变
  // 2026.09.11核对（CDP 两次一致）：积分购买数值与 08.26 记录一致（¥30=4,489·¥150=22,460·¥500=74,900）；Music 全系列停止服务横幅延续（8.20起 Token Plan 无法调用音乐模型）→ 本轮将 Plus/Max/Ultra benefits 中「音乐生成」表述移除并补 note 标注；套餐价格/额度/模型不变
  { platform:'MiniMax', name:'Plus', monthly:49, quarterly:null, yearly:490, firstMonth:null,
    models:['MiniMax-M3','MiniMax-M2.7'], req5h:1500, reqMonth:12000, reqWeek:null, benefits:['月6亿token','3-4 Agent并发','1M上下文','多模态理解','图像/语音生成'], note:'M3体系·年付¥490(原价¥588立省¥98)·月6亿+token·约12000次M3编程调用/月·M2.7参考1500次/5h·M2.7-highspeed参考750次/5h·Plus不支持视频生成·reqWeek未公开·⚠️Music模型8.20起停止服务(不可调用)·积分购买¥30=4,489积分(08.26起)', link:'https://platform.minimaxi.com/subscribe/token-plan' },
  { platform:'MiniMax', name:'Max', monthly:119, quarterly:null, yearly:1190, firstMonth:null,
    models:['MiniMax-M3','MiniMax-M2.7'], req5h:4500, reqMonth:36000, reqWeek:null, benefits:['月18亿token','4-5 Agent并发','1M上下文','多模态理解','视频生成3条/日','图像/语音生成'], note:'M3体系·最受欢迎🔥·年付¥1190(原价¥1490)·月18亿+token·约36000次M3编程调用/月·M2.7参考4500次/5h·M2.7-highspeed参考2250次/5h·视频生成3条/日·reqWeek未公开·⚠️Music模型8.20起停止服务(不可调用)·积分购买¥150=22,460积分(08.26起)', link:'https://platform.minimaxi.com/subscribe/token-plan' },
  { platform:'MiniMax', name:'Ultra', monthly:469, quarterly:null, yearly:4690, firstMonth:null,
    models:['MiniMax-M3','MiniMax-M2.7'], req5h:15000, reqMonth:140000, reqWeek:null, benefits:['月71亿token','6-7 Agent并发','1M上下文','多模态理解','视频生成5条/日','图像/语音生成'], note:'M3体系·年付¥4690(原价¥5628立省¥938)·月71亿+token·约140000次M3编程调用/月·M2.7参考15000次/5h·M2.7-highspeed参考7500次/5h·视频生成5条/日·reqWeek未公开·⚠️Music模型8.20起停止服务(不可调用)·积分购买¥500=74,900积分(08.26起)', link:'https://platform.minimaxi.com/subscribe/token-plan' },

  // 字节·方舟 - 限时特惠：Lite 首月¥9.9起（原价¥40），首月2.5折活动2026.06.08~2026.11.08
  // 2026.08.07核对：GLM-5.2加量4倍活动2026.08.08 23:59结束（抵扣系数恢复原规则）；首月2.5折特惠延续至11.8
  // 2026.07.27核对：官方活动页更新为 Doubao-Seed-2.1-turbo、Kimi-K2.7；GLM-5.2等热门模型限时加量4倍；Pro价格当前页面动态加载失败，保留原记录并标注待确认
  // ⚠️ 双层计费：名义按调用次数，实际Token消耗大会被按2-3次甚至更多次扣费
  // 2026.07.11核对：文档已移除DeepSeek-V3.2/Kimi-K2.5/GLM-5.1/MiniMax-M2.5/GLM-4.7→已下架
  // 2026.08.15核对：接入文档(2026.08.14更新)新增 GLM-5.3 支持（抵扣系数与GLM-5.2一致·1M上下文）；MiniMax-M2.7/Kimi-K2.6/Doubao-Seed-2.0-Code等标注即将下线
  // 2026.08.19核对：文档(08-18更新)模型列表已移除 MiniMax-M2.7 与 Kimi-K2.6（已下架）·GLM-5.2 标注即将下线
  // 2026.08.22核对：文档模型列表新增 Doubao-Seed-Evolving（1M上下文·1024k窗口·256k输出）·Auto抵扣系数1活动延续至11.8
  // 2026.08.24核对：文档(08.21更新)标注 Doubao-Seed-Evolving 即将下线（与 GLM-5.2 一并标注·1M上下文）；方舟另推 Agent Plan（Small ¥40/Medium ¥200 等·2.5折活动）
  // 2026.08.27核对：接入文档(08.24更新)表格内仅 GLM-5.2 行标注「即将下线」；注意句"doubao-seed-evolving、glm-5.2 即将下线、glm-5.3…支持1M上下文"存在歧义——Doubao-Seed-Evolving 行无独立下线标注，保留 8.21 标注观察项，下轮再核
  // 2026.09.01核对：接入文档(2026-08-31 14:57更新)模型表已移除 GLM-5.2（此前标注即将下线→已下架）·新增 GLM-5.3-Flash（8.28-9.11 抵扣5折活动）·Doubao-Seed-Evolving 仍为正常模型行（原歧义观察项解除）·Auto 抵扣系数1活动延续至 11.8
  // 当前官方页重点模型：Auto/GLM-5.3/GLM-5.3-Flash/Doubao-Seed-2.1-turbo/Doubao-Seed-Evolving/Kimi-K2.7-Code/MiniMax-M3/DeepSeek-V4系列
  { platform:'字节·方舟', name:'Lite', monthly:40, quarterly:120, yearly:null, firstMonth:9.9,
    models:['Auto','GLM-5.3','GLM-5.3-Flash','Kimi-K3','Doubao-Seed-2.1-turbo','Doubao-Seed-Evolving','Doubao-Seed-2.0-lite','Kimi-K2.7-Code','MiniMax-M3','DeepSeek-V4-Pro','DeepSeek-V4-Flash'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['限时首月¥9.9','ArkClaw 7天试用','Auto智能选模型','联网搜索免费额度'], note:'⚠双层计费·额度消耗远快于同行·限时特惠Lite首月¥9.9（6.8~11.8）·09.10模型表新增Kimi-K3(抵扣系数高建议Pro档)·GLM-5.3-Flash 8.28-9.11抵扣5折·每周一00:00刷新·GLM-5.3已上线(8.14文档)·GLM-5.2已下架(8.31文档移除)·MiniMax-M2.7已下架(8.18文档移除)·Kimi-K2.6已下架·Doubao-Seed-2.0-Code/2.0-pro/Seed-Code已下线·Auto抵扣系数1活动延续至11.8', link:'https://volcengine.com/L/tA8Mcwd5Xj8/' },
{ platform:'字节·方舟', name:'Pro', monthly:200, quarterly:600, yearly:null, firstMonth:49.9,
models:['Auto','GLM-5.3','GLM-5.3-Flash','Kimi-K3','Doubao-Seed-2.1-turbo','Doubao-Seed-Evolving','Doubao-Seed-2.0-lite','Kimi-K2.7-Code','MiniMax-M3','DeepSeek-V4-Pro','DeepSeek-V4-Flash'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['限时首月¥49.9','免费ArkClaw','Auto智能选模型','联网搜索免费额度'], note:'⚠双层计费·限时特惠Pro首月¥49.9（6.8~11.8）·09.10模型表新增Kimi-K3(抵扣系数高·官方建议Pro档使用)·官方页当前支持Doubao-Seed-2.1-turbo/Doubao-Seed-Evolving/Kimi-K2.7-Code/MiniMax-M3/DeepSeek-V4系列·GLM-5.3-Flash 8.28-9.11抵扣5折·GLM-5.2已下架(8.31文档移除)·MiniMax-M2.7已下架(8.18文档移除)·Kimi-K2.6已下架·Doubao-Seed-2.0-Code/2.0-pro/Seed-Code已下线·Auto抵扣系数1活动延续至11.8·每周一00:00刷新', link:'https://volcengine.com/L/tA8Mcwd5Xj8/' },

  // 阿里·百炼 - Lite套餐已停止新购（2026.03.20起），4月13日起停止续费与升级；当前仅显示Pro套餐
  // 2026.04.11核对：官方Coding Plan概述页显示qwen3.6-plus为Pro专属权益；控制台显示Pro暂时售罄
  // 2026.04.10核对：帮助文档明确写"每周45,000次请求"，reqWeek=45000
  // 2026.04.17核对：文档(2026-04-14更新)确认Lite 4/13起停止续费升级；首续5折活动4/1结束；Pro限量抢购·每日09:30补货
  // 2026.04.20核对：页面显示Pro仍为售罄状态，每周45000次请求限额信息未变
  // 2026.08.12核对：官方文档(2026-08-07更新)新增"新客首月特惠：首次订阅Pro可享首月¥39.90（官网目录价¥200/月）"；价格/额度/模型未变
  { platform:'阿里·百炼', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:39.9,
    models:['Qwen3.7-Plus','Qwen3.6-Plus','Qwen3.5-Plus','qwen3-max-2026-01-23','qwen3-coder-next','qwen3-coder-plus','Kimi-K2.5','GLM-5','MiniMax-M2.5','GLM-4.7'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['多模型自由切换'], note:'Lite已停止新购(3.20)及续费(4.13)·新客首月特惠¥39.90(8.7新增·目录价¥200/月)·Pro推荐Qwen3.7-Plus(图片理解)·Pro专属Qwen3.6-Plus·Pro限量抢购·每日09:30补货·首续5折4/1结束·每周45000次·10款模型·Kimi-K2.5官方已于8.31全平台下线(文档未更新待核)', link:'https://www.aliyun.com/minisite/goods?userCode=hun0t0sf' },


  // 移动云 - 官方帮助文档更新于 2026.04.30，2026.05.04核对：GLM-5.1已从模型表移除，仅剩MiniMax-M2.5
  // 2026.07.27核对：帮助文档更新至2026/07/08·MiniMax-M2.5·价格和限额不变
  // 2026.08.27核对：帮助文档(2026/08/24更新)·MiniMax-M2.5 上下文标注 192K（原记录 200K）·价格/限额不变
  // 支持模型：仅 MiniMax-M2.5（呼和浩特、郑州、广州8、武汉），抵扣系数1x，上下文192K（2026/08/24文档）
  // 订购区：呼和浩特、郑州、广州8、武汉；郑州/武汉/广州8为省节点，仅允许本省账号订购；Coding Plan严禁API调用
  { platform:'移动云', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:7.9,
    models:['MiniMax-M2.5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['适配 Claude Code/OpenCode/OpenClaw'], note:'首月¥7.9·MiniMax-M2.5 1x·192K上下文(8.24文档)·每订阅月18000次·每周一/月首日重置·呼和浩特/郑州/武汉/广州8可订·禁API调用', link:'https://ecloud.10086.cn/portal/act/codingplan' },
  { platform:'移动云', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:39.9,
    models:['MiniMax-M2.5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['适配 Claude Code/OpenCode/OpenClaw'], note:'首月¥39.9·MiniMax-M2.5 1x·192K上下文(8.24文档)·每订阅月90000次·每周一/月首日重置·呼和浩特/郑州/武汉/广州8可订·禁API调用', link:'https://ecloud.10086.cn/portal/act/codingplan' },

  // 联通云 - 文档更新于 2026.05.22，新增 Qwen3.6-27B 和 Kimi-K2.6
  // 模型按云区域分布：贵阳基地二区支持全系列模型，其他区域支持子集
  // 当前资源紧张，已上线模型动态调度策略；限流时自动切至负载更轻模型
  // 2026.04.11通过已登录Edge实测：support.cucloud.cn文档明确显示每周限额，reqWeek=9000/45000，已支持GLM-5.1
  // 2026.04.17核实：文档更新(2026-04-16)，新增广州一区/武汉四区可用
  // 2026.04.24核实：文档更新(2026-04-24)，贵阳基地二区新增 DeepSeek-V4-Flash
  // 2026.04.28核实：实测可调用 DeepSeek-V4-Pro（官网未显式列出）
  // 2026.05.22核实：贵阳新增 Qwen3.6-27B 和 Kimi-K2.6；DeepSeek-V4-Flash 仅限尝鲜体验(200K上下文)
  { platform:'联通云', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','GLM-5.1','GLM-5','Kimi-K2.6','Kimi-K2.5','Qwen3.6-27B','Qwen3.5-397B-A17B','Qwen3-235B-A22B','DeepSeek-V4-Pro','DeepSeek-V4-Flash'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['多模型动态路由','兼容 Claude Code/OpenCode/OpenClaw/CoPaw'], note:'资源紧张·贵阳/济南/广州/武汉可用·禁API调用·新增Kimi-K2.6/Qwen3.6-27B·DeepSeek-V4-Flash仅尝鲜体验·Kimi-K2.5官方已于8.31下线·文档未更新', link:'https://support.cucloud.cn/document/127/591/2357.html?id=2357&arcid=7015' },
  { platform:'联通云', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','GLM-5.1','GLM-5','Kimi-K2.6','Kimi-K2.5','Qwen3.6-27B','Qwen3.5-397B-A17B','Qwen3-235B-A22B','DeepSeek-V4-Pro','DeepSeek-V4-Flash'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['多模型动态路由','兼容 Claude Code/OpenCode/OpenClaw/CoPaw'], note:'资源紧张·限流时自动切模型·禁API调用·新增Kimi-K2.6/Qwen3.6-27B·DeepSeek-V4-Flash仅尝鲜体验·Kimi-K2.5官方已于8.31下线·文档未更新', link:'https://support.cucloud.cn/document/127/591/2357.html?id=2357&arcid=7015' },

  // 国家超算互联网 - Coding Plan，官方文档：https://www.scnet.cn/ac/openapi/doc/2.0/moduleapi/codingplan/subscriptionnotice.html
  // 2026.04.28核实：Lite ¥20/月，Pro ¥100/月；模型支持 MiniMax-M2.5、Qwen3-235B-A22B；每5小时额度滑动刷新
  { platform:'国家超算互联网', name:'Lite', monthly:20, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','Qwen3-235B-A22B'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['适配 OpenClaw/OpenCode/Claude Code/Cursor/CodeX/Cline/RooCode','2核4G实例免费使用'], note:'¥20/月·适合个人开发者·每5小时额度滑动刷新', link:'https://www.scnet.cn/ac/openapi/doc/2.0/moduleapi/codingplan/subscriptionnotice.html' },
  { platform:'国家超算互联网', name:'Pro', monthly:100, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.5','Qwen3-235B-A22B'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['适配 OpenClaw/OpenCode/Claude Code/Cursor/CodeX/Cline/RooCode','2核4G实例免费使用'], note:'¥100/月·适合高频编程和复杂项目开发·每5小时额度滑动刷新', link:'https://www.scnet.cn/ac/openapi/doc/2.0/moduleapi/codingplan/subscriptionnotice.html' },

  // 蓝耘元生代云 - 2026.04.15 核对官方 Coding Plan 活动页；三模型混合套餐，季付9折、年付8折
  // 页面明确显示 MiniMax-M2.5 / Step-3.5-Flash / GLM-5.1 三模型通用；采用每5小时+每周双维度限制
  // 官方入口购买页使用 maas 控制台，站外活动页说明购买不可叠加代金券/优惠券
  { platform:'蓝耘元生代云', name:'入门版', monthly:49, quarterly:132.3, yearly:470.4, firstMonth:null,
    models:['MiniMax-M2.5','Step-3.5-Flash','GLM-5.1'], req5h:1200, reqMonth:null, reqWeek:6000, benefits:['三模型通用','兼容 Claude Code/OpenCode/Cline'], note:'季付9折·年付8折·每5小时1200次·每周6000次·独立API Key·不可叠加券', link:'https://console.lanyun.net/#/register?promoterCode=3ef0f72996' },
    { platform:'蓝耘元生代云', name:'专业版', currency:'¥', monthly:149, quarterly:402.3, yearly:1430.4, firstMonth:null,
    models:['MiniMax-M2.5','Step-3.5-Flash','GLM-5.1'], req5h:6000, reqMonth:null, reqWeek:30000, benefits:['三模型通用','复杂开发任务支持'], note:'季付9折·年付8折·每5小时6000次·每周30000次·优先技术支持·不可叠加券', link:'https://console.lanyun.net/#/register?promoterCode=3ef0f72996' },
    { platform:'蓝耘元生代云', name:'高级版', currency:'¥', monthly:469, quarterly:1266.3, yearly:4502.4, firstMonth:null,
    models:['MiniMax-M2.5','Step-3.5-Flash','GLM-5.1'], req5h:24000, reqMonth:null, reqWeek:120000, benefits:['三模型通用','企业级 SLA 优化'], note:'季付9折·年付8折·每5小时24000次·每周120000次·团队协作优化·不可叠加券', link:'https://console.lanyun.net/#/register?promoterCode=3ef0f72996' },

  // 腾讯·Coding - Coding Plan（按请求次数），仅月付；新客首购特惠已于2026.04.19结束，恢复原价Lite¥40/Pro¥200
  // 2026.04.27核实：文档更新于2026-04-03，新增HY-2.0-Think模型；Hunyuan-T1/TurboS即将下线
  // 2026.04.11实测：页面仅显示"1月 日常价：40元/200元"，无季付/年付选项
  // 2026.04.10核对：活动页明确写每周请求数，reqWeek=9000/45000
  // 2026.05.31核对：文档(2026-04-29更新)新增Auto智能路由模型(tc-code-latest)
  // 2026.06.03核对：文档(2026-06-02更新)新增Hunyuan-T1/Hunyuan-TurboS模型（均将于2026-06-22下线）；kimi-k2.5高峰时段可能限频
  // 2026.06.24核对：文档(2026-06-22更新)下线日期已过但仍列Hunyuan-T1/TurboS/HY-2.0/HY-2.0-Think（文档滞后）
  // 2026.08.12核对：文档(2026-08-11 17:54更新)MiniMax-M2.5已正式标注"已下线·2026-08-07下线"，从models移除；Kimi-K2.5将于2026-08-31下线
  // 2026.09.01核对：文档(2026-08-31 17:49更新)模型表仅剩 Auto(tc-code-latest)+GLM-5 两行，Kimi-K2.5 已从文档移除（全页无提及·两次独立抓取一致）→ K2.5 按已下架处理从 models 移除
  { platform:'腾讯·Coding', name:'Lite', monthly:40, quarterly:null, yearly:null, firstMonth:null, soldOut:true,
    models:['Auto','GLM-5'], req5h:1200, reqMonth:18000, reqWeek:9000, benefits:['企业生态强'], note:'仅月付·Coding Plan·当前售罄(2026.08.26核对)·⚠️GLM-5将于2026.10.09下线(09.10文档标注)·Auto智能路由·新客首购特惠已结束·HY/Hunyuan系列已于2026-06-22下线·MiniMax-M2.5已于2026-08-07下线·Kimi-K2.5已于2026-08-31下线(08-31文档移除)·禁止API调用', link:'https://cloud.tencent.com/document/product/1823/130092' },
  { platform:'腾讯·Coding', name:'Pro', monthly:200, quarterly:null, yearly:null, firstMonth:null, soldOut:true,
    models:['Auto','GLM-5'], req5h:6000, reqMonth:90000, reqWeek:45000, benefits:['企业生态强'], note:'仅月付·Coding Plan·当前售罄(2026.08.26核对)·⚠️GLM-5将于2026.10.09下线(09.10文档标注)·Auto智能路由·新客首购特惠已结束·HY/Hunyuan系列已于2026-06-22下线·MiniMax-M2.5已于2026-08-07下线·Kimi-K2.5已于2026-08-31下线(08-31文档移除)·禁止API调用', link:'https://cloud.tencent.com/document/product/1823/130092' },

  // 2026.09.11核对（CDP 文档页 v2.3·07.22更新·两次一致）：文档 modelId 目录新增 Kimi-K2.7-Code(xopkimi27code·抵扣系数5)——⚠️观察项：目录≠各档实际可用列表，订阅页本轮未渲染套餐卡无法逐档确认，未加入 models 数组·下轮登录态复核
  { platform:'讯飞星辰', name:'高效版', monthly:199, quarterly:538, yearly:null, firstMonth:null,
    models:['Spark X2 Agent','Spark X2','Auto','DeepSeek-V4-Flash-0731','GLM-5','GLM-5.2','DeepSeek-V4-Pro','DeepSeek-V4-Flash','Kimi-K2.6','GLM-5.1','MiniMax-M2.5','Kimi-K2.5','DeepSeek-V3.2','Spark-X2-Flash','Qwen3.6-35B-A3B','GLM-4.7-Flash','Qwen3.5-35B-A3B','Qwen3-Coder-Next-FP8','Qwen3.5-397B-A17B'], req5h:6000, reqMonth:90000, reqWeek:45000,
    benefits:['19款主流编程模型','支持Auto模式'], note:'焕新版·¥199/月·19款模型·按季订购¥538/季(9折)·套餐限量供应，次日10:00刷新库存', link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },
  { platform:'讯飞星辰', name:'速通版', monthly:999, quarterly:2697, yearly:null, firstMonth:699,
    models:['Spark X2 Agent','DeepSeek-V4-Flash-0731','GLM-5.2','DeepSeek-V4-Pro','Kimi-K2.7-Code'], req5h:null, reqMonth:30000, reqWeek:null,
    benefits:['5款旗舰模型','免排队模式','200万 TPM'], note:'首购¥699/月·后续¥999/月·季付日常9折¥2697(原价¥2997)·30000次速通/月·200万TPM·套餐限量供应，次日10:00刷新库存', link:'https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-7573AB85' },

  // 稳明光语纪 - 2026.07.27 新增；第三方 Coding Plan，信息以套餐订阅页为准
  // 2026.09.03核对：主模型 GLM-5.2→GLM-5.3（四档全换·两次独立抓取一致）；Lite/Pro/Plus/Max 各赠 DeepSeek-V4-Flash 2000次/月（合计 3000/7000/17000/42000 次）；并发限制2；用户反馈调用速度尚可
  // 2026.09.10核对（CDP 两次抓取一致）：⚠️套餐下架——销售页仅剩 Lite ¥45 一档·Pro/Plus/Max/¥29.9 新用户套餐均已从页面移除（关键词检测 Pro:false·Plus:false·新用户:false·两次一致）→ 按已下架处理仅保留 Lite
  // 2026.09.12核对（CDP 两次抓取一致·重大反转）：Pro/Plus/Max/¥29.9 新用户套餐全部恢复上架——四档 ¥45/¥125/¥249/¥429·GLM-5.3 每月 1000/5000/15000/40000 次·各档赠 DeepSeek-V4-Flash 2000 次·¥29.9 新用户 5000万token(7天有效·限购一次)·另有加量包(Lite ¥45/1300次·Pro ¥125/6500次)·价格额度与 09.03 记录一致
  { platform:'稳明光语纪', name:'Lite', monthly:45, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.3','DeepSeek-V4-Flash-0731'], req5h:null, reqMonth:1000, reqWeek:null,
    benefits:['GLM-5.3专属','并发限制2','赠DeepSeek-V4-Flash-0731 2000次','优先响应通道'],
    note:'按次扣费·1000次GLM-5.3/月·合计3000次/月·赠DeepSeek-V4-Flash-0731 2000次·并发限制2·调用速度尚可·⚠️09.10曾下架09.12恢复上架·第三方小众平台注意分辨', link:'https://wenming7.cn/sales?ref=DCRTY9PM' },
  { platform:'稳明光语纪', name:'Pro', monthly:125, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.3','DeepSeek-V4-Flash-0731'], req5h:null, reqMonth:5000, reqWeek:null,
    benefits:['GLM-5.3专属','并发限制2','赠DeepSeek-V4-Flash-0731 2000次','优先响应通道'],
    note:'按次扣费·5000次GLM-5.3/月·合计7000次/月·赠DeepSeek-V4-Flash-0731 2000次·并发限制2·09.12恢复上架', link:'https://wenming7.cn/sales?ref=DCRTY9PM' },
  { platform:'稳明光语纪', name:'Plus', monthly:249, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.3','DeepSeek-V4-Flash-0731'], req5h:null, reqMonth:15000, reqWeek:null,
    benefits:['GLM-5.3专属','并发限制2','赠DeepSeek-V4-Flash-0731 2000次','优先响应通道'],
    note:'按次扣费·15000次GLM-5.3/月·合计17000次/月·赠DeepSeek-V4-Flash-0731 2000次·并发限制2·09.12恢复上架', link:'https://wenming7.cn/sales?ref=DCRTY9PM' },
  { platform:'稳明光语纪', name:'Max', monthly:429, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.3','DeepSeek-V4-Flash-0731'], req5h:null, reqMonth:40000, reqWeek:null,
    benefits:['GLM-5.3专属','并发限制2','赠DeepSeek-V4-Flash-0731 2000次','优先响应通道'],
    note:'按次扣费·40000次GLM-5.3/月·合计42000次/月·赠DeepSeek-V4-Flash-0731 2000次·并发限制2·09.12恢复上架·另有¥29.9新用户5000万token(7天·限购一次)', link:'https://wenming7.cn/sales?ref=DCRTY9PM' },


  // 新系统以 Credit 为单位（1M Credit = ¥1），月度一次性发放，月内灵活消耗，无5h/周限制
  // 新增季付(约8.7折)和年付(约7.8折)选项；加油包：小¥49/400M、大¥99/1600M
  // 2026.05.19核对：新增 StepAudio-2.5-Realtime/StepAudio-2.5-Chat 两个实时语音对话模型
  // 2026.05.29核对：新增 Step-3.7-Flash 模型（面向Agent/Coding/多模态工作流的高效率Flash模型）
  // 2026.09.05核对：文档公告 step-image-edit-2 将于 2026.10.10 下线（Step Plan 文生图与图像编辑接口同步停止）→ 四档 note 追加即将下线标注·价格/Credit额度/其他模型不变
  { platform:'阶跃星辰', name:'Flash Mini', monthly:49, quarterly:129, yearly:456, firstMonth:null,
    models:['Step-3.7-Flash','Step-3.5-Flash-2603','Step-3.5-Flash','StepAudio-2.5-Realtime','StepAudio-2.5-Chat','StepAudio-2.5-TTS','StepAudio-2.5-ASR','Step-Router-V1','Step-Image-Edit-2'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['Step-3.5-Flash 系列','支持主流 Agent 工具'], note:'入门版·Credit月池400M/月(1M=¥1)·无5h/周限制·季付¥129(约8.7折)·年付¥456(约7.8折)·小油包¥49/400M·大油包¥99/1600M·支持微信/Stripe·Step-Image-Edit-2 将于2026.10.10下线', link:'https://platform.stepfun.com/?invite_code_v2=RCXWKOFD' },
    { platform:'阶跃星辰', name:'Flash Plus', currency:'¥', monthly:99, quarterly:269, yearly:936, firstMonth:null,
    models:['Step-3.7-Flash','Step-3.5-Flash-2603','Step-3.5-Flash','StepAudio-2.5-Realtime','StepAudio-2.5-Chat','StepAudio-2.5-TTS','StepAudio-2.5-ASR','Step-Router-V1','Step-Image-Edit-2'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['Step-3.5-Flash 系列','支持主流 Agent 工具'], note:'进阶版·Credit月池1600M/月(1M=¥1)·无5h/周限制·季付¥269(约9折)·年付¥936(约7.9折)·优先API速率·优先技术支持·Step-Image-Edit-2 将于2026.10.10下线', link:'https://platform.stepfun.com/?invite_code_v2=RCXWKOFD' },
  { platform:'阶跃星辰', name:'Flash Pro', currency:'¥', monthly:199, quarterly:539, yearly:1860, firstMonth:null,
    models:['Step-3.7-Flash','Step-3.5-Flash-2603','Step-3.5-Flash','StepAudio-2.5-Realtime','StepAudio-2.5-Chat','StepAudio-2.5-TTS','StepAudio-2.5-ASR','Step-Router-V1','Step-Image-Edit-2'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['Step-3.5-Flash 系列','支持主流 Agent 工具'], note:'专业版·Credit月池8000M/月(1M=¥1)·无5h/周限制·季付¥539(约9折)·年付¥1860(约7.8折)·适合复杂任务·Step-Image-Edit-2 将于2026.10.10下线', link:'https://platform.stepfun.com/?invite_code_v2=RCXWKOFD' },
  { platform:'阶跃星辰', name:'Flash Max', currency:'¥', monthly:699, quarterly:1889, yearly:6666, firstMonth:null,
    models:['Step-3.7-Flash','Step-3.5-Flash-2603','Step-3.5-Flash','StepAudio-2.5-Realtime','StepAudio-2.5-Chat','StepAudio-2.5-TTS','StepAudio-2.5-ASR','Step-Router-V1','Step-Image-Edit-2'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['Step-3.5-Flash 系列','支持主流 Agent 工具'], note:'旗舰版·Credit月池40000M/月(1M=¥1)·无5h/周限制·季付¥1889(约9折)·年付¥6666(约7.9折)·适合团队协作·Step-Image-Edit-2 将于2026.10.10下线', link:'https://platform.stepfun.com/?invite_code_v2=RCXWKOFD' },

  // 快手 StreamLake - 2026.07.27官方配置接口核对：KAT-Coder-Pro V2.5为当前唯一订阅模型（V1/V2 为历史型号仍可调用）
  // 2026.09.09核对：营销页 /marketing/coding-plan 返回「该页面不存在」404（两次一致）——Coding Plan 营销页入口已移除，首页 AI Coding 仍展示 KAT-Coder-Pro V2.5 与 CodeFlicker IDE；订阅数据（4档 Prompts 计费）暂无证据表明价格/额度变化，标记待人工复核（下轮用官方配置接口/文档页核对）
  // 2026.08.24核对：页面明确「KwaiKAT Coding Plan 支持模型范围：KAT-Coder-Pro V1、V2、V2.5，暂不支持其他模型调用」→models 同步 3 款；价格卡片 JS 渲染（文本不可见·Tavily 二手来源 Mini ¥29/Starter ¥70/Pro ¥140/Max ¥350 一致）；新增页面横幅「万擎暑期AI特调计划」（营销活动·不影响订阅价）
  // 当前订阅与按量用户规格均为 60 RPM / 200万 TPM；订阅仅限 OpenClaw / Claude Code / OpenCode 等合规编程工具
  { platform:'快手 StreamLake', name:'Mini', monthly:29, quarterly:null, yearly:null, firstMonth:null,
    models:['KAT-Coder-Pro V1','KAT-Coder-Pro V2','KAT-Coder-Pro V2.5'], req5h:40, req5hSuffix:' Prompts', reqMonth:null, reqWeek:null,
    benefits:['KAT-Coder-Pro V1/V2/V2.5','支持 OpenClaw/Claude/OpenCode'], note:'40 Prompts / 5h·固定窗口计费·当前 60 RPM / 200万 TPM·禁止 API 二次集成·09.10营销页/marketing/coding-plan已404(两次复核)·链接暂指官网首页', link:'https://www.streamlake.com' },
  { platform:'快手 StreamLake', name:'Starter', monthly:70, quarterly:null, yearly:null, firstMonth:null,
    models:['KAT-Coder-Pro V1','KAT-Coder-Pro V2','KAT-Coder-Pro V2.5'], req5h:100, req5hSuffix:' Prompts', reqMonth:null, reqWeek:null,
    benefits:['KAT-Coder-Pro V1/V2/V2.5','支持 OpenClaw/Claude/OpenCode'], note:'100 Prompts / 5h·适配日常核心开发场景·禁止 API 二次集成', link:'https://www.streamlake.com' },
  { platform:'快手 StreamLake', name:'Pro', monthly:140, quarterly:null, yearly:null, firstMonth:null,
    models:['KAT-Coder-Pro V1','KAT-Coder-Pro V2','KAT-Coder-Pro V2.5'], req5h:300, req5hSuffix:' Prompts', reqMonth:null, reqWeek:null,
    benefits:['KAT-Coder-Pro V1/V2/V2.5','支持 OpenClaw/Claude/OpenCode'], note:'300 Prompts / 5h·Starter 3倍用量·禁止 API 二次集成', link:'https://www.streamlake.com' },
  { platform:'快手 StreamLake', name:'Max', monthly:350, quarterly:null, yearly:null, firstMonth:null,
    models:['KAT-Coder-Pro V1','KAT-Coder-Pro V2','KAT-Coder-Pro V2.5'], req5h:1000, req5hSuffix:' Prompts', reqMonth:null, reqWeek:null,
    benefits:['KAT-Coder-Pro V1/V2/V2.5','支持 OpenClaw/Claude/OpenCode'], note:'1000 Prompts / 5h·适合高强度开发·禁止 API 二次集成', link:'https://www.streamlake.com' },

  // ⚠️ 无问芯穹 — 2026.06.26 起停止个人服务，已从对比中移除
  // TaoToken - 2026.08.15核对：新一轮限时限量抢购进行中（倒计时1天18时·页面显示几分钟前有人开通）；Pro抢购价 ¥149→¥99(原价¥298)·可购买；Lite已售罄¥39；Max ¥388可购买；额度未变
  // 2026.08.20核对：8月20日 11:00 新轮开启抢购·Lite已售罄/Pro ¥99(¥298)/Max ¥388(¥799) 均未开始·价格/额度不变
  // 2026.08.21核对：新一轮 8.21 11:00 开启抢购·Pro 抢购价 ¥99→¥149（原价¥298）·Lite ¥39(原¥59) 已售罄·Max ¥388(原¥799) 未开始·额度不变（Lite/Pro 均已售罄·Max 未开始）
  // 2026.08.22核对：新一轮 8.22 09:00 开启抢购·Lite ¥39(原¥59)/Pro ¥149(原¥298) 已售罄·Max ¥388(原¥799) 未开始·价格/额度不变
  // 2026.08.23核对（SSR 数据）：新一轮 8.23 09:00-17:00 开启抢购·Lite ¥39(原¥59)/Pro ¥149(原¥298) 已售罄(stock 0/10)·Max ¥388(原¥799) 未开始(stock 20/20·active:false)·价格/额度不变；首次从 SSR limits 补充月额度上限 reqMonth：Lite 10000/Pro 42000/Max 100000（1_month rolling）
  // 2026.08.24核对（SSR 数据）：新一轮 8.24 09:00-17:00 开启抢购·Lite ¥39(原¥59)/Pro ¥149(原¥298) 已售罄(stock 0/10)·Max ¥388(原¥799) 未开始(stock 20/20·active:false·sale 未开始)·价格/额度不变
  // 2026.08.25核对（SSR 数据）：新一轮 8.25 09:00-17:00 开启抢购·Lite ¥39(原¥59) 已售罄(stock 0/10)·Pro ¥149(原¥298) 未开始(stock 10/10·active:false·本档本轮库存重置为可售)·Max ¥388(原¥799) 未开始(stock 20/20·active:false)·价格/额度不变
  // 2026.08.25二次核对（SSR 11:5x）：Lite 已售罄(stock 0/10)·Pro 抢购中·剩余 2/10（06:11 时 10/10 未开始→11:5x 已售 8 份·即将售罄）·Max 未开始(stock 20/20)·价格/额度不变
  // 第三方聚合平台，仅支持 GLM-5.2 一个模型；GLM-5.2 上下文限制为 200K
  // 每周自动刷新额度，支持 Claude Code/Cursor/OpenCode/AtomCode 等20+工具
  // 2026.08.26核对（页面文本两次一致）：新一轮 8.26 09:00-17:00 开启抢购·Lite ¥39(原¥59) 已售罄·Pro ¥149(原¥298)/Max ¥388(原¥799) 未开始·价格/额度不变
  // 2026.08.27核对（页面文本两次一致）：新一轮 8.27 09:00 开启抢购·Lite ¥39(原¥59) 已售罄·Pro ¥149(原¥298)/Max ¥388(原¥799) 未开始·价格/额度不变
  // 2026.08.28核对（页面文本+SSR payload 两次独立一致）：同一抢购轮(8.27 09:00-8.31 23:59:59)·Pro 抢购价 ¥149→¥99(原价¥298·stock 283/300·进行中)·Max ¥388→¥338(原价¥799·stock 99/100·进行中)·Lite ¥39 已售罄(stock 0/5)·5h/周/月额度上限不变（600→4200→10000·2000→15000→42000·6000→35000→100000）·页面活跃记录显示本轮已有成交
  // 2026.09.04核对（CDP 页面文本两次独立一致）：新一轮抢购进行中（倒计时3天18时·约9.07-9.08结束）——产品线由 GLM-5.2 切换为 GLM-5.3-Flash（页面标题「GLM-5.3-Flash Coding Plan 限量抢购」·model 需填 glm-5.3-flash）·Lite ¥39(原¥59) 已售罄·Pro ¥129(原¥298·较上轮¥99上调30) 抢购中·Max ¥338(原¥799·8.28下调延续) 抢购中·5h/周额度不变（600/4200/10000·2000/15000/42000·6000/35000/100000）·单次请求上下文上限500k（原200K）·官方明文禁止用于 Hermes/OpenClaw 等智能体（违规封停）
  // 2026.09.10核对（CDP 页面文本两次独立一致）：新一轮抢购进行中（倒计时1天18时）——⚠️产品线升级为双 Flash：「GLM-5.3-Flash、DeepSeek-V4-Flash 随时切换」·三档 benefits/models 同步双模型·价格/额度不变（Lite ¥39已售罄·Pro ¥99 抢购中·Max ¥299 抢购中）·官方 API 说明 model 需填 glm-5.3-flash 或 deepseek-v4-flash
  // 2026.09.16核对（CDP 页面文本两次独立一致）：新一轮抢购进行中（倒计时1天18时·页面活跃成交记录）——Lite ¥39 已售罄·Pro ¥99/月(原价¥298)抢购中·Max ¥299/月(原价¥799)抢购中·价格/额度/双Flash产品线均不变（600/4200/10000·2000/15000/42000·6000/35000/100000）·单次请求上下文上限500k
    { platform:'TaoToken', name:'Lite', monthly:39, quarterly:117, yearly:null, firstMonth:null,
      models:['GLM-5.3-Flash','DeepSeek-V4-Flash'], req5h:600, reqMonth:10000, reqWeek:4200, benefits:['GLM-5.3-Flash + DeepSeek-V4-Flash 双Flash·500K上下文','约600次/5h','每周约4,200次','支持20+编程工具'],
      note:'限时限量抢购(9.16核对·CDP两次一致)·✅新一轮抢购进行中(倒计时1天18时·页面活跃成交记录)·Lite ¥39 已售罄·Pro ¥99/月抢购中(季付¥297)·Max ¥299/月抢购中(季付¥897)·原价¥59/¥298/¥799·月额度上限10000/42000/100000次·单次请求上下文上限500k·禁Hermes/OpenClaw等智能体·双Flash(GLM-5.3-Flash+DeepSeek-V4-Flash)·社区口碑响应速度偏慢', link:'https://taotoken.net/?u=inv_iyn75yglujwdy9ij&utm_source=tt_invite' },
    { platform:'TaoToken', name:'Pro', monthly:99, quarterly:297, yearly:null, firstMonth:null,
      models:['GLM-5.3-Flash','DeepSeek-V4-Flash'], req5h:2000, reqMonth:42000, reqWeek:15000, benefits:['GLM-5.3-Flash + DeepSeek-V4-Flash 双Flash·500K上下文','约2,000次/5h','每周约15,000次','支持Lite版所有工具'],
      note:'限时限量抢购(9.16核对)·✅新一轮抢购进行中·Pro ¥99/月(原价¥298)·季付¥99/月实付¥297/季(约67%off)·月额度上限42000次·单次请求上下文上限500k·禁Hermes/OpenClaw等智能体·双Flash(GLM-5.3-Flash+DeepSeek-V4-Flash)·社区口碑响应速度偏慢', link:'https://taotoken.net/?u=inv_iyn75glujwdy9ij&utm_source=tt_invite' },
    { platform:'TaoToken', name:'Max', monthly:299, quarterly:897, yearly:null, firstMonth:null,
      models:['GLM-5.3-Flash','DeepSeek-V4-Flash'], req5h:6000, reqMonth:100000, reqWeek:35000, benefits:['GLM-5.3-Flash + DeepSeek-V4-Flash 双Flash·500K上下文','约6,000次/5h','每周约35,000次','支持Lite版所有工具'],
      note:'限时限量抢购(9.16核对)·✅新一轮抢购进行中·Max ¥299/月(原价¥799)·季付¥299/月实付¥897/季(约63%off)·月额度上限100000次·单次请求上下文上限500k·禁Hermes/OpenClaw等智能体·双Flash(GLM-5.3-Flash+DeepSeek-V4-Flash)·社区口碑响应速度偏慢', link:'https://taotoken.net/?u=inv_iyn75glujwdy9ij&utm_source=tt_invite' },


  // CommandCode — 海外多模型聚合订阅平台（commandcode.ai / Command Code AI），美元 Credits 制
  // 2026.08.20 新增（用户指定 https://commandcode.ai/pricing）·经官方 docs 复核修正
  // 定价页个人档：GO $1/GOAT $10/Pro $20/Max 10× $100/Max 20× $200；另有 Provider API $15 与 Team Pro $40
  // 每月含 Credits（$10/$70/$80/$150/$300）；官方给出 5h/周 美元限额：GO $3/$6·GOAT $14/$35·Pro $16/$40·Max10x $45/$90·Max20x $90/$180（quota 字段展示）
  // ⭐API 访问：除 GO 外，GOAT/Pro/Max 全部支持官方 OpenAI(api.commandcode.ai/provider/v1/chat/completions) + Anthropic(/v1/messages) 双兼容端点，任意客户端可用（docs/provider 明确：Every plan except Go has API access）
  // 模型按 API 原价 token 计费，59 款模型（Claude/GPT/Gemini/Grok/GLM/DeepSeek/Qwen/MiniMax/Kimi/Step/MiMo/Nemotron 等）
  // deal：Gemini 3.7 Flash 50% off(至12.31)·MiniMax M3 永久2×·MiniMax M3/M2.7 免费调用至2026.09.05(官方 deal 标注·09.05后恢复按额度)·MiMo V2.5/Pro 最高99%off·Laguna S 2.1 免费(容量内)
  // 2026.09.03核对：pricing 页五档价格/每月 Credits/三重限额（docs pricing-limits: GO $1/$10·GOAT $10/$70·Pro $20/$80·Max10x $100/$150·Max20x $200/$300）与本地一致；GOAT 按模型分配额度表一致（GPT-5.6 Sol/GLM-5.2/Tencent Hy3/Qwen3.8 27B 各$70·DS-V4-Flash $60）；页面对比表 taste-1 重新出现于全部套餐「模型访问权限」（08.30 曾记录不在目录·docs available-models 页 404 无法枚举目录·观察项不改 models 数组·下轮复核）
  // 2026.09.12核对（docs pricing-limits 两次一致）：新限时 DEAL——deepseek-v4.1-flash 额度提升一周：GOAT $40→$60·Pro $50→$70（至2026.09.17）；五档价格/Credits/三重限额/典型请求量（15K/75K/100K/219K/437K）与本地一致
  { platform:'CommandCode', name:'GO', currency:'$', monthly:1, quarterly:null, yearly:null, firstMonth:null,
    models:['Laguna S 2.1','MiniMax M3','MiniMax M2.7','Tencent Hy4 Preview','Tencent Hy3','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.7 Code HighSpeed','Kimi-K2.6','Kimi-K2.5','GLM-5.3-Flash','GLM-5.3','GLM-5.2','GLM-5.2 Fast','GLM-5.1','GLM-5','MiniMax M2.5','DeepSeek V4 Pro','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','Qwen3.8 Max','Qwen3.8 27B','Qwen3.6 Max Preview','Qwen3.6 Plus','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.8 Flash','Step 3.7 Flash','Step 3.5 Flash','MiMo V2.5 Pro','MiMo V2.5','Nemotron 3 Ultra','GPT-5.6 Luna','Muse Spark 1.2 Contributor','Grok 4.5','Inkling','Inkling Small'], req5h:null, reqMonth:15000, reqWeek:null, quota5h:3, quotaWeek:6, quotaMonth:10, quotaUnit:'$',
    benefits:['$10 Credit/月','约15K次请求/月','5h $3·周 $6·月 $10','38款模型(开源+部分付费)'], note:'$1/月+手续费·每月$10 Credit(月限额$10)·约15K次请求·Qwen 3.7 Max/MiniMax M3各$20额度·MiMo V2.5最高99%off·⚠️GO 不支持 API(仅官方 CLI)·GPT-5.6 Luna/Grok 4.5/Qwen Max&Plus 可用', link:'https://commandcode.ai/pricing' },
  { platform:'CommandCode', name:'GOAT', currency:'$', monthly:10, quarterly:null, yearly:null, firstMonth:null,
    models:['Laguna S 2.1','MiniMax M3','MiniMax M2.7','Tencent Hy4 Preview','Tencent Hy3','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.7 Code HighSpeed','Kimi-K2.6','Kimi-K2.5','GLM-5.3-Flash','GLM-5.3','GLM-5.2','GLM-5.2 Fast','GLM-5.1','GLM-5','MiniMax M2.5','DeepSeek V4 Pro','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','Qwen3.8 Max','Qwen3.8 27B','Qwen3.6 Max Preview','Qwen3.6 Plus','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.8 Flash','Step 3.7 Flash','Step 3.5 Flash','MiMo V2.5 Pro','MiMo V2.5','Nemotron 3 Ultra','Gemini 3.7 Flash','Grok 4.6','Muse Spark 1.2','GPT-5.6 Luna','GPT-5.6 Sol','Muse Spark 1.2 Contributor','Grok 4.5','Inkling','Inkling Small'], req5h:null, reqMonth:75000, reqWeek:null, quota5h:14, quotaWeek:35, quotaMonth:70, quotaUnit:'$',
    benefits:['$70 Credit/月(按模型分配)','约75K次请求/月','5h $14·周 $35·月 $70','✅OpenAI+Anthropic API'], note:'$10/月+手续费·$10→$70 Credit(7倍)·比 OpenCode Go($60/6倍)高17%·42款模型·月额度按模型分配(官方GOAT表：GPT-5.6 Sol/GLM-5.2/Tencent Hy3/Qwen3.8 27B各$70·DeepSeek V4 Flash $60·MiniMax M3 $47·GLM-5.3-Flash $40·Qwen3.7/3.6系列$33·MiMo V2.5 $30·其余新模型$20)·deepseek-v4.1-flash 限时额度DEAL已结束(09.15核对·原至9.17)', link:'https://commandcode.ai/pricing' },
  { platform:'CommandCode', name:'Pro', currency:'$', monthly:20, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.2 Fast','GLM-5.1','GLM-5','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.7 Code HighSpeed','Kimi-K2.6','Kimi-K2.5','DeepSeek V4 Pro','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','Qwen3.8 Max','Qwen3.8 Flash','Qwen3.8 27B','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Max Preview','Qwen3.6 Plus','MiniMax M3','MiniMax M2.7','MiniMax M2.5','GPT-5.6 Luna','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.5','GPT-5.4','GPT-5.4 Mini','GPT-5.3 Codex','Claude Sonnet 5','Claude Sonnet 4.6','Claude Haiku 4.5','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.5 Flash Lite','Gemini 3.1 Flash Lite','Grok 4.6','Grok 4.5','Tencent Hy4 Preview','Tencent Hy3','Muse Spark 1.2','Muse Spark 1.2 Contributor','Muse Spark 1.1','Laguna S 2.1','MiMo V2.5 Pro','MiMo V2.5','Step 3.7 Flash','Step 3.5 Flash','Nemotron 3 Ultra','Inkling','Inkling Small'], req5h:null, reqMonth:100000, reqWeek:null, quota5h:16, quotaWeek:40, quotaMonth:80, quotaUnit:'$',
    benefits:['$80 Credit/月','约100K次请求/月','5h $16·周 $40·月 $80','✅OpenAI+Anthropic API'], note:'$20/月+手续费·$20→$80 Credit(4倍·月限额$80)·55款模型·加入付费池(Claude Sonnet 5/GPT-5.5/Gemini 3.5/Muse Spark 1.1等·Claude Opus/Fable 除外)·deepseek-v4.1-flash 限时额度DEAL已结束(09.15核对·原至9.17)', link:'https://commandcode.ai/pricing' },
  { platform:'CommandCode', name:'Max 10×', currency:'$', monthly:100, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.2 Fast','GLM-5.1','GLM-5','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.7 Code HighSpeed','Kimi-K2.6','Kimi-K2.5','DeepSeek V4 Pro','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','Qwen3.8 Max','Qwen3.8 Flash','Qwen3.8 27B','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Max Preview','Qwen3.6 Plus','MiniMax M3','MiniMax M2.7','MiniMax M2.5','GPT-5.6 Luna','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.5','GPT-5.4','GPT-5.4 Mini','GPT-5.3 Codex','Claude Opus 5','Claude Opus 4.8','Claude Opus 4.7','Claude Fable 5','Claude Sonnet 5','Claude Sonnet 4.6','Claude Haiku 4.5','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.5 Flash Lite','Gemini 3.1 Flash Lite','Grok 4.6','Grok 4.5','Tencent Hy4 Preview','Tencent Hy3','Muse Spark 1.2','Muse Spark 1.2 Contributor','Muse Spark 1.1','Laguna S 2.1','MiMo V2.5 Pro','MiMo V2.5','Step 3.7 Flash','Step 3.5 Flash','Nemotron 3 Ultra','Inkling','Inkling Small','Fugu Ultra'], req5h:null, reqMonth:219000, reqWeek:null, quota5h:45, quotaWeek:90, quotaMonth:150, quotaUnit:'$',
    benefits:['$150 Credit/月','约219K次请求/月','5h $45·周 $90·月 $150','✅OpenAI+Anthropic API'], note:'$100/月+手续费·$100→$150 Credit(1.5倍·月限额$150=标准$150+付费$100池)+deal·60款全模型·Claude Opus/Fable/Fugu Ultra 解锁·高限流·09.10请求估算230K→219K(官方对比表·另有Max 20×新增437K档)', link:'https://commandcode.ai/pricing' },
  { platform:'CommandCode', name:'Max 20×', currency:'$', monthly:200, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.2 Fast','GLM-5.1','GLM-5','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.7 Code HighSpeed','Kimi-K2.6','Kimi-K2.5','DeepSeek V4 Pro','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','Qwen3.8 Max','Qwen3.8 Flash','Qwen3.8 27B','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Max Preview','Qwen3.6 Plus','MiniMax M3','MiniMax M2.7','MiniMax M2.5','GPT-5.6 Luna','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.5','GPT-5.4','GPT-5.4 Mini','GPT-5.3 Codex','Claude Opus 5','Claude Opus 4.8','Claude Opus 4.7','Claude Fable 5','Claude Sonnet 5','Claude Sonnet 4.6','Claude Haiku 4.5','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.5 Flash Lite','Gemini 3.1 Flash Lite','Grok 4.6','Grok 4.5','Tencent Hy4 Preview','Tencent Hy3','Muse Spark 1.2','Muse Spark 1.2 Contributor','Muse Spark 1.1','Laguna S 2.1','MiMo V2.5 Pro','MiMo V2.5','Step 3.7 Flash','Step 3.5 Flash','Nemotron 3 Ultra','Inkling','Inkling Small','Fugu Ultra'], req5h:null, reqMonth:437000, reqWeek:null, quota5h:90, quotaWeek:180, quotaMonth:300, quotaUnit:'$',
    benefits:['$300 Credit/月','约437K次请求/月','5h $90·周 $180·月 $300','✅OpenAI+Anthropic API'], note:'$200/月+手续费·$200→$300 Credit(月限额$300=标准$300+付费$200池)·60款全模型无限制·最高限流·适合高强度/团队生产负载·09.10请求估算370K→437K(官方对比表·典型请求量~437K)', link:'https://commandcode.ai/pricing' },

// 2026.04.18 新增，官方定价页：https://ollama.com/pricing
  // 2026.06.11核对：云模型20个（移除deepseek-v3.2/qwen3-next，新增kimi-k2.5）
  // 2026.06.13核对：Qwen3-VL → qwen3-coder 替换（仍20款云模型）
  // 2026.06.14核对：新增 kimi-k2.7-code（约18小时前上线），现21款云模型
  // 2026.06.15核对：Nemotron-3-Nano 已从云模型列表移除，现20款云模型
  // 2026.07.01核对：新增GLM-5.2，移除Qwen3-Coder-Next，仍保持20款云模型
  // 2026.08.13核对：云模型列表 20→16 款——新增 kimi-k3/mistral-large-3/nemotron-3-nano（重新上架），移除 GLM-5/MiniMax-M2.5/GLM-4.7/Gemini-3-Flash-Preview/MiniMax-M2.1/Kimi-K2.5/qwen3-coder
  // 3档套餐：Free $0、Pro $20/月($200/年)、Max $100/月
  // 2026.08.23核对：定价页新增 Team 档（$25/席/月·5席起·含用量·Join waitlist 加入等待名单）与 Enterprise 企业定制；Free/Pro/Max 价格不变；云模型列表 16 款不变（deepseek-v4-flash/kimi-k3/gemma4/glm-5.1/minimax-m2.7/minimax-m3/glm-5.2/kimi-k2.7-code/kimi-k2.6/deepseek-v4-pro/nemotron-3-ultra/nemotron-3-super/nemotron-3-nano/mistral-large-3/gpt-oss/qwen3.5）
  // 2026.08.26核对：Max 档「New sign-ups paused」新订阅暂停持续（官方：云容量翻倍增长·加容量中·存量 Max 订阅不受影响·Pro/Free 仍开放）；Team 档 $25/席 确认
  // 2026.08.29核对：云模型列表 16→18 款——新增 glm-5.3 与 glm-5.3-flash（两次独立抓取一致·列表仍无 glm-5.1 变更）；价格/暂停状态不变
  // 2026.09.03核对（CDP pricing 页 DOM 精确提取两次一致）：套餐结构重定价——Team 档由 $25/席/月（5席起·Join waitlist）改为 $500/月（Early access·无限用户·$1,000 usage credits 月共享）；Max 档 $100/月恢复展示（页面 Get Max 正常·早期访问新模型·$300 credits/月·10并发）；Pro $20/月或$200/年（$60 credits/月）不变；Free $0 不变；云模型列表仍 18 款
  // 2026.09.07核对（curl 全文提取）：计费方式重大变更——由 GPU 时间计费（请求数不公开）改为按 token 计费，定价页新增完整 Model pricing 表（18款云模型·每百万 tokens 输入/缓存输入/输出单价）+ Peak pricing（周一至五 12:00-18:00 UTC·deepseek-v4-flash/deepseek-v4-pro 按表价2倍）；并发数首次明文：Free 1/Pro 3/Max与Team 10；额度按月重置（订阅起始日）不滚存·超额从额外 credits 余额扣（Free 也可充值解锁全模型）；套餐价格不变：Free $0/Pro $20月($200年·$60 credits)/Max $100月($300 credits)/Team $500月($1,000 credits 共享)/Enterprise 定制
  // 2026.09.11核对（CDP 定价页两次+云模型列表页 curl 一次·三次一致）：云模型 18→19 款——新增 deepseek-v4.1-flash（定价表 $0.15/$0.003/$0.60 每百万tokens·不参与 Peak 2倍价）·套餐价格/并发/计费规则不变
  // 2026.09.15核对（定价页+云模型列表两次抓取一致）：DeepSeek-V4.1-Flash 已从云模型目录与定价表移除（19→18款）；套餐价格/额度/并发/计费规则不变
  // 2026.09.16核对（CDP 定价页+云模型列表两次抓取一致）：DeepSeek-V4.1-Flash 重新上架云模型目录与定价表（18→19款·$0.15/$0.003/$0.60 每百万tokens·不参与 Peak 2倍价·Peak 表同列）；套餐价格/并发/计费规则不变
  // 支持模型列表：https://ollama.com/search?c=cloud
  { platform:'Ollama', name:'Free', currency:'$', monthly:0, quarterly:null, yearly:null, firstMonth:null,
    models:['Gemma4','Qwen3.5','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','MiniMax-M3','MiniMax-M2.7','Nemotron-3-Super','Nemotron-3-Ultra','Nemotron-3-Nano','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','DeepSeek-V4-Flash','DeepSeek-V4-Pro','Mistral-Large-3','GPT-OSS'], req5h:null, reqMonth:null, reqWeek:null, benefits:['免费使用','40,000+社区模型'],
    note:'⚠️Starter usage credits·仅 starter 模型·充值可解锁全部19款云模型·1并发·无服务费·按token计费(官方已公开每百万tokens单价)·额度按月重置不滚存·DS-V4.1-Flash 09.16重新上架(09.15曾移除·定价$0.15/$0.003/$0.60·不参与Peak 2倍价·定价页+云列表两次一致)', link:'https://ollama.com/pricing' },
  { platform:'Ollama', name:'Pro', currency:'$', monthly:20, quarterly:null, yearly:200, firstMonth:null,
    models:['DeepSeek-V4.1-Flash','Gemma4','Qwen3.5','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','MiniMax-M3','MiniMax-M2.7','Nemotron-3-Super','Nemotron-3-Ultra','Nemotron-3-Nano','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','DeepSeek-V4-Flash','DeepSeek-V4-Pro','Mistral-Large-3','GPT-OSS'], req5h:null, reqMonth:null, reqWeek:null, benefits:['$60 usage credits/月','3并发请求','访问更大Pro模型','Fast mode(即将上线)'],
    note:'月付$20或年付$200·$60 usage credits/月按token扣费·3并发·超额从额外credits余额扣·Peak时段(周一至五12-18UTC)DeepSeek-V4双模型2倍价', link:'https://ollama.com/pricing' },
  { platform:'Ollama', name:'Max', currency:'$', monthly:100, quarterly:null, yearly:null, firstMonth:null,
    models:['DeepSeek-V4.1-Flash','Gemma4','Qwen3.5','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','MiniMax-M3','MiniMax-M2.7','Nemotron-3-Super','Nemotron-3-Ultra','Nemotron-3-Nano','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','DeepSeek-V4-Flash','DeepSeek-V4-Pro','Mistral-Large-3','GPT-OSS'], req5h:null, reqMonth:null, reqWeek:null, benefits:['$300 usage credits/月','10并发请求','Early access新模型'],
    note:'$100/月·09.03恢复展示可订购(Get Max)·$300 usage credits/月按token扣费·10并发·早期访问最新模型·Peak时段DeepSeek-V4双模型2倍价', link:'https://ollama.com/pricing' },
  { platform:'Ollama', name:'Team', currency:'$', monthly:500, quarterly:null, yearly:null, firstMonth:null,
    models:['DeepSeek-V4.1-Flash','Gemma4','Qwen3.5','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','MiniMax-M3','MiniMax-M2.7','Nemotron-3-Super','Nemotron-3-Ultra','Nemotron-3-Nano','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','DeepSeek-V4-Flash','DeepSeek-V4-Pro','Mistral-Large-3','GPT-OSS'], req5h:null, reqMonth:null, reqWeek:null, benefits:['无限用户','$1,000 usage credits/月共享','10并发请求','优先支持'],
    note:'$500/月·2026.09.03由 $25/席/月 重定价为固定 $500/月(5席起制度取消)·无限用户·$1,000 usage credits/月团队共享(超额从共享余额按量扣)·10并发·Enterprise 另有企业定制', link:'https://ollama.com/pricing' },

  // 优云智算 - Coding Plan (2026.05.13 重大更新：2档→6档)
  // 文档：https://www.compshare.cn/docs/modelverse/package_plan/package
  // 6档套餐：Mini ¥49/Lite ¥99/Basic ¥199/Pro ¥499/Max ¥799/Ultra ¥999
  // 按调用次数计费，不同模型有倍率抵扣；5h滚动窗口，周/月总额度约束
  // 2026.06.05核对：req5h/reqWeek全面上调约50%（文档页+coding-plan页双重确认），reqMonth不变
  // 2026.07.02核对：新增GLM-5.2支持（导航栏"GLM-5.2Coding Plan 新"标签），价格和额度不变
  { platform:'优云智算', name:'Mini', monthly:49, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.2','MiniMax-M2.7','MiniMax-M2.5','DeepSeek-V3.2','DeepSeek-V4-Flash','GLM-5','Kimi-K2.5','GLM-5-Turbo','Kimi-K2.6','GLM-5.1','DeepSeek-V4-Pro','Qwen3.6-Plus'], req5h:300, reqMonth:1900, reqWeek:750, benefits:['12款主流编程模型','兼容 Claude Code/OpenClaw/Hermes'],
    note:'不同模型倍率1x~3x抵扣·5h窗口准点刷新·并发3·适合初步接触AI', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云智算', name:'Lite', monthly:99, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.2','MiniMax-M2.7','MiniMax-M2.5','DeepSeek-V3.2','DeepSeek-V4-Flash','GLM-5','Kimi-K2.5','GLM-5-Turbo','Kimi-K2.6','GLM-5.1','DeepSeek-V4-Pro','Qwen3.6-Plus'], req5h:600, reqMonth:3800, reqWeek:1500, benefits:['12款主流编程模型','兼容 Claude Code/OpenClaw/Hermes'],
    note:'不同模型倍率1x~3x抵扣·5h窗口准点刷新·并发5·适合入门轻度使用', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云智算', name:'Basic', monthly:199, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.2','MiniMax-M2.7','MiniMax-M2.5','DeepSeek-V3.2','DeepSeek-V4-Flash','GLM-5','Kimi-K2.5','GLM-5-Turbo','Kimi-K2.6','GLM-5.1','DeepSeek-V4-Pro','Qwen3.6-Plus'], req5h:1200, reqMonth:7600, reqWeek:3000, benefits:['12款主流编程模型','兼容 Claude Code/OpenClaw/Hermes'],
    note:'不同模型倍率1x~3x抵扣·5h窗口准点刷新·并发10·适合日常基础使用', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云智算', name:'Pro', monthly:499, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.2','MiniMax-M2.7','MiniMax-M2.5','DeepSeek-V3.2','DeepSeek-V4-Flash','GLM-5','Kimi-K2.5','GLM-5-Turbo','Kimi-K2.6','GLM-5.1','DeepSeek-V4-Pro','Qwen3.6-Plus'], req5h:3000, reqMonth:19000, reqWeek:7500, benefits:['12款主流编程模型','OpenClaw Agent 附加权益'],
    note:'不同模型倍率1x~3x抵扣·5h窗口准点刷新·并发10·适合高阶用户', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云智算', name:'Max', monthly:799, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.2','MiniMax-M2.7','MiniMax-M2.5','DeepSeek-V3.2','DeepSeek-V4-Flash','GLM-5','Kimi-K2.5','GLM-5-Turbo','Kimi-K2.6','GLM-5.1','DeepSeek-V4-Pro','Qwen3.6-Plus'], req5h:4800, reqMonth:31000, reqWeek:12000, benefits:['12款主流编程模型','OpenClaw Agent 附加权益'],
    note:'不同模型倍率1x~3x抵扣·5h窗口准点刷新·并发10·适合高阶用户', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },
  { platform:'优云智算', name:'Ultra', monthly:999, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.2','MiniMax-M2.7','MiniMax-M2.5','DeepSeek-V3.2','DeepSeek-V4-Flash','GLM-5','Kimi-K2.5','GLM-5-Turbo','Kimi-K2.6','GLM-5.1','DeepSeek-V4-Pro','Qwen3.6-Plus'], req5h:6000, reqMonth:39000, reqWeek:15000, benefits:['12款主流编程模型','OpenClaw Agent 附加权益'],
    note:'不同模型倍率1x~3x抵扣·5h窗口准点刷新·并发10·适合高阶用户', link:'https://passport.compshare.cn/register?referral_code=Kkl0Vgy0pCsFOzeMtfGBdI' },

  // OpenCode Go - 2026.05.13 新增，低成本开源编程模型订阅服务
  // 官方文档：https://opencode.ai/docs/zh-cn/go
  // 开通入口：https://opencode.ai/go?ref=V156X2ZH2S
  // 首月$5优惠已于2026.08.25取消，$10/月起；限制以美元价值计费，不同模型有不同请求数
  // 模型列表：GLM-5, GLM-5.1, Kimi K2.5, Kimi K2.6, MiMo-V2.5, MiMo-V2.5-Pro, MiniMax M2.5, Qwen3.5 Plus, Qwen3.6 Plus, Qwen3.7 Max, MiniMax M2.7, DeepSeek V4 Pro, DeepSeek V4 Flash
  // 2026.05.27 核对：13个模型（新增 Qwen3.7 Max），5h限制$12/每周$30/每月$60额度，不同模型请求数不同（按页面表格取中间值）
  // 2026.05.30核对：Qwen3.5-Plus已从模型列表移除，现12个模型
  // 2026.06.04核对：新增Qwen3.7-Plus模型，现14个模型；req5h中位数更新为3175（含Qwen3.7-Plus的4300次/5h）
  // 2026.06.14核对：模型列表变更—移除Kimi-K2.5/MiniMax-M2.5，新增Kimi K2.7 Code，现13个模型
  // 2026.08.04 更新：DeepSeek-V4-Flash 已升级为正式版 DeepSeek-V4-Flash-0731
  // 2026.08.11 核对：官方文档模型列表新增 GPT-5.6-Luna、Qwen3.8-Max，当前18款（与Token Plan数据一致）
  // 2026.08.15核对：官方文档新增 GLM-5.3（19款）；GLM-5.3 每5h 220次/周540/月1080·额度$15（新模型额度乘数低）；价格$10/月不变
  // 2026.08.15二次核对：官方文档新增 DeepSeek-V4-Pro-0813（20款）
  // 2026.08.16核对（CDP+Hermes双通道确认）：官方文档模型列表20→19款，DeepSeek-V4-Pro-0813/DeepSeek-V4-Flash-0731 后缀条目移除，仅保留无后缀 DeepSeek V4 Pro/DeepSeek V4 Flash（0813/0731版本名被官方回退为通用名）
  // 2026.08.18核对：官方文档公布各模型请求额度表·DeepSeek-V4-Flash 上调至 5h 7,600/周 18,900/月 37,800（08-17 记录 3,800/9,450/18,900·现翻倍恢复）·MiniMax M3 仍 3,200/8,000/16,000·美元额度$12/5h·$30/周·$60/月不变
  // 2026.08.22核对：模型 20→22 款（新增 DeepSeek-V4-Flash-Vision-Exp 3,800/9,450/18,900·Ox-Alpha-Free 限时免费·无额度表）；$12/5h·$30/周·$60/月不变
  // 2026.08.25核对（CDP 官方文档）：模型 22→23 款（新增 LongCat-2.0 11,400/28,600/57,200·与 Token 页数据同步）
  // 2026.08.26核对（CDP 官方文档两次独立抓取）：模型替换 Grok-4.5→Grok 4.6（169/423/845·总数仍 23 款·列表无 Grok 4.5）
  // 2026.08.27核对（CDP 官方文档两次独立抓取）：模型变更——新增 GLM-5.3-Flash(1,580/3,950/7,900)·移除 Ox-Alpha-Free（限时免费结束·无额度表·总数仍 23 款）
  // 2026.08.29核对（CDP 官方文档两次独立抓取）：模型 23→25 款——新增 Qwen3.8 Flash(5,400/13,500/27,000)·Hy4 preview(1,350/3,380/6,770)·$12/5h/$30/周/$60/月额度不变
  // 2026.09.15核对（源站 API zen/go/v1/models 两次一致 37 款 + docs 页）：限时 DS-V4.1-Flash 4倍用量横幅已结束（docs 页无横幅）；模型目录 27→33 款——新增 Omen Alpha（独家神秘模型·$100/月额度·$10 订阅）、GLM-5、Kimi-K2.5、Qwen3.5-Plus、MiMo-V2-Pro、MiMo-V2-Omni（legacy 目录）；DeepSeek-V4.1-Flash 仍在目录但限时活动结束
  // 2026.09.18核对（API zen/go/v1/models 两次一致 38 款 + 信息页 CDP）：模型 37→38 款——新增 Union Alpha（opencode 官方·「Union Alpha 限时免费」横幅·信息页显示 ∞ 额度·API 目录确认在列）；DS-V4.1-Flash 限时4倍用量横幅仍在（9.20结束）；价格 $10/月不变
  // 2026.09.11核对（CDP 信息页两次一致）：新增 Muse Spark 1.3 Contributor（45,300次/5h·$60 月额度·国内不可调用·README已有标注）——官方额度表展示 10 款代表模型·价格/额度不变
  { platform:'OpenCode Go', name:'Go', currency:'$', monthly:10, quarterly:null, yearly:null, firstMonth:null,
    models:['Omen Alpha','Union Alpha','Grok-4.6','Grok-4.5','GLM-5.3-Flash','GLM-5.3','GLM-5.2','GLM-5.1','GLM-5','GPT-5.6-Luna','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','Kimi-K2.5','LongCat-2.0','MiMo-V2.5','MiMo-V2.5-Pro','MiMo-V2-Pro','MiMo-V2-Omni','MiniMax-M3','MiniMax-M2.7','MiniMax-M2.5','Muse Spark 1.2 Contributor','Muse Spark 1.3 Contributor','Qwen3.8-Max','Qwen3.8-Flash','Qwen3.7-Max','Qwen3.7-Plus','Qwen3.5-Plus','Qwen3.6-Plus','DeepSeek-V4.1-Flash','DeepSeek-V4-Pro','DeepSeek-V4-Flash','DeepSeek-Flash','Hy4-Preview','Hy3','Hy3-Preview','DeepSeek-V4-Flash-Vision-Exp'], req5h:null, reqMonth:null, reqWeek:null, quota5h:12, quotaWeek:30, quotaMonth:60, quotaUnit:'$', benefits:['38款开源编程模型','Union Alpha 限时免费模型','Omen Alpha 独家神秘模型·$100月额度','模型覆盖最广·月额度$60'],
    note:'⚠️2026.08.25首月$5优惠已取消·$10/月起·beta阶段·按美元滚动额度计费(5h $12·周 $30·月 $60)·各模型请求数不同·官方已公布各模型请求额度表：DeepSeek-V4-Flash 7,600/18,900/37,800·MiniMax M3 3,200/8,000/16,000·GLM-5.3-Flash 1,580/3,950/7,900·⭐Omen Alpha 独家匿名模型(9.4上线·$10订阅享$100月额度·社区传为GLM-5.4级)·⭐DS-V4.1-Flash 限时4倍用量活动进行中(9.20结束·$15→$60月额度)·⭐Union Alpha 限时免费模型(9.18核对·opencode官方·信息页显示∞额度)·页面模型列表持续更新(现38款·API权威目录)', link:'https://opencode.ai/go?ref=V156X2ZH2S' },

  // 2026.08.31核对（CDP 登录态·模型页 h3 枚举+供应商汇总两次独立抓取一致）：模型 98→100 款（页面 105 行含 5 款 Qwen"(Free)"重复·去重 100）——新增 Sensenova 供应商 2 款全免费：SenseNova 6.8 Flash-Lite / SenseNova 6.7 Flash-Lite；供应商 14→15·免费模型 36→39；价格 6 档/5h·7天额度不变（月付 $5/$10/$20/$100/$200·按季-10%·按年-20%）
  // 2026.09.09核对（CDP 首页两次一致）：首页模型数展示 100+→105+ 款·供应商 15→16 家（新增 Ollama 分组）·价格 6 档/额度/Pro 档「+450M token/月免费模型额度」文案均不变；/dashboard/models 需登录态（本轮 CDP 直连失败·下轮复核）
  // 2026.08.29核对（CDP 登录态·模型页+价格页两次独立抓取一致）：模型 97→98 款——新增 Codex 5.3 Spark（openai/gpt-5.3-codex-spark·GPT-5.3-Codex 精简低延迟版·纯文本 128K 上下文·标记免费）；GLM-5.3-Flash 页面显示空格命名 GLM-5.3 Flash（同模型·本地保留连字符规范）；页面 103 行（含17款Qwen"(Free)"重复·去重98款）；价格6档/5h·7天额度/Free 5M token不变（月付 $5/$10/$20/$100/$200·按季-10%）；付费档页面显示「95+模型」（原60+）
  // xKiro - 2026.09.18核对（api.xkiro.com/v1/models 权威源两次一致 110 条·去 :free 变体 102 款）：模型目录 93→102 款——新增 meituan/longcat-2.0 + Qwen 系列 12 款（qwen3.5-397b/flash/omni-flash/omni-plus、qwen3.6-27b/35b-a3b/max-preview、qwen3.7-flash、qwen3-max/plus-2025-07-28/vl-plus、qwen3-coder-plus）；移除 DeepSeek V3.1/V3.2、Codex-5.3-Spark（本地命名 devstral-2/mistral-large-3 等与 API id 的历史别名差不算变化）；价格/周额度 $35/70/140/700/1400 不变
  // 2026.08.14核对：官方价格页Free显示100K token/天，但用户指正公开额度为5M token/天（不是100K）·按5M记录并同步README
  // 2026.08.15：用户确认新增 DeepSeek V4 Pro 0813（全套餐模型列表同步）
  // 2026.08.15：用户确认新增 GLM-5.3（全套餐模型列表同步）
  // 2026.08.27：用户确认新增 GLM-5.3-Flash（全套餐模型列表同步）
  // 2026.08.19核对（CDP 登录态模型列表页）：模型 68→83 款、供应商 9→12——新增 Google/Gemini 系列(7款)、xAI/Grok 系列(3款)、Kimi 系列(4款)、DeepSeek V4 Flash 0731；新 banner「Grok 4.6/4.5、Kimi K2.6/K2.5 立减 15%(7天)」；价格/额度不变
  // 2026.08.28核对（登录态·价格页+模型页两次独立Tab一致）：模型 84→97 款、供应商分组 12→14 家（新增 Tencent 与 Meta/NVIDIA 分组展示）——新增 GLM 视觉/Flash 系列 10 款（GLM-4.7 FlashX/4.7 Flash/4.5-X/4.5 AirX/4.5 Flash/5V Turbo/4.6V/4.6V FlashX/4.6V Flash/4.5V）+DeepSeek V4 Flash Vision+Hy3+Muse Spark 1.2；页面模型列表 102 行（含 17 款 Qwen 免费标记"(Free)"重复条目·去重 97 款）；GLM-5.3-Flash 页面改空格命名（同模型·本地保留连字符规范）；价格 6 档/5h·7天额度不变（按季视图 $4.5/$9/$18/$90/$180=月付 9 折）；免费模型数 35+（定价页文案）；定价页「套餐+按量付费」双轨说明持续（高级模型按量付费·比官方价低35%）
  // 2026.09.14人工核对（CDP挂起·curl直连源站两次一致+api.xkiro.com/v1/models权威源diff）：周额度全线下调——Pro $67→$35、Pro+ $132→$70、Max $264→$140、Ultra $1,320→$700、Power $2,640→$1,400（约砍53%）·Free 5M→500K token/天（-90%）；月付价格不变=变相涨价；页面新增"30×价值"Worth up to标注+赠送free-model tokens（Pro 240M/Pro+ 480M/Max 960M/Ultra 4.8B/Power 9.6B 每月）·不再展示5h额度；模型 100→83 款/供应商15家：新增 GPT-6 Astra/Gemini 3.8 Flash/Fable 5.1/Hy4 Preview，移除 Qwen 长尾15款+MiniMax M2/M2.1全系+DeepSeek V3.1/V3.2；评分 4.5→4（用户指定）
  // 价格页：https://xkiro.com/#pricing；月付 Free $0 / Pro $5 / Pro+ $10 / Max $20 / Ultra $100 / Power $200；按季-10%、按年-20%
  { platform:'xKiro', name:'Free', currency:'$', monthly:0, quarterly:null, yearly:null, firstMonth:null,
    models:['GPT-6 Astra','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.6 Luna','GPT-5.5','GPT-5.4','GPT-5.4 Mini','Opus 5','Opus 4.8','Opus 4.7','Opus 4.6','Sonnet 5','Sonnet 4.6','Fable 5.1','Fable 5','Haiku 4.5','Gemini 3.8 Flash','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.1 Pro','Gemini 3 Flash','Gemini 2.5 Flash','Gemini 2.5 Pro','Grok 4.6','Grok 4.5','Grok Build 0.1','Kimi K3','Kimi K2.7 Code','Kimi K2.6','Kimi K2.5','Mistral Large 3','Mistral Medium 3.5','Mistral Small 4','Codestral','Devstral 2','Ministral 3 14B','Ministral 3 8B','Ministral 3 3B','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5 Turbo','GLM-5','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5 Air','GLM-4.7 FlashX','GLM-4.7 Flash','GLM-4.5-X','GLM-4.5 AirX','GLM-4.5 Flash','GLM-5V Turbo','GLM-4.6V','GLM-4.6V FlashX','GLM-4.6V Flash','GLM-4.5V','MiniMax M3','MiniMax M2.7','MiniMax M2.5','MiMo v2.5 Pro','MiMo v2.5','DeepSeek V4.1 Flash','DeepSeek V4 Pro 0813','DeepSeek V4 Pro','DeepSeek V4 Flash 0731','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','MiniMax M2.7-HighSpeed','MiniMax M2.5-HighSpeed','MiniMax M2.1','MiniMax M2.1-HighSpeed','MiniMax M2','Hy4 Preview','Hy3','Muse Spark 1.2','LongCat 2.0','Qwen3.8 Max','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Plus','Qwen3.6-Max-Preview','Qwen3.6-35B-A3B','Qwen3.6-27B','Qwen3.5 Plus','Qwen3.5-Omni-Plus','Qwen3.5-Omni-Flash','Qwen3.5-Flash','Qwen3.5-397B','Qwen3-VL-Plus','Qwen3-Coder-Plus','Qwen3-Max','Qwen-Plus','Nemotron 3 Ultra','Nemotron 3 Super','Nemotron 3 Nano','Nemotron 3 Nano Omni','Llama 3.3 Nemotron Super 49B','SenseNova 6.8 Flash-Lite','SenseNova 6.7 Flash-Lite'], req5h:null, reqMonth:null, reqWeek:null, quota5h:null, quotaWeek:null, quotaUnit:'$',
    benefits:['40+免费模型(页面口径)','500K 免费token/天(09.14下调·原5M)','免费AI图像生成·限量'],
    note:'永久免费·500K token/天(2026.09.14服务器直连核实·原5M/天大幅下调90%)·页面免费模型文案40+·AI图像生成有限量·2026.08.15用户确认新增DeepSeek V4 Pro 0813/GLM-5.3·2026.08.27新增GLM-5.3-Flash·注意：部分模型转为按量计费，与套餐额度分开', link:'https://xkiro.com/ref/5GDYTQU' },
  { platform:'xKiro', name:'Pro', currency:'$', monthly:5, quarterly:13.5, yearly:48, firstMonth:null,
    models:['GPT-6 Astra','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.6 Luna','GPT-5.5','GPT-5.4','GPT-5.4 Mini','Opus 5','Opus 4.8','Opus 4.7','Opus 4.6','Sonnet 5','Sonnet 4.6','Fable 5.1','Fable 5','Haiku 4.5','Gemini 3.8 Flash','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.1 Pro','Gemini 3 Flash','Gemini 2.5 Flash','Gemini 2.5 Pro','Grok 4.6','Grok 4.5','Grok Build 0.1','Kimi K3','Kimi K2.7 Code','Kimi K2.6','Kimi K2.5','Mistral Large 3','Mistral Medium 3.5','Mistral Small 4','Codestral','Devstral 2','Ministral 3 14B','Ministral 3 8B','Ministral 3 3B','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5 Turbo','GLM-5','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5 Air','GLM-4.7 FlashX','GLM-4.7 Flash','GLM-4.5-X','GLM-4.5 AirX','GLM-4.5 Flash','GLM-5V Turbo','GLM-4.6V','GLM-4.6V FlashX','GLM-4.6V Flash','GLM-4.5V','MiniMax M3','MiniMax M2.7','MiniMax M2.5','MiMo v2.5 Pro','MiMo v2.5','DeepSeek V4.1 Flash','DeepSeek V4 Pro 0813','DeepSeek V4 Pro','DeepSeek V4 Flash 0731','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','MiniMax M2.7-HighSpeed','MiniMax M2.5-HighSpeed','MiniMax M2.1','MiniMax M2.1-HighSpeed','MiniMax M2','Hy4 Preview','Hy3','Muse Spark 1.2','LongCat 2.0','Qwen3.8 Max','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Plus','Qwen3.6-Max-Preview','Qwen3.6-35B-A3B','Qwen3.6-27B','Qwen3.5 Plus','Qwen3.5-Omni-Plus','Qwen3.5-Omni-Flash','Qwen3.5-Flash','Qwen3.5-397B','Qwen3-VL-Plus','Qwen3-Coder-Plus','Qwen3-Max','Qwen-Plus','Nemotron 3 Ultra','Nemotron 3 Super','Nemotron 3 Nano','Nemotron 3 Nano Omni','Llama 3.3 Nemotron Super 49B','SenseNova 6.8 Flash-Lite','SenseNova 6.7 Flash-Lite'], req5h:null, reqMonth:null, reqWeek:null, quota5h:null, quotaWeek:35, quotaUnit:'$',
    benefits:['100+模型','每5h额度$7(推算)','赠送240M free-model tokens/月'],
    note:'$5/月·周额度$35(09.14下调·原$67)·每5h额度$7按原比例推算·页面不再展示5h额度·赠240M free-model tokens/月·价值标注"30×"·按季-10%·按年省20%($48/年)·09.18模型目录93→102款(新增LongCat+Qwen系列12款·移除DeepSeek V3.1/V3.2与Codex 5.3 Spark·API权威源两次一致)·注意：部分模型转为按量计费，与套餐额度分开', link:'https://xkiro.com/ref/5GDYTQU' },
  { platform:'xKiro', name:'Pro+', currency:'$', monthly:10, quarterly:27, yearly:96, firstMonth:null,
    models:['GPT-6 Astra','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.6 Luna','GPT-5.5','GPT-5.4','GPT-5.4 Mini','Opus 5','Opus 4.8','Opus 4.7','Opus 4.6','Sonnet 5','Sonnet 4.6','Fable 5.1','Fable 5','Haiku 4.5','Gemini 3.8 Flash','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.1 Pro','Gemini 3 Flash','Gemini 2.5 Flash','Gemini 2.5 Pro','Grok 4.6','Grok 4.5','Grok Build 0.1','Kimi K3','Kimi K2.7 Code','Kimi K2.6','Kimi K2.5','Mistral Large 3','Mistral Medium 3.5','Mistral Small 4','Codestral','Devstral 2','Ministral 3 14B','Ministral 3 8B','Ministral 3 3B','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5 Turbo','GLM-5','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5 Air','GLM-4.7 FlashX','GLM-4.7 Flash','GLM-4.5-X','GLM-4.5 AirX','GLM-4.5 Flash','GLM-5V Turbo','GLM-4.6V','GLM-4.6V FlashX','GLM-4.6V Flash','GLM-4.5V','MiniMax M3','MiniMax M2.7','MiniMax M2.5','MiMo v2.5 Pro','MiMo v2.5','DeepSeek V4.1 Flash','DeepSeek V4 Pro 0813','DeepSeek V4 Pro','DeepSeek V4 Flash 0731','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','MiniMax M2.7-HighSpeed','MiniMax M2.5-HighSpeed','MiniMax M2.1','MiniMax M2.1-HighSpeed','MiniMax M2','Hy4 Preview','Hy3','Muse Spark 1.2','LongCat 2.0','Qwen3.8 Max','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Plus','Qwen3.6-Max-Preview','Qwen3.6-35B-A3B','Qwen3.6-27B','Qwen3.5 Plus','Qwen3.5-Omni-Plus','Qwen3.5-Omni-Flash','Qwen3.5-Flash','Qwen3.5-397B','Qwen3-VL-Plus','Qwen3-Coder-Plus','Qwen3-Max','Qwen-Plus','Nemotron 3 Ultra','Nemotron 3 Super','Nemotron 3 Nano','Nemotron 3 Nano Omni','Llama 3.3 Nemotron Super 49B','SenseNova 6.8 Flash-Lite','SenseNova 6.7 Flash-Lite'], req5h:null, reqMonth:null, reqWeek:null, quota5h:null, quotaWeek:70, quotaUnit:'$',
    benefits:['Pro全部功能','用量为Pro 2倍','赠送480M free-model tokens/月'],
    note:'$10/月·周额度$70(09.14下调·原$132)·Pro的2倍额度·赠480M free-model tokens/月·按季-10%·按年省20%($96/年)·注意：部分模型转为按量计费，与套餐额度分开', link:'https://xkiro.com/ref/5GDYTQU' },
  { platform:'xKiro', name:'Max', currency:'$', monthly:20, quarterly:54, yearly:192, firstMonth:null,
    models:['GPT-6 Astra','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.6 Luna','GPT-5.5','GPT-5.4','GPT-5.4 Mini','Opus 5','Opus 4.8','Opus 4.7','Opus 4.6','Sonnet 5','Sonnet 4.6','Fable 5.1','Fable 5','Haiku 4.5','Gemini 3.8 Flash','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.1 Pro','Gemini 3 Flash','Gemini 2.5 Flash','Gemini 2.5 Pro','Grok 4.6','Grok 4.5','Grok Build 0.1','Kimi K3','Kimi K2.7 Code','Kimi K2.6','Kimi K2.5','Mistral Large 3','Mistral Medium 3.5','Mistral Small 4','Codestral','Devstral 2','Ministral 3 14B','Ministral 3 8B','Ministral 3 3B','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5 Turbo','GLM-5','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5 Air','GLM-4.7 FlashX','GLM-4.7 Flash','GLM-4.5-X','GLM-4.5 AirX','GLM-4.5 Flash','GLM-5V Turbo','GLM-4.6V','GLM-4.6V FlashX','GLM-4.6V Flash','GLM-4.5V','MiniMax M3','MiniMax M2.7','MiniMax M2.5','MiMo v2.5 Pro','MiMo v2.5','DeepSeek V4.1 Flash','DeepSeek V4 Pro 0813','DeepSeek V4 Pro','DeepSeek V4 Flash 0731','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','MiniMax M2.7-HighSpeed','MiniMax M2.5-HighSpeed','MiniMax M2.1','MiniMax M2.1-HighSpeed','MiniMax M2','Hy4 Preview','Hy3','Muse Spark 1.2','LongCat 2.0','Qwen3.8 Max','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Plus','Qwen3.6-Max-Preview','Qwen3.6-35B-A3B','Qwen3.6-27B','Qwen3.5 Plus','Qwen3.5-Omni-Plus','Qwen3.5-Omni-Flash','Qwen3.5-Flash','Qwen3.5-397B','Qwen3-VL-Plus','Qwen3-Coder-Plus','Qwen3-Max','Qwen-Plus','Nemotron 3 Ultra','Nemotron 3 Super','Nemotron 3 Nano','Nemotron 3 Nano Omni','Llama 3.3 Nemotron Super 49B','SenseNova 6.8 Flash-Lite','SenseNova 6.7 Flash-Lite'], req5h:null, reqMonth:null, reqWeek:null, quota5h:null, quotaWeek:140, quotaUnit:'$',
    benefits:['Pro+全部功能','用量为Pro 4倍','赠送960M free-model tokens/月'],
    note:'$20/月·周额度$140(09.14下调·原$264)·4倍Pro额度·适合日常开发与生产负载·赠960M free-model tokens/月·按季-10%·按年省20%($192/年)·注意：部分模型转为按量计费，与套餐额度分开', link:'https://xkiro.com/ref/5GDYTQU' },
  { platform:'xKiro', name:'Ultra', currency:'$', monthly:100, quarterly:270, yearly:960, firstMonth:null,
    models:['GPT-6 Astra','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.6 Luna','GPT-5.5','GPT-5.4','GPT-5.4 Mini','Opus 5','Opus 4.8','Opus 4.7','Opus 4.6','Sonnet 5','Sonnet 4.6','Fable 5.1','Fable 5','Haiku 4.5','Gemini 3.8 Flash','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.1 Pro','Gemini 3 Flash','Gemini 2.5 Flash','Gemini 2.5 Pro','Grok 4.6','Grok 4.5','Grok Build 0.1','Kimi K3','Kimi K2.7 Code','Kimi K2.6','Kimi K2.5','Mistral Large 3','Mistral Medium 3.5','Mistral Small 4','Codestral','Devstral 2','Ministral 3 14B','Ministral 3 8B','Ministral 3 3B','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5 Turbo','GLM-5','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5 Air','GLM-4.7 FlashX','GLM-4.7 Flash','GLM-4.5-X','GLM-4.5 AirX','GLM-4.5 Flash','GLM-5V Turbo','GLM-4.6V','GLM-4.6V FlashX','GLM-4.6V Flash','GLM-4.5V','MiniMax M3','MiniMax M2.7','MiniMax M2.5','MiMo v2.5 Pro','MiMo v2.5','DeepSeek V4.1 Flash','DeepSeek V4 Pro 0813','DeepSeek V4 Pro','DeepSeek V4 Flash 0731','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','MiniMax M2.7-HighSpeed','MiniMax M2.5-HighSpeed','MiniMax M2.1','MiniMax M2.1-HighSpeed','MiniMax M2','Hy4 Preview','Hy3','Muse Spark 1.2','LongCat 2.0','Qwen3.8 Max','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Plus','Qwen3.6-Max-Preview','Qwen3.6-35B-A3B','Qwen3.6-27B','Qwen3.5 Plus','Qwen3.5-Omni-Plus','Qwen3.5-Omni-Flash','Qwen3.5-Flash','Qwen3.5-397B','Qwen3-VL-Plus','Qwen3-Coder-Plus','Qwen3-Max','Qwen-Plus','Nemotron 3 Ultra','Nemotron 3 Super','Nemotron 3 Nano','Nemotron 3 Nano Omni','Llama 3.3 Nemotron Super 49B','SenseNova 6.8 Flash-Lite','SenseNova 6.7 Flash-Lite'], req5h:null, reqMonth:null, reqWeek:null, quota5h:null, quotaWeek:700, quotaUnit:'$',
    benefits:['Max全部功能','用量为Pro 20倍','赠送4.8B free-model tokens/月'],
    note:'$100/月·周额度$700(09.14下调·原$1,320)·20倍Pro额度·高并发·新功能抢先体验·赠4.8B free-model tokens/月·按季-10%·按年省20%($960/年)·注意：部分模型转为按量计费，与套餐额度分开', link:'https://xkiro.com/ref/5GDYTQU' },
  { platform:'xKiro', name:'Power', currency:'$', monthly:200, quarterly:540, yearly:1920, firstMonth:null,
    models:['GPT-6 Astra','GPT-5.6 Sol','GPT-5.6 Terra','GPT-5.6 Luna','GPT-5.5','GPT-5.4','GPT-5.4 Mini','Opus 5','Opus 4.8','Opus 4.7','Opus 4.6','Sonnet 5','Sonnet 4.6','Fable 5.1','Fable 5','Haiku 4.5','Gemini 3.8 Flash','Gemini 3.7 Flash','Gemini 3.6 Flash','Gemini 3.5 Flash','Gemini 3.1 Pro','Gemini 3 Flash','Gemini 2.5 Flash','Gemini 2.5 Pro','Grok 4.6','Grok 4.5','Grok Build 0.1','Kimi K3','Kimi K2.7 Code','Kimi K2.6','Kimi K2.5','Mistral Large 3','Mistral Medium 3.5','Mistral Small 4','Codestral','Devstral 2','Ministral 3 14B','Ministral 3 8B','Ministral 3 3B','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5 Turbo','GLM-5','GLM-4.7','GLM-4.6','GLM-4.5','GLM-4.5 Air','GLM-4.7 FlashX','GLM-4.7 Flash','GLM-4.5-X','GLM-4.5 AirX','GLM-4.5 Flash','GLM-5V Turbo','GLM-4.6V','GLM-4.6V FlashX','GLM-4.6V Flash','GLM-4.5V','MiniMax M3','MiniMax M2.7','MiniMax M2.5','MiMo v2.5 Pro','MiMo v2.5','DeepSeek V4.1 Flash','DeepSeek V4 Pro 0813','DeepSeek V4 Pro','DeepSeek V4 Flash 0731','DeepSeek V4 Flash','DeepSeek V4 Flash Vision','MiniMax M2.7-HighSpeed','MiniMax M2.5-HighSpeed','MiniMax M2.1','MiniMax M2.1-HighSpeed','MiniMax M2','Hy4 Preview','Hy3','Muse Spark 1.2','LongCat 2.0','Qwen3.8 Max','Qwen3.7 Max','Qwen3.7 Plus','Qwen3.7 Flash','Qwen3.6 Plus','Qwen3.6-Max-Preview','Qwen3.6-35B-A3B','Qwen3.6-27B','Qwen3.5 Plus','Qwen3.5-Omni-Plus','Qwen3.5-Omni-Flash','Qwen3.5-Flash','Qwen3.5-397B','Qwen3-VL-Plus','Qwen3-Coder-Plus','Qwen3-Max','Qwen-Plus','Nemotron 3 Ultra','Nemotron 3 Super','Nemotron 3 Nano','Nemotron 3 Nano Omni','Llama 3.3 Nemotron Super 49B','SenseNova 6.8 Flash-Lite','SenseNova 6.7 Flash-Lite'], req5h:null, reqMonth:null, reqWeek:null, quota5h:null, quotaWeek:1400, quotaUnit:'$',
    benefits:['Ultra全部功能','用量为Pro 40倍','赠送9.6B free-model tokens/月'],
    note:'$200/月·周额度$1,400(09.14下调·原$2,640)·40倍Pro额度·最高输出上限·团队与大规模生产负载·赠9.6B free-model tokens/月·按季-10%·按年省20%($1,920/年)·注意：部分模型转为按量计费，与套餐额度分开', link:'https://xkiro.com/ref/5GDYTQU' },
  // ChatGPT - 第三方渠道售卖，非官方平台
  { platform:'ChatGPT', name:'Team', monthly:28.8, quarterly:null, yearly:null, firstMonth:null,
    models:['GPT-5.4','GPT-Image-2','GPT-5.3-Codex','GPT-5.2'], req5h:null, reqMonth:null, reqWeek:null, benefits:[],
    note:'⚠️第三方渠道·质保半个月', link:'https://wzyp.cn/shop/mirage' },
  { platform:'ChatGPT', name:'Plus', monthly:26.6, quarterly:null, yearly:null, firstMonth:null,
    models:['GPT-5.4','GPT-Image-2','GPT-5.3-Codex','GPT-5.2'], req5h:null, reqMonth:null, reqWeek:null, benefits:[],
    note:'⚠️第三方渠道·无质保', link:'https://pay.ldxp.cn/shop/mirage' },

  // Charm Hyper (hyper.charm.land) — Charmbracelet 出品的 AI 推理服务平台
  // 基于 Hypercredits 预付费体系，1 Hypercredit = 5¢，按模型实际 Token 消耗扣减
  // 支持 20 款主流编码模型，专用 AI 编码推理优化，零数据留存
  // Charmbracelet 也是 Crush（AI 编码工具）的开发商
  // 2026.08.14 新增 DeepSeek-V4-Flash-0731 与 Kimi-K3（16款）
  // 2026.08.15 新增 DeepSeek-V4-Pro-0813（17款）
  // 2026.09.12核对：模型目录 33→34 款（curl v1/models 两次一致）——新增 DeepSeek-V4.1-Flash；价格/套餐不变
  { platform:'Charm Hyper', name:'Free', monthly:0, currency:'$', quarterly:null, yearly:null, firstMonth:null,
    models:['DeepSeek-V4-Flash-0731','DeepSeek-V4-Flash','DeepSeek-V4-Pro-0813','DeepSeek-V4-Pro','DeepSeek-V4.1-Flash','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5','Gemma4-26B','GPT-OSS-120B','Inkling','Qwen3.8-Max','Qwen3.8-Flash','Qwen3.8-27B','Qwen3.8-2.4T-A95B','Qwen3-Coder-480B','Qwen3-Next-80B','Qwen3.7-Flash','Qwen3.7-Plus','Qwen3.7-Max','Qwen3.6-Plus','Qwen3.6-Max','Qwen3.6-Flash','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','Kimi-K2.5','Kimi-K2-Thinking','MiniMax-M3','MiniMax-M2.7','Llama-3.3-70B','Llama-4-Maverick-17B'], req5h:null, reqMonth:null, reqWeek:null, benefits:['注册送100积分（≈$5）','34款编码模型','零数据留存'],
    note:'免费·100 Hypercredits/月·1积分=5¢·约合$5/月额度·DeepSeek-V4系列性价比极高·GLM-5.2偏贵不划算·兼容 Crush/OpenClaw/Claude Code·09.12模型目录 33→34 款（/v1/models 抓取·新增 DeepSeek-V4.1-Flash）', link:'https://hyper.charm.land/' },
  { platform:'Charm Hyper', name:'Subscription', monthly:20, currency:'$', quarterly:null, yearly:null, firstMonth:null,
    models:['DeepSeek-V4-Flash-0731','DeepSeek-V4-Flash','DeepSeek-V4-Pro-0813','DeepSeek-V4-Pro','DeepSeek-V4.1-Flash','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5','Gemma4-26B','GPT-OSS-120B','Inkling','Qwen3.8-Max','Qwen3.8-Flash','Qwen3.8-27B','Qwen3.8-2.4T-A95B','Qwen3-Coder-480B','Qwen3-Next-80B','Qwen3.7-Flash','Qwen3.7-Plus','Qwen3.7-Max','Qwen3.6-Plus','Qwen3.6-Max','Qwen3.6-Flash','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','Kimi-K2.5','Kimi-K2-Thinking','MiniMax-M3','MiniMax-M2.7','Llama-3.3-70B','Llama-4-Maverick-17B'], req5h:null, reqMonth:null, reqWeek:null, benefits:['250 Hypercredits/日','团队治理·主/子Key','用量报告'],
    note:'$20/月·250积分每日刷新·约7,500 Hypercredits/月·折合$375额度·1积分=5¢·团队管理功能', link:'https://hyper.charm.land/' },
  { platform:'Charm Hyper', name:'Bundle $5', monthly:5, currency:'$', quarterly:null, yearly:null, firstMonth:null,
    models:['DeepSeek-V4-Flash-0731','DeepSeek-V4-Flash','DeepSeek-V4-Pro-0813','DeepSeek-V4-Pro','DeepSeek-V4.1-Flash','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5','Gemma4-26B','GPT-OSS-120B','Inkling','Qwen3.8-Max','Qwen3.8-Flash','Qwen3.8-27B','Qwen3.8-2.4T-A95B','Qwen3-Coder-480B','Qwen3-Next-80B','Qwen3.7-Flash','Qwen3.7-Plus','Qwen3.7-Max','Qwen3.6-Plus','Qwen3.6-Max','Qwen3.6-Flash','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','Kimi-K2.5','Kimi-K2-Thinking','MiniMax-M3','MiniMax-M2.7','Llama-3.3-70B','Llama-4-Maverick-17B'], req5h:null, reqMonth:null, reqWeek:null, benefits:['100 Hypercredits','永不过期'],
    note:'$5一次性·100 Hypercredits·永不过期·1积分=5¢', link:'https://hyper.charm.land/' },
  { platform:'Charm Hyper', name:'Bundle $10', monthly:10, currency:'$', quarterly:null, yearly:null, firstMonth:null,
    models:['DeepSeek-V4-Flash-0731','DeepSeek-V4-Flash','DeepSeek-V4-Pro-0813','DeepSeek-V4-Pro','DeepSeek-V4.1-Flash','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5','Gemma4-26B','GPT-OSS-120B','Inkling','Qwen3.8-Max','Qwen3.8-Flash','Qwen3.8-27B','Qwen3.8-2.4T-A95B','Qwen3-Coder-480B','Qwen3-Next-80B','Qwen3.7-Flash','Qwen3.7-Plus','Qwen3.7-Max','Qwen3.6-Plus','Qwen3.6-Max','Qwen3.6-Flash','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','Kimi-K2.5','Kimi-K2-Thinking','MiniMax-M3','MiniMax-M2.7','Llama-3.3-70B','Llama-4-Maverick-17B'], req5h:null, reqMonth:null, reqWeek:null, benefits:['500 Hypercredits','永不过期'],
    note:'$10一次性·500 Hypercredits·永不过期·1积分=5¢', link:'https://hyper.charm.land/' },
  { platform:'Charm Hyper', name:'Bundle $20', monthly:20, currency:'$', quarterly:null, yearly:null, firstMonth:null,
    models:['DeepSeek-V4-Flash-0731','DeepSeek-V4-Flash','DeepSeek-V4-Pro-0813','DeepSeek-V4-Pro','DeepSeek-V4.1-Flash','GLM-5.3','GLM-5.3-Flash','GLM-5.2','GLM-5.1','GLM-5','Gemma4-26B','GPT-OSS-120B','Inkling','Qwen3.8-Max','Qwen3.8-Flash','Qwen3.8-27B','Qwen3.8-2.4T-A95B','Qwen3-Coder-480B','Qwen3-Next-80B','Qwen3.7-Flash','Qwen3.7-Plus','Qwen3.7-Max','Qwen3.6-Plus','Qwen3.6-Max','Qwen3.6-Flash','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','Kimi-K2.5','Kimi-K2-Thinking','MiniMax-M3','MiniMax-M2.7','Llama-3.3-70B','Llama-4-Maverick-17B'], req5h:null, reqMonth:null, reqWeek:null, benefits:['2000 Hypercredits','永不过期'],
    note:'$20一次性·2000 Hypercredits·永不过期·最佳性价比·1积分=5¢', link:'https://hyper.charm.land/' },

  // OpenStarry — 南京星核向量人工智能科技有限公司，国产大模型 API 聚合中转平台
  // 一个 Key 接入 GLM 5.2、DeepSeek V4、Kimi K2.6、MiniMax M3 等 40+ 国产及国际大模型
  // 三种计费形态：按次计费(Coding Plan)·自选套餐(Self-select)·按量计费(Token Plan)
  // Coding Plan仅支持国内已备案模型；周套餐不设5h限额；月套餐5h限额=周期总额10%
  // 模型抵扣系数（2026.07.22计费页）：kimi-k3=24(限时8折)、qwen3.7-max=10、glm-5.2=8(限时8折)、mimo-v2.5-pro/deepseek-v4-pro=5、kimi-k2.7-code=4(限时8折)、qwen3.7-plus/minimax-m3/kimi-k2.6=3、其它=1
  // 2026.06.18 新增
  // 2026.07.04 套餐重构：新增星痕版免费体验·星衍版更名为星创版·模型列表按档位分层
  // 2026.07.06核对：星衍版配额下调10000/1000(原12000/1200)+GLM-5.2移除移至星途版·MiniMax-M3移入星衍版；星途版下调25000/2500(原30000/3000)
  // 2026.07.09核对：页面v2026-07-04-001显式更新：星衍版→星创版·新增星痕版免费(200次/周)·各档模型列表已更新（GLM-5/GLM-5.1/Kimi-K2.5移除，新增Mimo-V2.5/Kimi-K2.7-Code/Qwen3.7-Plus/Qwen3.7-Max/Mimo-V2.5-Pro）
  // 2026.08.03核对：官方计费页确认周套餐不设5小时限额，月套餐5小时限额为周期总量10%；星创1000次/5h、星途2500次/5h；所有套餐已取消周限额。
  // 2026.07.22核对：星途版新增Kimi-K3（首页+计费页）；抵扣表新增kimi-k3=24限时8折；价格/额度不变
  // 2026.08.12核对：抵扣系数变更—kimi-k3 24→15(限时5折至8.31)、glm-5.2 8→6(限时6折至8.31)；新增qwen3.8-max入抵扣表(标准10·限时8折)；套餐价格/额度/模型不变
  // 2026.08.15核对：计费页抵扣表一致（glm-5.2 标准10·深夜5·限时6折6至8.31；kimi-k3 标准30·限时5折15至8.31；qwen3.8-max 标准10·限时8折8）；套餐对照/价格/额度/模型不变
  // 2026.08.20核对：抵扣表新增 deepseek-v4-flash/deepseek-v4-pro 标注「此版本将于8月31日下线」；套餐对照/价格/额度/其余抵扣系数不变
  // 2026.08.25核对（CDP 计费页）：抵扣表新增 glm-5.3（标准10·暂无活动）；glm-5.2 深夜5档系数已移除（现活动6全天·限时6折至8.31）；deepseek-v4-flash/pro 8.31 下线标注延续；套餐对照/价格/额度/模型不变
  // 2026.08.27核对（CDP 计费页两次独立抓取一致）：抵扣表活动系数明细确认——kimi-k2.6 标准3→活动1.5(限时5折)·kimi-k2.7-code 标准5→活动3(限时6折)·qwen3.7-plus 标准3→活动1.5(限时5折)·mimo-v2.5-pro 标准5→活动4(限时8折)·qwen3.7-max 标准10→活动6(限时6折)·deepseek-v4-flash 标准3→活动1(全天·8.31下线)·deepseek-v4-pro 标准5→活动4(全天·8.31下线)·deepseek-v4-flash-0731 标准3→2(空闲时段)·deepseek-v4-pro-0813 标准9→4.5(空闲时段)·glm-5.3 标准10·暂无活动；价格/额度/模型不变
  // OpenStarry - 2026.09.06 重大改版：官网四档 Coding Plan（星痕/星序/星创/星途）已从定价入口全部移除
  // 首页仅保留「自选套餐」按次计费模式（自选模型·¥0.005~¥0.02/次·按次扣费·1个月有效·注册赠200次）
  // 旧四档页面 /pricing、/coding-plan、/plans 均 404（CDP 实测）；api.openstarry.com 可访问
  // 旧套餐是否停止售卖需登录后确认——按「套餐下架（单源确认）」处理，标注待人工复核
  // 2026.09.09核对（CDP+AnySearch extract 两次一致·重大反转）：Coding Plan 三档复活——新结构 体验套餐¥5/月(20次/月·≈100万T)·星序版¥9.9/月(2,000次/月·≈1亿T)·星创版¥49.9/月(10,000次/月·≈5亿T)·旧星途版（¥99/月·30000次）已消失·非月付标注（星序/星创均标 /月·实为月付非周付）·自选套餐按次计费入口仍并存（#price-calc）·注册赠星痕版200次不变
  // OpenStarry - 2026.09.15 核对（源站直连两次 sha 一致 + web_extract 一次·三次一致）：套餐结构再次重构——「体验套餐 ¥5/月·20次」已消失、「星创版 ¥49.9/月」已消失；改为 星序版 ¥9.9/周(2000次/月·≈4500万Tokens) + 星衍版 ¥19.9/周(2000次/周·≈1亿Tokens·+DS-V4-Pro/MiniMax-M3/Mimo-V2.5-Pro) + 星途版 ¥99/月(30000次/月·≈20亿Tokens·+GLM-5.2/Qwen3.7-Max/Kimi-K3·高峰优先) + 自选套餐(¥9.9/周起按次计费)
  // 2026.09.06 改版记录：四档订阅制 Coding Plan 曾全部从定价入口移除→改为自选套餐；09.09 曾短暂恢复三档（体验/星序/星创）；09.15 现为 星序/星衍/星途 三档+自选
  { platform:'OpenStarry', name:'星序版', monthly:9.9, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.7','MiniMax-M2.7-HighSpeed','DeepSeek-V4-Flash','Mimo-V2.5','Kimi-K2.6','Kimi-K2.7-Code','Qwen3.7-Plus'], req5h:null, reqMonth:2000, reqWeek:null,
    benefits:['2,000次/月·≈4500万Tokens','周付¥9.9/周','厂商直连0加价'],
    note:'星序版¥9.9/周·2,000次/月·总量≈4500万Tokens·MiniMax-M2.7/DS-V4-Flash/Mimo-V2.5/K2.6/K2.7-Code/Qwen3.7-Plus·⚠️小众平台，注意分辨', link:'https://api.openstarry.com/?aff=X31B' },
  { platform:'OpenStarry', name:'星衍版', monthly:19.9, quarterly:null, yearly:null, firstMonth:null,
    models:['MiniMax-M2.7','MiniMax-M2.7-HighSpeed','DeepSeek-V4-Flash','DeepSeek-V4-Pro','MiniMax-M3','Mimo-V2.5','Mimo-V2.5-Pro','Kimi-K2.6','Kimi-K2.7-Code','Qwen3.7-Plus'], req5h:null, reqMonth:null, reqWeek:2000,
    benefits:['2,000次/周·≈1亿Tokens','周付¥19.9/周','含星序全部模型','+DS-V4-Pro/MiniMax-M3/Mimo-V2.5-Pro'],
    note:'星衍版¥19.9/周·2,000次/周(09.15新档·原星序档位面)·总量≈1亿Tokens·厂商直连0加价·⚠️小众平台，注意分辨', link:'https://api.openstarry.com/?aff=X31B' },
  { platform:'OpenStarry', name:'星途版', monthly:99, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.2','Qwen3.7-Max','Kimi-K3','MiniMax-M2.7','MiniMax-M2.7-HighSpeed','DeepSeek-V4-Flash','DeepSeek-V4-Pro','MiniMax-M3','Mimo-V2.5','Mimo-V2.5-Pro','Kimi-K2.6','Kimi-K2.7-Code','Qwen3.7-Plus'], req5h:null, reqMonth:30000, reqWeek:null,
    benefits:['30,000次/月·≈20亿Tokens','月付¥99/月','含星衍全部模型','+GLM-5.2/Qwen3.7-Max/Kimi-K3旗舰','高峰期优先响应'],
    note:'星途版¥99/月·30,000次/月(09.15恢复·旗舰档)·总量≈20亿Tokens·旗舰模型厂商直连·⚠️小众平台，注意分辨', link:'https://api.openstarry.com/?aff=X31B' },
  { platform:'OpenStarry', name:'自选套餐', monthly:12, quarterly:null, yearly:null, firstMonth:null,
    models:['GLM-5.2','GLM-5.3','Kimi-K3','Kimi-K2.7-Code','Kimi-K2.6','MiniMax-M3','MiniMax-M2.7','MiniMax-M2.7-HighSpeed','Mimo-V2.5','Mimo-V2.5-Pro','Qwen3.7-Plus','Qwen3.7-Max','DeepSeek-V4-Flash','DeepSeek-V4-Pro'], req5h:null, reqMonth:null, reqWeek:null,
    benefits:['自选模型组合','按次计费 ¥0.005~¥0.02/次','注册赠200次','3国内+3海外节点'],
    note:'自选套餐按次计费(¥9.9/周起·自选模型/次数/时长·1个月有效未用作废·金额=所选模型最高单价×次数)·注册赠200次·⚠️小众平台，注意分辨', link:'https://api.openstarry.com/?aff=X31B' },

  // Meituan CatPaw — 美团推出的 AI IDE（类 Cursor），AI 编程 Agent
  // 当前阶段完全免费，新用户 500 次对话额度，可申请续充
  // 支持 macOS（Apple Silicon + Intel）和 Windows
  // 2026.06.27 新增
  { platform:'Meituan CatPaw', name:'免费版', monthly:0, quarterly:null, yearly:null, firstMonth:null,
    models:[], req5h:null, reqMonth:null, reqWeek:null, benefits:['AI IDE（类 Cursor）','Agent 智能编码','代码补全预测','内嵌浏览器预览','Codebase 项目分析'],
    note:'完全免费·2026.09.03页面上线「CatPaw AI 工作台」·首登即得1000 Credits·LongCat-2.0 模型限时免费·500次对话/新用户·额度不足可申请续充·支持macOS/Windows·Python/C++/Java/JS/TS/Go/Rust', link:'https://catpaw.meituan.com/' },

  // AtomCode CodingPlan — 昇腾AI社区 AtomGit 出品的 AI 编码助手
  // 基于昇腾国产算力，支持 Claude Code/OpenCode/OpenClaw 等工具
  // 目前限时免费，每日限量领取，后续可能转为付费订阅
  // 信息页：https://ai.atomgit.com/serverless-api
  // 2026.07.14 核对：Lite限量恢复至1000人/日（从800回升），Pro体验版限量上调至150人/日
  // 2026.08.14 核对：页面卡片「支持模型」列表已移除Doubao-Seed-Evolving（全页无提及），同步移除3档models/评分/app/README
  // 2026.08.18 核对：信息页3档均显示"暂停开放·暂不可领取"（价格/额度/模型不变），已更新note标注
  // 2026.08.20 核对：额度下调（Lite 800→200次/5h·Pro体验版/Pro 1000→300/500次/5h）；新增模型 LongCat-2.0（全3档）；暂停开放标注延续
  // 2026.08.23 核对（AnySearch extract 官方信息页）：三档「支持模型」新增 qwen3.8-27b（全3档·页面第4款模型）；暂停开放/额度不变
  // 2026.08.25 核对（AnySearch extract 两次一致）：三档「支持模型」列表移除 Qwen3-VL-8B-Instruct（Lite 3款: qwen3.8-27b/deepseek-v4-flash/LongCat-2.0；Pro体验版/Pro 4款: +GLM-5.2）；暂停开放/额度不变
  // 2026.08.26 核对（AnySearch extract 两次一致·Tavily 索引用旧缓存不回退）：页面结构重组——Lite体验版（限时免费·每日10:00领取·限量300人/日·7天有效·约200次/5h·支持模型仅 qwen3.8-27b；DeepSeek-V4-Flash/LongCat-2.0 已从该档移除）·Lite（敬请期待·未开放·约300次/5h·qwen3.8-27b+deepseek-v4-flash）·Pro（敬请期待·未开放·约500次/5h·+GLM-5.2）·LongCat-2.0 全档移除·自8.18「暂停开放」后恢复每日领取
  // 2026.08.27核对（AnySearch extract 官方信息页两次一致）：Lite体验版每日限量 300→500 人/日回升（今日还剩481名额）·其余结构不变（Lite体验版 200次/5h·仅qwen3.8-27b·Lite/Pro 敬请期待）
  // 2026.09.03核对（AnySearch extract 两次一致）：三档支持模型列表全新增 MiMo-V2.5/MiMo-V2.5-Pro——Lite体验版 3款（mimo-v2.5/qwen3.8-27b/mimo-v2.5-pro·限量500人/日·今日剩479）·Lite 4款（+deepseek-v4-flash）·Pro 5款（+GLM-5.2）·额度/限量/领取规则不变
  // 2026.09.09核对（CDP 直连 + AnySearch extract 两次一致）：三档「支持模型」新增 glm5.3-flash——Lite体验版 4款（+glm5.3-flash·今日名额已领完）·Lite 5款·Pro 6款；Lite体验版限量仍500人/日；额度/领取规则不变
  { platform:'AtomCode', name:'Lite体验版', monthly:0, quarterly:null, yearly:null, firstMonth:null,
    models:['MiMo-V2.5','Qwen3.8-27B','MiMo-V2.5-Pro','GLM-5.3-Flash'], req5h:200, reqMonth:null, reqWeek:null,
    benefits:['昇腾国产算力','兼容主流编程工具'],
    note:'限时免费·每日10:00领取·限量500人/日(8.27回升·8.26为300)·7天有效(原30天)·约200次/5h·2026.09.03核对：支持模型新增 MiMo-V2.5/MiMo-V2.5-Pro（现3款·AnySearch extract 两次一致）·Lite/Pro档敬请期待未开放·恢复每日领取·AtomCode在线IDE·需下载客户端', link:'https://atomgit.com/setting/points?type=invite&picode=F9KEP99P&utm_source=ic_p' },
  { platform:'AtomCode', name:'Lite', monthly:0, quarterly:null, yearly:null, firstMonth:null,
    models:['MiMo-V2.5','Qwen3.8-27B','DeepSeek-V4-Flash','MiMo-V2.5-Pro','GLM-5.3-Flash'], req5h:300, reqMonth:null, reqWeek:null,
    benefits:['昇腾国产算力','兼容主流编程工具'],
    note:'2026.09.09核对：支持模型新增 GLM-5.3-Flash（现5款·CDP+AnySearch 两次一致）·敬请期待·未开放领取·约300次/5h·AtomCode在线IDE·需下载客户端', link:'https://atomgit.com/setting/points?type=invite&picode=F9KEP99P&utm_source=ic_p' },
  { platform:'AtomCode', name:'Pro', monthly:0, quarterly:null, yearly:null, firstMonth:null,
    models:['MiMo-V2.5','Qwen3.8-27B','DeepSeek-V4-Flash','GLM-5.2','MiMo-V2.5-Pro','GLM-5.3-Flash'], req5h:500, reqMonth:null, reqWeek:null,
    benefits:['昇腾国产算力','支持GLM-5.2','兼容主流编程工具'],
    note:'2026.09.09核对：支持模型新增 GLM-5.3-Flash（现6款·CDP+AnySearch 两次一致）·敬请期待·未开放领取·约500次/5h·AtomCode在线IDE·需下载客户端', link:'https://atomgit.com/setting/points?type=invite&picode=F9KEP99P&utm_source=ic_p' },
  // 商汤SenseNova - 商汤科技大模型平台 | SenseNova
  // 2026.09.02 核对：文档站模型总览由 5 款恢复为 7 款——DeepSeek V4 Pro（0813）/Kimi K3 重新出现在模型总览与模型卡片（两次独立抓取一致·与 08.29 移除记录相反向波动）·积分制 60,000/5h+600,000/周、Flash-Lite 返赠 1:1 说明不变·「6.7→6.8 兼容路由至8月31日」说明文字仍在页面（已过8.31·观察项）·Lite/Pro 付费档位仍未上线
  { platform:'商汤SenseNova', name:'Free · 公测', monthly:0, quarterly:null, yearly:null, firstMonth:null,
    models:['SenseNova 6.8 Flash Lite','SenseNova U1.5 Lite','SenseNova U1 Fast','DeepSeek V4 Pro','DeepSeek V4 Flash','GLM-5.2','Kimi K3'], req5h:60000, reqMonth:null, reqWeek:600000,
    benefits:['原生多模态架构','理解生成一体','原生Cowork-Skills体系','办公场景特化','支持Hermes Agent/OpenClaw'],
    note:'公测期完全免费·2026.08.28起TokenPlan启用积分制：通用积分池60,000积分滚动5h·Flash-Lite专属积分池600,000滚动周额度（不同模型按实际用量扣不同积分·扣减明细在账户页）·Flash-Lite消费1:1返赠通用积分（30天有效·不占额度）·模型7款（09.02复核：DeepSeek V4 Pro/Kimi K3 重归文档站总览·原1,500/500次/5h次数制已废止）·最多20个API Key·Lite/Pro付费档位即将上线', link:'https://www.sensenova.cn/token-plan' },
];
// ===== Platform Ratings =====
const RATINGS = [
  {
    name: 'xKiro', score: 4,
    reasons: ['周额度砍半（Pro $67→$35）·免费token 5M→500K砍90%·价格不变就是变相涨价', '统一API接入102款模型/15家供应商·覆盖面仍是最广的一档', 'GLM-5.3系列性价比仍然能打', '页面加"30×价值"Worth up to标注包装降价·套路味十足', '额度说砍就砍·建议按月购买随时撤退']
  },
  {
    name: 'CommandCode', score: 4,
    reasons: ['GO $1 起步·GOAT $10 含 $70 Credit（7倍·高于 OpenCode Go 的 6 倍）·价格明显占优', 'DeepSeek-V4.1-Flash 价格对齐官方·限时 6 倍用量', '月额度按模型分配：DeepSeek-V4-Flash $60/月（官方推荐主力·性价比最优）·GPT-5.6 Sol/GLM-5.2/Tencent Hy3 各 $70·新模型 $20', '官方模型目录 60 款(去免费镜像)·GO 38/GOAT 42/Pro 55/Max 60 全量含 Claude/GPT/Gemini/Grok 付费旗舰', '⚠️有新平台风险：2026 年中上线（$5M seed）·社区反馈速度慢/幻觉/额度换算有争议']   },

  {
    name: '智谱AI', score: 2.5,
    reasons: ['新版价格跳到 Lite ¥118 / Pro ¥538 / Max ¥1078，性价比直接崩了', '已改成积分制，仍要看高峰/非高峰折算，理解成本高', 'MCP 与模型共享额度，不再是额外加分项', 'OpenClaw 走次级调度，高负载下体验不占优', '9.3-9.20夜间畅用：23点-次日9点 GLM-5.3-Flash 在 ZCode 免费·其他 Agent 额度×2']
  },
  {
    name: 'z.ai', score: 2.5,
    reasons: ['美元计费且价格暴涨，Lite/Pro/Max 月付已到 $18/$80/$168（Pro/Max 8.11再涨）', '仅 2 个模型（GLM-5.3 / GLM-5.3-Flash·08.29 FAQ更新）', '相比国内同行明显不划算，纯靠 GLM 系列撑场']
  },

  {
    name: 'Kimi', score: 2.5,
    reasons: ['只需写前端可以买一个（K3 写前端能力够用）', '其他情况一律不推荐·太贵了！', '月付¥49/99/199/699·¥49档额度太少·性价比不占优', '请求数未公开·额度按周更新·用户无法核实额度', 'K2.5已于8.31全平台下线·K3仅Moderato及以上可用·低价档享受不到旗舰']
  },
  {
    name: 'MiniMax', score: 2,
    reasons: ['2026.06.01 全面升级 M3 体系·Starter/极速版已下架', '没了价格优势，但是也没变厉害！', 'Plus ¥49/Max ¥119/Ultra ¥469 三档·年付立省2个月', 'M2.7参考 1500/4500/15000 次·5h窗口·与M3共用配额', '月6~55亿token·1M上下文·Plus不支持视频·Max 3条/日·Ultra 5条/日']
  },
  {
    name: '字节·方舟', score: 3,
    reasons: ['首月2.5折特惠（Lite¥9.9/Pro¥49.9）延续至11.8，之后恢复原价', '09.10模型表新增Kimi-K3（抵扣系数高·官方仅建议Pro档）', '⚠双层计费依旧：额度消耗远快于同行·计费不透明', 'M2.7/K2.6/GLM-5.2均已下架·模型池频繁变动', '如果原价请勿购买！']
  },
  {
    name: '阿里·百炼', score: 3,
    reasons: ['量大，但是作妖，还抢不到', 'Pro限量抢购每日09:30补货', '固定¥200/月·每月90,000次请求', '新客首月特惠¥39.90(2026.08新增)']
  },

  {
    name: '联通云', score: 2,
    reasons: ['支持DeepSeek-V4全系列（官网没写pro，但是coding plan能调用）', '10 模型覆盖·支持动态模型路由·新增Kimi-K2.6/Qwen3.6-27B', '支持GLM-5.1', '当前资源紧张GLM-5.1很慢+429限流', '测试发现多数模型调用工具有问题，并且默认关闭思考模式', '没有异常扣费情况，挺耐用']
  },
  {
    name: '蓝耘元生代云', score: 2,
    reasons: ['支持GLM-5.1', '价格与智谱同档·季付9折年付8折', '高峰与非高峰差异化扣额', '模型可选较少', '模型老·用量不高·速度慢，降为2星']
  },
  {
    name: '腾讯·Coding', score: 3,
    reasons: ['Coding Plan·按请求次数计费·Auto智能路由', '仅月付Lite¥40/Pro¥200', '支持 GLM-5（09.10文档标注将于2026.10.09下线·届时仅剩Auto）', 'Kimi-K2.5已于8.31下线·Hunyuan-T1/TurboS/HY全系已于6.22下线·MiniMax-M2.5已于8.07下线']
  },
  {
    name: '移动云', score: 2,
    reasons: ['首月¥7.9 / ¥39.9·价格友好', '仅支持 MiniMax-M2.5·2026.05 GLM-5.1已移除', '仅特定资源池可购·部分省节点限本省账号']
  },
  {
    name: '讯飞星辰', score: 2.5,
    reasons: ['专业版已下线·高效版¥199/月保留19款模型(2026.08.14登录态复核含DeepSeek-V4-Flash-0731)', '新增速通版·首购¥699/月、后续¥999/月·5款旗舰模型·免排队·季付日常9折¥2697', '高效版5h/周/月为6000/45000/90000次·速通版30000次/月·200万TPM', '模型抵扣系数偏高（GLM-5.2/DeepSeek-V4-Pro为5x）·实际可用量打折', '这么慢的调用速度还有那么高的抵扣倍率，降为2星！！']
  },
  {
    name: '阶跃星辰', score: 3,
    reasons: ['2026.06.19 升级为 Credit 月池·取代旧版 Prompt 限额制', '新增季付(8.7折)/年付(7.8折)；加油包补充额度', 'Step-3.7-Flash 新上线·Agent/Coding/多模态高效模型', 'Step-3.5-Flash / 2603·极速性能默认开放', '语音模型增至 4 款(TTS/ASR/Realtime/Chat)', '¥49 起·Credit 月池 400M~40000M/月·无5h/周限制', 'Step-Image-Edit-2 将于2026.10.10下线(09.05文档公告)'],
  },
  {
    name: '快手 StreamLake', score: 3,
    reasons: ['KAT-Coder-Pro V2.5旗舰模型已上线', 'Mini ¥29 起·支持 OpenClaw/Claude Code/OpenCode', '09.10 营销页 /marketing/coding-plan 404（两次复核）·新入口待官方公布', '当前仅自家模型体系·且禁止 API 二次集成']
  },
  {
    name: 'Ollama', score: 3.5,
    reasons: ['09.07改为按token计费·定价透明度大幅提升', 'DeepSeek 高峰期时间为 20:00-次日凌晨 02:00·与别家不同！高峰期使用可考虑购买（低谷期 2 倍价不存在）', '并发首次明文：Free 1/Pro 3/Max与Team 10·额度按月重置不滚存·超额从余额扣', '自建/本地模型始终免费无限用·云端只是补充']
  },
  {
    name: 'TaoToken', score: 3,
    reasons: ['09.10 升级双 Flash：GLM-5.3-Flash + DeepSeek-V4-Flash 随时切换（model 填两者之一）', '⚠️9.12核对：本轮抢购活动已结束·三档均「活动已结束」·需订阅开售通知等下轮', '上轮价格：Lite ¥39(售罄)·Pro ¥99/Max ¥299·5h/周/月额度 600/2000/6000次5h', '⚠️官方明文禁止用于 Hermes/OpenClaw 等智能体（违规封停）', '⚠️小众平台·注意分辨']
  },
  {
    name: '稳明光语纪', score: 3.5,
    reasons: ['2026.09.03主模型升级 GLM-5.2→GLM-5.3(fp8)·智商可以·上下文400K·并发2·赠2000次DeepSeek-V4-Flash-0731调用', '⚠️09.12 重大反转：Pro/Plus/Max/¥29.9 新用户套餐全部恢复上架（09.10 曾下架）·四档 ¥45/¥125/¥249/¥429 价格额度未变', 'Lite ¥45/月1000次GLM-5.3·Max 40000次/月·并发2', '第三方小众Coding Plan·注意分辨']
  },
  {
    name: '优云智算', score: 2,
    reasons: ['6档套餐丰富(Mini¥49~Ultra¥999)', '12款主流模型(含GLM-5.2/DeepSeek-V4/Kimi/GLM/MiniMax/Qwen)', '不同模型倍率1x~3x抵扣', 'Pro及以上含 OpenClaw Agent 权益', 'UCloud优刻得旗下·上市公司(688158)·信誉可靠']
  },
  {
    name: 'OpenCode Go', score: 3.5,
    reasons: ['新增独家匿名模型 Omen Alpha·$10 订阅享 $100/月额度·同价位独一份', '38款开源模型·覆盖 GLM-5.3/5.2/5.1·Kimi-K3·MiniMax-M3·DeepSeek-V4/V4.1 全系·模型面在同价位最广', '按美元滚动额度计费·$12/5h·$30/周·$60/月·各模型请求数不同·官方已公布额度表', 'DS-V4.1-Flash 限时4倍用量活动9.20结束·Union Alpha 限时免费模型上线']
  },
  {
    name: 'OpenStarry', score: 1,
    reasons: ['2026.09.15 套餐再次重构：体验套餐/星创版消失·改为 星序¥9.9/周(2000次/月)·星衍¥19.9/周(2000次/周)·星途¥99/月(30000次/月)·两周内第三种结构·稳定性极差', '价格/次数均为硬上限·星序档额度从1亿缩水到4500万Tokens', '社区评价很差很差，主要集中在「模型造假」「额度缩水」', '⚠️小众平台，注意分辨']
  },
  {
    name: '国家超算互联网', score: 2,
    reasons: ['Lite ¥20/月·国内最低价', '支持 MiniMax-M2.5 / Qwen3-235B-A22B', '国家级平台·稳定性有保障']
  },
  {
    name: 'ChatGPT', score: 5, isAd: true,
    reasons: ['各种低价渠道GPT、Claude、Grok、Gemini账号订阅，直冲GPT、直冲Claude等']
  },
  {
    name: 'Charm Hyper', score: 3.5,
    reasons: ['d4f0731的速度最快能达到300T/s', 'd4f0731每日大概200-230M用量·对比之下不如commandcode划算', 'Free $0 / Subscription $20/月·Bundle $5/$10/$20·1积分=5¢', '用hyper建议使用qwen3.8flash', '⚠️模型价格不定时调整·购买前复核官方价格页']
  },
  {
    name: 'AtomCode', score: 4,
    reasons: ['昇腾AI社区出品·目前限时免费·每日限量领取', '毕竟是免费的·白嫖不亏', '2026.09.09三档支持模型新增 GLM-5.3-Flash（Lite体验版4款·Lite 5款·Pro 6款·CDP+AnySearch两次一致）', '2026.08.26页面结构重组：Lite体验版(200次/5h·每日10:00·500人/日·7天)·Lite(300·敬请期待)·Pro(500·敬请期待)', 'Lite/Pro正式档未开放·仅体验版可领']
  },
  {
    name: 'Meituan CatPaw', score: 4,
    reasons: ['美团出品·免费AI IDE（类Cursor）·新用户500次对话', 'Agent智能编码·Tab补全·Browser预览·Codebase分析', '支持macOS/Windows·可申请续充额度']
  },
  {
    name: '商汤SenseNova', score: 5,
    reasons: ['免费的要啥自行车', '2026.08.28起积分制：通用积分60,000/5h·Flash-Lite专属600,000/周（滚动）', 'SenseNova 6.8 Flash Lite 轻量多模态 · U1.5 Lite 图片创作 · U1 Fast 信息图', '09.02复核：DeepSeek V4 Pro/Kimi K3 重归文档站·现7款模型', 'Flash-Lite 消费 1:1 返赠通用积分（30天有效）', 'Lite/Pro 付费档位即将上线']
  }
];
