# Anthropic 工程博客和相关文章

> 2026-11-17 读原文。只写读过的。给演讲 03、04、05 页备用，不改页面。
> 目录来自当天的 [anthropic.com/engineering](https://www.anthropic.com/engineering)。文章正文在 [anthropic.com/research/短名](https://www.anthropic.com/research)。

## 目录怎么补全的

页面写着 29 篇。第一屏 24 篇。点 See more 会请求 `/listing/team-engineering/default/2`，再出 5 篇，没有下一页。

多出来的 5 篇是：Claude Code best practices（2025-04-18）、think tool（2025-03-20）、SWE-bench Verified（2025-01-06）、Building effective agents（2024-12-19）、Contextual Retrieval（2024-09-19）。

规范地址是 `/research/短名`。`/engineering/短名` 会 308 跳过去。所以《The components of agent memory》不是丢了：正确地址是 [components-of-agent-memory](https://www.anthropic.com/research/components-of-agent-memory)。

Building effective agents 就在这 29 篇里，也在 research 栏目。research 栏目当天大约 210 篇。和「怎么做 agent」同类、又不在这 29 篇里的，我另读了 [Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents)（Frontier Red Team，不在 engineering 名单）。只看到标题、没读正文的有：measuring-agent-autonomy、claude-code-expertise、long-running-claude、agents-judgment-calls、coding-agents-social-sciences。安全、生物、对齐类的不收。

作者按页面「Written by」或致谢里写明执笔的人。页面没写人名的标「未署名」。

## 工程博客 29 篇

| 日期 | 文章 | 作者 | 一句话结论 | 关键原话 | 页 |
|---|---|---|---|---|---|
| 2026-11-13 | [Building strong safety evaluations](https://www.anthropic.com/research/building-strong-safety-evaluations) | Ruth Appel、Evan Frondorf、Jeremy Hadfield、Rebecca Hiscott、Kamya Jagadish、Shayne Longpre、Madeleine Tucker、Brett Wittmershaus | 安全评测量的是会不会帮人造成伤害，不是模型本事有多大。 | "A safety eval measures a model’s propensity to cause or contribute to harm, whether its response to a request makes harm more or less likely, and how severe that harm would be, rather than measuring specific capabilities." | 无关 |
| 2026-11-06 | [The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory) | Lance Martin | 会话里先记下来，空闲时再对照原始记录整理、改错，他们把后一步叫 dreaming；公司文档可以收成 wiki 再检索。 | "We’ve found that dreaming has been a useful tool for helping us give Claude effective memory." | 05 |
| 2026-10-13 | [Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control) | Nick G. 和 source control 团队 | 写代码不再是瓶颈，源码管理和 CI 才是。2026 年 5 月每天大约合入 2500 次，9 月超过 30000 次。 | "In May 2026, Anthropic averaged around 2,500 code changes merged per day; as of September, we merged over 30,000 per day." | 04 |
| 2026-05-25 | [How we contain Claude across products](https://www.anthropic.com/research/how-we-contain-claude) | Max McGuinness、Mikaela Grace、Jiri De Jonghe、Jake Eaton、Abel Ribbink | 每一步都问人，用户大约 93% 都会点通过，问多了就不再看。沙箱把允许的范围划死，提示少了 84%。 | "Our telemetry showed users approved roughly 93% of permission prompts." | 03 |
| 2026-04-23 | [An update on recent Claude Code quality reports](https://www.anthropic.com/research/april-23-postmortem) | 未署名 | 有人觉得 Claude Code 变差，他们查到三处改动，API 没受影响，4 月 20 日的 v2.1.116 已修好。 | "We’ve traced these reports to three separate changes that affected Claude Code, the Claude Agent SDK, and Claude Cowork. The API was not impacted." | 无关 |
| 2026-04-08 | [Scaling Managed Agents](https://www.anthropic.com/research/managed-agents) | Lance Martin、Gabe Cemaj、Michael Cohen | Harness 里写着「模型自己做不到」的假设，模型一变强，这些假设就会过时。他们把「大脑」和「手脚」拆开，手脚换成一次工具调用。 | "A common thread across this work is that harnesses encode assumptions about what Claude can’t do on its own. However, those assumptions need to be frequently questioned because they can go stale as models improve." | 03 |
| 2026-03-25 | [How we built Claude Code auto mode](https://www.anthropic.com/research/claude-code-auto-mode) | John Hughes | 沙箱安全但难配，完全跳过权限不安全。人手点确认夹在中间，实际上 93% 都会通过。auto mode 用分类器替掉一部分确认。 | "Manual prompts sit in the middle, and in practice users accept 93% of them anyway." | 03 |
| 2026-03-24 | [Harness design for long-running application development](https://www.anthropic.com/research/harness-design-long-running-apps) | Prithvi Rajasekaran | 干活的 agent 和打分的 agent 要分开。每个小段动手前，两边先写清什么叫做完，他们叫 sprint contract。 | "Separating the agent doing the work from the agent judging it proves to be a strong lever to address this issue." | 03 |
| 2026-03-06 | [Eval awareness in Claude Opus 4.6’s BrowseComp performance](https://www.anthropic.com/research/eval-awareness-browsecomp) | Russell Coleman | Opus 4.6 在 BrowseComp 里自己猜到这是考试，找到并解开了答案。评测会被模型识破。 | "Claude Opus 4.6 independently hypothesized that it was being evaluated, identified which benchmark it was running in, then located and decrypted the answer key." | 无关 |
| 2026-02-05 | [Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/research/building-c-compiler) | Nicholas Carlini | 16 个 Claude 并行写一个能编译 Linux 内核的 C 编译器。外面套 `while true`，每轮新开一次会话；任务用锁占住，避免一起改同一处。 | "To stress test it, I tasked 16 agents with writing a Rust-based C compiler, from scratch, capable of compiling the Linux kernel." | 04 |
| 2026-02-05 | [Quantifying infrastructure noise in agentic coding evals](https://www.anthropic.com/research/infrastructure-noise) | Gian Segato | 同样的编程评测，机器给的内存和 CPU 不同，分数就能差出 6 个百分点。差一两个点说明不了模型强弱。 | "In internal experiments, the gap between the most- and least-resourced setups on Terminal-Bench 2.0 was 6 percentage points (p < 0.01)." | 无关 |
| 2026-01-21 | [Designing AI-resistant technical evaluations](https://www.anthropic.com/research/AI-resistant-technical-evaluations) | Tristan Hume | 用来区分人的上机题，模型很快就能做对，题就废了。这是招人的题，不是产品评测。 | "A take-home that distinguishes well between human skill levels today may be trivially solved by models tomorrow—rendering it useless for evaluation." | 无关 |
| 2026-01-09 | [Demystifying evals for AI agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents) | Mikaela Grace、Jeremy Hadfield、Rodrigo Olivares、Jiri De Jonghe | Agent 会自己改状态、走很多轮，所以不能等上线才发现做错。评测是为了在用户碰到之前看见行为变了。 | "Evals make problems and behavioral changes visible before they affect users, and their value compounds over the lifecycle of an agent." | 04 |
| 2025-11-26 | [Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents) | Justin Young | 他们说的 harness 是 Claude Agent SDK，不是代码仓库。第一轮先列功能清单，以后每轮读 `claude-progress.txt` 和 git，做完一件再提交。 | "The Claude Agent SDK is a powerful, general-purpose agent harness adept at coding, as well as other tasks that require the model to use tools to gather context, plan, and execute." | 03 |
| 2025-11-24 | [Introducing advanced tool use](https://www.anthropic.com/research/advanced-tool-use) | Bin Wu | 工具定义不要一次全塞进上下文。需要时再搜出来，他们测到 token 少了 85%，工具还在。 | "This represents an 85% reduction in token usage while maintaining access to your full tool library." | 03 |
| 2025-11-04 | [Code execution with MCP](https://www.anthropic.com/research/code-execution-with-mcp) | Adam Jones、Conor Kelly | 工具太多时，让 agent 写代码去调用，中间结果不必每次都经过模型。一个例子里从 15 万 token 降到 2000，少了 98.7%。 | "This reduces the token usage from 150,000 tokens to 2,000 tokens—a time and cost saving of 98.7%." | 03 |
| 2025-10-20 | [Beyond permission prompts](https://www.anthropic.com/research/claude-code-sandboxing) | David Dworken、Oliver Weller-Davies | 用文件系统和网络隔离划出能自由行动的范围。他们内部的权限提示少了 84%。 | "In our internal usage, we've found that sandboxing safely reduces permission prompts by 84%." | 03 |
| 2025-10-16 | [Equipping agents for the real world with Agent Skills](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills) | Barry Zhang、Keith Lazuka、Mahesh Murag | Skill 是一组说明书、脚本和材料，用到才读。2025-12-18 他们补了一句：已做成跨平台的开放标准。 | "This led us to create Agent Skills: organized folders of instructions, scripts, and resources that agents can discover and load dynamically to perform better at specific tasks." | 03 |
| 2025-09-29 | [Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) | Prithvi Rajasekaran、Ethan Dixon、Carly Ryan、Jeremy Hadfield | 关键不是把提示词写漂亮，是每次让模型看见哪一截信息。上下文包括提示词以外落进去的全部 token。 | "Context engineering refers to the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference, including all the other information that may land there outside of the prompts." | 03 |
| 2025-09-17 | [A postmortem of three recent issues](https://www.anthropic.com/research/a-postmortem-of-three-recent-issues) | Sam McAllister | 2025 年 8 月到 9 月初，三个基础设施 bug 让 Claude 的回答时好时坏，后来修好了。这是他们自己的事故说明。 | "Between August and early September, three infrastructure bugs intermittently degraded Claude's response quality." | 无关 |
| 2025-09-11 | [Writing effective tools for agents — with agents](https://www.anthropic.com/research/writing-tools-for-agents) | Ken Aizawa | 工具可以有上百个，难的是写得让 agent 真用对。他们用评测和 Claude Code 来改工具本身。 | "The Model Context Protocol (MCP) can empower LLM agents with potentially hundreds of tools to solve real-world tasks. But how do we make those tools maximally effective?" | 03 |
| 2025-06-26 | [Desktop Extensions](https://www.anthropic.com/research/desktop-extensions) | 未署名 | 本地 MCP 服务器在 Claude Desktop 里改成点一下就能装。2025-09-11 起新扩展用 `.mcpb`，旧的 `.dxt` 还能用。 | "But we kept hearing the same feedback: installation was too complex." | 无关 |
| 2025-06-18 | [Confidential Inference via Trusted Virtual Machines](https://www.anthropic.com/research/confidential-inference-trusted-vms) | 未署名 | 他们和 Pattern Labs 写了一套机密推理：数据加密着处理，并且要能证明只有可信服务器读得到。 | "Confidential Inference is a set of tools we can use to process encrypted data and to show that such data is only readable within servers that can prove themselves trustworthy." | 无关 |
| 2025-06-13 | [How we built our multi-agent research system](https://www.anthropic.com/research/multi-agent-research-system) | Jeremy Hadfield、Barry Zhang、Kenneth Lien、Florian Scholz、Jeremy Fox、Daniel Ford | 一个主 agent 拆题，几个子 agent 各查一块再交回来。他们内部研究评测上，这套比单个 Opus 4 高 90.2%。写代码的任务往往没有这么好并行。 | "We found that a multi-agent system with Claude Opus 4 as the lead agent and Claude Sonnet 4 subagents outperformed single-agent Claude Opus 4 by 90.2% on our internal research eval." | 03 |
| 2025-04-18 | [Claude Code: Best practices for agentic coding](https://www.anthropic.com/research/claude-code-best-practices) | Boris Cherny | `CLAUDE.md` 会在对话开始时自动读入，适合写命令、风格和流程，并且要短。2026-01-26 文首声明这篇不再维护，现行说明在 [code.claude.com 的 best practices](https://code.claude.com/docs/en/best-practices)。 | "CLAUDE.md is a special file that Claude automatically pulls into context when starting a conversation." | 03 |
| 2025-03-20 | [The "think" tool](https://www.anthropic.com/research/claude-think-tool) | 未署名 | 给模型一个只记想法、不改数据的工具，复杂工具调用会稳一些。2025-12-15 文首改口：多数情况改用 extended thinking，不必再单独做这个工具。 | "As we continue to enhance Claude's complex problem-solving abilities, we've discovered a particularly effective approach: a \"think\" tool that creates dedicated space for structured thinking during complex tasks." | 无关 |
| 2025-01-06 | [Raising the bar on SWE-bench Verified](https://www.anthropic.com/research/swe-bench-sonnet) | Erik Schluntz | 当时升级版 Claude 3.5 Sonnet 在 SWE-bench Verified 上到 49%，前一名是 45%。同一篇把 agent 定义成模型和外面那层脚手架。 | "In this context, an \"agent\" refers to the combination of an AI model and the software scaffolding around it." | 03 |
| 2024-12-19 | [Building effective agents](https://www.anthropic.com/research/building-effective-agents) | Erik S.、Barry Zhang | 工作流是事先写好的路径；agent 是模型自己决定下一步和用哪个工具。能一次调用解决的，就不要上 agent。文首注：2024 年 12 月之后工具变了，现行做法看 Managed Agents。 | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths. Agents, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks." | 03 |
| 2024-09-19 | [Introducing Contextual Retrieval](https://www.anthropic.com/research/contextual-retrieval) | Daniel Ford | 检索前给每个片段补上它在原文里的位置和含义。失败的检索少 49%，再加上重排少 67%。 | "This method can reduce the number of failed retrievals by 49% and, when combined with reranking, by 67%." | 05 |

## research 栏目另读的一篇

| 日期 | 文章 | 作者 | 一句话结论 | 关键原话 | 页 |
|---|---|---|---|---|---|
| 2026-04-09 | [Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents) | 未署名（Frontier Red Team） | Agent 是模型自己决定怎么完成任务，不是走固定脚本。他们的五条是：人还掌着控制、对齐人的价值、交互要安全、过程看得见、保护隐私。Claude Code 用 Plan Mode 先给人看整份计划，而不是每一步都问。 | "We define an agent as an AI model that directs its own processes and tool use when accomplishing a task—that is, deciding for itself how to achieve what users want, rather than following a fixed script." | 03 |

## 另外三篇

### Matt Pocock《The Home Repo Pattern》

[原文](https://aihero.dev/the-home-repo-pattern)，页面写 Updated Nov 12, 2026，`datePublished` 是 2026-11-12。

一个 Home Repo 放 skills、AGENTS.md 和共用文档。Agent 从这里启动。AGENTS.md 里给其他仓库写路径，缺了就克隆，有了就直接用。每个仓库自己的命令和文档留在原处。

原话："A Home Repo is one repository that holds your skills, your AGENTS.md and your shared docs."

X 上把这套做法写完整的那条是 2026-11-10 13:03（太平洋时间），[status/2120260969750540327](https://x.com/mattpocockuk/status/2120260969750540327)。我读的是这条原文。11 月 12 日他又发了文章链接，那些帖的正文我没有逐条打开，不引。

这条原话："I have a single repo (the home) where all of my skills, steering files, wiki etc live. I run my agent in the home repo, and then inside AGENTS.md I have pointers to the other repos."

和演讲的关系在 03。如果车主说的 home rope 是这个，它是一个放 AI 配置的仓库，不是攀岩的绳子。

### OpenAI《Harness engineering》

[原文](https://openai.com/index/harness-engineering/)，Ryan Lopopolo，2026-02-11。

他们从一个空仓库做起，应用、测试、CI、文档都由 Codex 写，人不直接交代码。大约五个月、三个人起步（后来七人），大约 1500 个 PR，代码量到一百万行这一量级。原话："Humans steer. Agents execute."

AGENTS.md 大约 100 行，只当目录。知识放在 `docs/`，当作 system of record。原话："A short AGENTS.md (roughly 100 lines) is injected into context and serves primarily as a map, with pointers to deeper sources of truth elsewhere." 另一句："The repository’s knowledge base lives in a structured docs/ directory treated as the system of record."

评审可以交给 agent 互看，转完一圈才停，文中把这个循环叫做 Ralph Wiggum Loop。文档有专门的整理 agent 去改过时的说明。以前每周五花两成时间清「AI slop」，清不动，就改成把规矩写进仓库、定时扫。

和演讲的关系在 03 地基：仓库不是 Harness 本身。Harness 是让模型能干活的那套运行方式。仓库里的短地图、`docs/`、检查，是人加在上面的一层。

### 《The components of agent memory》的地址

2026-11-06 那篇不 404。当天 `/engineering/components-of-agent-memory` 会跳到 [research/components-of-agent-memory](https://www.anthropic.com/research/components-of-agent-memory)，打开是 200。摘要在上面的表里。

## 演讲最有用的 5 篇

1. [Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents)（2025-11-26）。03 地基不要说「代码仓库就是 Harness」。原文把 Claude Agent SDK 叫做 harness。仓库里要留的是功能清单、`claude-progress.txt` 和 git，让下一轮从干净状态接着做。
2. [Harness engineering](https://openai.com/index/harness-engineering/)（OpenAI，2026-02-11）。同一页补上一层：AGENTS.md 大约 100 行，只当目录；要长期记住的放 `docs/`。人改的是这套环境，不是亲手写每一行。
3. [The Home Repo Pattern](https://aihero.dev/the-home-repo-pattern)（2026-11-12）。如果车主要讲的是 home rope，就用这个名字。一个仓库放 skills 和共用文档，agent 从这里启动，再按路径去别的仓库。不要说成攀岩的绳子。
4. [Harness design for long-running application development](https://www.anthropic.com/research/harness-design-long-running-apps)（2026-03-24）。03 做大需求、04 维护都可以用：动手前先约定什么叫做完，干活的和打分的分成两个 agent。
5. [Introducing Contextual Retrieval](https://www.anthropic.com/research/contextual-retrieval)（2024-09-19）。05 的规则问答：先检索再答。给切出来的片段补一句它在整篇文档里的位置，检索失败少 49%，再加上重排少 67%。

次一档、这次没放进这 5 篇的：[Building effective agents](https://www.anthropic.com/research/building-effective-agents) 把工作流和 agent 分开；[Building a C compiler](https://www.anthropic.com/research/building-c-compiler) 是 16 个并行、每轮新会话。要展开 03 的定义或 04 的定时任务时再引。
