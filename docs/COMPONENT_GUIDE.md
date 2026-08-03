# Component Guide
## PT Radhika Bahari Nusantara — Frontend Component Library

> Sprint 3 | Version 1.0.0

---

## UI Primitives (`src/components/ui/`)

### Button (`button.tsx`)

```tsx
import { Button } from '@/components/ui/button'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary (Gold)</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="white">White (on dark bg)</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">Icon Only</Button>

// Rounded
<Button rounded="full">Pill</Button>
<Button rounded="lg">Large radius</Button>

// States
<Button loading>Loading…</Button>
<Button disabled>Disabled</Button>

// As child (Link)
<Button asChild variant="primary">
  <Link to="/contact">Get a Quote</Link>
</Button>
```

---

### Card (`card.tsx`)

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Service Title</CardTitle>
    <CardDescription>Brief description here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card body content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Badge (`badge.tsx`)

```tsx
import { Badge } from '@/components/ui/badge'

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Gold</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Inactive</Badge>
<Badge variant="ghost">Subtle</Badge>
```

---

### Skeleton (`skeleton.tsx`)

```tsx
import { Skeleton, SkeletonText, SkeletonCard } from '@/components/ui/skeleton'

// Single block
<Skeleton className="h-40 w-full rounded-xl" />

// Text placeholder (multi-line)
<SkeletonText lines={4} />

// Full card skeleton
<SkeletonCard />
```

---

### Layout Primitives (`layout.tsx`)

```tsx
import { Container, Section, Heading, Separator, SectionLabel } from '@/components/ui/layout'

// Container
<Container size="xl">    {/* sm | md | lg | xl | full */}
  <p>Page content</p>
</Container>

// Section
<Section spacing="lg">   {/* none | sm | md | lg | xl */}
  <Container>...</Container>
</Section>

// Heading
<Heading level={1} size="3xl" gradient>Main Title</Heading>
<Heading level={2}>Section Title</Heading>
<Heading level={3} size="md">Card Title</Heading>

// Section label (gold pill)
<SectionLabel>About Us</SectionLabel>

// Separator
<Separator />                           {/* horizontal */}
<Separator orientation="vertical" />   {/* vertical */}
```

---

### Feedback Components (`feedback.tsx`)

```tsx
import { Loading, EmptyState, ErrorState, Breadcrumb, Pagination } from '@/components/ui/feedback'

// Loading spinner
<Loading size="md" label="Loading cargo data…" />

// Empty state
<EmptyState
  title="No results found"
  description="Try adjusting your search filters."
  icon={<Package className="size-8 text-muted-foreground" />}
  action={<Button variant="outline">Clear Filters</Button>}
/>

// Error state
<ErrorState
  variant="error"    // error | warning | info | success
  title="Failed to load"
  description="Please retry"
  action={<Button>Retry</Button>}
/>

// Breadcrumb
<Breadcrumb items={[
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cargo Logistics' },
]} />

// Pagination
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => setPage(page)}
/>
```

---

### Modal (`modal.tsx`)

```tsx
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from '@/components/ui/modal'

<Modal>
  <ModalTrigger asChild>
    <Button>Open Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Confirm Action</ModalTitle>
      <ModalDescription>Are you sure you want to proceed?</ModalDescription>
    </ModalHeader>
    <p>Modal body content here.</p>
    <ModalFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

---

### Drawer (`drawer.tsx`)

```tsx
import { Drawer, DrawerTrigger, DrawerContent } from '@/components/ui/drawer'

<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent side="right">   {/* left | right */}
    <div className="p-6">
      <p>Drawer content here</p>
    </div>
  </DrawerContent>
</Drawer>
```

---

## Common Components (`src/components/common/`)

### SEO (`SEO.tsx`)

```tsx
import { SEO } from '@/components/common/SEO'

// On every page
<SEO
  title="About Us"
  description="Learn about PT Radhika Bahari Nusantara's 25+ years of maritime expertise."
  canonical="/about"
  type="website"    // website | article
  noindex={false}
/>
```

---

### ErrorBoundary (`ErrorBoundary.tsx`)

```tsx
import { ErrorBoundary } from '@/components/common/ErrorBoundary'

// Wrap any component tree
<ErrorBoundary>
  <ServicesSection />
</ErrorBoundary>

// With custom fallback
<ErrorBoundary fallback={<p>Custom error UI</p>}>
  <DataGrid />
</ErrorBoundary>
```

---

### Loading Components (`PageLoader.tsx`)

```tsx
import { PageLoader, SectionLoader, SkeletonPage, RouteProgressBar } from '@/components/common/PageLoader'

// Route-level progress bar (place in layout)
<RouteProgressBar />

// Full page loader (Suspense fallback)
<PageLoader />

// Inline section
<SectionLoader label="Loading fleet data…" />

// Full page skeleton
<SkeletonPage />
```

---

## Layout Components (`src/components/layout/`)

### Header
Auto-configured. Reads from `useScrollPosition` and `useTheme`.
Scroll threshold: `60px` for solid background transition.

### Footer
Auto-configured. Updates `quickLinks`, `legalLinks`, `socialLinks` arrays.

### Navigation
Update `navItems` array in `Navigation.tsx` to add/remove pages.

---

## Hooks (`src/hooks/`)

```tsx
// Theme
import { useTheme } from '@/hooks/useTheme'
const { theme, isDark, toggle, setTheme } = useTheme()

// Scroll position
import { useScrollPosition } from '@/hooks/useScrollPosition'
const { y, isScrolled, isScrollingDown, scrollPercent } = useScrollPosition(60)

// Responsive
import { useBreakpoint, useIsMobile } from '@/hooks/useMediaQuery'
const isMobile = useIsMobile()
const isLg = useBreakpoint('lg')
```

---

## State Management (`src/store/`)

```tsx
import { useUIStore } from '@/store/ui.store'

const { isMobileMenuOpen, openMobileMenu, closeMobileMenu, toggleMobileMenu } = useUIStore()
```

---

## Animation Patterns

### Scroll-triggered section
```tsx
import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  )
}
```

### Page transition
Already handled by `PublicLayout.tsx` via `AnimatePresence`.

---

## Adding a New Page

1. Create `src/features/{page}/index.tsx`
2. Add route to `src/routes/index.tsx`
3. Add nav item to `src/components/layout/Navigation.tsx`
4. Add sitemap entry to `public/sitemap.xml`
5. Include `<SEO>` in the page component
