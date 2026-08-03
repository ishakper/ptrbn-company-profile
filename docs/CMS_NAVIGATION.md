# CMS Navigation Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Sidebar Group Structure

The administrator sidebar is structured into explicit, task-focused groups to optimize admin UX:

### A. Corporate Group
* **Resources:** `HeroResource`, `CompanyProfileResource`, `VisionMissionResource`, `CoreValueResource`, `ManagementResource`, `LegalDocumentResource`, `CertificationResource`.
* **Purpose:** Handles general business content and regulatory identity displays.

### B. Services Group
* **Resources:** `ServiceCategoryResource` (Icon: Folder Open), `ServiceResource` (Icon: Wrench/Screwdriver).
* **Purpose:** Manages the B2B sales capabilities and cargo transport listings.

### C. Fleet Group
* **Resources:** `FleetCategoryResource` (Icon: Square Stack), `VesselResource` (Icon: Shield Check).
* **Purpose:** Manages shipping vessel capacities, BKI classifications, and technical specifications.

### D. Settings Group
* **Resources:** `SettingResource`, `UserResource`, `RoleResource`, `PermissionResource`.
* **Purpose:** Administers global variables, permissions matrix, and system user allocations.

---

## 2. Icon & Order Maps

| Resource | Sidebar Group | Navigation Icon | Sorting Order |
|---|---|---|---|
| **ServiceCategory** | `Services` | `heroicon-o-folder-open` | Default |
| **Service** | `Services` | `heroicon-o-wrench-screwdriver` | Default |
| **FleetCategory** | `Fleet` | `heroicon-o-square-3-stack-3d` | Default |
| **Vessel** | `Fleet` | `heroicon-o-shield-check` | Default |
