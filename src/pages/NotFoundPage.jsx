import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function NotFoundPage() {
  const { content } = useLanguage()

  useDocumentMeta({ ...content.seo.notFound, baseUrl: content.brand.baseUrl })

  return (
    <section className="grid min-h-[55vh] place-content-center gap-4 text-center">
      <h1 className="font-title text-5xl uppercase text-foam">404</h1>
      <h2 className="text-xl text-foam/90">{content.notFound.title}</h2>
      <p className="text-foam/75">{content.notFound.text}</p>
      <div>
        <Link
          to="/"
          className="inline-flex rounded-full border border-foam/45 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foam transition hover:bg-foam/10"
        >
          {content.notFound.action}
        </Link>
      </div>
    </section>
  )
}
