/** Work and education history shown in the experience timeline */

export type ExperienceEntry = {
  /** Date range, e.g. "2023 — Present" */
  period: string
  /** Job title or degree */
  role: string
  /** Company or institution */
  organization: string
  /** One or two sentences about the role */
  description: string
  /** Related skills or topics */
  tags: string[]
}

/** Experience section copy */
export const experienceSection = {
  tagline: "My journey",
  heading: "Experience",
  description:
    "Roles and education that shaped how I approach building for the web.",
} as const

/** Timeline entries, ordered newest first */
export const experiences: ExperienceEntry[] = [
  {
    period: "2023 — Present",
    role: "Frontend Developer",
    organization: "Your Company",
    description:
      "Building responsive, accessible web interfaces with React and TypeScript, and maintaining a shared component library.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2021 — 2023",
    role: "Web Developer",
    organization: "Previous Company",
    description:
      "Shipped marketing sites and internal tools, improving performance and collaborating closely with design.",
    tags: ["JavaScript", "CSS", "Vite"],
  },
  {
    period: "2019 — 2021",
    role: "B.S. Computer Science",
    organization: "University Name",
    description:
      "Studied software fundamentals, data structures, and modern web development.",
    tags: ["Algorithms", "Data Structures", "Web"],
  },
]
