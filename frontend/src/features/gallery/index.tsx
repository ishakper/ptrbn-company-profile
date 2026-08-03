import { useState, useEffect } from 'react'
import { fetchGalleryItems, type GalleryItem } from '@/services/gallery'

const CATEGORIES = [
  { value: 'all', label: 'All Media' },
  { value: 'fleet', label: 'Our Fleet' },
  { value: 'operations', label: 'Operations' },
  { value: 'activities', label: 'Activities' },
  { value: 'csr', label: 'CSR & Education' },
  { value: 'management', label: 'Management' },
]

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)

  // Fetch media items on load or filter change
  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const catFilter = selectedCategory === 'all' ? undefined : selectedCategory
      const data = await fetchGalleryItems(catFilter, searchQuery || undefined)
      setItems(data)
      setLoading(false)
    }
    loadData()
  }, [selectedCategory, searchQuery])

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1)
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, items])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsZoomed(false)
    document.body.style.overflow = 'hidden' // Lock background scrolling
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    setIsZoomed(false)
    document.body.style.overflow = '' // Restore scrolling
  }

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null || items.length === 0) return
    let newIndex = lightboxIndex + direction
    if (newIndex < 0) newIndex = items.length - 1
    if (newIndex >= items.length) newIndex = 0
    setLightboxIndex(newIndex)
    setIsZoomed(false)
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-950 pt-28 pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-600 dark:text-gold-400 text-sm font-semibold tracking-wider uppercase">
            Corporate Media Gallery
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight sm:text-5xl">
            Our Vessels, Operations & Activities
          </h1>
          <p className="mt-4 text-lg text-navy-600 dark:text-navy-300">
            Explore authentic photographic documentation of PT. Pelayaran Nasional Radhika Bahari Nusantara serving Indonesia's maritime logistics network.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-slate-200 dark:border-navy-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-navy-800 dark:bg-gold-500 text-white dark:text-navy-950 shadow-md transform -translate-y-0.5'
                    : 'bg-white dark:bg-navy-900 text-navy-700 dark:text-navy-300 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder-slate-400 dark:placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-gold-500 transition-all duration-300"
            />
            <div className="absolute left-3.5 top-2.5 text-slate-400 dark:text-navy-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Media Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3, 4, 5].map((idx) => (
              <div key={idx} className="bg-slate-200 dark:bg-navy-900 h-64 rounded-xl"></div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-navy-800">
            <svg className="mx-auto h-12 w-12 text-slate-400 dark:text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-navy-900 dark:text-white">No images found</h3>
            <p className="mt-2 text-sm text-navy-500 dark:text-navy-400">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          /* Image Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200/60 dark:border-navy-800/80 cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo container */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-navy-950">
                  <img
                    src={item.thumbnail_url}
                    alt={item.alt_text}
                    loading="lazy"
                    decoding="async"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                  />
                </div>

                {/* Card description overlay */}
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    {item.categories.map((c) => (
                      <span key={c} className="text-[10px] font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white line-clamp-1 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy-600 dark:text-navy-400 line-clamp-2">
                    {item.caption}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between text-xs text-navy-400 dark:text-navy-500 border-t border-slate-100 dark:border-navy-800 pt-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </span>
                    <span>{item.photographer}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox / Fullscreen Overlay */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="absolute left-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-40 cursor-pointer"
            aria-label="Previous Image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="absolute right-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-40 cursor-pointer"
            aria-label="Next Image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Lightbox Content Container */}
          <div 
            className="w-full max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden max-h-[70vh] lg:max-h-[80vh]">
              <img
                src={items[lightboxIndex].large_url}
                alt={items[lightboxIndex].alt_text}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className={`max-w-full max-h-[60vh] lg:max-h-[75vh] object-contain transition-transform duration-300 ease-out select-none pointer-events-none ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                }`}
                style={{ pointerEvents: 'auto' }}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              
              {/* Zoom tooltip helper */}
              <div className="absolute bottom-2 bg-black/60 px-3 py-1 rounded text-white/80 text-xs pointer-events-none">
                {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
              </div>
            </div>

            {/* Sidebar metadata */}
            <div className="w-full lg:w-80 text-white bg-navy-900/60 p-6 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">
                {items[lightboxIndex].categories.join(' · ')}
              </span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                {items[lightboxIndex].title}
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {items[lightboxIndex].description}
              </p>

              <div className="mt-6 space-y-3.5 text-xs border-t border-white/10 pt-5 text-slate-400">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-semibold text-white">{items[lightboxIndex].location}</span>
                </div>
                <div className="flex justify-between">
                  <span>Photographer:</span>
                  <span className="font-semibold text-white">{items[lightboxIndex].photographer}</span>
                </div>
                <div className="flex justify-between">
                  <span>Copyright:</span>
                  <span className="font-semibold text-white">{items[lightboxIndex].copyright}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="text-[10px] text-slate-500 font-bold uppercase block mb-2">Keywords</span>
                <div className="flex flex-wrap gap-1.5">
                  {items[lightboxIndex].tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-slate-300">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
