# Information Architecture
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Navigation Hierarchy

We use a flat, highly visible navigation system to maximize discoverability for B2B cargo shippers:

```
[Main Header]
 ├── / (Home)
 ├── /about (Company Profile, Management, Legalities)
 ├── /services (Shipping & Logistics Categories)
 ├── /fleet (Active Ships & Specifications)
 ├── /routes (Shipping Lanes & Voyage Schedules)
 ├── /news (Articles, Press Releases)
 ├── /career (Job Vacancies & Culture)
 └── /contact [PRIMARY CTA] (Quote & Inquiry Forms)
```

---

## 2. Parent-Child Page Relationships

To support rich details without overloading a single viewport, parent pages offer searchable catalogs while child pages focus on specialized technical parameters:

```
/services [Parent: Services Directory]
   └── /services/:slug [Child: Specialized Service Detail]
       (e.g., /services/bulk-cargo - details grab-bucket crane capacities)

/fleet [Parent: Fleet Inventory Catalog]
   └── /fleet/:slug [Child: Vessel spec datasheet]
       (e.g., /fleet/mv-nusantara-indah - details DWT, gross tonnage, BKI status)

/news [Parent: Article lists]
   └── /news/:slug [Child: Press release details]
```

---

## 3. Internal Linking Strategy

Our internal linking is designed as a conversion funnel:
1. **Homepage Hero:** Directs users to `/services` (Service Exploration) and `/contact` (Direct Call).
2. **Services Page:** Every service card links to `/services/:slug` (Specific Detail) and mentions compatible vessel classes on `/fleet`.
3. **Fleet Page:** Every vessel specs row links to its specific child `/fleet/:slug` datasheet, which contains a direct pre-filled "Inquire Cargo Space for this Ship" link leading to `/contact`.
4. **Header/Footer Navigation:** Accessible from all views.

---

## 4. Breadcrumb Structure

To keep path visibility clear, breadcrumbs follow a semantic hierarchical pattern:

* Home > Services > Dry Bulk Shipping (`/` > `/services` > `/services/dry-bulk`)
* Home > Fleet > MV Nusantara Indah (`/` > `/fleet` > `/fleet/mv-nusantara-indah`)
* Home > News > Route Expansion 2026 (`/` > `/news` > `/news/route-expansion-2026`)

---

## 5. Content Hierarchy

Every page uses a consistent top-to-bottom scan pattern:
1. **Eyebrow Tag / Section Label:** Categorizes the section (e.g. `Quality Control`).
2. **Primary Section Heading:** Clear, high-contrast title (`H2` level, 700 bold).
3. **Content Prose / Cards Grid:** Explanatory text paragraphs or white card specifications grid.
4. **Section CTA button:** Standardized primary navy or outline button to proceed.
