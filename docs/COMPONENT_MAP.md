# Reusable Component Map
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Catalog of Reusable UI Components

The following reusable React components under `frontend/src/` represent the unified design components:

| Component Name | Source File Path | Key Props Interface | Visual & Layout Responsibility |
|---|---|---|---|
| **HeroSection** | `components/ui/HeroSection.tsx` | `title: string`, `description: string`, `backgroundImage?: string` | Page-level banners (white/soft gray backgrounds). |
| **FeatureCard** | `components/ui/FeatureCard.tsx` | `title: string`, `description: string`, `icon: LucideIcon` | Services grid and compliance cards. |
| **FleetCard** | `components/ui/FleetCard.tsx` | `vessel: Vessel`, `onSpecView: (id: string) => void` | Grid item presenting individual vessel specs on mobile views. |
| **SpecificationTable**| `components/ui/SpecTable.tsx` | `headers: string[]`, `data: Record<string, any>[]` | Renders technical DWT, draft depth, and LOA grids. |
| **StatisticsSection** | `components/ui/StatsBlock.tsx` | `metrics: { label: string, value: number, suffix: string }[]` | Renders the 10% Light Gray statistics row with soft gold highlights. |
| **InquiryCTA** | `components/ui/InquiryCTA.tsx` | `title: string`, `buttonText: string`, `targetRoute: string` | Prompts B2B shippers to submit quote inquiries. |
| **Timeline** | `components/ui/Timeline.tsx` | `steps: { year: string, title: string, desc: string }[]` | Renders milestone chronologies. |
| **GalleryGrid** | `components/ui/GalleryGrid.tsx` | `images: { src: string, alt: string }[]` | Image grid layouts with full modal overlays. |
| **FAQAccordion** | `components/ui/FAQAccordion.tsx`| `items: { q: string, a: string }[]` | Accordion structure for shipping capability answers. |

---

## 2. Component Composition Design Pattern

To keep components modular and maintainable, nested layouts compose standard atomic components:

```
[InquiryCTA]
  ├── compose [Heading] (Level 2, primary navy)
  ├── compose [Button] (Variant secondary gold)
  └── compose [Container] (Size sm, padding xl)

[SpecificationTable]
  ├── compose [Badge] (Class indicators)
  └── compose [Button] (Link to specification sheet download)
```
