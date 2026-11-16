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
  title: 'AI 如何重塑软件工程 · 李睿涵',
  description: '青岛中小企业会议分享：一个人带一支 AI 研发团队，把产品做出来并持续运转。',
  keys: '↑ ↓ 翻页 · ← → 切换 · P 讲者备注',

  cover: {
    eyebrow: '青岛中小企业会议 · 分享',
    title: '一个人，\n带一支 AI 研发团队。',
    sub: 'AI 如何重塑软件工程：从以前怎么做，到现在最先进的做法，再到我自己怎么做。',
    name: '李睿涵',
    role: 'AI 应用工程师',
    field: '背景里每个点，是 AI 写完并合入的一个 PR',
    fieldNote: '洛山达 DND 助手仓库，6 月 17 日到 11 月 6 日，共 {n} 个',
    next: '往下翻',
    notes: '0.5 分钟。一句话开场：今天讲 AI 怎么改变做软件这件事，先说我是谁。背景这些点都是 AI 替我写完、合进去的代码改动。',
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
};
