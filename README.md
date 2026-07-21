# 咻咿的个人作品集 | Xiuyi's Portfolio

一个使用 AI 辅助编程构建的现代个人作品集网站，展示项目与技能。

## 预览

> **线上地址**: [xiuyi-portfolio.vercel.app](https://xiuyi-portfolio.vercel.app)

## 技术栈

| 技术 | 版本 |
|------|------|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | 4 |
| Framer Motion | 11 |
| Three.js | 0.185 |

## 功能特性

- **Hyperspeed 3D 背景** — 基于 Three.js 的沉浸式动态视觉效果
- **Spotlight Card** — 交互式聚光灯卡片组件
- **Rotating Text** — 动态轮播文字动画
- **Shiny Text** — 光泽文字效果
- **True Focus** — 焦点追踪动画
- **Logo Loop** — Logo 循环滚动展示
- **Particles** — 粒子动画效果
- **中英双语切换** — 内置 i18n 支持
- **响应式设计** — 适配移动端与桌面端

## 页面结构

| 区块 | 说明 |
|------|------|
| Hero | 3D 动态背景 + 个人标语 |
| Experience | 个人经历 + 技能标签 |
| Projects | 精选项目展示（待办清单、记账工具、信息保险箱） |
| Strengths | 核心能力介绍 |
| Contact | 联系方式 + 邮件/GitHub 链接 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
xiuyi_Portfolio/
├── public/              # 静态资源
├── src/
│   ├── components/      # 组件（Hero, Header, Projects...）
│   ├── data/            # 数据（projects.ts, skills.ts）
│   ├── i18n/            # 国际化配置
│   ├── assets/          # 图片等资源
│   ├── App.tsx          # 根组件
│   ├── main.tsx         # 入口文件
│   └── style.css        # 全局样式
├── index.html
├── vite.config.ts
└── package.json
```

## 部署

本项目使用 [Vercel](https://vercel.com) 自动部署，推送到 `main` 分支即可触发构建。

## License

MIT
