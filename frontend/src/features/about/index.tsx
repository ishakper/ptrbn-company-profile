import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import {
  Award,
  FileCheck,
  ShieldCheck,
  Building2,
  Target,
  Compass,
  ArrowRight,
  Network,
  Calendar,
} from 'lucide-react'
import { Container, Section, Heading, SectionLabel } from '@/components/ui/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/common/SEO'
import { Skeleton } from '@/components/ui/skeleton'
import {
  fetchCorporateIdentity,
  type CorporateIdentityResponse,
  fallbackCorporateIdentity,
} from '@/services/corporateIdentity'

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const timelineMilestones = [
  { year: '1999', title: 'Company Founded', desc: 'Established in Surabaya as a regional sea transport operator with 2 cargo vessels.' },
  { year: '2005', title: 'Fleet Expansion', desc: 'Expanded fleet to 12 vessels and launched regular Java-Sumatra shipping routes.' },
  { year: '2012', title: 'Container Logistics Division', desc: 'Introduced containerized cargo handling and port storage services.' },
  { year: '2018', title: 'ISO 9001:2015 Certification', desc: 'Achieved international quality management certification for maritime operations.' },
  { year: '2023', title: 'Digital Logistics Tracking', desc: 'Implemented real-time GPS vessel tracking and digital cargo monitoring.' },
  { year: '2026', title: 'Nationwide Network', desc: '48 vessels connecting 500+ Indonesian ports across the archipelago.' },
]

export default function AboutPage() {
  const [data, setData] = useState<CorporateIdentityResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCorporateIdentity().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  const ci = data ?? fallbackCorporateIdentity

  return (
    <>
      <SEO
        title="About Us — Corporate Identity"
        description="Learn about PT. Pelayaran Nasional Radhika Bahari Nusantara's 25-year history, vision, mission, leadership board, ISO certifications, and core values."
        canonical="/about"
      />

      {/* ── Page Header / Banner ── */}
      <section className="relative pt-32 pb-16 bg-background border-b border-border overflow-hidden" aria-label="About Us Header">
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 size-96 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <Container>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="px-4 py-1.5 text-xs uppercase tracking-widest border-primary/20 text-primary bg-primary/5">
                Corporate Identity
              </Badge>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Heading level={1} size="3xl" className="text-primary">
                About PT. Pelayaran Nasional Radhika Bahari Nusantara
              </Heading>
            </motion.div>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              25 years of maritime excellence connecting Indonesia's islands with safe, punctual, and reliable shipping logistics.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── Company Overview ── */}
      <Section spacing="xl" aria-label="Company Overview">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp}>
                <SectionLabel>Company Overview</SectionLabel>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Heading level={2}>{ci.company_profile.title}</Heading>
              </motion.div>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-lg font-medium">
                {ci.company_profile.summary}
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                {ci.company_profile.content}
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 pt-4 border-t border-surface-200 dark:border-navy-700">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700 dark:bg-navy-800 dark:text-gold-400">
                    <Building2 className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Headquarters</p>
                    <p className="font-semibold text-navy-800 dark:text-white text-sm">{ci.company_profile.headquarters}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-navy-100 text-navy-800 dark:bg-navy-800 dark:text-surface-100">
                    <Calendar className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Established</p>
                    <p className="font-semibold text-navy-800 dark:text-white text-sm">Year {ci.company_profile.founded_year}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Overview Card Highlight */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 bg-gradient-to-br from-navy-800 to-navy-900 text-white shadow-elevated border-none">
                <div className="space-y-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gold-500/20 text-gold-400 border border-gold-500/30">
                    <ShieldCheck className="size-8" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">Maritime Trust & Integrity</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      We uphold international ISM Code safety standards and ISO 9001:2015 quality management to deliver zero-harm maritime transport.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-white/90">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">Official SIUPAL No.</span>
                      <strong className="text-gold-400 font-mono">AL001/761/SP.SIUPAL/IX/2022</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">KBKI Classification</span>
                      <strong className="text-white font-mono">64129</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">Government Procurement</span>
                      <span className="text-emerald-400 font-semibold">Registered on LKPP e-Katalog</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Operational Experience</span>
                      <span className="text-gold-300 font-semibold text-right">Government, Pioneer & Electric Vessel Ops</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Pioneer Shipping Route</span>
                      <span className="text-gold-300 font-medium">Trayek R-18 (30 Voyages/Year)</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ── Vision & Mission ── */}
      <Section spacing="xl" className="bg-surface-50 dark:bg-navy-950" aria-label="Vision and Mission">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <SectionLabel>Strategic Direction</SectionLabel>
            <Heading level={2}>Vision & Mission Statements</Heading>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Skeleton className="h-64 rounded-2xl" />
              <Skeleton className="h-64 rounded-2xl" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ci.vision_missions.map((item) => (
                <Card key={item.id} className="p-8 border-t-4 border-t-gold-500 hover:shadow-elevated transition-all">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-navy-800 text-gold-400">
                        {item.type === 'vision' ? <Target className="size-6" /> : <Compass className="size-6" />}
                      </div>
                      <div>
                        <Badge variant="ghost" className="text-xs uppercase tracking-wider mb-1">
                          {item.type}
                        </Badge>
                        <h3 className="font-display font-bold text-xl text-navy-800 dark:text-white">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* ── Core Values Grid ── */}
      <Section spacing="xl" aria-label="Core Values">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <SectionLabel>Our Culture</SectionLabel>
            <Heading level={2}>Core Corporate Values</Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ci.core_values.map((val) => (
              <Card key={val.id} className="p-6 hover:-translate-y-1 transition-transform duration-200">
                <CardContent className="p-0 space-y-3">
                  <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-widest">{val.code}</span>
                  <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── History Timeline ── */}
      <Section spacing="xl" className="bg-muted border-y border-border" aria-label="History Timeline">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <SectionLabel>Our Journey</SectionLabel>
            <Heading level={2}>25 Years of Milestones</Heading>
          </div>

          <div className="relative border-l-2 border-border ml-4 md:ml-32 space-y-12">
            {timelineMilestones.map((m, idx) => (
              <div key={m.year} className="relative pl-8 md:pl-12">
                {/* Year Badge */}
                <div className="absolute -left-[17px] top-0 flex size-8 items-center justify-center rounded-full bg-secondary text-primary font-bold text-xs shadow-sm">
                  {idx + 1}
                </div>

                <div className="bg-white p-6 rounded-xl border border-border max-w-2xl shadow-card hover:shadow-elevated transition-shadow duration-200">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-bold font-mono mb-2">
                    {m.year}
                  </span>
                  <h3 className="font-display font-bold text-lg text-primary mb-1">{m.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Board of Management ── */}
      <Section spacing="xl" aria-label="Board of Management">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <SectionLabel>Leadership</SectionLabel>
            <Heading level={2}>Board of Management</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ci.managements.map((mgt) => (
              <Card key={mgt.id} className="overflow-hidden bg-white border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
                <div className="h-48 bg-navy-950 overflow-hidden border-b border-border relative">
                  <img 
                    src={mgt.slug === 'radhika-pratama' ? '/gallery/crew-deck.jpg' : (mgt.slug === 'budi-santoso' ? '/gallery/drydock-inspection.jpg' : '/gallery/cabin-education.jpg')} 
                    alt={mgt.name} 
                    className="w-full h-full object-cover opacity-80 pointer-events-none select-none" 
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div>
                    <Badge variant="ghost" className="text-xs">{mgt.department}</Badge>
                    <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white mt-1">{mgt.name}</h3>
                    <p className="text-xs font-semibold text-gold-600 dark:text-gold-400">{mgt.position}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mgt.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Organization Structure ── */}
      <Section spacing="xl" className="bg-surface-50 dark:bg-navy-950" aria-label="Organization Structure">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <SectionLabel>Governance</SectionLabel>
            <Heading level={2}>Organizational Structure</Heading>
          </div>

          <Card className="p-8">
            <div className="flex flex-col items-center space-y-6">
              {/* Executive Box */}
              <div className="p-4 rounded-xl bg-navy-800 text-white font-display font-bold text-center w-64 shadow-md">
                Board of Commissioners & CEO
              </div>
              <div className="h-6 w-0.5 bg-navy-400" />
              {/* Director Box */}
              <div className="p-4 rounded-xl bg-navy-700 text-white font-display font-semibold text-center w-56 shadow-sm">
                Managing Directors
              </div>
              <div className="h-6 w-0.5 bg-navy-400" />
              {/* Divisions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-4 border-t border-surface-200 dark:border-navy-700">
                {['Fleet & Operations', 'Cargo Logistics', 'Technical & ISM Safety', 'Finance & Administration'].map((div) => (
                  <div key={div} className="p-4 rounded-lg bg-surface-100 dark:bg-navy-800 text-center font-medium text-sm text-navy-800 dark:text-surface-100 flex items-center justify-center gap-2">
                    <Network className="size-4 text-gold-500 shrink-0" />
                    <span>{div}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ── Legalities & Certifications ── */}
      <Section spacing="xl" aria-label="Legalities and Certifications">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <SectionLabel>Compliance</SectionLabel>
            <Heading level={2}>Certifications & Legalities</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-navy-800 dark:text-white flex items-center gap-2">
                <Award className="size-5 text-gold-500" /> Quality Certifications
              </h3>
              {ci.certifications.map((cert) => (
                <Card key={cert.id} className="p-6 bg-white border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs border-primary/20 text-primary bg-primary/5">{cert.code}</Badge>
                    <h4 className="font-bold text-navy-800 dark:text-white text-base">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">Issuer: {cert.issuing_organization}</p>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Legal Documents */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-navy-800 dark:text-white flex items-center gap-2">
                <FileCheck className="size-5 text-navy-600 dark:text-gold-400" /> Government Licenses
              </h3>
              {ci.legal_documents.map((leg) => (
                <Card key={leg.id} className="p-6 bg-white border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs border-secondary/20 text-secondary bg-secondary/5">{leg.document_number}</Badge>
                    <h4 className="font-bold text-navy-800 dark:text-white text-base">{leg.title}</h4>
                    <p className="text-xs text-muted-foreground">Authority: {leg.issuing_authority}</p>
                    <p className="text-sm text-muted-foreground">{leg.summary}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA Section ── */}
      <section className="bg-navy-800 py-16 text-white text-center border-t border-navy-700" aria-label="Contact Call to Action">
        <Container size="sm">
          <div className="space-y-6">
            <Heading level={2} className="text-white">Partner with Indonesia's Maritime Leader</Heading>
            <p className="text-white/70">Connect with our team in Surabaya for tailored maritime shipping and cargo logistics quotes.</p>
            <Button asChild size="xl" variant="secondary" rounded="full" className="bg-secondary text-primary hover:bg-secondary/90 border-0">
              <Link to="/contact">
                Contact Our Team <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
