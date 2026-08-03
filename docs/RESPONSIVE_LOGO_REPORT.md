# Responsive Logo & Hero Banner Report
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Version: 2.2.0 | Last Updated: 2026-08-02 | Status: APPROVED

---

## 1. Breakpoint Sizing Table (Landscape Logo)

The primary landscape logo (`logo-landscape-transparent.png`) has been tested across all viewport breakpoints to ensure correct rendering and aspect-ratio integrity:

| Breakpoint | Width Value | Header Height | Logo Height | CSS Implementation | Layout Behavior |
|---|---|---|---|---|---|
| **XS** | 320px | 72px | 56px | `h-[72px]` / `h-[56px]` | Centered brand, mobile toggle visible |
| **SM-XS** | 375px | 72px | 56px | `h-[72px]` / `h-[56px]` | Crisp rendering, no overlap |
| **SM** | 480px | 72px | 56px | `h-[72px]` / `h-[56px]` | Optimized spacing |
| **MD** | 640px | 80px | 68px | `sm:h-20` / `sm:h-[68px]` | Tablet header padding activated |
| **TAB** | 768px | 80px | 68px | `sm:h-20` / `sm:h-[68px]` | Clean side actions |
| **LG** | 1024px | 96px | 82px | `lg:h-24` / `lg:h-[82px]` | Navigation links visible |
| **XL** | 1280px | 96px | 82px | `lg:h-24` / `lg:h-[82px]` | Full grid spacing |
| **2XL** | 1536px | 96px | 82px | `lg:h-24` / `lg:h-[82px]` | Locked max container alignment |

---

## 2. Hero Background Banner Aspect-Ratio Optimization

The new corporate collage banner image (`hero-ship.png`) has native dimensions of **`1024x472px`**, yielding a balanced **`2.17:1`** aspect ratio.

To prevent distortion, stretch, or vertical content clipping, the hero banner section sizing has been dynamically configured:

* **Desktop Viewports (`lg` and up):** Configured with `lg:aspect-[2.17/1] lg:min-h-0`. This forces the container height to dynamically track the width in a perfect `2.17:1` ratio. 100% of the crew, catamaran, transport vessel, and embedded company text details are shown without any cropping.
* **Mobile & Tablet Viewports (under `lg`):** Configured with `min-h-[480px]` and `py-10` to allow safe, readable text vertical nesting while preventing background layout collapse.
* **Legibility Overlay Card:** Wrapped the text elements in a semi-transparent frosted glass container (`bg-navy-950/65 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl`) to ensure text readability over the bright white water wakes and catamaran details.
