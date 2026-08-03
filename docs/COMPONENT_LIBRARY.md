# Component Library & Integration Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara — Web Platform

> Version: 2.0.0 | Last Updated: 2026-08-02 | Status: APPROVED

---

## 1. Core Component Mapping & Design Alignment

This document details the visual style and state parameters applied to all reusable UI primitives in the RBN Group platform:

### 1. Card Component (`src/components/ui/card.tsx`)
- **B2B Sizing & Aesthetics:** White backgrounds, thin gray borders (`border border-surface-200`), and rounded-xl layouts (`rounded-xl`).
- **Interaction Constraints:** Pop elevation and translation offsets are removed. Hover triggers rely on soft shadow adjustments (`hover:shadow-md hover:border-surface-300`) over 200ms transitions.

### 2. Button Component (`src/components/ui/button.tsx`)
- **Hover Policy:** Scaling changes and animations on hover are disabled. Only active clicks leverage a tight scale transformation (`active:scale-[0.98]`).
- **Primary Navy:** `#1B365D` fill.
- **Secondary Gold:** `#C8A85A` fill (reserved for main CTAs).
- **Outline Variant:** Fine border line (`border border-navy-800`).

### 3. Layout Blocks (`src/components/ui/layout.tsx`)
- **Section Margin Rhythm:** Padding is unified using `--spacing-section: 7rem` spacing blocks to keep paragraphs readable and allow clean breathing margins.
- **Max Width Container:** Content limits mapped to standard max widths (`max-w-6xl`) for an editorial text layout.

---

## 2. Dynamic Integration Table

| component | Local Source | CMS Endpoint |
|---|---|---|
| `Header` | `components/layout/Header.tsx` | `/api/v1/settings/navigation` |
| `Footer` | `components/layout/Footer.tsx` | `/api/v1/settings/contact` |
| `HeroSection` | `features/home/index.tsx` | `/api/v1/pages/home` -> `/hero-ship.png` |
| `ServiceCard` | `components/ui/card.tsx` | `/api/v1/services` |
| `VesselCard` | `components/ui/card.tsx` | `/api/v1/vessels` |
