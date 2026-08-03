import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import {
  MapPin, Ship, Clock, Calendar, Anchor, Shield,
  ArrowRight, Phone, Info, Building2, Ruler,
  Check, Compass,
} from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/PageHero'
import { Container, Section, Heading, SectionLabel } from '@/components/ui/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

// ── Task 4 Data: Enterprise Table Rows ─────────────────────────────────────
const RUTE_LEGS = [
  { no: 1, from: 'Kalianget', to: 'Kangean', distance: '100 Nm', duration: '±10 Jam', status: 'Aktif' },
  { no: 2, from: 'Kangean', to: 'Sapeken', distance: '45 Nm', duration: '±4,5 Jam', status: 'Aktif' },
  { no: 3, from: 'Sapeken', to: 'Celukan Bawang', distance: '106 Nm', duration: '±10,5 Jam', status: 'Aktif' },
  { no: 4, from: 'Celukan Bawang', to: 'Labuhan Lombok', distance: '140 Nm', duration: '±14 Jam', status: 'Aktif' },
  { no: 5, from: 'Labuhan Lombok', to: 'Badas', distance: '47 Nm', duration: '±5 Jam', status: 'Aktif' },
  { no: 6, from: 'Badas', to: 'Bima', distance: '104 Nm', duration: '±10,5 Jam', status: 'Aktif' },
  { no: 7, from: 'Bima', to: 'Waikelo', distance: '11 Nm', duration: '±1 Jam', status: 'Aktif' },
]

// ── Task 5 Data: Visual Timeline Points ──────────────────────────────────────
const TIMELINE_POINTS = [
  { name: 'Kalianget', nextDist: '100 Nm', nextTime: '10 Jam', role: 'Pangkalan Utama' },
  { name: 'Kangean', nextDist: '45 Nm', nextTime: '4,5 Jam', role: 'Pelabuhan Singgah' },
  { name: 'Sapeken', nextDist: '106 Nm', nextTime: '10,5 Jam', role: 'Pelabuhan Singgah' },
  { name: 'Celukan Bawang', nextDist: '140 Nm', nextTime: '14 Jam', role: 'Pelabuhan Singgah' },
  { name: 'Labuhan Lombok', nextDist: '47 Nm', nextTime: '5 Jam', role: 'Pelabuhan Singgah' },
  { name: 'Badas', nextDist: '104 Nm', nextTime: '10,5 Jam', role: 'Pelabuhan Singgah' },
  { name: 'Bima', nextDist: '11 Nm', nextTime: '1 Jam', role: 'Pelabuhan Singgah' },
  { name: 'Waikelo', nextDist: 'Tujuan', nextTime: 'Sumba', role: 'Pelabuhan Tujuan' },
]

// ── Task 7 Data: Operational Coverage Regions ──────────────────────────────
const COVERAGE_REGIONS = [
  'Jawa Timur',
  'Bali',
  'Nusa Tenggara Barat',
  'Nusa Tenggara Timur',
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

export default function RoutesPage() {
  return (
    <>
      <SEO
        title="Rute R-18 — Konektivitas Maritim Perintis Indonesia"
        description="Informasi rute resmi Angkutan Laut Perintis Trayek R-18 PT. Pelayaran Nasional Radhika Bahari Nusantara — pangkalan utama Kalianget melayani 8 pelabuhan dengan frekuensi 30 voyage per tahun."
        canonical="/routes"
        keywords="rute R-18, angkutan laut perintis, Kalianget Kangean Sapeken, KM Gandha Nusantara 01, rute perintis Kemenhub"
        image="https://rbn-group.com/gallery/lcu-sailing.jpg"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Rute', url: '/routes' },
        ]}
      />

      {/* ── Task 2: Hero Section ── */}
      <PageHero
        badge="OFFICIAL PIONEER SHIPPING ROUTE"
        title="Rute R-18 — Konektivitas Maritim Perintis Indonesia"
        description="Layanan Angkutan Laut Perintis penugasan pemerintah yang menghubungkan pelabuhan-pelabuhan strategis di wilayah kepulauan Indonesia."
        backgroundImage="/gallery/lcu-sailing.jpg"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Rute' }]}
        ariaLabel="Rute perintis hero banner"
      >
        <div className="space-y-4 pt-3">
          {/* Subtitle details */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2 bg-navy-900/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
              <MapPin className="size-4 text-gold-400 shrink-0" aria-hidden="true" />
              <span>Pangkalan Utama: <strong className="text-white font-semibold">Kalianget, Kabupaten Sumenep, Jawa Timur</strong></span>
            </div>
          </div>

          {/* Additional Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Badge variant="ghost" className="bg-gold-500/20 text-gold-300 border border-gold-500/40 text-xs px-3 py-1 font-semibold uppercase tracking-wider">
              30 Voyage / Tahun
            </Badge>
            <Badge variant="ghost" className="bg-white/10 text-white border border-white/20 text-xs px-3 py-1 font-semibold">
              Government Maritime Connectivity
            </Badge>
            <Badge variant="ghost" className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs px-3 py-1 font-semibold">
              KM Gandha Nusantara 01
            </Badge>
          </div>
        </div>
      </PageHero>

      {/* ── Task 3: Premium Statistics Cards (White Cards, Soft Shadow, Navy Icons, Gold Numbers) ── */}
      <section className="bg-surface-50 dark:bg-navy-950 border-b border-border py-10" aria-label="Statistik utama rute perintis">
        <Container>
          <AnimatedSection className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Total Jarak', value: '553', unit: 'Nm', icon: Ruler },
              { label: 'Estimasi Pelayaran', value: '55,5', unit: 'Jam', icon: Clock },
              { label: 'Pelabuhan Singgah', value: '8', unit: 'Pelabuhan', icon: Anchor },
              { label: 'Frekuensi Operasional', value: '30', unit: 'Voyage / Tahun', icon: Calendar },
            ].map(({ label, value, unit, icon: Icon }) => (
              <motion.div key={label} variants={fadeUp} className="h-full">
                <Card className="h-full bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated transition-all duration-200">
                  <CardContent className="p-6 flex flex-col justify-between h-full space-y-4 text-center">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 dark:bg-navy-700 dark:text-gold-400 mx-auto shrink-0">
                      <Icon className="size-6 text-navy-800 dark:text-gold-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className="font-display font-extrabold text-3xl sm:text-4xl text-gold-600 dark:text-gold-400">{value}</span>
                        <span className="text-xs font-bold text-navy-800 dark:text-surface-100">{unit}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Main Content Section ── */}
      <Section spacing="xl" aria-label="Lintasan dan rincian trayek R-18">
        <Container>
          <div className="space-y-12">

            {/* ── Task 5: Improve Timeline (Horizontal Desktop / Vertical Mobile) ── */}
            <AnimatedSection>
              <motion.div variants={fadeUp} className="text-center max-w-xl mx-auto mb-8 space-y-2">
                <SectionLabel>Alur Singgah Lintasan</SectionLabel>
                <Heading level={2}>Timeline Lintasan Trayek R-18</Heading>
                <p className="text-sm text-muted-foreground">Rangkaian 8 pelabuhan singgah terintegrasi dari pangkalan utama Kalianget hingga pelabuhan tujuan Waikelo.</p>
              </motion.div>

              {/* Desktop Horizontal Timeline */}
              <motion.div variants={fadeUp} className="hidden lg:block">
                <Card className="bg-white dark:bg-navy-800 border border-border shadow-card p-8">
                  <CardContent className="p-0">
                    <div className="relative flex items-center justify-between">
                      {/* Connecting line */}
                      <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-gold-500 via-navy-600 to-emerald-500 -translate-y-1/2 z-0" aria-hidden="true" />

                      {TIMELINE_POINTS.map((pt, idx) => (
                        <div key={pt.name} className="relative z-10 flex flex-col items-center text-center max-w-[110px]">
                          <div className={`flex size-11 items-center justify-center rounded-full font-display font-bold text-xs shadow-md border-2 ${
                            idx === 0
                              ? 'bg-gold-500 text-white border-gold-300 ring-4 ring-gold-500/20'
                              : idx === TIMELINE_POINTS.length - 1
                              ? 'bg-emerald-600 text-white border-emerald-300 ring-4 ring-emerald-500/20'
                              : 'bg-navy-800 text-white border-gold-400'
                          }`}>
                            <Anchor className="size-4 text-white" aria-hidden="true" />
                          </div>
                          <p className="font-display font-bold text-xs text-navy-800 dark:text-white mt-3 leading-tight">{pt.name}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">{pt.role}</p>
                          {idx < TIMELINE_POINTS.length - 1 && (
                            <span className="mt-2 text-[10px] font-mono font-bold text-gold-600 dark:text-gold-400 bg-surface-100 dark:bg-navy-900 px-2 py-0.5 rounded-full border border-border">
                              {pt.nextDist}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Mobile Vertical Timeline */}
              <motion.div variants={fadeUp} className="lg:hidden">
                <Card className="bg-white dark:bg-navy-800 border border-border shadow-card p-6">
                  <CardContent className="p-0 space-y-5">
                    {TIMELINE_POINTS.map((pt, idx) => (
                      <div key={pt.name} className="relative flex items-start gap-4">
                        {idx < TIMELINE_POINTS.length - 1 && (
                          <div className="absolute top-10 left-4 bottom-0 w-0.5 bg-gold-400/50 -translate-x-1/2" aria-hidden="true" />
                        )}
                        <div className={`flex size-8 items-center justify-center rounded-full font-display font-bold text-xs shrink-0 z-10 ${
                          idx === 0 ? 'bg-gold-500 text-white' : idx === TIMELINE_POINTS.length - 1 ? 'bg-emerald-600 text-white' : 'bg-navy-800 text-white'
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1 pb-3 border-b border-border last:border-0">
                          <div className="flex items-center justify-between">
                            <p className="font-display font-bold text-sm text-navy-800 dark:text-white">{pt.name}</p>
                            {idx < TIMELINE_POINTS.length - 1 && (
                              <span className="text-[11px] font-mono font-bold text-gold-600 dark:text-gold-400">
                                {pt.nextDist} (±{pt.nextTime})
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{pt.role}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            {/* ── Task 4: Enterprise Route Table ── */}
            <AnimatedSection>
              <motion.div variants={fadeUp} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-xl text-navy-800 dark:text-white">Tabel Lintasan Rute R-18</h3>
                    <p className="text-xs text-muted-foreground">Jarak dan estimasi waktu pelayaran normal antar pelabuhan perintis.</p>
                  </div>
                  <Badge variant="ghost" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0 font-semibold text-xs self-start sm:self-auto">
                    🟢 Status Aktif (7 Leg)
                  </Badge>
                </div>

                {/* Enterprise Table Card */}
                <Card className="rounded-2xl overflow-hidden border border-border shadow-card bg-white dark:bg-navy-800">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse" role="table" aria-label="Tabel Lintasan Trayek R-18">
                        <thead className="sticky top-0 bg-navy-900 text-white text-xs uppercase tracking-wider font-semibold border-b border-navy-700">
                          <tr>
                            <th scope="col" className="py-4 px-4 text-center w-14">No</th>
                            <th scope="col" className="py-4 px-6">
                              <span className="flex items-center gap-1.5">
                                <MapPin className="size-3.5 text-gold-400" aria-hidden="true" /> Rute Pelabuhan
                              </span>
                            </th>
                            <th scope="col" className="py-4 px-5 text-center">
                              <span className="inline-flex items-center justify-center gap-1.5">
                                <Ruler className="size-3.5 text-gold-400" aria-hidden="true" /> Jarak
                              </span>
                            </th>
                            <th scope="col" className="py-4 px-5 text-center">
                              <span className="inline-flex items-center justify-center gap-1.5">
                                <Clock className="size-3.5 text-gold-400" aria-hidden="true" /> Estimasi Waktu
                              </span>
                            </th>
                            <th scope="col" className="py-4 px-4 text-center">
                              <span className="inline-flex items-center justify-center gap-1.5">
                                <Shield className="size-3.5 text-gold-400" aria-hidden="true" /> Status
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-200 dark:divide-navy-700 text-sm">
                          {RUTE_LEGS.map((leg) => (
                            <tr
                              key={leg.no}
                              className="hover:bg-gold-50/40 dark:hover:bg-navy-700/40 transition-colors even:bg-surface-50/50 dark:even:bg-navy-900/30"
                            >
                              {/* No */}
                              <td className="py-4 px-4 text-center font-mono font-bold text-xs text-muted-foreground">
                                {leg.no}
                              </td>

                              {/* Rute */}
                              <td className="py-4 px-6 font-semibold text-navy-800 dark:text-white">
                                <div className="flex items-center gap-2">
                                  <Anchor className="size-3.5 text-gold-500 shrink-0" aria-hidden="true" />
                                  <span>{leg.from}</span>
                                  <ArrowRight className="size-3.5 text-gold-500 shrink-0" aria-hidden="true" />
                                  <span>{leg.to}</span>
                                </div>
                              </td>

                              {/* Jarak */}
                              <td className="py-4 px-5 text-center font-mono font-semibold text-navy-700 dark:text-gold-300">
                                {leg.distance}
                              </td>

                              {/* Estimasi Waktu */}
                              <td className="py-4 px-5 text-center font-mono font-semibold text-navy-700 dark:text-emerald-300">
                                {leg.duration}
                              </td>

                              {/* Status */}
                              <td className="py-4 px-4 text-center">
                                <Badge variant="ghost" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0 font-semibold text-xs px-2.5 py-0.5">
                                  🟢 {leg.status}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            {/* ── Task 6 & Task 7 & Task 8: Grid for Summary, Coverage, and Government Callout ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left 7 Columns: Operational Summary & Coverage */}
              <div className="lg:col-span-7 space-y-8">

                {/* ── Task 6: Ringkasan Operasional Trayek R-18 ── */}
                <AnimatedSection>
                  <motion.div variants={fadeUp}>
                    <Card className="bg-white dark:bg-navy-800 border border-border shadow-card p-6">
                      <CardContent className="p-0 space-y-4">
                        <div className="flex items-center gap-2 pb-3 border-b border-border">
                          <Building2 className="size-5 text-gold-500" aria-hidden="true" />
                          <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white">
                            Ringkasan Operasional Trayek R-18
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          {[
                            { label: 'Total Pelabuhan', value: '8 Pelabuhan', icon: MapPin },
                            { label: 'Total Voyage', value: '30 / Tahun', icon: Calendar },
                            { label: 'Total Jarak', value: '553 Nm', icon: Ruler },
                            { label: 'Estimasi Pelayaran', value: '55,5 Jam', icon: Clock },
                            { label: 'Pangkalan Utama', value: 'Kalianget, Sumenep', icon: Anchor },
                            { label: 'Armada Operasional', value: 'KM Gandha Nusantara 01', icon: Ship, highlight: true },
                            { label: 'Operator Resmi', value: 'PT. Pelayaran Nasional RBN', icon: Shield },
                            { label: 'Jenis Layanan', value: 'Angkutan Laut Perintis', icon: Info, highlight: true },
                          ].map(({ label, value, icon: Icon, highlight }) => (
                            <div key={label} className="flex items-center justify-between p-3 rounded-lg bg-surface-50 dark:bg-navy-900 border border-surface-200 dark:border-navy-700">
                              <span className="text-muted-foreground flex items-center gap-1.5 font-medium">
                                <Icon className="size-3.5 text-gold-500 shrink-0" aria-hidden="true" />
                                {label}
                              </span>
                              <span className={`font-semibold ${highlight ? 'text-gold-600 dark:text-gold-400' : 'text-navy-800 dark:text-white'}`}>
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                {/* ── Task 7: Wilayah Operasional Coverage Card ── */}
                <AnimatedSection>
                  <motion.div variants={fadeUp}>
                    <Card className="bg-white dark:bg-navy-800 border border-border shadow-card p-6">
                      <CardContent className="p-0 space-y-4">
                        <div className="flex items-center gap-2 pb-3 border-b border-border">
                          <Compass className="size-5 text-gold-500" aria-hidden="true" />
                          <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white">
                            Wilayah Operasional
                          </h3>
                        </div>

                        {/* Region Check Badges */}
                        <div className="flex flex-wrap gap-2">
                          {COVERAGE_REGIONS.map((region) => (
                            <div key={region} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold">
                              <Check className="size-3.5 stroke-[3]" aria-hidden="true" />
                              <span>{region}</span>
                            </div>
                          ))}
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                          Trayek R-18 mendukung konektivitas wilayah kepulauan Indonesia melalui layanan angkutan laut perintis yang menghubungkan pelabuhan-pelabuhan strategis guna mendukung distribusi logistik, mobilitas masyarakat, dan pelayanan publik maritim.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              </div>

              {/* Right 5 Columns: Task 8 Government Callout & Legal Identifiers */}
              <div className="lg:col-span-5 space-y-6">

                {/* ── Task 8: Government Information Callout Box ── */}
                <AnimatedSection>
                  <motion.div variants={fadeUp}>
                    <div className="rounded-xl border-l-4 border-l-amber-500 bg-amber-50 dark:bg-navy-800/90 border-y border-r border-amber-200 dark:border-navy-700 p-6 shadow-sm">
                      <div className="flex items-start gap-3.5">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500 text-white shrink-0">
                          <Info className="size-5" aria-hidden="true" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-display font-bold text-base text-navy-900 dark:text-white">
                            Informasi Operasional
                          </h4>
                          <p className="text-xs text-navy-800 dark:text-surface-200 leading-relaxed font-sans">
                            Trayek R-18 merupakan bagian dari layanan Angkutan Laut Perintis yang mendukung konektivitas wilayah terpencil, distribusi logistik, mobilitas masyarakat, dan pelayanan publik maritim sesuai penugasan pemerintah.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Institutional Identification Card */}
                <AnimatedSection>
                  <motion.div variants={fadeUp}>
                    <Card className="bg-navy-900 text-white border-none shadow-elevated p-6">
                      <CardContent className="p-0 space-y-4 text-xs">
                        <h4 className="font-display font-bold text-sm text-gold-400 uppercase tracking-wider">
                          Akreditasi & Perizinan Perintis
                        </h4>

                        <div className="space-y-3 pt-2">
                          <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                            <span className="text-white/60">Instansi Penugasan</span>
                            <span className="font-semibold text-white">Kementerian Perhubungan RI</span>
                          </div>
                          <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                            <span className="text-white/60">No. SIUPAL</span>
                            <span className="font-mono font-bold text-gold-400">AL001/761/SP.SIUPAL/IX/2022</span>
                          </div>
                          <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                            <span className="text-white/60">Kode KBKI</span>
                            <span className="font-mono font-bold text-white">64129</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/60">Status LKPP</span>
                            <span className="font-semibold text-emerald-400">Registered e-Katalog Partner</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>

              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Task 9: Bottom CTA Section ── */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-16 text-white border-t border-navy-800" aria-label="Bottom Route CTA">
        <Container>
          <AnimatedSection className="text-center space-y-5">
            <motion.div variants={fadeUp}>
              <Heading level={2} className="text-white max-w-2xl mx-auto">
                Butuh Informasi Trayek?
              </Heading>
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/75 max-w-xl mx-auto text-sm leading-relaxed">
              Hubungi tim kami untuk memperoleh informasi jadwal pelayaran, kapasitas muatan, kerja sama logistik, maupun layanan angkutan laut perintis.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Button asChild size="xl" variant="secondary" rounded="full" className="px-8 font-bold">
                <Link to="/contact">
                  <Phone className="size-5" aria-hidden="true" />
                  Hubungi Kami
                </Link>
              </Button>
              <Button asChild size="xl" variant="white" rounded="full" className="px-8 font-bold">
                <Link to="/fleet">
                  <Ship className="size-5" aria-hidden="true" />
                  Lihat Armada
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
