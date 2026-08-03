# RBN Image Classification Report
**PT. Pelayaran Nasional Radhika Bahari Nusantara**

This document details the business rules, tag taxonomies, and categorization logic applied to classify corporate photos automatically in our platform.

---

## 1. Classification Taxonomy

The corporate website classifies image assets into distinct business pillars to serve specific target audiences:

### A. Hero Images (`hero`)
- **Criteria:** Panoramic aspect ratios (e.g., 2.17:1), landscape shots of vessels at sea, or highlights.
- **Example:** `lcu-sailing.jpg` (used as landing highlights).

### B. Fleet & Vessels (`fleet`)
- **Criteria:** High-resolution profiles of ships, deck structures, or dry-dock silhouettes.
- **Example:** `lcu-sailing.jpg` and `lcu-docked.jpg`.

### C. Vessel Operations (`operations`)
- **Criteria:** Practical documentation of deck work, engine room repairs, bridge operations, or hull surveys.
- **Example:** `drydock-inspection.jpg`.

### D. Port & Cargo Operations (`port`, `cargo`)
- **Criteria:** Heavy lift engineering, crane rigging, container stack yards, or ramp loading.
- **Example:** `lcu-docked.jpg`.

### E. Corporate Culture & CSR (`culture`, `csr`)
- **Criteria:** Educational outreach, staff coordination, onboarding, community events, or board meetings.
- **Example:** `cabin-education.jpg` and `crew-deck.jpg`.

---

## 2. Dynamic Tag Generation Rules

To optimize search queries in the frontend gallery:
- **Equipment tags:** Auto-generate equipment types like `lcu`, `vessel`, `crane`, `propeller`, `rudder`.
- **Location tags:** Track coordinates and place names like `harbor`, `drydock`, `surabaya`, `ocean`.
- **Topic tags:** Tag key initiatives like `safety-first`, `csr`, `education`, `maintenance`.
