# Index Optimization Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLIANT

---

## 1. Index Catalog by Table

To ensure sub-millisecond query performance under search loads, the following indexes have been defined:

| Table Name | Target Columns | Index Type | Strategic Query Optimization |
|---|---|---|---|
| **`service_categories`** | `slug` | `UNIQUE` | Fast single-row category landing lookup. |
| **`service_categories`** | `status` | `BTREE` | Filters out draft categories during public catalog fetches. |
| **`services`** | `slug` | `UNIQUE` | Resolves service detail pages via URL route bindings. |
| **`services`** | `service_category_id` | `FOREIGN` | Optimizes parent-child relationship fetches. |
| **`fleet_categories`** | `slug` | `UNIQUE` | Resolves fleet categories by slug. |
| **`vessels`** | `imo_number` | `UNIQUE` | Guarantees uniqueness for regulatory IMO registrations. |
| **`vessels`** | `fleet_category_id` | `FOREIGN` | Speeds up filtering ships by their parent vessel types. |
| **`fleet_specifications`** | `vessel_id` | `UNIQUE` | Direct 1-to-1 spec table joins. |

---

## 2. Advanced B2B Search Query Optimization

* **Vessel Search by Type & Status:** The catalog grid on `/fleet` filters ships dynamically by their operational status (`active`, `maintenance`, `charter`) and type. Defining index on `vessels.status` prevents full table scans.
* **Fuzzy Text Search:** Search parameters on vessel name and description are indexed using optimized SQL string matches.
