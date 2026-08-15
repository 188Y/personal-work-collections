/** Contact details and section copy, shared by the Hero and Contact sections */

export type SocialLink = {
  /** Display label, e.g. "GitHub" */
  label: string
  /** Link target */
  href: string
  /** Short human-readable value shown next to the icon */
  value: string
}

/** Contact section copy */
export const contactSection = {
  tagline: "Get in touch",
  heading: "Contact",
  description: "Feel free to reach out for collaboration or just to say hi.",
} as const

/** Social / contact links */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/188Y",
    value: "github.com/188Y",
  },
  {
    label: "Email",
    href: "mailto:1695192364@qq.com",
    value: "1695192364@qq.com",
  },
]
