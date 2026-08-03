import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import { Search, Ship, Filter, Phone, CheckCircle2, X } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/PageHero'
import { Container, Section, Heading, SectionLabel } from '@/components/ui/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { EmptyState } from '@/components/ui/feedback'
import {
  fetchVessels,
  fetchFleetCategories,
  fallbackVessels,
  fallbackFleetCategories,
  type VesselData,
  type FleetCategoryData,
} from '@/services/vessels'

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ── Status badge config ─────────────────────────────────────────────────────
const STATUS_MAP: Record<string, { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0' },
  maintenance: { label: 'Maintenance', className: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-0' },
  drydock: { label: 'Drydock', className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-0' },
  inactive: { label: 'Inactive', className: 'bg-surface-100 text-muted-foreground dark:bg-navy-700 border-0' },
}

// ── Fleet statistics ─────────────────────────────────────────────────────────
const FLEET_STATS = [
  { value: '48', label: 'Active Vessels' },
  { value: '3,200', label: 'Max DWT (Single Vessel)' },
  { value: '24/7', label: 'Cargo Monitoring' },
  { value: 'BKI', label: 'Classification' },
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

function VesselCard({ vessel }: { vessel: VesselData }) {
  const status = STATUS_MAP[vessel.status] ?? STATUS_MAP.active
  const VESSEL_IMAGES: Record<string, string> = {
    'km-jatim-cettar': '/gallery/km-jatim-cettar-sailing.jpg',
    'km-gandha-nusantara-01': '/gallery/gandha-nusantara-01-redcross.jpg',
    'gandha-nusantara-02': '/gallery/gandha-nusantara-02-redcross.jpg',
    'mv-radhika-pioneer': '/gallery/lcu-docked.jpg',
    'mv-bahari-express': '/gallery/lcu-sailing.jpg',
    'mv-kalimantan-bulk-i': '/gallery/drydock-inspection.jpg',
    'mt-radhika-fuel-i': '/gallery/lcu-docked.jpg',
    'gandha-nusantara-05': '/gallery/lcu-sailing.jpg',
  }
  const imgSrc = VESSEL_IMAGES[vessel.slug] ?? '/gallery/lcu-sailing.jpg'

  return (
    <motion.div variants={fadeUp}>
      <Card className="h-full group bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {/* Vessel image */}
        <div className="aspect-[16/9] bg-navy-950 overflow-hidden relative">
          <img
            src={imgSrc}
            alt={`${vessel.name} vessel`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
            loading="lazy"
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" aria-hidden="true" />
          {/* IMO badge */}
          <div className="absolute bottom-3 left-3 bg-navy-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-[10px] font-mono font-bold border border-white/10">
            IMO {vessel.imo_number}
          </div>
          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <Badge variant="ghost" className={status.className}>{status.label}</Badge>
          </div>
        </div>

        <CardContent className="p-5 space-y-3">
          {/* Type & Name */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
              {vessel.category?.name ?? 'Vessel'}
            </span>
            <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white mt-0.5 leading-tight">
              {vessel.name}
            </h3>
          </div>

          {/* Key specs grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-surface-50 dark:bg-navy-900 rounded-lg p-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Capacity</p>
              <p className="font-display font-bold text-sm text-navy-800 dark:text-white mt-0.5">{vessel.capacity}</p>
            </div>
            <div className="bg-surface-50 dark:bg-navy-900 rounded-lg p-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Speed</p>
              <p className="font-display font-bold text-sm text-navy-800 dark:text-white mt-0.5">{vessel.speed} Knots</p>
            </div>
            {vessel.specification && (
              <>
                <div className="bg-surface-50 dark:bg-navy-900 rounded-lg p-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">LOA</p>
                  <p className="font-display font-bold text-sm text-navy-800 dark:text-white mt-0.5">{vessel.specification.length_overall}m</p>
                </div>
                <div className="bg-surface-50 dark:bg-navy-900 rounded-lg p-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Class</p>
                  <p className="font-display font-bold text-sm text-navy-800 dark:text-white mt-0.5 truncate">{vessel.specification.classification}</p>
                </div>
              </>
            )}
          </div>

          {/* Flag & Call Sign */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1 border-t border-border">
            <span>🇮🇩 {vessel.flag}</span>
            {vessel.call_sign && <span className="font-mono">Call Sign: {vessel.call_sign}</span>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function FleetPage() {
  const [vessels, setVessels] = useState<VesselData[]>(fallbackVessels)
  const [categories, setCategories] = useState<FleetCategoryData[]>(fallbackFleetCategories)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    Promise.all([fetchVessels(), fetchFleetCategories()]).then(([vesselRes, catRes]) => {
      setVessels(vesselRes.data.length > 0 ? vesselRes.data : fallbackVessels)
      setCategories(catRes.length > 0 ? catRes : fallbackFleetCategories)
      setLoading(false)
    })
  }, [])

  // Client-side filtering (API-backed in production)
  const filtered = vessels.filter((v) => {
    const matchesSearch = search === '' || v.name.toLowerCase().includes(search.toLowerCase()) || v.imo_number.includes(search)
    const matchesCat = selectedCategory === 'all' || v.category?.slug === selectedCategory
    return matchesSearch && matchesCat
  })

  return (
    <>
      <SEO
        title="Our Fleet — 48 Vessels | Maritime Shipping Fleet"
        description="Explore PT. Pelayaran Nasional Radhika Bahari Nusantara's modern fleet of 48 vessels — LCU, general cargo carriers, bulk carriers, and tankers serving Indonesia's archipelago."
        canonical="/fleet"
        keywords="PT RBN fleet, Indonesia shipping vessels, LCU vessel, cargo carrier Indonesia, bulk carrier Surabaya, maritime fleet Indonesia"
        image="https://rbn-group.com/gallery/lcu-sailing.jpg"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Our Fleet', url: '/fleet' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        badge="Maritime Fleet"
        title="48 Vessels — Built for Indonesia's Archipelago"
        description="A modern, well-maintained fleet of LCUs, cargo carriers, bulk carriers, and tankers — all BKI classified and IMO certified for safe archipelagic operations."
        backgroundImage="/gallery/lcu-sailing.jpg"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Fleet' }]}
        ariaLabel="Fleet page hero banner"
      />

      {/* ── Fleet Statistics ── */}
      <section className="bg-navy-800 py-10 border-b border-navy-700" aria-label="Fleet statistics">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {FLEET_STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-extrabold text-3xl text-gold-400">{value}</p>
                <p className="text-sm text-white/70 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Search & Filter ── */}
      <Section spacing="xl" aria-label="Fleet catalog">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Vessel Catalog</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Browse Our Fleet</Heading></motion.div>
          </AnimatedSection>

          {/* Search & filter bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-3xl mx-auto">
            {/* Search input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search by vessel name or IMO number…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search vessels"
                className="w-full h-11 pl-10 pr-10 text-sm rounded-lg bg-white dark:bg-navy-800 border border-surface-200 dark:border-navy-700 text-navy-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy-800 dark:hover:text-white"
                >
                  <X className="size-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2">
              <Filter className="size-4 text-muted-foreground shrink-0" aria-hidden="true" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter by vessel category"
                className="h-11 px-3 text-sm rounded-lg bg-white dark:bg-navy-800 border border-surface-200 dark:border-navy-700 text-navy-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Vessel count */}
          <p className="text-sm text-muted-foreground mb-6 text-center" aria-live="polite">
            Showing <strong className="text-navy-800 dark:text-white">{filtered.length}</strong> of {vessels.length} vessels
          </p>

          {/* Vessel grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-96 rounded-2xl" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              title="No vessels found"
              description="Try adjusting your search query or category filter."
              icon={<Ship className="size-10 text-muted-foreground" aria-hidden="true" />}
              action={
                <Button variant="outline" size="md" onClick={() => { setSearch(''); setSelectedCategory('all') }}>
                  Clear filters
                </Button>
              }
            />
          ) : (
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((vessel) => (
                <VesselCard key={vessel.id} vessel={vessel} />
              ))}
            </AnimatedSection>
          )}
        </Container>
      </Section>

      {/* ── Fleet Categories ── */}
      <Section spacing="xl" className="bg-surface-50 dark:bg-navy-950 border-y border-border" aria-label="Fleet categories">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Vessel Types</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Fleet Classification</Heading></motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <motion.div key={cat.id} variants={fadeUp}>
                <Card className="bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
                  <CardContent className="p-7 flex gap-5 items-start">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-700 shrink-0">
                      <Ship className="size-6 text-navy-700 dark:text-gold-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{cat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── Compliance & Certification ── */}
      <Section spacing="xl" aria-label="Fleet compliance and standards">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Safety & Compliance</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>International Standards</Heading></motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { code: 'BKI', label: 'Bureau Klasifikasi Indonesia', desc: 'All vessels classified' },
              { code: 'ISM', label: 'ISM Code Certified', desc: 'Safety management' },
              { code: 'SOLAS', label: 'SOLAS Compliant', desc: 'Life safety systems' },
              { code: 'ISO', label: 'ISO 9001:2015', desc: 'Quality management' },
            ].map(({ code, label, desc }) => (
              <motion.div
                key={code}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-border bg-white dark:bg-navy-800 hover:shadow-card transition-shadow"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-navy-800 text-white font-display font-extrabold text-sm mb-3">
                  {code}
                </div>
                <p className="font-semibold text-xs text-navy-800 dark:text-white">{label}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-20" aria-label="Fleet inquiry CTA">
        <Container>
          <AnimatedSection className="text-center space-y-6">
            <motion.div variants={fadeUp}>
              <Heading level={2} className="text-white max-w-2xl mx-auto">
                Need a Specific Vessel for Your Cargo?
              </Heading>
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto">
              Contact our chartering desk for vessel availability, capacity specifications, and competitive charter rates.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="xl" variant="secondary" rounded="full">
                <Link to="/contact">
                  <CheckCircle2 className="size-5" aria-hidden="true" />
                  Charter a Vessel
                </Link>
              </Button>
              <Button asChild size="xl" variant="white" rounded="full">
                <a href="tel:+62318000000">
                  <Phone className="size-5" aria-hidden="true" />
                  Call: +62 31 8000 0000
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
