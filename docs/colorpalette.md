---
name: Baik Berdampak
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#adc7ff'
  primary: '#adc7ff'
  on-primary: '#002e68'
  primary-container: '#4a8eff'
  on-primary-container: '#00285b'
  inverse-primary: '#005bc0'
  secondary: '#ffb59a'
  on-secondary: '#5b1b00'
  secondary-container: '#cd4802'
  on-secondary-container: '#fffbff'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#8990a8'
  on-tertiary-container: '#22293d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#802900'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 48px
---

## Brand & Style

The brand personality is rooted in "Impactful Benevolence"—combining a professional, institutional foundation with a vibrant, optimistic drive for social change. It aims to evoke trust, clarity, and energy.

The design system utilizes a **Modern Corporate** style with **Tactile / Glassmorphism** accents. It balances a deep, authoritative background with high-energy accents and subtle depth through soft glows and translucent layering. This approach ensures the platform feels like a high-tech solution for social impact, rather than a traditional, static non-profit site.

## Colors

This design system is built on a "Deep Sea" dark mode foundation. The primary palette is extracted directly from the brand's visual identity:

*   **Primary (Impact Blue):** A vibrant, high-saturation blue used for primary actions and core brand recognition.
*   **Secondary (Momentum Orange):** A warm, energetic orange used sparingly for emphasis, status, or call-to-action highlights.
*   **Surface (Deep Navy):** The core background color is a very dark navy, providing a sophisticated alternative to pure black.
*   **Typography:** Primary text is off-white to reduce eye strain, while secondary text uses a muted slate to establish hierarchy.

## Typography

We use **Plus Jakarta Sans** across the entire system. Its geometric yet friendly character aligns perfectly with the brand's contemporary and approachable mission.

*   **Headlines:** Heavy weights (700) with tight letter-spacing are used to create a "locked-in," impactful look for key messaging.
*   **Body:** Medium sizing with generous line height ensures high legibility on dark backgrounds.
*   **Hierarchy:** Use the Bold weight for primary calls to action and navigational links to maintain brand presence even at smaller sizes.

## Layout & Spacing

The design system employs a **Fluid Grid** approach within a centered container.

*   **Grid:** A 12-column layout for desktop with 24px gutters. On mobile, this collapses to a single-column layout with 20px side margins.
*   **Vertical Rhythm:** Spacing is defined in multiples of 8. Sections are typically separated by `stack-lg` to provide ample breathing room, echoing the minimalist, "premium" feel of the brand.
*   **Alignment:** Text is primarily left-aligned to ground the layout, while icons and decorative elements can be used more dynamically to create a sense of movement.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Glows**:

1.  **Base Layer:** The deep navy background.
2.  **Floating Layer:** Interactive elements like cards use a slightly lighter shade of navy with a subtle 1px border (low-contrast outline) to define their edges.
3.  **Active Depth:** Primary buttons and featured cards utilize a soft, colored "Outer Glow" (using the Primary Blue) to simulate light emission, making them appear to hover above the surface.
4.  **Glass Effects:** For secondary decorative elements (like background icons), use a backdrop blur of 12px and 20% opacity white fills to create a sense of glass-like transparency.

## Shapes

The shape language is highly approachable. We utilize a **Pill-shaped (Level 3)** roundedness for buttons and interactive components to soften the "tech" feel of the dark UI.

*   **Buttons:** Always fully pill-shaped (rounded-full).
*   **Cards:** Use `rounded-xl` (1.5rem / 24px) to maintain a friendly, soft aesthetic.
*   **Icons:** Contained within rounded squares or circles with consistent padding.

## Components

### Buttons
Primary buttons are pill-shaped, using the Primary Blue background with white text. They include a subtle glow shadow in the same blue. Secondary buttons use a transparent background with a white or blue 1.5px border.

### Cards
Cards are stylized as "Glass Tiles." They should have a background color slightly lighter than the main page background, a subtle white 10% opacity border, and a 12px border radius.

### Input Fields
Inputs use the same "Glass Tile" style but with a darker fill. On focus, the border transitions to Primary Blue with a soft outer glow.

### Chips/Tags
Used for categories like "Beasiswa" or "Donasi." These should be small, pill-shaped, and use low-opacity versions of the secondary or primary colors (e.g., 10% Orange background with 100% Orange text).

### Lists
Lists are clean and minimal, separated by subtle low-contrast lines (8% white opacity). Use the secondary orange for bullet icons or checkmarks to draw the eye.