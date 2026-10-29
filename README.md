# hanglen.github.io

李睿涵的个人作品集网站，中文为主，可切换英文（`/en/`）。

## 开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 输出到 dist/
```

## 改内容

- 文案：`src/i18n/zh.ts`（中文）和 `src/i18n/en.ts`（英文），两边结构一致。
- 笔记：`src/content/notes/*.md`，`draft: true` 会显示「草稿」标记。
- 图表数据：`src/data/dnd.json`（来自小程序仓库 dev 分支合并记录）。
- 补图：图片放进 `public/shots/`，再给对应的 `<Placeholder>` 填上 `src`，「待补」框就会换成真图。
- 页面组件在 `src/components/pages/`，样式令牌在 `src/styles/global.css` 的 `:root`（含深色模式）。

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 自动构建并发布到 GitHub Pages。仓库 Settings → Pages → Source 需选 **GitHub Actions**。
