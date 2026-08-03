# Content Architecture & Page Wireframes
## PT Radhika Bahari Nusantara — Public Website

> Version: 1.0.0 | Last Updated: 2026-08-02 | Status: APPROVED

---

## 1. Information Architecture & Sitemap Tree

```text
RBN Group Public Portal (rbn-group.com)
├── / (Home Page)
├── /about (About Us)
│   ├── Leadership & Board
│   └── Certifications (ISO 9001:2015)
├── /services (Maritime Logistics Services)
├── /fleet (Vessel Portfolio & Specs)
├── /routes (Domestic Shipping Routes)
├── /projects (Cargo Milestones & Achievements)
├── /gallery (Operational Photo Gallery)
├── /news (Articles & Press Releases)
├── /career (Job Openings & Application Form)
├── /contact (Office Locations & Quotation Form)
└── /404 & /500 (Error Pages)
```

---

## 2. Page Wireframe Specifications

### Page 1: `/` (Home Page)
```text
+-------------------------------------------------------+
|                 [HEADER / NAVBAR]                     | Sticky 60px
+-------------------------------------------------------+
|                     [HERO]                            |
| [Badge: Est. 1999]                                    |
| H1: Connecting Indonesia's Archipelago...             |
| Subtitle: PT Radhika Bahari Nusantara delivers...     |
| [CTA: Explore Services]   [CTA: Contact Us]           |
| (Scroll Down Indicator)                               |
+-------------------------------------------------------+
|                 [STATISTICS BAR]                      |
| [500+ Islands] [48 Vessels] [2.4M Tons] [25 Years]    |
+-------------------------------------------------------+
|                 [ABOUT PREVIEW]                       |
| (Left: Narrative & ISO badge)  (Right: Ship Image)    |
+-------------------------------------------------------+
|                 [SERVICES PREVIEW]                    |
| 4-Column Card Grid:                                   |
| [Shipping] [Cargo Logistics] [Routes] [Fleet Mgmt]   |
+-------------------------------------------------------+
|                 [FLEET OVERVIEW]                      |
| (Left: 4 Type Cards Grid)  (Right: Spec Features)     |
+-------------------------------------------------------+
|                 [PARTNERS MARQUEE]                    |
| [Pelindo] [BUMN] [Dephub] [Pelayaran] [INSA]          |
+-------------------------------------------------------+
|                 [LATEST NEWS]                         |
| 3-Card Article Grid                                   |
+-------------------------------------------------------+
|                 [CALL TO ACTION]                      |
| H2: Ready to Ship with Indonesia's Best?              |
| [Get a Quote]   [Call Us Now]                         |
+-------------------------------------------------------+
|                 [FOOTER]                              |
+-------------------------------------------------------+
```

### Page 2: `/about` (About Us)
- **Header Banner:** Page Title "About Us", Breadcrumb (`Home / About Us`).
- **Section 1: Company History Narrative:** 25-year journey from Surabaya to nationwide logistics.
- **Section 2: Vision & Mission Cards:** 2 side-by-side elevated cards.
- **Section 3: Core Values Grid:** Safety, Integrity, Reliability, Innovation.
- **Section 4: ISO 9001:2015 & Compliance:** Accreditation badge details.
- **Section 5: Leadership Board:** 4-column profile grid (Photo, Name, Position).

### Page 3: `/services` (Services)
- **Header Banner:** Page Title "Our Services", Breadcrumb.
- **Section 1: Service Catalog:** 4 detailed feature cards with bulleted specs.
- **Section 2: Service Comparison Table:** Matrix comparing Cargo Types, Capacity, Lead Time.
- **Section 3: Quote Request Modal Trigger:** Sticky banner launching inquiry modal.

### Page 4: `/fleet` (Fleet Portfolio)
- **Header Banner:** Page Title "Vessel Fleet Portfolio", Filter Tabs (`All`, `Cargo`, `Container`, `Bulk`, `Tanker`).
- **Section 1: Vessel Grid:** 6-card grid with DWT, LOA, Year Built, and Status Badges.
- **Section 2: Maintenance & Safety Standards:** IMO compliance summary.

### Page 5: `/routes` (Shipping Routes)
- **Header Banner:** Page Title "Domestic Shipping Routes".
- **Section 1: Route Search & Filter:** Origin / Destination select dropdowns.
- **Section 2: Route Table / List:** Origin Port, Destination Port, Schedule, Transit Days.

### Page 6: `/projects` (Projects & Achievements)
- **Header Banner:** Page Title "Projects & Cargo Milestones".
- **Section 1: Project Case Studies Grid:** Heavy machinery transport, inter-island logistics projects.

### Page 7: `/gallery` (Media Gallery)
- **Header Banner:** Page Title "Operations & Fleet Gallery".
- **Section 1: Lightbox Photo Grid:** Categorized fleet and port operation photos.

### Page 8: `/news` (News & Press Releases)
- **Header Banner:** Page Title "News & Articles".
- **Section 1: Featured News Banner:** Primary headline story with full thumbnail.
- **Section 2: News Grid & Pagination:** 6-article grid with page controls.

### Page 9: `/career` (Career Opportunities)
- **Header Banner:** Page Title "Join Our Maritime Team".
- **Section 1: Culture & Benefits:** Why work at RBN Group.
- **Section 2: Job Openings List:** Position title, department, location, "Apply Now" trigger.

### Page 10: `/contact` (Contact Us)
- **Header Banner:** Page Title "Contact RBN Group".
- **Section 1: Office Info & Map Placeholder:** Surabaya HQ address, phone, email.
- **Section 2: Inquiry Form:** Name, Email, Phone, Service Interest, Message input fields.

---

## 3. SEO Metadata Strategy Per Page

| Page Route | Title Template | Meta Description | Open Graph Type | Schema.org Type |
|---|---|---|---|---|
| `/` | Home \| PT Radhika Bahari Nusantara | Indonesia's trusted shipping and domestic cargo logistics company based in Surabaya. Connecting 500+ islands. | `website` | `Organization` |
| `/about` | About Us \| RBN Group | Learn about PT Radhika Bahari Nusantara's 25-year history, vision, mission, and ISO certifications. | `website` | `Organization` |
| `/services` | Maritime Services \| RBN Group | Comprehensive shipping and domestic cargo logistics services across the Indonesian archipelago. | `website` | `Service` |
| `/fleet` | Vessel Fleet Portfolio \| RBN Group | Explore our modern fleet of 48 IMO-certified vessels serving domestic cargo routes across Indonesia. | `website` | `Product` |
| `/routes` | Domestic Shipping Routes \| RBN Group | View domestic shipping routes connecting Surabaya, Sumatra, Kalimantan, Sulawesi, and Papua. | `website` | `Service` |
| `/projects` | Project Milestones \| RBN Group | Discover key cargo logistics projects and maritime milestones completed by RBN Group. | `website` | `CreativeWork` |
| `/gallery` | Media Gallery \| RBN Group | Photo gallery showcasing fleet vessels, port operations, and logistics management. | `website` | `ImageGallery` |
| `/news` | News & Press Releases \| RBN Group | Latest announcements, fleet expansions, and maritime industry updates from RBN Group. | `website` | `NewsArticle` |
| `/career` | Career Opportunities \| RBN Group | Explore maritime career opportunities and job openings at PT Radhika Bahari Nusantara. | `website` | `JobPosting` |
| `/contact` | Contact Us \| RBN Group | Contact PT Radhika Bahari Nusantara in Surabaya for shipping quotes, inquiries, and customer support. | `website` | `ContactPage` |
