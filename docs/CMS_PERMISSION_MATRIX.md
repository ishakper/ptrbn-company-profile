# CMS Permission Matrix
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: ACTIVE

---

## 1. System Role Allocations

The security system supports two administrative roles by default:

* **Super Admin (`super-admin`):**
  - Inherits all system permissions unconditionally via Laravel's Gate before-callback.
  - Complete control over CRUD, security, configuration settings, and audit trails.
* **Logistics Manager (`logistics-manager`):**
  - Restricted to managing shipping services, fleet vessel databases, and technical specification sheets.
  - Cannot access system logs, settings, or user permissions.

---

## 2. Resource Permissions Mapping

Permissions are verified dynamically through model-bound Spatie Policy hooks:

| Resource / Model | Permission Name | super-admin | logistics-manager |
|---|---|---|---|
| **ServiceCategory** | `view-any service-category` | ✅ Yes | ✅ Yes |
| | `create service-category` | ✅ Yes | ✅ Yes |
| | `update service-category` | ✅ Yes | ✅ Yes |
| | `delete service-category` | ✅ Yes | ❌ No |
| **Service** | `view-any service` | ✅ Yes | ✅ Yes |
| | `create service` | ✅ Yes | ✅ Yes |
| | `update service` | ✅ Yes | ✅ Yes |
| | `delete service` | ✅ Yes | ❌ No |
| **Vessel** | `view-any vessel` | ✅ Yes | ✅ Yes |
| | `create vessel` | ✅ Yes | ✅ Yes |
| | `update vessel` | ✅ Yes | ✅ Yes |
| | `delete vessel` | ✅ Yes | ❌ No |
