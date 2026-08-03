# Branding Audit Report
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLIANT

---

## 1. Logo File Paths & Usages

The official logo assets are located at the following file paths inside the repository and are mapped to their respective design segments:

### A. Landscape Logo Banner (`logo-landscape.png`)
* **File Paths:**
  - Frontend public source: [logo-landscape.png](file:///E:/Profile%20Company%20RBN/frontend/public/logo-landscape.png)
  - Backend public source: [logo-landscape.png](file:///E:/Profile%20Company%20RBN/backend/public/logo-landscape.png)
* **Code Usages:**
  - Navigation Header: [Header.tsx](file:///E:/Profile%20Company%20RBN/frontend/src/components/layout/Header.tsx#L44)
  - SEO Default Image: [SEO.tsx](file:///E:/Profile%20Company%20RBN/frontend/src/components/common/SEO.tsx#L7)
  - Filament Admin CMS Logo: [AdminPanelProvider.php](file:///E:/Profile%20Company%20RBN/backend/app/Providers/Filament/AdminPanelProvider.php#L35)
  - HTML SEO meta tags: [index.html](file:///E:/Profile%20Company%20RBN/frontend/index.html#L25)

### B. Circular Seal Logo Badge (`logo-badge.png`)
* **File Paths:**
  - Frontend public source: [logo-badge.png](file:///E:/Profile%20Company%20RBN/frontend/public/logo-badge.png)
  - Backend public source: [logo-badge.png](file:///E:/Profile%20Company%20RBN/backend/public/logo-badge.png)
* **Code Usages:**
  - Browser Favicon: [index.html](file:///E:/Profile%20Company%20RBN/frontend/index.html#L16)
  - Apple Touch Icon: [index.html](file:///E:/Profile%20Company%20RBN/frontend/index.html#L17)
  - Page Loading Screen: [PageLoader.tsx](file:///E:/Profile%20Company%20RBN/frontend/src/components/common/PageLoader.tsx#L41)
  - Footer Layout: [Footer.tsx](file:///E:/Profile%20Company%20RBN/frontend/src/components/layout/Footer.tsx#L42)
  - Mobile Menu Drawer: [MobileMenu.tsx](file:///E:/Profile%20Company%20RBN/frontend/src/components/layout/MobileMenu.tsx#L21)
  - 404 Error page: [NotFound.tsx](file:///E:/Profile%20Company%20RBN/frontend/src/features/error/NotFound.tsx#L23)
  - 500 Error page: [ServerError.tsx](file:///E:/Profile%20Company%20RBN/frontend/src/features/error/ServerError.tsx#L23)
  - Filament Favicon Icon: [AdminPanelProvider.php](file:///E:/Profile%20Company%20RBN/backend/app/Providers/Filament/AdminPanelProvider.php#L37)
  - Schema Structured Organization Logo: [SEO.tsx](file:///E:/Profile%20Company%20RBN/frontend/src/components/common/SEO.tsx#L59)

---

## 2. Branding Validation & Compliance Verdict

* **Background Transparency:** Verified. The outer boundaries of both the badge and landscape logo images contain `(0, 0, 0, 0)` transparent alpha values.
* **No Enclosing Boxes:** Verified. Logo elements render directly on backgrounds without surrounding background cards or colored background rectangles.
* **Corporate Consistency:** The corporate abbreviation `PT. RBN` and full legal name `PT. Pelayaran Nasional Radhika Bahari Nusantara` are fully aligned across frontend components, meta titles, JSON-LD structured schemas, and backend database seeders.
