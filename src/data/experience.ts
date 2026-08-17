/** Work and education history shown in the experience timeline */

import type { Localized } from "../i18n/config"

export type ExperienceEntry = {
  /** Date range, e.g. "2023 — Present" */
  period: string
  /** Job title or degree */
  role: Localized<string>
  /** Company or institution */
  organization: Localized<string>
  /** One or two sentences about the role */
  description: Localized<string>
  /** Related skills or topics */
  tags: string[]
}

/** Experience section copy */
export const experienceSection = {
  tagline: { zh: "我的足迹", en: "My journey" } as Localized<string>,
  heading: { zh: "经历", en: "Experience" } as Localized<string>,
  description: {
    zh: "塑造我构建前后端方式的工作经历与教育背景。",
    en: "Roles and education that shaped how I approach building for the web.",
  } as Localized<string>,
}

/** Timeline entries, ordered newest first */
export const experiences: ExperienceEntry[] = [
  {
    period: "2023 — 至今",
    role: { zh: "前端开发工程师", en: "Frontend Developer" },
    organization: { zh: "你的公司", en: "Your Company" },
    description: {
      zh: "使用 React 与 TypeScript 构建响应式、可访问的 Web 界面，并维护共享的组件库。",
      en: "Building responsive, accessible web interfaces with React and TypeScript, and maintaining a shared component library.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2021 — 2023",
    role: { zh: "Web 开发工程师", en: "Web Developer" },
    organization: { zh: "上一家公司", en: "Previous Company" },
    description: {
      zh: "交付营销网站与内部工具，优化性能，并与设计团队紧密协作。",
      en: "Shipped marketing sites and internal tools, improving performance and collaborating closely with design.",
    },
    tags: ["JavaScript", "CSS", "Vite"],
  },
  {
    period: "2019 — 2021",
    role: { zh: "计算机科学学士", en: "B.S. Computer Science" },
    organization: { zh: "大学名称", en: "University Name" },
    description: {
      zh: "学习软件基础、数据结构与现代 Web 开发。",
      en: "Studied software fundamentals, data structures, and modern web development.",
    },
    tags: ["Algorithms", "Data Structures", "Web"],
  },
]
