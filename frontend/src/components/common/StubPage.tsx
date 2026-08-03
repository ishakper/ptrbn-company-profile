import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Construction, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container, Heading } from '@/components/ui/layout'
import { Badge } from '@/components/ui/badge'
import { SEO } from '@/components/common/SEO'

interface StubPageProps {
  title: string
  description: string
  canonical: string
  sprintLabel?: string
}

export function StubPage({ title, description, canonical, sprintLabel = 'Sprint 4' }: StubPageProps) {
  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />
      <div className="flex min-h-[calc(100svh-4rem)] items-center justify-center pt-20 pb-16">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="flex justify-center">
              <div className="flex size-20 items-center justify-center rounded-2xl bg-secondary/10">
                <Construction className="size-10 text-secondary" aria-hidden="true" />
              </div>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="uppercase tracking-widest text-xs border-primary/20 text-primary bg-primary/5">{sprintLabel}</Badge>
              <Heading level={1} size="xl">{title}</Heading>
              <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
            </div>
            <div className="rounded-xl border-2 border-dashed border-border bg-muted p-8">
              <p className="text-sm text-muted-foreground italic">
                This page is under development and will be implemented in a future sprint.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button asChild variant="outline" size="md">
                <Link to="/">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="primary" size="md">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  )
}
