# REST API Reference: PT Radhika Bahari Nusantara

This document compiles the API contract for the RBN backend services, detailing authentication, user profiles, and global setting parameters.

---

## 1. Authentication Paths (Session Cookie-Based)

All cookie operations require Sanctum state initializations via `/sanctum/csrf-cookie` before sending auth credentials.

### A. User Login Gate
* **Route:** `POST /api/v1/auth/login`
* **Authentication:** None (Public).
* **Payload:**
```json
{
  "email": "user@rbn-group.com",
  "password": "secretpassword"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged in successfully.",
  "data": {
    "id": "e9321e25-d72e-4b47-b895-cd9eb8cf896c",
    "name": "Jane Doe",
    "email": "user@rbn-group.com",
    "roles": ["hr-admin"],
    "created_at": "2026-08-01T23:47:15+07:00"
  }
}
```

### B. User Logout Gate
* **Route:** `POST /api/v1/auth/logout`
* **Authentication:** Sanctum Cookie.
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged out successfully.",
  "data": null
}
```

### C. Current Profile Helper
* **Route:** `GET /api/v1/auth/me`
* **Authentication:** Sanctum Cookie.
* **Response (200 OK):**
```json
{
  "success": true,
  "message": null,
  "data": {
    "id": "e9321e25-d72e-4b47-b895-cd9eb8cf896c",
    "name": "Jane Doe",
    "email": "user@rbn-group.com",
    "roles": ["hr-admin"],
    "created_at": "2026-08-01T23:47:15+07:00"
  }
}
```

---

## 2. User Management Resources

All resources are protected by Sanctum guard checking.

### A. List Users (Paginated)
* **Route:** `GET /api/v1/users?page=1`
* **Response (200 OK):**
```json
{
  "success": true,
  "message": null,
  "data": [
    {
      "id": "e9321e25-d72e-4b47-b895-cd9eb8cf896c",
      "name": "Jane Doe",
      "email": "user@rbn-group.com",
      "roles": ["hr-admin"],
      "created_at": "2026-08-01T23:47:15+07:00"
    }
  ],
  "meta": {
    "current_page": 1,
    "last_page": 1,
    "per_page": 15,
    "total": 1
  }
}
```

### B. Store User Profile
* **Route:** `POST /api/v1/users`
* **Payload:**
```json
{
  "name": "John Smith",
  "email": "john.smith@rbn-group.com",
  "password": "strongpassword123",
  "roles": ["hr-admin"]
}
```
* **Response (210 Created):**
```json
{
  "success": true,
  "message": "User created successfully.",
  "data": {
    "id": "fb2123c7-4328-48b2-9aa5-02cc2736c84c",
    "name": "John Smith",
    "email": "john.smith@rbn-group.com",
    "roles": ["hr-admin"],
    "created_at": "2026-08-02T01:43:00+07:00"
  }
}
```

### C. Show User Details
* **Route:** `GET /api/v1/users/{id}`
* **Response (200 OK):**
```json
{
  "success": true,
  "message": null,
  "data": {
    "id": "fb2123c7-4328-48b2-9aa5-02cc2736c84c",
    "name": "John Smith",
    "email": "john.smith@rbn-group.com",
    "roles": ["hr-admin"],
    "created_at": "2026-08-02T01:43:00+07:00"
  }
}
```

### D. Update User details
* **Route:** `PUT /api/v1/users/{id}`
* **Payload:**
```json
{
  "name": "John Updated",
  "email": "john.updated@rbn-group.com"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "User updated successfully.",
  "data": {
    "id": "fb2123c7-4328-48b2-9aa5-02cc2736c84c",
    "name": "John Updated",
    "email": "john.updated@rbn-group.com",
    "roles": ["hr-admin"],
    "created_at": "2026-08-02T01:43:00+07:00"
  }
}
```

### E. Delete User Profile
* **Route:** `DELETE /api/v1/users/{id}`
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "User deleted successfully.",
  "data": null
}
```

---

## 3. Website Settings Resources

### A. List Site Settings (Public)
* **Route:** `GET /api/v1/settings`
* **Response (200 OK):**
```json
{
  "success": true,
  "message": null,
  "data": [
    {
      "id": "d043f9a7-cc21-48bd-bb95-9ea2cc736c8d",
      "key": "site_name",
      "value": "PT Radhika Bahari Nusantara",
      "locale": "en",
      "updated_at": "2026-08-02T01:43:00+07:00"
    }
  ]
}
```

### B. Get Setting Variable
* **Route:** `GET /api/v1/settings/{key}?locale=en`
* **Response (200 OK):**
```json
{
  "success": true,
  "message": null,
  "data": {
    "id": "d043f9a7-cc21-48bd-bb95-9ea2cc736c8d",
    "key": "site_name",
    "value": "PT Radhika Bahari Nusantara",
    "locale": "en",
    "updated_at": "2026-08-02T01:43:00+07:00"
  }
}
```

### C. Update Site Setting (Protected)
* **Route:** `POST /api/v1/settings`
* **Payload:**
```json
{
  "key": "site_name",
  "value": "RBN Group Logistics",
  "locale": "en"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Setting updated successfully.",
  "data": {
    "id": "d043f9a7-cc21-48bd-bb95-9ea2cc736c8d",
    "key": "site_name",
    "value": "RBN Group Logistics",
    "locale": "en",
    "updated_at": "2026-08-02T01:43:10+07:00"
  }
}
```
