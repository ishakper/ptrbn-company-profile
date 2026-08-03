# Technology Stack Specifications: PT Radhika Bahari Nusantara

This document compiles the formal **Technology Stack Specifications, Versions, and Trade-offs Analysis** for the RBN Group web platform.

---

## 1. Frontend Technology Stack

### React
* **Purpose:** Single Page Application (SPA) UI framework.
* **Why Selected:** Component-based model and rendering speed.
* **Version:** 19
* **Alternative:** Vue 3, Angular.
* **Advantages:** Extensive library ecosystem, large developer pool.
* **Disadvantages:** Frequent core API updates can require refactoring.

### TypeScript
* **Purpose:** Strict typing layer for JavaScript.
* **Why Selected:** Enforces compile-time type safety.
* **Version:** 6.x
* **Alternative:** Vanilla ES6 JavaScript.
* **Advantages:** Catches code bugs early during development.
* **Disadvantages:** Requires build compilation steps.

### Vite
* **Purpose:** Next-generation frontend build tool.
* **Why Selected:** Fast development server startup and builds.
* **Version:** 8.x
* **Alternative:** Webpack, Turbopack.
* **Advantages:** Extremely fast Hot Module Replacement (HMR) and native plugin loading.
* **Disadvantages:** Less mature plugin ecosystem than Webpack.

### TailwindCSS
* **Purpose:** Utility-first CSS framework.
* **Why Selected:** Rapid UI styling and design system enforcement with `@tailwindcss/vite`.
* **Version:** 4.x
* **Alternative:** Bootstrap, Styled Components.
* **Advantages:** Zero-runtime CSS overhead, built-in design tokens.

### React Router
* **Purpose:** Declarative client-side routing.
* **Why Selected:** Standard routing library for React applications.
* **Version:** 7.x
* **Alternative:** TanStack Router.
* **Advantages:** Nested routes mapping and automatic code splitting via `React.lazy()`.
* **Disadvantages:** Migrations between major versions can require structural changes.

### Framer Motion & TanStack Query
* **Purpose:** UI animations (`framer-motion` v12) and async server-state management (`@tanstack/react-query` v5).
* **State Management:** Zustand for lightweight client state (mobile drawer, search state).
* **SEO & Head:** `react-helmet-async` for title templates and Open Graph tags.

---

## 2. Backend Technology Stack

### Laravel
* **Purpose:** Backend REST API and admin CMS framework.
* **Why Selected:** High security defaults, built-in ORM, and integrations.
* **Version:** 12
* **Alternative:** Symfony, Node.js (Express).
* **Advantages:** Rapid development, excellent documentation, and built-in queue/auth modules.
* **Disadvantages:** Can be slower than lightweight Go or Node runtimes under heavy concurrency.

### PHP
* **Purpose:** Core backend runtime programming language.
* **Why Selected:** Powering Laravel, low resource requirements.
* **Version:** 8.2
* **Alternative:** Node.js, Python, Go.
* **Advantages:** Fast execution with JIT and OPcache, strong object-oriented features.
* **Disadvantages:** Historically criticized for legacy inconsistencies (largely fixed in PHP 8+).

### Laravel Sanctum
* **Purpose:** Cookie-based session authentication.
* **Why Selected:** Prevents XSS-based token theft by using secure HttpOnly cookies.
* **Version:** v4.x
* **Alternative:** JWT Tokens (Firebase JWT, Tymon JWT).
* **Advantages:** Seamless integration with React SPAs, CSRF protection built-in.
* **Disadvantages:** Requires sharing domains or subdomain structures.

---

## 3. Database & Caching Stack

### PostgreSQL
* **Purpose:** Relational database storage.
* **Why Selected:** Advanced SQL features, transactional consistency, and performance.
* **Version:** 16
* **Alternative:** MySQL, MariaDB, Oracle.
* **Advantages:** Strong compliance, native UUID support, and JSONB fields.
* **Disadvantages:** Can require more tuning than MySQL under default configurations.

### Redis
* **Purpose:** Cache layer and background queue driver.
* **Why Selected:** Fast, in-memory data store.
* **Version:** 7
* **Alternative:** Memcached, RabbitMQ.
* **Advantages:** Sub-millisecond response latency, rich data structures.
* **Disadvantages:** In-memory storage is limited by the host's RAM capacity.

---

## 4. DevOps, Infrastructure & Telemetry Stack

### Docker & Compose
* **Purpose:** Containerization and orchestrations tool.
* **Why Selected:** Ensures consistent runtimes across development and production environments.
* **Version:** 3.8 (Compose Syntax)
* **Alternative:** Kubernetes.
* **Advantages:** Eliminates "works on my machine" issues.
* **Disadvantages:** Adds container management complexity.

### OpenTelemetry, Loki & Grafana
* **Purpose:** Application telemetry and logging.
* **Why Selected:** Open standards with minimal storage overhead.
* **Alternative:** Datadog, ELK Stack.
* **Advantages:** Cost-effective, single monitoring dashboard.
* **Disadvantages:** Requires initial setup and configuration.
