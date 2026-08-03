import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container, Heading } from '@/components/ui/layout'
import { SEO } from '@/components/common/SEO'

export default function ServerErrorPage() {
  return (
    <>
      <SEO title="500 — Server Error" noindex canonical="/500" />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            {/* Logo and Branding */}
            <div className="flex justify-center mb-6">
              <Link to="/" className="flex items-center gap-3">
                <img src="/logo-landscape-transparent.png" alt="PT. Pelayaran Nasional Radhika Bahari Nusantara" className="h-14 sm:h-16 w-auto object-contain" />
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="flex size-24 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                  <AlertTriangle className="size-12 text-red-500" aria-hidden="true" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="absolute -top-1 -right-1 size-4 rounded-full bg-red-500"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-6xl font-bold text-red-400/30 dark:text-red-600/20 select-none" aria-hidden="true">500</p>
              <Heading level={1} size="xl">Internal Server Error</Heading>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                Something went wrong on our end. Our technical team has been notified and
                is working to resolve this issue. Please try again in a moment.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button onClick={() => window.location.reload()} variant="outline" size="md">
                <RefreshCw className="size-4" aria-hidden="true" />
                Try Again
              </Button>
              <Button asChild variant="primary" size="md">
                <Link to="/">
                  <Home className="size-4" aria-hidden="true" />
                  Return Home
                </Link>
              </Button>
            </div>

            <div className="rounded-xl bg-muted border border-border p-4">
              <p className="text-xs text-muted-foreground">
                If the problem persists, please contact our support team at{' '}
                <a href="mailto:ptrbn5758@gmail.com" className="text-primary hover:underline">
                  ptrbn5758@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  )
}
