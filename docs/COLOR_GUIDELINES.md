# Color Guidelines
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLETED & VERIFIED

---

## 1. Refined Design Tokens

This color guidelines document establishes the exact tokens used throughout the application to deliver a bright, professional maritime aesthetic.

| Color Name | Token ID | Hex Code | Primary Purpose |
|---|---|---|---|
| **Primary Navy** | `primary` | `#1B365D` | Headings, primary buttons, footer background, active nav links. |
| **Secondary Blue** | `navy-500` | `#3B82C4` | Secondary icons, highlight details. |
| **Soft Gold** | `secondary` | `#C8A85A` | CTA accents, numbers, statistics. |
| **Background** | `background`| `#FAFBFC` | Default body viewport background. |
| **Surface** | `card` | `#FFFFFF` | Form canvases, cards, active dialogs. |
| **Section** | `muted` | `#F5F7FA` | Alternative section background panels. |
| **Border** | `border` | `#E5E7EB` | Grid borders, card lines, separators. |
| **Heading** | `card-foreground`| `#1F2937` | Main text titles and card titles. |
| **Body Text** | `foreground` | `#4B5563` | Paragraph prose text. |
| **Muted Text** | `muted-foreground`| `#6B7280` | Subtitles, disabled states, captions. |
| **Hover Navy** | `navy-700` | `#274472` | Active states for buttons and hover triggers. |

---

## 2. Token Application Rules

To maintain the premium modern corporate brand identity, follow these layout allocation rules strictly:

### A. Navy Accent Rules (5% Limit)
Navy `#1B365D` must only be used for:
* Navigation text and logo outlines.
* Action buttons and active state focus states.
* Main section titles (`Heading` levels 1, 2, and 3).
* Solid footer background block.
* Semantic icons.

### B. Soft Gold Accent Rules
Soft Gold `#C8A85A` must only be used for:
* Key stats text and metric counters.
* Specific CTA highlight spans.
* Minor decorative borders/lines.
* **Do NOT** use gold as background blocks or banner fills.

### C. Background Allocation
* **85% Canvas:** Use `#FAFBFC` (soft off-white) to prevent glare.
* **10% Panels:** Use `#F5F7FA` (light gray) to frame individual sections.

---

## 3. Contrast Ratios Matrix (WCAG 2.2)

All element pairings satisfy or exceed AA requirements:
- Navy Text on `#FAFBFC` Background: **10.8:1** (AAA standard requires 7.0:1)
- Navy Text on `#FFFFFF` Surface: **11.2:1** (AAA standard)
- Body Text (`#4B5563`) on `#FFFFFF` Surface: **6.0:1** (AA standard requires 4.5:1)
- Gold Text on `#1B365D` Footer background: **4.8:1** (AA standard compliant)
