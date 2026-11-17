# Agent 开发概念 · 初步调研

> 2026-11-17 Claude 初步调研，给演讲 03 页「地基」和后续调研单打底。只记查到原文的；没核实的标「待核」。
> 细查分给其他 AI：Linear 项目「青岛演讲」的 HAN-1821（Harness）、HAN-1827（概念清单）、HAN-1828（Anthropic 文章）。
> 已有底子：digital-me `career/study-guide.md` 第 4 章已讲过 Agent、工具调用、MCP、Skill、上下文工程、AGENTS.md、多 Agent 编排、人在回路，这里不重复，只补缺的。

## 1. 三个要先说清的结论

1. **「home rope」应该是 Home Repo。** Matt Pocock 2026-11-12 在 aihero.dev 发《The Home Repo Pattern》：用一个仓库放 skills、AGENTS.md 和共用文档，从这个仓库启动 agent，AGENTS.md 里写其他仓库在哪，agent 需要时去打开或克隆。原话：「one repository that holds your skills, your AGENTS.md and your shared docs」。[原文](https://aihero.dev/the-home-repo-pattern)。worklog 2026-11-17 已记过「Matt Pocock 2026-11-12 在 X 发的 Home Repo 做法」，攀岩「绳子」是听岔了（推测，待车主确认）。
2. **「代码仓库 = Harness」说得不准。** Harness 指模型之外、让模型能干活的那一整套运行时：循环、工具、上下文、权限、钩子、验证。Anthropic 把 Claude Agent SDK 本身叫「a powerful, general-purpose agent harness adept at coding」（[Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)，Justin Young，2025-11-26）。所以 **Claude Code、Codex 才是现成的 Harness**；仓库里的 AGENTS.md、文档、检查，是你在 Harness 上加的东西。
3. **仓库这部分有自己的叫法：Harness engineering。** OpenAI《Harness engineering: leveraging Codex in an agent-first world》（Ryan Lopopolo，2026-02-11）：从空仓库开始，代码全由 Codex 写；AGENTS.md 约 100 行，只当地图，深层知识放 `docs/` 当「system of record」（[原文](https://openai.com/index/harness-engineering/)，细节来自二手摘要，待核）。和车主小程序的做法几乎一样。

建议的大白话（待 HAN-1821 定稿）：**模型是大脑；Claude Code 这类工具是现成的 Harness（手脚和工作台）；你在仓库里写的规则、检查、任务记录，是给 Harness 加的那一层，这件事叫 Harness engineering。**

## 2. 演讲可能用到、学习手册还没有的概念

| 概念 | 一句大白话 | 一手出处 | 状态 |
|---|---|---|---|
| Harness | 模型以外让它能干活的一切：循环、工具、上下文、权限、钩子 | Anthropic 2025-11-26（见上） | 已核 |
| Harness engineering | 设计和不断改进这套 Harness；仓库里的规则、文档、检查都算 | OpenAI 2026-02-11 | 原文待核 |
| Home Repo | 一个专门放 AI 配置的仓库，从这里指挥所有项目 | aihero.dev 2026-11-12 | 已核 |
| 长任务 Harness：初始化 agent + 进度文件 | 第一轮先搭环境、列功能清单；之后每轮读进度文件、做一点、提交 git | Anthropic 2025-11-26，原话「claude-progress.txt file that keeps a log of what agents have done」 | 已核 |
| 规划 / 生成 / 评判分开 | 干活的和打分的不是同一个 agent | Anthropic《Harness design for long-running application development》2026-03-24 | worklog 已核 |
| 并行 agent + 循环 | 多个 Claude 同时领任务，每轮新会话 | Anthropic《Building a C compiler…》2026-02-05 | worklog 已核 |
| Agent 记忆 | 跨会话记住东西的几种办法 | Anthropic《The components of agent memory》2026-11-06 | 链接 404，待核 |
| 上下文工程 | 每次让 AI 看到什么 | Anthropic《Effective context engineering for AI agents》2025-09-29 | 手册已有 |
| Agent Skills | 写给 AI 的操作说明，用到才读 | Anthropic 2025-10-16 | 手册已有 |
| 权限 / 沙箱 / auto mode | 让 AI 少问人又不乱来 | Anthropic 2025-10-20、2026-03-25 | 待核 |
| Evals（评测） | 怎么判断 agent 做得好不好 | Anthropic《Demystifying evals for AI agents》2026-01-09 | 待核 |
| Managed Agents | 把「大脑」和「手脚」拆开部署 | Anthropic 2026-04-08 | 待核 |

## 3. Anthropic 工程博客（anthropic.com/engineering，2026-11-17 抓取，页面显示 29 篇，列出 24 篇）

2026：Building strong safety evaluations（11-13）· The components of agent memory（11-06）· Redesigning source control at Anthropic（10-13）· How we contain Claude across products（05-25）· An update on recent Claude Code quality reports（04-23）· Scaling Managed Agents（04-08）· How we built Claude Code auto mode（03-25）· Harness design for long-running application development（03-24）· Eval awareness in Claude Opus 4.6's BrowseComp performance（03-06）· Building a C compiler with a team of parallel Claudes（02-05）· Quantifying infrastructure noise in agentic coding evals（02-05）· Designing AI-resistant technical evaluations（01-21）· Demystifying evals for AI agents（01-09）

2025：Effective harnesses for long-running agents（11-26）· Introducing advanced tool use（11-24）· Code execution with MCP（11-04）· Beyond permission prompts（10-20）· Equipping agents with Agent Skills（10-16）· Effective context engineering for AI agents（09-29）· A postmortem of three recent issues（09-17）· Writing effective tools for agents（09-11）· Desktop Extensions（06-26）· Confidential Inference via Trusted VMs（06-18）· How we built our multi-agent research system（06-13）

更早：Building effective agents（research 栏目，2024-12-19）。

## 4. 对演讲的影响（先不改页面）

- 03「地基」标题「代码仓库，就是 AI 的 Harness」要改，方向见第 1 节，等 HAN-1821 定稿。
- 攀岩比喻的出处（Tejas Kumar）没搜到原文，只有转引；如果车主说的本来就是 Home Repo，攀岩比喻可以不用。
- `docs/talk-qingdao-plan.md` 里「home rope」那条待车主确认后改。
