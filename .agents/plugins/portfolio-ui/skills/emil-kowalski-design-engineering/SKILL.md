---
name: emil-kowalski-design-engineering
description: Adds smooth UI motion, micro-interactions, spring physics, and scrollytelling animations inspired by Emil Kowalski's design engineering principles.
---

# Emil Kowalski Design Engineering: UI Motion & Micro-Interactions

Use this skill when designing fluid transitions, physical feel, tactile micro-interactions, and high-performance scroll-driven animations.

---

## 1. Principles of Purposeful Motion

- **Motion Communicates State, Not Decoration**:
  - Animations must explain where an element came from, what happened, or where focus moved.
  - Duration sweet spot: **150ms–300ms** for micro-interactions; **350ms–500ms** for modal/drawer entrances. Anything > 500ms feels sluggish.
- **Physical Spring Easing**:
  - Avoid linear or generic `ease-in-out`. Use custom spring curves that feel organic:
  ```css
  /* Crisp, responsive snap */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  /* Gentle, organic deceleration */
  --ease-gentle: cubic-bezier(0.25, 0.9, 0.25, 1);
  ```

---

## 2. Micro-Interactions & Tactile Feedback

### Tactile Button Press
```css
.interactive-btn {
  transition: transform 0.18s var(--ease-spring), box-shadow 0.18s var(--ease-spring);
  will-change: transform;
}

.interactive-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px -4px rgba(56, 189, 248, 0.3);
}

.interactive-btn:active {
  transform: translateY(1px) scale(0.98);
}
```

### Staggered List / Card Entrance
Animate child elements with escalating transition delays using CSS variables:
```css
.stagger-item {
  opacity: 0;
  transform: translateY(16px);
  animation: revealUp 0.5s var(--ease-spring) forwards;
  animation-delay: calc(var(--index, 0) * 80ms);
}

@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Magnetic / Interactive Tilt (Vanilla-Tilt or Pointer Coordinates)
Keep tilt subtle to maintain readability:
- Maximum tilt angle: `6deg` – `8deg`
- Glare intensity: `0.1` – `0.15` maximum
- Check `window.matchMedia('(prefers-reduced-motion: reduce)')` prior to initialization.

---

## 3. Scrollytelling & Intersection Observers

Use `IntersectionObserver` with a clean trigger threshold to bring elements alive as the user scrolls:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Unobserve once animated to prevent CPU churn
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```

---

## 4. Design Engineering Motion Checklist
- [ ] Only animate `transform` and `opacity` (100% composite on GPU).
- [ ] No layout reflow triggers (`width`, `height`, `margin`, `top`) animated.
- [ ] `prefers-reduced-motion` strictly honored (disables or collapses animations to instant transitions).
- [ ] Touch devices: Hover animations don't stick or break on tap (`@media (hover: hover)` guards).
