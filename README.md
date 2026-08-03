# PT. Pelayaran Nasional Radhika Bahari Nusantara (RBN Group)
## Premium Maritime Corporate Web Portal & CMS

PT. Pelayaran Nasional Radhika Bahari Nusantara is Indonesia's premier archipelagic maritime shipping and domestic cargo logistics enterprise. This repository contains the unified codebase for the corporate portal (React 19 SPA) and the back-office CMS (Laravel 11 + Filament v3).

---

## 1. Project Architecture

The system is built on a clean split-stack architecture matching enterprise B2B guidelines:

* **Frontend:** React 19 single-page application built on Vite 6 + Tailwind CSS v4 + Framer Motion. Focused on whitespace, minimal transitions, and strict WCAG 2.2 AA accessibility standards.
* **Backend:** Laravel 11 API with Filament v3 Administration Panel. Implements full UUID keys, soft deletes, revision logs, and dynamic SEO metadata blocks.

---

## 2. Document Index & Guidelines

All technical and brand specifications are located inside the `docs/` directory:

### Brand & Design System
* [COLOR_SYSTEM.md](file:///E:/Profile%20Company%20RBN/docs/COLOR_SYSTEM.md): Refined maritime color tokens (Soft White `#FAFBFC`, Light Gray `#F5F7FA`, Navy `#1B365D`, Gold `#C8A85A`).
* [DESIGN_SYSTEM.md](file:///E:/Profile%20Company%20RBN/docs/DESIGN_SYSTEM.md): Detailed token settings for layout grids, header heights, typography hierarchies, and active state styles.
* [BRANDING_GUIDELINES.md](file:///E:/Profile%20Company%20RBN/docs/BRANDING_GUIDELINES.md): Corporate information specifications, correct registry addresses, headquarters phone mappings, and logo no-wrapper rules.

### Sizing & Refinement Reports
* [LOGO_REFINEMENT_REPORT.md](file:///E:/Profile%20Company%20RBN/docs/LOGO_REFINEMENT_REPORT.md): Transparency process audits for landscape and badge files.
* [RESPONSIVE_LOGO_REPORT.md](file:///E:/Profile%20Company%20RBN/docs/RESPONSIVE_LOGO_REPORT.md): Breakpoint matrices for the header banner across all resolutions.
* [UI_POLISH_REPORT.md](file:///E:/Profile%20Company%20RBN/docs/UI_POLISH_REPORT.md): Visual consistency reports for cards, buttons, loading screens, and layout elements.
* [BRANDING_VALIDATION.md](file:///E:/Profile%20Company%20RBN/docs/BRANDING_VALIDATION.md): Asset mapping validations and transparency check logs.

---

## 3. Running & Compilation

### Requirements
- PHP 8.2+
- Composer
- Node.js 20+ / npm 10+
- SQLite / MySQL

### Local Setup (Backend)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
```

### Local Setup (Frontend)
```bash
cd frontend
npm install
npm run dev
```

### Production Compilation
```bash
cd frontend
npm run build
```
This builds and copies production assets directly into the public workspace folders.
