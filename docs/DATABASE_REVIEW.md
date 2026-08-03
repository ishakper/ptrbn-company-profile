# Database Architecture Review
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Relational Integrity & Key Allocations

Our schema architecture ensures high referential integrity and standardizes relations:

* **Primary Keys:** Declared explicitly as `UUID` keys in the migrations (e.g. `$table->uuid('id')->primary()`).
* **Foreign Keys:** Mapped to matching `uuid` column definitions (e.g. `$table->uuid('vessel_id')`).
* **Cascade Strategies:** 
  - To prevent orphaned records and database bloat, parent-child relationships use `onDelete('cascade')` rules.
  - If a vessel is permanently deleted, its associated specification row in `fleet_specifications` is automatically cascades-purged.
  - If a service category is deleted, its nested services are cascades-purged.

---

## 2. Nullable Columns & Default Values

To enforce strict business records, column nullability has been minimized:

* **`vessels` Table:**
  - `name`: VARCHAR, Not Null.
  - `imo_number`: VARCHAR, Not Null, Unique Index.
  - `status`: VARCHAR, Default: `'active'`.
* **`fleet_specifications` Table:**
  - `gross_tonnage`, `deadweight_tonnage`: INT, Not Null.
  - `length_overall`, `draft_depth`: DECIMAL(8,2), Not Null.
  - `classification`: VARCHAR, Default: `'BKI'`.
* **`services` Table:**
  - `title`: VARCHAR, Not Null.
  - `slug`: VARCHAR, Not Null, Unique Index.
  - `advantages`: JSON, Nullable.

---

## 3. Spatie System Logs Integration

The database layer fully supports Spatie Activity Logging:
- Log logs are saved in the `activity_log` table.
- Change audits log dirty columns only (`logOnlyDirty()`) and record all fillable attributes (`logFillable()`), preventing index clutter.
