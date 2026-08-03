# Entity Relationship Report
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLIANT

---

## 1. Relational Map & Directions

The database model associations are mapped as follows:

### A. Service Category to Services (1:N)
* **Relationship Type:** One-to-Many.
* **Direction:** A single category (`service_categories`) hosts multiple services (`services`).
* **Foreign Key:** `services.service_category_id` (UUID) references `service_categories.id`.
* **Integrity Constraint:** Cascading delete is enabled. If a category is deleted, all child services are removed.

### B. Fleet Category to Vessels (1:N)
* **Relationship Type:** One-to-Many.
* **Direction:** A single fleet category (`fleet_categories`) holds multiple vessels (`vessels`).
* **Foreign Key:** `vessels.fleet_category_id` (UUID) references `fleet_categories.id`.
* **Integrity Constraint:** Cascading delete is enabled. If a category is deleted, all nested vessels are removed.

### C. Vessel to Fleet Specification (1:1)
* **Relationship Type:** One-to-One.
* **Direction:** A single vessel (`vessels`) has one unique technical specification sheet (`fleet_specifications`).
* **Foreign Key:** `fleet_specifications.vessel_id` (UUID) references `vessels.id`.
* **Constraint:** Unique index on `fleet_specifications.vessel_id` ensures 1-to-1 integrity.
* **Integrity Constraint:** Cascading delete is enabled. If a vessel is deleted, its specifications are deleted.

---

## 2. Integrity Audit Details

* **Cascade triggers:** Tested and verified during seed resets.
* **UUID formats:** Compliant. No numeric ID conversions allowed.
* **Soft Deletes:** Standardized across all models. Soft deleted parent records automatically hide child relationships during normal ORM queries.
