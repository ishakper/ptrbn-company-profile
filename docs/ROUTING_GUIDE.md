# Routing Guide
## PT Radhika Bahari Nusantara — React Router v7

---

## Router Architecture

Uses `createBrowserRouter` from React Router v7 with:
- Nested routes under `PublicLayout`
- Route-level code splitting via `React.lazy()`
- `Suspense` fallback with `SkeletonPage`
- Wildcard `*` catch-all → `NotFound` page

---

## Current Route Map

| Route | Lazy Module | Status |
|---|---|---|
| `/` | `features/home` | ✅ Full |
| `/about` | `features/about` | 🚧 Stub |
| `/services` | `features/services` | 🚧 Stub |
| `/fleet` | `features/fleet` | 🚧 Stub |
| `/routes` | `features/routes` | 🚧 Stub |
| `/projects` | `features/projects` | 🚧 Stub |
| `/gallery` | `features/gallery` | 🚧 Stub |
| `/news` | `features/news` | 🚧 Stub |
| `/career` | `features/career` | 🚧 Stub |
| `/contact` | `features/contact` | 🚧 Stub |
| `*` | `features/error/NotFound` | ✅ Full |

---

## Adding a New Route

### Step 1 — Create the page
```tsx
// src/features/company-profile/index.tsx
import { SEO } from '@/components/common/SEO'
import { Container, Section, Heading } from '@/components/ui/layout'

export default function CompanyProfilePage() {
  return (
    <>
      <SEO title="Company Profile" canonical="/company-profile" />
      <Section spacing="xl">
        <Container>
          <Heading level={1}>Company Profile</Heading>
        </Container>
      </Section>
    </>
  )
}
```

### Step 2 — Register in router
```tsx
// src/routes/index.tsx
const CompanyProfilePage = lazy(() => import('@/features/company-profile'))

// Add inside children array:
{ path: 'company-profile', element: <CompanyProfilePage /> }
```

### Step 3 — Add to navigation
```tsx
// src/components/layout/Navigation.tsx
// Add to navItems array:
{ label: 'Company Profile', href: '/company-profile' }
```

### Step 4 — Update sitemap
```xml
<!-- public/sitemap.xml -->
<url>
  <loc>https://rbn-group.com/company-profile</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Navigation Guard (Future)
For protected routes (e.g. admin area), create a `ProtectedRoute` wrapper:

```tsx
function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuthStore()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <>{children}</>
}
```

---

## Route-Based SEO Strategy

Each route must include a `<SEO>` component with unique:
- `title` — page-specific (e.g., "About Us")
- `description` — 150-160 characters, keyword-rich
- `canonical` — absolute path starting with `/`

Title template: `{title} | PT Radhika Bahari Nusantara`

---

## URL Conventions

- All lowercase, hyphen-separated
- No trailing slash
- Singular nouns for entities: `/service`, `/fleet`
- Plural for lists: `/services`, `/news`
- No ID in public routes (use slugs instead): `/news/vessel-announcement-2026`
