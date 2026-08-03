# Schema Diagram Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Database Schema Diagram (Mermaid ERD)

```mermaid
erDiagram
    service_categories {
        uuid id PK
        string name
        string slug UK
        text description
        string status
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }
    services {
        uuid id PK
        uuid service_category_id FK
        string title
        string slug UK
        text description
        json advantages
        string status
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }
    fleet_categories {
        uuid id PK
        string name
        string slug UK
        text description
        string status
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }
    vessels {
        uuid id PK
        uuid fleet_category_id FK
        string name
        string imo_number UK
        string status
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }
    fleet_specifications {
        uuid id PK
        uuid vessel_id FK "UNIQUE"
        integer gross_tonnage
        integer deadweight_tonnage
        decimal length_overall
        decimal draft_depth
        string classification
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }

    service_categories ||--o{ services : "has many services"
    fleet_categories ||--o{ vessels : "has many vessels"
    vessels ||--|| fleet_specifications : "has one technical spec"
```

---

## 2. Table Schemas Specifications

All tables feature:
- Primary keys declared as UUID.
- Soft delete columns mapped to nullable timestamps (`deleted_at`).
- Automatic activity triggers.
