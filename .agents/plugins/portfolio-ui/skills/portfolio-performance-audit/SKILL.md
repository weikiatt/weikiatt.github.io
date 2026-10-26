---
name: portfolio-performance-audit
description: Audit and optimize page loading performance, Core Web Vitals, image asset compression, script execution, and animation rendering efficiency.
---

# Portfolio Performance & Web Vitals Audit Skill

Use this workflow to ensure the portfolio loads within 1 second, maintains a 95+ Google Lighthouse score, and runs animations smoothly at 60fps.

## 1. Core Web Vitals Targets
- **Largest Contentful Paint (LCP)**: < 1.2s (Ensure hero image and typography load fast).
- **First Input Delay / Interaction to Next Paint (FID / INP)**: < 100ms (Minimize main-thread JavaScript blocking).
- **Cumulative Layout Shift (CLS)**: < 0.05 (Reserve image dimensions and font swap spacing).

---

## 2. Asset & Image Optimization Workflow

1. **Format & Sizing**:
   - Ensure all images are sized appropriately for their container (avoid loading 4000x3000px images scaled down to 200px).
   - Convert large PNGs/JPGs to modern WebP format where applicable.
2. **Native Lazy Loading**:
   - Above-the-fold images (Hero profile picture): Do NOT lazy load; use `fetchpriority="high"`.
   - Below-the-fold images (Project thumbnails, company logos, certificates): Add `loading="lazy" decoding="async"`.
3. **Explicit Dimensions**:
   - Always specify `width` and `height` attributes on images to prevent CLS layout jumps.

---

## 3. Font & Resource Delivery

- **Font Preconnect & Display**:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  ```
- **External Scripts**:
  - Load non-critical scripts with `defer` or place them at the bottom of `<body>`.
  - Check CDN bundle sizes (e.g. FontAwesome — consider serving only required SVG icons if bundle is too heavy).

---

## 4. Animation & Rendering Performance

- **GPU Acceleration**:
  - Only animate `transform` and `opacity`.
  - Avoid animating layout triggers like `top`, `left`, `width`, `height`, or `box-shadow`.
- **Reduced Motion Support**:
  - Always guard animations and card tilt interactions:
    ```css
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
    ```
  - In `script.js`, check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before initializing Vanilla-Tilt or ticker loops.

---

## 5. Performance Audit Checklist
- [ ] Profile photo loads instantly without layout shifts.
- [ ] All project thumbnails have `loading="lazy"` and descriptive `alt` tags.
- [ ] No render-blocking scripts in `<head>` (except the lightweight theme pre-init snippet).
- [ ] Page scrolling is buttery smooth (60fps) with no jank from scroll listeners.
