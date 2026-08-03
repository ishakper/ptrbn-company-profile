# RBN Media Storage & Compression Guide
**PT. Pelayaran Nasional Radhika Bahari Nusantara**

This document outlines the file storage architecture, Spatie image conversions, and compression rules configured in the RBN platform.

---

## 1. Storage Disks Layout

We separate file assets into two storage configurations to optimize retrieval speed:

- **Local Storage Disk (`public`):** Stores original high-resolution uploads. File paths map to `/storage/media/...` linked morphically.
- **Conversions Disk (`public`):** Stores pre-compiled, resized versions (thumbnails and web-optimized images) to prevent on-the-fly rendering CPU spikes.

---

## 2. Spatie Media Conversion Specs

On upload of any corporate image to the `'image'` collection of a `MediaItem`, the following conversions run automatically:

### A. WebP Conversion
- Converts input formats (PNG, JPEG) to WebP.
- Reduces raw file size by 65-80% while retaining high visual clarity.

### B. Thumbnail Conversion (`thumbnail`)
- **Dimensions:** 150px width x 150px height.
- **Options:** Aspect ratio locked, sharpened (value: 10), stored as non-queued.
- **Use Case:** CMS table previews.

### C. Large Preview Conversion (`large`)
- **Dimensions:** Max 1000px width x 1000px height.
- **Options:** Stored as non-queued.
- **Use Case:** Lightbox fullscreen viewer.

---

## 3. Responsive Images (`srcset`)

Spatie Media Library automatically generates multiple responsive widths (e.g., 360w, 720w, 1000w). The frontend leverages these in `srcset` tags to ensure browsers only download files sized appropriately for the user's current screen resolution (mobile vs desktop).
