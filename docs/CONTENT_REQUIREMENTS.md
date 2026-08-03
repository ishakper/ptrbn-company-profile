# Content Requirements
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Services Page Content Data

To ensure maximum B2B credibility, the `/services` page requires the following realistic content models:

### A. Category 1: Containerized Cargo Shipping
* **Service Title:** Inter-island Container Logistics
* **Sub-headline:** Regular scheduled TEU container shipping connecting Indonesia's primary trade ports.
* **Core Specs:** 20ft & 40ft standard dry containers, open-top, flat-rack, reefers for refrigerated cargo.
* **Primary Route Network:** Surabaya (Tanjung Perak) to Jakarta, Makassar, and Medan.

### B. Category 2: Dry & Liquid Bulk Shipping
* **Service Title:** Bulk Cargo Logistics
* **Sub-headline:** Safe, efficient bulk cargo shipping for coal, ores, grains, cement, and agricultural products.
* **Core Specs:** Self-discharging bulk carriers, specialized grab-bucket cranes, zero-spill cargo holds.

### C. Category 3: Project Logistics & Heavy-Lift
* **Service Title:** Out-of-Gauge (OOG) & Project Cargo
* **Sub-headline:** Custom maritime logistics for oversized industrial machinery, mining trucks, and infrastructure steel beams.
* **Core Specs:** Multi-axle loading trailers, high-capacity onboard cranes, marine cargo insurance.

---

## 2. Fleet Page Content Data (48 Vessel Inventory Specs)

Every vessel entry must render realistic shipping parameters:

| Vessel Name | Vessel Type | Gross Tonnage (GRT) | Deadweight (DWT) | BKI Classification | Status |
|---|---|---|---|---|---|
| **MV Nusantara Indah** | Container Ship | 18,500 | 24,000 | Biro Klasifikasi Indonesia (BKI) | Active |
| **MV Radhika Progress** | Bulk Carrier | 32,000 | 45,000 | Biro Klasifikasi Indonesia (BKI) | Active |
| **MV Bahari Sentosa** | Bulk Carrier | 28,000 | 38,000 | Biro Klasifikasi Indonesia (BKI) | Maintenance |
| **MV RBN Pioneer** | Cargo Vessel | 8,500 | 12,000 | Biro Klasifikasi Indonesia (BKI) | Active |
| **MV RBN Voyager** | Cargo Vessel | 9,000 | 13,500 | Biro Klasifikasi Indonesia (BKI) | Active |

---

## 3. SEO & Structured Data Requirements

- **Canonical URL:** `/services` and `/fleet` respectively.
- **Structured Schema (JSON-LD):** 
  - On `/services`: Inject `Service` schema linking to `PT. Pelayaran Nasional Radhika Bahari Nusantara` as provider.
  - On `/fleet`: Inject `ProductCollection` or custom `ItemPage` schema showcasing the vessels as business assets.
