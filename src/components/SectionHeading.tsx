import { motion } from "framer-motion"
import type { ReactNode } from "react"

type SectionHeadingProps = {
  /** Anchor id applied to the heading, so `aria-labelledby` can point at it */
  id: string
  heading: string
  /** Optional standfirst shown to the right of the heading on wide screens */
  description?: string
}

/**
 * Shared section header: a hairline, then the heading with its standfirst
 * hanging to the right. Every section uses this so the page keeps one rhythm
 * instead of five slightly different stacked headers.
 */
export const SectionHeading = ({ id, heading, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="border-t border-line pt-6"
  >
    <div className="grid gap-3 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]"
      >
        {heading}
      </h2>
      {description ? (
        <p className="max-w-[60ch] text-sm leading-relaxed text-ink-2 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  </motion.div>
)

type MetaListProps = {
  items: string[]
  /** Accessible name for the list, e.g. "技术栈" */
  label?: string
  className?: string
}

/**
 * The single metadata treatment used across the page: monospace, quiet, and
 * separated by hairline dots instead of a row of bordered chips.
 */
export const MetaList = ({ items, label, className = "" }: MetaListProps) => (
  <ul
    aria-label={label}
    className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs tracking-wide text-ink-3 ${className}`}
  >
    {items.map((item, index) => (
      <li key={item} className="flex items-center gap-x-2">
        {index > 0 ? (
          <span aria-hidden="true" className="text-ink-4">
            ·
          </span>
        ) : null}
        {item}
      </li>
    ))}
  </ul>
)

/** Standard content wrapper so every section shares one measure and gutter */
export const SectionShell = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">{children}</div>
)
