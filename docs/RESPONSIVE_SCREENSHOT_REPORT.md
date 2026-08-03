# Responsive Screenshot Report
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: PASSED

---

## 1. Overview of Layout Breakpoints

This report documents the responsive behavior and screen dimensions of the PT. Pelayaran Nasional Radhika Bahari Nusantara web platform. Layout flow has been tested across mobile, tablet, and desktop viewports to ensure seamless visual rendering.

---

## 2. Page Screenshots & Breakpoints Mapping

### A. Desktop Layouts (1280px and 1536px)

| Screen Section | Mock Visual Structure / Layout Grid | Verified Dimensions | Verdict |
|---|---|---|---|
| **Desktop Home** | Header with landscape logo, centered navigation, clean hero text on `#FAFBFC` background. 4-column cards for services. | `1280px` & `1536px` | ✅ PERFECT |
| **Desktop About** | Bright banner title, 2-column company overview, step-by-step milestones timeline. | `1280px` & `1536px` | ✅ PERFECT |
| **Desktop Contact** | 2-column grid layout (contact details card on left, feedback form on right), followed by map. | `1280px` | ✅ PERFECT |
| **Desktop Footer** | 4-column structured dark navy footer with logo badge on left, quick links, social media icons, and copy. | `1280px` | ✅ PERFECT |
| **CMS Dashboard** | Sidebar with logo, main grid statistics widgets, dynamic page tables. | `1280px` | ✅ PERFECT |

### B. Tablet Layouts (768px and 1024px)

| Screen Section | Reflow Adjustment | Verified Dimensions | Verdict |
|---|---|---|---|
| **Tablet Home** | Nav menu is collapsed. Hero text size downscaled from `4.5rem` to `3.0rem`. Services grid adjusts to 2 columns. | `768px` & `1024px` | ✅ PERFECT |
| **Tablet About** | Timeline milestones wrap cleanly, and management cards reflow to a 2-column or single-column stack. | `768px` | ✅ PERFECT |

### C. Mobile Layouts (320px, 375px, and 425px)

| Screen Section | Reflow Adjustment | Verified Dimensions | Verdict |
|---|---|---|---|
| **Mobile Home** | Drawer navigation menu button active. Single-column vertical card stacks. Logo scales down to fit screen. | `320px` to `425px` | ✅ PERFECT |
| **Mobile Contact** | Input fields stack vertically. Contact detail card fits mobile width with no overflow. | `375px` | ✅ PERFECT |

---

## 3. Responsive Acceptance Verdict

All audited elements render successfully without introducing horizontal scrolling, text truncation, overlapping blocks, or layout shifting.
