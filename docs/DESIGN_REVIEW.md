# Design Review
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Typography & Hierarchy Specifications

Our visual hierarchy is anchored around clean, readable font weights and structured displays to convey a premium maritime logistics brand:

* **Primary Heading Scale:** Uses `Plus Jakarta Sans` for clean, professional rendering. Font sizes range from `1.25rem` (H3 card headers) to `4.5rem` (Hero Display title), utilizing thick weights (700 Bold / 800 ExtraBold).
* **Body Prose & Copy:** Controlled by `Inter` with body sizes set to `1rem` (16px) and body lines set to `1.6`. Text color uses `#4B5563` (`text-foreground`) to provide comfortable readability against white backgrounds.
* **Eye-Brow Labels:** Section headers are introduced with small uppercase badge tags (`var(--font-mono)`) inside gold/navy accent pills, providing immediate navigation context.

---

## 2. Spacing & Spatiotemporal Layout

* **Grid Columns:** Enforces strict responsiveness rules:
  - Mobile: `grid-cols-1` (single-column vertical stack).
  - Tablet: `grid-cols-2` (balanced dual grid).
  - Desktop: `grid-cols-4` (spacious grid layout).
* **Card Paddings:** Enforces a standard internal card padding of `p-6` (24px) to avoid text collision with borders.
* **Section Separation:** Defined at `7rem` spacing margins to ensure visual elements are separated by solid breathing room, letting the eye focus on the core value propositions.

---

## 3. Responsive Adaptations Log

- **Mobile Viewports (320px–425px):** Navigation transitions to a menu trigger. Logo auto-scales down. Grids stack in single columns, preventing any layout breakage or horizontal scrolls.
- **Tablet Viewports (768px–1024px):** Grid patterns use 2 columns. Section margins scale down to `4rem` to prevent excessive spacing on smaller screen sizes.
- **Wide Desktop (1280px–1536px):** Layout container width constrained to `1200px` to keep readable lines centered and professional.
