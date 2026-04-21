import AnimatedSection from '../components/AnimatedSection'
import { useLanguage } from '../context/LanguageContext'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function AboutPage() {
  const { content } = useLanguage()

  useDocumentMeta({ ...content.seo.about, baseUrl: content.brand.baseUrl })

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="font-title text-4xl uppercase leading-tight text-foam sm:text-5xl">
          {content.about.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-foam/80 sm:text-lg">{content.about.intro}</p>
      </header>

      <AnimatedSection className="grid gap-4 md:grid-cols-3" delay={0.08}>
        {content.about.blocks.map((block) => (
          <article
            key={block.title}
            className="rounded-2xl border border-foam/20 bg-pine/30 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-foam/50"
          >
            <h2 className="font-title text-2xl uppercase text-foam">{block.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foam/80">{block.text}</p>
          </article>
        ))}
      </AnimatedSection>
    </div>
  )
}
