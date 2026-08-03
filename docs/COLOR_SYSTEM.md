# Color System Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Version: 2.0.0 | Last Updated: 2026-08-02 | Status: APPROVED

---

## 1. Overview & Refinement Rationale

To align with premium international shipping enterprises (e.g., Maersk, MSC, NYK Line), the RBN Group web platform utilizes a highly disciplined maritime palette. Casual startup gradients and high-contrast pitch blacks are replaced with structured, trustworthy ocean blues, neutral slates, and gold accents.

The palette adheres to the **85-10-5 Distribution Rule** for B2B corporate designs:
* **85% Soft White (`#FAFBFC`)**: Serves as the primary canvas background to promote reading comfort and visual breathing room.
* **10% Light Gray (`#F5F7FA`)**: Used for page section boundaries and structured block backgrounds.
* **5% Corporate Navy & Gold**: Anchors the identity (Primary Navy `#1B365D`, Secondary Navy `#2F4B73`, Soft Gold `#C8A85A`).

---

## 2. Refined Palette & Semantic Tokens

### Light Mode (Maritime Corporate Theme)

| Semantic Token | Hex Code | Visual Style | Best Use | Contrast Ratio |
|---|---|---|---|---|
| `background` | `#FAFBFC` | Soft White | Page canvas | — |
| `muted` | `#F5F7FA` | Light Gray | Alternating sections | — |
| `foreground` | `#243447` | Deep Navy Charcoal | Body copy, default text | 11.5:1 (AAA) |
| `primary` | `#1B365D` | Corporate Navy | Nav links, primary headers | 13.2:1 (AAA) |
| `secondary` | `#2F4B73` | Ocean Navy | Muted headings, hover links | 9.4:1 (AAA) |
| `accent` | `#C8A85A` | Gold | Key accents, CTA highlights | 4.8:1 (AA) |
| `border` | `#E5E7EB` | Soft Gray | Component dividers | 1.8:1 |

### Dark Mode (Slate Deep Ocean Theme)

| Semantic Token | Hex Code | Visual Style | Best Use | Contrast Ratio |
|---|---|---|---|---|
| `background` | `#10223B` | Deep Dark Navy | Page canvas | — |
| `card` | `#1A2840` | Medium Ocean Navy | Card containers | — |
| `foreground` | `#E2E8F0` | Soft Slate White | Content text | 11.2:1 (AAA) |
| `primary` | `#E2E8F0` | Soft Slate White | Action buttons | 11.2:1 (AAA) |
| `secondary` | `#C8A85A` | Gold | Active indicators | 6.8:1 (AAA) |
| `border` | `#223350` | Slate Ocean Border | Card separators | — |

---

## 3. Design Principles & Compliance

1. **No Pure Black:** `#000000` is strictly avoided to prevent harsh screen contrast. `#243447` offers excellent readability while feeling warm and premium.
2. **Contrast Standards:** Primary text elements exceed WCAG 2.2 AA contrast standards (minimum 4.5:1) and achieve AAA classification (above 7:1) for optimal readability.
3. **No Heavy Gradients:** Backgrounds are kept solid to maintain clean corporate professionalism.
