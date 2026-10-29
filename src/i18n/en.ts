import type { Content } from './zh';

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'Ruihan Li · AI Engineering',
    description:
      'Ruihan Li, AI application and AI engineering developer. One person and a team of AI agents building and running a WeChat mini program with 14,000+ users.',
  },
  nav: {
    work: 'Work',
    method: 'Method',
    experience: 'Experience',
    contact: 'Contact',
    switchLabel: '中文',
    switchHref: '/',
  },
  hero: {
    eyebrow: 'AI Applications · AI Engineering',
    name: 'Ruihan Li',
    title: ['Making AI agents ship', 'real products, like a team.'],
    lead:
      'I designed and run an AI development pipeline that goes from user feedback to production. Several agents claim tasks, write code, pass quality gates and review each other; I step in only where a human decision matters. It powers a product with 14,000+ users and merges a dozen PRs a day.',
    ctaPrimary: 'See the pipeline',
    ctaSecondary: 'Get in touch',
  },
  terminal: {
    title: 'dnd-miniprogram · merged today',
    lines: [
      ['triage', '#1805 session scheduling → labelled, queued'],
      ['prd', 'docs: session scheduling PRD (#1805)'],
      ['build', 'feat: shared time rules & redacted model (part 1)'],
      ['build', 'feat: read-only API & desktop version probe (part 2)'],
      ['build', 'feat: close transaction & duplicate guard (part 3)'],
      ['gate', '183 checks · all passing'],
      ['review', 'cross-model review → fixes & replies'],
      ['merge', 'owner approves → dev → cloud functions deploy'],
    ],
    footer: 'Illustrative flow; PR titles come from real merges on 2026-10-29 (12 merged that day)',
  },
  stats: [
    { value: '14k+', label: 'mini program users', note: '1000%+ growth in six months' },
    { value: '1,326', label: 'merged PRs', note: 'in 4.5 months, mostly by AI agents' },
    { value: '183', label: 'automated gates', note: 'common AI mistakes, turned into checks' },
    { value: '10s→2s', label: 'slow API fixed', note: 'BYD quality system' },
  ],
  work: {
    kicker: 'Selected work',
    heading: 'What I built, in numbers',
  },
  dnd: {
    tag: 'Flagship · 2022 – now',
    name: 'Lathander D&D Assistant',
    sub: 'D&D 5e tabletop WeChat mini program · solo developer & operator',
    summary:
      'One of the most-used D&D tools in China. I own product, design, engineering, release and monetization. Since 2026 the engineering is done by a multi-agent pipeline I built, and my role is product owner and AI manager: set direction, grant permissions, accept the work.',
    features: [
      '5-minute quick build and full character creation, multiclass, homebrew',
      'Character sheet: spell slots, rests, level-up, class resources, export & share',
      'DM campaign table: combat tracker, shared dice log, module library, scheduling',
      'AI features: generated backstories, AI portraits, rules Q&A assistant',
      'In-app gold economy and paid features, profitable',
    ],
    metrics: [
      { value: '42', label: 'cloud functions' },
      { value: '99', label: 'pages & components' },
      { value: '1,148', label: 'issues closed' },
      { value: '64', label: 'PRDs' },
    ],
    stack: ['WeChat Mini Program', 'WeChat CloudBase', 'Node.js', 'GitHub Actions', 'Claude Code', 'Codex', 'Trae'],
  },
  pipeline: {
    kicker: 'AI development pipeline',
    heading: 'From one piece of feedback to production',
    lead:
      'GitHub is the brain of this team: issues are the task queue, PRs are the deliverables, Actions is the automation hub. Every agent runs on a schedule in the cloud, with no laptop of mine involved.',
    steps: [
      {
        no: '01',
        title: 'Feedback in',
        body: 'Players report in a shared sheet, or I open an issue from my phone. A screening agent verifies reports daily and files the real ones.',
        who: ['Screening agent'],
      },
      {
        no: '02',
        title: 'Auto triage',
        body: 'A triage agent reads the issue and the related code, then adds type, priority (P0–P2) and difficulty labels with its reasoning.',
        who: ['Claude Sonnet'],
      },
      {
        no: '03',
        title: 'Claim by role',
        body: 'Codex owns the backend; Claude owns UI, product and design. Each executor picks by source tier → difficulty → priority. New features start with a PRD.',
        who: ['Claude Opus', 'Codex', 'Trae', 'Sonnet'],
      },
      {
        no: '04',
        title: 'Build & self-test',
        body: 'Branch from the latest dev, write code and tests, split big features into small sequential PRs, and document source and verification in a template.',
        who: ['Executor agents'],
      },
      {
        no: '05',
        title: 'Quality gates',
        body: '183 checks as the safety net: translations, ruleset ownership, hard-coded names, bundle size, line endings, theme tokens… No green, no merge.',
        who: ['GitHub Actions'],
      },
      {
        no: '06',
        title: 'Cross review',
        body: 'A model from another vendor reviews each PR, at most two rounds. The executor fixes and replies to every finding.',
        who: ['Codex Review'],
      },
      {
        no: '07',
        title: 'Human decides',
        body: 'Merges, releases and anything about payments or privacy need my sign-off. The agents get each PR ready to merge.',
        who: ['HanGlen'],
      },
      {
        no: '08',
        title: 'Auto deploy',
        body: 'Cloud functions deploy on merge; preview builds upload in one step. Every run reports back to a dashboard, and silence raises an alert.',
        who: ['cloud-deploy', 'watchdog'],
      },
    ],
  },
  principles: {
    kicker: 'Method',
    heading: 'Five lessons for making AI work reliably',
    items: [
      {
        title: 'Rules as code',
        body: 'Shared rules live in an AGENTS.md under 60 lines, with details in playbooks. Change a rule once and every agent picks it up on its next run.',
      },
      {
        title: 'Gates over trust',
        body: 'Every new class of AI mistake becomes a machine-checkable gate. Not a reminder in a prompt, but a CI failure.',
      },
      {
        title: 'Split by strength',
        body: 'Models differ: Claude for product and UI, Codex for backend, another vendor for review, so nobody grades their own homework.',
      },
      {
        title: 'Humans at the key points',
        body: 'Merges, releases, pricing and irreversible actions stay with a person. Agents flag needs-decision instead of guessing.',
      },
      {
        title: 'Observe everything',
        body: 'Every run leaves a fixed-format receipt in a log issue that feeds the dashboard; two missed cycles mark a task as stale.',
      },
    ],
  },
  signal: {
    tag: 'Graduate project · 2022 – 2025',
    name: 'Bio-signal Analysis Platform',
    sub: 'Xidian University × Fourth Military Medical University · technical lead · full stack',
    summary:
      'It started because the research software in our lab was paid, so I built an open-source alternative. It grew into a stress monitoring system built with the Fourth Military Medical University: a wristband captures signals, an app uploads them, and the cloud computes metrics and raises alerts. As technical lead I owned the architecture and designed and built all the software (app, cloud backend, web); teammates owned the hardware and core algorithms.',
    layers: [
      { title: 'Capture', items: ['Wristband ECG / PPG', 'Bluetooth control & capture'] },
      { title: 'Clients', items: ['uni-app mobile app', 'PyQt5 desktop analyzer'] },
      { title: 'Service', items: ['Spring Boot · MySQL', 'Shiro + JWT persistent login', 'MyBatis-Plus · HikariCP'] },
      { title: 'Algorithms', items: ['Python service decoupled from Java', 'Filtering · R-peak detection', '~100 HRV metrics'] },
      { title: 'Views', items: ['Vue3 web console', 'ECharts, 1M-point waveforms', 'PDF reports'] },
    ],
    modules: [
      {
        name: 'Desktop bio-signal analyzer',
        desc: 'Parses imported signal files, offers filtering, R-peak detection and other in-house and open-source algorithms, and outputs heart-rate plots, ~100 HRV metrics and Poincaré plots across time, frequency and nonlinear domains.',
        stack: 'PyQt5 · neurokit2 · MNE · SQLite · Matplotlib',
        badge: 'Copyright 2024',
      },
      {
        name: 'Multi-channel analysis cloud',
        desc: 'Stores signals and user data, runs algorithms to compute metrics, and talks to the app and web clients. The Python algorithm module is decoupled from Spring Boot, a setup I documented on CSDN.',
        stack: 'Spring Boot · Shiro · JWT · MyBatis-Plus · HikariCP · MySQL',
        badge: 'Copyright 2024',
      },
      {
        name: 'Multi-channel analysis web console',
        desc: 'Users manage their cloud data: upload signals, re-analyze, browse waveforms and HRV results. ECharts renders million-point line charts in under 3 seconds.',
        stack: 'Vue3 · Element Plus · ECharts · Vuex · Axios',
        badge: 'Copyright 2024',
      },
      {
        name: 'Mobile app & HRV report site',
        desc: 'The app drives the wristband over Bluetooth and uploads for analysis; the report site lets lab clients upload signals themselves and get a generated PDF report back, with no manual hand-off.',
        stack: 'uni-app · Vue2 · uView2 · Python',
        badge: '',
      },
    ],
    results: [
      'Third Prize, graduate track, National Biomedical Engineering Innovation Design Competition',
      '3 software copyrights (desktop, cloud, web)',
      'My first complete product built with ChatGPT and Cursor',
    ],
    stack: ['Java', 'Spring Boot', 'Shiro', 'MySQL', 'Vue3', 'ECharts', 'uni-app', 'Python', 'PyQt5', 'neurokit2'],
  },
  media: {
    tag: 'Experiment · 2026',
    name: 'Dawn Tavern · AI Content Studio',
    sub: 'Bringing the AI pipeline to short-video production',
    summary:
      'A tabletop-themed motion-comic channel. Claude handles topics, scripts, storyboards and editing; Codex handles art and local text-to-speech. Scripts, assets and cuts move through GitHub issues and releases, every episode ships in Chinese and English, and an automated QC script runs before delivery.',
    points: ['Five gates: topic → script → animatic → assets → final cut', 'Multi-agent roles with a full audit trail', 'Local TTS, bilingual releases in sync'],
  },
  experience: {
    kicker: 'Experience',
    heading: 'Work & education',
    items: [
      {
        time: '2025.07 – 2026.07',
        org: 'BYD Company Limited',
        role: 'Senior Systems Engineer',
        points: [
          'Backend of the global quality management system, serving millions of users',
          'Built group- and division-level OA workflows, improving process efficiency by 20%+',
          'Cut slow APIs from ~10s to under 2s through SQL tuning and refactoring',
          'Owned the color-matching management module: 30+ backend APIs, deployment and launch',
          'Brought AI agents such as Trae into the team and wrote shared skills and practices',
        ],
      },
      {
        time: '2022.09 – 2025.06',
        org: 'Xidian University',
        role: 'M.Eng., Electronic Information',
        points: ['R&D lead of a university–industry project', 'Team lead, Third Prize in the national biomedical engineering competition'],
      },
      {
        time: '2021.04 – 2021.09',
        org: 'FESCO Adecco (Huawei OD)',
        role: 'Java Developer',
        points: ['Backend development for Huawei: layered architecture, APIs, integration testing, code standards'],
      },
      {
        time: '2016.09 – 2020.06',
        org: 'Xidian University',
        role: 'B.Eng., Electronic Information Engineering',
        points: ['Circuits and systems, signal fundamentals'],
      },
    ],
  },
  skills: {
    kicker: 'Skills',
    groups: [
      {
        title: 'AI engineering',
        items: ['Claude Code', 'Codex', 'Cursor', 'Trae', 'Multi-agent workflows', 'Skills & rule design', 'MCP', 'LLM integration'],
      },
      { title: 'Backend', items: ['Java', 'Spring Boot', 'MyBatis-Plus', 'MySQL', 'SQL tuning', 'Python', 'Node.js'] },
      { title: 'Frontend & client', items: ['WeChat Mini Program', 'Vue', 'PyQt', 'Android (team)'] },
      { title: 'DevOps', items: ['GitHub Actions', 'CI gate design', 'WeChat CloudBase', 'Auto deploy'] },
    ],
  },
  writing: {
    kicker: 'Writing',
    heading: 'Things I wrote',
    items: [
      {
        title: 'Dev log: building the bio-signal platform end to end',
        desc: 'Tech stacks and lessons from the desktop analyzer and monitoring system (CSDN, Chinese)',
        href: 'https://blog.csdn.net/qq_42325493/article/details/137463959',
        label: 'Read',
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    heading: ['Looking for roles in AI applications and AI engineering.', "Let's talk."],
    email: '494564549@qq.com',
    emailLabel: 'Email me',
    github: 'https://github.com/HanGlen',
    githubLabel: 'GitHub',
  },
  footer: '© 2026 Ruihan Li · Built with help from AI agents',
};
