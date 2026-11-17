# 演讲 03「工具准备」：国内外 AI 工具清单

查询日 2026-11-17。月费以当天打开的官网为准，不含税，活动价会变。查不到的数字不写。

这份给 [HAN-1848](https://linear.app/hanglen/issue/HAN-1848)。页面每类只放下面标「推荐」的，其余点开再看。

本文换成全量清单。做定制软件仍建议先备的五类，收在最后，不跟这份清单抢一屏。

## 收录和推荐

收录的是老板能自己注册、直接拿来出活的产品。国内按还在运营的主要厂商铺开，同一家的聊天、做图、写代码分开写。

不收这三类：只卖接口、没有网页或 App 的模型；猫箱、星野这类角色扮演；拆不出来单独用的手机系统助手。商汤官网今晚是企业方案站，没有面向老板的免费入口，不放进表。

推荐看三件事：不会写代码就能用，有免费档，国内能用手机号或微信开通。每类国内、国外各留 3 到 5 个。

国外单独看付款。Claude 定价页写信用卡，没写中国区付款方式。Gemini 下面的美元价，页面写明是美国区。

门槛只分三档：不用写代码、会一点、要写代码。

## Home Repo

地基若把 Home Repo 当进阶，用下面两个链接。不要用 B 站搬运。

原始视频是 Matt Pocock 的长视频：[The Home Repo: The effortless multi-repo agent setup](https://www.youtube.com/watch?v=hWe-j78vNpc)。频道列表把它标在 `@mattpocockuk`，日期 2026-11-12，时长约 8 分 54 秒。视频说明指向 [原文](https://www.aihero.dev/the-home-repo-pattern)。

同一天还有一条约 1 分 30 秒的短视频：[The Home Repo Pattern](https://www.youtube.com/watch?v=zyQxyNQZ8B4)。页面用长视频。

他本人的 Home Repo 没有公开。视频里说技能是私有的，含业务数据。2026-11-17 用 GitHub API 列了 `mattpocock` 的公开库，没有名叫 home repo 的仓库。

文章里的指针例子指向两个公开库，都不是那份私有主仓：技能库 [mattpocock/skills](https://github.com/mattpocock/skills)，沙箱库 [mattpocock/sandcastle](https://github.com/mattpocock/sandcastle)。词典条目在 [Home Repo.md](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Home%20Repo.md)。

## 上页只放这些

| 类 | 国内 | 国外 |
|---|---|---|
| 聊天助手 | 豆包、千问、Kimi、DeepSeek、腾讯元宝 | Claude、Gemini、ChatGPT |
| 写代码 | Trae、WorkBuddy、通义灵码、CodeBuddy | Claude Code、GitHub Copilot、Codex、Cursor |
| 做图和设计 | 即梦、可灵、创客贴、星流 | Figma、Ideogram、Recraft |
| 做视频和配音 | 即梦、可灵、海螺、剪映、Vidu | Runway、HeyGen、CapCut、ElevenLabs |
| 办公和文档 | WPS AI、飞书、腾讯文档、通义听悟、ima | Notion、Claude、Gemini |
| 自动化 | 扣子、飞书多维表格、宜搭 | Zapier、n8n、Dify |
| 放代码、管任务 | Gitee、CODING、TAPD、飞书项目 | GitHub、Linear |
| 放上线 | 微信云开发、腾讯云、火山引擎 | Vercel、Zeabur |

即梦、可灵跨了做图和做视频，因为同一个网页两样都做。聊天和写代码重名的，也是同一个账号里的不同入口，表上分开。

## 聊天助手

国内这列，网页今晚都能打开。除 Kimi 外，公开页没有读到个人月费，不写数字。

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | 豆包 | 字节的对话助手，页面上有写作、生图、PPT | 不用写代码 | 首页能对话。公开页没标月费 | [doubao.com](https://www.doubao.com/) |
| 是 | 千问 | 阿里的对话助手，原通义域名会跳到这里 | 不用写代码 | 首页能对话。公开页没标月费 | [qianwen.com](https://www.qianwen.com/) |
| 是 | Kimi | 月之暗面的对话和办公助手，Plus 起含 Kimi Code | 不用写代码 | 免费能对话。Go 连续包月 49 元，年付 468 元；Plus 99 元/月。更高档见帮助中心 | [kimi.com](https://www.kimi.com/) · [价目](https://www.kimi.com/help/membership/membership-pricing) |
| 是 | DeepSeek | 深度求索的对话网页，另有 API | 不用写代码 | 网页没看到会员价。API 按量，见下行 | [deepseek.com](https://www.deepseek.com/) · [网页](https://chat.deepseek.com/) |
| 是 | 腾讯元宝 | 腾讯的对话助手，可用微信登录 | 不用写代码 | 首页能开。公开页没标月费 | [yuanbao.tencent.com](https://yuanbao.tencent.com/) |
| | 文心助手 | 百度的对话助手，原文心一言、文心一格都跳到这里 | 不用写代码 | 首页能对话。公开页没标月费 | [wenxin.baidu.com](https://wenxin.baidu.com/) |
| | 智谱清言 | 智谱的对话网页，页面写有画图、阅读 | 不用写代码 | 首页能开。月费没读到 | [chatglm.cn](https://chatglm.cn/) |
| | 讯飞星火 | 科大讯飞的对话助手 | 不用写代码 | 首页标题在，月费是脚本渲染，没读到 | [xinghuo.xfyun.cn](https://xinghuo.xfyun.cn/) |
| | 阶跃 AI | 阶跃星辰的助手，权益页有云端托管和积分档 | 不用写代码 | 权益页没标人民币月费。不把美元区内购当成国内价 | [权益](https://chat.stepfun.com/subscription/membership-benefits-explanation) |
| | 夸克 | 阿里的 AI 搜索和网盘应用 | 不用写代码 | 官网能开。月费没读到 | [quark.cn](https://www.quark.cn/) |
| | 纳米 AI | 360 的搜索和多智能体，能出报告、PPT、视频 | 不用写代码 | [bot.n.cn](https://bot.n.cn/) 能开。月费没读到 | [bot.n.cn](https://bot.n.cn/) |
| | 秘塔 AI 搜索 | 搜索，首页写没有广告，可上传文件、做幻灯片 | 不用写代码 | 首页写扫码免费使用。会员价没读到 | [metaso.cn](https://metaso.cn/) |
| | 天工 | 昆仑万维的办公智能体，能出 PPT、文档、表格、图和视频 | 不用写代码 | 官网能开。月费在 App 内，这次没打开购买页 | [tiangong.cn](https://www.tiangong.cn/) |
| | 海螺 / MiniMax | 对话、视频、语音在同一家。视频站和 Agent 站是两个入口 | 不用写代码 | 国内视频站没抽出月费。国际站分成说明里出现过 34.99 美元的 Pro 月费，那不是定价表，不采用 | [hailuoai.com](https://hailuoai.com/) · [agent.minimax.cn](https://agent.minimax.cn/) |

DeepSeek API 文档把两个型号的闲时、高峰价并排印着，这次没把每一列和型号名对齐，不抄进表。文档写明模型名用 `deepseek-flash`，搜索和网页抓取各 0.75 美元/千次。以 [定价页](https://api-docs.deepseek.com/quick_start/pricing/) 为准。

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Claude | Anthropic 的对话助手，付费档含 Claude Code | 不用写代码 | 免费 0 美元。Pro 月付 20 美元，年付一次 200 美元。Max 100 美元/月，Ultra 200 美元/月 | [claude.com/pricing](https://claude.com/pricing) |
| 是 | Gemini | 谷歌的对话助手，订阅里带生图、生视频 | 不用写代码 | 美国区：免费 0 美元；AI Plus 4.99 美元/月；AI Pro 19.99 美元/月；AI Ultra 从 99.99 美元/月起 | [订阅页](https://gemini.google/subscriptions/) |
| 是 | ChatGPT | OpenAI 的对话网页，今晚能打开 | 不用写代码 | 定价页今晚返回 403，不写月费。Codex 产品页同日早先写过 Plus、Pro，见写代码一节 | [chatgpt.com](https://chatgpt.com/) |
| | Grok | xAI 的对话网页，今晚能打开 | 不用写代码 | 定价页返回 403，不写月费 | [grok.com](https://grok.com/) |

Perplexity 的官网今晚返回 403，不列入。

## 写代码

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Trae 国内版 | 字节的编程工具，用大白话改项目 | 会一点 | 免费每月 500 积分。Lite 标价 49 元/月，定价页首月 39 元。Pro 文档写单月 99 元、连续包月首月 69 元。另有 Pro+ 219 元/月、Ultra | [定价](https://www.trae.cn/pricing) · [文档](https://docs.trae.cn/ide_plans-and-billing) |
| 是 | WorkBuddy | 腾讯的办公向编程助手，和 CodeBuddy 同一账号、积分共享 | 不用写代码 | 体验版免费，每月 500 积分。标准版 99 元/月，连续包月 70 元，连续包年 672 元 | [定价](https://www.workbuddy.cn/docs/workbuddy/Pricing) |
| 是 | 通义灵码 | 阿里云的编程插件，补全和改多个文件 | 要写代码 | 个人基础版免费。个人专业版页面写限免，标价 59 元/月。企业版 159 元/人/月，100 人起 | [定价](https://lingma.aliyun.com/pricing) |
| 是 | CodeBuddy | 腾讯云代码助手，官网能开 | 要写代码 | 价在 WorkBuddy 文档里按同一账号写。codebuddy.cn 今晚没再抽出月费 | [codebuddy.cn](https://www.codebuddy.cn/) |
| | Kimi Code | 写代码的入口，含在 Kimi 会员里 | 会一点 | Go 不含。Plus 起才有，价格见聊天一节 | [会员说明](https://www.kimi.com/help/membership/membership-pricing) |
| | 文心快码 Comate | 百度的编程助手 | 要写代码 | 定价页标题写有免费。月费正文几乎是空的，不写数字 | [定价](https://comate.baidu.com/zh/pricing) |
| | 华为云码道 | 华为云的企业编程助手 | 要写代码 | 官网能开。月费没读到 | [codearts.huaweicloud.com](https://codearts.huaweicloud.com/) |
| | CodeGeeX | 智谱的编程工具 | 要写代码 | 官网打开是空页，不写价 | [codegeex.cn](https://codegeex.cn/) |
| | MiniMax Code | MiniMax 的编程 Agent | 会一点 | 页面有一条限时免费提示，没读成稳定月费 | [agent.minimax.cn](https://agent.minimax.cn/) |

Trae 文档更新时间印着 2026-11-17 09:51。文档还写：Pro 连续包月 89 元，Pro+ 单月 239 元、连续包月 219 元，Ultra 单月 699 元、连续包月 629 元。免费用户另有注册赠送和每日签到。国际站 [trae.ai/pricing](https://www.trae.ai/pricing) 今晚没抽出数字，国内价以 trae.cn 为准。

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Claude Code | 在终端里改仓库，和 Claude 聊天共用额度 | 会一点 | 免费档不含。Pro 起含，价格见聊天一节 | [claude.com/pricing](https://claude.com/pricing) |
| 是 | GitHub Copilot | 写在编辑器里的补全和云端代理 | 要写代码 | 免费每月 2,000 次补全。Pro 10 美元/人/月，Pro+ 39 美元，Max 100 美元 | [套餐](https://github.com/features/copilot/plans) |
| 是 | Codex | OpenAI 的编程代理，含在 ChatGPT 套餐里 | 会一点 | 产品页今晚 403。同日早先打开写 Plus 20 美元/月、Pro 100 美元/月，当晚没复核到 | [openai.com/codex](https://openai.com/codex/) |
| 是 | Cursor | 带代理的编辑器。Plus 只含 Grok，别的模型按量另计 | 会一点 | 免费 0 美元。Plus 8 美元/月，Premium 30，Super 100，Ultra 200。团队 30 美元/人/月起 | [cursor.com/pricing](https://cursor.com/pricing) |
| | Windsurf / Devin | 打开 windsurf.com/pricing 会跳到 Devin 的定价 | 会一点 | 免费 0 美元。Pro 20 美元/月，Max 200 美元/月 | [devin.ai/pricing](https://devin.ai/pricing) |
| | Replit | 在浏览器里做应用 | 不用写代码 | Core 月付 20 美元，年付折合 18 美元/月。Pro 月付 100 美元，年付折合 90 美元/月 | [replit.com/pricing](https://replit.com/pricing) |
| | Lovable | 用一句话做网站和应用 | 不用写代码 | 免费 0 美元。后面两档 25 美元/月、50 美元/月，页面都写 100 credits | [lovable.dev/pricing](https://lovable.dev/pricing) |
| | Bolt | 用一句话做网站和原型 | 不用写代码 | 首页能开。月费没读到 | [bolt.new](https://bolt.new/) |
| | v0 | Vercel 的界面生成 | 会一点 | 首页能开。月费没读到 | [v0.app](https://v0.app/) |
| | Jules | 谷歌的自动改代码代理 | 要写代码 | 首页能开。月费没读到 | [jules.google](https://jules.google/) |

## 做图和设计

即梦、可灵、海螺、Vidu 的国内定价都在登录后的会员层，今晚的公开 HTML 没有抽出人民币月费。不抄第二手文章里的数字。

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | 即梦 | 字节的做图和做视频，和剪映一家 | 不用写代码 | 首页能创作。月费没读到 | [jimeng.jianying.com](https://jimeng.jianying.com/ai-tool/home) |
| 是 | 可灵 | 快手的做图和做视频 | 不用写代码 | 会员页能开。月费没读到 | [klingai.com](https://klingai.com/) |
| 是 | 创客贴 | 模板做图，首页写会打字就能做设计 | 不用写代码 | 官网能开。月费没读到 | [chuangkit.com](https://www.chuangkit.com/) |
| 是 | 星流 | Liblib 一系的设计代理 | 不用写代码 | 官网能开。月费没读到 | [xingliu.art](https://www.xingliu.art/) |
| | Liblib | 国内模型社区，在线生图 | 会一点 | 官网能开。月费没读到 | [liblib.art](https://www.liblib.art/) |
| | 吐司 | 在线生图社区，标题写免费 | 会一点 | 标题写免费。会员价没读到 | [tusi.cn](https://tusi.cn/) |
| | 万相 | 阿里的图像和视频模型页 | 不用写代码 | 页面能开。月费没读到 | [tongyi.aliyun.com/wan](https://tongyi.aliyun.com/wan/) |
| | 稿定 | 模板设计 | 不用写代码 | 官网能开，标题没读出。月费没读到 | [gaoding.com](https://www.gaoding.com/) |
| | WHEE | 美图的生图 | 不用写代码 | 官网能开。月费没读到 | [whee.com](https://www.whee.com/) |
| | Designkit | 美图的营销做图 | 不用写代码 | 官网能开。月费没读到 | [designkit.com](https://www.designkit.com/) |

原 x-design 打开后跳到 [zawa.ai](https://zawa.ai/)，页面是英文品牌站，不放进国内列。

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Figma | 界面设计，席位里带 AI 额度 | 会一点 | Professional 全席 16 美元/月，另有开发席 12 美元、协作席 3 美元。更高的 Organization、Enterprise 按年计 | [figma.com/pricing](https://www.figma.com/pricing/) |
| 是 | Ideogram | 生图，擅长图里的字 | 不用写代码 | 首页能开。月费没读到 | [ideogram.ai](https://ideogram.ai/) |
| 是 | Recraft | 给设计和电商用的生图 | 不用写代码 | 首页能开。月费没读到 | [recraft.ai](https://www.recraft.ai/) |
| | Midjourney | 生图 | 不用写代码 | 官网和帮助中心今晚都是 403，不写价 | [midjourney.com](https://www.midjourney.com/) |
| | Adobe Firefly | 生图 | 不用写代码 | 产品页今晚 403，不写价 | |
| | Runway | 做视频，也做图。价见下一节 | 不用写代码 | 见下一节 | [runway.com/pricing](https://runway.com/pricing) |

Gemini、ChatGPT、豆包、即梦的生图不另占一行，用上面的聊天或即梦。

## 做视频、配音和音乐

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | 即梦 | 文生视频、图生视频，和做图同一处 | 不用写代码 | 月费没读到 | [即梦](https://jimeng.jianying.com/ai-tool/home) |
| 是 | 可灵 | 文生视频、图生视频 | 不用写代码 | 月费没读到 | [可灵](https://klingai.com/) |
| 是 | 海螺视频 | MiniMax 的视频站，首页写 H3 已上线 | 不用写代码 | 国内站月费没读到 | [hailuoai.com](https://hailuoai.com/) |
| 是 | 剪映 | 剪辑，带 AI。capcut.cn 和 jianying.com 是同一个中文站 | 不用写代码 | 官网没列出会员价 | [剪映](https://www.jianying.com/) |
| 是 | Vidu | 生数科技的视频生成，有免费项目的说明文案 | 不用写代码 | 中文定价页没抽出人民币月费 | [vidu.cn](https://www.vidu.cn/) · [定价](https://www.vidu.cn/pricing) |
| | 万相 | 阿里的视频和图像 | 不用写代码 | 月费没读到 | [万相](https://tongyi.aliyun.com/wan/) |
| | MiniMax 语音 | 语音和音乐的产品页 | 不用写代码 | 页面能开。月费没读到 | [语音](https://www.minimax.cn/audio) |
| | 讯飞听见 | 录音转文字 | 不用写代码 | 官网能开。月费没读到 | [iflyrec.com](https://www.iflyrec.com/) |

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Runway | 做视频和做图 | 不用写代码 | 定价页标题写从 12 美元/月起。分档没从正文抽出 | [runway.com/pricing](https://runway.com/pricing) |
| 是 | HeyGen | 数字人出镜口播 | 不用写代码 | 免费 0 美元，每月 3 条带水印。Creator 29 美元/月，Pro 49 美元/月 | [heygen.com/pricing](https://www.heygen.com/pricing) |
| 是 | CapCut | 剪映的国际版剪辑 | 不用写代码 | 官网能开。月费没读到 | [capcut.com](https://www.capcut.com/) |
| 是 | ElevenLabs | 配音、克隆声音，也做音效 | 不用写代码 | 免费 0 美元，每月 1 万 credits。Starter 首月 1 美元、之后 6 美元/月。Creator 首月 11 美元、之后 22 美元/月。页面有限时折扣，以标价为准 | [elevenlabs.io/pricing](https://elevenlabs.io/pricing) |
| | Synthesia | 企业数字人口播 | 不用写代码 | Basic 免费，每月 500 credits。Starter 之后 19 美元/月。Pro 之后 89 美元/月 | [synthesia.io/pricing](https://www.synthesia.io/pricing) |
| | Pika | 做视频 | 不用写代码 | 首页能开。月费没读到 | [pika.art](https://pika.art/) |
| | Luma | 创意向的视频和代理 | 不用写代码 | 首页能开。月费没读到 | [lumalabs.ai](https://lumalabs.ai/) |
| | Suno | 做歌 | 不用写代码 | 免费 0 美元。Pro 月付 10 美元、年付折合 8 美元。Premier 月付 30、年付折合 24。Platinum 月付 120、年付折合 100 | [suno.com/pricing](https://suno.com/pricing) |
| | Fish Audio | 配音和克隆声音 | 不用写代码 | 首页能开。月费没读到 | [fish.audio](https://fish.audio/) |
| | Sora | OpenAI 的视频 | 不用写代码 | 官网今晚 403，不写价 | |

## 办公和文档

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | WPS AI | 在 WPS 里写文档、做 PPT、处理表 | 不用写代码 | 产品页能开。会员价今晚没读到 | [ai.wps.cn](https://ai.wps.cn/) |
| 是 | 飞书 | 消息、文档、多维表格、知识库 | 不用写代码 | 见下。当晚定价页没再抽出数字，沿用同日早先打开的版本页 | [定价](https://www.feishu.cn/pricing) |
| 是 | 腾讯文档 | 多人编辑文档、表、PPT | 不用写代码 | 官网能开。AI 会员价没读到 | [docs.qq.com](https://docs.qq.com/) |
| 是 | 通义听悟 | 开会转写、总结 | 不用写代码 | 首页有免费体验入口。月费没读到 | [tingwu.aliyun.com](https://tingwu.aliyun.com/) |
| 是 | ima | 腾讯的知识库助手 | 不用写代码 | 官网能开。月费没读到 | [ima.qq.com](https://ima.qq.com/) |
| | 钉钉 | 办公套件，带 AI | 不用写代码 | 官网能开。套件月费没读到。宜搭另见自动化 | [dingtalk.com](https://www.dingtalk.com/) |
| | AiPPT | 一句话做 PPT | 不用写代码 | 官网能开。月费没读到 | [aippt.cn](https://www.aippt.cn/) |
| | iSlide | PPT 插件和模板 | 不用写代码 | 官网能开。月费没读到 | [islide.cc](https://www.islide.cc/) |
| | 有道 | 网易的翻译和文档 | 不用写代码 | 官网能开。月费没读到 | [youdao.com](https://www.youdao.com/) |
| | Kimi、豆包、千问、天工 | 也能出文档和 PPT | 不用写代码 | 价见聊天一节，不重复占推荐位 | |

飞书套件，同日早先打开的 [版本对比](https://www.feishu.cn/pricing)：免费版含消息、云文档、多维表格、知识库，100 用户。商业标准版 50 元/人/月，专业版 80，旗舰版 120。页面写各版本按年付。当晚再打开没有抽出这些数字。

套件里的自动化次数，早先打开的 [帮助中心](https://www.feishu.cn/hc/zh-CN/articles/949255360693)：免费和标准各 200 次/月，专业 5,000，旗舰和企业版 50 万。当晚未复抽出。

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Notion | 文档和知识库，带 AI | 不用写代码 | 免费 0 美元/人。Plus 10 美元/人/月，Business 20 美元/人/月 | [notion.com/pricing](https://www.notion.com/pricing) |
| 是 | Claude | 付费档含文档、幻灯片 | 不用写代码 | 见聊天一节 | [claude.com/pricing](https://claude.com/pricing) |
| 是 | Gemini | 订进 Gmail 和网盘 | 不用写代码 | 见聊天一节，价是美国区 | [订阅页](https://gemini.google/subscriptions/) |
| | Gamma | 做演示文稿 | 不用写代码 | 定价页今晚 403，不写价 | |
| | ChatPPT | 做 PPT，国际站 | 不用写代码 | 首页能开。月费没读到 | [chatppt.cn](https://chatppt.cn/) |

## 自动化工作流

这列是把现成服务串起来，或者用表单把流程跑起来。做定制软件的主路仍是仓库加写代码的 AI，见最后一节。

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | 扣子 | 字节的智能体和办公套件，能写作、PPT、表、设计 | 不用写代码 | 新用户一次性 60 积分，30 天。新购个人进阶版单月 49 元，连续包月次月起 45 元，月积分 2,000 | [coze.cn](https://www.coze.cn/) · [调价公告](https://docs.volcengine.com/docs/coze/coze-individual-plan-price-adjustment-notice?lang=zh) |
| 是 | 飞书多维表格 | 一张表收数据，再用自动化往下走 | 不用写代码 | 独立版当晚没抽出价。早先打开：基础版免费、20 个账号；专业版 35 元/人/月 | [base.feishu.cn/pricing](https://base.feishu.cn/pricing) |
| 是 | 钉钉宜搭 | 对话生成业务应用 | 不用写代码 | 免费版 0 元，3 人，总数据 2 万条。专业版 5,988 元/年起（表上 30 人、40G 这一档） | [aliwork.com/pricing](https://www.aliwork.com/pricing) |
| | 集简云 | 把国内软件对接到一起 | 不用写代码 | 官网能开。月费没读到 | [jijyun.cn](https://www.jijyun.cn/) |
| | 影刀 | 给企业用的 RPA 和 Agent | 会一点 | 官网能开。月费没读到 | [yingdao.com](https://www.yingdao.com/) |

扣子 [积分说明](https://docs.coze.cn/coze_pro_credits) 今晚仍印着个人进阶版 1,500 积分。调价公告写 2026-11-12 起新购为 2,000，并说明积分单位在 11 月 5 日换过。两页不一致，新购以公告为准。

公告里其余新购单月价：高阶版仍是 99 元，旗舰版 239 元，尊享版 699 元。原订阅不改套餐就按旧价续。

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Zapier | 把国外软件串成自动流程 | 不用写代码 | 免费 0 美元，100 tasks/月。Professional 从 19.99 美元/月起。团队从 69 美元/月起 | [zapier.com/pricing](https://zapier.com/pricing) |
| 是 | n8n | 自动化，可以自己托管 | 会一点 | 云托管 Starter 年付折合 20 欧元/月，Pro 50 欧元/月。Community Edition 在 GitHub，可自己托管 | [n8n.io/pricing](https://n8n.io/pricing/) |
| 是 | Dify | 搭对话和流程应用，也能自己托管 | 会一点 | Sandbox 免费，200 message credits，页面没写是否按月刷新。Professional 590 美元/工作区/年。下一档 1,590 美元/年 | [dify.ai/pricing](https://dify.ai/pricing) |
| | Make | 和 Zapier 同类 | 不用写代码 | 定价页今晚 403，不写价 | |

## 放代码、管任务

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Gitee | 国内的代码托管 | 会一点 | 企业页写可以免费注册。付费档月费没读到 | [gitee.com/enterprises](https://gitee.com/enterprises) |
| 是 | CODING | 腾讯云的研发流程 | 会一点 | 官网能开。月费没读到 | [coding.net](https://coding.net/) |
| 是 | TAPD | 腾讯的需求和缺陷管理 | 不用写代码 | 首页有免费开通和价格入口。档位数字没读到 | [tapd.cn](https://www.tapd.cn/) |
| 是 | 飞书项目 | 飞书里的项目管理 | 不用写代码 | 官网能开。月费没读到 | [project.feishu.cn](https://project.feishu.cn/) |
| | 禅道 | 开源的项目和测试管理，也能买服务 | 会一点 | 官网写开源、免费。商业价没读到 | [zentao.net](https://www.zentao.net/) |

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | GitHub | 放代码、检查、任务单、自动部署都在这里 | 会一点 | 免费 0 美元，公开库和私有库数量不限。Team 4 美元/人/月，Enterprise 21 美元/人/月。私有库 Actions：免费版 2,000 分钟/月，Team 3,000，Enterprise 50,000。公开库分钟不计 | [github.com/pricing](https://github.com/pricing) |
| 是 | Linear | 管任务，一张单派给一个人或一个 AI | 不用写代码 | 免费 0 美元：人数不限，2 个团队，250 张单，单文件 10MB。Basic 按年付 10 美元/人/月。Business 按年付 16 美元/人/月 | [linear.app/pricing](https://linear.app/pricing) |

GitHub 免费版已经含 Issues。单少的时候不必另买任务工具。

## 放上线

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | 微信云开发 | 小程序的运行环境，在微信里开通 | 会一点 | 免费云环境每月 40,000 资源点，可体验 6 个月，超量不能按量付。基础套餐 19.9 元/月（原价 39 元），同样 40,000 点，可以加购。1,000 点 = 1 元 | [计算器](https://cloud.weixin.qq.com/cloudbase/price) |
| 是 | 腾讯云 | 网站、云函数、云开发的国内云 | 要写代码 | 门户能开。按产品计费，不写一个总月费 | [cloud.tencent.com](https://cloud.tencent.com/) |
| 是 | 火山引擎 | 字节的云，Trae 企业版也指向这里 | 要写代码 | 门户能开。不写一个总月费 | [volcengine.com](https://www.volcengine.com/) |
| | 阿里云 | 国内云。这次打开 aliyun.com 落到了国际站，国内价没核 | 要写代码 | 不写一个总月费 | [aliyun.com](https://www.aliyun.com/) |
| | 华为云 | 国内云 | 要写代码 | 门户能开。不写一个总月费 | [huaweicloud.com](https://www.huaweicloud.com/) |

| 推荐 | 工具 | 一句 | 门槛 | 价格 | 官网 |
|---|---|---|---|---|---|
| 是 | Vercel | 把网站仓库推上去就上线 | 会一点 | Hobby 0 美元/月。Pro 20 美元/月，含 20 美元用量额度 | [vercel.com/pricing](https://vercel.com/pricing) |
| 是 | Zeabur | 部署应用，有中文团队在用的托管 | 会一点 | 免费 0 美元。Dev 5 美元/月，Pro 19 美元/月，前 14 天免费。Team 79 美元/月，含 3 个席位 | [zeabur.com/pricing](https://zeabur.com/pricing) |
| | Cloudflare | 域名、CDN 和部署 | 会一点 | 定价页能开。套餐月费这次没抽出 | [cloudflare.com/plans](https://www.cloudflare.com/plans/) |

模型接口不单列。写代码和聊天的订阅里已经含模型。只有产品里要自己回答、生成，才另接 API。DeepSeek 的 API 价见聊天一节的文档链接。

## 做定制软件，页面若只讲这一条

听众若问的是「公司要做一套自己的软件，先买什么」，不要把上面八类都念完。先备四样：写代码的 AI、放代码的地方、管任务的地方、让代码跑起来的地方。

| 类型 | 入门 | 进阶 |
|---|---|---|
| 写代码的 AI | WorkBuddy、Trae | Claude Code、Codex |
| 放代码 | GitHub | GitHub |
| 管任务 | GitHub Issues | Linear |
| 工作流 | 飞书表格 | GitHub Actions |
| 放上线 | 微信云开发 | 微信云开发 |

入门和进阶有时是同一个名字，因为换平台比换名字贵。做微信小程序，上线就写微信云开发。飞书表收反馈，转成任务单的是写代码的 AI 定时去读，不是再买一个扣子。

扣子、宜搭、Dify、n8n、Zapier 是另一条路：先不做定制软件，把现成服务串起来。被问到就说有免费档，不放进这张五类表。
