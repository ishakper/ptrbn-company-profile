# UI/UX Design & Wireframe Specifications: PT Radhika Bahari Nusantara

This document compiles the formal **Visual Design Identity, Accessibility parameters, and Wireframe Structures** for the PT Radhika Bahari Nusantara website.

---

## 1. Design System & Brand Identity

### Color Palette (Maritime Corporate Theme)
* **Primary Oceanic Blue:** `#0a2540` (slate-900) / `#1e3a8a` (blue-900) -> Represents deep-sea shipping safety and institutional authority.
* **Secondary Surface White:** `#ffffff` / `#f8fafc` (slate-50) -> Represents clean corporate reporting transparency and contrast.
* **Accent Gold:** `#f59e0b` (amber-500) -> Represents lighthouse navigation beams, active routing pathways, and warning status levels.

### Typography
* **Headings:** **Outfit** (Modern geometric lines suggesting clean, precise engineering).
* **Body Text:** **Inter** (High readability on mobile screen resolutions).

* **Why:** A maritime theme reinforces PT Radhika Bahari Nusantara's identity as a reliable sea carrier, differentiating it from generic logistics templates.
* **Benefits:** Immediate brand recognition and strong visual appeal for government tendering committees.

---

## 2. WCAG Accessibility Standards (WCAG 2.1 AA)
* **Color Contrast:** All body text elements must enforce a minimum contrast ratio of **4.5:1** against backgrounds.
* **Focus Indicators:** Interactive components must display highly visible outlines when tabbed (`focus-visible:ring-2 focus-visible:ring-blue-600`).
* **ARIA Descriptors:** Non-text elements (buttons, images) include descriptive aria properties (e.g. `aria-label="Filter vessels by Landing Craft Tank"`).

---

## 3. Responsive Wireframe Layout Blueprints

### A. Landing Page (Home Page)
```
+-------------------------------------------------------------+
|  [Logo] Radhika Bahari Nusantara      [Fleet] [Routes] [EN] | (Header)
+-------------------------------------------------------------+
|                                                             |
|           Connecting the Indonesian Archipelago             | (Hero Text)
|                                                             |
|                   [Request Vessel Quote]                    | (Accent CTA)
|                                                             |
+-------------------------------------------------------------+
|  [ 12+ Vessels ]   [ 150+ Pioneer Voyages ]  [ 99.8% Uptime ] (Stats Strip)
+-------------------------------------------------------------+
|  Pioneer Cargo Card   |  Vessel Charter Card | Health Ship | (Services Grid)
+-------------------------------------------------------------+
```

### B. Fleet Specifications Page
```
+-------------------------------------------------------------+
|  Search Fleet: [ Enter vessel name... ]                     | (Search Header)
|  Filters: [X] LCT Cargo   [ ] Tug & Barge   [ ] Hospital    | (Checkboxes)
+-------------------------------------------------------------+
|  +--------------------+  +--------------------+  +--------+ |
|  | KM Gandha Nusantara|  | LCT Radhika 01     |  | Tug... | | (Vessel Cards Grid)
|  | DWT: 200 Tons      |  | DWT: 500 Tons      |  | 1200 HP| |
|  | Status: Active     |  | Status: Chartered  |  | Active | |
|  | [View Specs Doc]   |  | [View Specs Doc]   |  | [Specs]| |
|  +--------------------+  +--------------------+  +--------+ |
+-------------------------------------------------------------+
```

### C. Interactive Shipping Routes Page
```
+-------------------------------------------------------------+
|  Active Shipping Networks (Trayek Perintis)                 | (Header)
+-------------------------------+-----------------------------+
|  Route Information Panel      |  Leaflet Map Container      |
|  Select Route: [Trayek R-12]  |                             |
|  Pangkalan: Surabaya          |  [Active Route Overlay]     |
|  Vessel: KM Gandha Nusantara  |  - (Surabaya) ===> (Madura) |
|  Schedule: Bi-weekly          |                             |
+-------------------------------+-----------------------------+
```

### D. Career Application Drawer (Careers Page Apply)
```
+-------------------------------------------------------------+
|  Apply for: Second Officer (Deck)                           | (Header)
+-------------------------------------------------------------+
|  Full Name: [ Input name... ]                               |
|  Email:     [ Input email... ]                              |
|  Seafarer Book Number: [ Input number... ]                 |
|  Upload Resume CV (PDF only, max 2MB):                      |
|  +-------------------------------------------------------+  |
|  | Drag and drop your PDF CV here or [Browse File]       |  | (Upload Area)
|  +-------------------------------------------------------+  |
|  [ ] I consent to data processing (PDP Compliance)           | (PDP Checkbox)
|                                                             |
|  [Submit Application]                                       | (Button)
+-------------------------------------------------------------+
```

### E. Admin Dashboard CMS Layout
```
+------------------+------------------------------------------+
|  Filament Menu   |  Analytics Overview Widgets              |
|                  +------------------------------------------+
|  - Dashboard     |  [ 14 Active Inquiries ] [ 8 Job App. ]  | (Widget Cards)
|  - Fleet CRUD    |                                          |
|  - Routes CRUD   +------------------------------------------+
|  - Careers CRUD  |  Recent Activity Log                     | (Auditable logs)
|  - Whistleblower |  - User 'Sarah' created vessel 'LCT R1'  |
|  - Settings      |  - User 'Admin' updated system configurations|
+------------------+------------------------------------------+
```

---

## 4. Transitions & Micro-Interactions
* **Vessel Card Hover:** Card lifts by 4px (`transform -translate-y-1`) and reveals a subtle blue glow shadow outline.
* **Map Route Select:** Clicking a route in the panel zooms the Leaflet viewport to the relevant geographic bounds, making the target route line pulse.
* **Form Upload State:** Dragging a PDF file over the upload container changes the border outline color from gray to emerald-500.

---

## User Review & Approval Required

> [!IMPORTANT]
> Please review this complete UI/UX & Wireframe Specification. Once approved, we will proceed to the next SDLC configurations.
