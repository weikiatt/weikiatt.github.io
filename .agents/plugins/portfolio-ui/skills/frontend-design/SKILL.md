---
name: frontend-design
description: Guides the agent to build clean, production-grade web interfaces with robust CSS architecture, modular layouts, and defensive frontend engineering.
---

# Frontend Design: Production-Grade Web Engineering

Use this skill to implement clean, resilient, and maintainable frontend code across HTML, CSS, and Vanilla JavaScript.

---

## 1. CSS Architecture & Design Token System

Adopt CSS Custom Properties (Variables) organized by token tiers:

```css
:root {
  /* Tier 1: Primitive Palette */
  --slate-900: #0a0f1d;
  --slate-800: #0f172a;
  --slate-700: #1e293b;
  --cyan-400: #38bdf8;
  --indigo-500: #6366f1;

  /* Tier 2: Semantic Tokens */
  --bg-primary: var(--slate-900);
  --bg-surface: var(--slate-800);
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --accent-glow: rgba(56, 189, 248, 0.15);

  /* Tier 3: Motion & Elevation */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --radius-md: 12px;
  --radius-lg: 16px;
}
```

---

## 2. Defensive CSS & Layout Resilience

- **Flex & Grid Wrapping**: Never allow flex containers with variable-length text or badges to overflow:
  ```css
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  ```
- **Text Truncation & Overflow Safety**:
  ```css
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  ```
- **Intrinsic Aspect Ratios**: Prevent Cumulative Layout Shift (CLS) on thumbnails:
  ```css
  .card-thumbnail {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
  }
  ```
- **Viewport Unit Safety**: Use `dvh` (dynamic viewport height) instead of `vh` to prevent mobile address-bar clipping:
  ```css
  .hero-container {
    min-height: 100dvh;
  }
  ```

---

## 3. Production JavaScript Best Practices

- **Strict Event Delegation**: Bind event listeners to parent containers rather than multiple individual cards or list items.
- **Debouncing & Throttling**: Throttle scroll, resize, or pointer-move listeners using `requestAnimationFrame`.
- **Zero-Dependency DOM Manipulation**:
  ```javascript
  // Clean, self-initializing DOM component pattern
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) return;
    
    // Scoped logic here
  });
  ```

---

## 4. Frontend Production Checklist
- [ ] Responsive Breakpoints: Checked at 360px (mobile), 768px (tablet), 1024px (laptop), and 1440px (desktop).
- [ ] No Horizontal Overflow: Verify `body { overflow-x: hidden; }` and ensure elements don't exceed `100vw`.
- [ ] Dark/Light Mode Theme Stability: Theme switches instantly without FOUC (flash of unstyled content) via inline `<head>` script.
- [ ] Semantic Tags: Proper `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` markup.
