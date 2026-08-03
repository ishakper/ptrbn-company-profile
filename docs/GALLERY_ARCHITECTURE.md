# RBN Gallery Architecture Documentation
**PT. Pelayaran Nasional Radhika Bahari Nusantara**

This document outlines the frontend Gallery module architecture, state management hooks, and security protection controls.

---

## 1. Component Architecture

The React feature uses a decoupled structure to separate fetching, layout rendering, and visual interactions:

- **Service Layer (`services/gallery.ts`):** Async fetch handler querying `/api/v1/gallery` with parameters for categories and search terms. Returns robust fallback records when offline.
- **Filtering UI:** Interactive buttons mapping over categories (`fleet`, `operations`, `csr`, `management`) updating the state variable `selectedCategory`.
- **Search Controller:** Text input bound to `searchQuery` with a 300ms effect boundary to refresh list results dynamically.
- **Lightbox Preview:** Fullscreen overlay rendering the high-resolution pre-compiled image preview.

---

## 2. Security & Asset Protection Controls

To protect official maritime company assets and documentation photographs, the Lightbox implements two layers of theft prevention:

### Right-Click Disabling
We intercept the mouse context menu on image elements to prevent users from using "Save image as...":
```tsx
onContextMenu={(e) => e.preventDefault()}
```

### Drag & Drop Block
We prevent image dragging, which would allow users to drag the photo directly to their desktop or browser tabs:
```tsx
onDragStart={(e) => e.preventDefault()}
```

### Pointer Event Decoupling
Image elements have pointer-events rules applied dynamically to restrict inspector inspections.
