# UI Components

Complete component library with code examples for the Plan Notice Client Portal.

---

## Table of Contents

1. [Buttons](#buttons)
2. [Cards](#cards)
3. [Tables](#tables)
4. [Forms](#forms)
5. [Badges](#badges)
6. [Modals](#modals)
7. [Dropdowns](#dropdowns)
8. [Tabs](#tabs)
9. [Tooltips](#tooltips)
10. [Breadcrumbs](#breadcrumbs)
11. [Pagination](#pagination)
12. [Information Banners](#information-banners)
13. [Icons](#icons)

---

## Buttons

### Primary Button

Main action button with purple background.

```html
<button class="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors duration-200">
    Button Text
</button>
```

### Primary Button with Icon

```html
<button class="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors duration-200">
    <i data-lucide="send" class="w-4 h-4 mr-2"></i>
    Send Notice
</button>
```

### Secondary Button

White background with border for secondary actions.

```html
<button class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 hover:-translate-y-0.5 transition-all duration-200 ease-in-out shadow-sm">
    <i data-lucide="filter" class="w-4 h-4"></i>
    Filter
</button>
```

### Icon-Only Button

```html
<button class="p-2 rounded-md hover:bg-gray-100 transition-all duration-200 ease-in-out">
    <i data-lucide="bell" class="w-5 h-5 text-gray-600"></i>
</button>
```

### Filter Tab Buttons (Segmented Control)

Active/Archived toggle pattern:

```html
<div class="inline-flex shadow-sm overflow-hidden">
    <!-- Active Tab (Selected) -->
    <button id="activeFilterBtn" class="px-3 py-1.5 text-sm font-medium border filter-tab-active filter-animate">
        Active
    </button>
    <!-- Archived Tab (Not Selected) -->
    <button id="archivedFilterBtn" class="px-3 py-1.5 text-sm font-medium border filter-tab-inactive filter-tab-inactive-right filter-animate">
        Archived
    </button>
</div>
```

CSS for filter tabs:

```css
.filter-tab-active {
    color: white;
    border-color: transparent;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 120px;
    background: #9ca3af; /* Gray-400 */
}

.filter-tab-inactive {
    background-color: white;
    color: #1f2937;
    border-color: #d1d5db;
    width: 120px;
}

.filter-tab-inactive-right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
}

.filter-tab-inactive:hover {
    background-color: #f3f4f6;
}
```

### Disabled Button

```html
<button class="px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed" disabled>
    Disabled
</button>
```

### Clear Filters Link Button

```html
<button class="clear-filters-btn">
    <i data-lucide="x" class="w-4 h-4 mr-1"></i>
    Clear
</button>
```

```css
.clear-filters-btn {
    color: #9333ea;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    margin-left: 0.75rem;
}
.clear-filters-btn:hover {
    color: #7e22ce;
}
```

---

## Cards

### Dashboard Stat Card (Gradient)

```html
<div class="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 shadow-md transform transition-all duration-300 ease-in-out animate-fade-in relative overflow-hidden text-white" style="animation-delay: 0.1s">
    <div class="flex items-center justify-between">
        <div>
            <p class="text-purple-100 text-sm font-medium">Total Participants</p>
            <p class="text-4xl font-bold text-white mt-1">23,150</p>

            <div class="flex items-center mt-4 gap-4">
                <div class="flex items-center text-sm">
                    <i data-lucide="user-check" class="w-4 h-4 mr-1.5"></i>
                    <span>20,665 Active</span>
                </div>
                <div class="flex items-center text-sm">
                    <i data-lucide="user-minus" class="w-4 h-4 mr-1.5"></i>
                    <span>2,485 Term</span>
                </div>
            </div>
        </div>
        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
            <i data-lucide="users" class="w-6 h-6 text-white"></i>
        </div>
    </div>
</div>
```

**Gradient Variations:**
- Purple: `from-purple-600 to-indigo-700`
- Green: `from-green-600 to-green-800`
- Blue: `from-blue-500 to-blue-700`

### Content Card (White)

```html
<div class="bg-white border border-gray-200 rounded-lg shadow-sm animate-fade-in">
    <div class="p-6 border-b border-gray-200">
        <h2 class="text-lg font-medium">Card Title</h2>
    </div>
    <div class="p-6">
        <!-- Card content -->
    </div>
</div>
```

### Card with Header and Footer

```html
<div class="bg-white rounded-lg shadow-md border border-gray-200">
    <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-medium">Card Title</h3>
    </div>
    <div class="p-6">
        <p>Card content goes here.</p>
    </div>
    <div class="px-6 py-4 border-t border-gray-200">
        <button class="px-4 py-2 bg-purple-600 text-white rounded-md">Action</button>
    </div>
</div>
```

### Profile Avatar Card

```html
<div class="flex items-center gap-6 p-6 bg-white rounded-lg border border-gray-200">
    <div class="relative">
        <div class="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
            <span class="text-3xl font-bold text-purple-600">JD</span>
        </div>
        <button class="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700">
            <i data-lucide="camera" class="w-4 h-4"></i>
        </button>
    </div>
    <div>
        <h2 class="text-xl font-semibold">John Doe</h2>
        <p class="text-gray-500">john.doe@company.com</p>
    </div>
</div>
```

---

## Tables

### Complete Data Table

```html
<div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden animate-fade-in">
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                    <div class="flex items-center">
                        Column Name
                        <i data-lucide="chevrons-up-down" class="w-4 h-4 ml-1 text-gray-400"></i>
                    </div>
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                </th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50 hover:-translate-y-px hover:shadow-[inset_0_0_0_1px_rgba(124,58,237,0.1)] transition-all duration-150 ease-in-out cursor-pointer relative table-row-animate">
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">Item Name</div>
                    <div class="text-sm text-gray-500">Secondary info</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                    $1,234.56
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

### Table Row Animation CSS

```css
.table-row-animate {
    opacity: 0;
    animation: tableRowFadeIn 0.3s ease-out forwards;
}

@keyframes tableRowFadeIn {
    0% { opacity: 0; transform: translateY(8px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* Staggered delays */
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

### Expandable Table Row

```html
<!-- Main Row -->
<tr class="cursor-pointer" onclick="toggleRow(this)">
    <td class="px-6 py-4">
        <div class="flex items-center">
            <i data-lucide="chevron-right" class="w-4 h-4 mr-2 transition-transform duration-200"></i>
            Row Content
        </div>
    </td>
</tr>
<!-- Expanded Content Row -->
<tr class="expanded-row hidden bg-gray-50">
    <td colspan="4" class="px-6 py-4">
        Expanded content here
    </td>
</tr>
```

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

---

## Forms

### Text Input

```html
<input type="text" placeholder="Enter text..."
    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm">
```

### Search Input with Icon

```html
<div class="relative">
    <input type="text" placeholder="Search..."
        class="w-64 pr-8 pl-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm">
    <i data-lucide="search" class="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
</div>
```

### Checkbox

```html
<label class="flex items-center cursor-pointer">
    <input type="checkbox" class="form-checkbox h-4 w-4 text-purple-600 rounded mr-2">
    <span class="text-sm text-gray-700">Checkbox Label</span>
</label>
```

### Radio Button

```html
<label class="flex items-center cursor-pointer">
    <input type="radio" name="radioGroup" class="form-radio h-4 w-4 text-purple-600 mr-2">
    <span class="text-sm text-gray-700">Radio Option</span>
</label>
```

### Toggle Switch

```html
<button type="button" class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" role="switch" aria-checked="false">
    <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
</button>

<!-- Active state: add bg-purple-600 and translate-x-5 to span -->
```

### Range Slider

```html
<div class="slider-container">
    <div class="slider-value" style="left: 50%;">50</div>
    <input type="range" min="0" max="100" value="50"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
</div>
```

```css
.slider-container {
    position: relative;
    width: 100%;
    margin-top: 1rem;
}

.slider-value {
    position: absolute;
    top: -24px;
    padding: 2px 8px;
    background-color: #7c3aed;
    color: white;
    border-radius: 4px;
    font-size: 0.75rem;
    transform: translateX(-50%);
    transition: left 0.2s ease;
}

.slider-value::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #7c3aed transparent transparent transparent;
}
```

### Form Field with Label

```html
<div class="space-y-1">
    <label class="block text-sm font-medium text-gray-700">Field Label</label>
    <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
    <p class="text-xs text-gray-500">Helper text or description</p>
</div>
```

---

## Badges

### Standard Badge

```html
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    Active
</span>
```

### Badge Color Variants

```html
<!-- Success/Active -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>

<!-- Warning/In Progress -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">In Progress</span>

<!-- Danger/Terminated -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Terminated</span>

<!-- Info/Disclosure -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Disclosure</span>

<!-- Purple/Election -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Election</span>
```

### Custom Badge Classes (Semi-transparent)

```html
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-green">Active</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-yellow">Pending</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-red">Error</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-blue">Info</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-purple">Type</span>
```

### Notification Count Badge

```html
<span class="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">3</span>
```

---

## Modals

### Filter Modal

```html
<div id="filterModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999999]">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Filter Options</h3>
            <button onclick="closeFilterModal()" class="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        </div>

        <!-- Body -->
        <div class="p-4 space-y-4">
            <!-- Filter options here -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <div class="space-y-2">
                    <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox h-4 w-4 text-purple-600 rounded mr-2">
                        <span class="text-sm">Active</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox h-4 w-4 text-purple-600 rounded mr-2">
                        <span class="text-sm">Inactive</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-end p-4 border-t border-gray-200 gap-3">
            <button onclick="clearFilters()" class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Clear
            </button>
            <button onclick="applyFilters()" class="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                Apply Filters
            </button>
        </div>
    </div>
</div>
```

### Modal CSS

```css
#filterModal {
    z-index: 999999 !important;
}

#filterModal .bg-white {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
    border: 1px solid rgba(124, 58, 237, 0.1);
}
```

---

## Dropdowns

### Standard Dropdown

```html
<div class="relative">
    <button id="dropdownButton" class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 transition-all duration-200" onclick="event.stopPropagation(); toggleDropdown('dropdownButton', 'dropdownMenu');">
        <span>Select Option</span>
        <i data-lucide="chevron-down" class="w-4 h-4"></i>
    </button>
    <div id="dropdownMenu" class="hidden absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-[200px] z-[99990]" onclick="event.stopPropagation();">
        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <i data-lucide="check" class="w-4 h-4 mr-2"></i>
            Option 1
        </a>
        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 2
        </a>
        <div class="border-t border-gray-200 my-1"></div>
        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Other Option
        </a>
    </div>
</div>
```

### Export Dropdown

```html
<div class="relative">
    <button id="exportButton" class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 transition-all duration-200 shadow-sm" onclick="event.stopPropagation(); toggleDropdown('exportButton', 'exportMenu');">
        <i data-lucide="download" class="w-4 h-4"></i>
        Export
        <i data-lucide="chevron-down" class="w-3 h-3"></i>
    </button>
    <div id="exportMenu" class="hidden absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-[160px]">
        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <i data-lucide="file-text" class="w-4 h-4 mr-2"></i>
            Export as CSV
        </a>
        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <i data-lucide="file-text" class="w-4 h-4 mr-2"></i>
            Export as Excel
        </a>
        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <i data-lucide="file-text" class="w-4 h-4 mr-2"></i>
            Export as PDF
        </a>
    </div>
</div>
```

### Dropdown Toggle JavaScript

```javascript
function toggleDropdown(buttonId, menuId) {
    const menu = document.getElementById(menuId);
    const allMenus = document.querySelectorAll('[id$="Menu"], [id$="Content"]');

    // Close other dropdowns
    allMenus.forEach(m => {
        if (m.id !== menuId) m.classList.add('hidden');
    });

    // Toggle current dropdown
    menu.classList.toggle('hidden');
}

// Close on outside click
document.addEventListener('click', () => {
    document.querySelectorAll('[id$="Menu"], [id$="Content"]').forEach(m => {
        m.classList.add('hidden');
    });
});
```

---

## Tabs

### Tab Navigation

```html
<div class="border-b border-gray-200">
    <nav class="flex overflow-x-auto scrollbar-hide">
        <!-- Active Tab -->
        <a href="#" class="inline-flex items-center px-6 py-3 relative whitespace-nowrap flex-shrink-0 border-r border-r-gray-200 bg-purple-50 text-purple-600">
            <i data-lucide="file-text" class="w-4 h-4 mr-2"></i>
            Tab Name
            <span class="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></span>
        </a>

        <!-- Inactive Tab -->
        <a href="#" class="inline-flex items-center px-6 py-3 relative whitespace-nowrap flex-shrink-0 border-r border-r-gray-200 text-gray-500 hover:text-gray-700">
            <i data-lucide="settings" class="w-4 h-4 mr-2"></i>
            Other Tab
            <span class="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-transparent"></span>
        </a>
    </nav>
</div>
```

---

## Tooltips

### Navigation Tooltip (CSS-based)

```html
<div class="relative group">
    <button class="p-3">
        <i data-lucide="info" class="w-5 h-5"></i>
    </button>
    <span class="nav-tooltip text-white text-sm">Tooltip Text</span>
</div>
```

```css
.nav-tooltip {
    background-color: #1e293b;
    position: absolute;
    left: calc(100% + 15px);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 4px;
    padding: 8px 12px;
    white-space: nowrap;
    z-index: 50;
    font-weight: 500;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
}

.nav-tooltip::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px 6px 6px 0;
    border-style: solid;
    border-color: transparent #1e293b transparent transparent;
}

.group:hover .nav-tooltip {
    opacity: 1;
    visibility: visible;
}
```

---

## Breadcrumbs

```html
<nav class="flex items-center space-x-2 text-sm">
    <a href="index.html" class="text-gray-500 hover:text-gray-700">Home</a>
    <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
    <a href="plans.html" class="text-gray-500 hover:text-gray-700">Plans</a>
    <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
    <span class="text-gray-900 font-medium">Current Page</span>
</nav>
```

---

## Pagination

```html
<div class="flex items-center justify-between mt-4">
    <div class="text-sm text-gray-700">
        Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of <span class="font-medium">97</span> results
    </div>
    <div class="flex items-center space-x-1">
        <button class="px-3 py-1 border border-gray-300 rounded-l-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>
        <button class="px-3 py-1 border-t border-b border-gray-300 bg-purple-600 text-white">1</button>
        <button class="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">2</button>
        <button class="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">3</button>
        <span class="px-2 text-gray-500">...</span>
        <button class="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">10</button>
        <button class="px-3 py-1 border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-50">
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
    </div>
</div>
```

---

## Information Banners

### Info Banner

```html
<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
    <i data-lucide="info" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"></i>
    <div>
        <p class="text-sm text-blue-800">
            Information message goes here. This provides helpful context to the user.
        </p>
    </div>
</div>
```

### Warning Banner

```html
<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
    <i data-lucide="alert-triangle" class="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5"></i>
    <div>
        <p class="text-sm text-yellow-800">
            Warning message goes here.
        </p>
    </div>
</div>
```

---

## Icons

### Icon Library: Lucide

Load via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js" defer></script>
```

Initialize:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});
```

### Icon Usage

```html
<i data-lucide="icon-name" class="w-4 h-4"></i>
```

### Common Icon Sizes

| Size | Class | Usage |
|------|-------|-------|
| Small | `w-3 h-3` | Inline with small text |
| Default | `w-4 h-4` | Buttons, badges, inline |
| Medium | `w-5 h-5` | Navigation, actions |
| Large | `w-6 h-6` | Page titles, headers |

### Frequently Used Icons

**Navigation:**
- `briefcase` - Plans
- `mail` - Notices
- `users` - Participants
- `book-user` - Teams
- `bar-chart` - Reports

**Actions:**
- `send` - Send
- `download` - Export/Download
- `filter` - Filter
- `search` - Search
- `plus` - Add/Create
- `pencil` - Edit
- `x` - Close/Delete

**Status:**
- `check-circle` - Success
- `alert-circle` - Warning
- `x-circle` - Error
- `info` - Information

**UI:**
- `chevron-down` - Dropdown indicator
- `chevron-right` - Breadcrumb separator
- `chevron-left` - Back/Previous
- `chevrons-up-down` - Sort indicator
- `arrow-left` - Back navigation

**Other:**
- `bell` - Notifications
- `user` - Profile
- `settings` - Settings
- `log-out` - Logout
- `calendar` - Date
- `building` - Company
