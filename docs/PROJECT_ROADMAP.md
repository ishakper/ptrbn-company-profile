# Project Implementation Roadmap
## PT Radhika Bahari Nusantara — Web Platform

> Version: 2.0.0 | Updated: 2026-08-02 | Status: IN PROGRESS

---

## Roadmap Architecture

The RBN Group platform follows a modular, non-overlapping enterprise sprint architecture:

```text
[Sprint 1: Backend Foundation] (COMPLETED)
       │
       ▼
[Sprint 2: CMS Foundation] (COMPLETED)
       │
       ▼
[Sprint 3: Public Website Foundation] (COMPLETED)
       │
       ▼
[Sprint 3.5: Design System & CMS Mapping] (COMPLETED)
       │
       ▼
[Sprint 4: Corporate Identity Module] (COMPLETED)
       │
       ▼
[Sprint 5: Services & Fleet Portfolio Module] (UPCOMING)
       │
       ▼
[Sprint 6: Shipping Routes & Projects Module] (UPCOMING)
       │
       ▼
[Sprint 7: News, Media Gallery & Careers Module] (UPCOMING)
       │
       ▼
[Sprint 8: Contact, Quotations & B2B Inquiry Module] (UPCOMING)
```

---

## Detailed Sprint Status Breakdown

### ✅ Sprint 1: Backend Foundation
- **Scope:** Clean Architecture, Repository/Service/DTO pattern, Laravel Sanctum, Spatie RBAC, Activity Logging, API Response Standard.
- **Status:** COMPLETED & APPROVED.

### ✅ Sprint 2: CMS Foundation
- **Scope:** Filament v3 installation, `/admin` panel setup, User/Role/Permission/Setting CRUD resources, Media Library, Audit Logs.
- **Status:** COMPLETED & APPROVED.

### ✅ Sprint 3: Public Website Foundation
- **Scope:** React 19, TypeScript, TailwindCSS v4, React Router v7, Framer Motion, TanStack Query, SEO, WCAG 2.2 AA, 11 route lazy loading layout.
- **Status:** COMPLETED & APPROVED.

### ✅ Sprint 3.5: Design System & CMS Mapping
- **Scope:** Design System spec, CMS Content Model, Content Architecture, Asset Guidelines, Component Library, ASCII Wireframes.
- **Status:** COMPLETED & APPROVED.

### ✅ Sprint 4: Corporate Identity Module
- **Scope:**
  - **Public Web:** Home Hero, Company Overview, About Us page, History Timeline, Vision & Mission, Core Values, Organization Structure, Board of Management, Company Legalities, Certifications, CTA section.
  - **CMS (Filament v3):** `HeroResource`, `CompanyProfileResource`, `VisionMissionResource`, `CoreValueResource`, `ManagementResource`, `LegalDocumentResource`, `CertificationResource`.
  - **Features:** Media Library, SEO metadata, Draft/Publish status, Soft Deletes, Activity Log, UUIDs, Slugs, Validation.
  - **Verification:** PHPUnit (11/11 tests pass), Laravel Pint (159 files fixed), npm lint (0 errors), tsc typecheck (0 errors), npm build (SUCCESS).
- **Status:** COMPLETED & APPROVED.

---

## Upcoming Business Modules

### ⏳ Sprint 5: Services & Fleet Portfolio Module
- **Scope:** Public `/services` & `/fleet` pages, Filament `ServiceResource` & `VesselResource`, vessel technical specs (DWT, LOA, GT, IMO number), status indicators.
- **Status:** IN PROGRESS (Phase 1 Database Layer & Phase 2 CMS & API Layer completed, migrated & seeded).

### ⏳ Sprint 6: Shipping Routes & Projects Module
- **Scope:** Public `/routes` & `/projects` pages, Filament `ShippingRouteResource` & `ProjectResource`, inter-island port route listings, cargo milestones.

### ⏳ Sprint 7: News, Media Gallery & Careers Module
- **Scope:** Public `/news`, `/gallery`, `/career` pages, Filament `ArticleResource`, `MediaGalleryResource`, `CareerOpeningResource`, job application PDF uploader.

### ⏳ Sprint 8: Contact, Quotations & B2B Inquiry Module
- **Scope:** Public `/contact` page with interactive quotation form, Filament `InquiryResource`, email notifications (Mailpit), rate limiting, recaptcha protection.
