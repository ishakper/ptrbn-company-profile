# CMS Content Model & Filament Resource Mapping
## PT Radhika Bahari Nusantara — Filament v3 CMS

> Version: 1.0.0 | Last Updated: 2026-08-02 | Status: APPROVED

---

## 1. Overview

The RBN Group CMS is powered by **Filament v3** on top of Laravel 12. Public content is managed via structured database entities (PostgreSQL) and Filament Page Builders / Settings Resources.

---

## 2. Public Page to Filament Resource Mapping

| Public Page Route | Content Scope | Filament v3 Resource / Navigation | DB Entity / Model |
|---|---|---|---|
| `/` (Home) | Hero text, Stats, Featured Services, CTA, Partners | `App\Filament\Resources\Heroes\HeroResource` | `heroes` |
| `/about` | History, Vision/Mission, ISO Certs, Executive Team | `App\Filament\Resources\CompanyProfiles\CompanyProfileResource` | `company_profiles` |
| `/about` (Vision/Mission) | Vision & mission statements | `App\Filament\Resources\VisionMissions\VisionMissionResource` | `vision_missions` |
| `/about` (Core Values) | Core values items | `App\Filament\Resources\CoreValues\CoreValueResource` | `core_values` |
| `/about` (Management) | Executive Board profiles | `App\Filament\Resources\Management\ManagementResource` | `managements` |
| `/about` (Legalities) | SIUPAL, NIB, and custom permits | `App\Filament\Resources\LegalDocuments\LegalDocumentResource` | `legal_documents` |
| `/about` (Certifications) | ISO quality & ISM safety tags | `App\Filament\Resources\Certifications\CertificationResource` | `certifications` |
| `/services` | Service categories | `App\Filament\Resources\ServiceCategories\ServiceCategoryResource` | `service_categories` |
| `/services` | Service catalog, specifications, features | `App\Filament\Resources\Services\ServiceResource` | `services` |
| `/fleet` | Fleet classifications | `App\Filament\Resources\FleetCategories\FleetCategoryResource` | `fleet_categories` |
| `/fleet` | Vessel portfolio, capacities, IMO specs, status | `App\Filament\Resources\Vessels\VesselResource` | `vessels` |
| `/routes` | Domestic shipping routes, ports, schedules | `App\Filament\Resources\ShippingRouteResource` | `shipping_routes` |
| `/projects` | Case studies, cargo milestones | `App\Filament\Resources\ProjectResource` | `projects` |
| `/gallery` | Operation photos, fleet imagery | `App\Filament\Resources\MediaGalleryResource` | `media` |
| `/news` | Articles, press releases, company announcements | `App\Filament\Resources\ArticleResource` | `articles` |
| `/career` | Job openings, requirements, intake forms | `App\Filament\Resources\CareerOpeningResource` | `career_openings` |
| `/contact` | Office addresses, phones, emails, inquiries | `App\Filament\Pages\ManageContactSettings` | `settings` / `inquiries` |

---

## 3. Editable vs Non-Editable Content Matrix

### `/` (Home Page)
- **Editable via Filament:**
  - Hero headline, subtitle, primary/secondary CTA text & links
  - Counter stat numbers (islands, vessels, tonnage, experience years)
  - Selected featured services (relationship picker)
  - Partner company logos & labels
  - Latest news selection (auto-populated or manual override)
- **Non-Editable (Code Defined):**
  - Layout structure & grid system
  - Header & Footer layout
  - Scroll indicator animation & section spacing

### `/about` (About Us)
- **Editable via Filament:**
  - Company overview narrative & history timeline
  - Vision, Mission, and Core Values statements
  - ISO certifications list & badge images
  - Executive Leadership Board profiles (Name, Title, Bio, Photo)
- **Non-Editable (Code Defined):**
  - Timeline UI component layout
  - Card hover effects & animation sequences

### `/services` (Services)
- **Editable via Filament:**
  - Service title, slug, icon selector, badge label
  - Short summary & full HTML description
  - Feature bullet points list
  - Quote request modal form trigger toggle
- **Non-Editable (Code Defined):**
  - Service grid layout (4-column responsive)
  - Card border & shadow elevation styles

### `/fleet` (Fleet Portfolio)
- **Editable via Filament:**
  - Vessel Name, IMO Number, Registration Year, Vessel Type
  - Deadweight Tonnage (DWT), Gross Tonnage (GT), Length Overall (LOA)
  - Status (`Active`, `In Maintenance`, `Reserved`)
  - Featured Vessel Image & Gallery attachments
- **Non-Editable (Code Defined):**
  - Technical specification table layout
  - Filter drawer UI component

### `/routes` (Shipping Routes)
- **Editable via Filament:**
  - Origin Port, Destination Port, Transit Time (days)
  - Departure frequency (e.g. "Weekly every Tuesday")
  - Vessel assigned, Cargo types accepted (`Breakbulk`, `Container`, `Liquid`)
- **Non-Editable (Code Defined):**
  - Map display component / Route diagram layout

---

## 4. Reusable Content Block JSON Schemas (Filament Builder)

For dynamic page building, Filament's `Builder` field outputs standardized JSON blocks consumed by React frontend components:

### Block 1: Hero Banner Block (`hero_block`)
```json
{
  "type": "hero_block",
  "data": {
    "badge": "Est. 1999 · Surabaya, Indonesia",
    "headline": "Connecting Indonesia's Archipelago",
    "subtitle": "PT Radhika Bahari Nusantara delivers reliable shipping services...",
    "primary_button": { "label": "Explore Services", "url": "/services" },
    "secondary_button": { "label": "Contact Us", "url": "/contact" }
  }
}
```

### Block 2: Key Statistics Block (`stats_block`)
```json
{
  "type": "stats_block",
  "data": {
    "items": [
      { "label": "Islands Connected", "value": 500, "suffix": "+", "icon": "MapPin" },
      { "label": "Vessels Operated", "value": 48, "suffix": "", "icon": "Ship" },
      { "label": "Tons Cargo/Year", "value": 2400000, "suffix": "+", "icon": "Package" },
      { "label": "Years Experience", "value": 25, "suffix": "+", "icon": "Award" }
    ]
  }
}
```

### Block 3: Call-To-Action Block (`cta_block`)
```json
{
  "type": "cta_block",
  "data": {
    "title": "Ready to Ship with Indonesia's Best?",
    "description": "Get a custom logistics quote for your cargo needs.",
    "primary_btn_text": "Get a Quote",
    "primary_btn_url": "/contact",
    "phone_number": "+62318000000"
  }
}
```
