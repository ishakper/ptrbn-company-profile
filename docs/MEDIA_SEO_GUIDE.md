# RBN Media SEO Integration Guide
**PT. Pelayaran Nasional Radhika Bahari Nusantara**

This document outlines the guidelines and technical implementations for image SEO, metadata indexing, and structured schema outputs.

---

## 1. Alt Text Best Practices

For every corporate image uploaded to the CMS:
- **Alt Text must be descriptive:** Never use "image.jpg" or "photo".
- **Describe action and equipment:** Include vessel names, safety overalls, and harbor locations (e.g., `"Marine engineers performing dry dock hull inspection on vessel MV Radhika Indah"`).
- **Incorporate keywords naturally:** Seamlessly integrate B2B keywords like `"Indonesian archipelagic logistics"`, `"cargo shipping"`, and `"vessel maintenance"`.

---

## 2. Structured Schema Output (`ImageObject`)

The frontend SEO components dynamically inject the standard Google JSON-LD schema for indexed gallery images:

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://radhikabahari.co.id/gallery/lcu-sailing.jpg",
  "license": "https://radhikabahari.co.id/legal/copyright",
  "acquireLicensePage": "https://radhikabahari.co.id/contact",
  "caption": "RBN Gandha Nusantara 02 LCU vessel sailing in open water.",
  "creator": {
    "@type": "Person",
    "name": "Bambang Kusuma"
  },
  "copyrightNotice": "© PT. Pelayaran Nasional Radhika Bahari Nusantara"
}
```

---

## 3. Meta Tags (OpenGraph & Twitter Cards)

Every page dynamically sets `<meta property="og:image" content="..." />` and `<meta name="twitter:image" content="..." />` to guarantee that social sharing links preview the beautiful, optimized corporate photos.
