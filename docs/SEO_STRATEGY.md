# SEO & Structured Data Strategy
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Meta Tags & Canonical Guidelines

To ensure maximum organic search presence, every public page inherits strict SEO head structures:

* **Title Structure:** `[Page Title] — PT. Pelayaran Nasional Radhika Bahari Nusantara` (under 60 characters to prevent search result clipping).
* **Meta Descriptions:** Direct, action-oriented summaries between 120 and 150 characters containing relevant search keywords (e.g. *shipping routes*, *cargo logistics*, *surabaya shipping company*).
* **Canonical Link:** Explicit self-referencing absolute canonical URLs to prevent duplicate indexing issues (e.g. `<link rel="canonical" href="https://rbn-group.com/services" />`).

---

## 2. Social Meta Integrations

We implement full metadata cards for social shares:

- **Open Graph (OG):** Facebook/LinkedIn sharing cards:
  - `og:type` set to `website` or `article`.
  - `og:image` maps to a transparent landscape banner image on a clean solid canvas.
- **Twitter Card:** Set to `summary_large_image` to render high-contrast visual blocks in user feeds.

---

## 3. Structured Data Schema (JSON-LD)

To help search engines index business assets, we inject structured data schemas directly:

### A. Organization Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "ShippingCompany",
  "name": "PT. Pelayaran Nasional Radhika Bahari Nusantara",
  "alternateName": "PT. RBN",
  "url": "https://rbn-group.com",
  "logo": "https://rbn-group.com/logo-badge.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Penjaringan Asri XV PS IC No. 34",
    "addressLocality": "Surabaya",
    "postalCode": "60297",
    "addressCountry": "ID"
  }
}
```

### B. Service Schema (Services Page)
Directly maps shipping categories to search indices, listing `PT. RBN` as the primary service provider.

### C. BreadcrumbList Schema
Enforces structured list index matching the user navigation path.

---

## 4. Alt Text & Slug Guidelines

* **SEO-friendly Slugs:** URL paths must be lowercase, alphanumeric, separated by hyphens (e.g. `/services/containerized-cargo-shipping`).
* **Image Alt Text:** Descriptive alt tags that avoid generic filenames (e.g. `alt="MV Radhika Progress bulk carrier ship classified by BKI loading dry cargo at Tanjung Perak Port"`).
