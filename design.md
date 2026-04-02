# Ampersand Design System

This document captures the visual design language of the Ampersand project for reference and consistency.

---

## Colors

| Name        | Hex       | Usage                                      |
|-------------|-----------|--------------------------------------------|
| Dark        | `#212121` | Primary text, dark backgrounds, dark buttons |
| Light BG    | `#f5f5f5` | Page background, light buttons             |
| Subtitle    | `#e7e7e7` | Hero subtitle text                         |
| Gray        | `#737373` | Secondary text, hover states               |
| Border      | `#dcdcdc` | Dividers, dots, icon fills                 |
| White       | `#ffffff` | Card backgrounds, search button            |
| Accent Yellow | `#fdf2b4` | Tags, primary CTA button background       |

---

## Typography

### Fonts
- **Poppins** (400, 500) — Logo, Hero title
- **Pretendard** (400, 500, 600, 700) — All other text (Korean UI)

### Type Scale

| Role              | Font        | Size     | Weight | Line Height | Letter Spacing |
|-------------------|-------------|----------|--------|-------------|----------------|
| Logo              | Poppins     | 28px     | 500    | —           | -1.4px         |
| Hero Title        | Poppins     | 56–70px  | 400    | 1.2         | -1.4px         |
| Hero Subtitle     | Pretendard  | 20px     | 400    | 40px        | -0.4px         |
| Section Title     | Pretendard  | 28px     | 700    | 1.5         | —              |
| Body / Description | Pretendard | 16px     | 500    | 22px        | -0.32px        |
| Card Name         | Pretendard  | 20px     | 600    | 22px        | —              |
| Tag / Label       | Pretendard  | 14px     | 500    | 22px        | —              |
| CTA Button        | Pretendard  | 20px     | 700    | 35px        | —              |
| Nav Button        | Pretendard  | 16px     | 500    | 22px        | -0.32px        |

---

## Spacing

| Context         | Value  |
|-----------------|--------|
| Page padding (desktop) | 80px horizontal |
| Page padding (tablet)  | 40px horizontal |
| Page padding (mobile)  | 16px horizontal |
| Hero vertical padding  | 200px (desktop), 120px (mobile) |
| Section vertical padding | 120px (desktop), 80px (mobile) |
| Hero content gap | 60px |
| Section content gap | 60px |
| Hero text gap    | 40px (desktop), 32px (mobile) |
| Card gap         | 16px  |

---

## Border Radius

| Element       | Radius  |
|---------------|---------|
| Card          | 16px    |
| Nav buttons   | 8px     |
| Tag           | 4px     |
| CTA button    | 1000px (pill shape) |
| Search button | 8px     |

---

## Components

### Navigation Bar
- Sticky to the top; hides on scroll down, reappears on scroll up
- Height: 72px (desktop), auto (mobile)
- Contains: Logo (left), Auth buttons (right)
- Background: `#f5f5f5` (matches page background for seamless look)

### Buttons

| Type        | Background | Text Color | Hover              | Size         |
|-------------|------------|------------|--------------------|--------------|
| Light (nav) | `#f5f5f5`  | `#212121`  | text → `#737373`   | 40px height  |
| Dark (nav)  | `#212121`  | `#ffffff`  | bg → `#737373`     | 40px height  |
| CTA Yellow  | `#fdf2b4`  | `#212121`  | bg → `#ffffff`     | 60px height, pill shape |
| CTA Black   | `#212121`  | `#ffffff`  | bg → `#737373`     | 60px height, pill shape |

All transitions: `500ms cubic-bezier(0.2, 0.8, 0.2, 1)` — a smooth ease-out curve.

### Member Card
- White background, 16px corner radius
- Padding: 16px 20px 40px
- Flexible width: min 260px, max 400px
- Contains: member name + more button, skill tags, horizontal divider, learning goal section

### Tag
- Background: Accent Yellow `#fdf2b4`
- Corner radius: 4px
- Padding: 2px 8px

---

## Layout

### Grid / Responsive Behavior
- **Desktop (1100px+):** 80px side padding, hero title scales 56–70px
- **Tablet (768–1100px):** 40px side padding, hero title scales 40–56px
- **Mobile (under 768px):** 16px side padding, buttons shrink, cards go full width

### Hero Section
- Full viewport height (`min-height: 100vh`)
- Dark background `#212121`, centered text
- Content max-width: 500px

### Members Section
- Light background `#f5f5f5`
- Content max-width: 1080px
- Card list wraps flexibly

---

## Motion

All interactive transitions use the same custom easing: `cubic-bezier(0.2, 0.8, 0.2, 1)` at `500ms`.
This creates a fast, snappy feel with a smooth landing — suitable for hover effects on buttons and text color changes.

The top navigation bar uses `transition: transform 0.3s ease` for its scroll-hide animation.
