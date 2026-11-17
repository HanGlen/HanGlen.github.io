/**
 * 青岛中小企业会议的网页演讲稿（/talk/qingdao/），只有中文。
 * 规划和后续页面见 docs/talk-qingdao-plan.md；数字来源记在 docs/worklog.md。
 */

export type Group = 'school' | 'work' | 'trpg' | 'partner';
export type Status = 'done' | 'doing' | 'idea';

export interface Node {
  id: string;
  label: string;
  /** 卡片标签行里的时间，图上不显示 */
  when?: string;
  group: Group;
  status: Status;
  /** 在 1000 × 760 画布里的位置 */
  x: number;
  y: number;
  /** 卡片标签行里的状态，不填就按 status（学校、工作不叫「已上线」） */
  statusText?: string;
  /** 连到哪个节点，默认连中心 */
  links?: string[];
  title: string;
  lines: string[];
  stat?: { v: string; k: string };
  steps?: string[];
  img?: { src: string; alt: string; cap: string };
  /** 在谈的不写名字，卡片也只给一句 */
  quiet?: boolean;
  /** 文字挂在点的哪一边，默认挂下面；用来避开连线和别的字 */
  lab?: 'right' | 'top';
}

export const talk = {
  title: '企业怎么落地定制软件与 AI 能力 · 李睿涵',
  description: '青岛中小企业会议分享：企业怎么落地定制软件与 AI 能力，三个痛点：怎么做出来、怎么维护迭代、怎么用上 AI 能力。',
  keys: '↑ ↓ 翻页 · ← → 切换 · P 讲者备注',

  cover: {
    eyebrow: '青岛中小企业会议 · 分享',
    title: '企业怎么落地\n定制软件与 AI 能力？',
    sub: '今天讲三个痛点',
    pains: ['怎么做出来', '怎么维护迭代', '怎么用上 AI 能力'],
    name: '李睿涵',
    role: 'AI 应用工程师',
    field: '背景里每个点，是 AI 写完并合入的一个 PR',
    fieldNote: '洛山达 DND 助手仓库，6 月 17 日到 11 月 6 日，共 {n} 个',
    next: '往下翻',
    notes: '0.5 分钟。一句话开场：很多企业想做自己的软件、想用上 AI，外面报价从几千到几十万都有。今天讲企业怎么落地定制软件与 AI 能力。今天讲三个痛点：怎么做出来，做出来怎么维护迭代，怎么把 AI 能力用进去。背景这些点都是 AI 替我写完、合进去的代码改动。',
  },

  me: {
    no: '01',
    title: '自我介绍',
    name: '李睿涵',
    role: 'AI 应用工程师 · 西电本硕 · 后端出身',
    hint: '鼠标放到点上，看每件事是什么',
    legendGroup: [
      { k: 'school', v: '学校' },
      { k: 'work', v: '工作' },
      { k: 'trpg', v: '跑团' },
      { k: 'partner', v: '现在合作' },
    ],
    legendStatus: [
      { k: 'done', v: '已上线 / 已完成' },
      { k: 'doing', v: '进行中' },
      { k: 'idea', v: '在谈' },
    ],
    groupName: { school: '学校', work: '工作', trpg: '跑团', partner: '现在合作' } as Record<Group, string>,
    statusName: { done: '已上线', doing: '进行中', idea: '在谈' } as Record<Status, string>,
    notes:
      '2 分钟。四组按颜色讲：学校、工作、跑团、现在合作。暗线：华为是人写代码；比亚迪时我把 AI 引进团队；6 月起小程序整个交给 AI 团队。合作方的公司名、人名只口头讲。',
    nodes: [
      {
        id: 'xidian',
        label: '西电本硕',
        when: '2016–2025',
        group: 'school',
        status: 'done',
        statusText: '已毕业',
        x: 150,
        y: 205,
        title: '西安电子科技大学',
        lines: ['电子信息工程本科（2016–2020）。', '电子信息硕士（2022–2025），论文做心电和皮电的压力分类。'],
      },
      {
        id: 'signal',
        label: '西电 · 第四军医大校企联合项目',
        when: '2022–2025',
        group: 'school',
        status: 'done',
        statusText: '已完成',
        x: 330,
        y: 80,
        links: ['xidian'],
        title: '应激生理监测系统',
        lines: ['西电和第四军医大那边军工企业的校企联合项目，腕表采集心电、脉搏波和皮电。', '我是软件总负责人：桌面、Web、App、云端四端和压力分类模型。'],
        stat: { v: '3 项', k: '软著，另获国赛三等奖' },
      },
      {
        id: 'huawei',
        label: '华为',
        group: 'work',
        status: 'done',
        statusText: '曾任职',
        x: 600,
        y: 75,
        title: '华为 · Java 后端',
        lines: ['后端系统的开发与联调。', '那时候代码全靠人一行行写。'],
      },
      {
        id: 'byd',
        label: '比亚迪',
        group: 'work',
        status: 'done',
        statusText: '曾任职',
        x: 805,
        y: 150,
        title: '比亚迪 · 高级系统开发工程师',
        lines: ['品质管理系统后端，全球业务、百万级用户。', '给团队引入 Trae 等 AI Agent，写 Skill、定使用规范。'],
      },
      {
        id: 'dnd',
        label: '洛山达 DND 助手\n微信小程序',
        group: 'trpg',
        status: 'done',
        lab: 'right',
        x: 690,
        y: 440,
        title: '洛山达 DND 助手 · 微信小程序',
        lines: ['帮玩家建 D&D 角色卡、开团的微信小程序。', '今年 6 月起交给几种 AI 分工维护，我只提想法、审方案、发版。'],
        stat: { v: '1.46 万', k: '累计用户（截至 11 月 6 日）' },
      },
      {
        id: 'box',
        label: '冒险匣子\n跑团店定制规则',
        group: 'trpg',
        status: 'done',
        x: 890,
        y: 265,
        title: '冒险匣子 · 跑团店定制规则',
        lines: ['和西安的跑团店冒险匣子合作，给店里定制规则。', '店家原创的「诸神之匣」做进了小程序。'],
      },
      {
        id: 'tavern',
        label: '自媒体',
        group: 'trpg',
        status: 'doing',
        x: 625,
        y: 640,
        links: ['dnd'],
        title: '晨曦酒馆 · 跑团自媒体',
        lines: ['一个人做的跑团动画账号，脚本、画面、配音、剪辑分给不同的 AI。', '目标是国内跑团领域的大号。'],
        img: { src: '/shots/tavern/cover.jpg', alt: '晨曦酒馆封面：酒馆里举杯的矮人老板和抱着书跑进来的半身人', cap: '第一条《晨曦酒馆今天开张》的封面' },
      },
      {
        id: 'studio',
        label: '装修工作室 · 跑团店',
        group: 'trpg',
        status: 'doing',
        x: 845,
        y: 610,
        links: ['dnd'],
        title: '装修工作室 · 跑团店',
        lines: ['正在推进。', '跟小程序连在一起：线上的玩家，线下的店。'],
      },
      {
        id: 'talk-trpg',
        label: '跑团店 · 定制规则',
        group: 'trpg',
        status: 'idea',
        lab: 'top',
        x: 950,
        y: 400,
        title: '一家跑团店 · 定制规则',
        lines: ['跑团店家合作，定制规则，在谈。'],
        quiet: true,
      },
      {
        id: 'gschool',
        label: 'G School · 教育',
        group: 'partner',
        status: 'doing',
        x: 250,
        y: 560,
        title: 'G School · 教育赛道',
        lines: ['给初高中老师和学生用的 AI 项目制学习平台，北京十一丰小等多所学校在用。我负责开发和维护。', '在歌尔学校带学生做 AI 公司项目。'],
        steps: ['选兴趣', '项目卡', '能力要求', '里程碑', '测试', '结果'],
        img: { src: '/shots/talk/gschool-team.jpg', alt: '团队背景：哈佛、哥伦比亚、伊利诺伊、北航、微软亚洲研究院、美国东北大学等', cap: '团队背景，摄于课堂' },
      },
      {
        id: 'traffic',
        label: '吊车租赁平台',
        group: 'partner',
        status: 'doing',
        x: 430,
        y: 665,
        title: '吊车租赁平台',
        lines: ['一家交通运输企业，像货拉拉那样在线叫吊车。', '吊车租赁平台的开发，我来负责推进。'],
      },
      {
        id: 'talk-trade',
        label: '外贸平台',
        group: 'partner',
        status: 'idea',
        x: 110,
        y: 410,
        title: '外贸平台',
        lines: ['外贸平台的开发，在谈。'],
        quiet: true,
      },
    ] as Node[],
  },

  /**
   * 02 AI 和数字化用到多深：四块色块图（每格 1%），颜色越深 = 用得越深，后一个数落在前一个里面。
   * ← → 一个数一个数讲。数字来源记在 docs/worklog.md
   */
  gap: {
    no: '02',
    title: 'AI 和数字化，用到多深了',
    lead: '每格 1%，颜色越深，用得越深。',
    blocks: [
      {
        k: '个人用 AI',
        who: '美国成年人',
        kind: 'ai',
        items: [
          { v: 64, big: '64%', text: '半年内用过 AI', ref: 1 },
          { v: 26, big: '26%', text: '试过 AI Agent', ref: 1 },
          { v: 15, big: '15%', text: '经常用 Agent', ref: 1 },
        ],
        note: { big: '超 50%', text: '中国用过生成式 AI，7 亿多人', ref: 2 },
      },
      {
        k: '上班用 AI',
        who: '美国员工',
        kind: 'ai',
        items: [
          { v: 52, big: '52%', text: '工作中用过 AI', ref: 3 },
          { v: 30, big: '30%', text: '每周用几次', ref: 3 },
          { v: 15, big: '15%', text: '每天用，嵌进工作流', ref: 3 },
        ],
      },
      {
        k: '企业数字化',
        who: '中国 10 万余家企业',
        kind: 'dig',
        items: [
          { v: 15, big: '15%', text: '靠数据跑业务', ref: 5 },
          { v: 2, big: '1.7%', text: '全部业务打通', ref: 5 },
        ],
        note: { big: '86%', text: '重点工业企业用上数字化研发设计工具', ref: 4 },
      },
      {
        k: '企业用 AI',
        who: '全球企业',
        kind: 'ai',
        items: [
          { v: 88, big: '近 90%', text: '至少一个部门在用 AI', ref: 6 },
          { v: 44, big: '44%', text: '在全公司铺开', ref: 6 },
          { v: 6, big: '6%', text: 'AI 带来了显著利润', ref: 6 },
        ],
        note: { big: '约 14%', text: '中国中小企业把 AI 用进核心业务', ref: 7 },
      },
    ],
    end: '人人都在用 AI，用进业务的企业还很少：这正是定制软件要做的事。',
    refs: [
      'Menlo Ventures，2026-09，5,067 名美国成年人；26%、15% 按 AI 用户里的 41%、24% 折算',
      'CNNIC，2026-09',
      'Gallup，2026-05，22,573 名美国员工',
      '工信部国新办发布会，2026-07-20，重点工业企业',
      '中信联、点亮智库《企业数字化转型指数报告（2025）》，10 万余家',
      'McKinsey《The State of AI in 2026》，2026-08，1,719 份；6% = AI 贡献 5% 以上利润',
      '中国信通院，2026-03，按已应用企业里的 23% + 4% 折算',
    ],
    notes:
      '2.5 分钟。← → 一个数一个数讲，颜色越深用得越深。个人：美国成年人 64% 半年内用过 AI，试过 Agent 的四分之一，经常用的 15%；中国也一样，用过生成式 AI 的超过一半、7 亿多人。上班：一半人用过，每天用、真正嵌进工作流的 15%。企业数字化：10 万多家企业里，真正靠数据跑业务的只有 15%，全部打通的不到 2%；对比一下，重点工业企业的数字化工具 86% 都用上了，工具有了，业务还没跑在数据上。企业 AI：近九成至少一个部门在用，在全公司铺开的 44%，真正带来显著利润的只有 6%；国内中小企业用进核心业务的约 14%。收尾：人人都在用，用进业务的很少，这正是定制软件要做的事。全球劳动年龄人口用过生成式 AI 的是 18.8%（微软，2026 年 6 月），被问到可以口头补。',
  },

  /**
   * 03 怎么做出来：先备工具、把仓库做成 Harness，再从最小的一张单讲到一个大需求（Project）、一堆需求。
   * 「推荐流程」车主 2026-11-17 定挪到后面讲（配置好以后能做到什么），先不放这页。
   */
  make: {
    no: '03',
    kicker: '痛点一',
    title: '怎么做出来',
    lead: '从最小的一张单讲起，一步步变大。',
    hint: '← → 下一步',
    levels: [
      {
        k: '工具准备',
        tag: 'Tools',
        q: '先看需求，再挑工具',
        plain: '工具分四类：入门用国产的上手快，顺手了再换进阶的。',
        case: '我用 Claude Code 写前端、Codex 写后端，代码放 GitHub，任务放 Linear。',
      },
      {
        k: '地基',
        tag: 'Harness',
        q: '代码仓库，就是 AI 的 Harness',
        plain: '模型是攀岩的人；仓库里的规则、检查、规范，是绳子和安全带。',
        case: '规则文档限 60 行，出一次错补一条；183 道自动检查。',
        src: 'Claude Code、Codex 本身是一层现成的 Harness（读写文件、跑命令）；仓库里的规则和检查是你加的那一层。攀岩比喻：Tejas Kumar，AI Engineer World\'s Fair。Anthropic 2026-03：模型变强后，删掉了整整一层脚手架。',
      },
      {
        k: '一张单',
        tag: 'Spec',
        q: '最简单的一个改动，怎么做？',
        plain: '写清一张单，AI 开发，另一个 AI 评审，检查全过才合并。',
        case: '10 月 29 日一条玩家反馈：把「灵感」改成「激励」，2.5 小时合入。',
        src: 'Anthropic 2026-03：把干活的和评判的 agent 分开。',
      },
      {
        k: '一个大需求',
        tag: 'Project + Loop',
        q: '大一点的需求呢？',
        plain: '一个大需求就是一个 Project：AI 先切成小单，定时任务每轮领一张，循环做完。',
        case: '「约团排期」：14:30 写方案，切成 6 片，20:57 全部合入。',
        src: 'Anthropic 2026-02：16 个 Claude 并行，每轮开新会话，领下一个任务。',
      },
      {
        k: '一堆需求',
        tag: 'Triage',
        q: '一堆大需求怎么办？',
        plain: '分诊 AI 把它们拆成一个个 Project，里面全是最小的单；定时任务一直跑就行。',
        case: '5 个月 1,633 个 PR，最近 30 天平均每天 26 个。',
      },
    ],
    toolsHead: ['类型', '入门', '进阶'],
    tools: [
      { k: '写代码的 AI', v: ['WorkBuddy', 'Trae'], pro: ['Claude Code', 'Codex'] },
      { k: '放代码', v: ['GitHub'], pro: ['GitHub'], same: '直接用 GitHub' },
      { k: '管任务', v: ['GitHub Issues'], pro: ['Linear'] },
      { k: '收反馈', v: ['飞书表格'], pro: ['自动转成任务单'], opt: '可选' },
    ],
    models: {
      k: '挑模型看这几个榜',
      links: [
        { k: 'SWE-bench', href: 'https://www.swebench.com' },
        { k: 'LMArena', href: 'https://lmarena.ai/leaderboard/webdev' },
        { k: 'Artificial Analysis', href: 'https://artificialanalysis.ai' },
        { k: 'OpenRouter', href: 'https://openrouter.ai/rankings' },
      ],
    },
    harness: {
      model: '模型',
      modelV: '攀岩的人',
      ring: '代码仓库 = Harness',
      ringV: '绳子和安全带',
      parts: ['规则文档', '自动检查', '工程规范', '任务记录'],
    },
    ticket: [
      { k: '需求单', en: 'Spec', ex: '「灵感」改成「激励」' },
      { k: 'AI 开发', en: 'Coding Agent', ex: 'Claude 改代码' },
      { k: '申请合入', en: 'Pull Request', ex: '提交一个 PR' },
      { k: 'AI 代码评审', en: 'Code Review', ex: 'Codex 审' },
      { k: '门禁检查', en: 'CI', ex: '183 道 · 15 分钟' },
      { k: '合并', en: 'Merge', ex: '11:21 合入' },
    ],
    retry: '代码评审、门禁检查，任一不过都打回重改',
    need: {
      req: '一个大需求',
      project: 'Project',
      ana: 'AI 需求分析',
      slice: '切成小单',
      loop: '定时任务',
      loopV: '每轮领一张',
      one: '一张单',
      done: '全部合入',
      whoK: '不同的 AI 擅长不同的单',
      who: [
        { ai: 'Claude', v: '前端、界面' },
        { ai: 'Codex', v: '后端、美术' },
      ],
    },
    triage: {
      pile: '一堆需求',
      sources: ['我的想法', '用户反馈', 'AI 发现的问题'],
      butler: '分诊 AI',
      butlerV: '拆成最小的单，排好顺序',
      projects: ['Project A', 'Project B', 'Project C'],
      loop: '定时任务',
      loopV: '一直跑',
      done: '合入',
    },
    caseK: '例子',
    srcK: '依据',
    notes:
      '6 分钟。← → 一步步讲。工具：先看需求再挑，分四类，入门用 WorkBuddy、Trae 这些国产的，顺手了换 Claude Code、Codex；代码直接放 GitHub；任务入门用 GitHub Issues，进阶用 Linear；收反馈的表格可有可无。地基：代码仓库就是 AI 的 Harness，模型是攀岩的人，规则、检查、规范是绳子和安全带；东西都在仓库里，AI 哪家好用换哪家。一张单：先抛问题「最简单的一个改动怎么做」，上面一行是说法，下面一行是同一张单的真实记录；评审和检查任一不过都打回。传统软件团队也是这套流程，只是每一步换成了 AI。大需求：这张单缩进定时任务里，一个大需求就是一个 Project，AI 先分析、切成小单，一个定时任务每轮领一张；补一句不同 AI 擅长不同的单，Claude 做前端，Codex 做后端和美术。一堆需求：上一步那一整套缩成一个 Project；一堆需求先框起来交给分诊 AI，拆成一个个 Project，Project 里全是最小的单，定时任务一直跑就行。',
  },

  /** 04 痛点二：怎么维护和迭代 */
  keep: {
    no: '04',
    kicker: '痛点二',
    title: '怎么维护和迭代',
    lead: '用户的一句反馈，怎么变成上线的改动。',
    hint: '← → 一步步讲',
    nodes: [
      { k: '用户提反馈', who: '用户', what: '在小程序里写一句话。', more: '自动存进飞书表。' },
      { k: 'AI 审核', who: 'AI · 定时', what: '查重、开单、写好回复。', more: '每小时回到小程序「我的反馈」，有效的发金币。', back: true },
      { k: '开发', who: 'AI · 轮班', what: '规划切片 → 开发 → 检查 → 合入。', more: '就是痛点一讲的那套流程。' },
      { k: '上线告诉用户', who: '我', what: '工作日晚上发版。', more: '版本公告里写这次改了什么。', back: true },
    ],
    backLabel: '回到用户',
    clocks: [
      { k: '反馈转单', v: '定时' },
      { k: '回复回写', v: '每小时' },
      { k: 'issue 管家', v: '定时' },
      { k: '执行 × 3', v: '轮班' },
      { k: '发版', v: '工作日晚上' },
    ],
    clocksK: '谁在什么时候动',
    proof: '实例：10 月 29 日一条反馈，2.5 小时合入，中间没人参与。',
    notes:
      '2.5 分钟。按 → 走四步，重点是两次「回到用户」：审核完马上回一句，上线后再告诉一次。下面那排是定时任务：没有人守着，靠钟点轮班。2.5 小时那条讲细节：AI 开单、两小时后定时任务领单、1 分钟改完、另一个 AI 评审、15 分钟检查、自动合并。',
  },

  /** 05 痛点三：怎么用上 AI 能力。案例是小程序的规则问答（2026-11 上线） */
  ai: {
    no: '05',
    kicker: '痛点三',
    title: '怎么用上 AI 能力',
    lead: '不是接一个聊天框，而是让 AI 答得有依据、错了能查、花钱有数。',
    hint: '← → 一步步讲',
    steps: [
      { k: '理解问题', en: 'Understand', v: '把大白话改写成一个独立、完整的问题，拆出要查的规则点。' },
      { k: '查原文', en: 'Retrieve', v: '在 35 本规则书原文里检索，找出相关段落。' },
      { k: '回答', en: 'Generate', v: '只根据查到的原文作答，分结论、解释、出处三段。' },
      { k: '逐句核对', en: 'Verify', v: '每一句对回原文，对不上的删掉；查不到就直说没找到依据。' },
    ],
    caseK: '我的案例：规则问答',
    caseV: '玩家打团时问「被擒抱了怎么挣脱」，不用翻书。11 月上线。',
    img: { src: '/shots/talk/rules-qa.jpg', alt: '规则问答截图：结论、解释和两条已核对的规则书原文', cap: '小程序截图：每条原文标着出自哪本书哪一节' },
    map: {
      k: '换成你的公司',
      rows: [
        { from: '35 本规则书', to: '制度、产品手册、合同模板、历史工单' },
        { from: '玩家提问', to: '员工、客户、销售的提问' },
      ],
    },
    rules: [
      { k: '有出处', v: '每句话都能点开原文，员工敢用。' },
      { k: '能报错', v: '答错了一键报错，核实后退回金币。' },
      { k: '花钱有数', v: '按次计费、设月度上限，成本算得清。' },
    ],
    end: '用 AI 做 AI 功能：这套问答本身，也是 AI 团队按前面的流程做出来的。',
    notes:
      '3 分钟。很多老板想「把 AI 放进软件」，第一反应是接个聊天框，问题是它会乱答。我的做法分四步：理解、查原文、回答、逐句核对。现场打开截图讲擒抱那题。然后换成企业：规则书换成你的制度和手册。最后三条：有出处、能报错、花钱有数。收尾一句：这个 AI 功能本身，也是 AI 团队做的。',
  },

  /** 06 给老板的验收清单 */
  check: {
    no: '06',
    title: '找人做定制软件，先问这五句',
    lead: '不管是外包、自己的员工还是我来做，都可以这么问。',
    head: ['问什么', '好的回答', '我的小程序'],
    items: [
      { q: '代码仓库在谁名下？', good: '在你公司的账号下，随时能拿走。', mine: 'GitHub 仓库，换哪家 AI 都接得上。' },
      { q: '有没有规则文档？', good: '写清楚这个项目怎么干，换人换 AI 都能接手。', mine: 'AGENTS.md，限 60 行，出过错就补一条。' },
      { q: '有没有自动检查？', good: '每次改动都自动跑测试，不靠人盯。', mine: '183 道检查，不过不合并。' },
      { q: '问题从哪提，怎么跟踪？', good: '每个问题有单号，查得到谁在修、修到哪。', mine: '玩家反馈汇总进表格，分诊后开成任务单。' },
      { q: '改一个小问题要多久？', good: '说得出具体时间，有记录可查。', mine: '10 月 29 日那条反馈，2.5 小时合入。' },
    ],
    hint: '← → 一句句讲',
    notes: '2 分钟。五句话对应前面三个痛点：前两句是「做出来」，后三句是「管得住」。讲完说：这五句答不上来的，报价再低也要小心。',
  },
};
