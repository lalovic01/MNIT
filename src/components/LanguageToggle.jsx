import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="rounded-full border border-foam/45 bg-foam/10 px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-foam transition hover:bg-foam/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
      aria-label={language === 'en' ? 'Switch language to Serbian' : 'Prebaci jezik na engleski'}
    >
      {language === 'en' ? 'EN / SR' : 'SR / EN'}
    </button>
  )
}
