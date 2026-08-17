/** Work and education history shown in the experience timeline */

import type { Localized } from "../i18n/config"

export type ExperienceEntry = {
  /** Date range, e.g. "2023 — 至今" */
  period: string
  /** Job title, degree, or role label */
  role: Localized<string>
  /** Company, institution, or project context */
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
    zh: "作为一名软件工程专业的大二学生，我在打好计算机基础的同时，用项目把课堂知识付诸实践。",
    en: "As a sophomore majoring in Software Engineering, I'm building a solid CS foundation while applying classroom knowledge through hands-on projects.",
  } as Localized<string>,
}

/** Timeline entries, ordered newest first */
export const experiences: ExperienceEntry[] = [
  {
    period: "2023 — 至今",
    role: { zh: "软件工程 · 本科在读", en: "B.S. Software Engineering" },
    organization: { zh: "某某大学（大二）", en: "University Name (Sophomore)" },
    description: {
      zh: "系统学习程序设计、数据结构、数据库与软件工程相关课程，注重工程化思维与编码规范；课余自学现代 Web 开发，用项目巩固所学。",
      en: "Studying programming, data structures, databases, and software engineering, emphasizing engineering thinking and clean code; teaching myself modern web development and reinforcing it through projects.",
    },
    tags: ["数据结构", "数据库", "软件工程", "Web"],
  },
  {
    period: "2025 — 至今",
    role: { zh: "前端开发（个人项目）", en: "Frontend Developer (Personal)" },
    organization: { zh: "个人作品集", en: "Personal Portfolio" },
    description: {
      zh: "独立完成个人作品集网站，实践 React、TypeScript 与 Tailwind CSS，学习组件化设计、响应式布局与版本管理。",
      en: "Independently built this portfolio site, practicing React, TypeScript, and Tailwind CSS while learning component design, responsive layout, and version control.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2024 — 2025",
    role: { zh: "团队成员 · 课程 / 校园项目", en: "Team Member · Coursework" },
    organization: { zh: "课程设计 & 学生活动", en: "Coursework & Student Activities" },
    description: {
      zh: "与同学协作完成课程设计与小型开发项目，从需求分析、编码到演示完整走完一个小项目的流程，锻炼协作与沟通能力。",
      en: "Collaborated with classmates on coursework and small development projects, going through the full flow of requirements, coding, and demos, while improving teamwork and communication.",
    },
    tags: ["协作", "Git", "需求分析"],
  },
]
