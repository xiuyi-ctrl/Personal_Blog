export const translations = {
  en: {
    nav: {
      brand: "PORTFOLIO",
      links: [
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Strengths", href: "#strengths" },
      ],
      contactBtn: "Contact",
    },
    hero: {
      greeting: "Crafting Digital",
      highlight: "Experiences",
      subtitle:
        "Full-stack developer focused on building elegant, performant web applications with modern technologies.",
      cta: "Get in Touch",
    },
    experience: {
      title: "About",
      subtitle: "A brief look into my journey",
      intro1:
        "I'm a full-stack developer with a deep passion for crafting clean, performant, and user-centric digital experiences. Over the years, I've worked across the entire web stack — from designing intuitive interfaces to architecting scalable backend systems.",
      intro2:
        "I believe great software is built at the intersection of design thinking and engineering excellence. Every project is an opportunity to push boundaries and create something meaningful.",
      contactLabel: "Let's Connect",
      email: "hello@example.com",
      location: "Based in Shanghai, China",
      stats: [
        { value: "4+", label: "Years Experience" },
        { value: "20+", label: "Projects Delivered" },
        { value: "15+", label: "Happy Clients" },
      ],
    },
    projects: {
      title: "Featured Work",
      subtitle: "A selection of projects that showcase my expertise and passion.",
    },
    strengths: {
      title: "What I Do Best",
      subtitle: "Core competencies that drive my work",
      items: [
        {
          title: "Frontend Architecture",
          description: "Building scalable, component-driven UIs with React, TypeScript, and modern CSS. Focused on performance, accessibility, and developer experience.",
          icon: "code",
        },
        {
          title: "Backend Engineering",
          description: "Designing robust APIs and server-side systems with Node.js, PostgreSQL, and cloud-native architectures.",
          icon: "server",
        },
        {
          title: "UI/UX Design",
          description: "Crafting intuitive interfaces with a keen eye for detail. Bridging the gap between aesthetics and usability.",
          icon: "design",
        },
        {
          title: "Performance Optimization",
          description: "Obsessed with speed. From bundle optimization to runtime performance, every millisecond matters.",
          icon: "zap",
        },
      ],
    },
    contact: {
      title: "Let's Create Something",
      highlight: "Together",
      subtitle: "I'm currently available for freelance projects and full-time opportunities. Whether you need a website, a web app, or just want to chat about tech — I'd love to hear from you.",
      email: "hello@example.com",
      emailLabel: "Send a Message",
      github: "GitHub",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      footer: "Designed & Built with care. All rights reserved.",
    },
  },
  zh: {
    nav: {
      brand: "PORTFOLIO",
      links: [
        { label: "经历", href: "#experience" },
        { label: "项目", href: "#projects" },
        { label: "优势", href: "#strengths" },
      ],
      contactBtn: "联系我",
    },
    hero: {
      greeting: "打造数字",
      highlight: "体验",
      subtitle:
        "全栈开发者，专注于用现代技术构建优雅、高性能的 Web 应用。将创意转化为流畅的数字体验。",
      cta: "取得联系",
    },
    experience: {
      title: "个人经历",
      subtitle: "一段旅程，无数可能",
      intro1:
        "我是一名全栈开发者，热衷于将复杂问题转化为简洁、优雅的数字解决方案。从架构设计到像素级实现，我追求每一个细节的完美。",
      intro2:
        "我相信优秀的软件是设计思维与工程卓越的交汇。每个项目都是一次突破边界、创造价值的机会。",
      contactLabel: "联系我",
      email: "hello@example.com",
      location: "中国 · 上海",
      stats: [
        { value: "4+", label: "年经验" },
        { value: "20+", label: "交付项目" },
        { value: "15+", label: "满意客户" },
      ],
    },
    projects: {
      title: "精选项目",
      subtitle: "一些值得分享的作品",
    },
    strengths: {
      title: "核心优势",
      subtitle: "驱动我工作的关键能力",
      items: [
        {
          title: "前端架构",
          description: "使用 React、TypeScript 和现代 CSS 构建可扩展、组件化的用户界面。注重性能、可访问性和开发体验。",
          icon: "code",
        },
        {
          title: "后端工程",
          description: "使用 Node.js、PostgreSQL 和云原生架构设计健壮的 API 和服务器端系统。",
          icon: "server",
        },
        {
          title: "UI/UX 设计",
          description: "以敏锐的细节感知力打造直观的界面。在美学与可用性之间找到完美平衡。",
          icon: "design",
        },
        {
          title: "性能优化",
          description: "对速度有着执念。从打包优化到运行时性能，每一毫秒都至关重要。",
          icon: "zap",
        },
      ],
    },
    contact: {
      title: "一起合作",
      highlight: "联系我",
      subtitle: "我目前正在接受自由职业项目和全职机会。无论你有一个新项目、一个创业想法，还是只是想聊聊技术——我都很乐意收到你的消息。",
      email: "hello@example.com",
      emailLabel: "发送邮件",
      github: "GitHub",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      footer: "用心设计与构建。保留所有权利。",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
