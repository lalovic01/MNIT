import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { useLanguage } from '../context/LanguageContext'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const MotionArticle = motion.article

export default function ServicesPage() {
  const { content } = useLanguage()

  useDocumentMeta({ ...content.seo.services, baseUrl: content.brand.baseUrl })

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="font-title text-4xl uppercase leading-tight text-foam sm:text-5xl">
          {content.services.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-foam/80 sm:text-lg">{content.services.subtitle}</p>
      </header>

      <AnimatedSection className="grid gap-4 lg:grid-cols-2" delay={0.08}>
        {content.services.items.map((service, index) => (
          <MotionArticle
            key={service.title}
            className="rounded-3xl border border-foam/20 bg-ink/55 p-6"
            whileHover={{ y: -7, borderColor: 'rgba(176,228,204,0.55)' }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <h2 className="font-title text-2xl uppercase text-foam">{service.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foam/80">{service.description}</p>
            <ul className="mt-5 space-y-2">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 text-sm text-foam/85">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-mint" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </MotionArticle>
        ))}
      </AnimatedSection>
    </div>
  )
}
