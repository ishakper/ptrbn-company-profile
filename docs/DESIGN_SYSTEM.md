# Design System Specifications
## PT Radhika Bahari Nusantara — Web Platform

> Version: 2.0.0 | Last Updated: 2026-08-02 | Status: APPROVED

---

## 1. Brand Identity Core

The RBN Group design system reflects premium corporate professionalism, maritime precision, and absolute B2B trust. It aligns closely with clean, corporate layout structures seen in international shipping networks.

---

## 2. Color Tokens (85-10-5 Rule)

### Canvas & Backgrounds (85% and 10% blocks)
- `--background`: `#FAFBFC` (Soft White page fill)
- `--muted`: `#F5F7FA` (Light Gray alternating section backgrounds)
- `--border`: `#E5E7EB` (Clean component divider lines)

### Typography & Content
- `--foreground`: `#243447` (Warm navy-tinted charcoal text - avoids harsh pitch black)
- `--muted-foreground`: `#5C6B7A` (Warmer slate gray for captions and metadata)

### Anchor Accents (5% branding weight)
- `--primary`: `#1B365D` (Corporate Navy primary brand color)
- `--secondary`: `#2F4B73` (Ocean Navy for secondary elements)
- `--accent`: `#C8A85A` (Gold accent, used selectively for CTAs and highlights)

---

## 3. Typography System

- **Display (Headings):** `Plus Jakarta Sans` (Weights: 600 SemiBold, 700 Bold)
  - Layout usage: Tighter letter-spacing `tracking-tight` for an editorial feel.
- **Body & Controls:** `Inter` (Weights: 400 Regular, 500 Medium)
  - Layout usage: Higher `line-height: 1.7` for comfortable reading layouts.

---

## 4. Layout Sizing Standards

### Header Height
- Desktop: `96px` (`lg:h-24`)
- Tablet: `80px` (`sm:h-20`)
- Mobile: `72px` (`h-[72px]`)

### Logo Sizing
- Desktop: `82px` (`lg:h-[82px]`)
- Tablet: `68px` (`sm:h-[68px]`)
- Mobile: `56px` (`h-[56px]`)
- Formatting: `w-auto object-contain shrink-0`

---

## 5. Animation Policy

Flashy, playful web animations are disabled. Only understated micro-interactions are permitted:
- **Fade-in (Scroll reveals):** Opacity-only transitions (`duration: 0.4s` smooth ease). No vertical translations or sliding effects.
- **Interactive States:** Subtle color shifts or card shadows (0.2s duration). No card movement or pop scaling on hover. Button presses leverage a restrained `active:scale-[0.98]` micro-feedback.
- **Reduced Motion:** Configured via standard `@media (prefers-reduced-motion: reduce)` media query inside `index.css`.
