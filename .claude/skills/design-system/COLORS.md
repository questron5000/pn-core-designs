# Color System

Complete color palette for the Plan Notice Client Portal design system.

---

## CSS Variables

Add these to your root CSS or `<style>` block:

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

## Primary Brand Colors

The primary brand color is **Purple** (#7C3AED).

| Name | Hex | RGB | Tailwind Class | Usage |
|------|-----|-----|----------------|-------|
| Purple 50 | #F3E8FF | 243, 232, 255 | `purple-50` | Hover backgrounds, selected states |
| Purple 100 | #E9D5FF | 233, 213, 255 | `purple-100` | Light backgrounds |
| Purple 600 | #7C3AED | 124, 58, 237 | `purple-600` | **Primary buttons, active states, links** |
| Purple 700 | #7E22CE | 126, 34, 206 | `purple-700` | Button hover states |
| Purple 800 | #6B21A8 | 107, 33, 168 | `purple-800` | Dark accents, badge text |
| Purple 900 | #9333EA | 147, 51, 234 | `purple-900` | Deep accents |

### Primary Color Usage Examples

```html
<!-- Primary button -->
<button class="bg-purple-600 hover:bg-purple-700 text-white">Primary Action</button>

<!-- Active nav item -->
<a class="text-purple-600 bg-purple-50">Active Link</a>

<!-- Selected state -->
<div class="bg-purple-50 border-purple-600">Selected Item</div>
```

---

## Secondary Colors (Indigo)

Used in gradients and secondary elements.

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Indigo 700 | #4338CA | `indigo-700` | Gradient endpoints |
| Indigo 900 | #312E81 | `indigo-900` | Gradient start (sidebar) |

---

## Semantic Colors

### Success (Green)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Green 100 | #D1FAE5 | `green-100` | Success badge background |
| Green 600 | #10B981 | `green-600` | Success icons, active status |
| Green 700 | #059669 | `green-700` | Success hover states |
| Green 800 | #065F46 | `green-800` | Success badge text |

```html
<!-- Success badge -->
<span class="bg-green-100 text-green-800">Active</span>

<!-- Success icon -->
<i data-lucide="check-circle" class="text-green-600"></i>
```

### Warning (Yellow/Amber)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Yellow 100 | #FEF3C7 | `yellow-100` | Warning badge background |
| Yellow 500 | #F59E0B | `yellow-500` | Warning icons |
| Yellow 600 | #CA8A04 | `yellow-600` | Warning accents |
| Yellow 800 | #854D0E | `yellow-800` | Warning badge text |

```html
<!-- Warning badge -->
<span class="bg-yellow-100 text-yellow-800">In Progress</span>
```

### Danger (Red)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Red 100 | #FEE2E2 | `red-100` | Error badge background |
| Red 500 | #EF4444 | `red-500` | Notification badges, errors |
| Red 600 | #DC2626 | `red-600` | Error icons |
| Red 800 | #991B1B | `red-800` | Error badge text |

```html
<!-- Notification count badge -->
<span class="bg-red-500 text-white rounded-full">3</span>

<!-- Terminated status -->
<span class="bg-red-100 text-red-800">Terminated</span>
```

### Info (Blue)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Blue 50 | #EFF6FF | `blue-50` | Info banner background |
| Blue 100 | #DBEAFE | `blue-100` | Info badge background |
| Blue 500 | #3B82F6 | `blue-500` | Info icons, links |
| Blue 600 | #2563EB | `blue-600` | Info accents |
| Blue 800 | #1E40AF | `blue-800` | Info badge text |

```html
<!-- Info badge -->
<span class="bg-blue-100 text-blue-800">Disclosure</span>

<!-- Info banner -->
<div class="bg-blue-50 border border-blue-200 text-blue-800">
    Information message here
</div>
```

---

## Neutral Colors (Grays)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Gray 50 | #F9FAFB | `gray-50` | Page background, table headers |
| Gray 100 | #F3F4F6 | `gray-100` | Hover backgrounds |
| Gray 200 | #E5E7EB | `gray-200` | Borders, dividers |
| Gray 300 | #D1D5DB | `gray-300` | Input borders |
| Gray 400 | #9CA3AF | `gray-400` | Filter tab active background |
| Gray 500 | #6B7280 | `gray-500` | Secondary text, icons |
| Gray 600 | #4B5563 | `gray-600` | Icon default color |
| Gray 700 | #374151 | `gray-700` | Body text |
| Gray 800 | #1F2937 | `gray-800` | Headings, primary text |
| Gray 900 | #111827 | `gray-900` | Darkest text |
| White | #FFFFFF | `white` | Backgrounds, cards |

```html
<!-- Page background -->
<body class="bg-gray-50">

<!-- Card -->
<div class="bg-white border border-gray-200">

<!-- Secondary text -->
<p class="text-gray-500">Secondary information</p>

<!-- Primary text -->
<h1 class="text-gray-900">Page Title</h1>
```

---

## Gradient Definitions

### Sidebar Gradient (Vertical)

```html
<div class="bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-500"></div>
```

### Dashboard Card Gradients

**Purple Card:**
```html
<div class="bg-gradient-to-br from-purple-600 to-indigo-700"></div>
```

**Green Card:**
```html
<div class="bg-gradient-to-br from-green-600 to-green-800"></div>
```

**Blue Card:**
```html
<div class="bg-gradient-to-br from-blue-500 to-blue-700"></div>
```

**Primary Gradient (Generic):**
```css
.gradient-primary {
    background: linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%);
}
```

**Success Gradient:**
```css
.gradient-success {
    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
}
```

**Warning Gradient:**
```css
.gradient-warning {
    background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
}
```

**Danger Gradient:**
```css
.gradient-danger {
    background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
}
```

---

## Badge Color System

Custom badge classes with semi-transparent backgrounds:

```css
/* Add to styles.css */

.badge-blue {
    background-color: rgba(191, 219, 254, 0.6);
    color: #1e40af;
    display: inline-flex;
    width: fit-content;
}

.badge-purple {
    background-color: rgba(216, 180, 254, 0.6);
    color: #6b21a8;
    display: inline-flex;
    width: fit-content;
}

.badge-yellow {
    background-color: rgba(253, 230, 138, 0.6);
    color: #854d0e;
    display: inline-flex;
    width: fit-content;
}

.badge-red {
    background-color: rgba(254, 202, 202, 0.6);
    color: #991b1b;
    display: inline-flex;
    width: fit-content;
}

.badge-green {
    background-color: rgba(167, 243, 208, 0.6);
    color: #065f46;
    display: inline-flex;
    width: fit-content;
}
```

### Badge Usage

```html
<!-- Using custom badge classes -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-green">Active</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-yellow">In Progress</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-red">Terminated</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-blue">Disclosure</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-purple">Election</span>
```

---

## Color Combinations

### Active/Selected States
- Background: `bg-purple-50`
- Text: `text-purple-600`
- Border: `border-purple-600`

### Hover States
- Buttons: `hover:bg-purple-700`
- Links: `hover:text-purple-600`
- Backgrounds: `hover:bg-gray-100`

### Focus States
- Ring: `focus:ring-2 focus:ring-purple-600`
- Border: `focus:border-transparent`

### Disabled States
- Background: `bg-gray-100`
- Text: `text-gray-400`
- Cursor: `cursor-not-allowed`

---

## Dark Text on Light Backgrounds

| Background | Text Color |
|------------|------------|
| White | `text-gray-900` (headings), `text-gray-700` (body), `text-gray-500` (secondary) |
| Gray-50 | `text-gray-900` (headings), `text-gray-700` (body) |
| Colored badges | Use matching `-800` text color |

## Light Text on Dark Backgrounds

| Background | Text Color |
|------------|------------|
| Purple-600 | `text-white` |
| Gradient cards | `text-white` (main), `text-[color]-100` (secondary) |
| Tooltips (#1e293b) | `text-white` |
