# 演讲 03「模型能力」：AI 擅长什么，各领域现在谁最强

查询日 2026-11-18。只写当天打开的页面和当天拉下来的官方 JSON。第三方转载的名次互相打架，不用。

这份给 [HAN-1848](https://linear.app/hanglen/issue/HAN-1848)。下面「上台」是建议拍进一屏的字，后面的表是依据。

同一模型的不同档位（Max、xHigh、High）在榜上是不同行。前三按页面上的行来写。置信区间互相盖住时，不把第一名说成已经拉开。

## 上台

擅长，四条。每条都能当场举一个例子。

- 按一句话做出能看的网页。例子：一页三个价格档的产品介绍。
- 在终端里改仓库，一部分任务能自己跑完。例子：按说明改完，再跑检查。
- 按文字出图，海报也算。例子：一张带产品名的促销海报。
- 有标准答案的知识题，最强的一档能答对大约八成。例子：按公开材料问一个有标准答案的事实。

不擅长，四条。

- 没把握时仍会给一个肯定的答案。例子：冷门规格，它报出一个很像真的数字。
- 终端里的活做不完就要人看。例子：改完了，检查没过。
- 上下文窗口写得很大，不等于长文读得懂。例子：合同后半本里的一个数字，它可能漏掉。
- 你没放进去的内部数字，它不应该知道。例子：没给价目表，就不要让它报你们的会员价。

各领域前三见下表。标了「同家」的，前三是同一家的不同档，再下一行才是另一家。

| 领域 | 前三（页面上的行） | 榜 | 页面日期 |
|---|---|---|---|
| 前端 / 界面 | Claude Fable 5.2 (xHigh)；Claude Opus 5.5 (Max)；Claude Sonnet 5.5 (xHigh)。同家。下一名 Gemini 4 Carbon (High) | LMArena WebDev | 2026-11-13 |
| 后端 / 写代码 | Copilot Fusion (max)，页面没写里面是哪个模型；Claude Opus 5.5 (max) 与 Claude Fable 5.2 (max) 并列 | Terminal-Bench 首页那张有数字的表 | 2026-11-18 打开 |
| 美术、生图 | GPT-Image-2.6 Sunburst (Medium)；GPT-Image-2.5 Sunburst；GPT-Image-2.5 Flare。同家 | LMArena 文生图 · Art | 2026-11-16 |
| 视觉设计 | GPT-Image-2.5 Sunburst；GPT-Image-2.6 Sunburst (Medium)；GPT-Image-2 (Medium)。同家 | LMArena 文生图 · 商业设计 | 2026-11-16 |
| 视频 | Gemini Omni 1.2 Flash；Gemini Omni 1.1 Flash；gemini-omni-flash。同家 | LMArena 文生视频 | 2026-11-08 |
| 性价比 | GPT-6.1 Terra (Max)；GPT-6.2 Sol (Max)；GPT-6.2 Astra (Max)。同家 | Artificial Analysis Intelligence Index，按下面的规则从默认表里挑 | 2026-11-18 打开 |
| 国产 | Kimi K3.1 Pro；Qwen4 Max；腾讯 Hy4 | 同上，只留国内机构 | 2026-11-18 打开 |
| 综合 / 推理 | Claude Fable 5.2 (Max)；GPT-6.2 Astra (Max)；Gemini 4 Carbon (High) | Artificial Analysis Intelligence Index | 2026-11-18 打开 |
| 长文档 | 不上名次。同一页两句第一名对不上，只说最好的一档在八成多 | AA-LCR v1.1 | 2026-11-18 打开 |

SWE-bench 官方数据停在 2026 年 2 月，不排进这张表。见最后一节。

## 擅长

四条都是「现在做得到」，不是「每一家都一样强」。例子只说明听众能指给旁边的人看的那种事。

**按一句话做出能看的网页。** LMArena WebDev 用人对打来排，到 2026-11-13 有 1,007,405 票、159 个模型。第一名 1826 分。例子：做一页带三档价格的产品介绍。

**在终端里改仓库，能做完其中一部分。** Terminal-Bench 量的是代理能不能在终端里把任务做完。首页那张表的第一行是 71.2%。例子：按说明改一个仓库，直到检查通过。

**按文字出图，商业海报也在里面。** 文生图总榜到 2026-11-16 有 6,988,405 票。商业设计这一类第一名的名次区间是 1–1，没有和第二名重叠。例子：一张带产品名的促销海报。

**有标准答案时，最强的一档大约能答对八成。** Artificial Analysis 的 AA-Omniscience v1.1 有 3,000 道来自公开材料的题。页面写 Claude Fable 5.2 (Max) 的准确率 79%，紧接着的两档是同一模型的 78% 和 77%。例子：按教材或公开报告问一个有标准答案的事实。

## 不擅长

**没把握时会猜。** 幻觉率看的是没答对的那些里面，有多少是错答，而不是拒答或只答对一部分。公式是错答除以（错答 + 部分答对 + 未作答）。

同一页写最低的三档是 Gemini 4 Carbon (Medium) 4%、Gemini 4 Argon (High) 4%、LFM3-1.7B 8%。[2026-11-17 的文章](https://artificialanalysis.ai/articles/openai-has-the-2-model-in-the-intelligence-index-with-the-release-of-gpt-6-2-astra-and-gpt-6-2-sol)写 GPT-6.2 Astra、GPT-6.2 Sol 在最高档是 59% 和 55%。例子：问一个冷门规格，它给一个像真的数字。

**终端任务仍有大约三成做不完。** 同一张 Terminal-Bench 表，第一行 71.2% ± 2.9%，第二行 65.8%。71.2 减 2.9 是 68.3，65.8 加 3.1 是 68.9，区间挨在一起。例子：改动交上去，自动检查没过。

**窗口大不等于读得懂。** [AA-LCR](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning) 页面写：大的上下文窗口不能保证模型能在长文档上推理。文档从 1 万到 10 万 token。例子：合同后半本里的一个数字，它可能对不上。

**没放进去的内部事实，不在这些榜的题里。** AA-Omniscience 的题来自学术和行业的公开材料。库存、报价、合同条款若没有交给它，这些榜说明不了它会不会答对。例子：没把价目表放进去，就不要让它报你们的会员价。

## 前端 / 界面

榜：[LMArena WebDev](https://arena.ai/leaderboard/code/webdev)，页面日期 2026-11-13。人对打，看前端页面，说明里写了多步和工具调用。分数越高越好。± 是页面上的误差，名次区间是页面上的 Rank Spread。

| 名次 | 模型 | 分数 | 票 | 名次区间 | 标价，输入 / 输出，美元每百万 token |
|---|---|---|---|---|---|
| 1 | Claude Fable 5.2 (xHigh)，Anthropic | 1826±19 | 1,445 | 1–2 | 8 / 40 |
| 2 | Claude Opus 5.5 (Max)，Anthropic | 1816±12 | 4,399 | 1–2 | 4 / 20 |
| 3 | Claude Sonnet 5.5 (xHigh)，Anthropic | 1772±10 | 6,120 | 3–6 | 2 / 10 |
| 4 | Gemini 4 Carbon (High)，Google，标了 Preliminary | 1768±15 | 2,105 | 3–6 | 2 / 10 |

前三都是 Anthropic。第一名只有 1,445 票，名次区间盖到第二名。国产里靠前的一行是 Qwen4-Max (xHigh)，第 6，1750±15，1,814 票，也标了 Preliminary。

## 后端 / 写代码

用 [Terminal-Bench](https://www.tbench.ai/) 首页。2026-11-18 打开时，页首标题是 4.1，那一栏的表是空的。

有数字的表挂在版号切换上，抓下来的标题是 4.0。下面的数字是这张有数字的表，不写成已经核对过的 4.1 名次。

[4.1 的说明](https://www.tbench.ai/news/terminal-bench-4-1)（2026-11-09）写：用新检查重判之后，提交的分数都落在原来 4.0 的 95% 置信区间里。量级可以当现在的情况看，精确名次以当天首页为准。

表上的花费是整榜花费，不是单次任务。分辨率旁边的 ± 是 95% 置信区间，页面原话。

| 名次 | 行上的名字 | 套壳 | 做完 | 行上的发布日 | 整榜花费 |
|---|---|---|---|---|---|
| 1 | Copilot Fusion (max) | GitHub Copilot | 71.2% ± 2.9% | 2026-11-17 | 2.0 千美元 |
| 2 | Claude Opus 5.5 (max) | Claude Code | 65.8% ± 3.1% | 2026-09-22 | 4.7 千美元 |
| 2 | Claude Fable 5.2 (max) | Claude Code | 65.8% ± 2.8% | 2026-11-09 | 16.5 千美元 |
| 4 | Gemini 4 Carbon (high) | Antigravity CLI | 64.5% ± 3.2% | 2026-10-28 | 1.4 千美元 |

Copilot Fusion 这一行没有写出里面是哪一个模型。点得出名字的模型里，前两名并列，下一名是 Gemini 4 Carbon。国产点得出名字、又比较靠前的是 Kimi K3.1 Pro (max)，第 10，59.7% ± 4.2%，套壳写的是 Claude Code，发布日 2026-10-24。

## 美术、生图

榜：[文生图 · Art](https://arena.ai/leaderboard/image/text-to-image/art)，2026-11-16，928,921 票。总榜是 [文生图 · Overall](https://arena.ai/leaderboard/image/text-to-image)，同一天，6,988,405 票。美术用 Art。总榜前三也全是 GPT-Image，只是顺序不同：Sunburst 2.5、Sunburst 2.6 (Medium)、Flare 2.5。

| 名次 | 模型 | 分数 | 票 | 名次区间 |
|---|---|---|---|---|
| 1 | GPT-Image-2.6 Sunburst (Medium)，OpenAI，Preliminary | 1421±22 | 904 | 1–4 |
| 2 | GPT-Image-2.5 Sunburst，OpenAI，Preliminary | 1415±9 | 9,528 | 1–3 |
| 3 | GPT-Image-2.5 Flare，OpenAI，Preliminary | 1391±9 | 9,484 | 2–5 |
| 4 | MAI-Image-2.7，Microsoft | 1386±26 | 544 | 1–6 |

第一名票少，名次区间盖到第四名。总榜上第一家不是 OpenAI 的，是 Microsoft 的 MAI-Image-2.7，第 4，1387±12。国产在总榜上靠前的是 Qwen-Image-3.0-Pro，第 15，1254±7；Seedream 5.0 Pro，第 17，1249±4。

## 视觉设计

榜：[文生图 · Product, Branding & Commercial Design](https://arena.ai/leaderboard/image/text-to-image/commercial-design)，2026-11-16，2,183,748 票。这是海报、产品和品牌，不是写前端代码。写页面用上一节的 WebDev。

| 名次 | 模型 | 分数 | 票 | 名次区间 |
|---|---|---|---|---|
| 1 | GPT-Image-2.5 Sunburst，OpenAI，Preliminary | 1420±7 | 21,834 | 1–1 |
| 2 | GPT-Image-2.6 Sunburst (Medium)，OpenAI，Preliminary | 1396±15 | 2,079 | 2–5 |
| 3 | GPT-Image-2 (Medium)，OpenAI | 1386±5 | 40,502 | 2–6 |
| 5 | MAI-Image-2.7，Microsoft | 1376±19 | 1,098 | 2–6 |

第 4 名仍是 OpenAI（GPT-Image-2.5 Flare）。第一名的名次区间没有盖住别人。国产靠前的是 Qwen-Image-3.0-Pro，第 15，1256±10；Seedream 5.0 Pro，第 22，1235±5。

## 视频

文生视频：[Text-to-Video](https://arena.ai/leaderboard/video/text-to-video)，2026-11-08，891,840 票、50 个模型。图生视频同一天另有一张榜，前三不一样，放在表后。

| 名次 | 模型 | 分数 | 票 | 名次区间 |
|---|---|---|---|---|
| 1 | Gemini Omni 1.2 Flash，Google，Preliminary | 1540±16 | 1,714 | 1–2 |
| 2 | Gemini Omni 1.1 Flash，Google | 1513±15 | 1,792 | 1–5 |
| 3 | gemini-omni-flash，Google | 1509±8 | 46,707 | 2–5 |
| 4 | FLUX 3 Video，Black Forest Labs，Preliminary | 1491±17 | 1,314 | 2–9 |

前三都是 Google，第一名票少。国产在这张榜上：Dreamina Seedance 2.0 (720p) 第 6，1483±8；Wan 3.0 第 8，1476±12；MiniMax H3 第 11，1456±8。可灵 Kling 2.5 Turbo (1080p) 第 30，1219±17。

图生视频：[Image-to-Video](https://arena.ai/leaderboard/video/image-to-video)，2026-11-08，2,505,296 票。前三是 Gemini Omni 1.2 Flash（1503±12，Preliminary，名次区间 1–5）、Dreamina Seedance 2.5 (720p)（1494±8，区间 1–7）、MiniMax H3（1493±6，区间 1–6）。三条的区间都从第 1 名盖起。上台若只留一张视频榜，用文生视频；若要让国内产品出现在前三，用这张图生视频。

## 性价比

榜：[Artificial Analysis 模型榜](https://artificialanalysis.ai/leaderboards/models)，2026-11-18 打开的默认表。Intelligence Index 越高越好。Cost per Task 是他们跑这套评测时的单次任务花费，不是用户聊一句的价钱。

页面没有单独的「性价比名次」。下面这条规则是这次排的，不是榜单原文。

只留指数不少于 50、单次花费有数字且大于 0 的行。若另一行指数更高、花费又更低，这一行就去掉，剩下的按花费从低到高。

| 顺序 | 模型 | 指数 | 单次花费 |
|---|---|---|---|
| 1 | GPT-6.1 Terra (Max)，OpenAI | 51 | 0.96 美元 |
| 2 | GPT-6.2 Sol (Max)，OpenAI | 57 | 1.01 美元 |
| 3 | GPT-6.2 Astra (Max)，OpenAI | 62 | 4.00 美元 |
| 4 | Claude Fable 5.2 (Max)，Anthropic | 65 | 26.54 美元 |

前三都是 OpenAI。再往上才是 Claude Fable 5.2，指数最高，单次花费也最高。

Gemini 4 Carbon (High) 是 60 分、7.76 美元，被 Astra 盖住（分更低、更贵），所以不在这四行里。

[2026-11-17 的文章](https://artificialanalysis.ai/articles/openai-has-the-2-model-in-the-intelligence-index-with-the-release-of-gpt-6-2-astra-and-gpt-6-2-sol)写：按单次花费看的帕累托前沿，大部分是 OpenAI，另外只有 Anthropic 和 Meta。文中的例子是 GPT-6.2 Sol 指数 57，单次花费大约是 GPT-6 Astra 的 15%。标价是另一套数：Astra 输入 8 美元、输出 40 美元每百万 token；Sol 是 2 美元和 10 美元。

指数 36、单次 0.14 美元的 Muse Ember (Max) 更便宜，但不到上面这条 50 分的线，没有放进前三。0 美元的行没有放进去，页面上的 0 分不清是免费还是没标价。

## 国产模型

仍用上面那张 Artificial Analysis 默认表，只留国内机构，按指数。

| 顺序 | 模型 | 机构 | 指数 | 单次花费 |
|---|---|---|---|---|
| 1 | Kimi K3.1 Pro | 月之暗面 | 46 | 3.68 美元 |
| 2 | Qwen4 Max | 阿里 | 43 | 3.27 美元 |
| 3 | Hy4 | 腾讯 | 35 | 1.03 美元 |
| 4 | DeepSeek V4.1 Flash 1017 (Max) | 深度求索 | 33 | 0.60 美元 |

这不是人气榜。LMArena [Text Arena](https://arena.ai/leaderboard/chat/text)（2026-11-11，9,122,174 票）上，国内行里分数最高的三行是 Kimi K3 (Max) 第 20、1487±4，名次区间 11–32；Kimi K3.1 Pro (Max) 第 24、1485±10，区间 9–50，3,995 票；Qwen3.8-Max 第 25、1484±5，区间 13–38。

三条区间叠在一起，不能从这张榜宣布一个「国产第一」。写代码时的顺序又不一样。

Terminal-Bench 那张表上，Kimi K3.1 Pro 是国产里最靠前的一行（第 10，59.7%）。Kimi K3 在同一张表上是第 31，23.0% ± 3.7%，聊天榜靠前不代表终端任务靠前。

## 综合与推理

同一张 Intelligence Index。页面写指数 v5.0.1 含这些项：AA-Briefcase v1.1、AutomationBench-AA、Terminal-Bench 4.0、FrontierCode-AA 2.0、AA-Omniscience v1.1、GDP.pdf、HLE-Diamond、CritPt v2 的难题子集、Terminal-Bench-Science 0.1。推理和知识都在里面，所以不再单开一个「推理榜」。

| 名次 | 模型 | 指数 | 单次花费 |
|---|---|---|---|
| 1 | Claude Fable 5.2 (Max) | 65 | 26.54 美元 |
| 2 | GPT-6.2 Astra (Max) | 62 | 4.00 美元 |
| 3 | Gemini 4 Carbon (High) | 60 | 7.76 美元 |
| 4 | Claude Opus 5.5 (Max) | 59 | 10.04 美元 |

页面 FAQ 另写：Fable 5.2 的 xhigh 也是 62，和 Astra 的最高档并列。默认表把 Fable 收成一行，上表跟着默认表。

事实题的净分是另一列。AA-Omniscience 净分从 −100 到 100，答对加分，乱猜扣分，拒答不扣。

页面写 Fable 5.2 三档是 67、65、64。净分高和幻觉率低不是同一件事：幻觉率最低的三档是上面「不擅长」里的 Gemini 和 LFM3。

## 长文档

榜：[AA-LCR v1.1](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)。100 道开放题，文档 1 万到 10 万 token，要自己把散落的事实合起来。答对与否由另一个模型判断。

同一页有两句对不上的第一名。图旁的句子写：Kimi K3 (Max) 88.7%，Step 5 Preview 88.3%，Kimi K3.1 Pro 86.3%。

FAQ 写：Step 5 Preview 最高，88.3%。两句都在 2026-11-18 打开的这一页上。

上台不报第一名，只说最好的一档在八成多，Kimi 和阶跃星辰的 Step 5 都在这一档。

## SWE-bench 为什么没用来排名

[SWE-bench](https://www.swebench.com/) 的官网页面是脚本渲染，2026-11-18 的抓取没有带出分数。分数来自官方仓库里的 [leaderboards.json](https://raw.githubusercontent.com/SWE-bench/swe-bench.github.io/master/data/leaderboards.json)，同一天拉取。

Verified 有 180 行，最新日期是 2026-02-26。文件里没有 Fable、GPT-6、Gemini 4、Qwen4 这些名字。所以它回答不了「现在谁最强」。

同口径、都用 mini-SWE-agent 的最高三行，日期都是 2026-02-17：Claude 4.5 Opus 76.8%（effort 为 high，单次约 0.75 美元），Gemini 3 Flash 75.8%（high，约 0.36 美元），MiniMax M2.5 75.8%（high，约 0.07 美元）。全榜把不同脚手架放在一起时，最高是 79.2%，两行都是 Claude 4.5 Opus（2025-12-05 的 Sonar Foundation Agent，2025-12-15 的 live-SWE-agent），`checked` 都是 False。

不同脚手架的百分比不要和 mini-SWE-agent 的百分比排成一张名次。
