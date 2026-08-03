import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2, Users, Anchor } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion as m, useInView, type Variants } from 'framer-motion'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/PageHero'
import { Container, Section, SectionLabel } from '@/components/ui/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

// ── Form schema ─────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  department: z.string().min(1, 'Please select a department'),
  service_type: z.string().min(1, 'Please select a service type'),
  cargo_type: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

// ── Department contacts ──────────────────────────────────────────────────────
const DEPARTMENTS = [
  {
    name: 'Government Procurement Desk',
    icon: Building2,
    email: 'procurement@rbn-group.com',
    phone: '+62 31 8000 0003',
    whatsapp: '6281234567893',
    desc: 'LKPP e-Katalog tenders, Kemenhub pioneer shipping contracts, SIUPAL verification.',
    hours: 'Mon–Fri 08:00–17:00 WIB (SIUPAL: AL001/761/SP.SIUPAL/IX/2022)',
  },
  {
    name: 'Chartering & Commercial',
    icon: Anchor,
    email: 'chartering@rbn-group.com',
    phone: '+62 31 8000 0001',
    whatsapp: '6281234567891',
    desc: 'Freight rates, vessel chartering, cargo bookings, and route scheduling.',
    hours: 'Mon–Fri 08:00–17:00 WIB',
  },
  {
    name: 'Crewing Department',
    icon: Users,
    email: 'crewing@rbn-group.com',
    phone: '+62 31 8000 0002',
    whatsapp: '6281234567892',
    desc: 'Seafarer applications, certification, officer placement, and cadet programs.',
    hours: 'Mon–Fri 08:00–16:00 WIB',
  },
  {
    name: 'Corporate & General',
    icon: Building2,
    email: 'ptrbn5758@gmail.com',
    phone: '+62 31 8000 0000',
    whatsapp: '6281234567890',
    desc: 'Business partnerships, media inquiries, general corporate correspondence.',
    hours: 'Mon–Fri 08:00–17:00 WIB',
  },
]

// ── Input component ──────────────────────────────────────────────────────────
function FormField({
  id, label, required, error, children,
}: {
  id: string; label: string; required?: boolean; error?: string; children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-navy-800 dark:text-surface-200">
        {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <span className="text-xs text-red-500" role="alert" aria-live="polite">{error}</span>}
    </div>
  )
}

const inputClass = "w-full h-11 px-4 text-sm rounded-lg bg-surface-50 dark:bg-navy-900 border border-surface-200 dark:border-navy-700 text-navy-800 dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
const selectClass = cn(inputClass, "appearance-none cursor-pointer")

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  return (
    <m.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </m.div>
  )
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Contact form submitted:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <SEO
        title="Contact Us — Shipping Inquiries & RFQ"
        description="Contact PT. Pelayaran Nasional Radhika Bahari Nusantara. Submit cargo shipping inquiries, request freight quotes, or visit our Surabaya headquarters."
        canonical="/contact"
        keywords="contact PT RBN, shipping inquiry Surabaya, cargo quote Indonesia, maritime contact, chartering Indonesia"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        badge="Get In Touch"
        title="Contact Our Team"
        description="Our chartering desk, crewing department, and corporate office are ready to assist you. Respond within 4 business hours."
        backgroundImage="/gallery/lcu-docked.jpg"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        ariaLabel="Contact page hero banner"
      />

      {/* ── Department Cards ── */}
      <section className="bg-surface-50 dark:bg-navy-950 border-b border-border py-12" aria-label="Department contacts">
        <Container>
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEPARTMENTS.map(({ name, icon: Icon, email, phone, whatsapp, desc, hours }) => (
              <m.div key={name} variants={fadeUp}>
                <Card className="h-full bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-700 shrink-0">
                        <Icon className="size-5 text-navy-700 dark:text-gold-400" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-sm text-navy-800 dark:text-white leading-snug">{name}</h3>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{hours}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    <div className="space-y-2 text-xs">
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-navy-700 dark:text-surface-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                        <Phone className="size-3.5 text-gold-500" aria-hidden="true" /> {phone}
                      </a>
                      <a href={`mailto:${email}`} className="flex items-center gap-2 text-navy-700 dark:text-surface-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                        <Mail className="size-3.5 text-gold-500" aria-hidden="true" /> {email}
                      </a>
                      <a
                        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Halo ${name} PT. RBN, saya ingin menanyakan informasi lebih lanjut.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-medium"
                      >
                        <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Main Contact Section ── */}
      <Section spacing="xl" aria-label="Contact information and inquiry form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* ── Left Column: Office Info + Map ── */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="border-none shadow-card bg-white dark:bg-navy-800">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <SectionLabel>Corporate Office</SectionLabel>
                    <h2 className="font-display font-extrabold text-navy-800 dark:text-white text-xl">
                      PT. Pelayaran Nasional Radhika Bahari Nusantara
                    </h2>
                  </div>

                  <ul className="space-y-5" aria-label="Official contact details">
                    <li className="flex items-start gap-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 dark:bg-navy-700/50 dark:text-gold-400 shrink-0">
                        <MapPin className="size-5" aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Address</p>
                        <p className="text-sm text-navy-800 dark:text-surface-100 leading-relaxed">
                          Jl. Penjaringan Asri XV PS IC No. 34, Kel. Penjaringan Sari, Kec. Rungkut<br />
                          SURABAYA - 60297, Jawa Timur, Indonesia
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 dark:bg-navy-700/50 dark:text-gold-400 shrink-0">
                        <Phone className="size-5" aria-hidden="true" />
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone</p>
                        <a href="tel:+62318000000" className="block text-sm text-navy-800 dark:text-surface-100 hover:text-gold-500 transition-colors font-medium">
                          +62 31 8000 0000 (Main Office)
                        </a>
                        <a href="tel:+62318000001" className="block text-sm text-navy-800 dark:text-surface-100 hover:text-gold-500 transition-colors font-medium">
                          +62 31 8000 0001 (Chartering Desk)
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 dark:bg-navy-700/50 dark:text-gold-400 shrink-0">
                        <Mail className="size-5" aria-hidden="true" />
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                        <a href="mailto:ptrbn5758@gmail.com" className="block text-sm text-navy-800 dark:text-surface-100 hover:text-gold-500 transition-colors font-medium">
                          ptrbn5758@gmail.com
                        </a>
                        <a href="mailto:chartering@rbn-group.com" className="block text-sm text-navy-800 dark:text-surface-100 hover:text-gold-500 transition-colors font-medium">
                          chartering@rbn-group.com
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 dark:bg-navy-700/50 dark:text-gold-400 shrink-0">
                        <Clock className="size-5" aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Business Hours</p>
                        <div className="text-sm text-navy-800 dark:text-surface-100 space-y-1">
                          <p>Monday — Friday: 08:00 – 17:00 WIB</p>
                          <p>Saturday: 08:00 – 13:00 WIB</p>
                          <p className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                            <span className="size-2 rounded-full bg-emerald-500 inline-block" aria-hidden="true" /> Emergency Line: 24/7
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/6281234567890?text=Halo+PT.+RBN,+saya+ingin+menanyakan+informasi+layanan+pengiriman."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white hover:bg-[#1fba58] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>

              {/* Embedded Google Maps */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated border border-surface-200 dark:border-navy-700" aria-label="Office location on Google Maps">
                <iframe
                  src="https://maps.google.com/maps?q=Jl.+Penjaringan+Asri+XV,+Surabaya,+Jawa+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="PT. Pelayaran Nasional Radhika Bahari Nusantara — Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.2]"
                />
                <div className="absolute bottom-4 left-4">
                  <a
                    href="https://maps.google.com/?q=Jl.+Penjaringan+Asri+XV+PS+IC+No.+34,+Surabaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white dark:bg-navy-800 px-3 py-1.5 text-xs font-semibold text-navy-800 dark:text-white shadow-md hover:bg-surface-50 dark:hover:bg-navy-700 transition-colors border border-surface-200 dark:border-navy-700"
                  >
                    <MapPin className="size-3.5 text-gold-500" aria-hidden="true" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right Column: Enhanced Form ── */}
            <div className="lg:col-span-7">
              <Card className="border-none shadow-card bg-white dark:bg-navy-800 h-full">
                <CardContent className="p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                    >
                      <div className="flex size-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <CheckCircle2 className="size-10" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-extrabold text-navy-800 dark:text-white text-2xl">Inquiry Received!</h3>
                      <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
                        Thank you for contacting PT. Pelayaran Nasional Radhika Bahari Nusantara. Our team will review your inquiry and respond within 4 business hours.
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline" size="md">
                        Send Another Inquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                      <div className="space-y-1 mb-6">
                        <h2 className="font-display font-extrabold text-navy-800 dark:text-white text-xl">Shipping Inquiry / RFQ</h2>
                        <p className="text-sm text-muted-foreground">Complete this form to request a freight quote or submit a general inquiry.</p>
                        <Badge variant="ghost" className="text-[11px] bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0 mt-1">
                          Responds within 4 business hours
                        </Badge>
                      </div>

                      {/* Name + Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField id="name" label="Full Name" required error={errors.name?.message}>
                          <input id="name" type="text" placeholder="Your full name" {...register('name')} aria-required="true" aria-invalid={errors.name ? 'true' : 'false'} className={inputClass} />
                        </FormField>
                        <FormField id="company" label="Company Name" required error={errors.company?.message}>
                          <input id="company" type="text" placeholder="PT. / CV. / Your company" {...register('company')} aria-required="true" aria-invalid={errors.company ? 'true' : 'false'} className={inputClass} />
                        </FormField>
                      </div>

                      {/* Email + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField id="email" label="Email Address" required error={errors.email?.message}>
                          <input id="email" type="email" placeholder="you@company.com" {...register('email')} aria-required="true" aria-invalid={errors.email ? 'true' : 'false'} className={inputClass} />
                        </FormField>
                        <FormField id="phone" label="Phone / WhatsApp" required error={errors.phone?.message}>
                          <input id="phone" type="tel" placeholder="+62 8xx xxxx xxxx" {...register('phone')} aria-required="true" aria-invalid={errors.phone ? 'true' : 'false'} className={inputClass} />
                        </FormField>
                      </div>

                      {/* Department + Service Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField id="department" label="Department" required error={errors.department?.message}>
                          <select id="department" {...register('department')} aria-required="true" aria-invalid={errors.department ? 'true' : 'false'} className={selectClass}>
                            <option value="">Select department…</option>
                            <option value="chartering">Chartering & Commercial</option>
                            <option value="operations">Port Operations</option>
                            <option value="crewing">Crewing Department</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </FormField>
                        <FormField id="service_type" label="Service Type" required error={errors.service_type?.message}>
                          <select id="service_type" {...register('service_type')} aria-required="true" aria-invalid={errors.service_type ? 'true' : 'false'} className={selectClass}>
                            <option value="">Select service…</option>
                            <option value="general-cargo">General Cargo Shipping</option>
                            <option value="bulk-cargo">Bulk Cargo Transport</option>
                            <option value="heavy-lift">Oversized / Heavy-Lift</option>
                            <option value="lcu">LCU Archipelago Logistics</option>
                            <option value="ferry">Passenger & Vehicle Ferry</option>
                            <option value="port-agency">Port Agency Services</option>
                            <option value="charter">Full Vessel Charter</option>
                            <option value="other">Other Inquiry</option>
                          </select>
                        </FormField>
                      </div>

                      {/* Cargo type + Subject */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField id="cargo_type" label="Cargo Type (Optional)">
                          <input id="cargo_type" type="text" placeholder="e.g. Coal, Machinery, FMCG" {...register('cargo_type')} className={inputClass} />
                        </FormField>
                        <FormField id="subject" label="Subject" required error={errors.subject?.message}>
                          <input id="subject" type="text" placeholder="Brief inquiry topic" {...register('subject')} aria-required="true" aria-invalid={errors.subject ? 'true' : 'false'} className={inputClass} />
                        </FormField>
                      </div>

                      {/* Message */}
                      <FormField id="message" label="Message / Detail" required error={errors.message?.message}>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Describe your cargo, route, volume, and timeline. The more detail you provide, the more accurate our quote will be."
                          {...register('message')}
                          aria-required="true"
                          aria-invalid={errors.message ? 'true' : 'false'}
                          className="w-full p-4 text-sm rounded-lg bg-surface-50 dark:bg-navy-900 border border-surface-200 dark:border-navy-700 text-navy-800 dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors resize-none"
                        />
                      </FormField>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        Send Inquiry
                        <Send className="size-4 ml-1" aria-hidden="true" />
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy" className="underline hover:text-navy-800 dark:hover:text-white transition-colors">Privacy Policy</a>.
                        We do not share your information with third parties.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
