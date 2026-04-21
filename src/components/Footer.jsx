import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { content } = useLanguage()

  return (
    <footer className="mt-14 border-t border-foam/15 pb-8 pt-8 text-sm text-foam/85">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl leading-relaxed">{content.footer.text}</p>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="rounded-full border border-foam/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:border-foam hover:bg-foam/10"
          >
            {content.nav.hire}
          </Link>
          <a
            href={`mailto:${content.brand.email}`}
            className="text-xs uppercase tracking-[0.14em] text-foam/80 transition hover:text-foam"
          >
            {content.brand.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
