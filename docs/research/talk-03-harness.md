# 演讲 03 页「地基」：Harness 是什么、沉淀经验怎么讲

> HAN-1821。2026-11-17 定稿。只调研，不改页面。页面改动交给 HAN-1823。
> 查到原文的才写。听岔了的标「推测」。日期是文章自己标的；转载才有日期的，单独说明。

## 1. 结论（给改页面的人）

现成的编程工具是 Harness。仓库里的规则、检查、技能说明、任务记录，是你在这层外面又加上去的。加上去、并且越摔越补，这件事叫 Harness engineering。

页面现在这几句要换：

| 现在 | 建议 |
|---|---|
| 问题：「代码仓库，就是 AI 的 Harness」 | 「现成的工具外面，还要自己加什么？」 |
| 大白话：「模型是攀岩的人；仓库里的规则、检查、规范，是绳子和安全带。」 | 「Claude Code、Codex 是现成的 Harness。仓库里的规则和检查，是摔过一次就补上的。」 |
| 例子：「规则文档限 60 行，出一次错补一条；183 道自动检查。」 | 「用中文名判断职业，就加一道检查；换行被整文件翻乱，也加一道检查。」 |
| 图的外圈：「代码仓库 = Harness」 | 外圈标题改成「你加上的规矩」。中圈才是「现成 Harness」。 |

依据里那句方向是对的，可以留：「Claude Code、Codex 本身是一层现成的 Harness；仓库里的规则和检查是你加的那一层。」攀岩的出处和「删掉整整一层脚手架」要改准，见第 4、5 节。

## 2. Harness 的定义

各家用词不一样，减掉模型之后剩下的那一层，是共识。

| 来源 | 日期 | 原话 |
|---|---|---|
| Anthropic，Justin Young，[Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) | 2025-11-26 | 「The Claude Agent SDK is a powerful, general-purpose agent harness adept at coding, as well as other tasks that require the model to use tools to gather context, plan, and execute.」 |
| LangChain 文档 [Agents](https://docs.langchain.com/oss/python/langchain/agents) | 页面未标日期，2026-11-17 查阅 | 「An agent is a model calling tools in a loop until a given task is complete. A harness is everything around that loop: the prompt, the tools, and any middleware that shapes the model's behavior.」同页：「Agent = Model + Harness。」 |
| Tejas Kumar，[What Is an Agent Harness?](https://tej.as/blog/what-is-an-agent-harness) | 2026-09-14 | 「An agent harness is everything around the model that gives it grounding in reality.」他并写 Claude Code「is a harnessed coding agent」。 |
| Mitchell Hashimoto，[My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey) | 2026-02-05 | 他把改进这一层叫做 harness engineering：「anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again.」 |
| OpenAI，Ryan Lopopolo，[Harness engineering](https://openai.com/index/harness-engineering/) | 2026-02-11 | 文章讲的是怎么设计仓库，让 Codex 能可靠干活。原话：「Humans steer. Agents execute.」 |

Anthropic《Building effective agents》（Erik S.、Barry Zhang，2024-12-19）还没有用 Harness 这个词。它把 agent 写成「LLMs using tools based on environmental feedback in a loop」，并说「finding the simplest solution possible, and only increasing complexity when needed」。2026-03-24 的长任务文章把这句当成维护 harness 的原则，见第 5 节。

## 3. 由哪些部分组成

三份拆法对得上的是：工具、上下文（含记忆和压缩）、权限和护栏、循环、做完之后的检查。系统提示词算上下文这一份。子 agent、钩子是有的来源单列、有的来源并进循环或中间件，不算每家都有的必选项。

| 部分 | Anthropic 2025-11-26 | LangChain 文档（2026-11-17 查阅） | Tejas Kumar 2026-09-14 |
|---|---|---|---|
| 工具 | 读写、跑命令、浏览器 | Execution environment：工具、文件系统、沙箱、跑代码 | Tool registry |
| 上下文 / 记忆 | compaction；进度文件和 git 历史给下一轮看 | Context management：摘要、记忆、skills | Context management |
| 权限 / 护栏 | 脚注把 system prompt、工具和 harness 当成运行时 | Guardrails；人工批准放在 Steering | Guardrails，例如最多几步 |
| 循环 | 会话之间接着干 | 模型在循环里调工具 | Agent loop。他写明：harness 是循环外面的东西，也可以是套在循环外面的又一层循环 |
| 检查 | 用浏览器把功能当真的用户走一遍，再改 `passes` | 文档把验证放在工具和中间件里，没有单独成行 | Verify step。编码时就是跑 lint 和测试 |
| 子 agent / 钩子 | 文末当未决问题：一个通用 agent，还是测试、质检、收拾代码各做一个 | Planning and delegation：待办和 subagent。钩子是 middleware：`before_model`、`wrap_tool_call` 等 | 六件套里没有单独的钩子。登录这种确定性步骤由 harness 自己做，不交给模型 |

有一处不一致，要分开说。LangChain 把模型放在 Harness 外面（Agent = Model + Harness）。Tejas 的六件套把「选哪个模型」也算 harness 的一个零件。演讲用前一种：中间是模型，外面才是 Harness。

## 4. 「代码仓库 = Harness」

这句话和上面的定义对不上。Claude Code、Codex 是现成的 Harness：它们自带循环、工具、上下文压缩和权限。仓库是它们的工作目录，也是你往 Harness 上加东西的地方。

OpenAI 把仓库里的做法叫做 harness engineering，原文已核对，初步调研里「待核」可以划掉：

- 「So instead of treating `AGENTS.md` as the encyclopedia, we treat it as the table of contents.」
- 「A short `AGENTS.md` (roughly 100 lines) is injected into context and serves primarily as a map, with pointers to deeper sources of truth elsewhere.」深层知识放在 `docs/`，叫做 system of record。
- 「Human taste is fed back into the system continuously. … When documentation falls short, we promote the rule into code.」自定义 linter 的报错「inject remediation instructions into agent context」。

给老板的一句：**模型负责想。Claude Code、Codex 负责动手。你在仓库里写下的规矩和检查，让下一轮不用再犯同一类错。**

Home Repo 是另一件事。Matt Pocock《The Home Repo Pattern》（[aihero.dev](https://aihero.dev/the-home-repo-pattern)）的原话是：「A Home Repo is one repository that holds your skills, your AGENTS.md and your shared docs.」正文抓取时没有日期行；[daily.dev](https://daily.dev/posts/the-home-repo-pattern-9pa2c6vi1) 和 [wpnews.pro](https://wpnews.pro/news/the-home-repo-pattern) 都标 2026-11-12。它解决的是好几个仓库各放一份技能说明、对不齐。和「Harness 是什么」无关。

车主口头的「home rope」，本文查过的原文里没有这个词。**推测：** 听成了 Home Repo。等车主确认之前，不上页面。

## 5. 攀岩比喻

Tejas Kumar 自己写过这个比喻，场合是 AI Engineer Europe 2026，文章日期 2026-09-14。原话：「A climber harnesses themselves to a mountain: the mountain is stable and they are not.」安全带的作用是接住坠落，对应护栏和检查；绳子选方向，对应循环和工具。他接着写：「The metaphor stops there, though: a rope can't tell you whether the climber reached the top. A harness for agents has to check that too.」

页面现在写的「模型是攀岩的人，仓库是绳子和安全带」，以及「出处：AI Engineer World's Fair」，都和这篇对不上。World's Fair 2026 那场是评测工作坊，他在里面回溯的是 Europe 那场讲 Harness 的演讲（[tej.as 工作坊页](https://tej.as/talks/ai-engineer-world-s-fair-2026-workshop)）。ryanparsley.codeberg.page/basic-harness 把场次写成 World's Fair，是二手，而且本次抓取超时，不引用它的转述。

建议：这页不用攀岩。讲者备注如果要留一句，用他的原意：Harness 把模型拴在你控制得住的环境上，并且要自己检查做到了没有。

「模型变强后，删掉了整整一层脚手架」也比原文宽。Anthropic《Harness design for long-running application development》（2026-03-24）写的是两件具体的删：Opus 4.5 自己少了 context anxiety，于是「I was able to drop context resets from this harness entirely」；换到 Opus 4.6，又去掉了按 sprint 把任务切开的那一层。收束句是：「when a new model lands, it is generally good practice to re-examine a harness, stripping away pieces that are no longer load-bearing.」依据可以改成这句，不要说「删掉整整一层」。

## 6. 图

三层，每层最多四个词。外圈是仓库里你加的东西，中圈是工具自带的，中间是模型。

```
┌ 你加上的规矩 ─────────────────┐
│ 规则文档    自动检查          │
│ 技能说明    任务记录          │
│   ┌ 现成 Harness ──────────┐ │
│   │ 工具      循环          │ │
│   │ 权限      上下文        │ │
│   │      ┌ 模型 ┐          │ │
│   │      └──────┘          │ │
│   └────────────────────────┘ │
└──────────────────────────────┘
```

中圈四个词对应第 3 节的共识：工具、循环、权限（含护栏）、上下文（含记忆和压缩）。外圈四个词对应仓库里真有的东西，见第 7 节。子 agent 和钩子放不进这四个词，留在依据里，不画。

## 7. 沉淀经验：叫什么，小程序里哪四件

业内把「摔过一次就写进仓库」分成几样，不要合成一句「出一次错补一条」：

| 做法 | 专业叫法 | 一手出处 |
|---|---|---|
| 短规则当地图，细节放 `docs/` | AGENTS.md 是目录，不是百科 | OpenAI 2026-02-11，见第 4 节 |
| 一类错写成会失败的检查，报错里写明怎么改 | 自定义 linter；「promote the rule into code」 | OpenAI 2026-02-11；Hashimoto 2026-02-05 把同类做法叫做 harness engineering |
| 操作步骤写成用到才读的说明 | Agent Skills。原话：「organized folders of instructions, scripts, and resources that agents can discover and load dynamically」 | Anthropic，[Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)，2025-10-16 |
| 做完留下进度，下一轮读得懂 | 进度文件 + git 历史 | Anthropic 2025-11-26：「a claude-progress.txt file that keeps a log of what agents have done」 |

架构决策记录（ADR）这次没有在小程序仓库里对上同名目录，不写进例子。

下面四件都在 `HanGlen/dnd-miniprogram` 的 `dev` 上，树 `f1bd17a15b798b7bd456eaa5688c8dd3b770f692`（2026-11-17 查阅）。仓库是私有的，页面上可以写 PR 编号，不要做成外链。

1. **规则文档当地图。** `AGENTS.md` 开头写明细节下沉到 `docs/`，文末有文档索引，链到工作流、任务约定和架构。这和 OpenAI「AGENTS.md 是目录，`docs/` 是 system of record」是同一件事。页上不要写行数限制。
2. **用中文名判断职业，就写成检查。** `tools/check-no-hardcoded-name-logic.js` 拦 `x === '中文名'` 这种机制判断，已有的记进基线，只拦新增。PR [#672](https://github.com/HanGlen/dnd-miniprogram/pull/672) 于 2026-08-14 合入，正文写：这条本来只在规则文档里，巡航才查得出来。关联 issue #666。
3. **同一个英文名长出第二种译法，就写成检查。** `check:translation` 扫数据和翻译表。PR [#858](https://github.com/HanGlen/dnd-miniprogram/pull/858) 于 2026-08-25 合入，正文写：以前只能靠人巡检。关联 issue #850。
4. **一次推送把整份文件的换行翻乱，就写成检查。** PR #760 走 git database API，绕过了换行归一，`gate-watchdog.js` 真实改动 27 行，diff 变成整份文件重写。行尾检查随 PR [#767](https://github.com/HanGlen/dnd-miniprogram/pull/767) 在 2026-08-21 合入：这次合入的提交说明里有「feat: 加行尾门禁」，写明起因是 #760；PR 标题本身是 runner 自愈。检查只看这次改动新带进来的 CR。

技能说明也在仓库里，可作口头补充，不必上这四个例子：`.agents/skills/wechat-ui-qa/SKILL.md`（微信开发者工具里怎么测界面），`.claude/skills/wechat-post/SKILL.md`（发公众号）。`AGENTS.md` 写明用到才去读。

任务记录在这个仓库里是 Linear 单和 PR 正文，不是 Anthropic 那个 `claude-progress.txt`。图上的「任务记录」指的是这件事。

## 8. 「183 道」重数

网站笔记《183 道门禁是怎么来的》（2026-10-29）写了 183。`docs/worklog.md` 没有记下这个数是怎么数的。

按顶层 `tests/test-*.js` 重数，对不上 183：

| 日期 | 提交 | 顶层 `tests/test-*.js` | `tools/check-*.js` |
|---|---|---|---|
| 2026-10-29 | `7622d664`（当天 `dev` 最后一次合入） | 508 | 12 |
| 2026-11-17 | `f1bd17a` | 710 | 13 |
| 2026-11-18 | `92b1003`（北京时间 00:14，`dev` 最新） | 714 | 13 |

HAN-1833（2026-11-18）把口径定成顶层 `tests/test-*.js`。`package.json` 里 `check:*` 只有 12 条，笔记里的 `test:skin-tokens-only` 不在里面。CI 的 `test` job 把没单列的脚本和孤儿测试文件收进 `test:headless` 一步，数 yaml 步骤会把文件藏起来。`tools/run-headless-tests.js` 写明：顶层 `tests/test-*.js` 要进 CI。页上统一用 714，日期是上面这一行。
