/** Contact details and section copy, shared by the Hero and Contact sections */

export type SocialLink = {
  /** Display label, e.g. "GitHub" */
  label: string
  /** Link target */
  href: string
  /** Short human-readable value shown next to the icon */
  value: string
}

import type { Localized } from "../i18n/config"

/** Contact section copy */
export const contactSection = {
  tagline: { zh: "保持联系", en: "Get in touch" } as Localized<string>,
  heading: { zh: "联系我", en: "Contact" } as Localized<string>,
  description: {
    zh: "欢迎洽谈合作，或只是打个招呼。",
    en: "Feel free to reach out for collaboration or just to say hi.",
  } as Localized<string>,
}

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
