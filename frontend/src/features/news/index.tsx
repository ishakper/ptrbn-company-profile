import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import { Calendar, User, Tag, ArrowRight, Share2, Mail, ChevronRight } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/PageHero'
import { Container, Section, SectionLabel } from '@/components/ui/layout'
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

// ── News data ───────────────────────────────────────────────────────────────
const NEWS_ARTICLES = [
  {
    id: 'n-green-1',
    title: 'Pengoperasian KM. JATIM CETTAR: Inovasi Kapal Listrik Ramah Lingkungan di Marina Boom Banyuwangi',
    excerpt: 'PT. Pelayaran Nasional Radhika Bahari Nusantara mendukung program transportasi hijau pemerintah melalui pengoperasian KM. JATIM CETTAR, kapal penumpang bertenaga listrik dan panel surya di kawasan Marina Boom Banyuwangi.',
    category: 'Innovation',
    author: 'Corporate Communications & Sustainability',
    date: '2026-07-28',
    dateDisplay: '28 July 2026',
    image: '/gallery/km-jatim-cettar-sailing.jpg',
    featured: true,
    tags: ['Kapal Listrik', 'KM JATIM CETTAR', 'Marina Boom Banyuwangi', 'Green Maritime'],
    readTime: '5 min read',
  },
  {
    id: 'n1',
    title: 'RBN Group Expands Eastern Indonesia Route Network with 4 New LCU Vessels',
    excerpt: 'PT. Pelayaran Nasional Radhika Bahari Nusantara announces a significant fleet expansion with the addition of four new Landing Craft Utility (LCU) vessels dedicated to Eastern Indonesia outer island logistics, strengthening our connectivity to Maluku and Papua.',
    category: 'Company',
    author: 'Corporate Communications',
    date: '2026-07-15',
    dateDisplay: '15 July 2026',
    image: '/gallery/gandha-nusantara-docked-ramp.jpg',
    featured: true,
    tags: ['Fleet Expansion', 'Eastern Indonesia', 'LCU', 'Papua'],
    readTime: '4 min read',
  },
  {
    id: 'n2',
    title: 'New Cargo Vessel MV Nusantara Sejahtera Joins the RBN Fleet',
    excerpt: 'We are proud to announce the addition of MV Nusantara Sejahtera, a 3,800 DWT general cargo carrier, to our operational fleet. The vessel will serve the Java–Sulawesi corridor.',
    category: 'Fleet',
    author: 'Fleet Operations Division',
    date: '2026-06-08',
    dateDisplay: '8 June 2026',
    image: '/gallery/drydock-inspection.jpg',
    featured: false,
    tags: ['New Vessel', 'General Cargo', 'Fleet'],
    readTime: '3 min read',
  },
  {
    id: 'n3',
    title: 'PT. RBN Successfully Achieves ISO 9001:2015 Re-Certification for Maritime Operations',
    excerpt: 'Following a rigorous external audit, PT. Pelayaran Nasional Radhika Bahari Nusantara has successfully renewed its ISO 9001:2015 certification, demonstrating continued commitment to quality management excellence.',
    category: 'Award',
    author: 'Quality Management Team',
    date: '2026-05-20',
    dateDisplay: '20 May 2026',
    image: '/gallery/crew-deck.jpg',
    featured: false,
    tags: ['ISO 9001', 'Certification', 'Quality'],
    readTime: '3 min read',
  },
  {
    id: 'n4',
    title: 'RBN Group Receives Best Domestic Shipper Award at Indonesia Maritime Forum 2026',
    excerpt: 'At the annual Indonesia Maritime Forum, PT. Pelayaran Nasional Radhika Bahari Nusantara was honored with the Best Domestic Shipper Award for outstanding contributions to inter-island logistics.',
    category: 'Award',
    author: 'Corporate Communications',
    date: '2026-04-10',
    dateDisplay: '10 April 2026',
    image: '/gallery/yankes-bergerak-banner.jpg',
    featured: false,
    tags: ['Award', 'Maritime Forum', 'Recognition'],
    readTime: '2 min read',
  },
  {
    id: 'n5',
    title: 'Annual Drydock Safety Inspection Completed — Fleet Certified for 2026 Operations',
    excerpt: 'PT. RBN has successfully completed the annual drydock inspection and maintenance program for our primary fleet vessels, achieving full BKI classification renewal and ISM Code compliance.',
    category: 'Fleet',
    author: 'Technical & ISM Division',
    date: '2026-03-05',
    dateDisplay: '5 March 2026',
    image: '/gallery/drydock-inspection.jpg',
    featured: false,
    tags: ['Safety', 'Drydock', 'BKI', 'ISM'],
    readTime: '4 min read',
  },
  {
    id: 'n6',
    title: 'CSR: RBN Group Supports Maritime Education for East Java Students',
    excerpt: 'As part of our corporate social responsibility program, PT. RBN donated maritime simulation equipment and scholarship funds to the Sekolah Tinggi Ilmu Pelayaran Surabaya, supporting the next generation of Indonesian seafarers.',
    category: 'CSR',
    author: 'Corporate Social Responsibility Team',
    date: '2026-02-14',
    dateDisplay: '14 February 2026',
    image: '/gallery/km-jatim-cettar-activity.png',
    featured: false,
    tags: ['CSR', 'Education', 'Seafarers', 'Surabaya'],
    readTime: '3 min read',
  },
]

const CATEGORIES = ['All', 'Company', 'Fleet', 'Award', 'CSR']

const CATEGORY_COLORS: Record<string, string> = {
  Company: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-0',
  Fleet: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0',
  Award: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-400 border-0',
  CSR: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-0',
  Industry: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-0',
}

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

function ShareButtons({ title }: { title: string }) {
  const url = typeof window !== 'undefined' ? window.location.href : 'https://rbn-group.com/news'
  const encoded = encodeURIComponent(url)
  const titleEncoded = encodeURIComponent(title)

  return (
    <div className="flex items-center gap-2" aria-label="Share article">
      <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
        <Share2 className="size-3" aria-hidden="true" /> Share:
      </span>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encoded}&title=${titleEncoded}`}
        target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
        className="flex size-7 items-center justify-center rounded-full bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors text-xs font-bold">
        Li
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${encoded}&text=${titleEncoded}`}
        target="_blank" rel="noopener noreferrer" aria-label="Share on X/Twitter"
        className="flex size-7 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-navy-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-xs font-bold">
        X
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
        className="flex size-7 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors text-xs font-bold">
        Fb
      </a>
      <a href={`mailto:?subject=${titleEncoded}&body=Check this out: ${encoded}`}
        aria-label="Share via email"
        className="flex size-7 items-center justify-center rounded-full bg-surface-100 dark:bg-navy-700 text-muted-foreground hover:text-navy-800 dark:hover:text-white transition-colors">
        <Mail className="size-3.5" aria-hidden="true" />
      </a>
    </div>
  )
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const featuredArticle = NEWS_ARTICLES.find((a) => a.featured)!
  const filteredArticles = NEWS_ARTICLES.filter((a) => {
    if (a.featured) return false
    return selectedCategory === 'All' || a.category === selectedCategory
  })

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) setSubscribed(true)
  }

  return (
    <>
      <SEO
        title="News & Press Releases — PT. Pelayaran Nasional RBN"
        description="Latest news, press releases, fleet updates, award announcements, and CSR activities from PT. Pelayaran Nasional Radhika Bahari Nusantara."
        canonical="/news"
        keywords="PT RBN news, maritime news Indonesia, shipping company news, fleet updates Indonesia, maritime press release"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'News & Press', url: '/news' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        badge="Newsroom"
        title="Latest News & Press Releases"
        description="Stay updated with the latest fleet expansions, certifications, awards, and corporate milestones from PT. Pelayaran Nasional Radhika Bahari Nusantara."
        backgroundImage="/gallery/lcu-sailing.jpg"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'News' }]}
        ariaLabel="News page hero banner"
      />

      <Section spacing="xl" aria-label="News articles">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Main content ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Featured article */}
              <AnimatedSection>
                <motion.div variants={fadeUp}>
                  <SectionLabel className="mb-4">Featured Article</SectionLabel>
                  <Card className="overflow-hidden bg-white dark:bg-navy-800 border border-border shadow-elevated group">
                    <div className="aspect-[16/9] overflow-hidden bg-navy-950 relative">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                        loading="eager"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" aria-hidden="true" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="ghost" className={CATEGORY_COLORS[featuredArticle.category] ?? ''}>
                          {featuredArticle.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-7 space-y-4">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-gold-500" aria-hidden="true" />
                          {featuredArticle.dateDisplay}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="size-3.5 text-gold-500" aria-hidden="true" />
                          {featuredArticle.author}
                        </span>
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <h2 className="font-display font-bold text-xl sm:text-2xl text-navy-800 dark:text-white leading-snug">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{featuredArticle.excerpt}</p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {featuredArticle.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-surface-100 dark:bg-navy-700 text-muted-foreground">
                            <Tag className="size-3" aria-hidden="true" /> {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <Link
                          to={`/news/${featuredArticle.id}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
                          aria-label={`Read full article: ${featuredArticle.title}`}
                        >
                          Read Full Article <ChevronRight className="size-4" aria-hidden="true" />
                        </Link>
                        <ShareButtons title={featuredArticle.title} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>

              {/* Category filter */}
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter news by category">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                      selectedCategory === cat
                        ? 'bg-navy-800 text-white'
                        : 'bg-white dark:bg-navy-800 border border-border text-muted-foreground hover:border-navy-300 hover:text-navy-800 dark:hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Article grid */}
              <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <motion.div key={article.id} variants={fadeUp}>
                    <Card className="h-full group bg-white dark:bg-navy-800 border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                      <div className="aspect-[16/9] overflow-hidden bg-navy-950 relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                          loading="lazy"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="ghost" className={`text-[11px] ${CATEGORY_COLORS[article.category] ?? ''}`}>
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-5 space-y-3">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="size-3 text-gold-500" aria-hidden="true" />
                            {article.dateDisplay}
                          </span>
                          <span>· {article.readTime}</span>
                        </div>
                        <h3 className="font-display font-bold text-base text-navy-800 dark:text-white leading-snug line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <Link
                            to={`/news/${article.id}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-navy-700 dark:text-gold-400 hover:text-gold-600 transition-colors"
                            aria-label={`Read: ${article.title}`}
                          >
                            Read More <ArrowRight className="size-3" aria-hidden="true" />
                          </Link>
                          <ShareButtons title={article.title} />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatedSection>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Newsletter */}
              <Card className="bg-navy-800 text-white border-none shadow-elevated">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-display font-bold text-lg text-white">Stay Updated</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Subscribe to receive our latest news, fleet updates, and maritime industry insights.
                  </p>
                  {subscribed ? (
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-semibold">
                      <span>✓</span> You're subscribed! Thank you.
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                        aria-label="Email for newsletter subscription"
                        className="w-full h-10 px-3 text-sm rounded-lg bg-navy-700 border border-navy-600 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                      <Button type="submit" size="md" variant="secondary" className="w-full">
                        Subscribe
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Recent articles */}
              <Card className="bg-white dark:bg-navy-800 border border-border shadow-card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-display font-bold text-base text-navy-800 dark:text-white">Recent Articles</h3>
                  <div className="space-y-4 divide-y divide-border">
                    {NEWS_ARTICLES.slice(0, 4).map((article) => (
                      <div key={article.id} className="pt-3 first:pt-0">
                        <Badge variant="ghost" className={`text-[10px] mb-1 border-0 ${CATEGORY_COLORS[article.category] ?? ''}`}>
                          {article.category}
                        </Badge>
                        <Link
                          to={`/news/${article.id}`}
                          className="block text-xs font-semibold text-navy-800 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors leading-snug"
                        >
                          {article.title}
                        </Link>
                        <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                          <Calendar className="size-3" aria-hidden="true" /> {article.dateDisplay}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* All tags */}
              <Card className="bg-white dark:bg-navy-800 border border-border shadow-card">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-base text-navy-800 dark:text-white">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(NEWS_ARTICLES.flatMap((a) => a.tags))].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-surface-100 dark:bg-navy-700 text-muted-foreground hover:bg-navy-100 dark:hover:bg-navy-600 cursor-pointer transition-colors"
                      >
                        <Tag className="size-3" aria-hidden="true" /> {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
