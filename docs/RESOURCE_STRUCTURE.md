# Backend Resource Structure Spec
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLIANT

---

## 1. Directory Tree & Architecture

The port folio services and fleet code modules follow clean Laravel patterns, separated strictly into layers:

```
backend/
├── app/
│   ├── Filament/
│   │   └── Resources/
│   │       ├── ServiceCategories/
│   │       │   ├── Pages/
│   │       │   ├── Schemas/
│   │       │   └── Tables/
│   │       └── Vessels/
│   │           ├── RelationManagers/
│   │           ├── Schemas/
│   │           └── Tables/
│   ├── Http/
│   │   ├── Controllers/Api/v1/
│   │   │   ├── ServiceController.php
│   │   │   └── VesselController.php
│   │   └── Resources/
│   │       ├── ServiceResource.php
│   │       └── VesselResource.php
│   ├── Models/
│   │   ├── Service.php
│   │   └── Vessel.php
│   └── Repositories/
│       ├── Contracts/
│       │   ├── ServiceRepositoryInterface.php
│       │   └── VesselRepositoryInterface.php
│       └── Eloquent/
│           ├── ServiceRepository.php
│           └── VesselRepository.php
```

---

## 2. SOLID Class separation

* **Models:** Define properties, relationships, and casts.
* **Repositories:** Enforce database queries abstracting ORM builders.
* **Controllers:** Standard request-response handling, passing filters to repositories.
* **JsonResources:** Format model data for frontend representation.
* **Filament Resources:** Manage UI forms and lists.
