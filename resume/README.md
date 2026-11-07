# 简历

一页 A4 简历，HTML 写内容，`render.cjs` 用 Playwright 排成 PDF，右上角自动生成作品集二维码。配色和字体跟网站一致。

| 文件 | 是什么 |
|---|---|
| `resume.html` | 内容和排版。改简历就改这里 |
| `render.cjs` | 排成 PDF；内容超出一页会提示 |
| `../public/resume.pdf` | 公开版（不带手机号），「关于」页的「下载 PDF」链到这里 |
| `../public/shots/about/photo.jpg` | 照片，网站和简历共用 |

## 生成

```bash
cd resume
npm install
npx playwright install chromium   # 本机第一次用时
node render.cjs                   # 公开版 → ../public/resume.pdf
node render.cjs --phone 手机号     # 投递版 → 本目录，已 gitignore，不进仓库
```

改了 `resume.html` 要重新跑 `node render.cjs`，把新的 `public/resume.pdf` 一起提交。

## 内容口径

- 每个数字的来源记在 `docs/worklog.md`；简历文字版、写法经验和求职准备在私有仓库 digital-me 的 `career/`。
- 写法：每条动词开头、两行以内、带数字；红色只给标题和关键数字。
- 手机号只在本机生成投递版时传入，不进仓库。
