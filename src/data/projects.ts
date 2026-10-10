/** Portfolio project entries displayed in the Projects section */

import type { Localized } from "../i18n/config"

export type ProjectCategory = "Web Development" | "AI Application"

export type Project = {
  id: string
  /** Localized display name (project names can differ per language) */
  name: Localized<string>
  description: Localized<string>
  /** Stable category key used for filtering (e.g. "Web Development") */
  category: ProjectCategory
  /** Localized category label shown on cards and overlays */
  categoryLabel: Localized<string>
  image: string
  techStack: string[]
  /** Repository link shown in the detail modal */
  repoUrl: string
  /** Optional live demo link shown in the detail modal */
  demoUrl?: string
  /** Longer description shown in the detail modal */
  longDescription: Localized<string>
  /** Key outcomes or features shown in the detail modal */
  highlights: Localized<string>[]
}

export const projects: Project[] = [
  {
    id: "rag-knowledge-assistant",
    name: {
      zh: "RAG 知识库助手",
      en: "RAG Knowledge Assistant",
    },
    description: {
      zh: "基于本地 Embedding 与 ChromaDB 的 RAG 知识库助手，支持 PDF/DOCX/TXT 文档上传、多轮智能问答与 Text-to-SQL，无需付费 API 即可运行。",
      en: "A RAG knowledge assistant built on local embeddings and ChromaDB, supporting PDF/DOCX/TXT upload, multi-turn Q&A, and Text-to-SQL — runs without any paid API.",
    },
    category: "AI Application",
    categoryLabel: { zh: "AI 应用", en: "AI Application" },
    image: "/projects/rag-assistant.svg",
    techStack: ["Python", "Flask", "ChromaDB", "智谱 GLM", "Text-to-SQL"],
    repoUrl: "https://github.com/188Y/rag-knowledge-assistant",
    longDescription: {
      zh: "一个可私有部署的 RAG 知识库助手：上传 PDF/DOCX/TXT 文档后自动切分入库，提问时检索最相关片段并结合多轮对话上下文生成回答。文档向量通过本地 Embedding 计算并存入 ChromaDB，不依赖付费 API；同时内置 LangGraph 风格的 Agent 模块和 Text-to-SQL 引擎，可将自然问题转成 SQL 直接查询结构化数据。",
      en: "A privately deployable RAG knowledge assistant: uploaded PDF/DOCX/TXT documents are chunked and indexed, and questions are answered by retrieving the most relevant chunks with multi-turn conversation context. Document vectors are computed with local embeddings and stored in ChromaDB, so no paid API is required. It also ships a LangGraph-style agent module and a Text-to-SQL engine that turns natural questions into SQL queries over structured data.",
    },
    highlights: [
      {
        zh: "本地 Embedding + ChromaDB 向量检索，零 API 成本",
        en: "Local embeddings with ChromaDB vector search — zero API cost",
      },
      {
        zh: "PDF/DOCX/TXT 文档解析、切分与来源引用",
        en: "PDF/DOCX/TXT parsing, chunking, and source citations",
      },
      {
        zh: "LangGraph 风格 Agent 与 Text-to-SQL 引擎",
        en: "LangGraph-style agent and a Text-to-SQL engine",
      },
      { zh: "支持多轮对话上下文的问答", en: "Q&A with multi-turn conversation context" },
    ],
  },
  {
    id: "billapp",
    name: { zh: "BillApp 记账应用", en: "BillApp" },
    description: {
      zh: "一个简洁的 Vue 3 记账网页应用，支持账单录入、明细列表与深浅色主题切换，纯前端无需后端。",
      en: "A simple Vue 3 bill management app with entry form, itemized list, and light/dark theme switching — pure frontend with no backend.",
    },
    category: "Web Development",
    categoryLabel: { zh: "Web 开发", en: "Web Development" },
    image: "/projects/billapp.svg",
    techStack: ["Vue 3", "JavaScript", "Vue CLI"],
    repoUrl: "https://github.com/188Y/billapp",
    longDescription: {
      zh: "一个日常记账用的轻量网页应用：通过表单快速录入账单，列表清晰展示每笔收支明细，并支持深浅色主题一键切换。基于 Vue 3 组合式组件（BillForm、BillList、ThemeSwitcher）搭建，纯前端实现，开箱即用。",
      en: "A lightweight web app for everyday bookkeeping: quickly record bills through a form, browse every income and expense in an itemized list, and switch between light and dark themes with one click. Built with Vue 3 components (BillForm, BillList, ThemeSwitcher) — pure frontend, ready to run.",
    },
    highlights: [
      { zh: "账单快速录入与明细列表", en: "Quick bill entry and itemized list" },
      { zh: "深浅色主题一键切换", en: "One-click light/dark theme switching" },
      { zh: "纯前端实现，无需后端", en: "Pure frontend — no backend required" },
    ],
  },
  {
    id: "personal-work-collections",
    name: { zh: "个人作品集网站", en: "Personal Portfolio Site" },
    description: {
      zh: "本站：一个深色主题、支持中英文切换的个人作品集，包含项目展示、经历与联系方式，通过 GitHub Actions 自动部署。",
      en: "This site: a dark-themed, bilingual (ZH/EN) personal portfolio with project showcase, experience, and contact, auto-deployed via GitHub Actions.",
    },
    category: "Web Development",
    categoryLabel: { zh: "Web 开发", en: "Web Development" },
    image: "/projects/portfolio.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    repoUrl: "https://github.com/188Y/personal-work-collections",
    demoUrl: "https://188y.github.io/personal-work-collections/",
    longDescription: {
      zh: "你正在浏览的这个网站：深色主题个人作品集，强调色采用青色到紫色的渐变。内置中英文国际化切换、滚动触发的 Framer Motion 动画、项目分类筛选与详情弹窗，移动端完全适配；每次推送到 main 分支后由 GitHub Actions 自动构建并发布到 GitHub Pages。",
      en: "The site you are browsing: a dark-themed personal portfolio with cyan-to-violet gradient accents. It features ZH/EN internationalization, scroll-triggered Framer Motion animations, project category filtering with detail modals, and full mobile support. Every push to main is built and published to GitHub Pages automatically via GitHub Actions.",
    },
    highlights: [
      { zh: "中英文一键切换（i18n）", en: "One-click ZH/EN language toggle (i18n)" },
      {
        zh: "滚动触发的 Framer Motion 动画",
        en: "Scroll-triggered Framer Motion animations",
      },
      {
        zh: "GitHub Actions 自动部署到 GitHub Pages",
        en: "Automated GitHub Actions deployment to GitHub Pages",
      },
    ],
  },
]

/** Projects section copy */
export const projectsSection = {
  tagline: { zh: "精选作品", en: "Selected work" } as Localized<string>,
  heading: { zh: "项目", en: "Projects" } as Localized<string>,
  description: {
    zh: "来自我 GitHub 的真实项目。点击卡片可查看详情。",
    en: "Real projects from my GitHub. Click a card to view details.",
  } as Localized<string>,
}

/** Unique categories derived from project data */
export const projectCategories: ProjectCategory[] = [
  "Web Development",
  "AI Application",
]
