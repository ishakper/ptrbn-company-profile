import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container, Heading } from '@/components/ui/layout'
import { SEO } from '@/components/common/SEO'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page Not Found" noindex canonical="/404" />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center space-y-8"
          >
            {/* Logo and Branding */}
            <div className="flex justify-center mb-6">
              <Link to="/" className="flex items-center gap-3">
                <img src="/logo-landscape-transparent.png" alt="PT. Pelayaran Nasional Radhika Bahari Nusantara" className="h-14 sm:h-16 w-auto object-contain" />
              </Link>
            </div>
            {/* Animated 404 */}
            <div className="relative">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.07, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display font-extrabold text-[12rem] leading-none text-navy-800 dark:text-white select-none"
                aria-hidden="true"
              >
                404
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex size-24 items-center justify-center rounded-2xl bg-navy-800 shadow-elevated">
                  <Compass className="size-12 text-gold-400 animate-spin" style={{ animationDuration: '8s' }} aria-hidden="true" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
            >
              <Heading level={1} size="xl">Page Not Found</Heading>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                We couldn't find the page you're looking for. It may have been moved, deleted,
                or perhaps you sailed off course. Let us help you navigate back.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Button onClick={() => window.history.back()} variant="outline" size="md">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Go Back
              </Button>
              <Button asChild variant="primary" size="md">
                <Link to="/">
                  <Home className="size-4" aria-hidden="true" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-sm text-muted-foreground mb-3">Popular destinations:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { label: 'Services', href: '/services' },
                  { label: 'Fleet', href: '/fleet' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'About Us', href: '/about' },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </>
  )
}
