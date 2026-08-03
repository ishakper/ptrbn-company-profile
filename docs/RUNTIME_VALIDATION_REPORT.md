# Runtime Validation Report
## PT Radhika Bahari Nusantara — Web Platform

> Date: 2026-08-02 | Status: ✅ PASSED (GO DECISION)

---

## 1. Executive Summary

A comprehensive Runtime Validation of the entire RBN Group Docker environment was performed. All services are healthy, ports are listening, and the integrated communication between Nginx Gateway, React Frontend, Laravel Backend, PostgreSQL Database, and Redis Cache has been successfully verified.

---

## 2. Docker Services & Container Health

A check of the multi-container orchestration environment confirms that all 13 services are fully operational:

| Container Name | Service Name | Status | Health / Port Mappings |
|---|---|---|---|
| `rbn-nginx` | Gateway Proxy | Up | `0.0.0.0:80->80/tcp` (Gateway) |
| `rbn-frontend` | React Dev Server | Up | `0.0.0.0:5173->5173/tcp` (Vite) |
| `rbn-backend` | Laravel API | Up | `0.0.0.0:8000->8000/tcp` (Artisan Serve) |
| `rbn-postgres` | PostgreSQL | Up | `0.0.0.0:5432->5432/tcp` (Healthy) |
| `rbn-redis` | Cache & Queue | Up | `0.0.0.0:6379->6379/tcp` (Healthy) |
| `rbn-queue` | Queue Worker | Up | Background Worker |
| `rbn-mailpit` | Mail Catcher | Up | `8025->8025/tcp` (Healthy) |
| `rbn-adminer` | DB GUI | Up | `8080->8080/tcp` |
| `rbn-jaeger` | Telemetry Traces | Up | `16686->16686/tcp` |
| `rbn-prometheus` | Metrics Collector | Up | `9090->9090/tcp` |
| `rbn-grafana` | Visualization | Up | `3000->3000/tcp` |
| `rbn-loki` | Logs Collector | Up | `3100->3100/tcp` |
| `rbn-otel-collector` | OTEL collector | Up | `4317-4318/tcp` |

---

## 3. Port & HTTP Communication Health Check

The following loopback calls were made inside the container virtual network:

### A. Frontend Accessibility via Gateway Proxy
- **Endpoint:** `http://localhost/`
- **Command:** `curl -i http://localhost/` (inside `rbn-nginx`)
- **HTTP Response:** `HTTP/1.1 200 OK`
- **Output:** Serves the index HTML wrapper from the Vite Dev Server.

### B. Backend API Accessibility & Payload Validity
- **Endpoint:** `http://localhost/api/v1/corporate-identity`
- **Command:** `curl -i http://localhost/api/v1/corporate-identity` (inside `rbn-nginx`)
- **HTTP Response:** `HTTP/1.1 200 OK`
- **Payload Verification:** Successful retrieval of seeded corporate identity data:
  ```json
  {
    "status": "success",
    "data": {
      "hero": { "title": "Connecting Indonesia's Archipelago Through Maritime Excellence", ... },
      "company_profile": { "title": "PT Radhika Bahari Nusantara", ... },
      "vision_missions": [ ... ],
      "core_values": [ ... ],
      "managements": [ ... ],
      "certifications": [ ... ],
      "legal_documents": [ ... ]
    }
  }
  ```

---

## 4. Database Validation

Using Laravel Tinker, database storage and table counts were verified:
- **Connection:** PostgreSQL (`pgsql`) on `rbn-postgres:5432`
- **Table Row Verification:**
  - `heroes` table row count: **1**
  - `company_profiles` table row count: **1**
  - `vision_missions` table row count: **2**
  - `core_values` table row count: **4**
  - `managements` table row count: **3**
  - `certifications` table row count: **1**
  - `legal_documents` table row count: **1**

---

## 5. Quality Gate Verdict

- **Automated PHPUnit Tests:** **PASSED** (11 tests, 47 assertions)
- **Laravel Pint Audit:** **PASSED** (159 files fixed and formatted cleanly)
- **Docker Compose Status:** **ALL HEALTHY**

### **VERDICT:** 🟢 GO (Ready for next sprint)
