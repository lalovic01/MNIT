import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { useLanguage } from '../context/LanguageContext'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const MotionArticle = motion.article

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
        {content.about.blocks.map((block, index) => (
          <MotionArticle
            key={block.title}
            className="process-orbit-card group relative overflow-hidden rounded-2xl border border-foam/20 bg-ink/50 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <span aria-hidden="true" className="process-orbit-line" />
            <div className="relative z-10">
              <h2 className="font-title text-2xl uppercase text-foam">{block.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foam/80">{block.text}</p>
            </div>
          </MotionArticle>
        ))}
      </AnimatedSection>

      <AnimatedSection className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start" delay={0.12}>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">MNIT approach</p>
          <h2 className="font-title text-3xl uppercase leading-tight text-foam sm:text-4xl">
            {content.about.approachTitle}
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-foam/80 sm:text-lg">{content.about.approachText}</p>
      </AnimatedSection>

      <AnimatedSection className="space-y-6" delay={0.12}>
        <h2 className="font-title text-3xl uppercase tracking-[0.05em] text-foam sm:text-4xl">
          {content.about.principlesTitle}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {content.about.principles.map((principle, index) => (
            <MotionArticle
              key={principle.title}
              className="rounded-2xl border border-foam/20 bg-pine/25 p-6 transition hover:-translate-y-1 hover:border-foam/50"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-mint">0{index + 1}</p>
              <h3 className="mt-3 font-title text-xl uppercase text-foam">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foam/75">{principle.text}</p>
            </MotionArticle>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <section className="relative overflow-hidden rounded-3xl border border-foam/30 bg-foam p-7 text-ink sm:p-10">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-title text-3xl uppercase leading-tight sm:text-4xl">{content.about.ctaTitle}</h2>
            <p className="mt-4 leading-relaxed text-ink/75">{content.about.ctaText}</p>
            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foam transition hover:-translate-y-0.5 hover:bg-pine"
            >
              {content.about.ctaButton}
            </Link>
          </div>
          <span aria-hidden="true" className="absolute -bottom-20 -right-4 h-48 w-48 rounded-full border-[20px] border-mint/30" />
        </section>
      </AnimatedSection>
    </div>
  )
}
