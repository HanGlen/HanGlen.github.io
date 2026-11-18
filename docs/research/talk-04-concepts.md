# 演讲 04「Agentic Engineering 系统」：概念出处、验证金字塔

> HAN-1865。2026-11-18 定稿。只交这份文档，不改页面。页面改动在 HAN-1847。
> 打开过原文的才当一手。转述、幻灯片文字识别、没打开的帖，标「二手」。文章日期用页面自己标的。X 的时间是 UTC，下面改成太平洋时间。
> 工具、模型、地基三步这次不重查，分别见 `talk-03-tools.md`、`talk-03-models.md`、`talk-03-harness.md`。

## 1. 给改页面的人

**Agentic Engineering 的一句大白话：人少写代码，派 AI 去写、去跑、去改；人把「做成什么样」说清，并把检查留在仓库里。**

这个名字是 Andrej Karpathy 2026-02-04 说的，他当时的原话是自己「目前最喜欢的叫法」，用来和 vibe coding 分开。Simon Willison 2026-02-23 用它做了一份实践指南。它还在用，但不是唯一的通行叫法。旁边三个词各管一块，不要并成同一个意思：

| 词 | 管哪一块 | 页上怎么用 |
|---|---|---|
| vibe coding | 不看 diff、接受全部、代码可以看不懂 | 只作对照。它是另一头 |
| harness engineering | 模型犯错之后，把环境改到下次不会再犯 | 地基那步已经在用，见 `talk-03-harness.md` |
| context engineering | 这一轮让模型看见哪些 token | 不上 04。它是写提示和仓库地图时的手法 |
| agentic engineering | 上面整件事：派 agent、人负责质量和验收 | 04 的标题用这个 |

04 每一步可以挂的出处，和不要挂上去的：

| 步 | 可以写的一行 | 不要写 |
|---|---|---|
| 最小单 | Spec：先写清做成什么样，再写代码（GitHub，Den Delimarsky，2025-09-02） | 不要写成小程序在用 Spec Kit。大活才写 PRD，小修复在 PR 正文写 3 到 5 行 |
| 同一张单的评审 | 干活的和打分的分开（Anthropic，Prithvi Rajasekaran，2026-03-24） | 不要写成自动打分循环。小程序是另一个执行器评审，一个 PR 最多两轮 |
| 定时任务 | Ralph：每轮新开一次会话，进度留在文件和 git 里（Geoffrey Huntley，2025-07-14） | 不要写成仓库里有那个 `while` 死循环。触发的是各 agent 的定时任务 |
| 定时任务的并行上限 | 16 个 Claude 并行，是压力测试，外面套的循环作者自己说像 Ralph（Anthropic，2026-02-05） | 不要把 16 个容器讲成小程序的做法。小程序是多窗口各改各的分支 |
| AI 切片 | planner 拆任务，worker 只做分到的那一块（Cursor，Wilson Lin，2026-01-14） | 不要写成有递归的 sub-planner。小程序是 Claude 切片，Codex / Claude 按端领单。现稿讲者备注把「16 个 Claude」挂在这一步，出处更靠近定时任务，见第 4、5 节 |
| 一堆需求 | 页上可以仍叫「AI 切片」（第 12 版指导文档：04 里两步都叫这个，05 才叫「分诊 AI」）。参考行写：先分诊，再切成一个个 Project | 没有一篇像 Ralph 那样的首发文章。不要编一个提出者 |
| graph engineering | 不上页 | 词有人用，一手帖这次没打开，见第 7 节 |
| 验证 | poteto 金字塔，上宽下尖，越往下越贵（Lauren Tan，AI Engineer CODE，2026-11-11） | 不要把她口头的 PR 数量写上页。那是她自己的数，我们没有另行核对 |

## 2. Agentic Engineering

### 谁提的

Andrej Karpathy，X，[status/2019137879310836075](https://x.com/karpathy/status/2019137879310836075)。页面时间 2026-02-04 19:55 UTC，即太平洋时间 2026-02-04 11:55。我读的是镜像站 xitter.cf 上的同一 status，正文和多家转载一致。

他是在 vibe coding 一周年的回顾里说的。原话：

> personally my current favorite "agentic engineering": "agentic" because the new default is that you are not writing the code directly 99% of the time, you are orchestrating agents who do and acting as oversight. "engineering" to emphasize that there is an art & science and expertise to it.

前一句他还写了目的：「The goal is to claim the leverage from the use of agents but without any compromise on the quality of the software.」

同日 Addy Osmani 的博客 [Agentic Engineering](https://addyosmani.com/blog/agentic-engineering/)（页首 February 4, 2026）把这个叫法接了过去。他的原话：「Andrej Karpathy suggested "agentic engineering" this week and I think I like it.」另一句：「Agentic engineering = AI does the implementation, human owns the architecture, quality, and correctness.」Osmani 在同一篇里说 Simon Willison 提过 "vibe engineering"。那是 Osmani 的转述，Willison 那篇原文我这次没打开。

Simon Willison 自己的用法在 [What is agentic engineering?](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/)，所属文章日期 2026-02-23。原话：「I use the term agentic engineering to describe the practice of developing software with the assistance of coding agents.」他接着把 coding agent 定义成能写代码也能执行代码的 agent，并写：「Code execution is the defining capability that makes agentic engineering possible.」

### 和另外三个词

**vibe coding。** 同一人，更早一帖：[status/1886192184808149383](https://x.com/karpathy/status/1886192184808149383)，2025-02-02 23:17 UTC，即太平洋时间 2025-02-02 15:17。原话：「There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.」同一帖：「I "Accept All" always, I don't read the diffs anymore.」2026-02-04 那帖里他补了一句：当时模型还弱，vibe coding 多半用在一次性的项目、演示和试探上。

**harness engineering。** 我这次打开的最早一篇是 Mitchell Hashimoto《My AI Adoption Journey》，2026-02-05，[原文](https://mitchellh.com/writing/my-ai-adoption-journey)。原话：「anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again.」他写明自己不确定业界有没有公认叫法，「I've grown to calling this "harness engineering."」六天后 OpenAI 用了同一个词做标题：Ryan Lopopolo，2026-02-11，[Harness engineering](https://openai.com/index/harness-engineering/)。原话：「Humans steer. Agents execute.」这篇讲的是仓库怎么设计，好让 Codex 自己把活干完。它是 agentic engineering 里「环境」那一层，不是整个名字的替换。

**context engineering。** Anthropic，Prithvi Rajasekaran、Ethan Dixon、Carly Ryan、Jeremy Hadfield，2025-09-29，[Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)。原话：「Context engineering refers to the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference, including all the other information that may land there outside of the prompts.」它比 agentic engineering 早，管的是上下文里放什么，不管谁派活、谁验收。

## 3. 最小单：Spec，以及干活的和打分的分开

### Spec

Den Delimarsky，GitHub Blog，2025-09-02，[Spec-driven development with AI](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)。原话：「Instead of coding first and writing docs later, in spec-driven development, you start with a spec. This is a contract for how your code should behave and becomes the source of truth your tools and AI agents use to generate, test, and validate code.」配套工具是 Spec Kit，四步 Specify、Plan、Tasks、Implement，一步没验证完不进下一步。

小程序不是 Spec Kit。`HanGlen/dnd-miniprogram` 的 `AGENTS.md`（2026-11-18 读 `dev`）写：新功能、新页面、定价、要约定接口的大活才按 `docs/PRD_TEMPLATE.md` 写 PRD；小修复在 PR 正文写 3 到 5 行。方向一样，手续更短。

### 干活的和打分的分开

Prithvi Rajasekaran，Anthropic，2026-03-24，[Harness design for long-running application development](https://www.anthropic.com/research/harness-design-long-running-apps)。原话：「Separating the agent doing the work from the agent judging it proves to be a strong lever to address this issue.」同一篇的结构是 「a three-agent architecture—planner, generator, and evaluator」。他写：分开本身不会立刻去掉打分偏松，但单独把 evaluator 调得更严，比让 generator 批评自己容易。

小程序的对应是角色分开，不是这篇的自动打分循环。写代码的和评审的不是同一次执行：`docs/code-review-policy.md` 写明首轮由官方 Codex GitHub 集成在 PR 打开时触发，一个 PR 最多两轮（2026-10-02 定一次、2026-10-13 车主更新为不为追 SHA 继续请求）。`.github/workflows/ci-test.yml` 的 `gate` 注释写明：门禁只看脚本和测试，不看 AI 评审有没有发生。

## 4. 定时任务：Loop、Ralph、16 个 Claude

这里有三层循环，页上要分开。

**一次会话里面的循环。** Erik S.、Barry Zhang，Anthropic，2024-12-19，[Building effective agents](https://www.anthropic.com/research/building-effective-agents)。原话已在 `docs/research/agent-concepts.md` 核对过：「They are typically just LLMs using tools based on environmental feedback in a loop.」这是 agent 干活时的内循环。小程序不自写这个循环，Claude Code 和 Codex 自带。

**一轮做完就退出、下一轮是新会话。** Geoffrey Huntley，2025-07-14，[Ralph Wiggum as a "software engineer"](https://ghuntley.com/ralph/)。页首 「By Geoffrey Huntley in AI — 14 Jul 2025」。原话：「Ralph is a technique. In its purest form, Ralph is a Bash loop.」循环是：

```bash
while :; do cat PROMPT.md | claude-code ; done
```

每轮做一件事然后退出。下一轮是新会话，进度留在文件和 git 里。这次打开的就是这篇，HAN-1827 里「要核」的可以划掉。

**16 个 Claude 并行。** Anthropic，2026-02-05，[Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/research/building-c-compiler)。这次打开的正文没有署名行。2026-11-17 读工程博客目录时记的作者是 Nicholas Carlini（`docs/research/anthropic-articles.md`），本次正文没有再出现这个名字。原话：「To stress test it, I tasked 16 agents with writing a Rust-based C compiler, from scratch, capable of compiling the Linux kernel.」外面的循环作者自己指向 Ralph：「if you've seen Ralph-loop, this should look familiar.」他的循环是 `while true; do claude ...; done`，每轮一个新会话，16 个容器各锁一块任务。没有总指挥。

OpenAI 那篇（2026-02-11）用 Ralph 这个名字指另一件事：改到评审 agent 都满意为止。原文：「iterate in a loop until all agent reviewers are satisfied (effectively this is a Ralph Wiggum Loop)」。这是他们的用法，和 Huntley 文中那个 bash 循环不是同一段代码。

小程序的定时任务靠近 Huntley 的后半段：每轮新会话，任务在 Linear 和 git 里。提示词在 `docs/routines/`（`claude-exec.md`、`codex-exec.md`、`trae-exec.md`）。`AGENTS.md` 写：车主在各 agent 里只贴一句指向文件。仓库里没有那个 `while` 死循环，也没有 16 个容器抢同一块。

## 5. AI 切片：planner / worker

Wilson Lin，Cursor，2026-01-14，[Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents)。页首 「Jan 14, 2026 · research」，文末 Author: Wilson Lin。

他们先试过所有 agent 地位相同、用锁文件自己协调。锁会握太久，没有层级时 agent 躲着难活。下一步才把角色分开。原话：

> Planners continuously explore the codebase and create tasks. They can spawn sub-planners for specific areas, making planning itself parallel and recursive.
> Workers pick up tasks and focus entirely on completing them. They don't coordinate with other workers or worry about the big picture. They just grind on their assigned task until it's done, then push their changes.

每一轮结束还有一个 judge agent 决定要不要继续，下一轮从新会话开始。

小程序的切片是人排的分工，不是这篇的递归 planner。`AGENTS.md`：Claude 出方案，按前端 / 后端 / 美术切开，片之间用 Linear 的 blocked by 串起来。一张单只归一方。没有 sub-planner，也没有 judge agent 决定要不要再开一轮。

## 6. 一堆需求：Triage

**没有找到一篇像 Spec、Ralph 那样的首发文章。** 「Triage」是更早的日常词，软件里指新进来的一堆事先分拣。这次查到的产品定义是 Linear 文档 [Triage](https://linear.app/docs/triage)（2026-11-18 查阅，页上无日期）。原话：「Triage is a special inbox for your team.」以及 「Triage offers a opportunity to review, update, and prioritize issues before they are added to your team's workflow.」同页的 Triage Intelligence 是用 agent 给新单建议负责人和标签。文档没写这个功能是谁、哪天发布的，发布日期这次不补。

小程序的分诊比 Linear 这个收件箱多一步：大单要切成项目。规则在 `docs/routines/triage.md`，2026-11-15 车主定（HAN-1769）。文件标题已经改成「issue 管家（原「分诊」，Claude）」。原话：「只整理 Linear 里的单子和项目，不写代码、不开 PR。」一个 PR 能做完的补标签后移进项目；需要拆的新建功能项目，按前端 / 后端 / 美术 / 需要你切片，用 blocked by 串好。评论标记仍是 `【分诊】`。

页上用「分诊」这个中文词就够。英文 Triage 可以当标签，不要配一个虚构的提出者和日期。

## 7. graph engineering

演讲计划第 7 节记着这个词没对上。这次对上了一个用法，但够不上演讲出处。

**二手。** The Agent Times，Lev Filimonov，页首 Published July 29, 2026，[Graph Engineering Emerges as Proposed Final Layer of Agent Orchestration](https://theagenttimes.com/articles/graph-engineering-emerges-as-proposed-final-layer-of-agent-o-4f0511a8)。它转载 Rohit（@rohit4verse）的一帖，并引用了大段原文。正文把发帖写成 July 28, 2026，引文署名又写成 July 29, 2026，两处日期对不齐。原帖 URL 我没打开，所以下面只转述这篇二手稿里 Rohit 的定义，不当成可以上台的原话。

按这篇转载，Rohit 把四层叠在一起：prompt engineering 管指令，context engineering 管模型知道什么，loop engineering 管一轮里怎么循环到做完，graph engineering 管多个 agent、循环、工具和评判怎么连。转载中的收束句是：「once an agent needs specialization, parallelism, shared state, verification and recovery, it has stopped being a loop. it's a graph.」

这个形状和 04 的后半段对得上：分诊、切片、定时任务、评审是不同的节点，用单和 blocked by 连起来。它解释的是整张系统，不是单独一步。

更早把 agent 流程做成图的库，这次没有读到它们使用 "graph engineering" 这个词，所以不把那些库的发布稿写成这个词的出处。

**建议维持不上页。** 依据里最多写：有人用这个词指「多条循环连成一张图」，一手帖没打开，日期对不齐。

## 8. 验证金字塔

### 人

Lauren Tan。AI Engineer 官方演讲页 [All Code Is Slop (Except Mine)](https://ai.engineer/code/2026/talks/lauren-tan)，页首 November 11, 2026，署名 Lauren Tan，SpaceXSI Principal Engineer。口播逐字稿（机器识别，页上写明会有识别错误）里她自报：「my name is Potato, also known as Lauren.」幻灯片角落是 `@poteto`。poteto 就是这场演讲里的她。

### 视频

原始录像是 AI Engineer 的整场直播，不是单独一条演讲上传。YouTube oembed（2026-11-18 查）标题为 「AIE CODE: Google DeepMind, Anthropic, SpaceXSI, TypeSafe, Lovable, Ramp, etc (System One theme)」，频道 AI Engineer，[watch?v=ZZ19zhYnDKY](https://www.youtube.com/watch?v=ZZ19zhYnDKY)。官方演讲页写这场在该直播的 1:01:02–1:18:38。逐字稿下载页把同一条 YouTube 标成 source。

车主给的 B 站 BV1qtWC6jE2e，页面标题「【中英双语】poteto：别再加规则了，把 Agent 的错误堵进代码里｜AIE Code Summit」，投稿时间页面写 2026-11-14 11:09:15（未标时区；按 B 站惯例是北京时间，即太平洋时间 2026-11-13 19:09）。简介正文这次没抓到。它比官方直播晚，标题是中文重写的。演讲出处用官方页和这条 YouTube，不用 B 站当原文。

### 幻灯片上的五层

口播（01:03:27，直播时钟）说的是 「this inverse pyramid」，没有念出 "the poteto pyramid" 这几个字。五层的字在幻灯片上。下面这组字来自 AI Engineer 的图文页 [All Code Is Slop (Except Mine) — Lauren Tan, SpaceXSI](https://ai.engineer/talks/O_zcc6Xl12g-all-code-is-slop-except-mine)，是他们对照录像写下的幻灯片文字，不是 Lauren 另发的文章。2:07 那张：

```
how do i trust my agents more?
the poteto pyramid

codebase
(good api design, architecture, refactoring)

static analysis
(lints, types, compilers, tests, ci)

verification
(formal, runtime)

prose
(rules, skills, AGENTS.md)

human review

cost
```

箭头向下，越往下越贵。上宽的两层是 codebase 和 static analysis。她口播里把这两层叫 deterministic：用代码本身约束 agent，让对的做法成为默认。verification 用来查不变量、以及 agent 有没有理解意图。prose 留给需要判断、写不成检查的事。口播把规则文件听成了 "agents.mmd"，幻灯片写的是 `AGENTS.md`。

后面一张（图文页标 2:57）把 verification 的括号写成 "formal, empirical"。车主给的图是前一张的 "formal, runtime"。页上跟车主的图，用前一张。

口播里的对应句（01:03:27 起）：「The first two layers are deterministic. So using your code itself. So things like good API design, architecture, refactoring or using lint rules, type systems, compilers or you know different kinds of testing.」接着是 runtime 和 formal verification，然后 「layer with a little bit of pros」（识别错误，幻灯片是 prose）：「rules, skills, agents.mmd, things that require judgment.」结尾她说大部分产品代码 「no longer really requires deep human review」。

她自己的 PR 数量出现在口播里（开头约 3000，后来说团队约 11000，回退率约千分之五）。这是演讲者自述，这次没有第三方核对。04 页不要写这些数。

## 9. 金字塔在小程序仓库里的例子

仓库 `HanGlen/dnd-miniprogram`，分支 `dev`，2026-11-18 读。私有仓库，下面只写路径和 issue 号，不做外链。幻灯片把 tests 和 ci 放在 static analysis 那一层；真把程序跑起来放在 verification。小程序的四样（门禁、测试、AI 评审、真机验收）按这个分，不要全部堆进「验证」。

| 层 | 小程序里的一件真事 | 路径 |
|---|---|---|
| codebase | 规则数据只有一条生成链。手改生成物不是一条允许的路 | `AGENTS.md`「代码库要点」：`tools/raw/*.json` → `tools/preprocess-5etools.js` → `data/`。规则集归属只写在 `config/rulesetSources.js`。价目只在 `cloudfunctions/commerce/products.js` |
| static analysis · 门禁 | 机制判断靠数据字段，不靠中文名。新增的 `=== '某中文名'` 会红 | `tools/check-no-hardcoded-name-logic.js`，命令 `npm run check:no-hardcoded-name`。文件头写明对应 issue #666。CI 步骤「硬编码名称逻辑门禁」在 `.github/workflows/ci-test.yml` |
| static analysis · 门禁 | 换行被整文件翻成 CRLF 时，评审看不见真改动 | 同文件里的步骤「行尾门禁（不许新增 CRLF）」，本地命令 `npm run check:line-endings`。`AGENTS.md` 把这条列为推送前必跑 |
| static analysis · 测试 | PR 上的无头测试。分支保护看的检查叫 `gate` | `.github/workflows/ci-test.yml` 的 `test` job，最后一步 `npm run test:headless`（`tools/run-headless-tests.js`）。需要开发者工具的测试不在这道门禁里，脚本里要写明理由 |
| verification · 运行 | 开发者工具里把页面当真的打开、截图、对几何 | `.agents/skills/wechat-ui-qa/SKILL.md`，入口 `tools/wechat.bat`（`npm run wechat:test`）。只认 Automator 后台截图。过不了截图就标 `structure-pass / visual-blocked`，不能当成视觉通过 |
| prose | 每轮都要读的短规则，细节下沉到文档 | `AGENTS.md`（文末写目标 200 行以内）。分诊、执行、评审的长文在 `docs/routines/` 和 `docs/code-review-policy.md` |
| human review · 真机 | 真机留给车主，执行任务不领 | `AGENTS.md`：`needs-decision` 的例子里写了「真机验收」。`docs/routines/triage.md`：【真机】单不补端标签，优先级保持 Low；功能上线后和【测试】片一起挪进「🧪 上线待回归」 |
| 幻灯片没有单独这一层 · AI 评审 | 写代码的执行器之外，Codex 再看一轮 | `docs/code-review-policy.md`。它比人把每个 diff 读完便宜，比门禁贵。门禁不代替它，它也不代替真机 |

同一条错误在仓库里的走法，和她口播的顺序一致：先改结构（归属只留在 `config/rulesetSources.js`），再加一道会红的检查（`npm run check:ruleset-source`，CI 步骤「规则集来源归属门禁」，注释写 issue #663 / #710），规则文档只保留一句并链到检查。不要先往 `AGENTS.md` 加一句「请注意」。

## 10. 这次明确没当成出处的

- B 站 BV1qtWC6jE2e 的标题和投稿时间对得上这场演讲。它是转载，不是原文。
- The Agent Times 对 Rohit 那帖的转载。日期自相矛盾，原帖没打开。
- Addy Osmani 文中「Willison 提过 vibe engineering」那一句。是转述。
- 16 个 Claude 那篇的作者名。本次正文没有署名。
- Lauren 口播里的 PR 数量和回退率。演讲者自述，未另行核对，不上页。
