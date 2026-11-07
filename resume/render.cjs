// 把 resume.html 排成一页 A4 的 PDF。
// 用法（在 resume/ 目录下）：
//   node render.cjs                       公开版：不带手机号，写到 ../public/resume.pdf（网站「关于」页的下载链接）
//   node render.cjs --phone 186xxxxxxxx   投递版：带手机号，写到 本目录/李睿涵_AI应用工程师.pdf（已 gitignore，不进仓库）
//   加 --no-photo 不放照片；--out 指定输出路径。
const { chromium } = require('playwright');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
const phone = opt('--phone');
const photo = args.includes('--no-photo') ? null : path.join(__dirname, '../public/shots/about/photo.jpg');
const out = path.resolve(opt('--out') || (phone ? path.join(__dirname, '李睿涵_AI应用工程师.pdf') : path.join(__dirname, '../public/resume.pdf')));

const font = (pkg, file) => 'file://' + path.join(path.dirname(require.resolve(`${pkg}/package.json`)), 'files', file);
const fmtPhone = (p) => p.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');

(async () => {
  const qr = await QRCode.toString('https://hanglen.github.io/', { type: 'svg', margin: 0, color: { dark: '#1d1b19', light: '#ffffff' } });
  const html = fs.readFileSync(path.join(__dirname, 'resume.html'), 'utf8')
    .replace('{{FONT_SANS_400}}', font('@fontsource/noto-sans-sc', 'noto-sans-sc-chinese-simplified-400-normal.woff2'))
    .replace('{{FONT_SANS_500}}', font('@fontsource/noto-sans-sc', 'noto-sans-sc-chinese-simplified-500-normal.woff2'))
    .replace('{{FONT_SANS_700}}', font('@fontsource/noto-sans-sc', 'noto-sans-sc-chinese-simplified-700-normal.woff2'))
    .replace('{{FONT_SERIF_700}}', font('@fontsource/noto-serif-sc', 'noto-serif-sc-chinese-simplified-700-normal.woff2'))
    .replace('{{QR_SVG}}', qr)
    .replace('{{PHONE_HTML}}', phone ? `<span><b>电话</b> ${fmtPhone(phone)}</span>` : '')
    .replace('{{PHOTO_HTML}}', photo && fs.existsSync(photo) ? `<img class="photo" src="file://${photo}" alt="照片">` : '');
  const tmp = path.join(__dirname, '.render.html');
  fs.writeFileSync(tmp, html);
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + tmp, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  const overflow = await p.evaluate(() => { const el = document.querySelector('.page'); return el.scrollHeight - el.clientHeight; });
  if (overflow > 0) console.warn(`内容超出一页 ${overflow}px，请删减`);
  await p.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
  await b.close();
  fs.unlinkSync(tmp);
  console.log('写入', out);
})();
