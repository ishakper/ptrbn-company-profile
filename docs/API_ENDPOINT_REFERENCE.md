# Public API Endpoint Reference
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLETED & EXPOSED

---

## 1. REST API Base URL

All endpoints are hosted relative to the prefix `/api/v1`. By default, endpoints returned are public (read-only) unless protected by Sanctum headers.

---

## 2. API Endpoint Catalog

### A. Service Categories Listing
* **URL:** `GET /api/v1/service-categories`
* **Parameters:** `search`, `status`
* **Response:** Collection of B2B service categories.

### B. Service Category Details
* **URL:** `GET /api/v1/service-categories/{slug}`
* **Response:** Detailed single service category object.

### C. Services Grid (Paginated)
* **URL:** `GET /api/v1/services`
* **Parameters:** `search`, `service_category_id`, `featured`, `status`, `sort`
* **Response:** Paginated list of transport services.

### D. Service details
* **URL:** `GET /api/v1/services/{slug}`
* **Response:** Detailed service object containing repeaters.

### E. Fleet Categories Listing
* **URL:** `GET /api/v1/fleet-categories`
* **Response:** Collection of categories grouping vessels.

### F. Vessels Inventory (Paginated)
* **URL:** `GET /api/v1/vessels`
* **Parameters:** `search`, `fleet_category_id`, `status`, `featured`
* **Response:** Paginated list of vessels with embedded technical specifications.

### G. Vessel Detail
* **URL:** `GET /api/v1/vessels/{slug}`
* **Response:** Individual vessel specs, drawings, and brochures.
