# 演讲 03：一个人 + Agentic Engineering，产量怎么对照

> HAN-1864。2026-11-18 查阅。只交文档，不改页面。
> 查到原文的才写。转写、转载标「二手」，并写一句可信度。行数和 PR 数各写口径，不同口径不放进同一个比较。

## 给改页面的人

能上台的前后对照只有一句：Anthropic 同一个 monorepo，2026 年 5 月每天大约合入 2,500 次代码改动，9 月超过 30,000 次。原文自己还写了这五个月里量增加了 10 倍。这是合入的改动，不是 GitHub PR，文中没有配上当时的人数。

其余候选都不是「同一个产品、以前多少人、现在多少 PR」。OpenAI 是从空仓库做起的新实验。Boris Cherny 报的是他个人一天的 PR。Lauren Tan 报的是她个人一个月合进生产的 PR，而且她说里面大量是整理代码，不是 2,500 个功能。Cursor 的一百万行是研究项目里的提交，不是生产 PR。

传统的「一个人一年几千行」和这些行数不是同一把尺子。第 12 版指导文档里的「系统搭好之后，产出只看烧多少算力」，这次没有一手材料。Cursor 有一句 worker 能线性提高吞吐，同一篇马上写了锁、最慢的那个 worker、磁盘把吞吐卡住。

车主自己的数已经在站上，这次没有重数。`src/i18n/zh.ts` 写「5 个月合入 1,633 个 PR」，来源句是「小程序仓库 dev 分支合并记录，6 月 17 日到 11 月 6 日」。`docs/worklog.md` 的口径是：dev 的 first-parent，剔除 github-actions 发版公告，截至 2026-11-06 合入 1,633，近 30 天 795 个、日均 26。这是 Git 合并记录，不要和 Anthropic 的「code changes merged」或 Lauren 的「生产 PR」放进同一句话。

## 1. 以前和现在

### Anthropic 的 monorepo（唯一一条同口径前后）

[Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control)，Nick G. 和 source control 团队，2026-10-13。

原话：「In May 2026, Anthropic averaged around 2,500 code changes merged per day; as of September, we merged over 30,000 per day.」图注是每天合进 monorepo 的改动，时间从 2026 年 1 月画到 9 月。正文没有写出 1 月的数，不从图上估。

另一句：「We did all this while the volume of code merged per day increased by 10x.」30,000 / 2,500 = 12，和这句「10 倍」对不齐。页面用他们的原话，不要改成精确的 12 倍。10 倍可能是约数，也可能起算点不是 5 月。

口径：code changes merged，合进 monorepo 的改动。不是「一个 GitHub PR」。文中没有说这些改动里有多少是人审过才合的。后文写团队成员仍会看每一条改这个系统的请求，但看的是意图，不是逐行。

人数：做 Scion 和代码评审工具 Antique 的是 7 个人，五个月里迁完，还做了另外半打相关系统。原话：「A team of seven people built both Scion and Antique … and fully migrated to them in five months.」这 7 人不是全公司的工程人数。公司合入量在这期间涨了 10 倍，文中用过去式对比：「In the past, developing and deploying a source control system like this would have taken a company years of iterative migration, with many more engineers.」没有给出「以前多少人、多少年」的数。

这 7 个人的产出没有写成 PR 数。文中有一张 Scion 和 Antique 每周合入改动的图，正文没有读数。

### 不是同一条前后对照的数

下面每条单独成立。不要和每天 3 万次乘在一起，也不要互相换算成人头。

| 谁 | 时间 | 人数 | 产出 | 口径 | 出处 |
|---|---|---|---|---|---|
| Anthropic 工程部，引入 Claude Code 之后的一年 | 访谈日 2026-02-19 往前约一年 | 他口头说工程团队大概是原来的 4 倍，并说不知道精确数字 | 人均 PR 增加了 200% | 人均 pull requests。他说的是增加 200%，英语里通常是变成原来的 3 倍。人数和他的人均不要乘成公司总 PR | Boris Cherny，Lenny's Podcast，[YouTube](https://www.youtube.com/watch?v=We7BZVKbCVw)。转写见下 |
| Boris 本人 | 同上，2026-02-19 | 1 人；当时开着 5 个 agent | 每天 10 到 30 个 PR | 他个人发出的 PR。100% 由 Claude Code 写，2025 年 11 月起他不再手改一行。他会看代码 | 同上 |
| Boris 本人 | Sequoia 这场发布于 2026-05-05；「上周有一天」约在 2026 年 4 月底 | 1 人；当时大约几百个 agent 在跑，夜里大约几千个做更深的活 | 通常一天几十个 PR；有一天 150 个，他说是在试上限 | 仍是他个人的 PR，不是公司每天合入的改动 | [YouTube](https://www.youtube.com/watch?v=SlGRN8jh2RI)，Sequoia《Training Data》。转写见下 |
| OpenAI 一个内部产品 | 第一次提交在 2025 年 8 月下旬；文章 2026-02-11，跨度约五个月 | 开始 3 名工程师，写文章时 7 名 | 大约 1,500 个 PR 开出并合入；代码量到一百万行这一量级；平均每名工程师每天 3.5 个 PR，团队变大之后吞吐还在涨 | PR 是 opened and merged。行数含应用、基础设施、工具、文档和内部工具。人没有直接交过一行。他们估计是手写时间的约 1/10，这是估计，不是量过的对照实验 | Ryan Lopopolo，[Harness engineering](https://openai.com/index/harness-engineering/)，2026-02-11 |
| Cursor 研究项目（浏览器） | 博文 2026-01-14：接近一周 | 博文写几百个 worker 同时跑；没有写人类人数 | 超过 100 万行，大约 1,000 个文件 | 研究仓库里的代码行和文件，不是生产 PR。另一项仍在跑的实验另计提交数，见第 2 节，不要加进这一百万行 | Wilson Lin，[Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents)，2026-01-14 |
| Lauren Tan（poteto） | 帖子 2026-09-21 15:01 UTC（太平洋时间上午 8:01），说的是「上个月」，即大约 2026 年 8 月 | 她个人。访谈里说自己不坐在那里开 2,500 个对话，由协调 agent 分给子 agent | 2,500 个 PR 合进生产 | 她说的是生产 PR。2026-10-02 的访谈里她补充：不是 2,500 个功能，大量是 gardening（整理、维护、改环境）。没有独立审计 | 原帖 [status/2102050467505430555](https://x.com/poteto/status/2102050467505430555)。补充口径见访谈 |

Boris 两场都是口述，我读的是转写，不是现场。

Lenny 这场的转写（[ulisten](https://ulisten.ai/channels/lennys-podcast/head-of-claude-code-what-happens-after-coding-is-solved-bori_We7BZVKbCVw/transcript)、[prepublish](https://prepublish.ai/youtube-transcript/We7BZVKbCVw)）对得上同一句：「we've probably, I don't know the exact number, we're probably like four X the engineering team」「productivity per engineer has increased two hundred percent in terms of, like, pull requests」「every day I ship, like, ten, twenty, thirty pull requests」。发布日两份转写都写 2026-02-19。可信度：两份转写一致，但是转写，不是 Anthropic 的书面报告。4 倍是他当场说的约数。

Sequoia 这场的转写（[podscan，标发布于 2026-05-05](https://podscan.fm/podcasts/training-data/episodes/anthropics-boris-cherny-codings-printing-press-moment)、[rosetta](https://rosetta.to/u/sequoiacapital/anthropics-boris-cherny-why-coding-is-solved-and-what-comes-next)）对得上：「usually a few dozen PRs every day」「a day last week I did like 150 PRs」「probably like a few hundred agents going」「every night I have like a few thousand」。可信度同上，多一份转写仍是转写。150 是他个人单日记录，不是日均。

Lauren 的「不是 2,500 个功能」来自 Matt Pocock 访谈的转写，视频 [MN9dGgmLyso](https://www.youtube.com/watch?v=MN9dGgmLyso)。她 2026-10-02 21:28 UTC 的帖说当天和 Matt 聊过这个数（[status/2106134336705843554](https://x.com/poteto/status/2106134336705843554)）。原话大意：2,500 个 PR 显然不是 2,500 个功能，很多时间花在 gardening。她也说别人会问她怎么评审，她的做法是让 agent 能自己合入。可信度：原帖是一手，我打开的是帖子正文，没有看完附带的演讲视频；「gardening」这句来自访谈转写。

### 这次没找到的

xAI / Grok 模型团队：没有找到官方的人数和 PR 数。公开仓库 [xai-org/grok-build](https://github.com/xai-org/grok-build) 写明是从内部 monorepo 定期同步，提交作者是 bot，不能当成团队的 PR 产量。

Lauren 现在做的是 Grok Bot（她在访谈里说 2026 年 3 月加入 Cursor，Cursor 现为 SpaceX AI，之后做到 grokbot）。她的 2,500 是她个人的生产 PR，不是 Grok 模型组的合计。有博客把她写成「20 多个 agent、一个月 1,000 多个 PR」，和她自己的帖子冲突，那些博客不用。

Claude Code 团队的合计 PR：Boris 说最早的实验室是几个人，后来解散又重组。没有找到团队总人数或团队总 PR 的书面数字。能用的是他个人的数，和公司 monorepo 的合入数，两套口径。

## 2. 同时跑很多 agent

一手、并且写明是同时在跑的：

| 来源 | 日期 | 同时多少 | 产出 | 口径 |
|---|---|---|---|---|
| Cursor，Wilson Lin，[Scaling agents](https://cursor.com/blog/scaling-agents) | 2026-01-14 | 几百个 worker 同时跑，推到同一条分支 | 接近一周，超过 100 万行、约 1,000 个文件 | 研究项目。博文写简单网页能渲染，离 WebKit / Chromium 很远 |
| Cursor，Wilson Lin，[Towards self-driving codebases](https://cursor.com/blog/self-driving-codebases) | 2026-02-05 | 引言写系统编排 thousands of agents；大多数运行的高峰是几百个 agent，一台大机器扛一次运行。有一版设计里几百个 worker 对着一道合并关口 | 稳定跑的那一周，高峰大约每小时 1,000 次提交、1,000 万次工具调用，启动后不用人插手 | 提交不是 PR。他们故意不要求每次提交都完全正确，否则吞吐会串行掉 |
| Boris，Sequoia 访谈 | 2026-05-05 这场 | 白天大约几百个，夜里大约几千个 | 见上表，是他的 PR，不是这几千个 agent 各交一个 PR | 口述转写 |
| Anthropic，Nicholas Carlini，[Building a C compiler](https://www.anthropic.com/research/building-c-compiler) | 2026-02-05 | 16 个 agent，不是几百个 | 将近 2,000 次 Claude Code 会话，API 费用 2 万美元，写出约 10 万行、能编译 Linux 6.9 的 C 编译器 | 并行有上限：编译内核是一整块任务时，16 个 agent 会修同一个 bug 并互相覆盖。拆开文件之后才又能并行 |

同一篇 Cursor 博文里还有几项仍在跑的实验，口径是提交数和代码行，不是一周的产量，也不要和浏览器的 100 万行加总：Java LSP，7,400 次提交、55 万行；Windows 7 模拟器，1.46 万次提交、120 万行；Excel，1.2 万次提交、160 万行。另有一次 Solid 迁到 React，三周多，+266K / −193K，博文写还要人仔细看，当时能过 CI。

Simon Willison 2026-01-23 的文章转述 Wilson Lin 的视频：稳定的那一周峰值大约 2,000 个 agent 同时跑。我没有看视频。官方博文写的是「大多数运行高峰几百个」和「thousands」。页面用博文，不用这条转述。

20 个 agent 加锁，Cursor 写过会慢成 1 到 3 个的吞吐，大部分时间在等锁。所以「同时几百个」依赖任务拆得开，不是加上去就线性变多。见第 5 节。

## 3. 工具多久更新一次

窗口：2026-08-18 到 2026-11-18，含两端，共 93 天。查阅日是 2026-11-18。

「平均几天一次」用相邻两条的间隔：最后一条日期减第一条日期，除以条数减 1。版本号和产品公告是两种口径，不合成一个平均数。

| 工具 | 数的是什么 | 窗口内条数 | 第一条到最后一条 | 相邻平均间隔 | 备注 |
|---|---|---|---|---|---|
| Claude Code | [官方 changelog](https://code.claude.com/docs/en/changelog) 里的版本号，同一天两个版本各算一条 | 77 个版本，落在 63 天 | 2026-08-18 的 2.1.235 到 2026-11-17 的 2.1.327，跨 91 天 | 1.2 天（91 / 76） | 有发布的那些天，相邻间隔中位 1 天，最长 5 天。查阅时页面上还没有 11 月 18 日 |
| Codex CLI | [ChatGPT 与 Codex changelog](https://learn.chatgpt.com/docs/changelog) 里标题为 Codex CLI 的版本 | 41 个版本，落在 34 天 | 2026-08-18 的 0.148.0 到 2026-11-18 的 0.170.0，跨 92 天 | 2.3 天（92 / 40） | 有发布的那些天，相邻间隔平均 2.8 天，中位 2 天，最长 8 天 |
| Codex 应用 | 同一页标题为 Codex app 的版本公告 | 21 条 | 2026-08-19 到 2026-11-12，跨 85 天 | 4.3 天（85 / 20） | 模型上下架另有十几条，不算进工具版本 |
| Cursor | [cursor.com/changelog](https://cursor.com/changelog) 的产品公告，翻到第 3 页 | 11 条 | 2026-08-19 到 2026-11-06，跨 79 天 | 7.9 天（79 / 10） | 11 月 6 日之后到 18 日没有新公告。8 月 17 日那条在窗口外，没算 |
| Trae | [docs.trae.ai/ide/changelog](https://docs.trae.ai/ide/changelog) 的日期标题，同一天只算一条 | 13 条 | 2026-08-20 到 2026-10-31，跨 72 天 | 6.0 天（72 / 12） | 间隔中位 4 天，最长 19 天（9 月 1 日到 9 月 20 日）。11 月 1 日到 18 日这一页没有新条目。有的标题把两个小版本写在同一天 |

Cursor 的间隔：8、6、8、13、13、7、3、4、16、1 天。中位是 7.5 天。公告标题依次是：Cloud Agents and Cursor Harness Improvements（8 月 19 日）、Start from scratch（8 月 27 日）、Self-hosted machines（9 月 2 日）、Cursor Projects（9 月 10 日）、Rollouts and Security Review（9 月 23 日）、Remote control for local agents（10 月 6 日）、Origin App Marketplace（10 月 13 日）、Cloud Agent Canvases（10 月 16 日）、Agent SDK（10 月 20 日）、Build Live Apps（11 月 5 日）、Voice Chat（11 月 6 日）。

不要把 Claude Code 的 1.2 天和 Cursor 的 7.9 天说成「一家更新得更勤」。前者每个小版本都上 changelog，后者一条公告是一批功能。

## 4. 传统工作量

要的是「这些量以前要多少人」。一手材料给的是行，而且含计划、测试和返工，不是 agent 仓库里 `wc -l` 的行。

### Brooks，1975

《人月神话》第 93 页，经 [Stack Exchange 上的摘录](https://skeptics.stackexchange.com/questions/17224/do-professional-software-developers-write-an-average-of-10-lines-of-code-per-day) 核对，我没有打开纸书。摘录标明是 1975 年版。

原话：控制程序组是一年每人 600 到 800 条调试过的指令；OS/360 的语言翻译组是一年每人 2,000 到 3,000 条。含计划、编码、部件测试、系统测试和一部分支持。

第 94 页的意思是：按基本语句计，生产率看起来不随语言变高。所以行数不能当成做成的功能。

「一天 10 行」不是这两页的原话。2,000 条再除以大约 250 个工作日，才接近一天 8 到 10 条。250 天是后人的除法，书里没有。

### McConnell 转述的 COCOMO II

Steve McConnell，《Code Complete》第 2 版，表 27-2。我读的是 [flylib 上这一节](https://flylib.com/books/en/2.823.1.231/1/)。该站把自己标成 2003 年、334 页，和 2004 年第二版的篇幅对不上，但表里的 COCOMO 名义值和 Coding Horror、上面那条 Stack Exchange 摘的是同一列。可信度：表是通行的那张，我没对过纸书。括号里的名义值，McConnell 注明来自 Boehm 等人 2000 年的 COCOMO II，我没有打开 Boehm 的书。

每人每年的代码行，括号外是各来源的范围，括号内是 COCOMO II 名义值：

| 项目规模 | 每人每年行数的范围 | COCOMO II 名义值 |
|---|---|---|
| 1 千行 | 2,500–25,000 | 4,000 |
| 1 万行 | 2,000–25,000 | 3,200 |
| 10 万行 | 1,000–20,000 | 2,600 |
| 100 万行 | 700–10,000 | 2,000 |
| 1,000 万行 | 300–5,000 | 1,600 |

McConnell 写明这些数随软件种类、人员、语言、怎么数行、支援人员算不算进分母而差很多。小项目可以是大项目的 2 到 3 倍，最小到最大可以差 5 到 10 倍。

同一页他还引 Boehm、Gray、Seewaldt 1984：2 人小组比 3 人小组生产率高 39%。这是「加人会变慢」的量级，不是 agent 的量级。

### 行数会骗人的一条旁证

Stack Exchange 上的回答摘了 Capers Jones、Olivier Bonsignour《The Economics of Software Quality》（2011）里大约 1,500 个功能点的程控交换机：汇编大约每人每月 480 行，Smalltalk 大约 162 行，功能点生产率反而从 1.92 升到 7.71。我没有打开这本书。可信度：答主给了 Kindle 位置，方向和 Brooks「高级语言行数不会变多、做成的事会变多」一致，数字本身是二手。

所以：语言越高，同样的功能行数越少。agent 多写出来的行，不能直接换成「以前要更多人」。

## 5. 算力换产出

没有找到一手材料写：「系统搭好之后，产出随算力线性增长。」

最近的一句在 Cursor 2026-02-05 那篇。中间一版设计里，executor 派 worker，「which provided linear scaling and throughput」。下一节就写这版被最慢的 worker 卡住，计划不能中途改。再后面：要求每次提交都正确，会把系统拖成串行；几百个 agent 同时编译，磁盘成为热点，吞吐掉下来；Git 和 Cargo 的共享锁是为单用户设计的。20 个 agent 加锁时，吞吐掉到 1 到 3 个。

Anthropic 2026-10-13 写的是另一件事：瓶颈一拆掉，合入量就上去，潜在需求几乎无限。他们没有说这和算力成正比。原文还写，他们内部能花的 token 远超过别的公司愿意花的。

Anthropic 2026-02-05 的 16 个 agent 写编译器：任务拆不开时，加人没有用。

OpenAI 2026-02-11 把稀缺资源写成人类的时间和注意力，不是算力。3 个人变成 7 个人之后吞吐还在涨，这是加人，不是加机器。

Boris 在 2026-02-19 的访谈里说 Anthropic 按指数想（模型能写的代码比例），不是按算力线性想。这句是转写。

## 6. 硬除一遍（不要上页）

只用 COCOMO II 在「100 万行」那一档的名义值，每人每年 2,000 行。

OpenAI 那「一百万行这一量级」除以 2,000，得到大约 500 人年。他们自己的人时大约是 3 到 7 人、五个月。500 人年和这几个人年差两个数量级。差出来的主要是口径：COCOMO 的行含计划、联调、系统测试；OpenAI 的行含测试、文档、工具，而且是模型生成的，没有按「调试过的交付指令」筛过。他们自己的判断是手写时间的约 1/10，不是 500 人年。

Cursor 一周超过 100 万行，用同一档去除也是大约 500 人年，挤在一周里。博文同时写这是研究、代码不完美、离可用浏览器很远。这个除法说明尺子不能挪，不能说明以前要 500 人做一年。

Brooks 的 2,000 到 3,000 条调试过的指令每人每年，和 COCOMO 的 2,000 行名义值数量级相同，单位仍是指令或行，不是 PR。Anthropic 一天 3 万次合入没有传统的「每人每天几次合入」可以除。不要用网上常见的「一个人一天一个 PR」来除，那句话这次没有一手出处。
