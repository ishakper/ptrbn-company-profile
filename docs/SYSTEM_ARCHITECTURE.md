# System Architecture: PT Radhika Bahari Nusantara

This document compiles the formal **System and Infrastructure Architecture Specifications** for the decoupled PT Radhika Bahari Nusantara web platform.

---

## 1. Executive & System Overview

### Executive Overview
PT Radhika Bahari Nusantara (RBN) is an archipelagic maritime shipping and cargo transit enterprise. This platform is designed to replace legacy paper-based tracking, PDF shipping routes, and manual B2B quotation workflows with a modern, high-performance web experience. 

### System Overview
The platform uses a decoupled SPA architecture:
* **Frontend:** A React 19 Single Page Application (SPA) styled with Tailwind CSS, built via Vite.
* **Backend:** A secure Laravel 12 REST API providing endpoints for vessel portfolios, career intakes, and whistleblower reports.
* **Administration:** Managed using Laravel Filament v3.

---

## 2. High-Level Architecture & Layered Diagram

```
+-------------------------------------------------------+
|                    Client Browser                     |
+-------------------------------------------------------+
                           |
                           v (Port 80/443: HTTPS)
+-------------------------------------------------------+
|                    Cloudflare CDN                     | (WAF Edge Security)
+-------------------------------------------------------+
                           |
                           v
+-------------------------------------------------------+
|                 Nginx Reverse Proxy                   | (SSL Termination)
+-------------------------------------------------------+
                 /                           \
                /                             \
               v                               v
+-----------------------+           +-------------------+
|  React Frontend SPA   |           | Laravel 12 API    |
|  (Static Nginx Host)  |           | (PHP 8.2-FPM Host)|
+-----------------------+           +---------+---------+
                                              |
                                              +----> [PostgreSQL Database]
                                              +----> [Redis Caching & Queue]
```

### Layered Architecture
1. **Presentation Layer:** React 19 SPA running in the client browser:
   * **State & Hooks:** Zustand for UI state, TanStack Query for server state, custom `useTheme` and `useScrollPosition` hooks.
   * **Design Tokens:** TailwindCSS v4 with brand variables (`--color-navy-*`, `--color-gold-*`).
   * **Routing:** React Router v7 nested layout (`PublicLayout`) with lazy-loaded route chunks (`React.lazy() + Suspense`).
   * **Accessibility:** Focus rings, WCAG 2.2 AA skip links, ARIA landmarks, `prefers-reduced-motion` compliance.
2. **Gateway Proxy Layer:** Nginx container routing public traffic to either static React builds or FastCGI PHP sockets.
3. **Business Logic Layer:** Laravel 12 API controllers routing queries to public endpoints and Filament v3 resources managing CMS operations.
4. **Data Access Layer:** Repository Pattern implementations binding contracts (e.g. ServiceRepositoryInterface) to Eloquent models on PostgreSQL.

---

## 3. Component & Docker Architecture

### Docker Container Layout
The platform runs inside a multi-container Docker environment:
* **`rbn-nginx`:** Gateway proxy routing web queries.
* **`rbn-frontend`:** Hosts compiled index, JS, and CSS files on Alpine Nginx.
* **`rbn-backend`:** Runs PHP 8.2-FPM, processing business API transactions.
* **`rbn-postgres`:** PostgreSQL 16 database.
* **`rbn-redis`:** Caching and queue engine.
* **`rbn-mailpit` & `rbn-adminer`:** Local developer tools.
* **Telemetry stack:** OpenTelemetry Contrib Collector, Jaeger, Prometheus, Loki, and Grafana.

---

## 4. System Flow Mappings

### A. Authentication Flow (Laravel Sanctum)
```
[React SPA] --(1. GET /sanctum/csrf-cookie)--> [Laravel API] (Sets CSRF cookie token)
[React SPA] --(2. POST /api/v1/auth/login)---> [Laravel API] (Validates credentials)
[Laravel API] --(3. Sets session cookie)------> [React SPA] (Stores state in Zustand)
```

### B. Authorization Flow
* Managed via Spatie policies at the database level.
* When an admin requests a CRUD action, the policy evaluates the role permissions cached in Redis.

### C. Logging & Observability Flow
* Promtail monitors Laravel's JSON logs and forwards them to **Grafana Loki**.
* OpenTelemetry Contrib Collector scrapes application traces from Laravel and maps them to **Jaeger** for review.

### D. Media Uploader Flow
* Files (e.g. resumes) are sent to the API, validated for MIME types, renamed to UUIDs, and saved in private directories.
* Public imagery is cached and served via Nginx.

### E. Deployment & Backup Flow
* Tagged releases (`vX.Y.Z`) trigger GitHub Actions pipelines to build and deploy containers.
* Daily `backup.sh` scripts run logical `pg_dump` dumps, GPG-encrypt them, and save the archives in a Cloudflare R2 bucket.

---

## 5. Scalability & Performance Strategy

* **Caching Strategy:** SQL query results for static database rows (e.g. ESG metrics, vessel registries) are cached in Redis for 24 hours.
* **Vite Manual Chunk Splitting:** Heavy libraries (e.g. Leaflet mapping) are compiled into standalone static vendor files to keep the main bundle light.
* **Database Indexing:**
  - B-Tree unique indexes on all slug columns (e.g. `services.slug`, `service_categories.slug`) speed up retrieval.
  - Multi-column indexes on `vessels(fleet_category_id, status)` optimization for vessel inventory search.
  - Cascade delete cascades mapped on foreign keys for integrity.

---

## 6. Architecture Decision Summary (ADR)

* **Decision:** Enforced **Laravel Sanctum cookie authentication** over JWT Bearer Tokens.
* **Why:** JWTs stored in `LocalStorage` are vulnerable to XSS attacks. Sanctum cookies use `HttpOnly` and `Secure` attributes, preventing JavaScript from reading session tokens.
* **Decision:** Enforced **UUIDv4 primary keys** over auto-incrementing integers.
* **Why:** Hides internal business data (e.g. total resumes received) and prevents ID enumeration attacks.

---

## 7. Risks & Recommendations
* **Risk:** Severe weather can affect the performance of real-time maps.
  * *Recommendation:* Implement client-side offline fallbacks that cache port coordinates locally.
* **Risk:** Uploading large resume PDFs can cause disk space issues.
  * *Recommendation:* Enforce strict file size limits (max 2MB) and configure S3 storage lifecycle rules to delete old applications.
