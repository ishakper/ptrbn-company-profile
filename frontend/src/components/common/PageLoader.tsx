import { useEffect, useRef } from 'react'
import NProgress from 'nprogress'
import { useNavigation } from 'react-router-dom'
import { Loading } from '@/components/ui/feedback'

/**
 * Route-level progress bar — shows NProgress bar during navigation.
 * Must be rendered inside RouterProvider context.
 */
export function RouteProgressBar() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 300 })
  }, [])

  useEffect(() => {
    if (isLoading) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [isLoading])

  return null
}

/**
 * Full-page centered loader for Suspense fallbacks.
 */
export function PageLoader() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-64 items-center justify-center">
          <img src="/logo-landscape-transparent.png" alt="PT. Pelayaran Nasional Radhika Bahari Nusantara" className="h-full w-auto object-contain animate-pulse" />
          {/* Outer spinning ring */}
          <div className="absolute -inset-2 rounded-2xl border-2 border-transparent border-t-secondary animate-spin" />
        </div>
        <div className="text-center">
          <p className="font-display font-bold text-primary text-sm tracking-widest uppercase">Loading</p>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">PT. Pelayaran Nasional Radhika Bahari Nusantara</p>
        </div>
      </div>
    </div>
  )
}

/**
 * Inline section loader.
 */
export function SectionLoader({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <Loading size="lg" label={label} />
    </div>
  )
}

/**
 * Full-page skeleton layout for route-level loading.
 */
export function SkeletonPage() {
  const navRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen" aria-hidden="true">
      {/* Header skeleton */}
      <div ref={navRef} className="h-16 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="h-8 w-40 rounded-md bg-muted animate-pulse" />
          <div className="hidden md:flex gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 rounded bg-muted animate-pulse" />
            ))}
          </div>
          <div className="h-10 w-28 rounded-lg bg-muted animate-pulse" />
        </div>
      </div>
      {/* Hero skeleton */}
      <div className="h-[70vh] bg-muted animate-pulse" />
      {/* Content skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-16 space-y-8">
        <div className="h-8 w-64 rounded-lg bg-muted animate-pulse mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Scroll-to-top utility component.
 */
export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return null
}
