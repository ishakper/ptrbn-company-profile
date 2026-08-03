# Content Gap Report
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: DRAFT

---

## 1. Introduction & Objectives

As part of the engineering roadmap for the official corporate website of PT. Pelayaran Nasional Radhika Bahari Nusantara (RBN Group), this report identifies discrepancies between the current website implementation (Sprint 4: Corporate Identity) and the content requirements of a professional, enterprise-grade maritime shipping and logistics platform.

The objective of this report is to identify missing information, map content dependencies, and provide a prioritization plan for subsequent sprints.

---

## 2. Executive Summary of Gaps

At the end of Sprint 4, the platform successfully establishes the corporate branding and identity foundation (About Us overview, company legalities, core values, and executive profiles). However, the primary business segments—**Services**, **Fleet**, **Shipping Routes**, **Projects**, **News**, **Careers**, and **Legal Documentation**—exist only as stub pages or mockup components.

### Core Gaps Identified:
1. **CMS Modeling Gaps:** The database schema and Filament CMS panels lack data structures for vessels, services, shipping routes, news/press, and active job postings.
2. **Business Detail Gaps:** Critical operational parameters such as vessel cargo capacities (TEUs/DWT), classification societies (BKI), route voyage schedules, and client case studies are missing.
3. **Legal Compliance Gaps:** Required regulatory documents (Privacy Policy, Terms of Service, Cookie Policy) are not yet implemented.

---

## 3. Detailed Gap Analysis by Category

### A. Company Domain
- **Current State:** The `/about` page is fully integrated with database-seeded values for Management, Vision/Mission, Legal documents (SIUPAL), and ISO certifications.
- **Gaps:** Detailed history milestone stories, detailed profiles of middle management/heads of operations, and downloadable PDF legal document copies.

### B. Services Domain
- **Current State:** A single `/services` stub page is defined.
- **Gaps:** Individual detail pages for core services (Maritime Shipping, Cargo Logistics, Fleet Management, Port Agency), service advantages/differentiators, workflow steps (from order booking to cargo release), and region-specific operational capabilities.

### C. Fleet Domain
- **Current State:** A `/fleet` stub page mentioning a "48-vessel fleet" is defined.
- **Gaps:** A complete searchable/filterable catalog of vessels, detailed technical specifications per ship (Length Overall - LOA, Draft, Breadth, Gross Tonnage - GRT), cargo capacities (DWT, TEU layout), classification credentials (BKI - Biro Klasifikasi Indonesia), and live operational status (Active, In Dock, On Charter).

### D. Shipping Routes Domain
- **Current State:** A `/routes` stub page is defined.
- **Gaps:** Interactive route mapping, comprehensive port-of-call list (e.g. Tanjung Perak, Tanjung Priok, Soekarno-Hatta Makassar), transit times, and downloadable weekly/monthly voyage schedule documents.

### E. Projects Domain
- **Current State:** A `/projects` stub page is defined.
- **Gaps:** Client case studies (bulk cargo transport, out-of-gauge shipping), project durations, cargo highlights, and client testimonials.

### F. Careers Domain
- **Current State:** A `/career` stub page is defined.
- **Gaps:** Active job vacancy listings, application forms, descriptions of corporate culture (Work-Life balance, safety on board), list of employee benefits, and steps of the recruitment process.

### G. Legal Domain
- **Current State:** No legal pages exist in the routing layout.
- **Gaps:** Compliance texts for Indonesian digital operations: Privacy Policy (PDP Law compliance), Terms & Conditions, Cookie Policy, and Operational Disclaimer.
