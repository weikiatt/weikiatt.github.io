---
name: apple-design
description: Implements sleek Apple-inspired interface interactions, frosted glass materials, refined typography hierarchy, and Cupertino-grade aesthetic details.
---

# Apple Design: Cupertino-Grade Interfaces & Materials

Use this skill to implement design principles inspired by Apple's Human Interface Guidelines (HIG), macOS/iOS aesthetics, and Apple product landing pages.

---

## 1. Cupertino Visual Language & Materials

### Frosted Glass / Vibrancy (Liquid Glass)
Apple's signature material combines blur, saturation boost, and ultra-thin inner border highlights:

```css
.apple-glass {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 10px 30px -5px rgba(0, 0, 0, 0.05),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.6);
}

[data-theme="dark"] .apple-glass {
  background: rgba(20, 24, 33, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
}
```

### Squircle Curvature (Continuous Corners)
Apple interfaces favor generous, smooth curvatures rather than sharp boxes:
- Standard card: `border-radius: 20px` to `24px`
- Action button / Pill: `border-radius: 9999px`
- Modal dialog: `border-radius: 28px`

---

## 2. Typographic Elegance & Hierarchy

- **Font Pairing**: Inter or SF Pro Display / Text (`-apple-system, BlinkMacSystemFont, 'Inter', sans-serif`).
- **Apple Headline Treatment**:
  - Crisp, condensed tracking on large display type: `letter-spacing: -0.03em`.
  - Gradient masked text for hero titles:
    ```css
    .apple-gradient-text {
      background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    ```
- **Eyebrow Category Headers**: Small uppercase subtitles preceding main headers:
  ```css
  .eyebrow {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
  }
  ```

---

## 3. Tactile UI Components

### Floating Capsule Navbar
- Fixed, centered pill floating above the viewport with smooth backdrop blur.
- Minimalist navigation links with subtle underline or indicator pill shifting smoothly on hover.

### Segmented Controls (iOS Style)
- Sliding pill indicator underneath active tab that animates position on click.

---

## 4. Apple Design Review Checklist
- [ ] Frosted Glass: Does the navbar/card blur content underneath smoothly (`backdrop-filter`)?
- [ ] Inner Border Highlight: Are cards refined with an inset 1px highlight (`inset 0 1px 0 rgba(...)`)?
- [ ] Typography Tracking: Are display titles kerned tighter (`-0.02em` to `-0.03em`) and subtitles tracked wider?
- [ ] Generous Breathing Room: Adequate whitespace between content blocks mimicking Apple product showcases.
