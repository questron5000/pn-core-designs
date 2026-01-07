# Animations & Transitions

Animation patterns, keyframes, and transition effects for the Plan Notice Client Portal.

---

## Animation Keyframes

Add these to your `styles.css` file:

### fadeIn Animation

General fade-in with upward slide. Used for cards, sections, and page elements.

```css
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
}
```

### tableRowFadeIn Animation

Subtle fade for table rows with staggered delays.

```css
@keyframes tableRowFadeIn {
    0% {
        opacity: 0;
        transform: translateY(8px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.table-row-animate {
    opacity: 0;
    animation: tableRowFadeIn 0.3s ease-out forwards;
}
```

### filterFadeIn Animation

For filter controls and UI elements.

```css
@keyframes filterFadeIn {
    0% {
        opacity: 0;
        transform: translateY(5px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.filter-animate {
    opacity: 0;
    animation: filterFadeIn 0.5s ease-out forwards;
}
```

### gradientFadeIn Animation

For gradient cards with glow effect.

```css
@keyframes gradientFadeIn {
    0% {
        opacity: 0;
        box-shadow: 0 0 0 rgba(124, 58, 237, 0);
    }
    100% {
        opacity: 1;
        box-shadow: 0 0 25px rgba(124, 58, 237, 0.5);
    }
}
```

### Settings Row Animation

```css
.settings-row-animate {
    opacity: 0;
    animation: fadeIn 0.4s ease-out forwards;
}
```

---

## Staggered Animation Delays

Create cascading animation effects by applying different delays to sequential elements.

### Filter Buttons

```css
.filter-animate:nth-child(1) { animation-delay: 0.1s; }
.filter-animate:nth-child(2) { animation-delay: 0.2s; }
.filter-animate:nth-child(3) { animation-delay: 0.3s; }
.filter-animate:nth-child(4) { animation-delay: 0.4s; }
```

### Table Rows

```css
tr:nth-child(1) { animation-delay: 0.05s; }
tr:nth-child(2) { animation-delay: 0.1s; }
tr:nth-child(3) { animation-delay: 0.15s; }
tr:nth-child(4) { animation-delay: 0.2s; }
tr:nth-child(5) { animation-delay: 0.25s; }
tr:nth-child(6) { animation-delay: 0.3s; }
tr:nth-child(7) { animation-delay: 0.35s; }
tr:nth-child(8) { animation-delay: 0.4s; }
tr:nth-child(9) { animation-delay: 0.45s; }
```

### Dashboard Cards (Inline Style)

Apply animation delay directly in HTML for flexibility:

```html
<div class="animate-fade-in" style="animation-delay: 0.1s">Card 1</div>
<div class="animate-fade-in" style="animation-delay: 0.2s">Card 2</div>
<div class="animate-fade-in" style="animation-delay: 0.3s">Card 3</div>
```

---

## Transition Classes

Standard Tailwind transition utilities used throughout the application.

### Quick Transitions (150ms)

```html
<element class="transition-all duration-150 ease-in-out">
```

Use for: Small hover effects, subtle state changes

### Standard Transitions (200ms)

```html
<element class="transition-all duration-200 ease-in-out">
```

Use for: Button hovers, color changes, most UI interactions

### Longer Transitions (300ms)

```html
<element class="transition-all duration-300 ease-in-out">
```

Use for: Card animations, larger visual changes, modal appearances

### Color-Only Transitions

```html
<element class="transition-colors duration-200">
```

Use for: Background color changes, text color changes

---

## Hover Effects

### Lift Effect

Subtle upward movement on hover, used for buttons and clickable items.

```html
<button class="hover:-translate-y-0.5 transition-all duration-200 ease-in-out">
    Hover me
</button>
```

### Minimal Lift (Table Rows)

Even subtler lift for data rows.

```html
<tr class="hover:-translate-y-px transition-all duration-150 ease-in-out">
```

### Background Color Change

```html
<!-- Light gray hover -->
<element class="hover:bg-gray-100">

<!-- Purple tint hover -->
<element class="hover:bg-purple-50">

<!-- Darker button hover -->
<button class="bg-purple-600 hover:bg-purple-700">
```

### Border Highlight on Hover

```html
<element class="border border-gray-300 hover:border-gray-400">
```

### Inset Border Highlight (Table Rows)

Purple tint inset shadow on hover:

```html
<tr class="hover:shadow-[inset_0_0_0_1px_rgba(124,58,237,0.1)]">
```

### Text Color Change

```html
<a class="text-gray-500 hover:text-gray-700">
<a class="text-gray-500 hover:text-purple-600">
```

### Combined Hover Effect (Complete Table Row)

```html
<tr class="hover:bg-gray-50 hover:-translate-y-px hover:shadow-[inset_0_0_0_1px_rgba(124,58,237,0.1)] transition-all duration-150 ease-in-out cursor-pointer">
```

---

## Expandable Row Animation

For collapsible table rows or accordion content.

```css
.expanded-row {
    transition: all 0.3s ease-in-out;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}

.expanded-row:not(.hidden) {
    max-height: 1000px;
    opacity: 1;
}
```

### JavaScript Toggle

```javascript
function toggleRow(row) {
    const expandedRow = row.nextElementSibling;
    const chevron = row.querySelector('[data-lucide="chevron-right"]');

    expandedRow.classList.toggle('hidden');

    // Rotate chevron icon
    if (chevron) {
        if (expandedRow.classList.contains('hidden')) {
            chevron.style.transform = 'rotate(0deg)';
        } else {
            chevron.style.transform = 'rotate(90deg)';
        }
    }
}
```

---

## Tooltip Animation

Fade in with visibility transition.

```css
.nav-tooltip {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
}

.group:hover .nav-tooltip {
    opacity: 1;
    visibility: visible;
}
```

---

## Slider Value Animation

Smooth position tracking for range slider value indicator.

```css
.slider-value {
    transition: left 0.2s ease;
}
```

---

## Focus States

Ring animation for form focus.

```html
<input class="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
```

---

## Transform Origins

For dropdown menus and scaled elements:

```html
<div class="origin-top-right">
```

---

## Complete Animation Usage Example

### Animated Page Load

```html
<!-- Header fades in first -->
<header class="animate-fade-in" style="animation-delay: 0s">
    <h1>Page Title</h1>
</header>

<!-- Cards cascade in -->
<div class="grid grid-cols-3 gap-6 mt-6">
    <div class="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 animate-fade-in" style="animation-delay: 0.1s">
        Card 1
    </div>
    <div class="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 animate-fade-in" style="animation-delay: 0.2s">
        Card 2
    </div>
    <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 animate-fade-in" style="animation-delay: 0.3s">
        Card 3
    </div>
</div>

<!-- Filter controls fade in -->
<div class="flex items-center mt-6">
    <button class="filter-animate">Active</button>
    <button class="filter-animate">Archived</button>
</div>

<!-- Table rows stagger in -->
<table>
    <tbody>
        <tr class="table-row-animate">Row 1</tr>
        <tr class="table-row-animate">Row 2</tr>
        <tr class="table-row-animate">Row 3</tr>
    </tbody>
</table>
```

---

## Performance Notes

1. **Hardware Acceleration**: All animations use `opacity` and `transform` properties which are GPU-accelerated for smooth performance.

2. **Easing Functions**: Use `ease`, `ease-out`, or `ease-in-out` for natural motion.

3. **Duration Guidelines**:
   - Micro-interactions: 150ms
   - Standard UI: 200ms
   - Larger elements: 300-500ms
   - Page transitions: 500ms max

4. **Avoid animating**: `width`, `height`, `top`, `left`, `margin`, `padding` - these cause layout recalculation.

---

## Complete styles.css Animation Section

```css
/* Animation keyframes */
@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
}

@keyframes gradientFadeIn {
    0% {
        opacity: 0;
        box-shadow: 0 0 0 rgba(124, 58, 237, 0);
    }
    100% {
        opacity: 1;
        box-shadow: 0 0 25px rgba(124, 58, 237, 0.5);
    }
}

@keyframes tableRowFadeIn {
    0% { opacity: 0; transform: translateY(8px); }
    100% { opacity: 1; transform: translateY(0); }
}

@keyframes filterFadeIn {
    0% { opacity: 0; transform: translateY(5px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* Animation classes */
.animate-fade-in {
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
}

.table-row-animate {
    opacity: 0;
    animation: tableRowFadeIn 0.3s ease-out forwards;
}

.filter-animate {
    opacity: 0;
    animation: filterFadeIn 0.5s ease-out forwards;
}

.settings-row-animate {
    opacity: 0;
    animation: fadeIn 0.4s ease-out forwards;
}

/* Staggered delays - filter buttons */
.filter-animate:nth-child(1) { animation-delay: 0.1s; }
.filter-animate:nth-child(2) { animation-delay: 0.2s; }
.filter-animate:nth-child(3) { animation-delay: 0.3s; }
.filter-animate:nth-child(4) { animation-delay: 0.4s; }

/* Staggered delays - table rows */
tr:nth-child(1) { animation-delay: 0.05s; }
tr:nth-child(2) { animation-delay: 0.1s; }
tr:nth-child(3) { animation-delay: 0.15s; }
tr:nth-child(4) { animation-delay: 0.2s; }
tr:nth-child(5) { animation-delay: 0.25s; }
tr:nth-child(6) { animation-delay: 0.3s; }
tr:nth-child(7) { animation-delay: 0.35s; }
tr:nth-child(8) { animation-delay: 0.4s; }
tr:nth-child(9) { animation-delay: 0.45s; }

/* Expandable rows */
.expanded-row {
    transition: all 0.3s ease-in-out;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}

.expanded-row:not(.hidden) {
    max-height: 1000px;
    opacity: 1;
}
```
