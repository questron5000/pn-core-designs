# Layout Patterns

Page structure, layout systems, and template patterns for the Plan Notice Client Portal.

---

## Main Application Layout

Every page follows a three-column flex layout:

```
┌──────────────────────────────────────────────────────────────────┐
│ [Gradient Bar] [Navigation Sidebar]     [Main Content Area]      │
│    (2.5px)         (80px)                   (flex-1)             │
└──────────────────────────────────────────────────────────────────┘
```

### Complete Layout Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Plan Notice Client Portal</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js" defer></script>
</head>
<body class="font-sans bg-gray-50 text-gray-900 m-0">
    <div class="flex h-screen">
        <!-- Gradient and Navigation -->
        <div class="flex">
            <!-- Gradient Bar -->
            <div class="w-2.5 h-full bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-500 relative flex-none self-stretch z-10 min-h-screen opacity-100 shadow-lg"></div>

            <!-- Navigation Sidebar -->
            <nav class="h-full w-20 bg-white flex flex-col items-center pt-0 z-20 shadow-md relative">
                <!-- Logo -->
                <div class="p-4 flex flex-col items-center">
                    <a href="index.html">
                        <img src="images/logo.png" alt="Logo" class="h-10 mb-8 mx-auto">
                    </a>

                    <!-- Navigation Items -->
                    <!-- See Navigation Section below -->
                </div>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 overflow-y-auto p-6 max-w-full relative z-10">
            <!-- Page Header -->
            <!-- Page Content -->
        </div>
    </div>

    <script src="scripts.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
        });
    </script>
</body>
</html>
```

---

## Navigation Sidebar

### Navigation Item (Active State)

```html
<div class="relative z-30 group">
    <a href="index.html" class="flex flex-col items-center justify-center p-3 mb-2 w-full text-purple-600 transition-all duration-200 ease-in-out bg-purple-50 hover:bg-purple-100 hover:-translate-y-0.5 font-medium">
        <i data-lucide="briefcase"></i>
        <span class="text-xs mt-1 text-center hidden">Plans</span>
        <span class="nav-tooltip text-white text-sm">Plans</span>
    </a>
</div>
```

### Navigation Item (Inactive State)

```html
<div class="relative z-30 group">
    <a href="notices.html" class="flex flex-col items-center justify-center p-3 mb-2 w-full text-gray-500 transition-all duration-200 ease-in-out hover:bg-purple-50 hover:text-purple-600 hover:-translate-y-0.5">
        <i data-lucide="mail"></i>
        <span class="text-xs mt-1 text-center hidden">Notices</span>
        <span class="nav-tooltip text-white text-sm">Notices</span>
    </a>
</div>
```

### Navigation Tooltip CSS

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
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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

### Standard Navigation Icons

| Page | Icon | Lucide Name |
|------|------|-------------|
| Plans | Briefcase | `briefcase` |
| Notices | Mail | `mail` |
| Participants | Users | `users` |
| Teams | Book User | `book-user` |
| Reports | Bar Chart | `bar-chart` |

---

## Page Header (Default)

**This is the standard header pattern for all pages.** It includes a back button, breadcrumbs, and the right-side dropdown controls.

```html
<!-- Header with Back Button and Dropdowns -->
<div class="flex justify-between items-center mb-4">
    <!-- Left: Back Button + Breadcrumbs -->
    <div class="flex items-center">
        <a href="index.html" class="mr-3 p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-all duration-200 ease-in-out" title="Back to Plans">
            <i data-lucide="arrow-left" class="w-5 h-5"></i>
        </a>

        <!-- Breadcrumbs -->
        <nav class="flex items-center space-x-2 text-sm">
            <a href="index.html" class="text-gray-500 hover:text-gray-700 transition-colors duration-200">Plans</a>
            <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
            <span class="text-gray-900 font-medium">Current Page Name</span>
        </nav>
    </div>

    <!-- Right: Context Dropdown + Notifications + User Menu -->
    <div class="flex items-center gap-3">
        <!-- Context/Company Dropdown -->
        <div class="relative">
            <button id="contextDropdown" class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 hover:-translate-y-0.5 transition-all duration-200 ease-in-out shadow-sm min-w-[240px] justify-between" onclick="event.stopPropagation(); toggleDropdown('contextDropdown', 'contextDropdownContent');">
                <span class="font-medium">TRA - The Retirement Advantage</span>
                <i data-lucide="chevron-down" class="w-4 h-4"></i>
            </button>
            <div id="contextDropdownContent" class="hidden absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-[240px]" onclick="event.stopPropagation();">
                <!-- Company selection options -->
                <div class="py-1 px-2 text-xs text-gray-500 font-medium">SELECT COMPANY</div>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-purple-50">
                    <i data-lucide="building" class="w-4 h-4 mr-2 text-purple-600"></i>
                    TRA - The Retirement Advantage
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i data-lucide="building" class="w-4 h-4 mr-2"></i>
                    Ascensus - Retirement Plan Services
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i data-lucide="building" class="w-4 h-4 mr-2"></i>
                    Empower - Retirement Solutions
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i data-lucide="building" class="w-4 h-4 mr-2"></i>
                    Fidelity - Institutional Services
                </a>
            </div>
        </div>

        <!-- Notifications Bell -->
        <div class="relative">
            <a href="notifications.html" class="relative p-2 rounded-md hover:bg-gray-100 transition-all duration-200 ease-in-out flex items-center justify-center">
                <i data-lucide="bell" class="w-5 h-5 text-gray-600"></i>
                <span class="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">3</span>
            </a>
        </div>

        <!-- User Profile Menu -->
        <div class="relative">
            <button id="userProfileButton" class="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-all duration-200 ease-in-out" onclick="event.stopPropagation(); toggleDropdown('userProfileButton', 'userProfileMenu');">
                <i data-lucide="user" class="w-5 h-5 text-gray-600"></i>
                <i data-lucide="chevron-down" class="w-3 h-3 text-gray-500"></i>
            </button>
            <div id="userProfileMenu" class="hidden absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-[180px]" onclick="event.stopPropagation();">
                <a href="profile.html" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i data-lucide="user" class="w-4 h-4 mr-2"></i>
                    Profile
                </a>
                <a href="notification_settings.html" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i data-lucide="bell-ring" class="w-4 h-4 mr-2"></i>
                    Notification Settings
                </a>
                <div class="border-t border-gray-200 my-1"></div>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i data-lucide="log-out" class="w-4 h-4 mr-2"></i>
                    Log Out
                </a>
            </div>
        </div>
    </div>
</div>
```

### Header Customization

**Back Button Link:** Update `href="index.html"` to point to the appropriate parent page.

**Breadcrumbs:** Modify the navigation trail:
```html
<nav class="flex items-center space-x-2 text-sm">
    <a href="index.html" class="text-gray-500 hover:text-gray-700 transition-colors duration-200">Parent Page</a>
    <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
    <span class="text-gray-900 font-medium">Current Page</span>
</nav>
```

**Multi-level Breadcrumbs:**
```html
<nav class="flex items-center space-x-2 text-sm">
    <a href="index.html" class="text-gray-500 hover:text-gray-700">Plans</a>
    <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
    <a href="plans_detail.html" class="text-gray-500 hover:text-gray-700">Plan Name</a>
    <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
    <span class="text-gray-900 font-medium">Notice Detail</span>
</nav>
```

### Alternative: Simple Title Header (Dashboard/Home)

For top-level pages without breadcrumbs (like the main Plans dashboard):

```html
<div class="flex justify-between items-center">
    <!-- Left: Page Title with Icon -->
    <h1 class="text-2xl font-semibold flex items-center">
        <i data-lucide="briefcase" class="w-6 h-6 mr-2 text-purple-600"></i>
        Your Plans
    </h1>

    <!-- Right: Same dropdowns as default header -->
    <div class="flex items-center gap-3">
        <!-- Context Dropdown, Notifications, User Menu -->
    </div>
</div>
```

---

## Grid Systems

### Three-Column Grid (Dashboard Cards)

```html
<div class="grid grid-cols-3 gap-6 mt-6">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
</div>
```

### Two-Column Grid

```html
<div class="grid grid-cols-2 gap-6">
    <div>Column 1</div>
    <div>Column 2</div>
</div>
```

### Responsive Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Items -->
</div>
```

---

## Spacing Scale

Based on 4px increments (Tailwind default):

| Class | Value | Usage |
|-------|-------|-------|
| `p-1` | 4px | Tight internal padding |
| `p-2` | 8px | Small elements |
| `p-3` | 12px | Buttons, inputs |
| `p-4` | 16px | Card sections |
| `p-6` | 24px | Main content, cards |
| `gap-2` | 8px | Tight spacing |
| `gap-3` | 12px | Standard gap |
| `gap-4` | 16px | Medium gap |
| `gap-6` | 24px | Section gap |
| `mt-4` | 16px | Section margin |
| `mt-6` | 24px | Major section margin |
| `mb-4` | 16px | Standard bottom margin |

---

## Z-Index Hierarchy

```css
/* Defined hierarchy - higher = on top */

/* Base layer */
z-index: 10      /* Gradient sidebar */

/* Navigation */
z-index: 20      /* Nav sidebar */
z-index: 30      /* Nav item tooltips (within nav) */

/* Tooltips */
z-index: 50      /* Standalone tooltips */

/* Dropdowns - must be above most content */
z-index: 99990   /* All dropdown menus */

/* Modals - highest priority */
z-index: 999999  /* Modal dialogs, filter modals */
```

### CSS Implementation

```css
/* Dropdown menus */
#userProfileMenu,
#contextDropdownContent,
#exportMenu {
    z-index: 99990 !important;
    position: absolute !important;
}

/* Modals */
#filterModal {
    z-index: 999999 !important;
}
```

---

## Page Templates

### 1. List/Table Page Template

Used for: Plans, Notices, Participants, Teams, Reports

```html
<div class="flex-1 overflow-y-auto p-6 max-w-full relative z-10">
    <!-- Header -->
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold flex items-center">
            <i data-lucide="icon-name" class="w-6 h-6 mr-2 text-purple-600"></i>
            Page Title
        </h1>
        <!-- Dropdowns -->
    </div>

    <!-- Optional: Dashboard Cards -->
    <div class="grid grid-cols-3 gap-6 mt-6">
        <!-- Stat cards -->
    </div>

    <!-- Filter Bar -->
    <div class="flex justify-between items-center mb-4 mt-6">
        <!-- Left: Filter tabs -->
        <div class="flex items-center">
            <!-- Filter buttons -->
        </div>
        <!-- Right: Search, Filter, Export -->
        <div class="flex items-center gap-2">
            <!-- Search input, filter button, export dropdown -->
        </div>
    </div>

    <!-- Data Table -->
    <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden animate-fade-in">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <!-- Header row -->
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <!-- Data rows -->
            </tbody>
        </table>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between mt-4">
        <!-- Pagination controls -->
    </div>
</div>
```

### 2. Detail Page Template

Used for: Plan Detail, Notice Detail, Participant Detail

```html
<div class="flex-1 overflow-y-auto p-6 max-w-full relative z-10">
    <!-- Header with Back Button -->
    <div class="flex justify-between items-center">
        <div class="flex items-center">
            <a href="parent-page.html" class="p-2 rounded-md hover:bg-gray-100 transition-all duration-200 mr-2">
                <i data-lucide="arrow-left" class="w-5 h-5 text-gray-600"></i>
            </a>
            <nav class="flex items-center space-x-2 text-sm">
                <a href="parent-page.html" class="text-gray-500 hover:text-gray-700">Parent</a>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
                <span class="text-gray-900 font-medium">Current Item</span>
            </nav>
        </div>
        <!-- Dropdowns -->
    </div>

    <!-- Info Card -->
    <div class="bg-white border border-gray-200 rounded-lg shadow-sm mt-6 animate-fade-in">
        <div class="p-6">
            <!-- Key information display -->
        </div>
    </div>

    <!-- Tab Navigation (if needed) -->
    <div class="border-b border-gray-200 mt-6">
        <nav class="flex overflow-x-auto">
            <!-- Tab items -->
        </nav>
    </div>

    <!-- Related Items Table -->
    <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
        <!-- Table content -->
    </div>
</div>
```

### 3. Multi-Step Workflow Template

Used for: Send Notice workflow

```html
<div class="flex-1 overflow-y-auto p-6 max-w-full relative z-10">
    <!-- Header with Breadcrumb -->
    <div class="flex justify-between items-center">
        <div class="flex items-center">
            <a href="previous-step.html" class="p-2 rounded-md hover:bg-gray-100 transition-all duration-200 mr-2">
                <i data-lucide="arrow-left" class="w-5 h-5 text-gray-600"></i>
            </a>
            <nav class="flex items-center space-x-2 text-sm">
                <span class="text-gray-500">Step 1 of 4</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
                <span class="text-gray-900 font-medium">Step Title</span>
            </nav>
        </div>
    </div>

    <!-- Progress Indicator (optional) -->
    <div class="flex items-center justify-center mt-6">
        <!-- Step circles with connecting lines -->
    </div>

    <!-- Form Content -->
    <div class="bg-white border border-gray-200 rounded-lg shadow-sm mt-6 p-6">
        <!-- Form fields -->
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-between mt-6">
        <button class="px-4 py-2 border border-gray-300 rounded-md">Previous</button>
        <button class="px-4 py-2 bg-purple-600 text-white rounded-md">Next</button>
    </div>
</div>
```

### 4. Settings/Profile Page Template

```html
<div class="flex-1 overflow-y-auto p-6 max-w-full relative z-10">
    <!-- Header -->
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold flex items-center">
            <i data-lucide="settings" class="w-6 h-6 mr-2 text-purple-600"></i>
            Settings
        </h1>
    </div>

    <!-- Settings Sections -->
    <div class="space-y-6 mt-6">
        <!-- Section Card -->
        <div class="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-medium">Section Title</h2>
                <p class="text-sm text-gray-500">Section description</p>
            </div>
            <div class="p-6">
                <!-- Form fields or settings content -->
            </div>
        </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end mt-6">
        <button class="px-4 py-2 bg-purple-600 text-white rounded-md">Save Changes</button>
    </div>
</div>
```

---

## Container Constraints

| Element | Width | Class |
|---------|-------|-------|
| Gradient bar | 2.5px | `w-2.5` |
| Navigation sidebar | 80px | `w-20` |
| Main content | Flexible | `flex-1 max-w-full` |
| Dropdown minimum | 240px | `min-w-[240px]` |
| User menu minimum | 180px | `min-w-[180px]` |
| Search input | 256px | `w-64` |

---

## Overflow Handling

```html
<!-- Main content scrollable -->
<div class="flex-1 overflow-y-auto p-6">

<!-- Table horizontal scroll -->
<div class="overflow-x-auto">
    <table class="min-w-full">

<!-- Hidden scrollbar for tabs -->
<nav class="flex overflow-x-auto scrollbar-hide">
```
