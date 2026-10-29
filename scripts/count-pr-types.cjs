// 从小程序仓库 dev 分支的 first-parent 记录数出每天、每月各类型（feat / fix …）合入了多少，
// 写进 src/data/dnd.json 的 dailyTypes 和 monthlyTypes。只存数量，不存标题（小程序仓库是私有的）。
// 口径和 daily 一致：提交者日期（提交自带时区，UTC−7），每天只数 daily 记的条数。
// 用法：node scripts/count-pr-types.cjs <小程序仓库路径>
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repo = process.argv[2];
if (!repo) throw new Error('用法：node scripts/count-pr-types.cjs <小程序仓库路径>');
const file = path.resolve(__dirname, '../src/data/dnd.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const daily = data.daily;
const raw = execSync(`git -C "${repo}" log origin/dev --first-parent --since=2026-06-14 --date=short --format=%cd%x1f%s%x1f%b%x1e`, {
  maxBuffer: 1e8,
}).toString();

const TYPES = ['feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'perf'];
const byDay = {};
for (const rec of raw.split('\x1e')) {
  const [d, s, b] = rec.trim().split('\x1f');
  if (!d || !daily[d]) continue;
  // merge commit 的标题在正文第一行
  const title = /^Merge pull request #\d+/.test(s) ? (b || '').trim().split('\n')[0] : s;
  const m = title.match(/^(\w+)(\([^)]*\))?!?:/);
  (byDay[d] ||= []).push(m && TYPES.includes(m[1]) ? m[1] : 'other');
}

const dailyTypes = {};
const monthlyTypes = {};
for (const k of Object.keys(daily).sort()) {
  // git log 从新到旧；快照之后才合入的（如 10-29 下午）去掉
  let list = byDay[k] ?? [];
  if (list.length > daily[k]) list = list.slice(list.length - daily[k]);
  if (list.length !== daily[k]) console.warn(`${k}: 找到 ${list.length} 条，daily 记 ${daily[k]} 条`);
  const day = (dailyTypes[k] = {});
  const mon = (monthlyTypes[k.slice(0, 7)] ??= { feat: 0, fix: 0 });
  for (const t of list) {
    day[t] = (day[t] || 0) + 1;
    if (t === 'feat' || t === 'fix') mon[t]++;
  }
}

data.dailyTypes = dailyTypes;
data.monthlyTypes = monthlyTypes;
fs.writeFileSync(file, JSON.stringify(data, null, 1) + '\n');
console.log(`写入 ${Object.keys(dailyTypes).length} 天`);
