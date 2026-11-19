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
      '2 分钟。四组按颜色讲：学校、工作、跑团、现在合作。暗线：华为是人写代码；比亚迪时我把 AI 引进团队；小程序从第一行起就是 AI 写的。合作方的公司名、人名只口头讲。',
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
        lines: ['帮玩家建 D&D 角色卡、开团的微信小程序。', '从第一行代码起由几种 AI 分工开发和维护，我只提想法、审方案、发版。'],
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
        lines: ['给初高中师生用的 AI 项目制学习平台，北京十一丰小等学校在用。', '我是合伙人，负责开发和维护，也在歌尔学校带学生做 AI 公司项目。'],
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
   * 03 AI 前后，写软件变了多少（车主 2026-11-19 第三次定）：每一步前后用同一个指标、尽量是同一个产品，数据用到最新——
   * 模型能力（METR 任务时长）→ 成本（Epoch 2026-09）→ 软件更新速度（VS Code 自己前后）→ 一家公司 → 我自己 → 案例（Boris 怎么做到）。
   * 依据 docs/research/talk-03-before-after.md、talk-03-team.md，新数据记在 docs/worklog.md。
   * kind：bars = 多时点横条；vs = 以前 | 现在两张卡；mine = 我自己的每月柱状图（src/data/dnd.json）；how = 案例的做法清单。
   */
  team: {
    no: '03',
    title: 'AI 前后，写软件变了多少',
    lead: '每一项都用同一把尺子量前后两个时间点。',
    hint: '← → 下一步',
    beforeK: '以前',
    nowK: '现在',
    levels: [
      {
        k: '模型能力',
        tag: 'METR',
        kind: 'bars',
        q: 'AI 能独立干完的活：4 分钟 → 12 小时',
        plain: '同一批真实软件任务，先让工程师做、记下用时；再让 AI 独立做，看它能做完多长的活。',
        case: '工程师要 1 小时的活：写个脚本，把一种格式的数据转成另一种；要 8 小时的活：给交易回测工具写 GPU 加速，快 30 倍。',
        src: 'METR《[Time horizons](https://metr.org/time-horizons/)》Time Horizon 1.1 数据文件 benchmark_results_1_1.yaml，2026-11-19 下载，取 50% 时长的点估计：GPT-4（2023-03-14）4.0 分钟；GPT-4o（2024-05-13）7.0 分钟；Claude 3.7 Sonnet（2025-02-24）60 分钟；GPT-5（2025-08-07）203 分钟；Claude Opus 4.5（2025-11-24）293 分钟；Claude Opus 4.6（2026-02-05）719 分钟。「能做完」指成功率一半。工程师是平均约 5 年经验的软件、机器学习和安全从业者。例子出自 METR 论文《[Measuring AI Ability to Complete Long Tasks](https://arxiv.org/abs/2503.14499)》表 1（munge_data 56 分钟、cuda_backtesting 8 小时）。Claude Mythos Preview 早期版（2026-04-07）1,045 分钟，METR 写 16 小时以上的测量不可靠。页面 2026-09-08 起不再更新。区间很宽，看量级。',
      },
      {
        k: '成本',
        tag: 'Epoch',
        kind: 'vs',
        q: '同样的水平：每道题 $0.30 → $0.0004',
        plain: '同一套博士级科学题考到同一个分数，不到 18 个月，价格降到七百分之一。',
        case: '把所有题目和模型放在一起算：同样的水平，价格每年降到原来的约 1/13。',
        src: 'Epoch AI，Luke Emberson、David Roodman《[The plunging price of thought](https://epoch.ai/publications/the-plunging-price-of-thought)》，2026-09-22：o3（2025-01-31）在 GPQA Diamond 上考到去掉猜题底分后 75%（原始约 81%），估计每题平均 30 美分；不到 18 个月后的 GPT-5.6 Luna 以每题 0.0004 美元做到同一分数，降了 725 倍。总体每季度降约 47%，即每年约 13 倍。作者写明：跑分不等于有用的工作，且假设用户总挑最便宜的模型。',
        vs: [
          { at: '2025-01 · o3', big: '$0.30', k: 'GPQA 考到 81 分，每道题的花费' },
          { at: '2026 · GPT-5.6 Luna', big: '$0.0004', k: '同一个分数，每道题的花费' },
        ],
      },
      {
        k: '软件更新速度',
        tag: 'VS Code',
        kind: 'vs',
        q: 'VS Code：一个月一版 → 一周一版',
        plain: '同一个产品，数相邻两个正式版隔几天。',
        case: '微软在 2026 年 3 月 9 日的 1.111 版说明里写：这是第一个每周发布的正式版。',
        src: 'Visual Studio Code 官方发布说明。以前：GitHub microsoft/vscode 的 Release，2022 年 1.64.0（02-03）到 1.74.0（12-07）11 个正式版，相邻平均 30.7 天，2023 年 30.8 天，2025 年仍是月更。现在：[1.111](https://code.visualstudio.com/updates/v1_111)（2026-03-09）「the first of our weekly Stable releases」，到 [1.147](https://code.visualstudio.com/updates)（2026-11-18）共 36 个间隔、254 天，平均 7.1 天。',
        vs: [
          { at: '2022–2025', big: '31 天', k: '相邻两个正式版平均隔的天数' },
          { at: '2026-03 起', big: '7 天', k: '相邻两个正式版平均隔的天数' },
        ],
      },
      {
        k: '一家公司',
        tag: 'Anthropic',
        kind: 'vs',
        q: 'Anthropic 每天合入的代码：2,500 次 → 3 万次',
        plain: '同一个代码仓库，2026 年 5 月到 9 月。',
        case: '同一段时间，7 个人用 5 个月把全公司的版本管理从 Git 换成自己做的系统。原文：写代码已经不是瓶颈。',
        src: 'Anthropic《[Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control)》，2026-10-13：「In May 2026, Anthropic averaged around 2,500 code changes merged per day; as of September, we merged over 30,000 per day.」原文没有配上同期人数。',
        vs: [
          { at: '2026-05', big: '2,500 次', k: '每天合进主仓库的代码改动' },
          { at: '2026-09', big: '30,000+ 次', k: '每天合进主仓库的代码改动' },
        ],
      },
      {
        k: '我自己',
        tag: '1,839 PR',
        kind: 'mine',
        q: '我每月合入的 PR：120 → 612',
        plain: '同一个仓库，7 月到 10 月；每月 AI 订阅从约 $20 涨到约 $80。',
        case: '最近 30 天 705 个，平均每天 24 个。我只提想法、审方案、发版，代码全部由 AI 写。',
        src: '洛山达 DND 助手仓库 dev 分支合并记录（first-parent，剔除发版公告），2026-06-17 到 11-18，共 1,839 个；6 月从 17 日起算，11 月统计到 18 日。订阅花费是车主 2026-11-19 口述的大概数，不是账单。',
      },
      {
        k: '案例',
        tag: 'Boris',
        kind: 'how',
        q: 'Claude Code 负责人：一个人一天 150 个 PR',
        plain: '2 月他每天 10 到 30 个，4 月底有一天做到 150 个。靠的是左边四件事，一个人顶一个团队。',
        case: '这四件事就是下一页的 Agentic Engineering，我的小程序也是这么做的。',
        src: 'Boris Cherny：Lenny\'s Podcast 2026-02-19（[YouTube](https://www.youtube.com/watch?v=We7BZVKbCVw)），「every day I ship, like, ten, twenty, thirty pull requests」，当时开 5 个 agent；Sequoia《Training Data》2026-05-05（[YouTube](https://www.youtube.com/watch?v=SlGRN8jh2RI)），「a day last week I did like 150 PRs」，白天约几百个 agent、夜里约几千个，150 是他说在试上限的单日记录。做法出自他 2026-01-02 在 X 上的长帖（[原帖](https://x.com/bcherny/status/2007179832300581177)）：终端 5 个、网页 5–10 个 Claude 同时跑；多数会话先用 Plan 模式；团队共用一份 CLAUDE.md，Claude 错一次就记一条；最重要的是给 Claude 验证自己工作的办法，质量能到 2–3 倍。两场访谈是转写，不是书面报告。',
      },
    ],
    /** 我自己：每月合入的 PR，数字来自 src/data/dnd.json */
    mine: { unit: '每月合入的 PR', partial: '6 月从 17 日起算，11 月统计到 18 日', cost: [{ k: '6 月', v: '约 $20' }, { k: '10 月', v: '约 $80' }], costK: '每月 AI 订阅' },
    /** 模型能力：METR 50% 任务时长（分钟），Time Horizon 1.1 */
    swe: {
      k: 'AI 能独立做完的任务，工程师要做多久',
      pts: [
        { at: '2023-03', who: 'GPT-4', v: 4, label: '4 分钟' },
        { at: '2024-05', who: 'GPT-4o', v: 7, label: '7 分钟' },
        { at: '2025-02', who: 'Claude 3.7 Sonnet', v: 60, label: '1 小时' },
        { at: '2025-08', who: 'GPT-5', v: 203, label: '3.4 小时' },
        { at: '2025-11', who: 'Claude Opus 4.5', v: 293, label: '4.9 小时' },
        { at: '2026-02', who: 'Claude Opus 4.6', v: 719, label: '12 小时' },
      ],
    },
    /** 案例：Boris 的四件事（2026-01-02 长帖、两场访谈） */
    how: [
      { k: '同时开很多个 AI', v: '1 月终端 5 个、网页 5–10 个；5 月白天几百个，夜里几千个' },
      { k: '先定计划再动手', v: '多数会话先用 Plan 模式，计划对了，AI 通常一次写对' },
      { k: '共用一份规矩', v: 'CLAUDE.md 放进仓库，AI 错一次就记一条' },
      { k: '让 AI 自己验证', v: '给它跑测试、开浏览器检查的办法，质量能到 2–3 倍' },
    ],
    readK: '悬停或点一条，看读数',
    caseK: '例子',
    srcK: '依据',
    notes:
      '3.5 分钟。← → 一步步讲，每一项都是同一个指标量两个时间点。模型能力：METR 找来几百个真实软件任务，先让工程师做、记下用时，再让 AI 独立做；2023 年 GPT-4 能做完工程师 4 分钟的活，2026 年 2 月 Claude Opus 4.6 能做完 12 小时的活，比如给交易回测工具写 GPU 加速。成本：同一套博士级科学题考到同一个分数，2025 年 1 月每题 30 美分，不到 18 个月后 0.04 美分，降了 725 倍；放在一起算每年降到约 1/13。软件更新速度：同一个 VS Code，以前一个月一版，今年 3 月起一周一版。一家公司：Anthropic 同一个仓库，5 月每天合入 2,500 次，9 月 3 万多次。我自己：7 月合入 120 个 PR，10 月 612 个，订阅从每月 20 美元左右到 80 美元左右。案例：Claude Code 负责人 Boris，2 月每天 10 到 30 个 PR，4 月底有一天 150 个。他怎么做到的：同时开很多个 AI；先定计划再动手；团队共用一份规矩，AI 错一次记一条；最重要的是让 AI 自己验证。这就是一个人顶一个团队的办法，下一页细讲。',
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
        q: '八类工具，做定制软件先备三类',
        plain: '有一个要解决的问题，先问 AI 我需要什么工具。下面八类是我问完、用过之后的答案。',
        case: '做定制软件先看标红的三类。我用 Claude Code、Codex 写代码，GitHub、Linear 放代码管任务，微信云开发放上线。',
        src: '2026-11-17 打开各家官网整理（HAN-1844）。挑的标准：不用写代码就能上手、有免费档、国内能开通。',
      },
      {
        k: '模型',
        tag: 'Models',
        q: '模型：按擅长的领域选',
        plain: '各家模型擅长的领域不同：界面、生图、视频的第一名各是一家。',
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
        plain: 'AI 先分诊，再切成一个个 Project，里面全是最小单；定时任务持续领单。',
        ref: 'Triage：新进来的事先分拣（[Linear 文档](https://linear.app/docs/triage)）',
        case: '5 个月 1,839 个 PR，最近 30 天平均每天 24 个。',
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
      '7 分钟，每步一分钟左右，每步先念右边那句大字。Agentic Engineering 这个词是 Karpathy 2026 年 2 月提的：人不再直接写代码，而是派 AI 去做、自己负责把关，用来和「不看代码只管接受」的 vibe coding 分开。工具：八类，先问 AI 用什么；做定制软件先看标红的三类。模型：按擅长的领域选；做界面现在是 Anthropic，生图是 OpenAI，视频是 Google，点开就是榜单。顺带一句短板：没把握时也会给很肯定的答案，所以最后一步要验证。地基：以代码仓库为核心，规矩、任务、记录全放在仓库里；点左边一个 AI 拔掉，其余照跑；我的 Claude 账户被封过一次，换个新账户马上接上。仓库多了再建一个 Home Repo。最小单：一位玩家说「灵感」写错了，AI 写、另一个 AI 审，检查不过就打回。大需求：AI 切片，定时任务每轮新开一次会话、领一张单，这叫 Loop，最早是 Geoffrey Huntley 写的 Ralph。一堆需求：先分诊，再切成一个个 Project。验证：怎么敢让 AI 自己合并？Lauren Tan 11 月在 AI Engineer 大会讲的金字塔：最上面两层是代码结构和静态检查，写成代码就不会忘；往下是真跑起来验证、规则文档，最下面才是人看，越往下越贵。我的小程序每层都有对应的东西，真机验收我自己来。',
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
        q: '小改动 1 小时 35 分，大需求 4 天',
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
    lead: '一个「数字化 + AI」的微信小程序，从第一行代码起全部由 AI 开发。',
    hint: '← → 下一步',
    groups: ['整个产品', '一个 AI 功能'],
    levels: [
      {
        k: '数字化 + AI',
        g: 0,
        q: '标准的「数字化 + AI」产品',
        plain: '数字化把线下的角色卡、开团搬上来；AI 回答规则问题、生成背景故事和画像。',
        case: '累计 1.52 万用户（截至 11 月 18 日）。',
        src: '数字化不调用模型；AI 的几项都走模型调用。DM 带团指南是前端说明页，不算 AI。依据小程序 miniprogram/config/features.js（2026-11-18 的 dev）。',
      },
      {
        k: '体量',
        g: 0,
        q: '手写代码 19.1 万行',
        plain: '传统估算里，一个人一年最多写 2 万行；这个体量约 9.5 人年，4 人团队要写两年多。',
        case: '和 SQLite（每部手机里都装着的数据库）的 17 万行代码同一个量级。',
        src: '小程序 dev 2026-11-18（dc0adae）数非空行，不含 53 万行生成的规则数据包。人年：Steve McConnell《Code Complete》第 2 版表 27-2 转述 COCOMO II，10 万行级项目每人每年 1,000–20,000 行，名义值 2,600 行，含需求、设计、测试和返工，不只是敲代码；这里取范围上限 2 万行，190,513 ÷ 20,000 ≈ 9.5 人年，按名义值是约 73 人年。行数不等于功能，AI 写的行和人写的行不完全可比，只看量级。SQLite：Richard Hipp 2026-07-16 的幻灯片《[Should Just Work](https://sqlite.org/talks/shouldwork-20260716.pdf)》，sqlite3.c 共 26.9 万行，其中代码 17 万行。两边口径不完全一样（这边含注释），只说量级。',
      },
      {
        k: '用户增长',
        g: 0,
        q: '累计用户：1,724 → 1.52 万',
        plain: '今年 1 月到 11 月，不到 10 个月涨到原来的 8.8 倍。',
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
        q: '规则问答：每句话都附原文出处',
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
      /** 换算成人年：按 COCOMO II 范围上限，一人一年 2 万行 */
      eq: { k: '换算成人力', v: '≈ 9.5 人年', sub: '4 人团队，约 2.4 年', read: '190,513 行 ÷ 每人每年 2 万行（传统估算的上限）≈ 9.5 人年；名义值每人每年 2,600 行时约 73 人年' },
    },
    /** 3 累计用户（车主 2026-11-19 提供，公众平台） */
    growth: {
      unit: '累计用户',
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
      '4 分钟。前三步讲整个产品。数字化加 AI：角色卡、开团、商店、金币是数字化；规则问答、背景故事、画像这些是 AI。体量：手写代码 19 万行，不算 53 万行生成的规则数据。按传统软件工程的估算，一个人一年最多写 2 万行，这还包括设计、测试和返工；19 万行就是 9.5 人年，4 个人的小团队要写两年多。和每部手机里都有的 SQLite 数据库一个量级。用户：1 月底累计 1,724，11 月 18 日 1.52 万，不到 10 个月涨到 8.8 倍。评分：103 位玩家打了 4.5 分，推荐意愿 8.6 分，NPS 正 48。后两步讲一个 AI 功能：规则问答。先看它做了什么：理解、查原文、回答、逐句核对，每句附出处，查不到就说没找到；换成企业，规则书换成你的制度和产品手册。再看怎么做出来的：10 月 28 日开 Project，切成十几张单，Claude 出方案和界面，Codex 做导入和检索，Trae、Grok Bot 做评测和计费；11 月 7 日 40 题评测，错误结论 0，部分对和没召回的也有，不说全对；11 月 9 日打开入口。',
  },

  /** 07 总结：回答封面的三个问题，每问「以前 → 现在」，指回对应的页；不放数字（车主 2026-11-19 定） */
  sum: {
    no: '07',
    title: '总结',
    lead: '现在是企业落地定制软件与 AI 能力最好的时候。',
    hint: '← → 一问一问讲',
    beforeK: '以前',
    nowK: '现在',
    items: [
      { q: '怎么做出来', before: '专业团队、外包', now: '会调动 AI 的人', ref: '见 03' },
      { q: '怎么维护', before: '专人维护、排期', now: 'AI 工作流 + 人工复核', ref: '见 05' },
      { q: '怎么系统化', before: '靠人的经验', now: '写进代码仓库', ref: '见 04' },
    ],
    notes: '1 分钟。回到开场的三个问题。怎么做出来：以前招一支团队或找外包，现在前沿的软件开发，一定是能充分调动 AI 能力的人在做。怎么维护：以前留人专门维护、需求排期，现在反馈直接进 AI 工作流，人只做少量复核。怎么系统化：以前靠人的经验，现在规矩、任务、检查都写进代码仓库，换哪个 AI 都能接着跑。所以现在是企业落地定制软件和 AI 能力最好的时候。',
  },

  /** 08 交流与合作：一句邀请 + 微信二维码 + 谢谢，不分类（车主 2026-11-19 定） */
  contact: {
    no: '08',
    title: '交流与合作',
    say: '欢迎有软件与 AI 需求，或者想聊运营、零售、自媒体等话题的朋友，加我微信交流。',
    end: '谢谢',
    askV: '扫码加我微信',
    qr: { src: '/shots/talk/wechat-qr.png', alt: '李睿涵的微信二维码' },
    site: 'hanglen.github.io',
    notes: '0.5 分钟。欢迎有软件和 AI 需求的朋友来找我；运营、零售、自媒体这些我也很想跟做过的朋友交流学习，其他想聊的也欢迎。扫码加我微信。谢谢大家。',
  },
};
