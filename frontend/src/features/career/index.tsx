import { useState, useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import {
  Anchor, Shield, Globe, Users, Heart, GraduationCap,
  MapPin, Clock, ChevronDown, ChevronUp, ArrowRight, Mail, Phone,
  CheckCircle2, Briefcase, Award, Star,
} from 'lucide-react'
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

// ── Job listings ─────────────────────────────────────────────────────────────
const JOB_OPENINGS = [
  {
    id: 'j1',
    title: 'Chief Officer (Nautika Ahli)',
    department: 'Vessel Operations',
    location: 'On-Board — Surabaya (Home Port)',
    type: 'Sea-Based',
    requirements: [
      'ANT-I / ANT-II Certificate (STCW)',
      'Valid GMDSS Certificate',
      'Minimum 3 years as Chief Officer on cargo vessels',
      'Fluent in Bahasa Indonesia; English preferred',
      'Valid Seaman Book (Buku Pelaut)',
    ],
    benefits: ['Competitive sea pay + allowances', 'BPJSKT maritime insurance', 'Annual paid leave', 'Career path to Master'],
    email: 'crewing@rbn-group.com',
    icon: Anchor,
    urgency: 'Urgent',
  },
  {
    id: 'j2',
    title: 'Marine Engineer (ATT III)',
    department: 'Engineering Division',
    location: 'On-Board — Multiple Vessels',
    type: 'Sea-Based',
    requirements: [
      'ATT III (STCW Compliant)',
      'STCW Basic Safety Training',
      'Experience with diesel main engines (Mitsubishi, Yanmar, MAN)',
      'ISM Code familiarity',
      'Valid Engine Logbook maintenance record',
    ],
    benefits: ['Sea pay + overtime', 'BPJSKT insurance', 'Professional development training', 'Career progression to Chief Engineer'],
    email: 'crewing@rbn-group.com',
    icon: Shield,
    urgency: 'Urgent',
  },
  {
    id: 'j3',
    title: 'Port Operations Supervisor',
    department: 'Port & Logistics',
    location: 'Tanjung Perak, Surabaya',
    type: 'Shore-Based',
    requirements: [
      'S1/D3 in Nautika, Port Management, or related',
      'Minimum 3 years in port operations or ship agency',
      'Strong understanding of port customs and cargo documentation',
      'Proficient in Microsoft Excel and logistics systems',
      'Available for flexible shifts including weekends',
    ],
    benefits: ['Competitive salary + allowances', 'BPJSKES health insurance', '14-day annual leave', 'Professional certification support'],
    email: 'hrd@rbn-group.com',
    icon: Globe,
    urgency: 'Open',
  },
  {
    id: 'j4',
    title: 'Cargo Documentation Officer',
    department: 'Commercial & Logistics',
    location: 'Surabaya Head Office',
    type: 'Shore-Based',
    requirements: [
      'S1 in Shipping, Business, or Trade Administration',
      'Minimum 2 years in shipping or import/export documentation',
      'Familiar with Bill of Lading, Manifest, and PEB/PIB documents',
      'Strong attention to detail and communication skills',
      'Proficient in English (written and verbal)',
    ],
    benefits: ['Competitive salary', 'Health & life insurance (BPJSKES)', 'Quarterly performance bonus', 'Training & development budget'],
    email: 'hrd@rbn-group.com',
    icon: Briefcase,
    urgency: 'Open',
  },
  {
    id: 'j5',
    title: 'IT & Digital Systems Analyst',
    department: 'Corporate IT',
    location: 'Surabaya Head Office (Hybrid)',
    type: 'Shore-Based',
    requirements: [
      'S1 in Information Technology or Computer Science',
      'Experience with ERP systems, logistics software, or fleet tracking systems',
      'Proficient in SQL, network administration, and IT security basics',
      'Familiarity with AIS vessel tracking systems is a plus',
      'Strong problem-solving and documentation skills',
    ],
    benefits: ['Competitive IT salary', 'Work-from-home flexibility (2 days/week)', 'Learning & certification budget', 'Health insurance'],
    email: 'hrd@rbn-group.com',
    icon: Globe,
    urgency: 'Open',
  },
  {
    id: 'j6',
    title: 'HSE & Safety Inspector',
    department: 'Health, Safety & Environment',
    location: 'Multi-Port (Surabaya + Field)',
    type: 'Shore-Based',
    requirements: [
      'S1 in Maritime Safety, Environmental Engineering, or K3 (Keselamatan Kesehatan Kerja)',
      'AK3 Umum certification (KEMENAKER)',
      'ISM Code and ISPS Code knowledge',
      'Experience in maritime or industrial HSE inspection',
      'Willingness to travel to ports and vessels for inspections',
    ],
    benefits: ['Competitive salary + field allowance', 'Travel benefits', 'Professional HSE certification support', 'Health insurance'],
    email: 'hrd@rbn-group.com',
    icon: Shield,
    urgency: 'Open',
  },
]

// ── Company benefits ─────────────────────────────────────────────────────────
const BENEFITS = [
  { icon: Award, title: 'Competitive Compensation', desc: 'Market-rate salaries with performance bonuses, sea pay allowances, and annual increments.' },
  { icon: Heart, title: 'Health & Insurance', desc: 'BPJSKES health insurance + BPJSKT employment injury insurance for all employees.' },
  { icon: GraduationCap, title: 'Career Development', desc: 'Professional certifications, training programs, and structured career ladders.' },
  { icon: Users, title: 'Family Culture', desc: '25 years of loyal employees. Low turnover. We invest in our people for the long term.' },
  { icon: Globe, title: 'Maritime Experience', desc: 'Exposure to major Indonesian ports, diverse cargo types, and top-tier clients.' },
  { icon: Star, title: 'Recognition Program', desc: 'Employee of the quarter awards, tenure milestones, and performance recognition.' },
]

// ── Application process ──────────────────────────────────────────────────────
const PROCESS_STEPS = [
  { step: 1, title: 'Apply Online', desc: 'Send your CV and cover letter to the appropriate email address for the position.' },
  { step: 2, title: 'Initial Review', desc: 'Our HR team reviews applications within 5 business days and shortlists qualified candidates.' },
  { step: 3, title: 'Interview', desc: 'Shortlisted candidates are invited for interviews (in-person or online based on location).' },
  { step: 4, title: 'Onboarding', desc: 'Accepted candidates complete documentation, briefing, and onboarding within 2 weeks.' },
]

// ── FAQ data ─────────────────────────────────────────────────────────────────
const CAREER_FAQS = [
  {
    q: 'Are positions available for fresh graduates?',
    a: 'Yes. We actively recruit fresh graduates through our Cadet Program for sea-based roles (ANT/ATT cadets) and through our Management Trainee stream for shore-based positions. Academic excellence and motivation are key criteria.',
  },
  {
    q: 'What documents are required to apply?',
    a: 'Required documents vary by position. Generally: updated CV, academic transcripts, professional certificates (for seafarers: ANT/ATT, Seaman Book, STCW certificates), cover letter, and government-issued ID (KTP).',
  },
  {
    q: 'Do you provide accommodation for sea-based crew?',
    a: 'Yes. All sea-based crew live aboard the vessel during their contract period (typically 4 months on / 2 months off rotation). Vessel accommodation includes private or shared cabins, meals, and recreational facilities.',
  },
  {
    q: 'Can I apply for multiple positions at once?',
    a: 'Yes. You may apply for up to 2 positions simultaneously. Please indicate your preference clearly in your cover letter.',
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
        aria-controls={`cfaq-${index}`}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-semibold text-navy-800 dark:text-white text-sm hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
      >
        {q}
        {open ? <ChevronUp className="size-5 shrink-0 text-gold-500" /> : <ChevronDown className="size-5 shrink-0 text-muted-foreground" />}
      </button>
      <motion.div
        id={`cfaq-${index}`}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  )
}

function JobCard({ job }: { job: typeof JOB_OPENINGS[0] }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = job.icon

  return (
    <Card className="bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated transition-all duration-200">
      <CardContent className="p-7 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-4 items-start">
            <div className="flex size-11 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-700 shrink-0">
              <Icon className="size-5 text-navy-700 dark:text-gold-400" aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                {job.urgency === 'Urgent' && (
                  <Badge variant="ghost" className="text-[10px] bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-0">Urgent</Badge>
                )}
                <Badge variant="ghost" className={`text-[10px] border-0 ${job.type === 'Sea-Based' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'}`}>
                  {job.type}
                </Badge>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white leading-snug">{job.title}</h3>
              <p className="text-sm text-gold-600 dark:text-gold-400 font-semibold">{job.department}</p>
            </div>
          </div>
        </div>

        {/* Location & type */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-gold-500" aria-hidden="true" /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-gold-500" aria-hidden="true" /> Full-time
          </span>
        </div>

        {/* Requirements (expandable) */}
        <div>
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="text-xs font-semibold text-navy-700 dark:text-gold-400 hover:text-gold-600 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 rounded"
          >
            {expanded ? 'Hide' : 'Show'} Requirements
            {expanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </button>
          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-1.5">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex gap-3 pt-3 border-t border-border flex-wrap">
          <Button asChild size="md" variant="primary">
            <a href={`mailto:${job.email}?subject=Application: ${job.title}`}>
              <Mail className="size-4" aria-hidden="true" />
              Apply via Email
            </a>
          </Button>
          <Button asChild size="md" variant="outline">
            <a href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo, saya ingin melamar posisi ${job.title} di PT. RBN.`)}`} target="_blank" rel="noopener noreferrer">
              WhatsApp HR
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function CareerPage() {
  return (
    <>
      <SEO
        title="Career — Join Our Maritime Team"
        description="Join PT. Pelayaran Nasional Radhika Bahari Nusantara's crew. Open positions for Chief Officer, Marine Engineer, Port Operations, and shore-based roles in Surabaya."
        canonical="/career"
        keywords="karir PT RBN, lowongan kerja pelayaran, ANT officer Indonesia, marine engineer Indonesia, shipping company jobs Surabaya"
        image="https://rbn-group.com/gallery/crew-deck.jpg"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Career', url: '/career' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        badge="Careers at RBN"
        title="Join Indonesia's Trusted Maritime Family"
        description="We are looking for passionate, certified maritime professionals and shore-based talents to grow with us across sea-based and corporate roles."
        backgroundImage="/gallery/crew-deck.jpg"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Career' }]}
        ariaLabel="Career page hero banner"
      >
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button asChild size="md" variant="secondary" rounded="lg">
            <a href="#open-positions"><ArrowRight className="size-4" /> View Open Positions</a>
          </Button>
        </div>
      </PageHero>

      {/* ── Benefits ── */}
      <Section spacing="xl" aria-label="Employee benefits">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Why Work With Us</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Benefits & Perks</Heading></motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card className="h-full bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
                  <CardContent className="p-7 space-y-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-700">
                      <Icon className="size-5 text-navy-700 dark:text-gold-400" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── Cadet Program ── */}
      <Section spacing="xl" className="bg-gradient-to-br from-navy-900 to-navy-950 text-white border-y border-navy-800" aria-label="Cadet program">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <motion.div variants={fadeUp} className="space-y-2">
                <Badge variant="ghost" className="text-xs bg-gold-500/20 text-gold-300 border-0 uppercase tracking-wider">Special Program</Badge>
                <Heading level={2} className="text-white mt-3">Cadet Maritime Training Program</Heading>
              </motion.div>
              <motion.p variants={fadeUp} className="text-white/70 leading-relaxed mt-4">
                PT. RBN actively recruits fresh maritime graduates (ANT-IV, ANT-V, ATT-IV) for our structured Cadet Program. 
                Cadets are assigned to actual fleet vessels under mentorship of experienced officers and fast-tracked toward certification.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3 mt-6">
                {[
                  'Open for fresh ANT/ATT graduates (STCW compliant)',
                  '12-month structured sea training program',
                  'Mentor-guided learning on active cargo vessels',
                  'Pathway to permanent Officer position upon completion',
                  'Certificate support and continuous education funding',
                ].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="size-4 text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-8">
                <Button asChild size="lg" variant="secondary" rounded="lg">
                  <a href="mailto:crewing@rbn-group.com?subject=Cadet Program Application">
                    <GraduationCap className="size-5" /> Apply for Cadet Program
                  </a>
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/gallery/cabin-education.jpg"
                  alt="Maritime education and training on vessel"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" aria-hidden="true" />
              </motion.div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* ── Open Positions ── */}
      <Section spacing="xl" id="open-positions" aria-label="Open job positions">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Open Positions</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Current Vacancies</Heading></motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground">
              Send your application to the email listed on each position. Our HR team will respond within 5 business days.
            </motion.p>
          </AnimatedSection>

          <div className="space-y-5">
            {JOB_OPENINGS.map((job) => (
              <AnimatedSection key={job.id}>
                <motion.div variants={fadeUp}>
                  <JobCard job={job} />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Application Process ── */}
      <Section spacing="xl" className="bg-surface-50 dark:bg-navy-950 border-y border-border" aria-label="Application process">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>How to Apply</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Application Process</Heading></motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="absolute hidden lg:block top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 dark:from-gold-800 dark:via-gold-600 dark:to-gold-800" aria-hidden="true" />
            {PROCESS_STEPS.map(({ step, title, desc }) => (
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

      {/* ── FAQ ── */}
      <Section spacing="xl" aria-label="Career FAQ">
        <Container size="md">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <motion.div variants={fadeUp}><SectionLabel>Career FAQ</SectionLabel></motion.div>
            <motion.div variants={fadeUp}><Heading level={2}>Common Questions</Heading></motion.div>
          </AnimatedSection>

          <Card className="bg-white dark:bg-navy-800 border border-border shadow-card">
            <CardContent className="p-8">
              {CAREER_FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-20" aria-label="Career CTA">
        <Container>
          <AnimatedSection className="text-center space-y-6">
            <motion.div variants={fadeUp}>
              <Heading level={2} className="text-white max-w-2xl mx-auto">
                Can't Find the Right Position?
              </Heading>
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto">
              Send us your CV and we'll keep your profile on file for future opportunities that match your qualifications.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="xl" variant="secondary" rounded="full">
                <a href="mailto:hrd@rbn-group.com?subject=General Career Application — PT RBN">
                  <Mail className="size-5" aria-hidden="true" />
                  Send Open Application
                </a>
              </Button>
              <Button asChild size="xl" variant="white" rounded="full">
                <a href="tel:+62318000000">
                  <Phone className="size-5" aria-hidden="true" />
                  Call HR: +62 31 8000 0000
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
