# Portfolio UI Design System & Guidelines

Guidelines for styling, animating, and structuring UI components for Wei Kiat's personal portfolio website.

## Core Visual Identity
- **Theme**: Premium dark mode with subtle glassmorphism (`backdrop-filter: blur(12px)`), dark slate/indigo backgrounds (`#0a0f1d`, `#0f172a`), and clean semi-transparent borders (`rgba(255, 255, 255, 0.08)`).
- **Typography**: Inter (Google Fonts) with strict weight hierarchy (800 headings, 600 subheadings, 400/500 body). Maintain line-height of 1.6 for readability.
- **Accents**: Cyan/Teal (`#38bdf8`, `#2dd4bf`) and soft violet gradients for highlights and badges. Avoid neon over-saturation.

## Interactive UI Principles
- **Micro-Interactions**: Use hardware-accelerated transforms (`transform`, `opacity`) for 60fps animations. Avoid animating layout properties (`width`, `height`, `margin`).
- **3D Card Depth**: Use subtle interactive card tilt (`Vanilla-Tilt.js`) with gentle glare effects (`max: 6`, `glare: true`, `max-glare: 0.12`).
- **Accessibility (a11y)**:
  - Respect `prefers-reduced-motion: reduce`.
  - Ensure all clickable items have `:focus-visible` outlines.
  - Interactive touch targets must be at least 44x44px.
  - Maintain WCAG AA contrast (minimum 4.5:1 for body text).

## Project Card Patterns
- Cards must use consistent aspect ratios for thumbnails, clean category tags, clear date badges, and prominent case study action links.
- When filtering projects, transition visibility smoothly without disrupting adjacent layout flow.
