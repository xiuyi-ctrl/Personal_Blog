# 咻咿的个人作品集 | Xiuyi's Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

一个使用 AI 辅助编程构建的现代个人作品集网站，展示项目与技能。

## 预览

> **线上地址**: [xiuyi-portfolio.vercel.app](https://xiuyi-portfolio.vercel.app)

## 环境要求

| 依赖 | 版本要求 |
|------|---------|
| Node.js | >= 20.19 或 >= 22.12 |
| npm | >= 9 |

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19 | UI 框架 |
| TypeScript | 6 | 类型安全 |
| Vite | 8 | 构建工具 |
| Tailwind CSS | 4 | 样式框架 |
| Framer Motion | 11 | 动画库 |
| Three.js | 0.185 | 3D 渲染 |

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
# 克隆项目
git clone https://github.com/xiuyi/xiuyi_Portfolio.git
cd xiuyi_Portfolio

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
├── public/                    # 静态资源
│   ├── favicon.svg            # 网站图标
│   ├── email.svg              # 邮件图标
│   ├── github.svg             # GitHub 图标
│   └── icons.svg              # 其他图标
├── src/
│   ├── components/            # 组件
│   │   ├── Hero.tsx           # 首页英雄区
│   │   ├── Header.tsx         # 导航栏
│   │   ├── Experience.tsx     # 个人经历
│   │   ├── Projects.tsx       # 项目展示
│   │   ├── Strengths.tsx      # 核心优势
│   │   ├── Contact.tsx        # 联系方式
│   │   ├── Hyperspeed.tsx     # 3D 动态背景
│   │   ├── SpotlightCard.tsx  # 聚光灯卡片
│   │   ├── RotatingText.tsx   # 轮播文字
│   │   ├── ShinyText.tsx      # 光泽文字
│   │   ├── TrueFocus.tsx      # 焦点追踪
│   │   ├── LogoLoop.tsx       # Logo 循环
│   │   ├── Particles.tsx      # 粒子效果
│   │   ├── BorderGlow.tsx     # 边框发光
│   │   ├── CountUp.tsx        # 数字递增
│   │   └── TechTag.tsx        # 技术标签
│   ├── data/                  # 数据文件
│   │   ├── projects.ts        # 项目数据
│   │   └── skills.ts          # 技能数据
│   ├── i18n/                  # 国际化
│   │   ├── LanguageContext.tsx # 语言上下文
│   │   └── translations.ts    # 翻译内容
│   ├── assets/                # 图片等资源
│   ├── App.tsx                # 根组件
│   ├── main.tsx               # 入口文件
│   └── style.css              # 全局样式
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 部署

本项目使用 [Vercel](https://vercel.com) 自动部署，推送到 `main` 分支即可触发构建。

## License

MIT
