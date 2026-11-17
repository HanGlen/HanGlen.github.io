# Agent 开发前沿概念 · 学习笔记

> 给青岛演讲（`docs/talk-qingdao-plan.md`）准备的素材库：车主推荐的视频讲了什么、一手出处在哪、哪些能上页面、和我们自己的做法怎么对上。
> 2026-11-17 整理。**上页面的说法只引一手来源**（Anthropic 官方博客、本人原文或原视频）；B 站搬运和 X 上的转述只当线索。

## 1. 三个视频的出处核对

| B 站视频 | 讲的是 | 一手出处 | 能不能引 |
|---|---|---|---|
| [BV1BuWZ6REZ5](https://www.bilibili.com/video/BV1BuWZ6REZ5/) Matt Pocock：home repo 模式 | 所有 agent 从同一个仓库启动 | Matt Pocock 本人 [YouTube](https://www.youtube.com/watch?v=hWe-j78vNpc)、[文章](https://aihero.dev/the-home-repo-pattern)，2026-11-12 | **能**，本人原文 |
| [BV1s2xM6PExc](https://www.bilibili.com/video/BV1s2xM6PExc/) 「Claude Code 负责人用 Opus 5.5 + 图谱 + Harness」 | Boris Cherny 讲并行跑 agent、Harness | 搬运自第三方频道 beamnxw 的 [YouTube](https://www.youtube.com/watch?v=c4kYurm0hD8)（2026-10-22），**不是官方频道**。Boris 本人能核实的说法在 YC Startup School 访谈 [Root Access 2026-07-27](https://www.ycrootaccess.com/p/boris-cherny-building-claude-code) | **只引 YC 访谈**；「100% 代码由 Opus 5.5 生成」「图谱记忆」找不到原话，不用 |
| [BV15Mng6gEfg](https://www.bilibili.com/video/BV15Mng6gEfg/) 「Anthropic 工程师：Graph Engineering 同时跑几百个 Agent」 | Prompt → Agents → Loops → Graphs；验证、并行、后台循环 | 找不到原视频和讲者姓名；X 上只有转述（例如 [这条](https://x.com/0xMorlex/status/2082085928059973744)）。有第三方文章明确说 Anthropic 没有把 graph engineering 作为官方说法（[frankx.ai](https://www.frankx.ai/blog/graph-engineering-claude-code)） | **概念能用**，当作「业界现在的叫法」；**不说是 Anthropic 提的**，内容落到下面的官方文章上 |

车主口头说的「home rope」= **home repo**；「graph enganieering」= **graph engineering**。

## 2. 概念逐个讲清楚

一条主线：**Prompt → Agent → Loop → Graph**。越往后，人越不用盯着。Harness 是包住这一切的那层壳。

### Harness（驾驭层）
- **是什么**：模型外面那层软件：循环、工具、上下文管理、护栏。Anthropic 原话：「the software scaffolding around a model」。
- **要点**：Harness 里写的都是「模型做不到什么」的假设，模型变强后这些假设会过时，要定期问「我能停掉什么」。
- **出处**：Lance Martin（Anthropic），[Harnessing Claude's intelligence](https://claude.com/blog/harnessing-claudes-intelligence)，2026-04-02。Boris Cherny 在 YC 访谈里说给 Opus 5 删掉了 80% 的系统提示词（「we deleted 80% of the system prompt」），做法是删光再一行行加回来当评测。
- **大白话**：模型是员工，Harness 是公司的制度、工具和检查。员工越能干，制度越该精简。

### Home Repo（家仓库）
- **是什么**：一个仓库装下 skills、AGENTS.md、共享文档和自制工具；每次都从这里启动 agent，AGENTS.md 里每个别的仓库写一行路径，没有就自己 clone。几个 agent 同时干活，各开一个 worktree。
- **规模**：二十个仓库以内直接写路径；再多就按业务分组，一组一个文件。
- **出处**：Matt Pocock，[The Home Repo](https://aihero.dev/the-home-repo-pattern)，2026-11-12。
- **大白话**：AI 的「工位」。所有规矩和工具放在一个地方，换哪家 AI 来都从这儿上班。

### Agent → 验证（Verification）
- **是什么**：AI 不光写，还要自己检查：跑起来、看结果、对不上就改。Anthropic 把手工检查写成 skill，让每次都自动跑。
- **要点**：Boris 原话「The verification is probably the single most important thing that people do not get right」；检查越量化，AI 越能自查；**用另一个 AI 来审**，因为它没被写代码那个 AI 的思路带偏。
- **出处**：[Building verification loops in Claude Code with skills](https://claude.com/blog/building-verification-loops-in-claude-code-with-skills)，2026-07-22；[Getting started with loops](https://claude.com/blog/getting-started-with-loops)，2026-06-30；YC 访谈。
- **大白话**：写完不算完，检查过了才算完；检查的人和写的人分开。

### Loop（循环）
- **是什么**：「agents repeating cycles of work until a stop condition is met」——AI 一圈圈干，直到满足停止条件。
- **四种**（Anthropic 官方分法）：
  - 一问一答（turn-based）：你问一句它干一轮。
  - 定目标（goal-based，`/goal`）：达到验收条件才停。
  - 定时（time-based，`/loop`、`/schedule`）：到点就跑，比如盯 PR、修 CI。
  - 主动（proactive，routine）：没人在场，按事件或日程自己跑，比如分诊、升级依赖。
- **要点**：Boris 说 loop 就是「a cron job that's running locally for Claude」，routine 是放到云上的 loop，团队每天跑二三十个 routine（清死代码、补测试、删没用的测试）。
- **出处**：[Getting started with loops](https://claude.com/blog/getting-started-with-loops)；YC 访谈。
- **大白话**：定时任务。到点上班，领一张单，干完收工，下一轮再来。

### Graph（图 / 编排）
- **是什么**：把「谁先干、谁并行、谁来审、审不过回到哪」画成一张图，由程序而不是聊天记录来管顺序。典型形状是 **先拆（规划）→ 并行干（fan-out）→ 另一批 AI 反驳挑错（verify）→ 汇总**。
- **官方对应**：Claude Code 的 dynamic workflows，「dynamically writes orchestration scripts that run tens to hundreds of parallel subagents」，「other agents try to refute what they found」，进度存在会话外面，断了能接着跑。Bun 从 Zig 改写成 Rust 用了上百个 agent、每个文件两个审查者，跑了 11 天。
- **出处**：[Introducing dynamic workflows](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code)，2026-05-28；YC 访谈。「Graph engineering」这个叫法来自社区（见第 1 节）。
- **返回路径**（视频 3 的说法，社区转述）：每一个被接受的结果，都会变成下一次运行的约束。官方里能对上的是 loops 那篇的「When a result falls short, encode the fix into the system」。
- **大白话**：一个需求进来，先有人拆，再分给几个人同时做，做完有人挑刺，全过了才合在一起；出过的错写进规矩，下次不再犯。

## 3. 对照我们自己的做法（洛山达 DND 助手）

| 概念 | 我们的做法 | 证据 |
|---|---|---|
| Harness | 仓库里的 AGENTS.md（限 60 行）、183 道自动检查、门禁、分支规则 | dnd-miniprogram `AGENTS.md`、CI |
| Home Repo | 小程序仓库就是所有 AI 的工位：Claude、Codex、Trae 都从它启动，定时任务提示词放在 `docs/routines/` | dnd-miniprogram `docs/routines/` |
| 验证 + 换人审 | Claude 写、Codex 审；183 道检查不过不合并；UI 改动要截两套皮肤的图 | 「灵感 → 激励」那单，见 `src/i18n/zh.ts` |
| Loop | 8 个定时任务轮班：反馈转单、回复回写、issue 管家、执行 × 3、发版 | `talk.ts` keep.clocks、`docs/automation-routines.md` |
| Graph | 需求先由 Claude 做需求分析、写方案，切成前端 / 后端 / 美术 / 测试几片，用 Linear 的 blocked-by 串先后，几个执行器并行做 | 「约团排期」6 片一下午合入 |
| 返回路径 | 出过一次错就在 AGENTS.md 补一条；评审发现的大问题开 `review-derived` 单 | dnd-miniprogram `AGENTS.md`「发现的问题不悄悄放过」 |

**我们还没有的**：同一需求多 AI 独立做、再让 AI 互相反驳（fan-out + refute）；用程序管编排（我们是 Linear 单子 + 定时任务，靠单子状态串）。演讲时实话实说：我们用的是「单子做节点、定时任务做循环」的轻量版图。

## 4. 页面怎么用（下一轮改 03 时的方案，待车主定）

1. **03 的主线换成这条梯子**：Prompt → Agent → Loop → Graph，外面一圈 Harness。五层对应：
   - 地基 = **Harness**（加一句 Home Repo：所有 AI 从同一个仓库上班）
   - 一张单 = **Agent + 验证**（写的和审的分开，检查不过打回）
   - 一轮 = **Loop**（定时任务 / routine）
   - 一个需求 = **Graph**（需求分析 → 切片 → 并行 → 审查 → 合入）
   - 一支团队 = **多张图同时跑**，人只在关键处拍板
2. **开头放一句钩子**，用 Boris 的原话：「验证是大多数人没做对的、最重要的一件事。」
3. **04 维护页加「返回路径」**：用户的每条反馈修完以后，教训写进规则，下一轮 AI 自动遵守。
4. 依据栏统一换成第 2 节的官方出处，删掉对搬运视频的引用。

## 5. 不要用的说法

- 「Claude Code 负责人 100% 代码由 Opus 5.5 生成」「图谱让 agent 永不遗忘」：只在搬运视频标题和简介里，找不到原话。
- 「Anthropic 所有工程师都在同时跑几百个 agent」「80% 工程师在用自我改进循环」：只有 X 转述，没有原始录像或讲者。
- 「Graph engineering 是 Anthropic 提出的」：没有官方出处。
