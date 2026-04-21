import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { useLanguage } from '../context/LanguageContext'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const MotionP = motion.p
const MotionSpan = motion.span
const MotionDiv = motion.div
const MotionAside = motion.aside
const MotionArticle = motion.article

function MetricGlowCard({ metric }) {
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setGlow({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    })
  }

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setGlow((current) => ({ ...current, active: true }))}
      onMouseLeave={() => setGlow((current) => ({ ...current, active: false }))}
      className="group relative overflow-hidden rounded-2xl border border-foam/20 bg-pine/35 p-6 transition hover:-translate-y-1 hover:border-foam/50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200"
        style={{
          opacity: glow.active ? 1 : 0,
          background: `radial-gradient(180px circle at ${glow.x}px ${glow.y}px, rgba(176, 228, 204, 0.32), transparent 68%)`,
        }}
      />
      <div className="relative z-10">
        <p className="font-title text-3xl text-foam sm:text-4xl">{metric.value}</p>
        <p className="mt-2 text-sm text-foam/75">{metric.label}</p>
      </div>
    </article>
  )
}

export default function HomePage() {
  const { content } = useLanguage()
  const words = content.home.headline.split(' ')

  useDocumentMeta({ ...content.seo.home, baseUrl: content.brand.baseUrl })

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <MotionP
            className="mb-4 inline-flex rounded-full border border-foam/25 bg-foam/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foam/85"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {content.home.eyebrow}
          </MotionP>

          <h1 className="font-title text-balance text-4xl uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
            {words.map((word, index) => (
              <MotionSpan
                key={`${word}-${index}`}
                className="aurora-word mr-3 inline-block"
                style={{ '--aurora-delay': `${index * 0.12}s` }}
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.045, duration: 0.55, ease: 'easeOut' }}
              >
                {word}
              </MotionSpan>
            ))}
          </h1>

          <MotionP
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-foam/80 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
          >
            {content.home.subheadline}
          </MotionP>

          <MotionDiv
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.45 }}
          >
            <Link
              to="/contact"
              className="rounded-full bg-foam px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:bg-foam/90"
            >
              {content.home.primaryCta}
            </Link>
            <Link
              to="/portfolio"
              className="rounded-full border border-foam/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foam transition hover:-translate-y-0.5 hover:border-foam hover:bg-foam/10"
            >
              {content.home.secondaryCta}
            </Link>
          </MotionDiv>
        </div>

        <MotionAside
          className="rounded-3xl border border-foam/20 bg-foam/10 p-6 backdrop-blur"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.65 }}
        >
          <ul className="space-y-4 text-sm leading-relaxed text-foam/85">
            {content.home.trustPoints.map((point, index) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="signal-dot mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-mint"
                  style={{ '--dot-delay': `${index * 0.3}s` }}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </MotionAside>
      </section>

      <AnimatedSection className="grid gap-4 sm:grid-cols-3" delay={0.1}>
        {content.home.metrics.map((metric) => (
          <MetricGlowCard key={metric.label} metric={metric} />
        ))}
      </AnimatedSection>

      <AnimatedSection className="space-y-6" delay={0.18}>
        <h2 className="font-title text-3xl uppercase tracking-[0.05em] text-foam sm:text-4xl">
          {content.home.processTitle}
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {content.home.process.map((item, index) => (
            <MotionArticle
              key={item.title}
              className="process-orbit-card group relative overflow-hidden rounded-2xl border border-foam/20 bg-ink/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <span aria-hidden="true" className="process-orbit-line" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.16em] text-mint">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-foam">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foam/75">{item.description}</p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
