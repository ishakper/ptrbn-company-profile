# Database Schema & Relationship Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Entity Relationship Diagram (ERD)

The relational schema maps out model associations, media attachments, and SEO parameters:

```mermaid
erDiagram
    SERVICES {
        uuid id PK
        string title
        string slug UK
        enum category
        text description
        json advantages
        string status
        timestamp deleted_at
    }
    VESSELS {
        uuid id PK
        string name
        string imo_number UK
        string vessel_type
        integer dwt
        integer teu_capacity
        decimal loa
        decimal draft
        string classification
        string status
        timestamp deleted_at
    }
    ROUTES {
        uuid id PK
        string origin_port
        string destination_port
        integer distance_nm
        integer transit_time_hours
        string frequency
        timestamp deleted_at
    }
    MEDIA {
        uuid id PK
        string model_type
        uuid model_id FK
        string file_path
        string file_type
    }
    SEO_METADATA {
        uuid id PK
        string model_type
        uuid model_id FK
        string meta_title
        text meta_description
        string og_image
    }

    SERVICES ||--o| SEO_METADATA : "has one SEO record"
    VESSELS ||--o| SEO_METADATA : "has one SEO record"
    SERVICES ||--o# MEDIA : "has many media attachments"
    VESSELS ||--o# MEDIA : "has many spec sheets"
```

---

## 2. Table Structural Properties & Indexes

To guarantee high query throughput and referential integrity under production load:

### A. Core Database Properties
* **Primary Keys:** Every record uses `UUIDv4` keys to prevent sequential ID guessing and leak vectors.
* **Soft Deletes:** Table models use Laravel's `SoftDeletes` trait, mapping to a nullable `deleted_at` timestamp.
* **Audit Trails:** Database writes record activity logs (`spatie/laravel-activitylog`).

### B. Index Mapping
1. `services` Table:
   - Index on `slug` (Unique).
   - Index on `status` (Speeds up public list fetches).
2. `vessels` Table:
   - Index on `imo_number` (Unique).
   - Multi-column index on `(vessel_type, status)` (For catalog search filtering).
3. `routes` Table:
   - Index on `(origin_port, destination_port)` (Speeds up transit schedule queries).
