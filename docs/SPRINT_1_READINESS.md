# Sprint 1 Readiness: PT Radhika Bahari Nusantara

This document compiles the formal **Sprint 1 Readiness Report** for the decoupled PT Radhika Bahari Nusantara web platform.

---

## 1. Sprint Goals & Scope

* **Sprint Goal:** Build the authentication, role-based authorization (RBAC), and admin dashboard CMS backend tables, user panels, and frontend stores.
* **Sprint Scope:**
  * Laravel Sanctum cookie session auth configurations.
  * Spatie Permission schemas, database seeds, and policies.
  * Filament User Management panel.
  * React Zustand `authStore.ts` and Protected Routes guards.

---

## 2. Team & Execution

* **Estimated Duration:** 2 Weeks (80 hours capacity).
* **Required Roles:**
  * 1 Senior Backend Engineer (Sanctum/Filament).
  * 1 Senior Frontend Engineer (Zustand/Routes).
  * 1 QA Specialist.
* **Milestones:**
  * **Day 3:** Sanctum API sessions and Spatie database seeds completed.
  * **Day 6:** Filament admin user panels completed.
  * **Day 9:** React Zustand store, login screen UI, and route guards completed.
  * **Day 10:** QA verification testing.

---

## 3. Success Criteria & Definition of Done (DoD)
* **Success Criteria:** Users can authenticate via the secure login form, and access is restricted based on their role (HR, Comms, Compliance).
* **DoD:**
  * 100% test coverage on authentication endpoints.
  * Zero security vulnerabilities in dependency checkers.
  * Verified contrast and keyboard focus states on the login form.
