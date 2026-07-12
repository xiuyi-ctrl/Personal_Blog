export const translations = {
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
    greeting: "你好，这里是",
    greetingXiuyi: "咻咿",
    highlight: "个人作品集",
    subtitle:
      "用 AI 辅助编程，将创意快速转化为可用的产品。热爱探索新技术，享受从零到一的创造过程。",
    cta: "联系我",
  },
  experience: {
    title: "PROFILE",
    subtitle: "个人经历",
    heading: "Vibe Coding 爱好者，擅长用 AI 工具将创意快速转化为可用的产品。",
    intro:
      "拥有丰富的编程经验，热衷于利用AI辅助编程，开发创意产品，解决实际问题，每个项目都是一次学习和成长的机会。",
    email: "2998526825@qq.com",
    stats: [
      { value: "3+", label: "已完成项目" },
      { value: "1年+", label: "学习时长" },
      { value: "∞", label: "创意想法" },
      { value: "100%", label: "学习热情" },
    ],
    techHobbies: [
      "Vibe Coding",
      "AIGC",
      "Codex",
      "OpenCode",
      "Python",
      "Java",
      "游戏",
      "机器学习",
      "NLP",
      "深度学习",
      "大模型"
    ],
  },
  projects: {
    title: "精选项目",
    subtitle: "使用 AI 辅助开发的作品集",
  },
  strengths: {
    title: "核心优势",
    subtitle: "驱动我工作的关键能力",
    items: [
      {
        title: "Vibe Coding",
        description: "利用 AI 工具将创意快速转化为可用的产品。从概念到部署，速度惊人。",
        icon: "zap",
      },
      {
        title: "快速原型",
        description: "结合现代无代码/低代码平台和 AI 辅助，快速将想法转化为可用的功能原型。",
        icon: "code",
      },
      {
        title: "产品思维",
        description: "专注于用实用的解决方案解决真实问题。每个项目都从理解用户需求开始。",
        icon: "design",
      },
      {
        title: "持续学习",
        description: "不断探索新工具和新技术。对 AI 与软件开发的交汇点充满热情。",
        icon: "server",
      },
    ],
  },
  contact: {
    title: "一起创造",
    highlight: "联系我",
    subtitle: "我目前正在探索新的创意和项目。无论你有一个想实现的概念，还是只是想聊聊 Vibe Coding——我都很乐意收到你的消息。",
    email: "2998526825@qq.com",
    emailLabel: "发送邮件",
    github: "GitHub",
    footer: "用心设计与构建。保留所有权利。",
  },
};

export type TranslationKeys = typeof translations;