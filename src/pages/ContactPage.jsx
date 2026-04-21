import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const MotionSection = motion.section

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export default function ContactPage() {
  const { content } = useLanguage()
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState('idle')

  useDocumentMeta({ ...content.seo.contact, baseUrl: content.brand.baseUrl })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      return
    }

    setStatus('success')
    setFormData(initialState)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
      <section className="space-y-4">
        <h1 className="font-title text-4xl uppercase leading-tight text-foam sm:text-5xl">
          {content.contact.title}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-foam/80 sm:text-lg">{content.contact.subtitle}</p>

        <div className="mt-7 rounded-2xl border border-foam/20 bg-pine/25 p-5 text-sm text-foam/90">
          <p className="text-xs uppercase tracking-[0.13em] text-foam/70">{content.contact.emailLabel}</p>
          <a
            href={`mailto:${content.brand.email}`}
            className="mt-2 inline-block text-lg text-foam transition hover:text-mint"
          >
            {content.brand.email}
          </a>
        </div>

        <div className="rounded-2xl border border-foam/20 bg-ink/45 p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foam/75">{content.contact.ctaTitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-foam/80">{content.contact.ctaText}</p>
          <a
            href={`mailto:${content.brand.email}?subject=Discovery Call`}
            className="mt-4 inline-flex rounded-full border border-foam/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-foam transition hover:bg-foam/10"
          >
            {content.contact.ctaButton}
          </a>
        </div>
      </section>

      <MotionSection
        className="rounded-3xl border border-foam/20 bg-ink/55 p-6 sm:p-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <label className="block text-sm text-foam/85">
            <span className="mb-2 block">{content.contact.form.name}</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-foam/30 bg-ink/60 px-4 py-3 text-sm text-foam placeholder:text-foam/45 focus:border-mint focus:outline-none"
              autoComplete="name"
            />
          </label>

          <label className="block text-sm text-foam/85">
            <span className="mb-2 block">{content.contact.form.email}</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-foam/30 bg-ink/60 px-4 py-3 text-sm text-foam placeholder:text-foam/45 focus:border-mint focus:outline-none"
              autoComplete="email"
            />
          </label>

          <label className="block text-sm text-foam/85">
            <span className="mb-2 block">{content.contact.form.company}</span>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-foam/30 bg-ink/60 px-4 py-3 text-sm text-foam placeholder:text-foam/45 focus:border-mint focus:outline-none"
              autoComplete="organization"
            />
          </label>

          <label className="block text-sm text-foam/85">
            <span className="mb-2 block">{content.contact.form.message}</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-xl border border-foam/30 bg-ink/60 px-4 py-3 text-sm text-foam placeholder:text-foam/45 focus:border-mint focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-foam px-6 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-ink transition hover:bg-foam/90"
          >
            {content.contact.form.submit}
          </button>

          {status === 'success' && (
            <p className="rounded-xl border border-mint/40 bg-mint/20 px-4 py-3 text-sm text-foam">
              {content.contact.form.success}
            </p>
          )}

          {status === 'error' && (
            <p className="rounded-xl border border-foam/35 bg-foam/15 px-4 py-3 text-sm text-foam">
              {content.contact.form.error}
            </p>
          )}
        </form>
      </MotionSection>
    </div>
  )
}
