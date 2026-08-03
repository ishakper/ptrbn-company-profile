# Performance Optimization Strategy
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Frontend Asset Loading Optimization

To satisfy the Lighthouse performance target of **>90**, we apply a combination of bundler configurations and asset delivery optimizations:

### A. Code Splitting & Dynamic Imports
- **Route-level Lazy Loading:** Page components are loaded dynamically via `React.lazy()`:
  ```tsx
  const FleetPage = React.lazy(() => import('@/features/fleet'))
  ```
- **Chunk Optimization:** Vite split-chunks vendor libraries (e.g. `react-vendor`, `motion-vendor`) to ensure initial bundle size remains below `150kB` (Gzipped).

### B. Image Compression & Modern Formats
- **Format Standard:** All image assets must be delivered in **WebP** or **AVIF** formats.
- **Srcset Rules:** Implement responsive images using `srcset` to avoid loading desktop-sized images on mobile screens.
- **Lazy Loading Attributes:** Apply `loading="lazy"` to all below-the-fold images to avoid parser blocks.

---

## 2. Server State Management & Caching

We utilize **TanStack Query (React Query)** to handle data fetching and minimize redundant network traffic:

* **Stale Time Configuration:** Set default query `staleTime` to `5 minutes` for stable assets (such as services lists and vessel fleets).
* **Cache Persistence:** Cache entries are persisted locally in memory and updated in the background using `refetchOnWindowFocus: false` to prevent visual flicker.
* **Prefetching Strategy:** Implement trigger prefetching on hovering header links (e.g. prefetching `/services` metadata when users hover over the Services menu).

---

## 3. Rendering Stability & DOM Size Controls

* **Virtualization:** For long listings (like the search inventory of 48 vessels on mobile screens), utilize simple virtualization patterns or dynamic pagination to maintain the total active DOM elements under `1500` nodes.
* **React.memo Optimization:** Wrap heavy card containers (e.g. `FleetCard`, `FeatureCard`) in `React.memo` to prevent redundant re-renders when other query states update.
