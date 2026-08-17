/** Portfolio project entries displayed in the Projects section */

import type { Localized } from "../i18n/config"

export type ProjectCategory = "Web Development" | "Data Visualization"

export type Project = {
  id: string
  name: string
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
    id: "portfolio",
    name: "Personal Portfolio",
    description: {
      zh: "一个深色主题的个人作品集，包含首页介绍、项目展示与联系方式，并带有平滑滚动动画和移动端适配。",
      en: "A dark-themed personal portfolio with intro, project showcase, and contact, featuring smooth scroll animations and mobile support.",
    },
    category: "Web Development",
    categoryLabel: { zh: "Web 开发", en: "Web Development" },
    image: "/projects/portfolio.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/188Y/portfolio",
    demoUrl: "https://example.com",
    longDescription: {
      zh: "一个用于展示项目与技能的深色主题个人作品集。采用了平滑的滚动触发动画、移动优先的布局，以及可复用的组件结构。",
      en: "A dark-themed personal portfolio built to showcase projects and skills. It uses smooth scroll-triggered animations, a mobile-first layout, and a reusable component structure.",
    },
    highlights: [
      { zh: "响应式、移动优先的布局", en: "Responsive, mobile-first layout" },
      {
        zh: "滚动触发的 Framer Motion 动画",
        en: "Scroll-triggered Framer Motion animations",
      },
      {
        zh: "可复用组件与类型化数据源",
        en: "Reusable components and typed data sources",
      },
    ],
  },
  {
    id: "taskboard",
    name: "Task Board",
    description: {
      zh: "一个轻量看板应用，支持拖拽分组、状态筛选与本地持久化，适用于个人或小团队的工作流。",
      en: "A lightweight kanban board with drag-and-drop groups, status filters, and local persistence for personal or small-team workflows.",
    },
    category: "Web Development",
    categoryLabel: { zh: "Web 开发", en: "Web Development" },
    image: "/projects/taskboard.svg",
    techStack: ["React", "TypeScript", "Framer Motion"],
    repoUrl: "https://github.com/188Y/taskboard",
    longDescription: {
      zh: "一个轻量看板应用，包含拖拽列、状态筛选与本地持久化——为无需后端的个人或小团队工作流而生。",
      en: "A lightweight kanban board with drag-and-drop columns, status filters, and local persistence — designed for personal or small-team workflows without a backend.",
    },
    highlights: [
      { zh: "拖拽式列管理", en: "Drag-and-drop column management" },
      { zh: "状态筛选与搜索", en: "Status filters and search" },
      {
        zh: "通过 localStorage 本地持久化",
        en: "Local persistence via localStorage",
      },
    ],
  },
  {
    id: "weather",
    name: "Weather Glance",
    description: {
      zh: "一个简洁的天气查询页面，包含实时天气、多日预报与城市搜索，注重清晰的层级与响应式布局。",
      en: "A clean weather lookup page with current conditions, forecasts, and city search, focused on clear hierarchy and responsive layout.",
    },
    category: "Web Development",
    categoryLabel: { zh: "Web 开发", en: "Web Development" },
    image: "/projects/weather.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "API"],
    repoUrl: "https://github.com/188Y/weather-glance",
    demoUrl: "https://example.com",
    longDescription: {
      zh: "一个简洁的天气查询页面，包含实时天气、多日预报与城市搜索，注重清晰的层级和内容优先的响应式布局。",
      en: "A clean weather lookup page with current conditions, multi-day forecasts, and city search, focused on clear hierarchy and a responsive, content-first layout.",
    },
    highlights: [
      { zh: "带联想建议的城市搜索", en: "City search with suggestions" },
      {
        zh: "实时天气与多日预报",
        en: "Current conditions and multi-day forecast",
      },
      { zh: "响应式、内容优先布局", en: "Responsive, content-first layout" },
    ],
  },
  {
    id: "analytics",
    name: "Analytics Dashboard",
    description: {
      zh: "一个数据可视化仪表盘，用于关键指标趋势与分类对比，为快速掌握运营概览而生。",
      en: "A data visualization dashboard for key metric trends and category comparisons, built for quick operational overviews.",
    },
    category: "Data Visualization",
    categoryLabel: { zh: "数据可视化", en: "Data Visualization" },
    image: "/projects/analytics.svg",
    techStack: ["React", "TypeScript", "Chart.js"],
    repoUrl: "https://github.com/188Y/analytics-dashboard",
    longDescription: {
      zh: "一个数据可视化仪表盘，用于关键指标趋势与分类对比，搭配交互式图表，帮助快速掌握运营概览。",
      en: "A data visualization dashboard for key metric trends and category comparisons, built for quick operational overviews with interactive charts.",
    },
    highlights: [
      { zh: "交互式 Chart.js 可视化", en: "Interactive Chart.js visualizations" },
      { zh: "趋势与分类对比视图", en: "Trend and category comparison views" },
      {
        zh: "紧凑、一眼可读的仪表盘布局",
        en: "Compact, glanceable dashboard layout",
      },
    ],
  },
  {
    id: "metrics",
    name: "Metrics Explorer",
    description: {
      zh: "一个交互式指标探索器，支持时间范围筛选与多维对比，帮助更快发现异常波动。",
      en: "An interactive metrics explorer with time-range filters and multi-dimensional comparison to spot unusual spikes faster.",
    },
    category: "Data Visualization",
    categoryLabel: { zh: "数据可视化", en: "Data Visualization" },
    image: "/projects/metrics.svg",
    techStack: ["React", "TypeScript", "D3"],
    repoUrl: "https://github.com/188Y/metrics-explorer",
    longDescription: {
      zh: "一个交互式指标探索器，支持时间范围筛选与多维对比，帮助更快发现异常波动。",
      en: "An interactive metrics explorer with time-range filters and multi-dimensional comparison to spot unusual spikes faster.",
    },
    highlights: [
      { zh: "时间范围筛选", en: "Time-range filtering" },
      { zh: "多维对比", en: "Multi-dimensional comparison" },
      { zh: "D3 驱动的自定义图表", en: "D3-powered custom charts" },
    ],
  },
  {
    id: "landing",
    name: "Product Landing",
    description: {
      zh: "一个产品落地页模板，拥有强烈的品牌优先首屏与清晰的行动号召，同时适配桌面与移动端。",
      en: "A product landing page template with a strong brand-first hero and clear CTAs, adapted for desktop and mobile.",
    },
    category: "Web Development",
    categoryLabel: { zh: "Web 开发", en: "Web Development" },
    image: "/projects/landing.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/188Y/product-landing",
    demoUrl: "https://example.com",
    longDescription: {
      zh: "一个产品落地页模板，拥有强烈的品牌优先首屏与清晰的行动号召，同时适配桌面与移动端。",
      en: "A product landing page template with a strong brand-first hero and clear CTAs, adapted for both desktop and mobile.",
    },
    highlights: [
      { zh: "品牌优先的首屏", en: "Brand-first hero section" },
      { zh: "聚焦转化的清晰 CTA", en: "Clear conversion-focused CTAs" },
      { zh: "桌面与移动端布局", en: "Desktop and mobile layouts" },
    ],
  },
]

/** Projects section copy */
export const projectsSection = {
  tagline: { zh: "精选作品", en: "Selected work" } as Localized<string>,
  heading: { zh: "项目", en: "Projects" } as Localized<string>,
  description: {
    zh: "精选的上线与练习项目。点击卡片可查看详情。",
    en: "Selected live and practice projects. Click a card to view details.",
  } as Localized<string>,
}

/** Unique categories derived from project data */
export const projectCategories: ProjectCategory[] = [
  "Web Development",
  "Data Visualization",
]
