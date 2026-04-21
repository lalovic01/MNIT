import { useEffect } from 'react'

function upsertMeta(selector, attrs) {
  let meta = document.head.querySelector(selector)
  if (!meta) {
    meta = document.createElement('meta')
    document.head.appendChild(meta)
  }

  Object.entries(attrs).forEach(([key, value]) => {
    meta.setAttribute(key, value)
  })
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export function useDocumentMeta({ title, description, path, baseUrl, image = '/og-mnit.svg' }) {
  useEffect(() => {
    if (!title || !description || !baseUrl) {
      return
    }

    const canonicalUrl = `${baseUrl}${path}`

    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: `${baseUrl}${image}` })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    upsertCanonical(canonicalUrl)
  }, [baseUrl, description, image, path, title])
}
