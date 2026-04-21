import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

const MobileNav = motion.nav

function navClassName({ isActive }) {
  if (isActive) {
    return 'text-foam'
  }
  return 'text-foam/80 hover:text-foam'
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { content } = useLanguage()

  const links = useMemo(
    () => [
      { to: '/', label: content.nav.home },
      { to: '/about', label: content.nav.about },
      { to: '/services', label: content.nav.services },
      { to: '/portfolio', label: content.nav.portfolio },
      { to: '/contact', label: content.nav.contact },
    ],
    [
      content.nav.about,
      content.nav.contact,
      content.nav.home,
      content.nav.portfolio,
      content.nav.services,
    ],
  )

  return (
    <header className="sticky top-0 z-40 -mx-4 border-b border-foam/15 bg-ink/70 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2" aria-label="MNIT home">
          <span className="grid h-9 w-9 place-content-center rounded-lg border border-foam/50 bg-foam/10 text-xs font-bold tracking-[0.16em] text-foam transition group-hover:bg-foam/20">
            MN
          </span>
          <span className="font-title text-lg uppercase tracking-[0.2em] text-foam">{content.brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClassName}>
              {link.label}
            </NavLink>
          ))}
          <LanguageToggle />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foam/45 text-foam md:hidden"
          aria-expanded={open}
          aria-label="Open menu"
        >
          <span className="text-lg">{open ? '×' : '≡'}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <MobileNav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mt-3 rounded-2xl border border-foam/20 bg-ink/90 p-4 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-4 text-sm">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navClassName}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <LanguageToggle />
            </div>
          </MobileNav>
        )}
      </AnimatePresence>
    </header>
  )
}
