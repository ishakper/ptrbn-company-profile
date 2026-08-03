# Product Requirement Document (PRD): PT Radhika Bahari Nusantara

---

## 1. Executive Summary
This document defines the product requirements for the new digital platform of **PT Radhika Bahari Nusantara (RBN)**. The platform is structured as a decoupled web application: a high-performance **React 19 SPA Frontend** interacting with a secure **Laravel 12 REST API Backend**. 

It serves as the digital front for RBN's maritime fleet services, government pioneer routes (trayek perintis), humanitarian vessels (floating hospitals), B2B commercial charters, and crew recruitment.

* **Why Decoupled SPA?**
  * *Business Value:* Instant page transitions retain B2B prospects and provide an interactive navigation experience.
  * *Technical Value:* Separating the frontend Nginx static compiler from the Laravel database engine limits security vulnerability footprints.

---

## 2. Business Goals
* **Pioneer Tender Acquisition:** Win 3 new regional pioneer maritime transit tenders within 12 months by hosting audited vessel specs and certifications.
* **Commercial Growth:** Secure 15 new commercial vessel charter contracts by generating warm B2B inbound leads online.
* **Recruitment Efficiency:** Reduce deck and engine crew sourcing costs by 30% through a secure, direct career intake system.

---

## 3. Website Goals
* **Visual Route Interactive Checks:** Replace static route lists with an interactive map showing pioneer and commercial routes.
* **Compliance Transparency:** Provide secure whistleblower reporting and accessible corporate governance PDFs.
* **Seamless Responsive Design:** Support mobile-first execution, allowing government auditors to inspect vessel data on tablets and phones.

---

## 4. Target Users
* **Government Procurement Directors:** Sourcing pioneer transit operators (e.g., Kemenhub).
* **Industrial Shippers (MNCs):** Seeking custom cargo vessel charters.
* **Humanitarian NGO Coordinators:** Sourcing medical floating hospital operations.
* **Marine Crews / Engineers:** Applying for seafarer vacancies.

---

## 5. Feature List (Functional Requirements)

### FE-01: Interactive Shipping Routes Mapping (React + Leaflet)
* **Details:** Geolocation dashboard rendering RBN's active pioneer trayek routes and port links using SVG lines on an interactive map.

### FE-02: Vessel Specifications Catalog
* **Details:** Searchable gallery showing RBN's fleet (cargo ships, floating medical vessels). Displays specifications (deadweight tonnage, dimensions, status, class certificates).

### FE-03: Private Careers Intake (React Hook Form + Zod + Laravel)
* **Details:** Vacancies board allowing seafarers to upload resume PDFs securely. Files are routed to private storage directories.

### FE-04: Anonymous Whistleblower Reporting (AES-256)
* **Details:** Anonymous reporting form generating a tracking key, discarding connection IP addresses, and encrypting database fields at rest.

### FE-05: Filament Admin Panel (CMS)
* **Details:** Secure administrative portal to manage fleet, routes, vacancies, news, and document downloads.

---

## 6. Success Metrics

| Metric | Target | Verification Method |
| :--- | :--- | :--- |
| **First Contentful Paint** | < 0.6 seconds (Static assets cached) | Google Lighthouse Mobile Profile |
| **Time to Interactive** | < 1.2 seconds | WebDev Core Web Vitals Audit |
| **Lighthouse SEO Score** | 100/100 | Google Search Console Crawler |
| **Security Auditing** | A-Grade, Zero OWASP Vulnerabilities | OWASP ZAP Pentesting |
| **API Response Latency** | < 150ms for cached queries | Grafana Prometheus tracing |

---

## 7. Project Scope (In-Scope)
* React 19 Frontend SPA (TypeScript/Tailwind/Shadcn).
* Laravel 12 Backend API (Sanctum stateful cookie auth).
* Filament Administration CMS.
* Database Schema & Migrations for PostgreSQL.
* Docker Compose local and staging configurations.
* Multilingual system routing (EN/ID).

---

## 8. Out of Scope
* Live satellite telemetry vessel tracking (GPS coordinates are static mock updates).
* Direct passenger booking or passenger ticketing systems.
* Direct financial payment transaction gateways.

---

## 9. Timeline (18-Sprint Plan)
The development is structured into **18 distinct Sprints** spanning 12 weeks:
* **S0:** Environment Setup (Vite, Laravel, Docker Compose, Nginx).
* **S1-S2:** Auth & Dashboard CMS (Sanctum, Filament widgets).
* **S3-S4:** Company Profile & Services.
* **S5-S6:** Fleet Management & Shipping Routes.
* **S7-S9:** Projects, Gallery & News.
* **S10-S11:** Career & Compliance Documents.
* **S12-S14:** SEO, Security & Test execution.
* **S15-S17:** Deployments, Caching Optimizations, and Production Release.

---

## 10. Future Roadmap (Phase 2)
* Live telemetry integration displaying active GPS tracking of active vessels via API integration.
* Partner Portal allowing charterers to sign contracts and download cargo logs.

---

## 11. Risks & Mitigations

| Identified Threat Risk | Impact | Likelihood | Mitigation Action Strategy |
| :--- | :--- | :--- | :--- |
| **Vulnerable CV Uploads (Malicious Scripts)** | Critical | Medium | Verify file mime signatures on arrival, rename files, store outside public root directories. |
| **CORS / API Exploitation attempts** | High | High | Restrict Laravel CORS access limits strictly to frontend domains, deploy Cloudflare WAF. |
| **Lack of Translation Asset Deliveries** | Medium | High | Construct fallback translation configurations displaying standard English strings. |

---

## 12. Acceptance Criteria (Given-When-Then)

### AC-01: Geolocation Project Mapping (FE-01)
* **Given** a user navigates to `/divisions/infrastructure` or `/divisions/logistics`,
* **When** the page loads,
* **Then** the map component initializes, fetches coordinates from `/api/v1/projects`, and renders matching pins.
* **When** the user clicks on a project pin,
* **Then** an information modal opens presenting the project details and capability PDF download button.

### AC-02: Careers Resume Upload (FE-02)
* **Given** a user is completing the vacancy application form,
* **When** they attempt to upload a non-PDF file,
* **Then** the Zod validator displays "Only PDFs are allowed" and blocks submission.
* **When** they submit a valid PDF under 2MB,
* **Then** the API uploads the asset, deletes temp files, and triggers an HR notification.

---

## User Review & Approval Required

> [!IMPORTANT]
> Please review this complete Product Requirement Document (PRD) for **PT Radhika Bahari Nusantara**. Once approved, we will proceed to next SDLC configurations.
