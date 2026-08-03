# API Contract Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Services API Endpoint

### `GET /api/v1/services`
* **Description:** Retrieve a paginated list of published shipping and logistics services.
* **Query Parameters:**
  - `page` (integer, optional) - Pagination index (default: `1`).
  - `limit` (integer, optional) - Items per page (default: `10`, max: `50`).
  - `category` (string, optional) - Filter by category enum (`container`, `bulk`, `project`).
  - `search` (string, optional) - Fuzzy search on service `title` or `description`.
  - `sort` (string, optional) - Sort ordering: `title` or `-title` (descending).

#### Successful Response JSON (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "4f9d273a-cb1b-4b10-8b43-22879aefca19",
      "title": "Dry Bulk Cargo Shipping",
      "slug": "dry-bulk-cargo",
      "category": "bulk",
      "description": "High-capacity transport for coal, ores, and fertilizers.",
      "advantages": [
        "Self-discharging crane capabilities",
        "Water-tight hatches inspected by BKI"
      ],
      "status": "published"
    }
  ],
  "meta": {
    "current_page": 1,
    "last_page": 1,
    "per_page": 10,
    "total": 1
  }
}
```

---

## 2. Fleet API Endpoint

### `GET /api/v1/vessels`
* **Description:** Retrieve searchable and filterable list of active and charter vessels.
* **Query Parameters:**
  - `page`, `limit` (optional) - Pagination controls.
  - `vessel_type` (string, optional) - Filter by ship type (`container`, `bulk_carrier`, `cargo`).
  - `status` (string, optional) - Filter by status (`active`, `maintenance`, `charter`).
  - `search` (string, optional) - Fuzzy search on vessel `name` or `imo_number`.

#### Successful Response JSON (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "8f3b207a-9a99-4c12-8e10-b992f1559ea1",
      "name": "MV Nusantara Indah",
      "imo_number": "9812739",
      "vessel_type": "container",
      "dwt": 24000,
      "teu_capacity": 1800,
      "loa": 185.2,
      "draft": 9.5,
      "classification": "BKI",
      "status": "active"
    }
  ],
  "meta": {
    "current_page": 1,
    "last_page": 5,
    "per_page": 10,
    "total": 48
  }
}
```

---

## 3. Shipping Routes API Endpoint

### `GET /api/v1/routes`
* **Description:** Retrieve scheduled shipping lanes connecting major ports.

#### Successful Response JSON (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "1a8e38d0-2391-4c1a-aa27-cd77ea53d719",
      "origin_port": "Surabaya (Tanjung Perak)",
      "destination_port": "Makassar (Soekarno-Hatta)",
      "distance_nm": 420,
      "transit_time_hours": 36,
      "frequency": "Weekly"
    }
  ]
}
```

---

## 4. API Error Contract

All error payloads use a standardized schema:

#### Validation Error (`422 Unprocessable Entity`)
```json
{
  "success": false,
  "error": "VALIDATION_FAILED",
  "message": "The provided parameters are invalid.",
  "errors": {
    "limit": [
      "The limit field must be an integer."
    ]
  }
}
```
* **Common Status Codes:**
  - `400 Bad Request` — Malformed query.
  - `404 Not Found` — Resource UUID does not exist.
  - `500 Internal Error` — Database connection drop or code failure.
