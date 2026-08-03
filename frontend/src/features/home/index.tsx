import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import { ArrowRight, Ship, Package, MapPin, Award, Users, Globe, TrendingUp, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Container, Section, Heading, SectionLabel } from '@/components/ui/layout'
import { SEO } from '@/components/common/SEO'
import { formatNumber } from '@/lib/utils'

// ── Animation Variants ─────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

// ── Placeholder data ───────────────────────────────────────
const stats = [
  { label: 'Islands Connected', value: 500, suffix: '+', icon: MapPin },
  { label: 'Vessels Operated', value: 48, suffix: '', icon: Ship },
  { label: 'Tons Cargo/Year', value: 2400000, suffix: '+', icon: Package },
  { label: 'Years Experience', value: 25, suffix: '+', icon: Award },
]

const services = [
  {
    title: 'Maritime Shipping',
    description: 'Regular shipping services across major Indonesian ports with reliable schedules.',
    icon: Ship,
    badge: 'Core Service',
  },
  {
    title: 'Cargo Logistics',
    description: 'End-to-end cargo management from origin to destination with full tracking.',
    icon: Package,
    badge: 'Popular',
  },
  {
    title: 'Route Network',
    description: 'Extensive domestic route network covering Sumatra, Java, Kalimantan, and beyond.',
    icon: Globe,
    badge: 'Nationwide',
  },
  {
    title: 'Fleet Management',
    description: 'Modern, well-maintained fleet ensuring safe and timely cargo delivery.',
    icon: TrendingUp,
    badge: 'Premium',
  },
]

const partners = ['PT Pelindo', 'BUMN Shipping', 'Kementerian Perhubungan', 'Pelayaran Nasional', 'APBMI', 'INSA']

// ── Sub-components ─────────────────────────────────────────
function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  return (
    <span className="font-display font-extrabold text-4xl md:text-5xl text-secondary">
      {formatNumber(value)}{suffix}
    </span>
  )
}

// ── Home Page ──────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="PT. Pelayaran Nasional Radhika Bahari Nusantara — Indonesia's trusted shipping and domestic cargo logistics company based in Surabaya."
        canonical="/"
      />

      {/* ── Hero Section ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-navy-950 pt-[96px] w-full min-h-[480px] lg:min-h-0 lg:aspect-[2.17/1]"
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/hero-ship.png")' }}
          aria-hidden="true"
        />
        {/* Dark overlay for readability (WCAG AA compliant) */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/45 to-navy-950/85" aria-hidden="true" />

        <Container className="relative z-10 text-center py-10 lg:py-0">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-3 lg:gap-5"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="px-3.5 py-1 text-[11px] uppercase tracking-widest border-white/20 text-white bg-white/10 font-medium text-shadow-premium">
                Est. 1999 · Surabaya, Indonesia
              </Badge>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Heading level={1} className="text-white max-w-3xl font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight text-shadow-premium">
                Connecting Indonesia's{' '}
                <span className="text-gold-400">Archipelago</span>{' '}
                Through Maritime Excellence
              </Heading>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm md:text-base text-white/90 max-w-2xl leading-relaxed font-sans px-4 text-shadow-premium"
            >
              PT. Pelayaran Nasional Radhika Bahari Nusantara delivers reliable shipping and cargo logistics services
              across Indonesia's 17,000+ islands, powered by a modern fleet and 25 years of maritime expertise.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <Button asChild size="md" variant="secondary" rounded="lg" className="bg-gold-500 text-white hover:bg-gold-600 border-none shadow-md px-6 font-semibold">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="md" variant="outline" rounded="lg" className="border-white text-white hover:bg-white/10 backdrop-blur-sm px-6 font-semibold">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <ChevronDown className="size-5 text-white/60" />
        </motion.div>
      </section>
      {/* ── Government Procurement & Trust Badge Strip ── */}
      <section className="bg-navy-900 border-b border-navy-800 py-4 text-white text-xs" aria-label="Government trust credentials">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span className="inline-flex items-center gap-1.5 font-bold text-gold-400">
                <span className="size-2 rounded-full bg-emerald-400 inline-block animate-pulse" aria-hidden="true" />
                LKPP e-Katalog Registered Partner
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="text-white/80 font-medium">
                SIUPAL: <strong className="text-white">AL001/761/SP.SIUPAL/IX/2022</strong>
              </span>
              <span className="hidden md:inline text-white/30">|</span>
              <span className="text-white/80 font-medium">
                KBKI Code: <strong className="text-white">64129</strong>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 mx-auto md:mx-0 flex-wrap">
              <Badge variant="ghost" className="bg-gold-500/20 text-gold-300 border border-gold-500/30 text-[10px] uppercase tracking-wider font-semibold">
                Angkutan Laut Perintis (Trayek R-18)
              </Badge>
              <Badge variant="ghost" className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] uppercase tracking-wider font-semibold">
                Kapal Listrik (KM. JATIM CETTAR)
              </Badge>
            </div>
          </div>
        </Container>
      </section>
      {/* ── Statistics Section ── */}
      <section className="bg-muted py-16 border-y border-border" aria-label="Company statistics">
        <Container>
          <AnimatedSection className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ label, value, suffix, icon: Icon }) => (
              <motion.div key={label} variants={fadeUp} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/10">
                    <Icon className="size-6 text-secondary" aria-hidden="true" />
                  </div>
                </div>
                <StatCounter value={value} suffix={suffix} />
                <p className="text-sm text-foreground/80 mt-1 font-medium">{label}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      {/* ── About Preview ── */}
      <Section spacing="xl" aria-label="About RBN Group">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.div variants={fadeUp} className="space-y-4">
                <SectionLabel>About Us</SectionLabel>
                <Heading level={2}>Indonesia's Trusted Maritime Partner</Heading>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 1999, PT. Pelayaran Nasional Radhika Bahari Nusantara has grown from a regional shipping operator
                  to one of Indonesia's most trusted domestic cargo logistics companies. We pride ourselves
                  on connecting communities and commerce across the Indonesian archipelago.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a fleet of 48 vessels and a dedicated team of maritime professionals, we ensure
                  your cargo arrives safely, on time, and at competitive rates.
                </p>
                <div className="flex gap-4 pt-2">
                  <Button asChild variant="primary" size="md">
                    <Link to="/about">Our Story <ArrowRight className="size-4" aria-hidden="true" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="md">
                    <Link to="/fleet">View Fleet</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Image placeholder */}
            <AnimatedSection>
              <motion.div
                variants={fadeIn}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy-950"
              >
                <img
                  src="/gallery/lcu-sailing.jpg"
                  alt="PT. RBN LCU vessel sailing"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-xl bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm p-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-gold-500">
                      <Award className="size-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-navy-800 dark:text-white">ISO 9001:2015 Certified</p>
                      <p className="text-xs text-muted-foreground">Quality Management System</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* ── Services Preview ── */}
      <Section spacing="xl" className="bg-surface-50 dark:bg-navy-900" aria-label="Services overview">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <motion.div variants={fadeUp} className="space-y-3">
              <SectionLabel>What We Offer</SectionLabel>
              <Heading level={2} className="max-w-xl mx-auto">
                Comprehensive Maritime Logistics Solutions
              </Heading>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From port-to-port shipping to integrated logistics management, we provide the full
                spectrum of maritime services tailored to your business needs.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ title, description, icon: Icon, badge }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card className="h-full group cursor-pointer bg-white border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-800 group-hover:bg-gold-50 dark:group-hover:bg-gold-900/20 transition-colors">
                        <Icon className="size-6 text-navy-700 dark:text-gold-400" aria-hidden="true" />
                      </div>
                      <Badge variant="ghost" className="text-xs">{badge}</Badge>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy-800 dark:text-white mb-2">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-sm font-medium text-navy-700 dark:text-gold-400 hover:text-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 rounded"
                      aria-label={`Learn more about ${title}`}
                    >
                      Learn more <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Fleet Preview ── */}
      <Section spacing="xl" aria-label="Fleet overview">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Fleet card grid placeholder */}
            <AnimatedSection className="grid grid-cols-2 gap-4">
              {[
                { type: 'Cargo Vessel', count: 24, iconColor: 'text-primary' },
                { type: 'Container Ship', count: 12, iconColor: 'text-secondary' },
                { type: 'Bulk Carrier', count: 8, iconColor: 'text-primary' },
                { type: 'Tanker', count: 4, iconColor: 'text-secondary' },
              ].map(({ type, count, iconColor }) => (
                <motion.div
                  key={type}
                  variants={fadeUp}
                  className="rounded-xl bg-white border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Ship className={`size-8 mb-3 ${iconColor}`} aria-hidden="true" />
                  <p className="font-display font-bold text-3xl text-primary">{count}</p>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{type}</p>
                </motion.div>
              ))}
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeUp} className="space-y-4">
                <SectionLabel>Our Fleet</SectionLabel>
                <Heading level={2}>48 Vessels Ready to Serve</Heading>
                <p className="text-muted-foreground leading-relaxed">
                  Our modern fleet is maintained to the highest international maritime standards,
                  equipped with advanced navigation systems and managed by certified crews.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                  {['IMO certified vessels', 'GPS real-time tracking', '24/7 cargo monitoring', 'Regular safety inspections'].map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="primary" size="md">
                  <Link to="/fleet">
                    View Our Fleet <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* ── Partners ── */}
      <Section spacing="md" className="bg-surface-50 dark:bg-navy-900" aria-label="Our partners">
        <Container>
          <AnimatedSection className="text-center mb-8">
            <motion.p variants={fadeUp} className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Trusted by Industry Leaders
            </motion.p>
          </AnimatedSection>
          <AnimatedSection className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <motion.div
                key={partner}
                variants={fadeIn}
                className="font-display font-bold text-xl text-navy-300 dark:text-navy-600 hover:text-navy-600 dark:hover:text-navy-400 transition-colors"
              >
                {partner}
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── Latest News Preview ── */}
      <Section spacing="xl" aria-label="Latest news">
        <Container>
          <AnimatedSection className="flex items-end justify-between mb-10">
            <motion.div variants={fadeUp} className="space-y-2">
              <SectionLabel>Latest News</SectionLabel>
              <Heading level={2}>Updates from PT. RBN</Heading>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Button asChild variant="ghost" size="sm">
                <Link to="/news">View All <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </Button>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { category: 'Company', title: 'RBN Group Expands Eastern Indonesia Route Network', date: '2026-07-15', image: '/gallery/lcu-docked.jpg' },
              { category: 'Fleet', title: 'New Cargo Vessel MV Nusantara Sejahtera Joins the Fleet', date: '2026-06-28', image: '/gallery/lcu-sailing.jpg' },
              { category: 'Award', title: 'RBN Group Receives Best Maritime Operator Award 2026', date: '2026-06-10', image: '/gallery/crew-deck.jpg' },
            ].map(({ category, title, date, image }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card className="h-full group bg-white border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
                  <div className="aspect-video bg-navy-900 rounded-t-xl overflow-hidden relative">
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="ghost" className="text-xs">{category}</Badge>
                      <time className="text-xs text-muted-foreground" dateTime={date}>
                        {new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </div>
                    <h3 className="font-display font-semibold text-navy-800 dark:text-white leading-snug group-hover:text-gold-600 transition-colors">
                      {title}
                    </h3>
                    <Link
                      to="/news"
                      className="inline-flex items-center gap-1 text-sm text-navy-600 dark:text-gold-400 hover:text-gold-500 font-medium focus-visible:outline-none focus-visible:ring-2 rounded"
                      aria-label={`Read more about: ${title}`}
                    >
                      Read more <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── CTA Section ── */}
      <section
        className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-20"
        aria-label="Call to action"
      >
        <Container>
          <AnimatedSection className="text-center space-y-6">
            <motion.div variants={fadeUp}>
              <Heading level={2} className="text-white max-w-2xl mx-auto">
                Ready to Ship with Indonesia's Best?
              </Heading>
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto">
              Get a custom logistics quote for your cargo needs. Our team is available 24/7 to
              help you find the most efficient shipping solution.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="xl" variant="secondary" rounded="full">
                <Link to="/contact">
                  <Users className="size-5" aria-hidden="true" />
                  Get a Quote
                </Link>
              </Button>
              <Button asChild size="xl" variant="white" rounded="full">
                <a href="tel:+62318000000">Call Us Now</a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
