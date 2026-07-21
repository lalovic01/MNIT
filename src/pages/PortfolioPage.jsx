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
            className="group flex h-full min-h-[30rem] flex-col overflow-hidden rounded-2xl border border-foam/20 bg-pine/25 sm:min-h-[31rem] lg:min-h-[33rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative overflow-hidden border-b border-foam/15 bg-ink/70">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="h-52 w-full object-cover object-center transition duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col space-y-4 p-5">
              <h2 className="font-title text-xl uppercase text-foam">{project.name}</h2>
              <p className="flex-1 text-sm leading-relaxed text-foam/80">{project.description}</p>
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
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-mint transition hover:text-foam"
                aria-label={`${project.name} demo`}
              >
                Open live site →
              </a>
            </div>
          </MotionArticle>
        ))}
      </AnimatedSection>
    </div>
  )
}
