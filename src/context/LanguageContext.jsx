/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { siteContent } from '../data/siteContent'

const LanguageContext = createContext(null)

const LANGUAGE_STORAGE_KEY = 'mnit-language'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return stored === 'sr' ? 'sr' : 'en'
  })

  const setLang = useCallback((lang) => {
    setLanguage(lang)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLang(language === 'en' ? 'sr' : 'en')
  }, [language, setLang])

  const value = useMemo(
    () => ({
      language,
      content: siteContent[language],
      setLanguage: setLang,
      toggleLanguage,
    }),
    [language, setLang, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
