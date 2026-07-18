---
name: Majestic Prosperity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#404945'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2d6956'
  primary: '#003528'
  on-primary: '#ffffff'
  primary-container: '#0a4d3c'
  on-primary-container: '#81bda7'
  inverse-primary: '#96d3bc'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#3b2b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#574000'
  on-tertiary-container: '#dda900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b2efd8'
  primary-fixed-dim: '#96d3bc'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#10503f'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdf9a'
  tertiary-fixed-dim: '#f7be1d'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4300'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  surface-light: '#F8FAFC'
  emerald-accent: '#01A580'
  muted-slate: '#64748B'
typography:
  headline-xl:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system establishes a visual language that balances spiritual devotion with professional excellence. It is designed for a community that views financial success as a means to greater service and worship. The brand personality is **stately, ambitious, and welcoming**.

The chosen design style is **Corporate / Modern** with **Traditional Accents**. It utilizes a structured, high-end editorial feel that combines the precision of modern finance with the warmth of community-focused service. 

Key visual identifiers include:
- **Subtle Geometry:** Integration of Islamic patterns (Girih or Arabesque) used as low-opacity watermark backgrounds or thin-line borders.
- **Premium Accents:** Selective use of metallic gradients and gold-bordered elements to signify quality and "excellence" (Ihsan).
- **Abundant Whitespace:** A clean, uncluttered layout that allows high-quality photography and bold typography to breathe, evoking a sense of peace and clarity.

## Colors

The palette is anchored by **Deep Emerald Green**, a color deeply rooted in Islamic tradition representing growth and paradise. **Metallic Gold** is used as a secondary "prestige" color for ornamentation and borders, while **Bright Gold** serves specifically for high-visibility calls to action.

- **Primary (#0A4D3C):** Used for navigation bars, primary buttons, and hero typography.
- **Secondary (#D4AF37):** Used for decorative lines, icons, and subtle "member-only" badges.
- **CTA (#EAB308):** Strictly reserved for conversion points (Donate, Join, Register).
- **Background Strategy:** The interface primarily uses a clean white surface with light gray (#F8FAFC) sectioning to separate community news from business resources.

## Typography

The typography strategy employs a "High-Low" pairing. **Source Serif 4** provides an authoritative, scholarly, and premium feel for headings, suggesting deep wisdom and tradition. **Hanken Grotesk** is used for body copy to maintain a modern, efficient, and highly readable interface for business-related content.

- **Headlines:** Use tight letter-spacing for large displays to create a powerful, editorial look.
- **Labels:** Small labels and utility text should use increased letter-spacing and semi-bold weights for better scanning.
- **Reading Experience:** For long-form community blog posts or educational articles, prioritize `body-lg` to ensure accessibility for all age groups.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a premium, magazine-like structure. 

- **Grid:** A 12-column grid with 24px gutters.
- **Rhythm:** Spacing follows an 8px baseline. Use 64px or 80px vertical padding between major sections to emphasize the brand's premium whitespace philosophy.
- **Mobile Adaptivity:** On mobile devices, margins shrink to 16px. Columns collapse into a single-column stack, prioritizing the Prayer Times widget or primary CTA at the top of the scroll.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than heavy shadows. The system uses a "Flat-Plus" approach where depth is subtle and intentional.

- **Surfaces:** Use a soft 1px border in `#E2E8F0` for cards on white backgrounds.
- **Shadows:** When necessary (e.g., for modals or floating action buttons), use "Ambient Shadows"—extremely soft, low-opacity (#0F172A at 4%) with a large blur radius to avoid a "heavy" look.
- **Interactive Depth:** On hover, cards should transition with a subtle lift (y-axis shift of -4px) and a slightly more defined shadow to signify interactivity.

## Shapes

The design system uses a **Soft** shape language. This ensures the UI feels approachable and community-oriented while maintaining the sharp professionalism expected of a business-focused organization.

- **Standard Elements:** Buttons and input fields use a 4px (0.25rem) corner radius.
- **Containers:** Large cards and featured imagery use 8px (0.5rem) or 12px (0.75rem) radii to feel modern and distinct from the structural grid.
- **Decorative:** Islamic geometric patterns should be clipped into square or hexagonal containers to maintain a structured appearance.

## Components

### Buttons
- **Primary:** Deep Emerald Green background with white text. High contrast, solid fill.
- **Secondary:** Metallic Gold outline with gold text. Used for secondary navigation.
- **CTA:** Bright Gold/Yellow (#EAB308) with navy text (#0F172A). Used exclusively for "Donate" and "Join Community."

### Cards
- Community cards use white backgrounds with a subtle gold top-border (2px) to denote importance. 
- Business resource cards utilize a light gray (#F8FAFC) background to differentiate from spiritual content.

### Input Fields
- Clean, 1px bordered boxes using `muted-slate`. Focus states should use a 2px Deep Emerald Green border.

### Prayer Times Widget
- A distinctive component with a dark emerald background and gold typography. Use a subtle geometric pattern overlay to make this a focal point of the homepage.

### Lists
- Use custom list icons (small gold crescents or geometric stars) instead of standard bullets to reinforce the brand identity.