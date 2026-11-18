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
        x: 680,
        y: 450,
        title: '洛山达 DND 助手 · 微信小程序',
        lines: ['帮玩家建 D&D 角色卡、开团的微信小程序。', '今年 6 月起交给几种 AI 分工维护，我只提想法、审方案、发版。'],
        stat: { v: '1.46 万', k: '累计用户（截至 11 月 6 日）' },
      },
      {
        id: 'box',
        label: '冒险匣子\n跑团店定制规则',
        group: 'trpg',
        status: 'done',
        lab: 'top',
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
        x: 610,
        y: 650,
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
        label: 'G School · 教育\n合伙项目',
        group: 'partner',
        status: 'doing',
        x: 250,
        y: 560,
        title: 'G School · 教育赛道',
        statusText: '合伙项目 · 进行中',
        lines: ['合伙项目：给初高中老师和学生用的 AI 项目制学习平台，北京十一丰小等多所学校在用。我负责开发和维护。', '在歌尔学校带学生做 AI 公司项目。'],
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
        who: '2,012 位中国网民',
        kind: 'ai',
        items: [
          { v: 96, big: '95.6%', text: '3 个月内用过 AI', ref: 1 },
          { v: 79, big: '78.7%', text: '每周用好几次', ref: 1 },
          { v: 30, big: '30.1%', text: '每天都用', ref: 1 },
        ],
        note: { big: '超 50%', text: '全国用过生成式 AI', ref: 2 },
      },
      {
        k: '上班用 AI',
        who: '中国员工受访者',
        kind: 'ai',
        items: [
          { v: 73, big: '73%', text: '每周用好几次', ref: 3 },
          { v: 26, big: '26%', text: '几乎每天用', ref: 3 },
        ],
      },
      {
        k: '企业数字化',
        who: '10 万余家企业（2025）',
        kind: 'dig',
        items: [
          { v: 15, big: '15%', text: '靠数据跑业务', ref: 4 },
          { v: 2, big: '1.7%', text: '全部业务打通', ref: 4 },
        ],
      },
      {
        k: '企业用 AI',
        who: '6,000 余家中小企业',
        kind: 'ai',
        items: [
          { v: 50, big: '50%', text: '已经在用 AI', ref: 5 },
          { v: 14, big: '13.6%', text: '用进核心业务', ref: 5 },
          { v: 2, big: '2%', text: '嵌进全部流程', ref: 5 },
        ],
      },
    ],
    end: '用 AI 的人已经很多，用进业务的企业还很少：这正是定制软件要做的事。',
    refs: [
      '腾讯研究院，2026-03，2,012 份在线问卷，偏年轻、高学历；按用户里的 82.3%、31.5% 折算',
      'CNNIC《生成式人工智能应用发展报告（2026）》，2026-09',
      'ADP《People at Work 2026》，2026-07',
      '中信联、点亮智库《企业数字化转型指数报告（2025）》',
      '中国信通院，2026-03；按已应用企业里的 23% + 4%、4% 折算',
    ],
    notes:
      '2.5 分钟。← → 一个数一个数讲，颜色越深用得越深，四块都是中国的数。个人：腾讯研究院 2,000 多位网民，95.6% 最近三个月用过 AI，每周用好几次的近八成，每天都用的三成；这批人偏年轻、学历高，全国口径是 CNNIC 的超过一半、7 亿多人。上班：中国员工 73% 每周用好几次，几乎每天用的 26%（全球同一份调查是一半和 20%，中国明显更高）。企业数字化：10 万多家企业里，真正靠数据跑业务的只有 15%，全部打通的不到 2%，这是 2025 年的数。企业 AI：6,000 多家中小企业，一半已经在用，用进核心业务的 13.6%，嵌进全部流程的只有 2%。收尾：用的人很多，用进业务的很少，这正是定制软件要做的事。被问到可以口头补：全球用 AI 带来显著利润的组织约 6%（麦肯锡 2026-08）；重点工业企业数字化研发设计工具普及率 86.3%（工信部 2026-07），工具有了，业务还没跑在数据上。',
  },

  /**
   * 03 怎么做出来：工具 → 模型能力 → 地基（仓库）→ 一张单 → 一个大需求（Project）→ 一堆需求 → 做出来一件事。
   * 「推荐流程」车主 2026-11-17 定挪到后面讲（配置好以后能做到什么），先不放这页。
   */
  make: {
    no: '03',
    kicker: '痛点一',
    title: '怎么做出来',
    lead: '东西都放进代码仓库，再把任何需求切成最小单交给 AI。',
    hint: '← → 下一步',
    levels: [
      {
        k: '工具准备',
        tag: 'Tools',
        q: '先问 AI：我要做这件事，用什么工具好？',
        plain: '下面八类是我问完、用过之后的答案，点名字打开官网。',
        case: '做定制软件先看标红的三类。我用 Claude Code、Codex 写代码，GitHub、Linear 放代码管任务，微信云开发放上线。',
        src: '2026-11-17 打开各家官网整理（HAN-1844）。挑的标准：不用写代码就能上手、有免费档、国内能开通。',
      },
      {
        k: '模型能力',
        tag: 'Models',
        q: '不同的任务，选擅长的模型',
        plain: '好的模型一句话做好，差的模型十句话还做不好。',
        ref: '榜单：[LMArena](https://arena.ai/leaderboard)、[Artificial Analysis](https://artificialanalysis.ai/leaderboards/models)',
        case: '一张单交给谁，看它擅长什么：界面交给 Claude，后端和美术交给 Codex。',
        src: '各榜 2026-11-08 至 11-18 打开的页面（HAN-1845）。名次区间互相重叠时，不说谁已经拉开；长文档那页两处第一名对不上，不上表。',
      },
      {
        k: '地基',
        tag: 'Harness',
        q: '以代码仓库为核心',
        plain: '规矩、任务、记录全放进代码仓库，不放在开发工具上；工具随时能换。',
        ref: 'Matt Pocock《[The Home Repo Pattern](https://aihero.dev/the-home-repo-pattern)》、OpenAI《[Harness engineering](https://openai.com/index/harness-engineering/)》',
        case: '我同时付费用 6 个 AI。Claude 账户被封过一次，换个新账户马上接上：规矩、任务、记录都在仓库里。',
        src: 'Anthropic 2025-11：Claude Agent SDK 是通用的 agent harness。OpenAI 2026-02《Harness engineering》：AGENTS.md 当目录，规矩写不清就写成检查。仓库多了，再建一个 Home Repo 放共用的规矩（Matt Pocock，2026-11-12）。',
      },
      {
        k: '最小单',
        tag: 'Spec',
        q: '一张最小单：AI 写，另一个 AI 审',
        plain: '写清一张最小单，AI 开发，另一个 AI 评审，检查全过才合并。',
        ref: 'Anthropic《[Harness design for long-running apps](https://www.anthropic.com/research/harness-design-long-running-apps)》：干活的和打分的分开',
        case: '一位玩家反馈：页面上「灵感」写错了，应该是「激励」。10 月 29 日开单，2.5 小时合入。',
        src: 'Anthropic 2026-03：把干活的和评判的 agent 分开。',
      },
      {
        k: '一个大需求',
        tag: 'Project + Loop',
        q: '大需求，先让 AI 切成最小单',
        plain: '一个大需求就是一个 Project：AI 切片，定时任务每轮领一张，循环做完。',
        ref: 'Anthropic《[Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/research/building-c-compiler)》：每轮新开会话，领下一个任务',
        case: '「约团排期」：14:30 写方案，切成 6 片，20:57 全部合入。',
        src: 'Anthropic 2026-02：16 个 Claude 并行，每轮开新会话，领下一个任务。',
      },
      {
        k: '一堆需求',
        tag: 'Triage',
        q: '一堆需求，也交给 AI 切片',
        plain: 'AI 把它们切成一个个 Project，里面全是最小单；定时任务一直跑就行。',
        case: '5 个月 1,633 个 PR，最近 30 天平均每天 26 个。',
      },
      {
        k: '做出来一件事',
        tag: 'Any task',
        q: '任何难事，切到最小单就做得出来',
        plain: '这套不只做软件：一层层拆开，拆到能直接动手。',
        case: '这场演讲就是 Linear 里的一个 Project：调研单交给 Cursor，改页面的单交给 Claude。',
        src: '例如 HAN-1819（调研：02 页换成中国数据，Cursor）→ HAN-1822（按调研改页，Claude）。',
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
    /** 模型能力：每个领域写领先的那家，悬停看前三，点击打开榜单（docs/research/talk-03-models.md） */
    modelsHead: ['领域', '现在领先', '榜单'],
    models: [
      { k: '做网页、界面', lead: 'Anthropic 包揽前三', top: 'Claude Fable 5.2 · Claude Opus 5.5 · Claude Sonnet 5.5', board: 'LMArena WebDev', at: '11-13', href: 'https://arena.ai/leaderboard/code/webdev' },
      { k: '写代码', lead: 'Copilot 第一，Claude 并列第二', top: 'Copilot Fusion 71.2% · Claude Opus 5.5 65.8% · Claude Fable 5.2 65.8%', board: 'Terminal-Bench', at: '11-18', href: 'https://www.tbench.ai/' },
      { k: '生图、海报', lead: 'OpenAI 包揽前三', top: 'GPT-Image-2.5 Sunburst · GPT-Image-2.6 Sunburst · GPT-Image-2（商业设计榜）', board: 'LMArena 文生图', at: '11-16', href: 'https://arena.ai/leaderboard/image/text-to-image/commercial-design' },
      { k: '视频', lead: 'Google 包揽前三', top: 'Gemini Omni 1.2 Flash · 1.1 Flash · gemini-omni-flash；国产最高是即梦 Seedance，第 6', board: 'LMArena 文生视频', at: '11-08', href: 'https://arena.ai/leaderboard/video/text-to-video' },
      { k: '综合', lead: 'Claude 第一，GPT、Gemini 随后', top: 'Claude Fable 5.2 65 · GPT-6.2 Astra 62 · Gemini 4 Carbon 60', board: 'Artificial Analysis', at: '11-18', href: 'https://artificialanalysis.ai/leaderboards/models' },
      { k: '性价比', lead: 'OpenAI 包揽前三', top: '指数 50 分以上、单次更便宜：GPT-6.1 Terra · GPT-6.2 Sol · GPT-6.2 Astra', board: 'Artificial Analysis', at: '11-18', href: 'https://artificialanalysis.ai/leaderboards/models' },
      { k: '国产', lead: 'Kimi、千问、腾讯混元', top: 'Kimi K3.1 Pro 46 · Qwen4 Max 43 · 腾讯 Hy4 35', board: 'Artificial Analysis', at: '11-18', href: 'https://artificialanalysis.ai/leaderboards/models' },
    ],
    modelsHint: '悬停或点一行，看前三名',
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
    craft: {
      from: '一堆需求',
      fromV: '切成 Project，再切成最小单',
      rows: [
        { k: '这场演讲', steps: ['Project「青岛演讲」', '调研单 · Cursor', '改页单 · Claude', '合入上线'], plain: '20 分钟的演讲，也是一张张单做出来的。' },
        { k: '公众号推文工作流', steps: ['挑这期更新', '写稿', '配图', 'AI 审稿', '进草稿箱'], plain: '写文章也一样：挑素材、写、配图、找人审，最后我点发布。' },
        { k: '规则问答智能体', steps: ['理解问题', '查原文', '回答', '逐句核对'], plain: '回答一个问题：先弄懂问什么，翻原文，答完逐句再对一遍。下一页细讲。' },
      ],
      hint: '悬停或点一行',
    },
    caseK: '例子',
    srcK: '依据',
    refK: '参考',
    notes:
      '7 分钟，每步一分钟左右，每步先念右边那句大字。工具：不用背这张表，先问 AI「我要做这件事，用什么工具好」；这八类是我问完、用过之后的答案，做定制软件先看标红的三类。模型能力：不同的任务选擅长的模型，好的模型一句话做好，差的十句话还做不好；做界面现在是 Anthropic，生图是 OpenAI，视频是 Google，表上有日期，点开就是榜单。顺带一句短板：没把握时也会给很肯定的答案，所以后面要有检查，05 页还会讲。地基：以代码仓库为核心，规矩、任务、记录全放在仓库里，不放在开发工具上。左边是我同时在用的六个 AI，点一个拔掉，其余照跑；我的 Claude 账户被封过一次，换个新账户马上接上。这个做法参考了 Matt Pocock 的 Home Repo 和 OpenAI 的 Harness engineering。最小单：一位玩家说「灵感」写错了，AI 写、另一个 AI 审，检查不过就打回；干活的和打分的分开，是 Anthropic 工程博客的做法。大需求：AI 切片，把一个 Project 切成最小单，定时任务每轮领一张；Claude 做前端，Codex 做后端和美术。参考 Anthropic 16 个 Claude 并行写编译器那篇。一堆需求：也交给 AI 切片，切成一个个 Project，定时任务一直跑。做出来一件事：三个例子，这场演讲本身是一个 Project，调研交给 Cursor、改页面交给 Claude；公众号推文工作流，挑更新、写稿、配图、AI 审稿、进草稿箱，最后我点发布；规则问答智能体，理解、查原文、回答、逐句核对，下一页细讲。',
  },

  /**
   * 04 痛点二：怎么维护和迭代。版式照 03：← → 五步，右栏一个问题 + 一句大白话，例子在底部色块。
   * 03 讲「一个需求到合并」，04 只在前面加两步（收反馈 → AI 读表开单），开出来的单交给分诊，就接上了 03。
   * 依据 docs/research/talk-04-maintain.md（HAN-1851）。回复、金币回写现行任务没接上，页上不讲。
   */
  keep: {
    no: '04',
    kicker: '痛点二',
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
        plain: '分诊 AI 再理一遍，接着就进痛点一那套系统：开发、评审、检查、合并。',
        case: '03:00 放进「快速修复」，03:28 Codex 提交 PR，03:35 合入。',
      },
      {
        k: '告诉用户',
        tag: 'Changelog',
        q: '改好了，用更新说明告诉用户',
        plain: '每个改动附一行更新说明，发版时汇总进小程序的「版本更新」。',
        case: '更新说明和代码在同一个 PR 里提交，合入后等下一次发版。',
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
      card: 'HAN-1688',
      butler: '分诊 AI',
      butlerV: '补项目、归属、优先级',
      lanes: ['快速修复', 'Project'],
      flow: '痛点一那套系统',
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
    tell: {
      pr: 'PR #3296',
      note: '附一行更新说明',
      noteV: '修复子职赠送法术移除后刷新又出现',
      page: '版本更新',
      back: '回到用户',
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
      '2.5 分钟。← → 一步步讲，全程跟着同一条反馈走。收反馈、开单：玩家在小程序「反馈与建议」里写一句，自动存进飞书表，老板自己也能打开看；一个定时任务读表、开单，规则写在仓库里，哪家 AI 都能跑。接上流水线：分诊 AI 再补项目、归属和优先级，下面就是痛点一那套系统，这张单 03:22 Codex 认领，03:28 提 PR，03:35 合入。告诉用户：每个 PR 附一行更新说明，发版时进「版本更新」。两条时间线：小的那条，玩家下午提交、凌晨两点 AI 开单、一个半小时后合入，中间那 10 个小时是在等下一轮转单，要说实话；大的那条，问卷里一句「加入商店」，排了 8 天多才被切开，切开后 4 天上线。收尾数字：做完的 193 张反馈单，开单后一半在 21 小时内做完。被问到「别人也这么做吗」：Sentry 能从报错一路修到 PR，GitHub Copilot 可以直接把单派给 AI、一定开 PR，最后合入都要人看。Anthropic 自己 2026 年 9 月每天合入超过 3 万次，写代码已经不是瓶颈，评审和检查才是。',
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
      { q: '有没有规则文档？', good: '写清楚这个项目怎么干，换人换 AI 都能接手。', mine: 'AGENTS.md 只当目录，细节放 docs/。' },
      { q: '有没有自动检查？', good: '每次改动都自动跑测试，不靠人盯。', mine: '710 个测试文件，不过不合并。' },
      { q: '问题从哪提，怎么跟踪？', good: '每个问题有单号，查得到谁在修、修到哪。', mine: '玩家反馈汇总进表格，分诊后开成任务单。' },
      { q: '改一个小问题要多久？', good: '说得出具体时间，有记录可查。', mine: '193 张反馈单，开单后一半在 21 小时内做完。' },
    ],
    hint: '← → 一句句讲',
    notes: '2 分钟。五句话对应前面三个痛点：前两句是「做出来」，后三句是「管得住」。讲完说：这五句答不上来的，报价再低也要小心。',
  },
};
