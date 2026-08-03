# CMS QA Checklist
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLIANT

---

## 1. Filament CMS QA Check

- [x] **General CRUD Forms:** Categories, services, and vessels forms render and save cleanly.
- [x] **B2B Validation:** IMO numbers require length inputs (7 to 10 characters), required fields block empty saves.
- [x] **Spatie Media Library:** Uploads validate correct file sizes (thumbnails <= 2MB, brochures PDF <= 5MB).
- [x] **SEO Tab Controls:** Metadata title, description, and keywords render correctly in forms and persist in database tables.
- [x] **Activity Audits:** Logs activities automatically inside Spatie `activity_log` table.
- [x] **Soft Deletes:** Tables support restore, force-delete, and trash filter tabs.
- [x] **Bulk Actions:** Supports bulk deletes, restores, publishing, and unpublishing.

---

## 2. API & Security QA Check

- [x] **API Resource Serialization:** UUIDs, media URLs, repeaters, and specifications format correctly.
- [x] **Spatie Policies:** Anonymous users blocked from admin actions; role checks authorize pages correctly.
