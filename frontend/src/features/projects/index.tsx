import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import { Ship, Package, ArrowRight, Phone, MapPin, Calendar, Weight, CheckCircle2, Zap } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/PageHero'
import { Container, Section, Heading, SectionLabel } from '@/components/ui/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ── Project Interface ───────────────────────────────────────────────────────
export interface ProjectItem {
  id: string
  client: string
  title: string
  sector: string
  sectorColor: string
  route: string
  cargoType: string
  volume: string
  duration: string
  vesselClass: string
  image: string
  results: string[]
  summary: string
  gallery?: { url: string; caption: string }[]
}

// ── Project data ────────────────────────────────────────────────────────────
const PROJECTS: ProjectItem[] = [
  {
    id: 'p-green-1',
    client: 'East Java Provincial Government (Pemerintah Provinsi Jawa Timur)',
    title: 'KM. JATIM CETTAR — Electric Passenger Vessel Operation',
    sector: 'Green Maritime Innovation',
    sectorColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
    route: 'Marina Boom Banyuwangi Harbor & Eco-Tourism Transit Zone',
    cargoType: 'Electric Maritime Passenger Transportation & Green Tourism',
    volume: 'Continuous Daily Electric Harbor Connectivity',
    duration: 'Multi-Year Government Maritime Operation',
    vesselClass: 'KM. JATIM CETTAR (Solar & Electric Powered Passenger Vessel)',
    image: '/gallery/km-jatim-cettar-sailing.jpg',
    results: [
      'Zero-emission electric propulsion operating at Marina Boom Banyuwangi',
      'Solar-assisted clean energy auxiliary power generation',
      'Official collaboration with East Java Provincial Government',
      'Quiet, eco-friendly public & tourism maritime transportation',
    ],
    summary: 'Operation of KM. JATIM CETTAR, a flagship electric passenger vessel providing eco-friendly, zero-emission maritime transportation at Marina Boom Banyuwangi, supporting East Java green maritime connectivity.',
    gallery: [
      { url: '/gallery/km-jatim-cettar-sailing.jpg', caption: 'KM. JATIM CETTAR (Kapal Listrik Kuning) di Marina Boom Banyuwangi' },
      { url: '/gallery/km-jatim-cettar-activity.png', caption: 'Dokumentasi kegiatan edukasi & penumpang di dalam kabin KM. JATIM CETTAR' },
      { url: '/gallery/km-jatim-cettar-crew.jpg', caption: 'Dokumentasi kru & bendera Merah Putih di atas kapal' },
      { url: '/gallery/km-jatim-cettar-marina.jpg', caption: 'Kawasan transit kapal listrik Marina Boom Banyuwangi' },
    ],
  },
  {
    id: 'p0',
    client: 'Ministry of Transportation / Provincial Health Office',
    title: 'Pelayanan Kesehatan Bergerak (Yankes Bergerak) & Pioneer Logistics',
    sector: 'Government',
    sectorColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    route: 'Trayek R-18: Kalianget → Kangean → Sapeken → Celukan Bawang → Labuhan Lombok → Badas → Bima → Waikelo',
    cargoType: 'Medical Logistics, Public Freight & Mobile Health Support',
    volume: '30 Voyages / Year (Contract Value: Rp805.100.000)',
    duration: 'Government Contract (12 Months)',
    vesselClass: 'KM Gandha Nusantara 01 & 02 (Rumah Sakit Apung / Pioneer LCU)',
    image: '/gallery/gandha-nusantara-01-redcross.jpg',
    results: ['Medical services delivered to 8 remote island ports', '100% adherence to 30 voyage annual schedule', 'LKPP e-Katalog verified procurement'],
    summary: 'Operation of KM Gandha Nusantara 01 & 02 under Trayek R-18 providing essential passenger transport, island logistics, and mobile medical team deployment (Pelayanan Kesehatan Bergerak / Rumah Sakit Apung) across East Java, NTB, and NTT.',
    gallery: [
      { url: '/gallery/gandha-nusantara-01-redcross.jpg', caption: 'KM. Gandha Nusantara 01 (Rumah Sakit Apung Berlayar di Laut)' },
      { url: '/gallery/gandha-nusantara-02-redcross.jpg', caption: 'KM. Gandha Nusantara 02 (Rumah Sakit Apung Sandar di Dermaga Pulau)' },
      { url: '/gallery/yankes-bergerak-banner.jpg', caption: 'Dokumentasi Tim Yankes Bergerak Dinas Kesehatan Jatim di Kepulauan Sapudi' },
      { url: '/gallery/floating-hospital-clinic.jpg', caption: 'Fasilitas Ruang Klinik & Peralatan Medis Dalam Kapal' },
      { url: '/gallery/floating-hospital-inspection.jpg', caption: 'Tim Dokter & Tenaga Kesehatan Melakukan Pemeriksaan Medis' },
    ],
  },
  {
    id: 'p1',
    client: 'Major Mining Operator',
    title: 'Kalimantan Coal Bulk Logistics',
    sector: 'Mining',
    sectorColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    route: 'Balikpapan → Tanjung Perak, Surabaya',
    cargoType: 'Thermal Coal (Bulk)',
    volume: '180,000 MT per month',
    duration: 'Long-term contract (36 months)',
    vesselClass: 'Bulk Carrier Fleet',
    image: '/gallery/drydock-inspection.jpg',
    results: ['99.2% on-time delivery rate', 'Zero reportable incidents', 'Cost reduction: 18% vs. previous operator'],
    summary: 'Managed bulk coal transportation from Kalimantan mining terminals to Java power plant clients using 4 dedicated bulk carriers with fixed loading schedules.',
  },
  {
    id: 'p2',
    client: 'National Oil & Gas Company',
    title: 'Eastern Indonesia Fuel Distribution',
    sector: 'Oil & Gas',
    sectorColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    route: 'Balikpapan → Maluku → Papua',
    cargoType: 'Refined Petroleum Products',
    volume: '12,000 KL per shipment',
    duration: 'Annual contract (renewable)',
    vesselClass: 'Tanker Fleet (MT Radhika Fuel I)',
    image: '/gallery/lcu-docked.jpg',
    results: ['Supply to 8 remote islands', '99.8% product integrity on arrival', 'Emergency response within 24 hours'],
    summary: 'Regular petroleum product supply chain to Eastern Indonesia remote islands, ensuring energy security in Maluku and West Papua provinces.',
  },
  {
    id: 'p3',
    client: 'Government Infrastructure Agency',
    title: 'Outer Island Construction Materials',
    sector: 'Government',
    sectorColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    route: 'Surabaya → NTT → Papua (Beach Landing)',
    cargoType: 'Cement, Steel, Heavy Machinery',
    volume: '50,000 MT over 18 months',
    duration: '18-month government contract',
    vesselClass: 'LCU Fleet (Bow Ramp)',
    image: '/gallery/crew-deck.jpg',
    results: ['Served 12 islands without port infrastructure', 'Zero cargo loss', 'Project completed 2 weeks ahead of schedule'],
    summary: 'Delivered construction materials for government infrastructure projects on remote outer islands using LCU bow-ramp landing operations.',
  },
  {
    id: 'p4',
    client: 'International Mining Corporation',
    title: 'Papua Mining Equipment Mobilization',
    sector: 'Mining',
    sectorColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    route: 'Surabaya → Sorong → Mining Site, Papua',
    cargoType: 'Heavy Equipment (Excavators, Dump Trucks)',
    volume: '24 OOG units, 4,800 MT total',
    duration: '4-month project cargo contract',
    vesselClass: 'General Cargo Carrier (Geared)',
    image: '/gallery/drydock-inspection.jpg',
    results: ['All 24 units delivered intact', 'Custom stowage engineering for OOG units', 'Zero insurance claims'],
    summary: 'Specialized project cargo mobilization of heavy mining equipment from Surabaya to Papua, requiring engineering stowage plans and crane lifts up to 25 tons.',
  },
  {
    id: 'p5',
    client: 'Coal Mining & Power Company',
    title: 'South Sumatra Coal Export Logistics',
    sector: 'Mining',
    sectorColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    route: 'Palembang → Tanjung Priok, Jakarta',
    cargoType: 'Steam Coal (Bulk)',
    volume: '90,000 MT per month',
    duration: '24-month contract',
    vesselClass: 'Bulk Carrier Fleet',
    image: '/gallery/lcu-sailing.jpg',
    results: ['Consistent 95%+ vessel utilization', 'Integrated port-to-plant logistics', 'Real-time cargo tracking for client'],
    summary: 'High-volume steam coal transportation from South Sumatra coal loading terminal to Java power distribution facilities via bulk carrier fleet.',
  },
]

const SECTOR_FILTERS = ['All', 'Green Maritime Innovation', 'Government', 'Mining', 'Oil & Gas', 'Logistics']

// ── Achievement stats ────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  { value: '2M+', label: 'Metric Tons Handled', icon: Weight },
  { value: '98.6%', label: 'Avg. On-Time Delivery', icon: CheckCircle2 },
  { value: '25+', label: 'Years of Operations', icon: Calendar },
  { value: '6', label: 'Industry Sectors Served', icon: Package },
]

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState<string>('All')

  const filtered = selectedSector === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.sector === selectedSector)

  return (
    <>
      <SEO
        title="Our Projects & Portfolio — KM. JATIM CETTAR & Maritime Logistics"
        description="Explore PT. Pelayaran Nasional Radhika Bahari Nusantara project portfolio including KM. JATIM CETTAR electric vessel at Marina Boom Banyuwangi, Trayek R-18 pioneer shipping, coal bulk logistics, and government maritime contracts."
        canonical="/projects"
        keywords="KM JATIM CETTAR, electric vessel Banyuwangi, Marina Boom Banyuwangi, green maritime innovation, pioneer shipping Indonesia, project cargo"
        image="https://rbn-group.com/gallery/km-jatim-cettar-sailing.jpg"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        badge="Our Portfolio"
        title="Real Projects. Proven Maritime Track Record."
        description="From green electric vessel operation KM. JATIM CETTAR at Marina Boom Banyuwangi to Trayek R-18 pioneer shipping and bulk logistics — delivering enterprise maritime excellence."
        backgroundImage="/gallery/km-jatim-cettar-sailing.jpg"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        ariaLabel="Projects page hero banner"
      />

      {/* ── Achievement Stats ── */}
      <section className="bg-navy-900 py-10 border-b border-navy-800 text-white" aria-label="Project achievements">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {ACHIEVEMENTS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="size-5 text-gold-400 mb-1" aria-hidden="true" />
                <p className="font-display font-extrabold text-3xl text-gold-400">{value}</p>
                <p className="text-sm text-white/70 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Projects Grid ── */}
      <Section spacing="xl" aria-label="Project case studies">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Case Studies & Portfolio</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Selected Maritime Projects</Heading></motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground">
              Official operational portfolio highlighting green maritime innovation, pioneer shipping contracts, and heavy industrial logistics across Indonesia.
            </motion.p>
          </AnimatedSection>

          {/* Sector filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter projects by sector">
            {SECTOR_FILTERS.map((sector) => (
              <button
                key={sector}
                role="tab"
                aria-selected={selectedSector === sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  selectedSector === sector
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white dark:bg-navy-800 border border-border text-muted-foreground hover:text-navy-800 dark:hover:text-white hover:border-navy-300'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <Card className="h-full group bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Project image */}
                    <div className="aspect-[16/9] bg-navy-950 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                        loading="lazy"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" aria-hidden="true" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge variant="ghost" className={`text-[11px] font-semibold border-0 ${project.sectorColor}`}>
                          {project.sector}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      {/* Title & Client */}
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">{project.client}</p>
                        <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white mt-0.5 leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>

                      {/* Photo Gallery if available */}
                      {project.gallery && project.gallery.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-border">
                          <p className="text-xs font-bold text-navy-800 dark:text-gold-400 flex items-center gap-1">
                            <Zap className="size-3.5 text-gold-500" aria-hidden="true" /> Galeri Operasional KM. JATIM CETTAR
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {project.gallery.map((g, gIdx) => (
                              <div key={gIdx} className="group/g relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                                <img
                                  src={g.url}
                                  alt={g.caption}
                                  className="w-full h-full object-cover group-hover/g:scale-110 transition-transform duration-300"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover/g:opacity-100 transition-opacity p-2 flex items-end">
                                  <p className="text-[9px] text-white font-medium line-clamp-2">{g.caption}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key details */}
                      <div className="space-y-2 text-xs text-muted-foreground pt-2 border-t border-border">
                        <div className="flex items-start gap-2">
                          <MapPin className="size-3.5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{project.route}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Ship className="size-3.5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{project.vesselClass}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Package className="size-3.5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{project.cargoType} — {project.volume}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="size-3.5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-1.5 pt-2">
                        {project.results.map((r) => (
                          <div key={r} className="flex items-start gap-2 text-xs text-navy-700 dark:text-surface-200">
                            <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── Testimonials ── */}
      <Section spacing="xl" className="bg-surface-50 dark:bg-navy-950 border-y border-border" aria-label="Client testimonials">
        <Container size="md">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Client Feedback</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>What Our Partners Say</Heading></motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: 'KM. JATIM CETTAR electric vessel operation at Marina Boom Banyuwangi provides clean, quiet, and reliable eco-maritime transport. PT. RBN\'s technical expertise in operating solar-electric vessels is exemplary.',
                author: 'Department of Transportation',
                company: 'Provincial Government of East Java',
                sector: 'Green Maritime',
              },
              {
                quote: 'For government infrastructure logistics to outer islands, RBN\'s pioneer fleet capability is unmatched in Eastern Indonesia. They successfully delivered to 8 remote island ports under Trayek R-18.',
                author: 'Procurement Director',
                company: 'Government Infrastructure Agency',
                sector: 'Government',
              },
            ].map(({ quote, author, company, sector }) => (
              <motion.div key={company} variants={fadeUp}>
                <Card className="h-full bg-white dark:bg-navy-800 border border-border shadow-card p-8">
                  <CardContent className="p-0 space-y-4">
                    <div className="text-4xl text-gold-400 font-serif leading-none">"</div>
                    <p className="text-muted-foreground leading-relaxed italic text-sm">{quote}</p>
                    <div className="flex items-center gap-3 pt-2 border-t border-border">
                      <div className="flex size-10 items-center justify-center rounded-full bg-navy-800 text-gold-400 font-bold font-display text-sm">
                        {author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-navy-800 dark:text-white">{author}</p>
                        <p className="text-xs text-muted-foreground">{company}</p>
                      </div>
                      <Badge variant="ghost" className="ml-auto text-[10px] bg-surface-100 text-muted-foreground dark:bg-navy-700 border-0">{sector}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-20 text-white" aria-label="Project inquiry CTA">
        <Container>
          <AnimatedSection className="text-center space-y-6">
            <motion.div variants={fadeUp}>
              <Heading level={2} className="text-white max-w-2xl mx-auto">
                Discuss Your Maritime & Green Logistics Project
              </Heading>
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto">
              Whether it's electric maritime vessel operations, pioneer shipping contracts, bulk coal, or outer island logistics — our team has the experience and fleet to deliver.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="xl" variant="secondary" rounded="full">
                <Link to="/contact">
                  <ArrowRight className="size-5" aria-hidden="true" />
                  Start a Project Discussion
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
