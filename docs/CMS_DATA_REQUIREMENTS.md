# CMS Data Requirements Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: DRAFT

---

## 1. Overview

To support dynamic administration, the database schema and Filament CMS panels must be expanded. This document outlines the technical attributes, validation parameters, and database schemas required for the next sprints.

---

## 2. Models & Data Structures

### A. Service Model (`services`)
This model stores the logistics and shipping service details.

| Field Name | Type | Validation / Options | Description |
|---|---|---|---|
| `id` | `uuid` | Primary Key | UUIDv4 |
| `title` | `string` | Required, unique, max:100 | Service title |
| `slug` | `string` | Required, unique | URL route path |
| `category` | `string` | Option: `shipping`, `logistics`, `agency` | Service category |
| `description` | `text` | Required | Main content description |
| `advantages` | `json` | Optional | Key benefits list (bullet points) |
| `status` | `string` | Option: `draft`, `published` | Publishing status |

### B. Vessel Model (`vessels`)
This model stores the technical specifications of the shipping fleet.

| Field Name | Type | Validation / Options | Description |
|---|---|---|---|
| `id` | `uuid` | Primary Key | UUIDv4 |
| `name` | `string` | Required, unique | Name of the vessel |
| `imo_number` | `string` | Required, unique, length:7 | IMO ID number |
| `vessel_type` | `string` | Option: `cargo`, `container`, `bulk`, `tanker` | Vessel type category |
| `dwt` | `integer` | Required, min:0 | Deadweight Tonnage (DWT) |
| `teu_capacity` | `integer` | Nullable, min:0 | TEU capacity (for containers) |
| `loa` | `decimal` | Required, min:0 | Length Overall (LOA) in meters |
| `draft` | `decimal` | Required, min:0 | Max draft depth in meters |
| `classification` | `string` | Required (default: `BKI`) | Classification credential |
| `status` | `string` | Option: `active`, `maintenance`, `docked` | Operational status |

### C. Route Model (`routes`)
This model maps the inter-island network.

| Field Name | Type | Validation / Options | Description |
|---|---|---|---|
| `id` | `uuid` | Primary Key | UUIDv4 |
| `origin_port` | `string` | Required | Port of departure |
| `destination_port` | `string` | Required | Port of arrival |
| `distance_nm` | `integer` | Required, min:1 | Distance in Nautical Miles |
| `transit_time_hours` | `integer` | Required, min:1 | Average voyage duration |
| `frequency` | `string` | Required | Weekly or monthly frequency |
| `schedule_pdf` | `string` | Nullable (Spatie Media Library link) | Downloadable voyage schedule |

### D. Project Model (`projects`)
Case studies of cargo logistics projects.

| Field Name | Type | Validation / Options | Description |
|---|---|---|---|
| `id` | `uuid` | Primary Key | UUIDv4 |
| `title` | `string` | Required | Project headline |
| `client_name` | `string` | Required | Client/Partner name |
| `cargo_type` | `string` | Required | Type of cargo (e.g. bulk, steel) |
| `volume` | `string` | Required | Total cargo volume/weight |
| `content` | `text` | Required | Case study narrative |

### E. Job Posting Model (`vacancies`)
For career opportunities and recruitment.

| Field Name | Type | Validation / Options | Description |
|---|---|---|---|
| `id` | `uuid` | Primary Key | UUIDv4 |
| `title` | `string` | Required | Job title |
| `department` | `string` | Required | Department (e.g. Crew, Operations, Finance) |
| `location` | `string` | Required (default: `Surabaya`) | Location |
| `job_type` | `string` | Option: `fulltime`, `contract`, `onboard` | Position type |
| `requirements` | `json` | Required | List of candidate criteria |
| `responsibilities` | `json` | Required | List of duties |
| `expiry_date` | `date` | Required | Closing date for applications |
