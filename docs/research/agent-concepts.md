# Agent 开发概念

> 2026-11-17 Claude 做了初稿。同日 Cursor Grok 按 HAN-1827 把第 2 节全部核实：待核的要么改成已核，要么删掉。只记查到原文的；拿不准的标「推测」。
> 细查仍分开：HAN-1821（Harness 怎么上演讲）、HAN-1828（Anthropic 文章逐篇）。
> 手册已有、这里不展开：digital-me `career/study-guide.md` 第 4 章的 Agent、工具调用、MCP、Skill、上下文工程、AGENTS.md、多 Agent 编排、人在回路。

## 1. 三个要先说清的结论

1. **「home rope」应该是 Home Repo。** Matt Pocock 的《The Home Repo Pattern》（[aihero.dev](https://www.aihero.dev/the-home-repo-pattern)）：用一个仓库放 skills、AGENTS.md 和共用文档，从这个仓库启动 agent，AGENTS.md 里写其他仓库在哪，agent 需要时去打开或克隆。原话：「A Home Repo is one repository that holds your skills, your AGENTS.md and your shared docs」。文章页没有署名行；同一定义在他的仓库 [mattpocock/dictionary-of-ai-coding](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Home%20Repo.md)。页面社交图的 `updatedAt` 是 2026-11-12，和 worklog 记的「当天在 X 发过」对得上。攀岩「绳子」是听岔了（推测，待车主确认）。
2. **「代码仓库 = Harness」说得不准。** Harness 是模型之外、让模型能动手的那套运行时。Anthropic《Demystifying evals for AI agents》（Mikaela Grace、Jeremy Hadfield、Rodrigo Olivares、Jiri De Jonghe，2026-01-09）原话：「An agent harness (or scaffold) is the system that enables a model to act as an agent: it processes inputs, orchestrates tool calls, and returns results」。同一篇把 Claude Code 叫做 “a flexible agent harness”。更早一篇把 Claude Agent SDK 叫做 “a powerful, general-purpose agent harness adept at coding”（[Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents)，Justin Young，2025-11-26）。所以 **Claude Code、Codex 才是现成的 Harness**；仓库里的 AGENTS.md、文档、检查，是你在 Harness 上加的东西。
3. **仓库这部分有自己的叫法：Harness engineering。** OpenAI《Harness engineering: leveraging Codex in an agent-first world》（Ryan Lopopolo，2026-02-11，[原文](https://openai.com/index/harness-engineering/)）。原文没有给这个词下字典式定义。它讲的是：人不再亲手写代码，而是设计环境、写清意图、做反馈回路。原话：「Humans steer. Agents execute。」以及 “A short AGENTS.md (roughly 100 lines) is injected into context and serves primarily as a map”。深层知识放结构化的 `docs/`，当作 system of record。和车主小程序「AGENTS.md 限 60 行、细节下沉 `docs/`」是同一类做法。

建议的大白话（待 HAN-1821 定稿）：**模型是大脑；Claude Code 这类工具是现成的 Harness（手脚和工作台）；你在仓库里写的规则、检查、任务记录，是给 Harness 加的那一层，这件事叫 Harness engineering。**

## 2. 概念清单（HAN-1827，2026-11-17 已核）

小程序对应做法看了 `HanGlen/dnd-miniprogram` 的 `AGENTS.md`、`docs/ai-division-of-labor.md`、`docs/code-review-policy.md`、`.claude/settings.json`，以及 `HanGlen/digital-me` 和本网站的 `AGENTS.md`。仓库里没有的配置，写成「没采用」。

| 档 | 英文 | 中文 | 一句大白话 | 状态 |
|---|---|---|---|---|
| 演讲 | Harness | 挽具 / 运行时 | 模型是大脑，Harness 是让它能读文件、跑命令、看结果的那套工具 | 已核 |
| 演讲 | Harness engineering | 挽具工程 | 人少写代码，把力气花在环境、规则和检查上，让 AI 自己把活干完 | 已核 |
| 演讲 | Initializer + progress file | 初始化 agent、进度文件 | 第一班先搭环境、列清单；之后每班读进度、做一点、写下来再走 | 已核 |
| 演讲 | Planner / generator / evaluator | 规划、生成、评判 | 写方案的、写代码的、打分的分成三个人，不让同一个人自己夸自己 | 已核 |
| 演讲 | Parallel agents | 并行 agent | 一个忙不过来就开多份，各领一块，做完再合到一起 | 已核 |
| 演讲 | Permissions | 权限 | 划定边界：边界里自己做，出界必须等人点头 | 已核 |
| 面试 | Agent loop | 代理循环 | AI 走一步、看结果、再决定下一步，直到做完或被人叫停 | 已核 |
| 面试 | Subagent | 子 agent | 杂活交给一个新开的小助手，它看自己的材料，只把结论交回来 | 已核 |
| 面试 | Hooks | 钩子 | 到了固定节点就自动跑一段脚本，不靠模型记得去跑 | 已核 |
| 面试 | Agent memory | Agent 记忆 | 这次做完留下的笔记，下次新开会话还能读到 | 已核 |
| 面试 | Sandbox | 沙箱 | 把 AI 关在指定的文件夹和网站里，出不去就不用每步都问人 | 已核 |
| 面试 | Auto mode | 自动模式 | 用另一个模型替人点「允许」，危险动作仍拦住 | 已核 |
| 面试 | Evals | 评测 | 用固定题目、多次运行、自动打分，看 agent 到底稳不稳 | 已核 |
| 面试 | Compaction / context reset | 上下文压缩 / 上下文重置 | 对话太长时，要么摘要后接着干，要么清空、靠文件交接 | 已核 |
| 面试 | Spec-driven development | 规格驱动开发 | 先写清「做成什么样」，这份说明是依据，代码跟着它走 | 已核 |
| 面试 | Ralph loop | Ralph 循环 | 用一个死循环反复把同一份提示喂给编程 agent，每轮都是新会话 | 已核 |
| 面试 | Home Repo | 主仓 | 一个专门放 AI 配置的仓库，从这里指挥其他项目 | 已核 |
| 了解 | Managed Agents | 托管 Agent | 把大脑、动手的环境和会话记录拆开，交给平台托管 | 已核 |

下面每条：出处、一句原话、小程序里对应什么。演讲档是老板听得懂、03 / 04 页用得上的；面试档是手册没写、求职能接住的；了解档是知道有这回事即可。

### Harness

Anthropic《Demystifying evals for AI agents》，2026-01-09。原话见第 1 节。同一句后面写：评 “an agent” 时，评的是 harness 和模型一起干活。

小程序不自建这个循环。写代码用的是 Claude Code、Codex。`AGENTS.md` 管的是这些现成工具进仓库后要守的规则。

### Harness engineering

OpenAI，Ryan Lopopolo，2026-02-11。原话：「give Codex a map, not a 1,000-page instruction manual。」短的 `AGENTS.md` 当地图，`docs/` 当 system of record，再用 linter 和 CI 检查文档没过期。

小程序同一条路：`AGENTS.md` 写明限 60 行，细节下沉 `docs/`。推送前要跑换行检查和相关测试，并点名 `check:no-hardcoded-name`、`check:ruleset-source`、`check:translation`、`check:package-size` 这些门禁。

### 初始化 agent 和进度文件

Justin Young，2025-11-26。原话：「an initializer agent that sets up the environment on the first run, and a coding agent that is tasked with making incremental progress in every session」。进度文件原话：「a claude-progress.txt file that keeps a log of what agents have done」。功能清单用 JSON，每条先标 `passes: false`，后来只许改这一项。

小程序没有 `init.sh`、`claude-progress.txt`、`feature_list.json`。交接物是 Linear 单、PR 和 git。大活先写 PRD，一张单一个 PR。

### 规划、生成、评判

Prithvi Rajasekaran《Harness design for long-running application development》，2026-03-24，[原文](https://www.anthropic.com/research/harness-design-long-running-apps)。原话：「a three-agent architecture—planner, generator, and evaluator」。另一句：「Separating the agent doing the work from the agent judging it proves to be a strong lever」。动手前两边先定一份 sprint contract，写清这块怎样算做完。

小程序是角色分开，不是这套自动打分。`docs/ai-division-of-labor.md`：Claude 出方案和 PRD，Codex 写后端，官方 Codex GitHub 集成单独做 PR 评审。`docs/code-review-policy.md`：一个 PR 最多两轮。手册「多 Agent」已经讲过「写的和审的不是同一个模型」，这里补的是三角色和 sprint contract 这个词。

### 并行 agent

Nicholas Carlini《Building a C compiler with a team of parallel Claudes》，2026-02-05，[原文](https://www.anthropic.com/research/building-c-compiler)。原话：「multiple Claude instances work in parallel on a shared codebase without active human intervention」。抢活的办法：往 `current_tasks/` 写一个锁文件，git 同步让第二个人换一块。他用了 16 个 agent，没有总指挥，每个自己挑「下一件最明显的事」。

小程序的并行是人开多窗口。`AGENTS.md`：「多窗口各改各的分支」。没有锁文件，也没有 16 个容器抢同一块。

### 权限

默认模型见 Claude Code 沙箱文（下一节「沙箱」）：改文件、跑命令之前先问人。老板能听的一句就是：边界内自己做，出界等人点头。沙箱和 auto mode 是两种少点「允许」的办法，放在面试档。

小程序把边界写在 `AGENTS.md` 红线里：不直推、不 force-push、不批准 PR、不上传不发版。合并有一条长期授权：定时任务每轮开工前，合掉满足清单的 PR（2026-11-07，HAN-1590）。`.claude/settings.json` 允许一般的 Linear 调用，删除、合并 diff、提交评审放在询问。

### Agent loop

Erik S.、Barry Zhang《Building effective agents》，2024-12-19，[原文](https://www.anthropic.com/research/building-effective-agents)。原话：「They are typically just LLMs using tools based on environmental feedback in a loop。」该页现在注明：文中工具版图自 2024 年 12 月后变过，当前做法改看 Managed Agents。这句对「循环」的定义仍然是一手出处。

小程序不自写这个循环。定时任务的提示词在 `docs/routines/`，每轮读仓库规则再领单。那是人排的班，不是模型自己的 tool loop。手册用「自己规划、调用工具、看结果再继续」讲过 Agent，这里补的是这个英文专名。

### 子 agent

Claude Code 文档 [Create custom subagents](https://code.claude.com/docs/en/sub-agents)，2026-11-17 查阅。原话：「Subagents are specialized AI assistants that handle specific types of tasks。」以及 “Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions.” 文档会改，引文以查阅当天为准。

不要和 2024-12-19 那篇的 orchestrator-workers 当成同一个词。那是一种工作流；subagent 是一次会话里再开一个独立上下文。

小程序的分工是多个独立执行器（Claude、Codex、Trae），各开各的会话。`AGENTS.md` 写「一张单只归一方」。`.claude/settings.json` 里没有自定义 subagent。

### 钩子

Claude Code 文档 [Hooks reference](https://code.claude.com/docs/en/hooks)，2026-11-17 查阅。原话：「Hooks are user-defined shell commands, HTTP endpoints, MCP tool calls, LLM prompts, or subagents that execute automatically at specific points in Claude Code's lifecycle。」

仓库里没有这种生命周期钩子。`.claude/settings.json` 只有权限名单。该自动发生的事写在 `.githooks/pre-push` 和 `.github/workflows/`。作用相近：到点就跑，不靠模型记得。

### Agent 记忆

Lance Martin《The components of agent memory》，2026-11-06，[原文](https://www.anthropic.com/research/components-of-agent-memory)。初稿里的链接 404，是因为用了 `/engineering/` 路径；这篇在 `/research/components-of-agent-memory`。原话：「knowledge that Claude gains from experience … and that it retains between sessions, saved as context it can read later。」同一段写明：改模型权重、一次对话里的临时学习、compaction，都不算记忆。文中的 dreaming 是空闲时整理这些笔记（改错、写成互链的 wiki、决定下次开场读哪几条）。

小程序不建记忆文件夹，也不做 dreaming。手册已经写了：状态放在 Linear 和 GitHub。这里只补业界这个词，以及「compaction 不算记忆」。

### 沙箱

David Dworken、Oliver Weller-Davies《Beyond permission prompts: making Claude Code more secure and autonomous》，2025-10-20，[原文](https://www.anthropic.com/research/claude-code-sandboxing)。原话：「Sandboxing creates pre-defined boundaries within which Claude can work more freely, instead of asking for permission for each action。」两道边界：文件系统和网络。文中写内部使用把权限询问减少了 84%。

小程序仓库的 Claude 设置里没有沙箱配置。约束靠红线和 CI，不靠操作系统把进程关起来。

### 自动模式

John Hughes《How we built Claude Code auto mode》，2026-03-25，[原文](https://www.anthropic.com/research/claude-code-auto-mode)。原话：「Auto mode is a new mode for Claude Code that delegates approvals to model-based classifiers—a middle ground between manual review and no guardrails。」读进来的内容先过提示注入探针；要执行的动作再过一份记录分类器。连续拒绝会升级给人。

小程序仓库里没有 auto mode 配置。该等人的事写在红线里，不是交给分类器。

### 评测

同一篇 evals 文，2026-01-09。原话：「An evaluation (“eval”) is a test for an AI system: give an AI an input, then apply grading logic to its output to measure success。」文中把一次尝试叫 trial，打分逻辑叫 grader，全程记录叫 transcript，环境里的最终状态叫 outcome。另有 evaluation harness：跑评测的那套设施，和 agent harness 不是同一个东西。

小程序的规则问答有离线评测（`docs/rules-qa-evaluation.md`、`tools/rules-qa/`）。那是产品功能的题库，手册第 3 章已讲。写代码的 agent 没有这套 task / trial / grader，靠的是 CI 门禁和另一个模型评审。

### 上下文压缩和上下文重置

压缩：Justin Young，2025-11-26。原话：Claude Agent SDK 有 “context management capabilities such as compaction, which enables an agent to work on a task without exhausting the context window.” 他同时写：只有压缩不够，下一班仍可能接上一份半成品。

重置：Prithvi Rajasekaran，2026-03-24。原话：「This differs from compaction, where earlier parts of the conversation are summarized in place so the same agent can keep going on a shortened history。」重置是清空上下文，用一份交接文件让下一班接着干。

小程序长任务靠新开一轮（定时任务），不是把同一段对话摘要后继续。更接近重置，交接物是单和 git，不是文中的进度文件。

### 规格驱动开发

Den Delimarsky，GitHub Blog，2025-09-02，[原文](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)。原话：「Instead of coding first and writing docs later, in spec-driven development, you start with a spec. This is a contract for how your code should behave and becomes the source of truth」。配套工具是 Spec Kit，四步：Specify、Plan、Tasks、Implement，一步没验证完不进下一步。

小程序不是 Spec Kit。`AGENTS.md` 规定：新功能、新页面、定价、要约定接口的大活才写 PRD；小修复在 PR 正文写 3 到 5 行。方向一样：先写清做成什么样，再写代码。

### Ralph 循环

Geoffrey Huntley《Ralph Wiggum as a "software engineer"》，2025-07-14，[原文](https://ghuntley.com/ralph/)。原话：「Ralph is a technique. In its purest form, Ralph is a Bash loop。」循环是 `while :; do cat PROMPT.md | claude-code ; done`。每轮做一件事，做完就退出；下一轮是新会话，进度留在文件和 git 里。OpenAI 那篇把「改到评审 agent 都满意为止」称作 effectively a Ralph Wiggum Loop，链到的是这个做法。

小程序的定时任务像它的后半段：每轮新会话，任务清单在仓库和 Linear 里，不在上下文里。触发的是各 agent 的定时任务，不是仓库里这个 bash 死循环。

### Home Repo

出处见第 1 节。演讲不必教这个词。它只用来避免把「绳子」讲成 Harness。

三份说明都不是 Home Repo。小程序和本网站各有自己的 `AGENTS.md`，只管本仓库。digital-me 的 `AGENTS.md` 写明：这个仓库是个人资料库，目的是让 AI 懂我。里面没有「其他代码仓库在这条路径，没有就克隆」这种指针。

### Managed Agents

Lance Martin、Gabe Cemaj、Michael Cohen《Scaling Managed Agents: Decoupling the brain from the hands》，2026-04-08，[原文](https://www.anthropic.com/research/managed-agents)。原话：把 “brain” (Claude and its harness)、“hands” (sandboxes and tools)、“session” (the log of session events) 拆开，各自可以换、可以挂。Harness 不再住在容器里面，容器死了就当一次工具调用失败。

小程序没采用。Agent 跑在开发者自己的 Claude Code / Codex 会话里，没有把大脑和动手环境拆成托管服务。

## 3. Anthropic 工程博客（anthropic.com/engineering，2026-11-17 抓取，页面显示 29 篇，列出 24 篇）

2026：Building strong safety evaluations（11-13）· The components of agent memory（11-06）· Redesigning source control at Anthropic（10-13）· How we contain Claude across products（05-25）· An update on recent Claude Code quality reports（04-23）· Scaling Managed Agents（04-08）· How we built Claude Code auto mode（03-25）· Harness design for long-running application development（03-24）· Eval awareness in Claude Opus 4.6's BrowseComp performance（03-06）· Building a C compiler with a team of parallel Claudes（02-05）· Quantifying infrastructure noise in agentic coding evals（02-05）· Designing AI-resistant technical evaluations（01-21）· Demystifying evals for AI agents（01-09）

2025：Effective harnesses for long-running agents（11-26）· Introducing advanced tool use（11-24）· Code execution with MCP（11-04）· Beyond permission prompts（10-20）· Equipping agents with Agent Skills（10-16）· Effective context engineering for AI agents（09-29）· A postmortem of three recent issues（09-17）· Writing effective tools for agents（09-11）· Desktop Extensions（06-26）· Confidential Inference via Trusted VMs（06-18）· How we built our multi-agent research system（06-13）

更早：Building effective agents（research 栏目，2024-12-19）。

第 2 节核实过的篇，正文在 `https://www.anthropic.com/research/<短路径>`。初稿里 Agent 记忆的 `/engineering/` 链接会 404，改走 `/research/components-of-agent-memory`。其余篇的路径留给 HAN-1828，这里不逐篇改。

## 4. 对演讲的影响（先不改页面）

- 03「地基」标题「代码仓库，就是 AI 的 Harness」要改，方向见第 1 节，等 HAN-1821 定稿。
- 攀岩比喻的出处（Tejas Kumar）没搜到原文，只有转引；如果车主说的本来就是 Home Repo，攀岩比喻可以不用。
- `docs/talk-qingdao-plan.md` 里「home rope」那条待车主确认后改。
- 演讲用得上的六条，大白话都在第 2 节的表里。Home Repo 不必上页，只用来避免讲错。
