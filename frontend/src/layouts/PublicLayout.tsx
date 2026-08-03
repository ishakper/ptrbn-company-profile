import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RouteProgressBar, SkeletonPage } from '@/components/common/PageLoader'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { WhatsAppWidget } from '@/components/common/WhatsAppWidget'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15, ease: [0.4, 0, 1, 1] } },
}

export function PublicLayout() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <RouteProgressBar />
      <Header />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <ErrorBoundary>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense fallback={<SkeletonPage />}>
                <Outlet />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />

      {/* Global floating widgets */}
      <WhatsAppWidget />
      <BackToTopButton />
    </div>
  )
}

function BackToTopButton() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll back to top of page"
      className="fixed bottom-6 right-6 z-30 flex size-11 items-center justify-center rounded-full bg-navy-800 text-white shadow-elevated hover:bg-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
