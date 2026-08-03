# Visual Consistency Report
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLIANT

---

## 1. Component Consistency Audit

This visual consistency report verifies that every building block in the web platform uses unified styles and tokens:

| UI Primitive | Design Token / Standard Enforced | Visual Style Status |
|---|---|---|
| **Buttons** | Navy primary `#1B365D` with white text. Outline variants use navy border with transparent/navy text. | ✅ Unifed (Clean transition speeds, rounded full shapes) |
| **Cards** | White background `#FFFFFF`, thin border `#E5E7EB`, rounded corners `1rem` (16px), soft shadow drop `shadow-card`. | ✅ Unified (Hover card elevates vertically) |
| **Badges** | Outline pills mapping to `#1B365D` (Navy) or `#C8A85A` (Gold) accents. | ✅ Unified (Clear, accessible tags) |
| **Borders** | Mapped strictly to `#E5E7EB` (`border-border`) color variables. | ✅ Unified (No raw slate borders) |
| **Section Spacing** | Set to a spacious `7rem` spacing scale on light-mode screens. | ✅ Unified |
| **Typography** | Font Display: `Plus Jakarta Sans`. Font Body: `Inter`. | ✅ Unified |
| **Header** | Floats transparent logo `logo-landscape.png` directly on backgrounds. | ✅ Unified |
| **Footer** | Solid Navy background with transparent badge logo `logo-badge.png`. | ✅ Unified |

---

## 2. Visual Alignment Log

* **Light/Dark Mode Toggles:** Checked variables in both dark and light modes. Light mode leverages a clean white base theme, while dark mode uses a deep maritime slate `#141f33` to represent ocean depths.
* **No Enclosing Boxes:** Confirmed that badge and landscape logos float naturally with transparent backgrounds, resolving template boundaries.
* **No Unformatted Elements:** All links, buttons, inputs, and feedback forms feature focus ring configurations and responsive padding curves.
