# Content Collection Guide
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Required Asset Collection Checklist

This collection guide details every business asset that must be requested from the administration team at PT. Pelayaran Nasional Radhika Bahari Nusantara to populate production content for Sprint 5:

| Category | Specific Asset / File Required | Required Format | Target Location / Usage | Priority | Owner | Status |
|---|---|---|---|---|---|---|
| **Vessels** | Technical specifications datasheets for all 48 vessels (DWT, LOA, draft depth, IMO number). | CSV / Excel spreadsheet | `/fleet` inventory database table | **CRITICAL** | Technical Dept | Pending |
| **Vessels** | Scanned Biro Klasifikasi Indonesia (BKI) classification certificates. | PDF files | `/fleet/:slug` spec download | **HIGH** | Quality Assurance | Pending |
| **Services** | High-definition action photos of cargo operations (loading containers, bulk discharging). | WebP / PNG (min 1920px width) | `/services` category cards | **HIGH** | Marketing / Operations | Pending |
| **Services** | Detailed process workflow text (step-by-step loading and agency guidelines). | Word / PDF document | `/services` workflow timeline | **MEDIUM** | Logistics Dept | Pending |
| **Routes** | Verified list of active ports and estimated transit schedules. | Excel sheet | `/routes` table | **CRITICAL** | Operations Dept | Pending |
| **Legal** | Government licensing documentation (SIUPAL, Port clearance authority permits). | Scanned PDF files | `/about` compliance cards | **HIGH** | Corporate Legal | Pending |
| **SEO** | High-definition corporate photos for Open Graph preview card. | WebP / PNG (1200x630px) | `public/og-preview.png` | **MEDIUM** | Marketing | Pending |

---

## 2. Collection Guidelines for PT. RBN Staff

To ensure that collected media files maintain high visual quality:
1. **Images:** Photographs of ships and ports must be clear, bright daylight shots with no template filters or heavy color distortions.
2. **Documents:** PDF sheets must be compressed for web load optimization before uploading into the Filament Media Library.
3. **Data Formatting:** All numeric values (DWT, Gross Tonnage, LOA) must use metric standards (meters, metric tons).
