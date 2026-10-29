# hanglen.github.io

李睿涵的个人作品集网站，中文为主，可切换英文（`/en/`）。

## 开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 输出到 dist/
```

## 改内容

所有文案都在 `src/i18n/zh.ts`（中文）和 `src/i18n/en.ts`（英文），两边结构一致。页面组件在 `src/components/`，样式令牌在 `src/styles/global.css` 的 `:root`。

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 自动构建并发布到 GitHub Pages。仓库 Settings → Pages → Source 需选 **GitHub Actions**。
