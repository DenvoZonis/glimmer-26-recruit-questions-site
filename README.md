# glimmer-26-recruit-questions-site

电子科技大学微光工作室2026招新——招新题网站。使用Astro Starlight构建，主题为starlight-theme-md3。适用于Astro 7和Starlight 0.41或更新版本。

## 命令

| 命令 | 动作 |
| --- | --- |
| `npm install` | 安装依赖项 |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 构建网站 |
| `npm run preview` | 预览构建后的网站 |

## 主题

主题配置位于`astro.config.mjs`文件中

```js
plugins: [md3Theme()]
```

初始文档内容为一个小型视觉演示，非必需的项目结构。
它展示了MD3 hero preview, cards, color roles, controls、导航状态，
表格、代码和混合语言的散文，让您能立即查看主题。
随着实际文档的增多，请删除或替换演示页面。