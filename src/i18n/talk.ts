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
  /** 点旁边的小标：AI 用在哪 */
  ai?: string;
  /** 大一号的点（重点讲） */
  big?: boolean;
}

export const talk = {
  title: 'AI 时代，企业如何落地定制软件与 AI 能力？· 李睿涵',
  description: '青岛中小企业会议分享：AI 时代，企业如何落地定制软件与 AI 能力。怎么做出来、怎么维护、怎么系统化地用 AI 实现这一切。',
  keys: '↑ ↓ 翻页 · ← → 切换 · P 讲者备注',

  cover: {
    eyebrow: '青岛中小企业会议 · 分享',
    /** *…* 里的字标陶土红 */
    title: 'AI 时代，\n企业如何落地*定制软件与 AI 能力*？',
    sub: '今天讲三个问题',
    pains: ['怎么做出来', '怎么维护', '怎么系统化地用 AI 实现这一切'],
    name: '李睿涵',
    role: 'AI 应用工程师',
    field: '背景里每个点，是 AI 写完并合入的一个 PR',
    fieldNote: '洛山达 DND 助手仓库，6 月 17 日到 11 月 18 日，共 {n} 个',
    next: '往下翻',
    notes: '0.5 分钟。一句话开场：很多企业想做自己的软件、想用上 AI，外面报价从几千到几十万都有。今天讲 AI 时代企业怎么把定制软件和 AI 能力落地。三个问题：东西怎么做出来，做出来怎么维护，怎么把这一切交给 AI 系统化地去做。背景这些点都是 AI 替我写完、合进去的代码改动。',
  },

  me: {
    no: '01',
    title: '自我介绍',
    name: '李睿涵',
    role: 'AI 应用工程师 · 西电本硕 · 后端出身',
    hint: '鼠标放到点上，看每件事是什么',
    /** 四组各自的色块图例，挂在画布四角（1000 × 760 坐标） */
    regions: [
      { k: 'school', v: '学校', x: 24, y: 28 },
      { k: 'work', v: '工作', x: 976, y: 28 },
      { k: 'trpg', v: '跑团', x: 976, y: 740 },
      { k: 'partner', v: '现在合作', x: 24, y: 740 },
    ],
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
        big: true,
        links: ['xidian'],
        title: '应激生理监测系统',
        lines: ['西电和第四军医大那边军工企业的校企联合项目，腕表采集心电、脉搏波和皮电。', '我是软件总负责人：桌面、Web、App、云端四端和压力分类模型。'],
        stat: { v: '3 项', k: '软著，另获国赛三等奖' },
      },
      {
        id: 'award',
        label: '国赛三等奖',
        group: 'school',
        status: 'done',
        statusText: '获奖',
        big: true,
        lab: 'top',
        x: 110,
        y: 110,
        links: ['signal'],
        title: '全国大学生生物医学工程创新设计竞赛',
        lines: ['研究生组三等奖。'],
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
        x: 800,
        y: 130,
        title: '比亚迪 · 高级系统开发工程师',
        lines: ['品质管理系统后端，全球业务、百万级用户。', '给团队引入 Trae 等 AI Agent，写 Skill、定使用规范。'],
      },
      {
        id: 'dnd',
        label: '洛山达 DND 助手\n微信小程序',
        group: 'trpg',
        status: 'done',
        lab: 'right',
        ai: '0 行手写代码，全部 AI 开发',
        x: 680,
        y: 450,
        title: '洛山达 DND 助手 · 微信小程序',
        lines: ['帮玩家建 D&D 角色卡、开团的微信小程序。', '今年 6 月起交给几种 AI 分工维护，我只提想法、审方案、发版。'],
        stat: { v: '1.52 万', k: '累计用户（截至 11 月 18 日）' },
      },
      {
        id: 'box',
        label: '冒险匣子\n跑团店定制规则',
        group: 'trpg',
        status: 'done',
        lab: 'top',
        ai: 'AI 开发',
        x: 900,
        y: 300,
        links: ['dnd'],
        title: '冒险匣子 · 跑团店定制规则',
        lines: ['在洛山达 DND 助手的基础上，给西安的跑团店冒险匣子定制规则。', '店家原创的「诸神之匣」做进了小程序。'],
      },
      {
        id: 'tavern',
        label: '自媒体',
        group: 'trpg',
        status: 'doing',
        ai: 'AI 工作流',
        x: 610,
        y: 650,
        links: ['dnd'],
        title: '晨曦酒馆 · 跑团自媒体',
        lines: ['一个人做的跑团动画账号，脚本、画面、配音、剪辑分给不同的 AI。', '我只看两次：脚本和成片。目标是国内跑团领域的大号。'],
        img: { src: '/shots/tavern/cover.jpg', alt: '晨曦酒馆封面：酒馆里举杯的矮人老板和抱着书跑进来的半身人', cap: '第一条《晨曦酒馆今天开张》的封面' },
      },
      {
        id: 'studio',
        label: '装修工作室 · 跑团店',
        group: 'trpg',
        status: 'doing',
        x: 810,
        y: 665,
        links: ['dnd'],
        title: '装修工作室 · 跑团店',
        lines: ['正在推进。', '跟小程序连在一起：线上的玩家，线下的店。'],
      },
      {
        id: 'talk-trpg',
        label: '跑团店\n定制规则',
        group: 'trpg',
        status: 'idea',
        x: 960,
        y: 600,
        links: ['dnd'],
        title: '一家跑团店 · 定制规则',
        lines: ['也在洛山达 DND 助手的基础上定制规则，在谈。'],
        quiet: true,
      },
      {
        id: 'gschool',
        label: 'G School · 歌尔投资\n合伙项目',
        group: 'partner',
        status: 'doing',
        ai: 'AI 开发',
        x: 250,
        y: 560,
        title: 'G School · 歌尔投资',
        statusText: '合伙项目 · 进行中',
        lines: ['歌尔投资的教育项目，团队来自哈佛、哥伦比亚、微软亚洲研究院等。', '给初高中老师和学生用的 AI 项目制学习平台，北京十一丰小等多所学校在用；我是合伙人，负责开发和维护。'],
        stat: { v: '歌尔投资', k: '在歌尔学校带学生做 AI 公司项目' },
        steps: ['选兴趣', '项目卡', '能力要求', '里程碑', '测试', '结果'],
        img: { src: '/shots/talk/gschool-team.jpg', alt: '团队背景：哈佛、哥伦比亚、伊利诺伊、北航、中国科学院、微软亚洲研究院、美国东北大学、中国矿业大学、虚拟现实国家重点实验室', cap: 'G School 团队背景（取自项目介绍）' },
      },
      {
        id: 'traffic',
        label: '吊车租赁平台',
        group: 'partner',
        status: 'doing',
        ai: 'AI 开发',
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
   * 02 AI 用得多，做成的少（车主 2026-11-19 选的叙事）。依据 docs/research/talk-02-data-v2.md（HAN-1890）。
   * 三张卡：全国词元（中国，陡线）→ 企业在用（麦肯锡全球问卷，快顶到头）→ 做成的还少（同一问卷两年对比的横条）。
   * 纵轴各自从 0 起；虚线点是后文回写或图上读数。← → 一张张讲，悬停或聚焦一个点看读数。
   */
  gap: {
    no: '02',
    title: 'AI 用得多，做成的少',
    lead: '调用两年涨了 1000 多倍；企业几乎都在用，铺开、见效的不到一半。',
    hint: '← → 一张张讲，悬停一个点看读数',
    lines: [
      {
        k: 'AI 调用',
        kind: 'ai',
        big: '1000 多倍',
        bigK: '全国每天调用大模型的词元',
        say: '两年多，从每天 0.1 万亿涨到超过 140 万亿。',
        unit: '万亿',
        max: 150,
        pts: [
          { t: '2024 初', x: 2024.05, v: 0.1, label: '0.1 万亿', k: '每天' },
          { t: '2025 初', x: 2025.05, v: 7, label: '约 7 万亿', k: '报告图上的读数', soft: true },
          { t: '2025 年中', x: 2025.5, v: 30, label: '约 30 万亿', k: '报告图上的读数', soft: true },
          { t: '2025 末', x: 2025.96, v: 100, label: '100 万亿', k: '每天' },
          { t: '2026-03', x: 2026.2, v: 140, label: '超 140 万亿', k: '国家数据局局长发布会' },
        ],
        src: '国家数据局 · 全国数据资源调查报告（2025 年）· 2026-04；局长发布会 2026-03',
        trust: '0.1 和 100 万亿是报告正文和局长讲话的原话，高；7 和 30 只在报告图上，虚线点；超 140 万亿是发布会原话，没说明是不是同一套加总，中。词元是模型切文字的小块。',
        href: 'https://www.nda.gov.cn/sjj/swdt/xwfb/0324/20260324132817761432606_pc.html',
      },
      {
        k: '企业在用',
        kind: 'dig',
        big: '将近九成',
        bigK: '的受访者说公司至少一个部门在用 AI',
        say: '三年从一半出头涨到将近九成，快顶到头了。',
        unit: '%',
        max: 100,
        pts: [
          { t: '2023-04', x: 2023.3, v: 55, label: '55%', k: '1,684 人；后一年文章回写的数', soft: true },
          { t: '2024 年初', x: 2024.18, v: 72, label: '72%', k: '1,363 人；后一篇文章回写的数', soft: true },
          { t: '2024-07', x: 2024.55, v: 78, label: '78%', k: '1,491 人，101 个国家' },
          { t: '2025-07', x: 2025.55, v: 88, label: '88%', k: '1,993 人，105 个国家' },
          { t: '2026-05', x: 2026.4, v: 89, label: '将近九成', k: '1,719 人，97 个国家；原文没给整数' },
        ],
        src: '麦肯锡《The State of AI》全球在线问卷 · 2023–2026',
        trust: '全球受访者，按各国 GDP 比重加权，答卷人自愿参加，不是中国企业的统计。55% 和 72% 是后一年文章回写的，虚线点；2026 年原文是「将近九成」，没有整数，点画在 89 的位置只为示意。',
        href: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
      },
    ],
    /** 第三张：同一问卷，「做成了」的几项，2025 vs 2026 */
    done: {
      k: '做成的',
      kind: 'ai',
      big: '44%',
      bigK: '说 AI 已经在全公司铺开',
      say: '用的人将近九成；铺开的 44%，说利润因此有变化的还不到四成。',
      rows: [
        { k: '全公司铺开', a: 38, b: 44 },
        { k: '对利润有贡献', a: 39, b: 37 },
        { k: '利润 5% 以上来自 AI', a: 6, b: 6 },
      ],
      years: ['2025', '2026'],
      src: '麦肯锡《The State of AI》2025、2026 · 同一套全球问卷',
      trust: '2026 年原文：44% 说 AI 在全公司规模化，上一年 38%；37% 说 AI 对利润（EBIT）有贡献，和上一年差不多（39%）；高绩效企业约 6%，没变。全球受访者，不是中国。',
      href: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    },
    srcK: '来源',
    trustK: '可信度',
    openK: '原文',
    end: '缺的是能把 AI 落地的人。下一页看写软件这件事变了多少。',
    notes:
      '2.5 分钟。← → 一张张讲，纵轴都从 0 起。AI 调用：国家数据局的调查，全国每天调用大模型的词元，2024 年初 0.1 万亿，2025 年底 100 万亿，今年 3 月局长说超过 140 万亿，两年多 1000 多倍。企业在用：麦肯锡每年的全球问卷，说公司至少一个部门在用 AI 的，2023 年一半出头，2025 年 88%，今年将近九成，快顶到头了。做成的：同一份问卷，说已经在全公司铺开的只有 44%，说利润因此有变化的 37%，比去年还少一点，真正吃到红利的大约 6%，两年没变。用的人很多，做成的很少，缺的是能把 AI 落地的人。补两句：软件行业的钱也一直在涨，工信部的数，够规模的软件公司 2019 年收了 7.2 万亿，2025 年 15.5 万亿；麦肯锡今年还有一句，大约三分之一受访者说，公司因为能自己用编程 AI 做出来，少买过至少一样软件。这两句是全球问卷和行业总数，不当成中国中小企业的统计讲。',
  },

  /**
   * 03 一个人 + Agentic Engineering = 一个团队（车主 2026-11-18 定的主线）。
   * 依据 docs/research/talk-03-team.md（HAN-1864）。口径不同的数各自成行，不放进同一个比较、不互相换算成人头。
   * 「产出看算力」没有一手材料，只作为车主自己项目的体会讲，讲者备注里说清加 agent 不是线性的。
   */
  team: {
    no: '03',
    title: '一个人 + Agentic Engineering = 一个团队',
    lead: '不是随便一个人，关键是这套工程能力。',
    hint: '← → 下一步',
    levels: [
      {
        k: '一家公司',
        tag: 'Anthropic',
        q: '五个月，每天合入的代码涨了 10 倍',
        plain: '写代码的不再是瓶颈。',
        case: '做这套新代码管理系统的只有 7 个人，五个月迁完。',
        src: 'Anthropic《[Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control)》，2026-10-13。口径是合进 monorepo 的改动（code changes merged），不是 GitHub PR；原文写「增加了 10 倍」，没给当时的人数。',
      },
      {
        k: '几个人',
        tag: 'OpenAI',
        q: '3 个工程师起步，五个月 1,500 个 PR',
        plain: '从空仓库开始，人没有手写一行代码。',
        case: '后来涨到 7 个人，平均每人每天 3.5 个 PR，人变多以后产出还在涨。',
        src: 'OpenAI，Ryan Lopopolo《[Harness engineering](https://openai.com/index/harness-engineering/)》，2026-02-11。PR 是开出并合入的；他们自己估计用时约为手写的 1/10，是估计，不是对照实验。',
      },
      {
        k: '一个人',
        tag: 'Boris · Lauren',
        q: '一个人，一天几十个 PR',
        plain: '一个人同时带几个到几百个 AI。',
        case: '这些数是他们本人说的，口径各不相同，不放在一起比。',
        src: 'Boris Cherny（Claude Code 负责人），Lenny\'s Podcast 2026-02-19 和 Sequoia《Training Data》2026-05-05，读的是转写。Lauren Tan 2026-09-21 的 [原帖](https://x.com/poteto/status/2102050467505430555)；她 10-02 补充：2,500 个 PR 不是 2,500 个功能，很多是整理和维护。',
      },
      {
        k: '工具',
        tag: 'Changelog',
        q: 'AI 工具几天就更新一次',
        plain: '追工具追不完，要搭的是不随工具变的系统。',
        case: 'Claude Code 三个月出了 77 个版本，平均一天多一点一个。',
        src: '各家官方 changelog，2026-08-18 到 11-18。版本号和产品公告是两种口径：Claude Code、Codex CLI 数版本号，Cursor、Trae 数公告，一条公告是一批功能，所以不说谁更勤快。',
      },
      {
        k: '我自己',
        tag: '1,633 PR',
        q: '我一个人：5 个月 1,633 个 PR',
        plain: '系统搭好以后，多出来的产出靠算力，不靠加人。',
        case: '最近 30 天 795 个，平均每天 26 个。6 月起小程序交给 AI，我只提想法、审方案、发版。',
        src: '洛山达 DND 助手仓库 dev 分支合并记录（first-parent，剔除发版公告），2026-06-17 到 11-06。这是 Git 合并记录，和上面几家的口径不同。',
      },
    ],
    /** 1 Anthropic：每天合入多少次 */
    anth: {
      unit: '每天合入',
      bars: [
        { k: '2026 年 5 月', v: 2500, label: '约 2,500 次' },
        { k: '2026 年 9 月', v: 30000, label: '超过 30,000 次' },
      ],
      x: '10×',
    },
    /** 2 OpenAI：从空仓库开始 */
    oai: [
      { at: '2025 年 8 月', k: '空仓库，第一次提交', v: '3 名工程师' },
      { at: '五个月', k: '代码到一百万行这一量级，人没手写一行', v: '约 1,500 个 PR' },
      { at: '2026 年 2 月', k: '写这篇文章时', v: '7 名工程师' },
    ],
    /** 3 一个人：各自的口径写在卡片上 */
    people: [
      { who: 'Boris Cherny', role: 'Claude Code 负责人', big: '10–30 个', k: '每天发出的 PR', how: '2026-02 · 同时开 5 个 AI · 他本人的 PR' },
      { who: 'Boris Cherny', role: '三个月后', big: '几十个', k: '每天的 PR，最多一天 150 个', how: '2026-05 · 白天几百个 AI，夜里几千个' },
      { who: 'Lauren Tan', role: 'SpaceXSI 首席工程师', big: '2,500 个', k: '一个月合进生产的 PR', how: '2026-08 · 很多是整理和维护，不是 2,500 个功能' },
    ],
    /** 4 工具：相邻两次更新平均隔几天 */
    tools: {
      unit: '平均几天一更新',
      rows: [
        { k: 'Claude Code', v: 1.2, n: '77 个版本', what: '版本号' },
        { k: 'Codex CLI', v: 2.3, n: '41 个版本', what: '版本号' },
        { k: 'Codex 应用', v: 4.3, n: '21 条', what: '版本公告' },
        { k: 'Trae', v: 6.0, n: '13 条', what: '更新日志' },
        { k: 'Cursor', v: 7.9, n: '11 条', what: '产品公告' },
      ],
      win: '2026-08-18 到 11-18',
    },
    /** 5 我自己：每月合入的 PR，数字来自 src/data/dnd.json */
    mine: { unit: '每月合入的 PR', partial: '11 月只统计到 6 日' },
    readK: '悬停或点一条，看读数',
    caseK: '例子',
    srcK: '依据',
    notes:
      '3 分钟。← → 一步步讲。一家公司：Anthropic 自己的代码库，5 月每天合入两千五百次，9 月超过三万次，他们自己说五个月涨了 10 倍；做这套系统的只有 7 个人。几个人：OpenAI 一个内部产品，3 个工程师从空仓库开始，五个月大约 1,500 个 PR，人没手写一行。一个人：Claude Code 的负责人 Boris，一天十到三十个 PR，同时开着五个 AI；三个月后他说一天几十个，最多一天 150 个。Lauren Tan 一个月 2,500 个 PR 合进生产，她自己说很多是整理和维护，不是 2,500 个功能。这些数都是他们自己说的，口径不一样，不拿来互相比。工具：Claude Code 三个月 77 个版本，追工具追不完，要搭的是不随工具变的系统。我自己：5 个月 1,633 个 PR，10 月一个月 612 个，最近 30 天每天 26 个。我的体会是系统搭好以后，多出来的产出靠烧算力，不靠加人；但不是加多少 AI 就多多少产出，Cursor 试过几百个 AI 一起跑，任务拆不开就会互相卡住，所以下一页讲这套系统怎么搭。',
  },

  /**
   * 04 Agentic Engineering 系统：工具 → 模型 → 地基（仓库）→ 最小单 → 一个大需求 → 一堆需求 → 验证。
   * 每步右栏大字就是这一步的核心句，下面一行「参考」写这一步参考了谁（docs/research/talk-04-concepts.md，HAN-1865）。
   * 「做出来一件事」车主 2026-11-18 删掉，换成「验证」。graph engineering 一手帖没打开，不上页。
   */
  make: {
    no: '04',
    title: 'Agentic Engineering 系统',
    lead: '人不再一行行写代码：派 AI 去写、去跑、去改；人把「做成什么样」说清，把检查留在仓库里。',
    hint: '← → 下一步',
    levels: [
      {
        k: '工具',
        tag: 'Tools',
        q: '工具迭代快，大家差不多，拉不开差距',
        plain: '有一个要解决的问题，先问 AI 我需要什么工具。下面八类是我问完、用过之后的答案。',
        case: '做定制软件先看标红的三类。我用 Claude Code、Codex 写代码，GitHub、Linear 放代码管任务，微信云开发放上线。',
        src: '2026-11-17 打开各家官网整理（HAN-1844）。挑的标准：不用写代码就能上手、有免费档、国内能开通。',
      },
      {
        k: '模型',
        tag: 'Models',
        q: '模型才是拉开差距的地方',
        plain: '好的模型一句话做好，差的模型十句话还做不好。',
        ref: '榜单：[LMArena](https://arena.ai/leaderboard)、[Artificial Analysis](https://artificialanalysis.ai/leaderboards/models)',
        case: '一张单交给谁，看它擅长什么：界面交给 Claude，后端和美术交给 Codex。',
        src: '各榜 2026-11-08 至 11-18 打开的页面（HAN-1845）。名次区间互相重叠时，不说谁已经拉开；长文档那页两处第一名对不上，不上表。',
      },
      {
        k: '地基',
        tag: 'Harness',
        q: '以代码仓库为核心',
        plain: '规矩、任务、记录全放进代码仓库，不放在工具上；工具随时能换。仓库多了，再建一个 Home Repo 放共用的规矩。',
        ref: 'Mitchell Hashimoto、OpenAI《[Harness engineering](https://openai.com/index/harness-engineering/)》；Matt Pocock《[The Home Repo Pattern](https://aihero.dev/the-home-repo-pattern)》',
        case: '我同时付费用 6 个 AI。Claude 账户被封过一次，换个新账户马上接上：规矩、任务、记录都在仓库里。',
        src: 'Mitchell Hashimoto 2026-02-05：AI 犯一次错，就改环境让它不再犯，他叫 harness engineering；OpenAI 2026-02-11 用了同一个词：AGENTS.md 当目录，规矩写不清就写成检查。Home Repo：Matt Pocock，2026-11-12。',
      },
      {
        k: '最小单',
        tag: 'Spec',
        q: '一张最小单：AI 写，另一个 AI 审',
        plain: '先写清做成什么样，AI 开发，另一个 AI 评审，检查全过才合并。',
        ref: 'Spec：先写规格再写代码（GitHub，[2025-09](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)）；干活的和打分的分开（Anthropic，[2026-03](https://www.anthropic.com/research/harness-design-long-running-apps)）',
        case: '一位玩家反馈：页面上「灵感」写错了，应该是「激励」。10 月 29 日开单，2.5 小时合入。',
        src: '小程序不用 Spec Kit：新功能、新页面才写 PRD，小修复在 PR 正文写 3 到 5 行。评审是另一个执行器，一个 PR 最多两轮。',
      },
      {
        k: '一个大需求',
        tag: 'Project + Loop',
        q: '大需求，先让 AI 切成最小单',
        plain: '一个大需求就是一个 Project：AI 切片，定时任务每轮领一张，循环做完。',
        ref: 'Loop：每轮新开一次会话，进度留在文件里（Geoffrey Huntley《[Ralph](https://ghuntley.com/ralph/)》，2025-07）；planner 拆、worker 做（Cursor《[Scaling agents](https://cursor.com/blog/scaling-agents)》，2026-01）',
        case: '「约团排期」：14:30 写方案，切成 6 片，20:57 全部合入。',
        src: 'Anthropic 2026-02 让 16 个 Claude 并行写 C 编译器，外面套的也是这种循环，作者自己说「像 Ralph」。小程序的定时任务每轮新开会话，任务在 Linear 和 git 里；没有那个死循环，也没有递归的 planner。',
      },
      {
        k: '一堆需求',
        tag: 'Triage',
        q: '一堆需求，也交给 AI 切片',
        plain: 'AI 先分诊，再切成一个个 Project，里面全是最小单；定时任务一直跑就行。',
        ref: 'Triage：新进来的事先分拣（[Linear 文档](https://linear.app/docs/triage)）',
        case: '5 个月 1,633 个 PR，最近 30 天平均每天 26 个。',
        src: '分诊没有像 Spec、Ralph 那样的首发文章，是软件里的日常词。小程序的规则在 docs/routines/triage.md（2026-11-15 定）：只整理单子和项目，不写代码。',
      },
      {
        k: '验证',
        tag: 'Verify',
        q: '怎么信任自己的 Agentic Engineering 系统？',
        plain: '可以人不看的，就交给代码检查；越往下每查一次越贵，人只看最后一层。',
        ref: 'Lauren Tan（poteto）《[All Code Is Slop (Except Mine)](https://ai.engineer/code/2026/talks/lauren-tan)》，AI Engineer CODE 2026-11-11',
        case: '同一个错，先改结构，再加一道会红的检查，规则文档只留一句：5e / 2024 规则的归属只写在一个文件里，另有门禁盯着。',
        src: '幻灯片原文「how do i trust my agents more? the poteto pyramid」：codebase → static analysis → verification → prose → human review，箭头写着 cost。官方录像是 AI Engineer 整场直播 1:01:02 起；车主给的 B 站视频是转载。',
      },
    ],
    /** 工具：八类，国内、国外各列推荐的几个，名字链到官网（docs/research/talk-03-tools.md「上页只放这些」） */
    toolsHead: ['类', '国内', '国外'],
    tools: [
      { k: '聊天助手', cn: [['豆包', 'https://www.doubao.com/'], ['千问', 'https://www.qianwen.com/'], ['Kimi', 'https://www.kimi.com/'], ['DeepSeek', 'https://www.deepseek.com/'], ['腾讯元宝', 'https://yuanbao.tencent.com/']], en: [['Claude', 'https://claude.ai/'], ['Gemini', 'https://gemini.google.com/'], ['ChatGPT', 'https://chatgpt.com/']] },
      { k: '写代码', hot: true, cn: [['Trae', 'https://www.trae.cn/'], ['WorkBuddy', 'https://www.workbuddy.cn/'], ['通义灵码', 'https://lingma.aliyun.com/'], ['CodeBuddy', 'https://www.codebuddy.cn/']], en: [['Claude Code', 'https://claude.com/product/claude-code'], ['Codex', 'https://openai.com/codex/'], ['GitHub Copilot', 'https://github.com/features/copilot'], ['Cursor', 'https://cursor.com/']] },
      { k: '做图和设计', cn: [['即梦', 'https://jimeng.jianying.com/'], ['可灵', 'https://klingai.com/'], ['创客贴', 'https://www.chuangkit.com/'], ['星流', 'https://www.xingliu.art/']], en: [['Figma', 'https://www.figma.com/'], ['Ideogram', 'https://ideogram.ai/'], ['Recraft', 'https://www.recraft.ai/']] },
      { k: '视频和配音', cn: [['即梦', 'https://jimeng.jianying.com/'], ['可灵', 'https://klingai.com/'], ['海螺', 'https://hailuoai.com/'], ['剪映', 'https://www.jianying.com/'], ['Vidu', 'https://www.vidu.cn/']], en: [['Runway', 'https://runway.com/'], ['HeyGen', 'https://www.heygen.com/'], ['CapCut', 'https://www.capcut.com/'], ['ElevenLabs', 'https://elevenlabs.io/']] },
      { k: '办公和文档', cn: [['WPS AI', 'https://ai.wps.cn/'], ['飞书', 'https://www.feishu.cn/'], ['腾讯文档', 'https://docs.qq.com/'], ['通义听悟', 'https://tingwu.aliyun.com/'], ['ima', 'https://ima.qq.com/']], en: [['Notion', 'https://www.notion.com/'], ['Claude', 'https://claude.ai/'], ['Gemini', 'https://gemini.google.com/']] },
      { k: '自动化', cn: [['扣子', 'https://www.coze.cn/'], ['飞书多维表格', 'https://base.feishu.cn/'], ['宜搭', 'https://www.aliwork.com/']], en: [['Zapier', 'https://zapier.com/'], ['n8n', 'https://n8n.io/'], ['Dify', 'https://dify.ai/']] },
      { k: '放代码、管任务', hot: true, cn: [['Gitee', 'https://gitee.com/'], ['CODING', 'https://coding.net/'], ['TAPD', 'https://www.tapd.cn/'], ['飞书项目', 'https://project.feishu.cn/']], en: [['GitHub', 'https://github.com/'], ['Linear', 'https://linear.app/']] },
      { k: '放上线', hot: true, cn: [['微信云开发', 'https://cloud.weixin.qq.com/cloudbase'], ['腾讯云', 'https://cloud.tencent.com/'], ['火山引擎', 'https://www.volcengine.com/']], en: [['Vercel', 'https://vercel.com/'], ['Zeabur', 'https://zeabur.com/']] },
    ],
    /** 模型能力：每个领域前三名，写具体型号，有分数的写分数（docs/research/talk-03-models.md） */
    modelsHead: ['领域', '第 1', '第 2', '第 3', '榜单'],
    models: [
      { k: '做网页、界面', top: [['Claude Fable 5.2'], ['Claude Opus 5.5'], ['Claude Sonnet 5.5']], note: '前三都是 Anthropic', board: 'LMArena WebDev', at: '11-13', href: 'https://arena.ai/leaderboard/code/webdev' },
      { k: '写代码', top: [['Copilot Fusion', '71.2%'], ['Claude Opus 5.5', '65.8%'], ['Claude Fable 5.2', '65.8%']], note: '分数是任务完成率；第 2、3 名并列', board: 'Terminal-Bench', at: '11-18', href: 'https://www.tbench.ai/' },
      { k: '生图、海报', top: [['GPT-Image-2.5 Sunburst'], ['GPT-Image-2.6 Sunburst'], ['GPT-Image-2']], note: '商业设计分榜，前三都是 OpenAI', board: 'LMArena 文生图', at: '11-16', href: 'https://arena.ai/leaderboard/image/text-to-image/commercial-design' },
      { k: '视频', top: [['Gemini Omni 1.2 Flash'], ['Gemini Omni 1.1 Flash'], ['Gemini Omni Flash']], note: '前三都是 Google；国产最高是即梦 Seedance，第 6', board: 'LMArena 文生视频', at: '11-08', href: 'https://arena.ai/leaderboard/video/text-to-video' },
      { k: '综合', top: [['Claude Fable 5.2', '65'], ['GPT-6.2 Astra', '62'], ['Gemini 4 Carbon', '60']], note: '分数是 Artificial Analysis 智能指数', board: 'Artificial Analysis', at: '11-18', href: 'https://artificialanalysis.ai/leaderboards/models' },
      { k: '性价比', top: [['GPT-6.1 Terra'], ['GPT-6.2 Sol'], ['GPT-6.2 Astra']], note: '智能指数 50 分以上、单次调用更便宜的前三', board: 'Artificial Analysis', at: '11-18', href: 'https://artificialanalysis.ai/leaderboards/models' },
      { k: '国产', top: [['Kimi K3.1 Pro', '46'], ['Qwen4 Max', '43'], ['腾讯 Hy4', '35']], note: '国产模型里智能指数最高的三个', board: 'Artificial Analysis', at: '11-18', href: 'https://artificialanalysis.ai/leaderboards/models' },
    ] as { k: string; top: [string, string?][]; note: string; board: string; at: string; href: string }[],
    modelsHint: '悬停或点一行，看这一行的口径',
    harness: {
      model: '模型',
      modelV: '负责想',
      mid: '现成 Harness',
      midParts: [
        { k: '工具', tip: '读写文件、跑命令' },
        { k: '循环', tip: '一步步做，直到做完' },
        { k: '权限', tip: '哪些能直接做，哪些先问人' },
        { k: '上下文', tip: '记住前面做过什么' },
      ],
      ring: '代码仓库',
      ringV: '你加上的规矩，换工具不丢',
      parts: [
        { k: '规则文档', tip: '像员工手册，谁来都先读它。AGENTS.md 只当目录，细节放 docs/' },
        { k: '自动检查', tip: '像出厂质检。用中文名判断职业，就加一道检查（PR #672）' },
        { k: '技能说明', tip: '像操作手册。怎么测界面、怎么发推文，用到才读' },
        { k: '任务记录', tip: '像交接本。Linear 单和 PR 正文，下一轮读得懂' },
      ],
      /** 车主同时付费在用的六个 AI（2026-11-17） */
      swap: ['Claude', 'Codex', 'Cursor', 'Trae', 'Gemini', 'Grok'],
      swapK: '我在用的 AI',
      unplug: '拔掉 {x}：仓库还在，其余照跑',
      hint: '悬停一个词看它指什么；点左边一个 AI 把它拔掉',
    },
    ticket: [
      { k: '最小单', en: 'Spec', ex: '玩家：「灵感」写错了' },
      { k: 'AI 开发', en: 'Coding Agent', ex: 'Claude 改成「激励」' },
      { k: '申请合入', en: 'Pull Request', ex: '提交一个 PR' },
      { k: 'AI 代码评审', en: 'Code Review', ex: 'Codex 审' },
      { k: '门禁检查', en: 'CI', ex: '15 分钟跑完' },
      { k: '合并', en: 'Merge', ex: '11:21 合入' },
    ],
    retry: '评审或检查不过，打回重改',
    need: {
      req: '一个大需求',
      project: 'Project',
      ana: 'AI 切片',
      slice: '切成最小单',
      loop: '定时任务',
      loopV: '每轮领一张',
      one: '一张最小单',
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
      butler: 'AI 切片',
      butlerV: '切成 Project 和最小单，排好顺序',
      projects: ['Project A', 'Project B', 'Project C'],
      loop: '定时任务',
      loopV: '一直跑',
      done: '合入',
    },
    /** 验证金字塔：上宽下窄，越往下越贵；每层配小程序仓库里的一件真事（docs/research/talk-04-concepts.md 第 9 节） */
    pyramid: {
      cost: '越往下越贵',
      sure: '越往上越确定',
      hint: '悬停或点一层，看小程序里的例子',
      layers: [
        { k: '代码结构', en: 'codebase', v: '好的接口、架构、重构', ex: '规则数据只有一条生成链，不手改生成的文件' },
        { k: '静态检查', en: 'static analysis', v: 'lint、类型、编译、测试、CI', ex: '用中文名判断职业就红；推送前必跑行尾检查；PR 上 700 多个测试文件' },
        { k: '运行验证', en: 'verification', v: '把程序真的跑起来', ex: '开发者工具里真打开页面截图，两套皮肤都截' },
        { k: '规则文档', en: 'prose', v: '规则、技能、AGENTS.md', ex: 'AGENTS.md 控制在 200 行以内，细节放 docs/' },
        { k: '人工评审', en: 'human review', v: '要人判断的', ex: '真机验收留给我，AI 不领' },
      ],
    },
    caseK: '例子',
    srcK: '依据',
    refK: '参考',
    notes:
      '7 分钟，每步一分钟左右，每步先念右边那句大字。Agentic Engineering 这个词是 Karpathy 2026 年 2 月提的：人不再直接写代码，而是派 AI 去做、自己负责把关，用来和「不看代码只管接受」的 vibe coding 分开。工具：迭代太快，基本拉不开差距，先问 AI 用什么；做定制软件先看标红的三类。模型：这才是拉开差距的地方，好的模型一句话做好，差的十句话还做不好；做界面现在是 Anthropic，生图是 OpenAI，视频是 Google，点开就是榜单。顺带一句短板：没把握时也会给很肯定的答案，所以最后一步要验证。地基：以代码仓库为核心，规矩、任务、记录全放在仓库里；点左边一个 AI 拔掉，其余照跑；我的 Claude 账户被封过一次，换个新账户马上接上。仓库多了再建一个 Home Repo。最小单：一位玩家说「灵感」写错了，AI 写、另一个 AI 审，检查不过就打回。大需求：AI 切片，定时任务每轮新开一次会话、领一张单，这叫 Loop，最早是 Geoffrey Huntley 写的 Ralph。一堆需求：先分诊，再切成一个个 Project。验证：怎么敢让 AI 自己合并？Lauren Tan 11 月在 AI Engineer 大会讲的金字塔：最上面两层是代码结构和静态检查，写成代码就不会忘；往下是真跑起来验证、规则文档，最下面才是人看，越往下越贵。我的小程序每层都有对应的东西，真机验收我自己来。',
  },

  /**
   * 05 怎么维护和迭代。版式照 04：← → 五步，右栏一个问题 + 一句大白话，例子在底部色块。
   * 04 讲「一个需求到合并」，05 只在前面加两步（收反馈 → AI 读表开单），开出来的单交给分诊，就接上了 03。
   * 依据 docs/research/talk-04-maintain.md（HAN-1851）。回复、金币回写现行任务没接上，页上不讲。
   */
  keep: {
    no: '05',
    title: '怎么维护和迭代',
    lead: '反馈进表，定时任务开单，接上流水线自动改完。',
    hint: '← → 下一步',
    levels: [
      {
        k: '收反馈、开单',
        tag: 'Feedback',
        q: '反馈进飞书表，定时任务开单',
        plain: '用户在小程序里写一句，自动存进飞书表；一个 AI 定时任务读表，开成任务单。',
        case: '11 月 12 日 15:24，一位玩家写：术士的固定法术，删掉一刷新又回来了。13 日 02:00，AI 把它开成 HAN-1688。',
        src: '规则写在仓库 docs/routines/feedback.md 里，哪家 AI 都能跑，现在是 Claude 在跑。',
      },
      {
        k: '接上流水线',
        tag: 'Pipeline',
        q: '开出来的单，直接进流水线',
        plain: '框外是一堆杂乱的需求；从分诊 AI 开始，就进了 04 那套系统：分诊、开发、评审、检查、合并，全是 AI。',
        case: '03:00 放进「快速修复」，03:28 Codex 提交 PR，03:35 合入。',
      },
      {
        k: '两条时间线',
        tag: 'Timeline',
        q: '小改动按小时算，大需求按天算',
        plain: '一条小改动、一个大需求，每个点是一步。',
        case: '做完的 193 张反馈单，开单之后一半在 21 小时内做完。',
        src: 'Linear 带「用户反馈」标签的单，2026-11-18 查：199 张，Done 193 张，开单到完成的中位数 20 小时 53 分。',
      },
    ],
    intake: {
      app: '反馈与建议',
      quote: '删掉固定法术，一刷新又回来了。',
      table: '飞书表',
      cols: ['反馈', '状态'],
      // 只写真的那一行，其余行画成灰条，不编别的反馈
      row: { t: '固定法术删不掉', st: '新反馈' },
      done: '已转单',
    },
    open: { clock: '定时任务', clockV: '读表、开单', card: 'HAN-1688' },
    join: {
      pile: '杂乱的需求',
      sources: ['用户反馈', '我的想法', 'AI 发现的问题'],
      card: 'HAN-1688',
      butler: '分诊 AI',
      butlerV: '补项目、归属、优先级',
      lanes: ['快速修复', 'Project'],
      flow: '04 那套系统：从分诊开始',
      /** 同一张单 HAN-1688 走过的流水线，时间出自下面时间线 */
      chain: [
        { k: '最小单', ex: 'HAN-1688' },
        { k: 'AI 开发', ex: '03:22 Codex 认领' },
        { k: '申请合入', ex: '03:28 PR #3296' },
        { k: 'AI 代码评审', ex: '通过' },
        { k: '门禁检查', ex: '通过' },
        { k: '合并', ex: '03:35 合入' },
      ],
    },
    tl: {
      hint: '悬停或点一个点，看这一步',
      lanes: [
        {
          k: '小改动',
          v: '术士固定法术',
          sum: '提交到合入 12 小时 11 分',
          sub: '开单之后 1 小时 35 分',
          span: ['2026-11-12T15:24', '2026-11-13T03:35'],
          gap: { from: 0, to: 1, k: '等下一轮转单' },
          pts: [
            { t: '2026-11-12T15:24', at: '11-12 15:24', k: '玩家提交' },
            { t: '2026-11-13T02:00', at: '11-13 02:00', k: 'AI 开单 HAN-1688' },
            { t: '2026-11-13T03:00', at: '03:00', k: '分诊：放进「快速修复」' },
            { t: '2026-11-13T03:22', at: '03:22', k: 'Codex 认领' },
            { t: '2026-11-13T03:28', at: '03:28', k: 'Codex 提交 PR #3296' },
            { t: '2026-11-13T03:35', at: '03:35', k: '评审、检查通过，合入', end: true },
          ],
        },
        {
          k: '大需求',
          v: '装备商店',
          sum: '一句话到上线 12 天 20 小时',
          sub: '切成项目之后 4 天',
          span: ['2026-11-03T21:12', '2026-11-16T17:02'],
          gap: { from: 0, to: 1, k: '排队等切开' },
          pts: [
            { t: '2026-11-03T21:12', at: '11-03 21:12', k: '问卷里一句「加入商店」，开成 HAN-1388' },
            { t: '2026-11-12T16:21', at: '11-12 16:21', k: 'AI 建项目「装备商店」，切成五张单' },
            { t: '2026-11-12T19:49', at: '11-12 19:49', k: '钱包和商品目录合入' },
            { t: '2026-11-13T02:20', at: '11-13 02:20', k: '商店页合入' },
            { t: '2026-11-14T09:54', at: '11-14 09:54', k: '角色卡入口和卖出合入' },
            { t: '2026-11-16T17:02', at: '11-16 17:02', k: '测试通过，项目完成，商店上线', end: true },
          ],
        },
      ],
    },
    caseK: '例子',
    srcK: '依据',
    notes:
      '2.5 分钟。← → 一步步讲，全程跟着同一条反馈走。收反馈、开单：玩家在小程序「反馈与建议」里写一句，自动存进飞书表，老板自己也能打开看；一个定时任务读表、开单，规则写在仓库里，哪家 AI 都能跑。接上流水线：分诊 AI 再补项目、归属和优先级，下面就是 04 那套系统，这张单 03:22 Codex 认领，03:28 提 PR，03:35 合入。两条时间线：小的那条，玩家下午提交、凌晨两点 AI 开单、一个半小时后合入，中间那 10 个小时是在等下一轮转单，要说实话；大的那条，问卷里一句「加入商店」，排了 8 天多才被切开，切开后 4 天上线。收尾数字：做完的 193 张反馈单，开单后一半在 21 小时内做完。被问到「别人也这么做吗」：Sentry 能从报错一路修到 PR，GitHub Copilot 可以直接把单派给 AI、一定开 PR，最后合入都要人看。Anthropic 自己 2026 年 9 月每天合入超过 3 万次，写代码已经不是瓶颈，评审和检查才是。',
  },

  /**
   * 06 大案例：洛山达 DND 助手。前三步讲整个产品（数字化 + AI、体量、玩家评分），
   * 后两步讲一个 AI 功能（规则问答）：先讲它做了什么，再讲怎么跑完 04 的系统做出来（车主 2026-11-19 要求对调）。依据 docs/research/talk-06-case.md（HAN-1866）。
   */
  case: {
    no: '06',
    title: '大案例：洛山达 DND 助手',
    lead: '一个「数字化 + AI」的微信小程序，6 月起整个交给 AI 团队。',
    hint: '← → 下一步',
    groups: ['整个产品', '一个 AI 功能'],
    levels: [
      {
        k: '数字化 + AI',
        g: 0,
        q: '标准的「数字化 + AI」产品',
        plain: '数字化把线下的东西搬上来，AI 帮玩家答问题、写东西。',
        case: '累计 1.52 万用户（截至 11 月 18 日）。',
        src: '数字化不调用模型；AI 的几项都走模型调用。DM 带团指南是前端说明页，不算 AI。依据小程序 miniprogram/config/features.js（2026-11-18 的 dev）。',
      },
      {
        k: '体量',
        g: 0,
        q: '和每部手机里都有的那个数据库差不多大',
        plain: '手写代码 19.1 万行，和 SQLite 的 17 万行代码一个量级。',
        case: '另有测试 12.2 万行、719 个测试文件，25 个分包，41 个云函数。',
        src: '小程序 dev 2026-11-18（dc0adae）数非空行，不含 53 万行生成的规则数据包。SQLite：Richard Hipp 2026-07-16 的幻灯片《[Should Just Work](https://sqlite.org/talks/shouldwork-20260716.pdf)》，sqlite3.c 共 26.9 万行，其中代码 17 万行。两边口径不完全一样（这边含注释），只说量级。',
      },
      {
        k: '用户增长',
        g: 0,
        q: '累计用户：6 月 6,465，11 月 1.52 万',
        plain: '交给 AI 之后不到五个月，多了 8,700 多人；之前五个月多了 4,700 多。',
        case: '10 月 8 日到 11 月 6 日，30 天新来 1,388 位用户（微信后台）。',
        src: '微信公众平台「累计用户数」，车主 2026-11-19 读出提供，存在小程序仓库 analytics/manual/cumulative-users.json。8 月以后的点只到百位；3 月 31 日没给，不补。',
      },
      {
        k: '玩家评分',
        g: 0,
        q: '玩家打 4.5 分，满分 5 分',
        plain: '103 位玩家填了问卷，九成多打 4 星以上；愿意推荐给团友的打 8.6 分（满分 10）。',
        case: 'NPS +48：推荐的 56%，中立 35%，不推荐 9%。',
        src: '冒险者调研问卷（player_2026q4），小程序后台「问卷结果」页 2026-11-19 的截图：答卷 103 份。NPS = 打 9–10 分的比例减去打 0–6 分的比例。原话来自同一份问卷，不带个人信息。',
      },
      {
        k: '规则问答 AI',
        g: 1,
        q: '规则问答：答得有依据，查不到就直说',
        plain: '玩家问一句规则，AI 去规则书原文里找依据再回答，每句附出处。',
        case: '换成你的公司：规则书换成制度、产品手册、合同模板，就是一个内部问答助手。',
        src: '它是固定四步的 RAG 工作流，不是自己决定下一步的智能体；没用框架，写在云函数里，模型 deepseek-v4.1-flash。依据小程序 docs/rules-qa-runtime.md、cloudfunctions/generateBackground/rulesQaSearch.js。上线后的提问次数这次没拿到。',
      },
      {
        k: '实现过程',
        g: 1,
        q: '一个需求跑完 04 的系统',
        plain: '一个 Project，切成十几张单，四家 AI 各领各的，评测过了才打开。',
        case: '10 月 28 日开 Project，11 月 9 日 01:39 打开入口，玩家在 11 月 11 日的更新说明里看到。',
        src: '切片计划 #2538：9 张功能单 + 4 张计费单，11 月 4 日再加上线链路。上线前管理员评测 40 题：答对 30、部分对 4、没召回 4、失败 2，错误结论 0；出题人自己核的，不是独立复核。打开入口是 PR #3228。',
      },
    ],
    /** 1 数字化 / AI 各有哪些 */
    kinds: [
      { k: '数字化', kind: 'dig', items: ['角色卡', '开团', '装备商店', '金币', '图鉴和法术'] },
      { k: 'AI 能力', kind: 'ai', items: ['规则问答', '背景故事', '角色画像', 'AI 生图', '模组拆解', 'DM 助手'] },
    ],
    /** 2 体量：万行，非空行 */
    size: {
      unit: '万行',
      bars: [
        { k: '洛山达 · 小程序', v: 14.4, me: true },
        { k: '洛山达 · 云函数', v: 4.6, me: true },
        { k: 'SQLite · 代码', v: 17, me: false },
      ],
      sum: { k: '洛山达手写', v: '19.1 万' },
      foot: '不含 53 万行生成的规则数据',
    },
    /** 3 累计用户（车主 2026-11-19 提供，公众平台）；ai 是交给 AI 的那天 */
    growth: {
      unit: '累计用户',
      ai: { t: '2026-06-17', k: '6 月 17 日交给 AI' },
      pts: [
        { t: '2026-01-28', v: 1724, label: '1,724' },
        { t: '2026-02-28', v: 2125, label: '2,125' },
        { t: '2026-04-30', v: 3648, label: '3,648' },
        { t: '2026-05-31', v: 4972, label: '4,972' },
        { t: '2026-06-30', v: 6465, label: '6,465' },
        { t: '2026-07-31', v: 8541, label: '8,541' },
        { t: '2026-08-31', v: 10900, label: '1.09 万' },
        { t: '2026-09-30', v: 12500, label: '1.25 万' },
        { t: '2026-10-31', v: 14300, label: '1.43 万' },
        { t: '2026-11-18', v: 15200, label: '1.52 万' },
      ],
    },
    /** 4 问卷：满意度 1–5 星的人数（2026-11-19 截图） */
    survey: {
      big: '4.5',
      of: '/ 5',
      n: '103 位玩家',
      nps: '推荐意愿 8.6 / 10 · NPS +48',
      stars: [
        { s: 5, n: 62 },
        { s: 4, n: 37 },
        { s: 3, n: 2 },
        { s: 2, n: 0 },
        { s: 1, n: 2 },
      ],
      quotes: ['上手这个软件非常之丝滑，我特别喜欢。', '加油加油，能感受到你们的用心，希望能继续做下去', '能不能出个新手教程，我用了好久都还没有把所有功能摸透'],
    },
    /** 4 规则问答时间线：时间是北京时间 */
    flow: [
      { at: '10-28', k: '开 Project', v: '切成 9 张功能单 + 4 张计费单', who: 'Codex 登记' },
      { at: '10-29', k: '方案和接口', v: 'PRD、页面状态、前后端契约', who: 'Claude' },
      { at: '11-01', k: '导入原文', v: '规则书原文导入、跨版补查', who: 'Codex' },
      { at: '11-03', k: '评测、计费', v: '离线端到端评测、用量账本', who: 'Trae · Grok Bot' },
      { at: '11-04', k: '对话页', v: '开关默认关着', who: 'Claude' },
      { at: '11-07', k: '验证', v: '40 题，错误结论 0', who: 'Claude' },
      { at: '11-09', k: '打开入口', v: '01:39 合入，前 2 题免费', who: 'Claude', end: true },
    ],
    /** 5 规则问答 AI：四步，每步写怎么做 */
    steps: [
      { k: '理解问题', en: 'Understand', how: '模型把玩家的话改写成一个完整的问题，拆出要查的规则点' },
      { k: '查原文', en: 'Retrieve', how: 'RAG：35 本规则书原文切成段落建好索引，按关键词（BM25）找出最相关的几段' },
      { k: '回答', en: 'Generate', how: '只根据找到的原文写结论和解释，每句标上出自哪本书哪一节' },
      { k: '逐句核对', en: 'Verify', how: '每句话对回原文，对不上的删掉；整题过不了就说没找到，不硬答' },
    ],
    img: { src: '/shots/talk/rules-qa.jpg', alt: '规则问答截图：结论、解释和两条已核对的规则书原文', cap: '小程序截图：每条原文标着出自哪本书哪一节' },
    caseK: '例子',
    srcK: '依据',
    notes:
      '4 分钟。前三步讲整个产品。数字化加 AI：角色卡、开团、商店、金币是数字化；规则问答、背景故事、画像这些是 AI。体量：手写代码 19 万行，和每部手机里都有的 SQLite 数据库一个量级，不算 53 万行生成的规则数据。用户：6 月底累计 6,465，11 月 18 日 1.52 万，不到五个月多了 8,700 多人，之前五个月多了 4,700 多。评分：103 位玩家打了 4.5 分，推荐意愿 8.6 分，NPS 正 48。后两步讲一个 AI 功能：规则问答。先看它做了什么：理解、查原文、回答、逐句核对，每句附出处，查不到就说没找到；换成企业，规则书换成你的制度和产品手册。再看怎么做出来的：10 月 28 日开 Project，切成十几张单，Claude 出方案和界面，Codex 做导入和检索，Trae、Grok Bot 做评测和计费；11 月 7 日 40 题评测，错误结论 0，部分对和没召回的也有，不说全对；11 月 9 日打开入口。',
  },

  /** 07 总结：三条（快、专业、省），各指回一页的真数字；最后寻求合作 + 车主微信二维码（车主 2026-11-19 给） */
  sum: {
    no: '07',
    title: '总结',
    lead: '现在是企业落地定制软件与 AI 能力最好的时候。',
    hint: '← → 一句句讲',
    items: [
      { q: '快', a: '一条反馈，开单后一个半小时合入；一个大需求，切开后 4 天上线。', ref: '见 05' },
      { q: '专业', a: '以代码仓库为核心：AI 写、另一个 AI 审，层层检查过了才合并。', ref: '见 04' },
      { q: '省', a: '一个人加每月几百元的 AI 订阅，5 个月合入 1,839 个 PR。', ref: '见 03' },
    ],
    end: '谢谢',
    ask: '寻求合作',
    askV: '想做定制软件、想用上 AI，扫码加我微信',
    qr: { src: '/shots/talk/wechat-qr.png', alt: '李睿涵的微信二维码' },
    site: 'hanglen.github.io',
    notes: '1 分钟。三句话：快，一条反馈一个半小时合入，一个大需求切开后 4 天上线；专业，不是随手让 AI 写，是仓库、评审、层层检查；省，一个人加每月几百块的订阅。所以现在是企业落地定制软件和 AI 能力最好的时候。想做的可以扫码加我。谢谢。',
  },
};
