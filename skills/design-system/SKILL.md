---
name: design-system
description: Plan Notice Client Portal design system documentation. Use when creating new pages, components, styling elements, or when the user asks about design patterns, colors, typography, buttons, cards, tables, modals, forms, or any UI elements. Contains complete CSS patterns, component code examples, and layout templates.
---

# Plan Notice Client Portal Design System

This skill provides comprehensive design documentation for the Plan Notice Client Portal. Use this to ensure visual consistency when building new pages or components.

## Quick Reference Files

- [COLORS.md](COLORS.md) - Complete color palette and gradients
- [COMPONENTS.md](COMPONENTS.md) - All UI components with code examples
- [LAYOUTS.md](LAYOUTS.md) - Page templates and layout patterns
- [ANIMATIONS.md](ANIMATIONS.md) - Transitions, keyframes, and effects

---

## Project Structure

When using this as a starter template, ensure your project has this structure:

```
project-root/
├── .claude/
│   └── skills/
│       └── design-system/      # This skill folder
├── images/
│   └── logo.png                # Navigation logo (required)
├── styles.css                  # Custom CSS (animations, badges)
├── scripts.js                  # JavaScript interactions
└── index.html                  # Your pages
```

### Logo Requirements

- **Location:** `images/logo.png`
- **Recommended size:** Height ~40px (will display as `h-10` / 2.5rem)
- **Format:** PNG with transparency recommended
- **Usage:** Displayed in the navigation sidebar

---

## Setup & Dependencies

### Required CDN Links

```html
<!-- Tailwind CSS -->
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<!-- Google Fonts - Poppins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js" defer></script>
```

### Base Body Styles

```html
<body class="font-sans bg-gray-50 text-gray-900 m-0">
```

### Icon Initialization

```javascript
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});
```

---

## CSS Variables (Root Configuration)

```css
:root {
    --primary: #7C3AED;
    --secondary: #4F46E5;
    --success: #10B981;
    --warning: #F59E0B;
    --danger: #EF4444;
    --info: #3B82F6;
}
```

---

## Color System Overview

### Primary Brand Colors
| Name | Hex | Tailwind Class |
|------|-----|----------------|
| Primary Purple | #7C3AED | `purple-600` |
| Primary Dark | #6B21A8 | `purple-800` |
| Primary Light | #E9D5FF | `purple-100` |

### Semantic Colors
| Purpose | Hex | Tailwind Class |
|---------|-----|----------------|
| Success | #10B981 | `green-600` |
| Warning | #F59E0B | `yellow-500` |
| Danger | #EF4444 | `red-500` |
| Info | #3B82F6 | `blue-500` |

See [COLORS.md](COLORS.md) for complete color documentation.

---

## Typography Overview

### Font Family
**Poppins** - Primary font for all text

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Size Scale
| Class | Size | Usage |
|-------|------|-------|
| `text-xs` | 0.75rem | Labels, metadata |
| `text-sm` | 0.875rem | Body text, UI elements |
| `text-base` | 1rem | Default body |
| `text-lg` | 1.125rem | Subheadings |
| `text-xl` | 1.25rem | Section headers |
| `text-2xl` | 1.5rem | Page titles |
| `text-4xl` | 2.25rem | Large statistics |

---

## Main Layout Structure

```html
<body class="font-sans bg-gray-50 text-gray-900 m-0">
    <div class="flex h-screen">
        <!-- Gradient Bar + Navigation Sidebar -->
        <div class="flex">
            <!-- Purple Gradient Bar (2.5px) -->
            <div class="w-2.5 h-full bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-500 relative flex-none self-stretch z-10 min-h-screen shadow-lg"></div>

            <!-- Navigation Sidebar (80px) -->
            <nav class="h-full w-20 bg-white flex flex-col items-center pt-0 z-20 shadow-md relative">
                <!-- Nav content -->
            </nav>
        </div>

        <!-- Main Content Area -->
        <div class="flex-1 overflow-y-auto p-6 max-w-full relative z-10">
            <!-- Page content -->
        </div>
    </div>
</body>
```

See [LAYOUTS.md](LAYOUTS.md) for complete layout patterns.

---

## Component Quick Reference

### Primary Button
```html
<button class="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors duration-200">
    <i data-lucide="send" class="w-4 h-4 mr-2"></i>
    Button Text
</button>
```

### Secondary Button
```html
<button class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 hover:-translate-y-0.5 transition-all duration-200 ease-in-out shadow-sm">
    Button Text
</button>
```

### Badge
```html
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    Active
</span>
```

### Text Input
```html
<input type="text" placeholder="Search..."
    class="w-64 pr-8 pl-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm">
```

See [COMPONENTS.md](COMPONENTS.md) for all components.

---

## Z-Index Hierarchy

| Level | Z-Index | Elements |
|-------|---------|----------|
| Base | 10 | Gradient sidebar |
| Navigation | 20 | Navigation sidebar |
| Tooltips | 30-50 | Nav tooltips |
| Dropdowns | 99990 | All dropdown menus |
| Modals | 999999 | Filter modals, dialogs |

---

## Animation Classes

```css
/* Fade in animation */
.animate-fade-in {
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
}

/* Table row animation */
.table-row-animate {
    opacity: 0;
    animation: tableRowFadeIn 0.3s ease-out forwards;
}
```

See [ANIMATIONS.md](ANIMATIONS.md) for all animations.
