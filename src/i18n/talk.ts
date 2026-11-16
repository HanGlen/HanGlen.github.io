/**
 * 青岛中小企业会议的网页演讲稿（/talk/qingdao/），只有中文。
 * 规划和后续页面见 docs/talk-qingdao-plan.md；数字来源记在 docs/worklog.md。
 */

export type Rel = 'past' | 'own' | 'partner';
export type Status = 'done' | 'doing' | 'idea';

export interface Node {
  id: string;
  label: string;
  /** 卡片标签行里的一句，例如「2021.04–2021.09」 */
  when?: string;
  rel: Rel;
  status: Status;
  /** 在 1000 × 760 画布里的位置 */
  x: number;
  y: number;
  /** 连到哪个节点，默认连中心 */
  links?: string[];
  title: string;
  lines: string[];
  stat?: { v: string; k: string };
  steps?: string[];
  img?: { src: string; alt: string; cap: string };
  /** 在谈的不写名字，卡片也只给一句 */
  quiet?: boolean;
}

export const talk = {
  title: '中小企业定制软件：做得出，管得住 · 李睿涵',
  description: '青岛中小企业会议分享：中小企业怎么低成本落地定制软件，用 AI 做出来，用流程管下去。',
  keys: '↑ ↓ 翻页 · ← → 切换 · P 讲者备注',

  cover: {
    eyebrow: '青岛中小企业会议 · 分享',
    title: '定制软件，\n做得出，也管得住。',
    sub: '中小企业怎么低成本落地定制软件：用 AI 做出来，用流程管下去。我一个人带一支 AI 研发团队，就是这么做的。',
    name: '李睿涵',
    role: 'AI 应用工程师',
    field: '背景里每个点，是 AI 写完并合入的一个 PR',
    fieldNote: '洛山达 DND 助手仓库，6 月 17 日到 11 月 6 日，共 {n} 个',
    next: '往下翻',
    notes: '0.5 分钟。一句话开场：很多企业想做自己的软件，外面报价从几千到几十万都有，今天讲专业的做法分两半：怎么做出来，做出来怎么管。背景这些点都是 AI 替我写完、合进去的代码改动。',
  },

  me: {
    no: '01',
    title: '我是谁',
    lead: '中间是我，周围是我做过和正在做的事。',
    name: '李睿涵',
    role: 'AI 应用工程师 · 西电本硕 · 后端出身',
    hint: '把鼠标放到点上，看每件事是什么',
    told: '已讲 {n} / {m}',
    end: '从比亚迪出来后，我连上了这些。',
    legendRel: [
      { k: 'past', v: '过去的经历' },
      { k: 'own', v: '我自己的项目' },
      { k: 'partner', v: '合作项目' },
    ],
    legendStatus: [
      { k: 'done', v: '已上线 / 已完成' },
      { k: 'doing', v: '进行中' },
      { k: 'idea', v: '在谈 / 构思' },
    ],
    relName: { past: '过去的经历', own: '我自己的项目', partner: '合作项目' } as Record<Rel, string>,
    statusName: { done: '已上线', doing: '进行中', idea: '在谈' } as Record<Status, string>,
    notes:
      '2 分钟。按自己想讲的顺序把鼠标放到点上，讲过的会一直亮着。暗线：华为是人写代码；比亚迪时我把 AI 引进团队；6 月起小程序整个交给 AI 团队。教育团队负责人的名字和学历只口头讲，页面上不写。',
    nodes: [
      {
        id: 'xidian',
        label: '西电本硕',
        when: '2016–2025',
        rel: 'past',
        status: 'done',
        x: 120,
        y: 175,
        title: '西安电子科技大学',
        lines: ['电子信息工程本科（2016–2020）。', '电子信息硕士（2022–2025），论文做心电和皮电的压力分类。'],
      },
      {
        id: 'signal',
        label: '应激监测系统',
        when: '2022–2025',
        rel: 'past',
        status: 'done',
        x: 285,
        y: 78,
        links: ['xidian'],
        title: '应激生理监测系统',
        lines: ['西电和第四军医大的联合项目，腕表采集心电、脉搏波和皮电。', '我是软件总负责人：桌面、Web、App、云端四端和压力分类模型。'],
        stat: { v: '3 项', k: '软著，另获国赛三等奖' },
      },
      {
        id: 'huawei',
        label: '华为 OD',
        when: '2021.04–2021.09',
        rel: 'past',
        status: 'done',
        x: 500,
        y: 60,
        title: '华为 OD · Java 后端',
        lines: ['华为后端系统的开发与联调。', '那时候代码全靠人一行行写。'],
      },
      {
        id: 'byd',
        label: '比亚迪',
        when: '2025.07–2026.07',
        rel: 'past',
        status: 'done',
        x: 715,
        y: 100,
        title: '比亚迪 · 高级系统开发工程师',
        lines: ['品质管理系统后端，全球业务、百万级用户。', '给团队引入 Trae 等 AI Agent，写 Skill、定使用规范。'],
      },
      {
        id: 'dnd',
        label: '洛山达 DND 助手',
        when: '2022 至今',
        rel: 'own',
        status: 'done',
        x: 830,
        y: 300,
        title: '洛山达 DND 助手',
        lines: ['帮玩家建 D&D 角色卡、开团的微信小程序。', '今年 6 月起交给几种 AI 分工维护，我只提想法、审方案、发版。'],
        stat: { v: '1.46 万', k: '累计用户（截至 11 月 6 日）' },
      },
      {
        id: 'box',
        label: '冒险匣子',
        when: '西安跑团店',
        rel: 'partner',
        status: 'done',
        x: 900,
        y: 480,
        links: ['dnd'],
        title: '冒险匣子 · 诸神之匣',
        lines: ['冒险匣子是西安的一家跑团店，诸神之匣是店家的原创规则。', '我把这套规则做进了小程序。'],
      },
      {
        id: 'studio',
        label: '装修工作室 · 跑团店',
        rel: 'partner',
        status: 'doing',
        x: 705,
        y: 575,
        links: ['center', 'dnd'],
        title: '装修工作室 · 跑团店',
        lines: ['正在推进。', '跟小程序连在一起：线上的玩家，线下的店。'],
      },
      {
        id: 'crane',
        label: '东方红起重',
        when: '注册资本 1,000 万',
        rel: 'partner',
        status: 'doing',
        x: 480,
        y: 640,
        title: '东方红起重 · 吊车租赁小程序',
        lines: ['像货拉拉那样在线叫吊车。', '初版已上线，11 月 12 日谈定，后续开发由我来做。'],
        stat: { v: '1,000 万', k: '注册资本' },
      },
      {
        id: 'gschool',
        label: 'G School · 教育',
        rel: 'partner',
        status: 'doing',
        x: 250,
        y: 580,
        title: 'G School · 教育赛道',
        lines: ['给初高中老师和学生用的 AI 项目制学习平台，北京十一丰小等多所学校在用。我负责开发和维护。', '在歌尔学校（歌尔的私立学校）带学生做 AI 公司项目。'],
        steps: ['选兴趣', '项目卡', '能力要求', '里程碑', '测试', '结果'],
        img: { src: '/shots/talk/gschool-team.jpg', alt: '团队背景：哈佛、哥伦比亚、伊利诺伊、北航、微软亚洲研究院、美国东北大学等', cap: '团队背景，摄于课堂' },
      },
      {
        id: 'tavern',
        label: '晨曦酒馆',
        when: '2026 起步',
        rel: 'own',
        status: 'doing',
        x: 115,
        y: 345,
        title: '晨曦酒馆 · 跑团自媒体',
        lines: ['一个人做的跑团动画账号，脚本、画面、配音、剪辑分给不同的 AI。', '目标是国内跑团领域的大号。'],
      },
      {
        id: 'shop',
        label: '卖货',
        when: '构思中',
        rel: 'own',
        status: 'idea',
        x: 140,
        y: 490,
        title: '卖货',
        lines: ['还在构思。'],
        quiet: true,
      },
      {
        id: 'talk-a',
        label: '在谈',
        rel: 'partner',
        status: 'idea',
        x: 345,
        y: 700,
        title: '一家企业 · 在谈',
        lines: ['还在谈，先不写名字。'],
        quiet: true,
      },
      {
        id: 'talk-b',
        label: '在谈',
        rel: 'partner',
        status: 'idea',
        x: 615,
        y: 705,
        title: '一家企业 · 在谈',
        lines: ['还在谈，先不写名字。'],
        quiet: true,
      },
    ] as Node[],
  },

  /** 02 问题在哪：从人到企业，一层层往下看。数字来源记在 docs/worklog.md */
  gap: {
    no: '02',
    title: 'AI 用得广，但用得浅',
    lead: '2026 年的最新数据，从人看到企业。',
    steps: [
      { k: '人', v: 50, big: '50%+', text: '中国人用过生成式 AI', sub: '用户超 7 亿', src: 'CNNIC《生成式人工智能应用发展报告（2026）》，2026-09-29' },
      { k: '企业', v: 61, big: '61%', text: '中小企业至少用上一个 AI 工具', sub: '国内规上制造业：超三成', src: 'OECD《Empowering SMEs in the age of AI》，2026-04，12 国 2,018 家；国内数字来自同一份 CNNIC 报告' },
      { k: '定制', v: 5, big: '5%', text: '用的是为自己定制的 AI', sub: '75% 用现成工具；国内只有 4% 嵌进全部业务流程', src: 'OECD 同上；中国信通院《人工智能赋能中小企业高质量发展研究报告》，2026-03，6,000 余家' },
      { k: '底子', v: 87, big: '87%', text: '中小企业还停在基础信息化阶段', sub: '数字化本身还没做完', src: '《企业数字化转型指数报告（2025）》，中关村信息技术和实体经济融合发展联盟等发布，《中国城市报》2026-04-06 报道，样本量未披露' },
    ],
    quote: '「用得广，但用得浅。」',
    quoteWho: 'OECD 2026 报告原话：broad but still shallow',
    end: '工具人人有，贴着自己业务的软件很少。',
    notes:
      '2.5 分钟。← → 四层：人人在用 → 企业也在用 → 但几乎都是现成工具，定制的只有 5% → 底子还是基础信息化。OECD 样本偏数字化程度高的企业，日本占大头，台上别说成全球平均。顺口讲报价乱：同样一个小程序，外面报几千到几十万都有（只口头讲）。',
  },

  /** 03 第一部分：做出来之前的三件事 */
  build: {
    no: '03',
    kicker: '第一部分 · 怎么做出来',
    title: '先备好三样东西',
    lead: '模型、仓库、规则文档。',
    tabs: ['选对模型', '仓库是操作台', '规则文档'],
    models: {
      head: '不同的活，看不同的榜',
      boards: [
        { name: 'LMArena · WebDev', what: '看审美和前端', how: '真人盲投：两个匿名模型各做一个网页，人来选。', href: 'https://lmarena.ai/leaderboard/webdev' },
        { name: 'SWE-bench Verified', what: '看写代码', how: '拿真实开源项目的问题考 AI，改完要过原项目的测试。', href: 'https://www.swebench.com' },
      ],
      open: '打开最新榜',
      note: '看榜挑，不看广告。',
    },
    hub: {
      center: 'GitHub 仓库',
      inside: ['代码', '规则', '任务', '检查'],
      plugs: [
        { k: 'Claude', v: '方案、界面、前端' },
        { k: 'Codex', v: '后端，也做代码评审' },
        { k: 'Trae', v: '简单的 bug 和文案' },
      ],
      hint: '把鼠标放到每个 AI 上',
      note: 'AI 是来干活的，东西都在仓库里。哪家好用换哪家。',
      src: 'Matt Pocock（TypeScript 名师）2026-11-12 公开的 Home Repo 做法：所有 agent 都从同一个仓库启动。',
    },
    rules: {
      file: 'AGENTS.md · 所有 AI 共用，限 60 行',
      hint: '把鼠标放到亮着的行上',
      lines: [
        { t: '- 不为过 CI 去改 CI。', why: { when: '2026-10-18', ref: 'PR #2245', v: '检查不过就修代码，不许改检查。' } },
        { t: '- 机制判断靠数据字段，不按名字判断。', why: { when: '2026-08-14', ref: 'PR #672', v: 'AI 反复写 if (name === "圣武士")，于是加了脚本扫描。' } },
        { t: '- 影响包体积的，推送前本地量一遍。', why: { when: '2026-08-16', ref: 'PR #699', v: '超了微信 2MB 上限，发版最后一步才被打回。' } },
      ],
      note: 'AI 不记得上次。规则文档就是它的员工手册：出一次错，补一条。',
    },
    notes:
      '2 分钟。← → 切三样。模型：台上点「打开最新榜」现场看，只讲怎么看榜。仓库：企业找人做，仓库一定在自己公司名下。规则：悬停三行，讲是哪次出事后加的。',
  },

  /** 04 第一部分（续）：一层套一层的流水线 */
  flow: {
    no: '04',
    kicker: '第一部分 · 怎么做出来',
    title: '一层套一层的流水线',
    lead: '从一个想法到合进代码，我现在是这么跑的。',
    hint: '← → 从外往里看',
    layers: [
      {
        k: 'Linear 任务池',
        loop: 'issue 管家定时巡检',
        chips: ['我的想法', '用户反馈', 'AI 发现的问题'],
        what: '要做的事都是一张单：谁提的、多急、归谁。',
        how: 'issue 管家每轮分诊、排优先级，收回卡了 24 小时的单。',
        src: 'Anthropic 2026-02：16 个 Claude 并行写编译器，每个先「占」一个任务再动手。',
      },
      {
        k: '规划和切片',
        loop: '',
        chips: ['写方案', '切成小片', '排先后'],
        what: '大需求先写方案，再切成一个 PR 做得完的小片。',
        how: '按前端、后端、美术分给不同的 AI，最后一片是测试。',
        src: 'Anthropic 2026-03：先让规划 agent 把一句话扩成完整规格；开工前先约定「做完是什么样」。',
      },
      {
        k: '定时轮班',
        loop: '一轮接一轮',
        chips: ['先合 PR', '领一张单', '做完开 PR'],
        what: '每个 AI 定时开工一轮，做完就收工。',
        how: '下一轮开头先把达标的 PR 合掉，再领下一张。',
        src: 'Anthropic 2026-02：一个死循环，做完一轮就开新会话领下一个任务，不用人守着。',
      },
      {
        k: '一张单：需求 → 合并',
        loop: '没过就改',
        chips: ['写代码', '换个 AI 评审', '183 道检查', '合并'],
        what: '写代码的和审代码的，不是同一个 AI。',
        how: '检查不过就改，改到全过才合并。',
        src: 'Anthropic 2026-03：「把干活的和评判的 agent 分开，是很强的杠杆。」',
      },
    ],
    front: 'Anthropic 自己：2026 年 9 月每天合入 3 万多个改动，工程师主要做的是对 Claude 说「不」。',
    frontSrc: 'Anthropic《Redesigning source control at Anthropic》，2026-10-13',
    notes:
      '3.5 分钟。← → 从最外层往里讲，每层一句「做什么」一句「怎么转」，再点一下右边的依据。最后念 Anthropic 的 3 万个：最前沿的公司也是这么干的，只是规模大。',
  },

  /** 05 第二部分：做出来怎么维护 */
  keep: {
    no: '05',
    kicker: '第二部分',
    title: '做出来，怎么维护',
    lead: '用户的一句反馈，怎么变成上线的改动。',
    hint: '← → 一步步讲',
    nodes: [
      { k: '用户提反馈', who: '用户', what: '在小程序里写一句话。', more: '自动存进飞书表。' },
      { k: 'AI 审核', who: 'AI · 定时', what: '查重、开单、写好回复。', more: '每小时回到小程序「我的反馈」，有效的发金币。', back: true },
      { k: '开发', who: 'AI · 轮班', what: '规划切片 → 开发 → 检查 → 合入。', more: '就是上一页那四层。' },
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

  /** 05 给老板的验收清单 */
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
    notes: '2 分钟。五句话对应前面两部分：前两句是「做出来」，后三句是「管得住」。讲完说：这五句答不上来的，报价再低也要小心。',
  },
};
