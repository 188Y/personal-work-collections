/** Skill categories and related technologies for the About section */
export type SkillCategory = {
  name: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    name: "Tools",
    items: ["Git", "VS Code / Cursor", "npm"],
  },
]
