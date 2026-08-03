import { motion, type Variants } from 'framer-motion'
import { Container } from '@/components/ui/layout'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/feedback'
import { cn } from '@/lib/utils'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  /** Shown as a small uppercase badge above the title */
  badge?: string
  /** Main h1 heading */
  title: string
  /** Supporting paragraph below title */
  description?: string
  /** Background image URL (relative or absolute) */
  backgroundImage?: string
  /** Optional breadcrumb nav items */
  breadcrumbs?: BreadcrumbItem[]
  /** Optional children rendered below description (e.g. CTA buttons) */
  children?: React.ReactNode
  /** aria-label for the section */
  ariaLabel?: string
  /** Override the overlay gradient darkness */
  overlayClass?: string
  className?: string
}

/**
 * PageHero — Reusable dark-navy page banner.
 * Used on: Services, Fleet, Routes, Projects, News, Career, Gallery
 */
export function PageHero({
  badge,
  title,
  description,
  backgroundImage,
  breadcrumbs,
  children,
  ariaLabel,
  overlayClass = 'bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950/90',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-navy-950 text-white overflow-hidden',
        className
      )}
      aria-label={ariaLabel ?? `${title} — Page Banner`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
          aria-hidden="true"
        />
      )}

      {/* Gradient overlay */}
      <div className={cn('absolute inset-0', overlayClass)} aria-hidden="true" />

      {/* Subtle decorative patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 size-96 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-64 rounded-full bg-navy-400/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          {/* Breadcrumb */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div variants={fadeUp} className="flex justify-center">
              <Breadcrumb
                items={breadcrumbs}
                className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-gold-400 [&_span[aria-current]]:text-gold-300"
              />
            </motion.div>
          )}

          {/* Badge */}
          {badge && (
            <motion.div variants={fadeUp}>
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-[11px] uppercase tracking-widest border-gold-500/30 text-gold-300 bg-gold-500/10 font-medium"
              >
                {badge}
              </Badge>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight text-shadow-premium"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* Children (e.g. CTA buttons) */}
          {children && (
            <motion.div variants={fadeUp} className="pt-2">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
