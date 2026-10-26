---
name: impeccable
description: Focuses on high-level frontend and UI/UX design patterns, structural hierarchy, design system consistency, and cognitive ergonomics.
---

# Impeccable: High-Level Frontend & UI/UX Design Patterns

Use this skill to guide architectural UI/UX decisions, establish spatial balance, reduce cognitive load, and ensure world-class design integrity across web interfaces.

---

## 1. Core Design Tenets

### Visual Hierarchy & Intentionality
- **Focal Dominance**: Every viewport must have one clear primary focal point (e.g. Hero value proposition, Primary CTA button, or Lead Case Study). Avoid competing high-contrast elements.
- **Scanning Ergonomics (F-Pattern & Z-Pattern)**: Align key scannable hooks (headings, metric counters, logos) along natural reading trajectories.
- **De-cluttering**: Eliminate redundant decorative borders and containers. Use whitespace and tonal background contrast instead of heavy lines.

---

## 2. Spatial Rhythm & Layout Mathematics

- **8-Point Spacing Grid**: Use consistent multiples of 8px (or 4px for fine sub-elements):
  - Micro gaps (badge padding, tag margins): `4px` / `8px`
  - Element spacing (input to label, icon to text): `8px` / `12px` / `16px`
  - Component padding (cards, modals, dropdowns): `20px` / `24px` / `32px`
  - Section vertical rhythm: `64px` / `96px` / `128px`
- **Typographic Scale & Proportions**:
  - Headings: Maintain strict optical scale ratios (1.25x Major Third or 1.333x Perfect Fourth).
  - Body Text: Maximum line length of 65–75 characters (`max-width: 65ch`) for optimal readability.
  - Line Height: 1.1–1.25 for display titles; 1.5–1.65 for body text.

---

## 3. Comprehensive State Design

Every interactive component must account for 7 discrete states:
1. **Default**: Clear affordance, legible contrast, accessible typography.
2. **Hover**: Visual elevation, subtle border glow, or micro-scale (`transform: translateY(-2px)`).
3. **Active / Pressed**: Immediate feedback with physical depression (`transform: translateY(1px)` or `scale(0.98)`).
4. **Focused / Keyboard**: Crisp, high-contrast `:focus-visible` outline with offset (`outline: 2px solid var(--accent); outline-offset: 3px;`).
5. **Loading / Skeleton**: Layout-preserving skeleton pulses or subtle spinners preventing cumulative layout shift (CLS).
6. **Disabled**: Reduced opacity (`0.45`), muted cursor (`not-allowed`), and `pointer-events: none` where appropriate.
7. **Error / Empty State**: Descriptive, actionable guidance explaining what went wrong and how to recover.

---

## 4. UI/UX Review Checklist
- [ ] Visual Hierarchy: Does the most critical action stand out in under 3 seconds?
- [ ] Whitespace Harmony: Is there sufficient breathing room between distinct semantic sections?
- [ ] Consistent Design Tokens: Are colors, border-radii, and shadows pulled strictly from CSS variables?
- [ ] No Dead Ends: Every screen and case study has a clear next action or return path.
- [ ] Contrast & Readability: WCAG AA compliant (minimum 4.5:1 for body copy, 3:1 for large display text).
