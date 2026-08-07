/** Portfolio project entries displayed in the Projects section */
export type Project = {
  id: string
  name: string
  description: string
  image: string
  techStack: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Personal Portfolio",
    description:
      "深色主题个人作品集网站，包含首页介绍、项目展示与联系方式，支持流畅滚动动画与移动端适配。",
    image: "/projects/portfolio.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "#",
  },
  {
    id: "taskboard",
    name: "Task Board",
    description:
      "轻量看板应用，支持任务拖拽分组、状态筛选与本地持久化，适合个人与小团队日常协作。",
    image: "/projects/taskboard.svg",
    techStack: ["React", "TypeScript", "Framer Motion"],
    link: "#",
  },
  {
    id: "weather",
    name: "Weather Glance",
    description:
      "简洁天气查阅页，展示当前气温、未来预报与城市搜索，强调清晰信息层级与响应式布局。",
    image: "/projects/weather.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "API"],
    link: "#",
  },
]
