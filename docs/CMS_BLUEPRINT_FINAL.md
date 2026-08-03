# CMS Blueprint Specification (Final)
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. CMS Architecture & Flow

This document details the configuration layouts of Filament CMS v3 for the PT. RBN administration panel.

```
+-------------------------------------------------------------+
|                        Filament Admin                       |
+-------------------------------------------------------------+
   | (Authorization: Spatie Policies & Roles)
   +---> [Services Section]
   |        |---> ServiceCategoryResource (Manage categories)
   |        |---> ServiceResource (Manage B2B service records)
   |
   +---> [Fleet Section]
            |---> FleetCategoryResource (Manage fleet categories)
            |---> VesselResource (Manage ship inventory)
                     |---> SpecificationRelationManager (1:1 Spec detail forms)
```

---

## 2. Dynamic Form Configurations

Forms enforce strict boundaries, utilizing reactive state binding:

### A. Services Form Schema
* **Category Selection:** Belongs-to relationship mapped through Category ID.
* **Auto-Slug generation:** TextInput binds `live(onBlur: true)` to title, executing `Str::slug()` to generate canonical routes automatically.
* **Repeater arrays:** Mapped to json attributes `advantages` and `workflow` to capture structured operational processes without complex relational joins.

### B. Vessel Technical Specifications Form
* Managed through a separate modal/relation manager within the `VesselResource` edit page.
* Inputs validate appropriate measurement bounds (decimals for Draft and LOA, integers for DWT and Gross Tonnage).
