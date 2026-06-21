import { motion } from 'framer-motion'
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
    </div>
  )
}
