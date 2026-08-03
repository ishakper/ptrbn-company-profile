# UI Acceptance Checklist
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: COMPLIANT

---

## 1. Visual Acceptance Checklist

- [x] Official landscape logo displayed on Desktop and Sticky Header
- [x] Official landscape logo displayed on CMS Login page
- [x] Official circular badge logo displayed on Favicons (Browser Tab)
- [x] Official circular badge logo displayed on Page Loading splash screen
- [x] Official circular badge logo displayed on Mobile Menu Drawer
- [x] Official circular badge logo displayed on Footer
- [x] Official circular badge logo displayed on 404 & 500 error pages
- [x] No solid white background template borders behind logo elements
- [x] No placeholder images remaining in active sections (Vite `hero.png` asset loaded)
- [x] No generic "Company Name" or "My Company" strings in text elements
- [x] No Lorem Ipsum placeholder paragraphs in about, home, or contact pages
- [x] Logo dimensions and aspect ratios are preserved across screen sizes
- [x] Logo rendering is sharp and clear on High-DPI / Retina screens

## 2. Layout & Spacing Checklist

- [x] Page backgrounds use comfortable `#FAFBFC` Soft White
- [x] Section backgrounds use `#F5F7FA` Light Gray for separation
- [x] All cards (Services, Fleet, News) have white backgrounds with thin borders
- [x] Margin spaces between main blocks set to a spacious `7rem` scale
- [x] Card padding set to a generous `1.5rem` or `2rem` padding
- [x] Clean typography hierarchy using `Plus Jakarta Sans` for headers and `Inter` for prose
- [x] Navigation bar spacing and margins centered cleanly
- [x] Footer elements aligned properly on mobile and desktop
- [x] Dark mode theme HSL properties mapped correctly to Navy backgrounds

## 3. Responsive Breakpoint Verification

- [x] **320px:** Menu collapses to trigger button; logo scales cleanly; no horizontal scrolling
- [x] **375px:** Navigation drawer layout is centered and legible
- [x] **425px:** Form elements stack nicely in one column
- [x] **768px:** Grid items change to 2 columns; padding scales down safely
- [x] **1024px:** Desktop header and links appear; navigation fits screen width
- [x] **1280px:** Container margins centered; section whitespace is optimal
- [x] **1536px:** Layout remains restricted to max container width of `1200px`

## 4. Accessibility Checklist

- [x] Skip to main content link works on `Tab` focus
- [x] High-contrast `:focus-visible` ring active around buttons, links, and inputs
- [x] ARIA attributes present on mobile drawer toggles and form buttons
- [x] Text color contrast ratios satisfy or exceed WCAG 2.2 Level AA requirements
- [x] Font sizes scale with browser accessibility overrides
- [x] Touch targets for buttons are at least `44x44px` in area
- [x] Navigation elements support standard keyboard tab orders
