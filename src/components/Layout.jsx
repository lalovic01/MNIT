import FloatingBackdrop from './FloatingBackdrop'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-foam">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foam focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <FloatingBackdrop />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main id="main-content" className="flex-1 py-10 sm:py-14">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
