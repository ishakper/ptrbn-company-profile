import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Camera, Users2, ArrowUpRight } from 'lucide-react'
import { Separator } from '@/components/ui/layout'
import { cn } from '@/lib/utils'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Rute', href: '/routes' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/rbn-group', icon: Users2 },
  { label: 'Instagram', href: 'https://instagram.com/rbn.group', icon: Camera },
  { label: 'Website', href: 'https://rbn-group.com', icon: Globe },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="bg-navy-900 text-surface-200 dark:bg-navy-950"
    >
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-md">
              <img src="/logo-landscape-transparent.png" alt="PT. Pelayaran Nasional Radhika Bahari Nusantara" className="h-12 sm:h-14 w-auto object-contain" />
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed max-w-sm mb-6">
              PT. Pelayaran Nasional Radhika Bahari Nusantara is Indonesia's trusted partner for domestic cargo logistics and maritime shipping solutions.
            </p>

            {/* Contact Info */}
            <ul className="space-y-3" aria-label="Contact information">
              <li className="flex items-start gap-3 text-sm text-surface-400">
                <MapPin className="size-4 text-gold-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Jl. Penjaringan Asri XV PS IC No. 34, Kel. Penjaringan Sari, Kec. Rungkut SURABAYA - 60297</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-gold-500 shrink-0" aria-hidden="true" />
                <a href="tel:+62318000000" className="text-surface-400 hover:text-white transition-colors">
                  +62 31 8000 0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-gold-500 shrink-0" aria-hidden="true" />
                <a href="mailto:ptrbn5758@gmail.com" className="text-surface-400 hover:text-white transition-colors">
                  ptrbn5758@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-surface-400 hover:text-gold-400 transition-colors flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
                  >
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter placeholder */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-surface-400 mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            {/* Newsletter form placeholder */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address for newsletter"
                className={cn(
                  'flex-1 rounded-lg bg-navy-800 border border-navy-700 px-3 py-2.5 text-sm text-white placeholder:text-surface-500',
                  'focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors',
                )}
              />
              <button
                type="button"
                aria-label="Subscribe to newsletter"
                className="rounded-lg bg-gold-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-gold-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                Go
              </button>
            </div>

            {/* Social links */}
            <div className="mt-6">
              <p className="text-xs font-medium text-surface-400 uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow RBN Group on ${label}`}
                    className="flex size-9 items-center justify-center rounded-lg bg-navy-800 border border-navy-700 text-surface-400 hover:text-gold-400 hover:border-gold-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="border-navy-800" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-500">
          <p>© {currentYear} PT. Pelayaran Nasional Radhika Bahari Nusantara. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-surface-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
