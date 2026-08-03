import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, Search, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/layout/Navigation'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { Button } from '@/components/ui/button'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useTheme } from '@/hooks/useTheme'
import { useUIStore } from '@/store/ui.store'
import { cn } from '@/lib/utils'

export function Header() {
  const location = useLocation()
  const { isScrolled } = useScrollPosition(60)
  const { toggle, isDark } = useTheme()
  const { isMobileMenuOpen, openMobileMenu, closeMobileMenu } = useUIStore()

  const isHomepage = location.pathname === '/'

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border-b border-surface-200 dark:border-navy-700 shadow-sm'
          : 'bg-transparent',
      )}
    >
      {/* Skip to content — WCAG 2.2 */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-4 sm:h-20 lg:h-24">

          {/* Logo — hidden on unscrolled homepage to prevent overlap with background */}
          <Link
            to="/"
            className={cn(
              'flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-800 rounded-md transition-all duration-300',
              isHomepage && !isScrolled ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100',
            )}
            aria-label="PT. Pelayaran Nasional Radhika Bahari Nusantara — Back to Homepage"
          >
            <img
              src="/logo-landscape-transparent.png"
              alt="PT. Pelayaran Nasional Radhika Bahari Nusantara"
              className="h-[56px] sm:h-[68px] lg:h-[82px] w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <Navigation />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search placeholder */}
            <button
              aria-label="Search"
              className="hidden sm:flex size-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 text-navy-800 hover:text-navy-950 hover:bg-navy-50/50 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 focus-visible:ring-navy-800 dark:focus-visible:ring-white"
            >
              <Search className="size-4" aria-hidden="true" />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="hidden sm:flex size-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 text-navy-800 hover:text-navy-950 hover:bg-navy-50/50 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 focus-visible:ring-navy-800 dark:focus-visible:ring-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'dark' : 'light'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Desktop CTA */}
            <Button
              asChild
              variant={isDark && !isScrolled ? 'white' : 'primary'}
              size="md"
              rounded="lg"
              className="hidden md:inline-flex"
            >
              <Link to="/contact">
                <Phone className="size-4" aria-hidden="true" />
                Contact Us
              </Link>
            </Button>

            {/* Mobile menu trigger */}
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={closeMobileMenu}
              trigger={
                <button
                  onClick={openMobileMenu}
                  aria-label="Open navigation menu"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  className="flex lg:hidden size-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 text-navy-800 hover:text-navy-950 hover:bg-navy-50/50 dark:text-white dark:hover:bg-white/10 focus-visible:ring-navy-800 dark:focus-visible:ring-white"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}
