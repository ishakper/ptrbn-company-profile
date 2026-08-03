# Asset Guidelines & Image Standards
## PT. Pelayaran Nasional Radhika Bahari Nusantara — Web Platform

> Version: 2.0.0 | Last Updated: 2026-08-02 | Status: APPROVED

---

## 1. Logo Specifications & Formats

We deploy two transparent branding assets across all workspace and public channels:

| Asset Name | Format | Dimensions | Purpose / Location |
|---|---|---|---|
| `logo-landscape-transparent.png` | PNG-32 | 978×363px | Main navigation headers, footers, page loader, login and admin templates |
| `logo-badge-transparent.png` | PNG-32 | 991×950px | Favicons, circular badges, profile page components, and social share links |
| `favicon.png` | PNG-32 | 64x64px | Web browser tabs |

---

## 2. Image Standards

| Category | Recommended Format | Fallback | Max Size | Sizing & Spacing Constraint |
|---|---|---|---|---|
| Hero Banner Image | `WebP` / `PNG` | `JPEG` | 350 KB | Split-screen or dark overlaid layout |
| Vessel Photography | `WebP` | `JPEG` | 250 KB | Standardized 4:3 crop aspect ratios |
| Compliance Badges | `SVG` | `PNG` | 20 KB | Clean vector shapes, transparent bg |

---

## 3. Storage & CMS uploads

- Public dynamic images uploaded via the CMS are resized to a maximum width of 1920px (webp/jpeg format).
- File naming conventions require lower-case kebab-case style: `[category]_[entity-slug]_[description]w.[ext]`.
- All images must support dynamic responsive source tags using `srcset` specifications for cross-device screen optimizations.
