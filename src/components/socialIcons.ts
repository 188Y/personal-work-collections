import type { ComponentType } from "react"
import { GitHubIcon, MailIcon, type IconProps } from "./icons"

/** Map a social/contact label to its icon */
export const socialIconMap: Record<string, ComponentType<IconProps>> = {
  GitHub: GitHubIcon,
  Email: MailIcon,
}
