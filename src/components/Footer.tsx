/** Site footer with copyright */
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 text-sm text-white/50 sm:flex-row">
        <p>© {year} Yly. All rights reserved.</p>
        <a href="#hero" className="hover:text-white/80" aria-label="Back to top">
          Back to top
        </a>
      </div>
    </footer>
  )
}

export default Footer
