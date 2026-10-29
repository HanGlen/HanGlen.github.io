/** 提交标题前缀（feat: / fix: …）对应的中英文叫法 */
export const prTypes = {
  zh: { feat: '新功能', fix: '修复', chore: '杂项', docs: '文档', refactor: '重构', test: '测试', perf: '性能', other: '其他' },
  en: { feat: 'Feature', fix: 'Fix', chore: 'Chore', docs: 'Docs', refactor: 'Refactor', test: 'Test', perf: 'Perf', other: 'Other' },
};

export type PrType = keyof typeof prTypes.zh;

