# 演讲 03 前后对比，以及 06 的体量分级

> HAN-1891。查阅日 2026-11-19。只交文档，不改页面。
> 「现在」一列沿用 `docs/research/talk-03-team.md`（HAN-1864），这里不重数。口径不同的不放进同一句比较。查到原文的才写数。

## 给改页面的人

能上台的「以前」只有两句，而且都不要和 Anthropic 的每天 3 万次放进同一个除法。

一句是人：代理写代码普及之前，LinearB 客户里前 10% 的团队，也只是每人每周合入超过 2 个 PR。OpenAI 那组实验是每人每天 3.5 个。两套都是 PR，但一个是 2022–2023 年客户遥测的分档，一个是他们自己五个月实验的吞吐，不要乘成「快了多少倍」。

另一句是工具：VS Code 的稳定版在 2022 年、2023 年、2025 年都是大约 31 天一版。IntelliJ IDEA 一年三个功能版。Claude Code 一公开版本记录就已经大约 1.5 天一版，不是从「一个月一版」变成「一天一版」。

Anthropic 那 10 倍，原文没有写成「AI 写了百分之几」或「人多了几倍」。七个人五个月迁完的，是全公司那个大仓库用的版本管理，不是某一个小项目。

06 的对照仍用 SQLite 的 17 万行代码。没有找到台下叫得出名字、公开行数又落在 15–25 万的产品。也没有现行标准规定多少行算小、中、大。

## 1. Anthropic 为什么涨 10 倍

出处：[Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control)，Nick G. 和 source control 团队，2026-10-13。合入数本身见 `talk-03-team.md` 第 1 节。30,000 / 2,500 = 12，和原文的「10 倍」对不齐，页面继续用他们的「10 倍」。

| | 以前 | 现在 | 来源 | 口径 | 可信度 |
|---|---|---|---|---|---|
| 涨 10 倍的原因 | 原文没写「AI 写了百分之几」，也没写这五个月公司多了多少人 | 写代码不再是瓶颈；瓶颈一拆掉，合入就上去。同期内部模型 Claude Mythos Preview 和 Claude Tag 既加大了合入需求，也加快了他们做这套系统 | 同上，开头两段和 “What we learned” 第一段 | code changes merged，合进 monorepo 的改动，不是 GitHub PR | 一手博文。原因是定性的，没有拆成百分比 |
| 七个人迁的是什么 | 原文用过去式对比：以前做这样一套版本管理，「would have taken a company years of iterative migration, with many more engineers」。没有给出以前几个人、几年 | 七个人五个月做完 Scion 和 Antique，还做了另外半打相关系统，并把 monorepo 从 Git 迁过去。同期每天合入量涨了 10 倍 | 同上 | 这 7 人是做版本管理和评审的小组，不是全公司工程人数。产出没有写成 PR 数 | 一手。年限和人数的「以前」没有数字 |

大白话：七个人用五个月，把全公司每天合代码用的那个大仓库，从 Git 换成自己做的版本管理，代码评审和搜索一起换了。

原文把原因写成这样，没有更细的数：

- 「coding is no longer the bottleneck」。Claude 能自己改研究循环、做优化、从零做新服务。瓶颈变成按人的规模设计的版本管理、构建和 CI。
- 「Claude’s ability to write code was both what put us in this situation in the first place and how we were able to quickly build」这套系统。
- 「every bottleneck we remove immediately leads to a further increase in the amount of code we produce。」潜在的合入需求「practically infinite」。
- 做 Scion 的时间和内部模型 Claude Mythos Preview、Claude Tag 放出来的时间重合。这两个模型「simultaneously amplified the need for Scion and meaningfully accelerated how quickly we could build it」。

Boris Cherny 在 2026-02-19 说工程团队大约是原来的 4 倍、人均 PR 增加 200%。那是另一场访谈、更早的一段时间，口径是 PR，不是这篇的 code changes merged。5 月到 9 月这次上涨发生在那次访谈之后。不能拿那两句来拆这 10 倍。转写和出处在 `talk-03-team.md`。

## 2. 团队规模：同等功能以前要几个人

OpenAI 的「现在」：[Harness engineering](https://openai.com/index/harness-engineering/)，Ryan Lopopolo，2026-02-11。第一次提交在 2025 年 8 月下旬，到写文章大约五个月。开始 3 名工程师，写文章时 7 名。大约 1,500 个 PR 开出并合入。代码到一百万行这一量级，含应用、基础设施、工具、文档和内部工具。平均每名工程师每天 3.5 个 PR，团队变大之后吞吐还在涨。人没有直接交过一行。

同一篇还有两句不要并成一句。「We had weeks to ship what ended up being a million lines of code」是他们给自己的约束。量到的跨度是五个月。估计「about 1/10th the time it would have taken to write the code by hand」是他们的判断，不是另一组人手写同一个产品的对照实验。

没有找到「同一个产品、传统团队要几个人、多久」的公开对照。DORA 和 LinearB 量的是交付速度和 PR 频率，不是「这一百万行等于多少人年」。Brooks 和 COCOMO 的行数换算已经在 `talk-03-team.md` 第 4、6 节，口径含计划、联调和系统测试，这里不重算，也不上页。

| | 以前 | 现在 | 来源 | 口径 | 可信度 |
|---|---|---|---|---|---|
| 同等功能的人手和时间 | 没有公开的对照实验。OpenAI 估计大约是手写时间的 1/10 | 3 人起、写文章时 7 人；约五个月；约 1,500 个 PR；约一百万行 | OpenAI 2026-02-11 | PR 是 opened and merged。行数含测试、文档、工具。1/10 是估计 | 人手和 PR 是一手。1/10 不是量过的对照 |

## 3. 一个人多久合一个 PR，交付要多久

DORA 不统计每人每天几个 PR。GitHub Octoverse 2025 写的是全站一个月大约合入 4,320 万个 PR（[Octoverse](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)，窗口 2024-09-01 至 2025-08-31），没有「每个开发者」的数。不要用注册人数去除。

每人每周几个 PR，用的是 LinearB 的客户遥测，不是随机抽样。

[2023 Software Engineering Benchmarks](https://assets.linearb.io/image/upload/v1695652563/resources/LinearB-Enineering-Benchmarks-Report-v2_uwa6np.pdf)。窗口 2022-08-01 至 2023-08-01。2,000 多家组织、3,694,690 个 PR、103,807 名活跃贡献者，组织至少 400 个分支。数据匿名后按 P75 汇总。分档是他们社区的前 10%（Elite）、前 30%（Good）、前 60%（Fair）、后 40%（Needs Focus），不是全体工程师的平均数。

Merge frequency 的定义：一名开发者一周合入的 pull request 或 merge request 个数。（PDF 里 “merged” 印重了一次。）

| 档 | 每人每周合入 | 从写代码到生产的周期 |
|---|---|---|
| 前 10% | > 2 | < 19 小时 |
| 前 30% | 2 – 1.5 | 19 – 66 小时 |
| 前 60% | 1.5 – 1 | 66 – 218 小时 |
| 后 40% | < 1 | > 218 小时 |

员工超过 1,000 人的公司，前 10% 是每人每周超过 1.5 个，周期不到 29 小时。同一份报告。

这个窗口里 GitHub Copilot 已经正式发售（2022 年 6 月），所以不是「完全没有代码补全」。它早于 Claude Code（2025-02-24 宣布）这一类代理。叫它「代理写代码普及之前」的公开遥测。

交付周期的另一套是问卷，不是遥测。[DORA 2023](https://dora.dev/research/2023/dora-report/2023-dora-accelerate-state-of-devops-report.pdf)，v. 2023-12。这一年将近 3,000 名在职人士填写；「超过 36,000 人」是这个项目多年累计，不是这一年的样本。问的是「你主要做的那个应用」：代码提交之后，多久在生产跑起来。

| 档 | 占回答 | 部署频率 | 变更前置时间 | 变更失败率 | 失败后恢复 |
|---|---|---|---|---|---|
| Elite | 18% | 按需，一天多次 | 不到一天 | 5% | 不到一小时 |
| High | 31% | 一天一次到一周一次 | 一天到一周 | 10% | 不到一天 |
| Medium | 33% | 一周一次到一月一次 | 一周到一个月 | 15% | 一天到一周 |
| Low | 17% | 一周一次到一月一次 | 一周到一个月 | 64% | 一个月到六个月 |

低档和中档的部署频率、前置时间，报告印出来是同一档。分开的是失败率和恢复时间。按原文写，不改。

| | 以前 | 现在 | 来源 | 口径 | 可信度 |
|---|---|---|---|---|---|
| 一个人合入 | 前 10% 的团队每人每周超过 2 个；后 40% 不到 1 个。前 10% 从写代码到生产不到 19 小时 | OpenAI 实验：每人每天 3.5 个 PR。Boris 2026-02 每天 10–30 个，2026-05 通常几十个。见 `talk-03-team.md` | LinearB 2023；OpenAI 2026-02-11 | 左边是客户组织的 P75 分档，一名开发者一周合入的 PR。右边是实验组或个人发出的 PR | LinearB 是厂商遥测，不是普查。和右边差一个数量级，不要乘成倍数 |
| 交到生产要多久 | DORA 2023：最快那 18% 不到一天；31% 是一天到一周 | DORA 不统计 PR 个数。2024、2025 的报告已经在讨论 AI，不拿来当「以前」 | DORA 2023 | 问卷，提交到生产，按应用而不是按人 | 一手报告。低档和中档的速度印成同一档 |

LinearB 2025 年那份报告把前 10% 写成每人每周超过 2.25 个，但没写统计起止日。不拿来当「现在」。

## 4. 工具多久更新一次

「现在」的 1.2–7.9 天是 `talk-03-team.md` 第 3 节：2026-08-18 至 2026-11-18，Claude Code 版本号相邻平均 1.2 天，Cursor 产品公告相邻平均 7.9 天。版本号和产品公告不是同一种计数，那里已经写了不要比「谁更勤」。

这次补「以前」，并且核对 Claude Code、Cursor 刚公开时的密度。相邻平均都用：最后一天减第一天，除以条数减 1。

### IDE

| | 以前 | 现在 | 来源 | 口径 | 可信度 |
|---|---|---|---|---|---|
| VS Code | 2022 年 11 个稳定版，1.64.0（2022-02-03）到 1.74.0（2022-12-07），跨 307 天，相邻平均 30.7 天。2023 年 1.75.0（02-02）到 1.85.0（12-07），11 个，跨 308 天，平均 30.8 天 | 2025 年仍是月更：1.100.0 在 2025-05-08，1.107.0 在 2025-12-10。查阅日最新稳定版 1.147.0，发布日 2026-11-18 | GitHub `microsoft/vscode` 的 Release，`published_at` 的日期 | 只算 `1.x.0`，不算后面的补丁号 | 一手。日期是 GitHub 的 UTC 日期 |
| IntelliJ IDEA | 一年三个功能版。2022.1 / 2022.2 / 2022.3 的发布日是 2022-04-12、07-26、11-30，间隔 105 天和 127 天。2023 年是 03-28、07-26、12-06，间隔 120 天和 133 天。2024 年同样是三个（04-04、08-07、11-13） | 同一份更新清单仍是一年三个功能版，没有变成几天一版 | [JetBrains updates.xml](https://www.jetbrains.com/updates/updates.xml)，产品 IntelliJ IDEA，渠道 IU-RELEASE，字段 `releaseDate` | 功能版 `2022.1` 这种两段版本号。补丁号在这份清单里有的和功能版写了同一天，不用它算「几天一补丁」 | 一手更新清单 |

### Claude Code 和 Cursor 早期

Claude Code 的研究预览是 2025-02-24 宣布的（[Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet)）。公开 changelog 上最早的日期是 2025-04-02，这一天列了 17 个版本（0.2.21 到 0.2.61）。把这一天当成记录开始，不当成一天发了 17 版。

从下一条 2025-04-17 的 0.2.63 到 2025-07-11 的 1.0.51，90 天窗口里 56 个版本、落在 28 天，跨 85 天，相邻平均 1.55 天。有发布的那些天，相邻间隔中位 3 天，最长 6 天。正式版 1.0.0 是 2025-05-22。

同一页在 2026-11-19 仍能对上 HAN-1864 的近期窗口：2.1.235（2026-08-18）到 2.1.327（2026-11-17），77 个版本，跨 91 天，相邻平均 1.20 天。有发布的那些天，间隔中位 1 天。查阅时页面上还有 2026-11-19 的 2.1.328，没有算进这个窗口。

所以 Claude Code 不是「以前一个月一版、现在一天一版」。公开记录从一开始就是一两天一个版本。变密的是有发布的日子：中位间隔从 3 天收到 1 天。

Cursor 的 changelog 从 2023-03-14 的 `v0.0.37` 记起，查阅日翻到第 52 页为止，更早的一页是 404。早期一条是一个小版本，现在一条是一批功能，两种都在 [cursor.com/changelog](https://cursor.com/changelog)。日期用页面 `dateTime` 的 UTC 日期。

| 窗口 | 条数 | 起止 | 相邻平均 | 有发布的日子，间隔中位 |
|---|---|---|---|---|
| 公开后前 92 天 | 32 条，28 天 | 2023-03-14 至 2023-06-14 | 3.0 天（92 / 31） | 2 天，最长 12 天 |
| 整个 2023 年（从 3 月 14 日起） | 148 条，106 天 | 至 2023-12-31，跨 292 天 | 2.0 天 | 2 天，最长 15 天 |
| 2024 年 | 28 条，26 天 | 2024-01-03 至 12-17，跨 349 天 | 12.9 天 | 10 天，最长 46 天 |
| HAN-1864 的近期窗口 | 11 条 | 2026-08-19 至 2026-11-06，跨 79 天 | 7.9 天（79 / 10） | 8 天 |

近期这 11 条和 HAN-1864 对得上。Cursor 早期更密，是因为当时 changelog 在记小版本。不要写成「Cursor 以前更新得更慢」。

| | 以前 | 现在 | 来源 | 口径 | 可信度 |
|---|---|---|---|---|---|
| 开发工具 | VS Code 大约 31 天一个稳定版；IDEA 一年三个功能版 | Claude Code 1.2 天一个版本号；Cursor 7.9 天一条产品公告。见 HAN-1864 | 上表 | 稳定版、功能版、版本号、产品公告，四套，不合成一个「以前 vs 现在」 | 都是官方页面或官方更新清单 |

## 5. 模型能力：同一套题上的几个时点

用 SWE-bench Verified。题是 500 道经过人核对的真实 GitHub 问题，从 2024-08-13 这套题公布之后没有换成另一套。百分比仍不能当成同一把尺子：脚手架、是不是只跑一次、分母是 500 还是 489，表里分开写。

高算力那一档（多次采样，再丢掉弄坏可见测试的补丁，用打分模型选一条）不放进这张表。Claude 4 那篇写 Opus 4 是 79.4%、Sonnet 4 是 80.2%，那是这一档，不和下面的 72.5%、72.7% 连成「模型又涨了一截」。

| 日期 | 分数 | 谁 | 怎么跑的 |
|---|---|---|---|
| 2024-08-13 | GPT-4o 33.2% | [OpenAI，公布 Verified](https://openai.com/index/introducing-swe-bench-verified/) | 他们试过的开源脚手架里最好的一个，单次。原文写结果可能和官方榜不一致 |
| 2024-10-22 | 新的 Claude 3.5 Sonnet 49.0%。同一张表里，旧的 3.5 Sonnet 33.4%，Claude 3 Opus 22.2% | [Anthropic 新闻](https://www.anthropic.com/news/3-5-models-and-computer-use) 和[模型卡附录](https://assets.claude.com/c7822cdc35ad788ec87e14b3a9d45010f1f86c38.pdf) | 他们自己的代理，pass@1。模型卡注：当天榜上的最高是 45.2% |
| 2025-02-24 | Claude 3.7 Sonnet 63.7% | [Anthropic](https://www.anthropic.com/news/claude-3-7-sonnet) | 分母是他们机器上能跑的 489 题，不是 500。另外 11 题黄金补丁都过不了。不和上表其余行画成一条折线 |
| 2025-05-22 | Claude Sonnet 4 72.7%；Claude Opus 4 72.5% | [Introducing Claude 4](https://www.anthropic.com/news/claude-4) | 500 题全部计入。没有开扩展思考。工具只剩 bash 和改文件，拿掉了 3.7 用过的规划工具 |
| 2025-11-24 | Claude Opus 4.5 80.9%（不开思考）。同一张表里 Sonnet 4.5 是 77.2% | [新闻](https://www.anthropic.com/news/claude-opus-4-5) 的 `datePublished`；数字在[系统卡](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47/Claude%20Opus%204.5%20System%20Card.pdf) 表 2.3.A、表 2.4.A | 五次平均。系统卡写 SWE-bench Verified 不开扩展思考 |

旧的 SWE-bench 全量题不是这 500 题。OpenAI 2024-08-13 写，截至 2024-08-05，旧榜最高大约 20%，Lite 大约 43%。不要和 Verified 的百分比画在一起。

Terminal-Bench 换过题。Claude 4 那篇写 Opus 4 在 Terminal-bench 上 43.2%，没写版本号。`talk-03-models.md` 里 2026-11 打开的有数字的表是 4.0，第一行 71.2%。两套题，不连成「从 43% 涨到 71%」。模型这一半上台只用上面这张 Verified 表，并口头说一句：脚手架不完全一样，看的是量级，从三成出头到八成左右。

## 6. 体量对照：仍用 SQLite

洛山达手写代码 190,513 非空行（小程序 144,433，云函数 46,080），含注释、不含空行，不含生成的规则数据包。数法和提交在 `talk-06-case.md`。

要找的是台下叫得出名字、代码量公开、落在 15–25 万行的产品。没有找到。对照继续用 SQLite。

SQLite 的数是 Richard Hipp 2026-07-16 的幻灯片 [Should Just Work](https://sqlite.org/talks/shouldwork-20260716.pdf)：交付物 `sqlite3.c` 一共 26.9 万行，其中代码 17 万行，由 100 多个小文件拼成，有一部分是机器生成的。和洛山达的非空行不完全同口径，都在二十万行上下。页上仍可以说「和一个放进每部手机里的数据库差不多大」。

看过、不换上去的：

| 产品 | 行数 | 为什么不用 |
|---|---|---|
| Visual Studio Code | 产品代码 2,826,913 非空行 | 已在 `talk-06-case.md` 数过（2026-11-18）。大约是洛山达的十五倍，超出 15–25 万 |
| WordPress 6.7.2 | 一篇 2025 年 4 月的博客用 cloc 数出代码 913,121 行，其中 PHP 312,328、JavaScript 447,064 | [第三方博客](https://metadataconsulting.blogspot.com/2025/04/Count-the-number-of-lines-of-code-on-Windows-with-Wordpress-and-WooCommerce-examples.html)，我没有重数。超出区间，而且含大量前端和第三方脚本 |
| Redis | OctoCounts 在 2026-11-17 数出代码 322,023 行（去掉测试、文档和生成文件） | 第三方计数，超出 25 万。台下也不一定叫得出 Redis |
| nginx | 一份 2026-04-30 的第三方清单写 C 源码 230,142 行 | 落在区间里，但不是 nginx 官方公布的数字。台下叫不出这个名字，不替换「每部手机里的数据库」 |

微信、钉钉、飞书、WPS、Word、Excel 没有公开的、落在这个区间的源码行数。

## 7. 规模分级：没有通行的行数标准

没有找到现行的、通行的标准，规定多少行算小型、中型、大型软件。页上不写「19 万行算中型」或「算大型」。

国标量的是功能点，不是行数。GB/T 36964-2018《软件工程 软件开发成本度量规范》的规模估算采用功能点。GB/T 42452-2023 是 COSMIC，GB/T 42588-2023 是 NESMA，都是功能规模测量。

中国资产评估协会《资产评估专家指引第 16 号——计算机软件著作权资产评估》（中评协〔2023〕23 号，2023-12-11）第五条写：按开发人数、期限和源程序行数，「通常」分成微型、小型、中型、大型、超大型。正文没有给出每一等对应多少行。附件介绍的 COCOMO II 把规模当成连续的千行数，也不分级。指引自己写明是专家建议，不是强制标准。

教材和软考辅导里有一张旧表，例如东南大学课件、希赛网：小型大约 1 千到 2 千行，中型 5 千到 5 万行，大型 5 万到 10 万行。这不是标准。表在 2 千到 5 千、10 万到 100 万之间是空的。按这张表，19 万行已经超出「大型」。不上页。

Boehm 1981 年的 Basic COCOMO 用三种开发模式估工作量，不是小、中、大软件的定义。NASA 旧页面转述：有机模式很少超过 5 万条交付指令，半分离模式一般到 30 万条；模式还看团队熟不熟、约束紧不紧。该页标明这个模型只供演示，实际估算改用 COCOMO II。COCOMO II 拿掉了这三档。不把「5 万行以下算小」写成标准。
