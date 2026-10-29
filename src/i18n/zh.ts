export const zh = {
  lang: 'zh-CN',
  meta: {
    title: '李睿涵 · AI 工程化',
    description:
      '李睿涵，AI 应用与 AI 工程化工程师。一个人带着一组 AI Agent，研发并运营 1.4 万用户的微信小程序。',
  },
  nav: {
    work: '项目',
    method: '方法',
    experience: '经历',
    contact: '联系',
    switchLabel: 'EN',
    switchHref: '/en/',
  },
  hero: {
    eyebrow: 'AI 应用 · AI 工程化',
    name: '李睿涵',
    title: ['让 AI Agent 组队', '交付真实的产品。'],
    lead:
      '我设计并运行了一条从用户反馈到上线的 AI 研发流水线：多个 Agent 分工认领需求、写代码、过门禁、互相评审，我只在关键节点拍板。它支撑着一个 1.4 万用户的产品，每天合入十几个 PR。',
    ctaPrimary: '看流水线怎么跑',
    ctaSecondary: '联系我',
  },
  terminal: {
    title: 'dnd-miniprogram · 今日合入',
    lines: [
      ['分诊', '#1805 约团排期 → 补齐标签，进入执行队列'],
      ['PRD', 'docs: 约团排期 PRD（#1805）'],
      ['执行', 'feat: 约团排期共用时间规则与脱敏模型（第一片）'],
      ['执行', 'feat: 约团排期只读接口与桌面版本探测（第二片）'],
      ['执行', 'feat: 约团排期关闭事务与重复请求保护（第三片）'],
      ['门禁', '183 项检查 · 全部通过'],
      ['评审', '交叉评审 → 逐条修复并回复'],
      ['合并', '车主确认 → dev → 云函数自动部署'],
    ],
    footer: '流程示意；PR 标题取自 2026-10-29 的真实合入记录，当天共合入 12 个',
  },
  stats: [
    { value: '1.4万+', label: '小程序用户', note: '近半年增长超 1000%' },
    { value: '1,326', label: '合入的 PR', note: '4.5 个月，基本由 AI Agent 完成' },
    { value: '183', label: '自动化门禁', note: '把 AI 常犯的错写成检查' },
    { value: '10s→2s', label: '慢接口优化', note: '比亚迪品质系统' },
  ],
  work: {
    kicker: '精选项目',
    heading: '做过的事，用数字说话',
  },
  dnd: {
    tag: '主力项目 · 2022 至今',
    name: '洛山达 DND 助手',
    sub: 'D&D 5e 跑团微信小程序 · 个人开发与运营',
    summary:
      '国内用户量领先的 D&D 跑团工具之一。我一个人负责产品、设计、研发、上线和运营变现；从 2026 年起，研发由我搭建的多 Agent 流水线完成，我的角色变成「定方向、给授权、做验收」的产品负责人和 AI 管理者。',
    features: [
      '5 分钟快速建卡与完整建卡、多职业、自定义内容',
      '角色卡：法术位、休息、升级、职业资源、导出分享',
      'DM 战役桌：战斗追踪、共享投骰、模组库、约团排期',
      'AI 能力：AI 背景故事、AI 角色画像、规则问答助手',
      '金币体系与付费功能，已实现盈利',
    ],
    metrics: [
      { value: '42', label: '云函数' },
      { value: '99', label: '页面与组件' },
      { value: '1,148', label: '已关闭 Issue' },
      { value: '64', label: '份 PRD' },
    ],
    stack: ['微信小程序', '微信云开发', 'Node.js', 'GitHub Actions', 'Claude Code', 'Codex', 'Trae'],
  },
  pipeline: {
    kicker: 'AI 研发流水线',
    heading: '从一条用户反馈，到自动上线',
    lead:
      'GitHub 是这个团队的大脑：Issue 是任务队列，PR 是交付物，Actions 是自动化中枢。所有 Agent 都在云端定时运行，不依赖我开着电脑。',
    steps: [
      {
        no: '01',
        title: '反馈进入',
        body: '玩家在飞书表格提反馈，或我在手机上开 Issue。初筛 Agent 每天核实反馈，属实的转成 Issue。',
        who: ['初筛 Agent'],
      },
      {
        no: '02',
        title: '自动分诊',
        body: '分诊 Agent 读正文和相关代码，补齐类型、优先级（P0–P2）、难度三类标签，并写下理由。',
        who: ['Claude Sonnet'],
      },
      {
        no: '03',
        title: '按职责认领',
        body: 'Codex 负责后端，Claude 负责 UI、产品和设计。各执行器按「来源层 → 难度 → 优先级」挑任务，新功能先写 PRD。',
        who: ['Claude Opus', 'Codex', 'Trae', 'Sonnet'],
      },
      {
        no: '04',
        title: '实现与自测',
        body: '从最新 dev 开分支，写代码、补测试，大需求拆成多片小 PR 依次交付，PR 正文按模板写清来源和验证。',
        who: ['执行 Agent'],
      },
      {
        no: '05',
        title: '门禁拦截',
        body: '183 项检查兜底：翻译名、规则归属、硬编码、包体积、换行符、主题令牌……不过门禁不能合并。',
        who: ['GitHub Actions'],
      },
      {
        no: '06',
        title: '交叉评审',
        body: '由另一家模型评审，每个 PR 最多两轮；指出的问题由执行器逐条修复并回复。',
        who: ['Codex Review'],
      },
      {
        no: '07',
        title: '人来拍板',
        body: '合并、发版、涉及付费和隐私的决策必须由我确认。AI 负责把 PR 整理到可以合并的状态。',
        who: ['HanGlen'],
      },
      {
        no: '08',
        title: '自动上线',
        body: '云函数合入后自动部署，体验版一键构建上传；每个任务的执行结果都回写到看板，超时会告警。',
        who: ['cloud-deploy', 'watchdog'],
      },
    ],
  },
  principles: {
    kicker: '方法论',
    heading: '让 AI 稳定干活的五条经验',
    items: [
      {
        title: '规则即代码',
        body: '共用规则写进 60 行以内的 AGENTS.md，细节下沉到手册。改规则只改一处，所有 Agent 下次运行自动生效。',
      },
      {
        title: '门禁兜底，而不是信任',
        body: '每发现一类 AI 常犯的错，就写成一条可以机器检查的门禁。不靠提示词提醒，靠 CI 拦截。',
      },
      {
        title: '按能力分工',
        body: '不同模型各有所长：Claude 做产品和 UI，Codex 做后端，另一家模型做评审，避免自己审自己。',
      },
      {
        title: '人在关键节点',
        body: '合并、发版、收费、不可逆操作留给人。AI 遇到需要拍板的事打 needs-decision 标签，而不是自己猜。',
      },
      {
        title: '一切可观测',
        body: '每次运行都在日志 Issue 留下固定格式的回执，看板据此显示状态；两个周期没有回执就标「数据过期」。',
      },
    ],
  },
  signal: {
    tag: '研究生项目 · 2022–2025',
    name: '生理信号分析平台',
    sub: '西电 × 第四军医大校企合作 · 技术负责人 · 全栈开发',
    summary:
      '起因是实验室用的科研软件要收费，我就用开源技术自己做了一套。后来发展为西电与第四军医大合作的应激生理监测系统：腕表采集信号，App 上传，云端计算指标并预警。我是项目技术负责人，负责整体架构，App、云端后端、Web 端等软件全部由我设计开发；硬件和核心算法由队友负责。',
    layers: [
      { title: '采集', items: ['腕表 ECG / PPG', '蓝牙连接与采集控制'] },
      { title: '终端', items: ['uni-app 移动端', 'PyQt5 桌面分析软件'] },
      { title: '服务', items: ['Spring Boot · MySQL', 'Shiro + JWT 持久化登录', 'MyBatis-Plus · HikariCP'] },
      { title: '算法', items: ['Python 算法服务与 Java 解耦', '滤波 · R 峰检测', '近百项 HRV 指标'] },
      { title: '展示', items: ['Vue3 Web 端', 'ECharts 百万点波形', 'PDF 分析报告'] },
    ],
    modules: [
      {
        name: '桌面端生理信号分析软件',
        desc: '导入信号文件后自动解析，可选滤波、R 峰检测等自研和开源算法，输出心率图、近百项 HRV 指标、庞加莱图，覆盖时域、频域、非线性分析。',
        stack: 'PyQt5 · neurokit2 · MNE · SQLite · Matplotlib',
        badge: '软著 2024',
      },
      {
        name: '多通道生理信号分析云端',
        desc: '存储信号与用户数据，调用算法计算指标，与 App、Web 端通信。Python 算法模块与 Spring Boot 解耦，这套方案我整理成了 CSDN 文章。',
        stack: 'Spring Boot · Shiro · JWT · MyBatis-Plus · HikariCP · MySQL',
        badge: '软著 2024',
      },
      {
        name: '多通道生理信号分析 Web 端',
        desc: '登录后管理自己的云端数据：上传信号、二次分析、查看波形和 HRV 结果。ECharts 渲染百万数据点折线图，延迟控制在 3 秒内。',
        stack: 'Vue3 · Element Plus · ECharts · Vuex · Axios',
        badge: '软著 2024',
      },
      {
        name: '移动端 App 与 HRV 报告网页',
        desc: 'App 通过蓝牙控制腕表采集并上传分析；报告网页让实验室客户自己上传信号，后端分析后直接生成 PDF 报告，不用再人工转交。',
        stack: 'uni-app · Vue2 · uView2 · Python',
        badge: '',
      },
    ],
    results: [
      '全国大学生生物医学工程创新设计竞赛 · 研究生组三等奖',
      '3 项软件著作权（桌面端、云端、Web 端）',
      '用 ChatGPT、Cursor 辅助构建的第一个完整产品',
    ],
    stack: ['Java', 'Spring Boot', 'Shiro', 'MySQL', 'Vue3', 'ECharts', 'uni-app', 'Python', 'PyQt5', 'neurokit2'],
  },
  media: {
    tag: '实验中 · 2026',
    name: '晨曦酒馆 · AI 内容工作室',
    sub: '把 AI 研发流水线的方法搬到短视频生产',
    summary:
      '一个跑团主题的动态漫画自媒体。Claude 负责选题、脚本、分镜和剪辑，Codex 负责美术和本地语音合成。脚本、素材、成片都通过 GitHub Issue 和 Release 交接，每条片子中英两版，出片前跑自动质检脚本。',
    points: ['五道关：选题 → 脚本 → 动态分镜 → 素材 → 成片', '多 Agent 分工，产出全部可追溯', '本地 TTS 配音，中英双语同步出片'],
  },
  experience: {
    kicker: '经历',
    heading: '工作与教育',
    items: [
      {
        time: '2025.07 – 2026.07',
        org: '比亚迪股份有限公司',
        role: '高级系统开发工程师',
        points: [
          '参与品质管理系统后端开发，服务全球业务，用户规模百万级',
          '负责多个集团级与事业部级 OA 流程，推动流程效率提升 20%+',
          '通过 SQL 优化与逻辑重构，把部分慢接口从 10 秒级降到 2 秒内',
          '负责集团色差匹配管理模块，30+ 个后端接口的开发、部署与上线',
          '为团队引入 Trae 等 AI Agent 辅助开发，沉淀 Skill 与团队实践规范',
        ],
      },
      {
        time: '2022.09 – 2025.06',
        org: '西安电子科技大学',
        role: '电子信息 · 硕士',
        points: ['校企合作项目研发负责人', '全国生物医学工程创新设计竞赛研究生组负责人，获三等奖'],
      },
      {
        time: '2021.04 – 2021.09',
        org: '北京外企德科（华为 OD）',
        role: 'Java 开发工程师',
        points: ['参与华为后端系统开发，熟悉分层架构、接口开发、联调测试与代码规范'],
      },
      {
        time: '2016.09 – 2020.06',
        org: '西安电子科技大学',
        role: '电子信息工程 · 学士',
        points: ['主修电路与系统、信号基础等课程'],
      },
    ],
  },
  skills: {
    kicker: '技能',
    groups: [
      {
        title: 'AI 工程化',
        items: ['Claude Code', 'Codex', 'Cursor', 'Trae', '多 Agent 工作流设计', 'Skill / 规则沉淀', 'MCP', 'LLM 应用接入'],
      },
      { title: '后端', items: ['Java', 'Spring Boot', 'MyBatis-Plus', 'MySQL', 'SQL 调优', 'Python', 'Node.js'] },
      { title: '前端与客户端', items: ['微信小程序', 'Vue', 'PyQt', 'Android（项目协作）'] },
      { title: '工程与运维', items: ['GitHub Actions', 'CI 门禁设计', '微信云开发', '自动部署'] },
    ],
  },
  writing: {
    kicker: '文章',
    heading: '写过的东西',
    items: [
      {
        title: '开发记录：生理信号分析平台全栈开发',
        desc: '【开发记录】生理信号分析平台、应激监测系统的技术栈与开发总结',
        href: 'https://blog.csdn.net/qq_42325493/article/details/137463959',
        label: '阅读',
      },
    ],
  },
  contact: {
    kicker: '联系',
    heading: ['正在寻找 AI 应用 / AI 工程化方向的机会。', '欢迎聊聊。'],
    email: '494564549@qq.com',
    emailLabel: '发邮件',
    github: 'https://github.com/HanGlen',
    githubLabel: 'GitHub',
  },
  footer: '© 2026 李睿涵 · 本站由 AI Agent 协助构建',
};

export type Content = typeof zh;
