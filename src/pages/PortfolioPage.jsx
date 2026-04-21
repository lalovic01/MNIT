import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { useLanguage } from '../context/LanguageContext'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const MotionArticle = motion.article

export default function PortfolioPage() {
  const { content } = useLanguage()

  useDocumentMeta({ ...content.seo.portfolio, baseUrl: content.brand.baseUrl })

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="font-title text-4xl uppercase leading-tight text-foam sm:text-5xl">
          {content.portfolio.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-foam/80 sm:text-lg">{content.portfolio.subtitle}</p>
      </header>

      <AnimatedSection className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.06}>
        {content.portfolio.projects.map((project, index) => (
          <MotionArticle
            key={project.name}
            className="group overflow-hidden rounded-2xl border border-foam/20 bg-pine/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <div className="overflow-hidden border-b border-foam/15">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4 p-5">
              <h2 className="font-title text-xl uppercase text-foam">{project.name}</h2>
              <p className="text-sm leading-relaxed text-foam/80">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={`${project.name}-${tech}`}
                    className="rounded-full border border-foam/35 px-2.5 py-1 text-xs uppercase tracking-[0.1em] text-foam/90"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-mint transition hover:text-foam"
                aria-label={`${project.name} demo`}
              >
                Demo Placeholder →
              </a>
            </div>
          </MotionArticle>
        ))}
      </AnimatedSection>
    </div>
  )
}
