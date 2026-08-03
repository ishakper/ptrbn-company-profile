import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import {
  Ship, Package, Anchor, Truck, Users, Building2,
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  FileText, Phone, Globe, Zap, Shield, Award,
} from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/PageHero'
import { Container, Section, Heading, SectionLabel } from '@/components/ui/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  fetchServices,
  fallbackServices,
  type ServiceData,
} from '@/services/services'

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ── Service icons map ───────────────────────────────────────────────────────
const SERVICE_ICONS: Record<string, React.ElementType> = {
  'general-cargo-shipping': Ship,
  'bulk-cargo-transport': Package,
  'oversized-heavy-lift': Anchor,
  'lcu-archipelago-logistics': Truck,
  'passenger-vehicle-ferry': Users,
  'port-agency-ship-chandlering': Building2,
}

// ── Industries served ───────────────────────────────────────────────────────
const INDUSTRIES = [
  { label: 'Government & Regency', icon: Building2, color: 'text-blue-600 dark:text-blue-400' },
  { label: 'BUMN & State Enterprises', icon: Award, color: 'text-emerald-600 dark:text-emerald-400' },
  { label: 'Oil & Gas', icon: Zap, color: 'text-amber-600 dark:text-amber-400' },
  { label: 'Mining Companies', icon: Globe, color: 'text-orange-600 dark:text-orange-400' },
  { label: 'Logistics & Distribution', icon: Truck, color: 'text-navy-600 dark:text-gold-400' },
  { label: 'Infrastructure & Construction', icon: Package, color: 'text-purple-600 dark:text-purple-400' },
  { label: 'FMCG & Retail', icon: Ship, color: 'text-rose-600 dark:text-rose-400' },
  { label: 'International Partners', icon: Globe, color: 'text-teal-600 dark:text-teal-400' },
]

// ── Why Choose RBN ──────────────────────────────────────────────────────────
const ADVANTAGES = [
  { icon: Shield, title: 'ISM Code Certified', desc: 'All vessels operated under international ISM safety management standards — zero-harm commitment.' },
  { icon: Globe, title: '500+ Islands Covered', desc: 'Largest domestic archipelagic route network connecting Sumatra, Java, Kalimantan, Sulawesi, Maluku, and Papua.' },
  { icon: Award, title: 'ISO 9001:2015 Quality', desc: 'Internationally certified quality management system ensuring consistent, reliable service delivery.' },
  { icon: Zap, title: '24/7 Cargo Monitoring', desc: 'Real-time GPS vessel tracking and dedicated logistics operations center available around the clock.' },
]

// ── FAQ data ────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What types of cargo can RBN transport?',
    a: 'We transport general cargo, bulk commodities (coal, cement, minerals), oversized/heavy-lift items, liquid cargo, vehicles, and passenger/vehicle combinations. Our diverse fleet allows us to handle virtually any cargo type.',
  },
  {
    q: 'How do I get a shipping quote?',
    a: 'Contact our chartering desk via the inquiry form on this website, email us at ptrbn5758@gmail.com, or call us directly at +62 31 8000 0000. We typically respond within 4 business hours with a competitive rate.',
  },
  {
    q: 'Does RBN operate in Eastern Indonesia (Maluku, Papua)?',
    a: 'Yes. Our LCU fleet is specifically designed for outer island and Eastern Indonesia logistics, including areas without conventional port infrastructure. We operate regular feeder routes to Maluku and Papua.',
  },
  {
    q: 'Can I track my cargo during transit?',
    a: 'Yes. All vessels are equipped with AIS (Automatic Identification System) and GPS tracking. Our logistics team can provide real-time position updates upon request during transit.',
  },
  {
    q: 'Is RBN available for project cargo and heavy-lift contracts?',
    a: 'Yes. We specialize in project logistics for mining equipment, industrial machinery, wind turbines, and construction materials. Our geared vessels handle lifts up to 25 tons without requiring port cranes.',
  },
  {
    q: 'What documents are required for cargo shipment?',
    a: 'Standard requirements include a Bill of Lading (B/L), packing list, commercial invoice, and customs declaration (PEB/PIB). Our documentation team will guide you through the complete process.',
  },
]

// ── Sub-components ──────────────────────────────────────────────────────────
function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-display font-semibold text-navy-800 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
      >
        <span className="text-sm sm:text-base">{q}</span>
        {open ? <ChevronUp className="size-5 shrink-0 text-gold-500" aria-hidden="true" /> : <ChevronDown className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />}
      </button>
      <motion.div
        id={`faq-answer-${index}`}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
        role="region"
        aria-label={q}
      >
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  )
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [services, setServices] = useState<ServiceData[]>(fallbackServices)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices().then((data) => {
      setServices(data.length > 0 ? data : fallbackServices)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <SEO
        title="Our Services — Maritime Shipping & Cargo Logistics"
        description="Comprehensive maritime shipping services by PT. Pelayaran Nasional Radhika Bahari Nusantara — general cargo, bulk transport, heavy-lift, LCU archipelago logistics, and port agency across Indonesia."
        canonical="/services"
        keywords="maritime shipping Indonesia, cargo logistics Surabaya, inter-island shipping, bulk carrier Indonesia, LCU logistics, heavy lift shipping, port agency Surabaya"
        image="https://rbn-group.com/gallery/lcu-sailing.jpg"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Our Services', url: '/services' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        badge="Maritime Services"
        title="Comprehensive Shipping & Logistics Solutions"
        description="From archipelago cargo transport to heavy-lift project logistics — PT. RBN delivers reliable, certified maritime services across Indonesia's 17,000+ islands."
        backgroundImage="/gallery/lcu-sailing.jpg"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        ariaLabel="Services page hero banner"
      >
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button asChild size="md" variant="secondary" rounded="lg" className="bg-gold-500 text-white hover:bg-gold-600 border-none">
            <Link to="/contact">Request a Quote <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Button>
          <Button asChild size="md" variant="outline" rounded="lg" className="border-white text-white hover:bg-white/10">
            <a href="tel:+62318000000">Call Our Team <Phone className="size-4" aria-hidden="true" /></a>
          </Button>
        </div>
      </PageHero>

      {/* ── Service Cards ── */}
      <Section spacing="xl" aria-label="Service categories">
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>What We Offer</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Six Core Maritime Services</Heading></motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground">
              Each service is backed by our certified fleet, experienced crew, and ISO 9001:2015 quality management — tailored to your industry requirements.
            </motion.p>
          </AnimatedSection>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-72 rounded-2xl" />
              ))}
            </div>
          ) : (
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => {
                const Icon = SERVICE_ICONS[svc.slug] ?? Ship
                return (
                  <motion.div key={svc.id} variants={fadeUp}>
                    <Card className="h-full group bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-7 flex flex-col h-full space-y-4">
                        {/* Icon + Category */}
                        <div className="flex items-start justify-between">
                          <div className="flex size-13 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-700 group-hover:bg-gold-50 dark:group-hover:bg-gold-900/20 transition-colors">
                            <Icon className="size-6 text-navy-700 dark:text-gold-400" aria-hidden="true" />
                          </div>
                          {svc.featured && (
                            <Badge variant="ghost" className="text-[10px] uppercase tracking-wider bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-400 border-0">
                              Featured
                            </Badge>
                          )}
                        </div>

                        {/* Title & Description */}
                        <div className="flex-1 space-y-2">
                          <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white leading-snug group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                            {svc.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {svc.short_description}
                          </p>
                        </div>

                        {/* Advantages */}
                        {svc.advantages.length > 0 && (
                          <ul className="space-y-1.5" role="list">
                            {svc.advantages.slice(0, 3).map((adv) => (
                              <li key={adv} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle2 className="size-3.5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                                {adv}
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* CTA */}
                        <div className="pt-2 border-t border-border">
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-2 rounded"
                            aria-label={`Inquire about ${svc.title}`}
                          >
                            Get a Quote <ArrowRight className="size-3.5" aria-hidden="true" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatedSection>
          )}
        </Container>
      </Section>

      {/* ── Service Workflow ── */}
      <Section spacing="xl" className="bg-surface-50 dark:bg-navy-950 border-y border-border" aria-label="Service workflow">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>How It Works</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Simple 4-Step Process</Heading></motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground">
              From first contact to final delivery — our streamlined logistics workflow ensures transparent, stress-free cargo handling.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="absolute hidden lg:block top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 dark:from-gold-800 dark:via-gold-600 dark:to-gold-800" aria-hidden="true" />

            {[
              { step: 1, title: 'Inquiry & Quote', desc: 'Submit your cargo details via form, phone, or WhatsApp. Receive a competitive quote within 4 hours.' },
              { step: 2, title: 'Documentation', desc: 'Our team prepares Bill of Lading, cargo manifest, and all required customs declarations.' },
              { step: 3, title: 'Loading & Departure', desc: 'Cargo received at origin port, inspected, loaded, and secured by certified crew.' },
              { step: 4, title: 'Delivery & Clearance', desc: 'Vessel arrives at destination. Cargo discharged and released to consignee with full documentation.' },
            ].map(({ step, title, desc }) => (
              <motion.div key={step} variants={fadeUp} className="relative flex flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-navy-800 text-white font-display font-extrabold text-xl shadow-md z-10 mb-4">
                  {step}
                </div>
                <h3 className="font-display font-bold text-base text-navy-800 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── Industries Served ── */}
      <Section spacing="xl" aria-label="Industries we serve">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Industry Expertise</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Industries We Serve</Heading></motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map(({ label, icon: Icon, color }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-surface-100 dark:bg-navy-700 mb-3">
                  <Icon className={`size-5 ${color}`} aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold text-navy-800 dark:text-surface-100 leading-snug">{label}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── Why Choose Us ── */}
      <Section spacing="xl" className="bg-surface-50 dark:bg-navy-950 border-y border-border" aria-label="Why choose RBN">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image column */}
            <AnimatedSection>
              <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/gallery/drydock-inspection.jpg"
                  alt="PT. RBN vessel drydock safety inspection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm p-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-gold-500">
                      <Shield className="size-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-navy-800 dark:text-white">ISM Code Certified Fleet</p>
                      <p className="text-xs text-muted-foreground">International Safety Management Standard</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Text column */}
            <AnimatedSection>
              <motion.div variants={fadeUp} className="space-y-2">
                <SectionLabel>Why Choose RBN</SectionLabel>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-3 mb-6">
                <Heading level={2}>25 Years of Maritime Excellence</Heading>
              </motion.div>

              <div className="space-y-5">
                {ADVANTAGES.map(({ icon: Icon, title, desc }) => (
                  <motion.div key={title} variants={fadeUp} className="flex gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-800 shrink-0">
                      <Icon className="size-5 text-navy-700 dark:text-gold-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800 dark:text-white text-sm">{title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="pt-6 flex gap-3 flex-wrap">
                <Button asChild variant="primary" size="md">
                  <Link to="/contact">Request a Quote <ArrowRight className="size-4" aria-hidden="true" /></Link>
                </Button>
                <Button asChild variant="outline" size="md">
                  <Link to="/fleet">View Our Fleet</Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* ── FAQ ── */}
      <Section spacing="xl" aria-label="Frequently asked questions">
        <Container size="md">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>FAQ</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Frequently Asked Questions</Heading></motion.div>
          </AnimatedSection>

          <Card className="bg-white dark:bg-navy-800 border border-border shadow-card">
            <CardContent className="p-8 divide-y-0">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-20" aria-label="Contact call to action">
        <Container>
          <AnimatedSection className="text-center space-y-6">
            <motion.div variants={fadeUp}>
              <Heading level={2} className="text-white max-w-2xl mx-auto">
                Ready to Move Your Cargo?
              </Heading>
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto">
              Contact our chartering desk for a custom shipping quote. Our logistics team responds within 4 business hours.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="xl" variant="secondary" rounded="full">
                <Link to="/contact">
                  <FileText className="size-5" aria-hidden="true" />
                  Get a Quote Now
                </Link>
              </Button>
              <Button asChild size="xl" variant="white" rounded="full">
                <a href="tel:+62318000000">
                  <Phone className="size-5" aria-hidden="true" />
                  Call Us: +62 31 8000 0000
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
