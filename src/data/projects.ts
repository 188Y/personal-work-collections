/** Portfolio project entries displayed in the Projects section */
export type ProjectCategory = "Web Development" | "Data Visualization"

export type Project = {
  id: string
  name: string
  description: string
  category: ProjectCategory
  image: string
  techStack: string[]
  /** Repository link shown in the detail modal */
  repoUrl: string
  /** Optional live demo link shown in the detail modal */
  demoUrl?: string
  /** Longer description shown in the detail modal */
  longDescription: string
  /** Key outcomes or features shown in the detail modal */
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Personal Portfolio",
    description:
      "A dark-themed personal portfolio with intro, project showcase, and contact, featuring smooth scroll animations and mobile support.",
    category: "Web Development",
    image: "/projects/portfolio.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/188Y/portfolio",
    demoUrl: "https://example.com",
    longDescription:
      "A dark-themed personal portfolio built to showcase projects and skills. It uses smooth scroll-triggered animations, a mobile-first layout, and a reusable component structure.",
    highlights: [
      "Responsive, mobile-first layout",
      "Scroll-triggered Framer Motion animations",
      "Reusable components and typed data sources",
    ],
  },
  {
    id: "taskboard",
    name: "Task Board",
    description:
      "A lightweight kanban board with drag-and-drop groups, status filters, and local persistence for personal or small-team workflows.",
    category: "Web Development",
    image: "/projects/taskboard.svg",
    techStack: ["React", "TypeScript", "Framer Motion"],
    repoUrl: "https://github.com/188Y/taskboard",
    longDescription:
      "A lightweight kanban board with drag-and-drop columns, status filters, and local persistence — designed for personal or small-team workflows without a backend.",
    highlights: [
      "Drag-and-drop column management",
      "Status filters and search",
      "Local persistence via localStorage",
    ],
  },
  {
    id: "weather",
    name: "Weather Glance",
    description:
      "A clean weather lookup page with current conditions, forecasts, and city search, focused on clear hierarchy and responsive layout.",
    category: "Web Development",
    image: "/projects/weather.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "API"],
    repoUrl: "https://github.com/188Y/weather-glance",
    demoUrl: "https://example.com",
    longDescription:
      "A clean weather lookup page with current conditions, multi-day forecasts, and city search, focused on clear hierarchy and a responsive, content-first layout.",
    highlights: [
      "City search with suggestions",
      "Current conditions and multi-day forecast",
      "Responsive, content-first layout",
    ],
  },
  {
    id: "analytics",
    name: "Analytics Dashboard",
    description:
      "A data visualization dashboard for key metric trends and category comparisons, built for quick operational overviews.",
    category: "Data Visualization",
    image: "/projects/analytics.svg",
    techStack: ["React", "TypeScript", "Chart.js"],
    repoUrl: "https://github.com/188Y/analytics-dashboard",
    longDescription:
      "A data visualization dashboard for key metric trends and category comparisons, built for quick operational overviews with interactive charts.",
    highlights: [
      "Interactive Chart.js visualizations",
      "Trend and category comparison views",
      "Compact, glanceable dashboard layout",
    ],
  },
  {
    id: "metrics",
    name: "Metrics Explorer",
    description:
      "An interactive metrics explorer with time-range filters and multi-dimensional comparison to spot unusual spikes faster.",
    category: "Data Visualization",
    image: "/projects/metrics.svg",
    techStack: ["React", "TypeScript", "D3"],
    repoUrl: "https://github.com/188Y/metrics-explorer",
    longDescription:
      "An interactive metrics explorer with time-range filters and multi-dimensional comparison to spot unusual spikes faster.",
    highlights: [
      "Time-range filtering",
      "Multi-dimensional comparison",
      "D3-powered custom charts",
    ],
  },
  {
    id: "landing",
    name: "Product Landing",
    description:
      "A product landing page template with a strong brand-first hero and clear CTAs, adapted for desktop and mobile.",
    category: "Web Development",
    image: "/projects/landing.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/188Y/product-landing",
    demoUrl: "https://example.com",
    longDescription:
      "A product landing page template with a strong brand-first hero and clear CTAs, adapted for both desktop and mobile.",
    highlights: [
      "Brand-first hero section",
      "Clear conversion-focused CTAs",
      "Desktop and mobile layouts",
    ],
  },
]

/** Projects section copy */
export const projectsSection = {
  tagline: "Selected work",
  heading: "Projects",
  description:
    "Selected live and practice projects. Click a card to view details.",
} as const

/** Unique categories derived from project data */
export const projectCategories: ProjectCategory[] = [
  "Web Development",
  "Data Visualization",
]
