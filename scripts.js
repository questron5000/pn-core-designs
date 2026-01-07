/**
 * Plan Notice Client Portal Scripts
 * Handles all interactive elements and initialization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Fix dropdowns directly
    fixDropdowns();
    
    // Initialize animations for the gradient bar
    initializeGradientBar();
    
    // Initialize filter buttons
    initializeFilters();
    
    // Initialize table sort functionality
    initializeTableSort();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize export functionality
    initializeExport();
    
    // Initialize modals
    initializeModals();
    
    // Setup table row selection - moved to DOMContentLoaded event
    
    // Setup filter modal
    setupFilterModal();
    
    // Setup status modal
    setupStatusModal();
    
    // Handle step interactions in expanded panel
    initializeStepInteractions();
});

/**
 * Initialize gradient bar animations
 */
function initializeGradientBar() {
    const gradientBar = document.querySelector('.gradient-bar');
    if (gradientBar) {
        // The animation is handled via CSS, but we could add additional effects here
    }
}

/**
 * Initialize all dropdown menus
 */
function initializeDropdowns() {
    console.log('Original initializeDropdowns - skipped in favor of fixDropdowns');
}

/**
 * Initialize filter functionality
 */
function initializeFilters() {
    // Active/Archived toggle
    const filterActive = document.getElementById('filterActive');
    const filterArchived = document.getElementById('filterArchived');
    const clearFilters = document.getElementById('clearFilters');
    
    if (filterActive && filterArchived) {
        filterActive.addEventListener('click', function() {
            filterActive.classList.add('bg-purple-600', 'text-white');
            filterActive.classList.remove('bg-white', 'text-gray-700');
            
            filterArchived.classList.remove('bg-purple-600', 'text-white');
            filterArchived.classList.add('bg-white', 'text-gray-700');
            
            // Here you would update the table to show only active plans
            // For now, we'll just simulate the effect
            clearFilters.classList.add('hidden');
        });
        
        filterArchived.addEventListener('click', function() {
            filterArchived.classList.add('bg-purple-600', 'text-white');
            filterArchived.classList.remove('bg-white', 'text-gray-700');
            
            filterActive.classList.remove('bg-purple-600', 'text-white');
            filterActive.classList.add('bg-white', 'text-gray-700');
            
            // Here you would update the table to show only archived plans
            // For now, we'll just simulate the effect
            clearFilters.classList.remove('hidden');
        });
    }
    
    if (clearFilters) {
        clearFilters.addEventListener('click', function() {
            // Reset filters
            filterActive.classList.add('bg-purple-600', 'text-white');
            filterArchived.classList.remove('bg-purple-600', 'text-white');
            filterArchived.classList.add('bg-white', 'text-gray-700');
            
            clearFilters.classList.add('hidden');
            
            // Here you would reset the table to show all plans
        });
    }
    
    // Filter modal
    const filterButton = document.getElementById('filterButton');
    const filterModal = document.getElementById('filterModal');
    
    if (filterButton && filterModal) {
        filterButton.addEventListener('click', function() {
            filterModal.classList.remove('hidden');
        });
    }
}

/**
 * Initialize table sorting
 */
function initializeTableSort() {
    const tableHeaders = document.querySelectorAll('.data-table th');
    
    tableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Here you would implement sorting functionality
            // For now, we'll just simulate the effect
            const sortDirection = this.getAttribute('data-sort-direction') === 'asc' ? 'desc' : 'asc';
            
            // Remove sort indicators from all headers
            tableHeaders.forEach(h => {
                h.removeAttribute('data-sort-direction');
                const icons = h.querySelectorAll('i');
                icons.forEach(icon => icon.remove());
            });
            
            // Add sort indicator to this header
            this.setAttribute('data-sort-direction', sortDirection);
            
            const icon = document.createElement('i');
            icon.setAttribute('data-lucide', sortDirection === 'asc' ? 'chevron-up' : 'chevron-down');
            icon.classList.add('ml-1', 'w-4', 'h-4', 'inline');
            
            this.appendChild(icon);
            lucide.createIcons();
        });
    });
}

/**
 * Global table sorting function - called via onclick on table headers
 * @param {HTMLElement} header - The clicked header element
 * @param {number} columnIndex - The column index to sort by
 */
window.sortTable = function(header, columnIndex) {
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const icon = header.querySelector('i');

    // Determine sort direction
    const currentDir = header.dataset.sortDir || 'none';
    let newDir = currentDir === 'asc' ? 'desc' : 'asc';

    // Reset all other headers in this table
    const allHeaders = table.querySelectorAll('th');
    allHeaders.forEach(th => {
        th.dataset.sortDir = 'none';
        const thIcon = th.querySelector('i');
        if (thIcon) {
            thIcon.setAttribute('data-lucide', 'chevrons-up-down');
        }
    });

    // Set current header direction
    header.dataset.sortDir = newDir;

    // Update icon
    if (icon) {
        icon.setAttribute('data-lucide', newDir === 'asc' ? 'chevron-up' : 'chevron-down');
    }

    // Re-initialize lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Sort rows
    rows.sort((a, b) => {
        const aCell = a.cells[columnIndex];
        const bCell = b.cells[columnIndex];

        if (!aCell || !bCell) return 0;

        let aVal = aCell.textContent.trim();
        let bVal = bCell.textContent.trim();

        // Try to parse as number (remove $ and ,)
        const aNum = parseFloat(aVal.replace(/[$,]/g, ''));
        const bNum = parseFloat(bVal.replace(/[$,]/g, ''));

        if (!isNaN(aNum) && !isNaN(bNum)) {
            return newDir === 'asc' ? aNum - bNum : bNum - aNum;
        }

        // String comparison
        return newDir === 'asc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
    });

    // Re-append sorted rows
    rows.forEach(row => tbody.appendChild(row));
};

/**
 * Initialize search functionality
 */
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // Here you would implement search functionality
            // For now, we'll just log the search term
            console.log('Searching for:', this.value);
        });
    }
}

/**
 * Initialize export functionality
 */
function initializeExport() {
    const exportOptions = document.querySelectorAll('#exportMenu .dropdown-item');
    
    exportOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Here you would implement export functionality
            // For now, we'll just log the export type
            const exportType = this.textContent.trim();
            console.log('Exporting as:', exportType);
            
            // Close dropdown
            document.getElementById('exportMenu').classList.add('hidden');
        });
    });
}

/**
 * Initialize modal functionality
 */
function initializeModals() {
    // Filter modal
    const filterModal = document.getElementById('filterModal');
    const closeFilterModal = document.getElementById('closeFilterModal');
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    if (filterModal && closeFilterModal) {
        closeFilterModal.addEventListener('click', function() {
            filterModal.classList.add('hidden');
        });
    }
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            // Here you would apply the selected filters
            // For now, we'll just close the modal
            filterModal.classList.add('hidden');
            
            // Show clear filters button
            const clearFilters = document.getElementById('clearFilters');
            if (clearFilters) {
                clearFilters.classList.remove('hidden');
            }
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            // Reset all checkboxes to checked
            const checkboxes = document.querySelectorAll('#recordkeeperList .checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            
            // Update count
            document.getElementById('recordkeeperCount').textContent = checkboxes.length + ' selected';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (filterModal && e.target === filterModal) {
            filterModal.classList.add('hidden');
        }
    });
    
    // Recordkeeper search
    const recordkeeperSearch = document.getElementById('recordkeeperSearch');
    if (recordkeeperSearch) {
        recordkeeperSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.querySelectorAll('#recordkeeperList .checkbox-item');
            
            items.forEach(item => {
                const label = item.querySelector('label').textContent.trim().toLowerCase();
                
                if (label.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // Select/Deselect All
    const selectAllRecordkeepers = document.getElementById('selectAllRecordkeepers');
    if (selectAllRecordkeepers) {
        selectAllRecordkeepers.addEventListener('click', function() {
            const checkboxes = document.querySelectorAll('#recordkeeperList .checkbox');
            const isSelectAll = this.textContent.includes('Select All');
            
            checkboxes.forEach(checkbox => {
                checkbox.checked = isSelectAll;
            });
            
            this.textContent = isSelectAll ? 'Deselect All' : 'Select All';
            document.getElementById('recordkeeperCount').textContent = isSelectAll ? checkboxes.length + ' selected' : '0 selected';
        });
    }
    
    // Update count when individual checkboxes change
    const recordkeeperCheckboxes = document.querySelectorAll('#recordkeeperList .checkbox');
    recordkeeperCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCount = document.querySelectorAll('#recordkeeperList .checkbox:checked').length;
            document.getElementById('recordkeeperCount').textContent = checkedCount + ' selected';
            
            // Update select all button text
            const selectAllBtn = document.getElementById('selectAllRecordkeepers');
            if (checkedCount === recordkeeperCheckboxes.length) {
                selectAllBtn.textContent = 'Deselect All';
            } else {
                selectAllBtn.textContent = 'Select All';
            }
        });
    });
}

// Table row selection functionality
function setupTableRowSelection() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    console.log('Setting up table row selection for page:', currentPage);

    // Add specific handlers for plan names (on dashboard pages)
    if (currentPage === 'index.html' || currentPage === 'plans.html' || currentPage === '') {
        const planNames = document.querySelectorAll('table tbody tr td:nth-child(2) div.text-sm.font-medium.text-gray-900');
        console.log('Found plan name elements:', planNames.length);

        planNames.forEach(planName => {
            planName.style.cursor = 'pointer';
            planName.style.color = '#7c3aed'; // Make it look clickable
            planName.style.textDecoration = 'none';

            planName.addEventListener('mouseenter', function() {
                this.style.textDecoration = 'underline';
            });

            planName.addEventListener('mouseleave', function() {
                this.style.textDecoration = 'none';
            });

            planName.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Plan name clicked!', this.textContent);
                window.location.href = 'plans_detail-2.html';
            });
        });
    }

    // Add specific handlers for notice names (on plan detail page) - ONLY in notices section
    if (currentPage === 'plans_detail-2.html') {
        const noticesSection = document.getElementById('noticesSection');
        if (noticesSection) {
            const noticeNames = noticesSection.querySelectorAll('table tbody tr td:nth-child(2) div.text-sm.font-medium');
            console.log('Found notice name elements:', noticeNames.length);

            noticeNames.forEach(noticeName => {
                noticeName.style.cursor = 'pointer';
                noticeName.style.color = '#7c3aed'; // Make it look clickable
                noticeName.style.textDecoration = 'none';

                noticeName.addEventListener('mouseenter', function() {
                    this.style.textDecoration = 'underline';
                });

                noticeName.addEventListener('mouseleave', function() {
                    this.style.textDecoration = 'none';
                });

                noticeName.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Notice name clicked!', this.textContent);
                    window.location.href = 'notice_detail.html';
                });
            });
        }
    }
}

// Filter modal functionality
function setupFilterModal() {
    const filterButton = document.getElementById('filterButton');
    const filterModal = document.getElementById('filterModal');
    const closeFilterModal = document.getElementById('closeFilterModal');
    
    if (filterButton && filterModal) {
        filterButton.addEventListener('click', function() {
            filterModal.classList.remove('hidden');
        });
    }
    
    if (closeFilterModal && filterModal) {
        closeFilterModal.addEventListener('click', function() {
            filterModal.classList.add('hidden');
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (filterModal && e.target === filterModal) {
            filterModal.classList.add('hidden');
        }
    });
    
    // Filter buttons in plans.html
    const filterActive = document.getElementById('filterActive');
    const filterArchived = document.getElementById('filterArchived');
    const clearFilters = document.getElementById('clearFilters');
    
    if (filterActive && filterArchived && clearFilters) {
        filterActive.addEventListener('click', function() {
            this.classList.add('bg-purple-600', 'text-white');
            this.classList.remove('bg-white', 'text-gray-700');
            filterArchived.classList.remove('bg-purple-600', 'text-white');
            filterArchived.classList.add('bg-white', 'text-gray-700');
            clearFilters.classList.add('hidden');
        });
        
        filterArchived.addEventListener('click', function() {
            this.classList.add('bg-purple-600', 'text-white');
            this.classList.remove('bg-white', 'text-gray-700');
            filterActive.classList.remove('bg-purple-600', 'text-white');
            filterActive.classList.add('bg-white', 'text-gray-700');
            clearFilters.classList.remove('hidden');
        });
        
        clearFilters.addEventListener('click', function() {
            filterActive.classList.add('bg-purple-600', 'text-white');
            filterActive.classList.remove('bg-white', 'text-gray-700');
            filterArchived.classList.remove('bg-purple-600', 'text-white');
            filterArchived.classList.add('bg-white', 'text-gray-700');
            this.classList.add('hidden');
        });
    }
    
    // Status filter buttons in plan-detail.html
    const filterAll = document.getElementById('filterAll');
    const filterActiveStatus = document.getElementById('filterActive');
    const filterCompleted = document.getElementById('filterCompleted');
    const filterStopped = document.getElementById('filterStopped');
    
    if (filterAll && filterActiveStatus && filterCompleted && filterStopped) {
        const statusButtons = [filterAll, filterActiveStatus, filterCompleted, filterStopped];
        
        statusButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Reset all buttons
                statusButtons.forEach(btn => {
                    btn.classList.remove('bg-purple-600', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700');
                });
                
                // Activate clicked button
                this.classList.remove('bg-white', 'text-gray-700');
                this.classList.add('bg-purple-600', 'text-white');
                
                // Show clear filters button if not "All"
                if (this !== filterAll) {
                    clearFilters.classList.remove('hidden');
                } else {
                    clearFilters.classList.add('hidden');
                }
                
                // Here you would filter the table based on the status
                // For now, we'll just log the filter
                console.log(`Filtering by status: ${this.innerText.split(' ')[0]}`);
            });
        });
        
        // Clear filters button for status filters
        if (clearFilters) {
            clearFilters.addEventListener('click', function() {
                statusButtons.forEach(btn => {
                    btn.classList.remove('bg-purple-600', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700');
                });
                
                filterAll.classList.remove('bg-white', 'text-gray-700');
                filterAll.classList.add('bg-purple-600', 'text-white');
                
                this.classList.add('hidden');
                
                // Reset the filter
                console.log('Clearing status filters');
            });
        }
    }
    
    // Handle notice type filters in plan-detail.html
    const noticeTypeSearch = document.getElementById('noticeTypeSearch');
    const selectAllNoticeTypes = document.getElementById('selectAllNoticeTypes');
    const noticeTypeCheckboxes = document.querySelectorAll('#noticeTypeList .checkbox');
    
    if (noticeTypeSearch) {
        noticeTypeSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.querySelectorAll('#noticeTypeList .checkbox-item');
            
            items.forEach(item => {
                const label = item.querySelector('label').textContent.trim().toLowerCase();
                
                if (label.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    if (selectAllNoticeTypes && noticeTypeCheckboxes.length > 0) {
        selectAllNoticeTypes.addEventListener('click', function() {
            const isSelectAll = this.textContent.includes('Select All');
            
            noticeTypeCheckboxes.forEach(checkbox => {
                checkbox.checked = isSelectAll;
            });
            
            this.textContent = isSelectAll ? 'Deselect All' : 'Select All';
            
            // Update count
            const checkedCount = isSelectAll ? noticeTypeCheckboxes.length : 0;
            document.getElementById('noticeTypeCount').textContent = checkedCount + ' selected';
        });
        
        // Update count when individual checkboxes change
        noticeTypeCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checkedCount = document.querySelectorAll('#noticeTypeList .checkbox:checked').length;
                document.getElementById('noticeTypeCount').textContent = checkedCount + ' selected';
                
                // Update select all button text
                if (checkedCount === noticeTypeCheckboxes.length) {
                    selectAllNoticeTypes.textContent = 'Deselect All';
                } else {
                    selectAllNoticeTypes.textContent = 'Select All';
                }
            });
        });
    }
}

// Setup status modal functionality
function setupStatusModal() {
    const statusButton = document.getElementById('statusButton');
    const statusModal = document.getElementById('statusModal');
    const closeStatusModal = document.getElementById('closeStatusModal');
    const cancelStatusBtn = document.getElementById('cancelStatusBtn');
    const applyStatusBtn = document.getElementById('applyStatusBtn');
    const statusOptions = document.querySelectorAll('.status-option-button');
    
    if (!statusButton || !statusModal) return;
    
    // Show modal when status button is clicked
    statusButton.addEventListener('click', () => {
        statusModal.classList.remove('hidden');
        
        // Mark current status as selected
        const currentStatus = statusButton.querySelector('span').textContent.trim().toLowerCase();
        statusOptions.forEach(option => {
            const optionStatus = option.getAttribute('data-status');
            if (optionStatus === currentStatus) {
                option.classList.add('selected-status');
                option.classList.add('border-purple-500', 'bg-purple-50');
            } else {
                option.classList.remove('selected-status');
                option.classList.remove('border-purple-500', 'bg-purple-50');
            }
        });
    });
    
    // Close modal when close button is clicked
    if (closeStatusModal) {
        closeStatusModal.addEventListener('click', () => {
            statusModal.classList.add('hidden');
        });
    }
    
    // Close modal when cancel button is clicked
    if (cancelStatusBtn) {
        cancelStatusBtn.addEventListener('click', () => {
            statusModal.classList.add('hidden');
        });
    }
    
    // Select status option when clicked
    if (statusOptions.length > 0) {
        statusOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Reset all options
                statusOptions.forEach(opt => {
                    opt.classList.remove('selected-status');
                    opt.classList.remove('border-purple-500', 'bg-purple-50');
                });
                
                // Highlight selected option
                option.classList.add('selected-status');
                option.classList.add('border-purple-500', 'bg-purple-50');
            });
        });
    }
    
    // Apply selected status
    if (applyStatusBtn) {
        applyStatusBtn.addEventListener('click', () => {
            const selectedOption = document.querySelector('.status-option-button.selected-status');
            
            if (selectedOption) {
                const statusValue = selectedOption.getAttribute('data-status');
                const statusText = selectedOption.querySelector('.font-medium').textContent;
                
                // Update button text
                const buttonText = statusButton.querySelector('span');
                if (buttonText) {
                    buttonText.textContent = statusText;
                }
                
                // Apply visual changes based on status
                if (statusValue === 'archived') {
                    // Apply archived styling
                    statusButton.classList.add('bg-gray-400', 'bg-opacity-20');
                    statusButton.classList.remove('bg-transparent');
                } else {
                    // Apply active styling
                    statusButton.classList.remove('bg-gray-400', 'bg-opacity-20');
                    statusButton.classList.add('bg-transparent');
                }
                
                // Hide modal
                statusModal.classList.add('hidden');
                
                console.log(`Status changed to: ${statusText}`);
            }
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === statusModal) {
            statusModal.classList.add('hidden');
        }
    });
}

// Direct fix for dropdowns
function fixDropdowns() {
    console.log('Direct fix for dropdowns - handling both plans.html and plan-detail.html');
    
    // Fix for BOTH dropdown variations (TRA dropdown and contextDropdown)
    const traBtn = document.getElementById('traDropdown');
    const traContent = document.getElementById('traDropdownContent');
    const contextBtn = document.getElementById('contextDropdown');
    const contextContent = document.getElementById('contextDropdownContent');
    
    // Handle TRA dropdown on plan-detail.html
    if (traBtn && traContent) {
        console.log('Implementing direct click handler for TRA dropdown');
        
        // Direct handler on the button itself
        traBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            traContent.classList.toggle('hidden');
            console.log('TRA button clicked directly:', traBtn.id);
            return false;
        };
        
        // Also handle clicks on elements inside the button
        const traChevronIcon = traBtn.querySelector('i[data-lucide="chevron-down"]');
        if (traChevronIcon) {
            traChevronIcon.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                traContent.classList.toggle('hidden');
                return false;
            };
        }
        
        // Handle span text inside button
        const traSpanText = traBtn.querySelector('span');
        if (traSpanText) {
            traSpanText.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                traContent.classList.toggle('hidden');
                return false;
            };
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (traContent && !traContent.classList.contains('hidden') &&
                (!traBtn || !traBtn.contains(event.target)) && 
                !traContent.contains(event.target)) {
                traContent.classList.add('hidden');
            }
        });
    }
    
    // Handle context dropdown on plans.html
    if (contextBtn && contextContent) {
        console.log('Implementing direct click handler for context dropdown (plans.html)');
        
        // Direct handler on the button itself
        contextBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            contextContent.classList.toggle('hidden');
            console.log('Context button clicked directly:', contextBtn.id);
            return false;
        };
        
        // Also handle clicks on elements inside the button
        const contextChevronIcon = contextBtn.querySelector('i[data-lucide="chevron-down"]');
        if (contextChevronIcon) {
            contextChevronIcon.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                contextContent.classList.toggle('hidden');
                return false;
            };
        }
        
        // Handle span text inside button
        const contextSpanText = contextBtn.querySelector('span');
        if (contextSpanText) {
            contextSpanText.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                contextContent.classList.toggle('hidden');
                return false;
            };
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (contextContent && !contextContent.classList.contains('hidden') &&
                (!contextBtn || !contextBtn.contains(event.target)) && 
                !contextContent.contains(event.target)) {
                contextContent.classList.add('hidden');
            }
        });
    }
    
    // Fix user profile dropdown - this one is working
    const profileBtn = document.getElementById('userProfileButton');
    const profileContent = document.getElementById('userProfileMenu');
    
    if (profileBtn && profileContent) {
        console.log('Found profile dropdown elements');
        profileBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            profileContent.classList.toggle('hidden');
            console.log('Profile button clicked directly');
            return false;
        };
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (profileContent && !profileContent.classList.contains('hidden') &&
                (!profileBtn || !profileBtn.contains(event.target)) && 
                !profileContent.contains(event.target)) {
                profileContent.classList.add('hidden');
            }
        });
    }
    
    // Fix export dropdown
    const exportBtn = document.getElementById('exportButton');
    const exportContent = document.getElementById('exportMenu');
    
    if (exportBtn && exportContent) {
        exportBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            exportContent.classList.toggle('hidden');
            return false;
        };
    }
}

// Handle filter buttons - ensure only one is active at a time
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.flex.shadow-sm.rounded-md.overflow-hidden button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Here you would add logic to filter the table based on the selection
            const filterType = button.id.replace('filter', '').toLowerCase();
            console.log(`Filter selected: ${filterType}`);
            
            // Example: Hide/show rows based on filter type
            filterTableRows(filterType);
        });
    });
}

// Filter table rows based on selected filter
function filterTableRows(filterType) {
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    
    tableRows.forEach(row => {
        const statusCell = row.querySelector('td:last-child .badge');
        const status = statusCell ? statusCell.textContent.trim().toLowerCase() : '';
        
        if (filterType === 'all') {
            row.style.display = ''; // Show all rows
        } else if (filterType === 'active' && status === 'active') {
            row.style.display = '';
        } else if (filterType === 'completed' && status === 'completed') {
            row.style.display = '';
        } else if (filterType === 'stopped' && status === 'stopped') {
            row.style.display = '';
        } else {
            row.style.display = 'none'; // Hide rows that don't match
        }
    });
}

// Setup status dropdown functionality - Replace with modal version
function setupStatusDropdown() {
    // This function is replaced by setupStatusModal
    // Keeping the function to maintain backward compatibility
    console.log('Status dropdown replaced with modal');
}

// Keep setupDropdowns for backward compatibility
function setupDropdowns() {
    console.log('Original setupDropdowns - skipped in favor of fixDropdowns');
}

// Initialize all Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - initializing...');
    lucide.createIcons();
    fixDropdowns(); // Use fixDropdowns instead of setupDropdowns
    setupFilterButtons();
    
    // Add a small delay to ensure all elements are rendered
    setTimeout(() => {
        setupTableRowSelection();
    }, 100);
    
    setupStatusModal(); // Replace setupStatusDropdown with setupStatusModal
    
    // Setup back navigation buttons
    const backToIndex = document.querySelector('a[href="index.html"]');
    if (backToIndex && backToIndex.querySelector('[data-lucide="arrow-left"]')) {
        console.log('Setting up back to index button');
        backToIndex.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
    
    const backToPlans = document.querySelector('a[href="plans_detail-2.html"]');
    if (backToPlans && backToPlans.querySelector('[data-lucide="arrow-left"]')) {
        console.log('Setting up back to plans button');
        backToPlans.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'plans_detail-2.html';
        });
    }
    
    // Direct approach - add click handlers to table after a longer delay
    setTimeout(() => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        console.log('Direct approach for page:', currentPage);
        
        if (currentPage === 'index.html' || currentPage === 'plans.html' || currentPage === '') {
            // Use event delegation on the table body for plans
            const tableBody = document.querySelector('table tbody');
            if (tableBody) {
                console.log('Setting up event delegation on table body for plans');
                tableBody.addEventListener('click', function(e) {
                    // Find the closest table row
                    const row = e.target.closest('tr');
                    if (row && row.tagName === 'TR') {
                        console.log('Plan table row clicked via delegation!', row);
                        window.location.href = 'plans_detail-2.html';
                    }
                });
            }
        } else if (currentPage === 'plans_detail-2.html') {
            // Use event delegation on the table body for notices
            // But only for the notices section, not billing/services/recipients sections
            const noticesSection = document.getElementById('noticesSection');
            if (noticesSection) {
                const noticesTableBody = noticesSection.querySelector('table tbody');
                if (noticesTableBody) {
                    console.log('Setting up event delegation on notices table body');
                    noticesTableBody.addEventListener('click', function(e) {
                        // Find the closest table row
                        const row = e.target.closest('tr');
                        if (row && row.tagName === 'TR') {
                            console.log('Notice table row clicked via delegation!', row);
                            window.location.href = 'notice_detail.html';
                        }
                    });
                }
            }
        }
    }, 500);
    
    // Test function to verify clicks are working
    window.testClick = function() {
        console.log('Test function called - navigation should work');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === 'index.html' || currentPage === 'plans.html' || currentPage === '') {
            window.location.href = 'plans_detail-2.html';
        } else if (currentPage === 'plans_detail-2.html') {
            window.location.href = 'notice_detail.html';
        }
    };
    
    // Test function specifically for notice navigation
    window.testNoticeClick = function() {
        console.log('Test notice click function called');
        window.location.href = 'notice_detail.html';
    };
});

// Initialize Lucide icons - add a failsafe with timeout
function initIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons({
            attrs: {
                'stroke-width': '1.5',
                'width': '100%',
                'height': '100%'
            }
        });
    } else {
        // Try again in 200ms if Lucide isn't loaded yet
        setTimeout(initIcons, 200);
    }
}

// Try to initialize immediately
initIcons();

// And also on load as a fallback
window.addEventListener('load', initIcons);

// Function to toggle dropdown with visual effect
function toggleDropdown(buttonId, menuId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    
    if (button && menu) {
        menu.classList.toggle('hidden');
        
        // Add visual indicator for active button
        if (!menu.classList.contains('hidden')) {
            button.classList.add('bg-gray-100');
        } else {
            button.classList.remove('bg-gray-100');
        }
    }
}

// Close dropdowns when clicking anywhere else
document.addEventListener('click', function() {
    // Close all dropdowns
    var dropdowns = [
        'userProfileMenu',
        'contextDropdownContent',
        'exportMenu'
    ];
    
    dropdowns.forEach(function(id) {
        var dropdown = document.getElementById(id);
        if (dropdown) {
            dropdown.classList.add('hidden');
        }
    });
});

// Other UI functionality - defer to after page render for better performance
window.addEventListener('load', function() {
    // Tab switching with filtering
    var activeTab = document.getElementById('filterActive');
    var archivedTab = document.getElementById('filterArchived');
    
    if (activeTab && archivedTab) {
        activeTab.addEventListener('click', function() {
            activeTab.classList.add('filter-tab-active');
            activeTab.classList.remove('filter-tab-inactive', 'filter-tab-inactive-left');
            archivedTab.classList.add('filter-tab-inactive', 'filter-tab-inactive-right');
            archivedTab.classList.remove('filter-tab-active-archived');
            
            // Filter table rows to show only active plans
            const tableRows = document.querySelectorAll('.data-table tbody tr[data-status]');
            tableRows.forEach(row => {
                const rowStatus = row.getAttribute('data-status');
                if (rowStatus === 'active') {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
            
            // Update count
            const activeCount = document.querySelectorAll('.data-table tbody tr[data-status="active"]').length;
            activeTab.querySelector('span').textContent = `(${activeCount})`;
        });
        
        archivedTab.addEventListener('click', function() {
            archivedTab.classList.add('filter-tab-active-archived');
            archivedTab.classList.remove('filter-tab-inactive', 'filter-tab-inactive-right');
            activeTab.classList.add('filter-tab-inactive', 'filter-tab-inactive-left');
            activeTab.classList.remove('filter-tab-active');
            
            // Filter table rows to show only archived plans
            const tableRows = document.querySelectorAll('.data-table tbody tr[data-status]');
            tableRows.forEach(row => {
                const rowStatus = row.getAttribute('data-status');
                if (rowStatus === 'archived') {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
            
            // Update count
            const archivedCount = document.querySelectorAll('.data-table tbody tr[data-status="archived"]').length;
            archivedTab.querySelector('span').textContent = `(${archivedCount})`;
        });
        
        // Update initial counts
        const activeCount = document.querySelectorAll('.data-table tbody tr[data-status="active"]').length;
        const archivedCount = document.querySelectorAll('.data-table tbody tr[data-status="archived"]').length;
        activeTab.querySelector('span').textContent = `(${activeCount})`;
        archivedTab.querySelector('span').textContent = `(${archivedCount})`;
    }
    
    // Filter modal
    var filterButton = document.getElementById('filterButton');
    var filterModal = document.getElementById('filterModal');
    var closeFilterModal = document.getElementById('closeFilterModal');
    var applyFiltersBtn = document.getElementById('applyFiltersBtn');
    var clearFiltersBtn = document.getElementById('clearFiltersBtn');
    var filterContainer = document.querySelector('.flex.items-center');
    
    if (filterButton && filterModal) {
        filterButton.addEventListener('click', function() {
            filterModal.classList.remove('hidden');
        });
        
        if (closeFilterModal) {
            closeFilterModal.addEventListener('click', function() {
                filterModal.classList.add('hidden');
            });
        }
        
        filterModal.addEventListener('click', function(e) {
            if (e.target === filterModal) {
                filterModal.classList.add('hidden');
            }
        });
    }
    
    // Slider functionality
    var slider = document.getElementById('participantSlider');
    var sliderValue = document.getElementById('sliderValue');
    
    if (slider && sliderValue) {
        slider.addEventListener('input', function() {
            var percent = (this.value / this.max) * 100;
            sliderValue.style.left = percent + '%';
            sliderValue.textContent = this.value;
        });
    }
    
    // Apply filters
    if (applyFiltersBtn && filterModal && filterContainer) {
        applyFiltersBtn.addEventListener('click', function() {
            // Get the selected radio button value
            const selectedRadio = document.querySelector('input[name="planStatusFilter"]:checked');
            const selectedStatus = selectedRadio ? selectedRadio.value : 'active';
            
            // Filter the table rows based on data-status attribute
            const tableRows = document.querySelectorAll('.data-table tbody tr[data-status]');
            let visibleCount = 0;
            
            tableRows.forEach(row => {
                const rowStatus = row.getAttribute('data-status');
                if (rowStatus === selectedStatus) {
                    row.style.display = '';
                    visibleCount++;
                    // Also handle any associated expanded rows
                    const nextRow = row.nextElementSibling;
                    if (nextRow && nextRow.classList.contains('expanded-row')) {
                        // Keep expanded row hidden by default unless it was already expanded
                        if (!nextRow.classList.contains('hidden')) {
                            nextRow.style.display = '';
                        }
                    }
                } else {
                    row.style.display = 'none';
                    // Also hide any associated expanded rows
                    const nextRow = row.nextElementSibling;
                    if (nextRow && nextRow.classList.contains('expanded-row')) {
                        nextRow.style.display = 'none';
                    }
                }
            });
            
            // Update the active/archived tab to match the filter
            if (selectedStatus === 'archived') {
                const archivedTab = document.getElementById('filterArchived');
                const activeTab = document.getElementById('filterActive');
                if (archivedTab && activeTab) {
                    archivedTab.click();
                }
            } else {
                const activeTab = document.getElementById('filterActive');
                const archivedTab = document.getElementById('filterArchived');
                if (activeTab && archivedTab) {
                    activeTab.click();
                }
            }
            
            filterModal.classList.add('hidden');
            
            if (!document.getElementById('clearFilters')) {
                var clearBtn = document.createElement('button');
                clearBtn.id = 'clearFilters';
                clearBtn.className = 'clear-filters-btn';
                clearBtn.innerHTML = '<i data-lucide="x" class="w-4 h-4 mr-1"></i>Clear Filters';
                
                clearBtn.addEventListener('click', function() {
                    // Reset filter to show all rows
                    const allRows = document.querySelectorAll('.data-table tbody tr[data-status]');
                    allRows.forEach(row => {
                        row.style.display = '';
                    });
                    // Reset radio to Active
                    const activeRadio = document.querySelector('input[name="planStatusFilter"][value="active"]');
                    if (activeRadio) {
                        activeRadio.checked = true;
                    }
                    // Click the Active tab
                    const activeTab = document.getElementById('filterActive');
                    if (activeTab) {
                        activeTab.click();
                    }
                    this.remove();
                });
                
                filterContainer.appendChild(clearBtn);
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons({
                        selector: '[data-lucide="x"]'
                    });
                }
            }
        });
    }
    
    // Clear filters
    if (clearFiltersBtn && filterModal) {
        clearFiltersBtn.addEventListener('click', function() {
            filterModal.classList.add('hidden');
        });
    }
});

function toggleRow(row) {
    // Close other expanded rows
    const otherExpandedRows = document.querySelectorAll('.expanded-row:not(.hidden)');
    otherExpandedRows.forEach(expandedRow => {
        if (expandedRow !== row.nextElementSibling) {
            expandedRow.classList.add('hidden');
            // Reset chevron rotation for closed rows
            const chevron = expandedRow.previousElementSibling.querySelector('[data-lucide="chevron-right"]');
            if (chevron) {
                chevron.style.transform = 'rotate(0deg)';
            }
        }
    });

    // Toggle current row
    const expandedRow = row.nextElementSibling;
    const chevron = row.querySelector('[data-lucide="chevron-right"]');
    
    if (expandedRow.classList.contains('hidden')) {
        expandedRow.classList.remove('hidden');
        // Rotate chevron down (90 degrees)
        if (chevron) {
            chevron.style.transform = 'rotate(90deg)';
        }
        
        // Find and select the email step
        const emailStep = expandedRow.querySelector('[data-step="email1"]');
        if (emailStep) {
            // Remove selected class from all steps
            expandedRow.querySelectorAll('[data-step]').forEach(step => {
                step.classList.remove('selected-step');
            });
            
            // Add selected class to email step
            emailStep.classList.add('selected-step');
            
            // Update the details panel with email data
            updateStepDetails('email1');
        }
    } else {
        expandedRow.classList.add('hidden');
        // Reset chevron rotation
        if (chevron) {
            chevron.style.transform = 'rotate(0deg)';
        }
    }
}

// Handle step interactions in expanded panel
function initializeStepInteractions() {
    const stepItems = document.querySelectorAll('.step-item');
    
    // Select first step by default
    if (stepItems.length > 0) {
        const firstStep = stepItems[0];
        firstStep.classList.add('active');
        firstStep.classList.add('bg-white', 'border', 'border-gray-200');
        showStepDetails(firstStep, firstStep.dataset.step);
    }
    
    stepItems.forEach(item => {
        // Handle hover
        item.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                item.classList.add('bg-white', 'border', 'border-gray-200');
                showStepDetails(item, item.dataset.step);
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                item.classList.remove('bg-white', 'border', 'border-gray-200');
            }
        });
        
        // Handle click
        item.addEventListener('click', () => {
            // Remove active class from all items
            stepItems.forEach(step => {
                step.classList.remove('active');
                step.classList.remove('bg-white', 'border', 'border-gray-200');
            });
            // Add active class to clicked item
            item.classList.add('active');
            item.classList.add('bg-white', 'border', 'border-gray-200');
            showStepDetails(item, item.dataset.step);
        });
    });
}

const stepDetails = {
    'email1': {
        title: 'Email 1',
        status: 'Delivered',
        statusText: 'Unconfirmed',
        sentDate: 'Apr 28, 2023 2:25 PM',
        type: 'HTML Email',
        recipient: 'john.smith@example.com',
        timeline: [
            { status: 'Sent', time: 'Apr 28, 2023 2:25 PM' },
            { status: 'Delivered', time: 'Apr 28, 2023 2:26 PM' }
        ]
    },
    'email2': {
        title: 'Email 2',
        status: 'Delivered',
        statusText: 'Unconfirmed',
        sentDate: 'Apr 29, 2023 10:15 AM',
        type: 'HTML Email',
        recipient: 'john.smith@example.com',
        timeline: [
            { status: 'Sent', time: 'Apr 29, 2023 10:15 AM' },
            { status: 'Delivered', time: 'Apr 29, 2023 10:16 AM' }
        ]
    },
    'sms': {
        title: 'SMS',
        status: 'Undeliverable',
        statusText: 'Unconfirmed',
        sentDate: 'May 15, 2023 9:00 AM',
        type: 'Text Message',
        recipient: '+1 (555) 123-4567',
        timeline: [
            { status: 'Sent', time: 'May 15, 2023 9:00 AM' },
            { status: 'Failed', time: 'May 15, 2023 9:01 AM' },
            { status: 'Undeliverable', time: 'May 15, 2023 9:01 AM', details: 'Bounced Back' }
        ]
    },
    'mail': {
        title: 'First-Class Mail',
        status: 'Confirmed',
        statusText: 'Confirmed',
        sentDate: 'May 1, 2023',
        type: 'mail',
        recipient: 'John Smith',
        timeline: [
            { status: 'Sent', time: 'May 1, 2023 9:00 AM', icon: 'mail' },
            { status: 'In Transit', time: 'May 3, 2023 2:30 PM', icon: 'truck' },
            { status: 'Delivered', time: 'May 5, 2023 11:15 AM', icon: 'check-circle' },
            { status: 'Opened', time: 'May 6, 2023 3:45 PM', icon: 'check-circle' }
        ]
    }
};

// Function to show step details
function showStepDetails(element, stepId) {
    // Remove active state from all steps in the same expanded row
    const expandedRow = element.closest('.expanded-row');
    const allSteps = expandedRow.querySelectorAll('.step-item');
    
    // Only remove active state if this is a hover event (element doesn't have active class)
    if (!element.classList.contains('active')) {
        allSteps.forEach(step => {
            if (!step.classList.contains('active')) {
                step.classList.remove('bg-white', 'border', 'border-gray-200');
            }
        });
    }

    // Add active state to clicked step
    element.classList.add('bg-white', 'border', 'border-gray-200');

    // Get step details
    const details = stepDetails[stepId];
    if (!details) return;

    // Get the details container for this specific expanded row
    const detailsContainer = expandedRow.querySelector('#emailDetailsContainer');
    if (!detailsContainer) return;

    // Create details content
    const detailsHtml = `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                    <div class="w-8 h-8 ${stepId === 'sms' ? 'bg-red-500' : stepId === 'mail' ? 'bg-green-500' : 'bg-blue-500'} rounded-full flex items-center justify-center">
                        <i data-lucide="${stepId === 'sms' ? 'message-circle' : 'mail'}" class="w-4 h-4 text-white"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="text-lg font-medium text-gray-900">${details.title}</h3>
                    </div>
                </div>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${details.statusText === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                    ${details.statusText}
                </span>
            </div>

            <!-- Details Grid -->
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-50 p-2.5 rounded-lg">
                    <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <i data-lucide="calendar" class="w-3.5 h-3.5 mr-1"></i>
                        ${details.status === 'Scheduled' ? 'Scheduled Date' : 'Sent Date'}
                    </span>
                    <span class="text-sm text-gray-900">${details.sentDate}</span>
                </div>
                <div class="bg-gray-50 p-2.5 rounded-lg">
                    <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <i data-lucide="activity" class="w-3.5 h-3.5 mr-1"></i>
                        Status
                    </span>
                    <span class="text-sm ${stepId === 'sms' ? 'text-red-600 font-medium' : 'text-gray-900'}">${details.status}</span>
                </div>
                <div class="bg-gray-50 p-2.5 rounded-lg">
                    <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <i data-lucide="file-text" class="w-3.5 h-3.5 mr-1"></i>
                        Type
                    </span>
                    <span class="text-sm text-gray-900">${details.type}</span>
                </div>
                <div class="bg-gray-50 p-2.5 rounded-lg">
                    <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <i data-lucide="${stepId === 'sms' ? 'phone' : stepId === 'mail' ? 'map-pin' : 'at-sign'}" class="w-3.5 h-3.5 mr-1"></i>
                        ${stepId === 'sms' ? 'Phone Number' : stepId === 'mail' ? 'Address' : 'Email'}
                    </span>
                    <span class="text-sm text-gray-900">${details.recipient}</span>
                </div>
            </div>
            
            <!-- Status Timeline Table -->
            <div class="mt-8">
                <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Status Timeline</span>
                <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date/Time</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${details.timeline.map(item => `
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <i data-lucide="${item.status.toLowerCase() === 'sent' ? 'send' : 
                                                            item.status.toLowerCase() === 'delivered' ? 'check' : 
                                                            item.status.toLowerCase() === 'failed' ? 'x-circle' :
                                                            item.status.toLowerCase() === 'undeliverable' ? 'alert-circle' :
                                                            item.status.toLowerCase() === 'in transit' ? 'truck' :
                                                            item.status.toLowerCase() === 'out for delivery' ? 'package' :
                                                            'clock'}" 
                                               class="w-4 h-4 ${item.status.toLowerCase() === 'failed' || item.status.toLowerCase() === 'undeliverable' ? 'text-red-500' : 
                                                              item.status.toLowerCase() === 'opened' ? 'text-green-500' : 'text-gray-500'} mr-2"></i>
                                            <span class="text-sm ${item.status.toLowerCase() === 'failed' || item.status.toLowerCase() === 'undeliverable' ? 'text-red-600 font-medium' : 
                                                              item.status.toLowerCase() === 'opened' ? 'text-green-600 font-medium' : 'text-gray-900'}">${item.status}${item.details ? ` - ${item.details}` : ''}</span>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">${item.time || item.date}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    // Update the details container
    detailsContainer.innerHTML = detailsHtml;
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

// Add hover functionality
document.addEventListener('DOMContentLoaded', function() {
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach(step => {
        // Handle hover
        step.addEventListener('mouseenter', () => {
            if (!step.classList.contains('active')) {
                step.classList.add('bg-white', 'border', 'border-gray-200');
                showStepDetails(step, step.dataset.step);
            }
        });
        
        step.addEventListener('mouseleave', () => {
            if (!step.classList.contains('active')) {
                step.classList.remove('bg-white', 'border', 'border-gray-200');
            }
        });
        
        // Handle click
        step.addEventListener('click', () => {
            // Remove active class from all items
            stepItems.forEach(s => {
                s.classList.remove('active');
                s.classList.remove('bg-white', 'border', 'border-gray-200');
            });
            // Add active class to clicked item
            step.classList.add('active');
            step.classList.add('bg-white', 'border', 'border-gray-200');
            showStepDetails(step, step.dataset.step);
        });
    });
});

const emailsPerStep = {
    'email1': [
        {
            email: 'john.smith@example.com',
            status: 'Unopened',
            sentDate: 'Apr 28, 2023 2:25 PM',
            deliveryStatus: 'Delivered',
            timeline: [
                { status: 'Sent', time: 'Apr 28, 2023 2:25 PM' },
                { status: 'Delivered', time: 'Apr 28, 2023 2:26 PM' }
            ]
        },
        {
            email: 'john.smith.personal@example.com',
            status: 'Opened',
            sentDate: 'Apr 28, 2023 2:25 PM',
            deliveryStatus: 'Delivered',
            timeline: [
                { status: 'Sent', time: 'Apr 28, 2023 2:25 PM' },
                { status: 'Delivered', time: 'Apr 28, 2023 2:26 PM' },
                { status: 'Opened', time: 'Apr 28, 2023 2:35 PM' }
            ]
        },
        {
            email: 'robert.johnson@example.com',
            status: 'Not Started',
            sentDate: 'Scheduled for May 15, 2023',
            deliveryStatus: 'Pending',
            timeline: [
                { status: 'Scheduled', time: 'May 15, 2023 9:00 AM' }
            ]
        },
        {
            email: 'sarah.williams@example.com',
            status: 'Not Started',
            sentDate: 'Scheduled for May 15, 2023',
            deliveryStatus: 'Pending',
            timeline: [
                { status: 'Scheduled', time: 'May 15, 2023 9:00 AM' }
            ]
        }
    ],
    'email2': [
        {
            email: 'john.smith@example.com',
            status: 'Opened',
            sentDate: 'Apr 29, 2023 10:15 AM',
            deliveryStatus: 'Delivered',
            timeline: [
                { status: 'Sent', time: 'Apr 29, 2023 10:15 AM' },
                { status: 'Delivered', time: 'Apr 29, 2023 10:16 AM' },
                { status: 'Opened', time: 'Apr 29, 2023 10:45 AM' }
            ]
        }
    ],
    'sms': [
        {
            phone: '+1 (555) 123-4567',
            status: 'Scheduled',
            sentDate: 'May 15, 2023 9:00 AM',
            deliveryStatus: 'Pending',
            timeline: [
                { status: 'Scheduled', time: 'May 15, 2023 9:00 AM' }
            ]
        }
    ],
    'mail': [
        {
            address: '123 Main St, Anytown, USA 12345',
            status: 'Delivered',
            sentDate: 'May 1, 2023',
            deliveryStatus: 'Delivered',
            timeline: [
                { status: 'Sent', time: 'May 1, 2023 9:00 AM' },
                { status: 'In Transit', time: 'May 2, 2023 10:30 AM' },
                { status: 'Out for Delivery', time: 'May 3, 2023 8:15 AM' },
                { status: 'Delivered', time: 'May 3, 2023 2:45 PM' }
            ]
        }
    ]
};

function createEmailContent(emailData, currentIndex, totalEmails) {
    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <i data-lucide="mail" class="w-4 h-4 text-white"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="text-lg font-medium text-gray-900">Email 1</h3>
                    </div>
                </div>
                <div class="flex items-center space-x-3">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500 text-white">
                        ${emailData.status}
                    </span>
                    <div class="flex items-center bg-gray-100 rounded-lg">
                        <button class="p-1 hover:bg-gray-200 rounded-l-lg transition-colors duration-150 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}" 
                                onclick="navigateEmail('prev')" ${currentIndex === 0 ? 'disabled' : ''}>
                            <i data-lucide="chevron-left" class="w-5 h-5 text-gray-600"></i>
                        </button>
                        <span class="px-2 py-1 text-sm text-gray-600 font-medium border-l border-r border-gray-200">
                            ${currentIndex + 1} of ${totalEmails}
                        </span>
                        <button class="p-1 hover:bg-gray-200 rounded-r-lg transition-colors duration-150 ${currentIndex === totalEmails - 1 ? 'opacity-50 cursor-not-allowed' : ''}"
                                onclick="navigateEmail('next')" ${currentIndex === totalEmails - 1 ? 'disabled' : ''}>
                            <i data-lucide="chevron-right" class="w-5 h-5 text-gray-600"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Details Grid -->
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-50 p-2.5 rounded-lg">
                    <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <i data-lucide="calendar" class="w-3.5 h-3.5 mr-1"></i>
                        Sent Date
                    </span>
                    <span class="text-sm text-gray-900">${emailData.sentDate}</span>
                </div>
                <div class="bg-gray-50 p-2.5 rounded-lg">
                    <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <i data-lucide="activity" class="w-3.5 h-3.5 mr-1"></i>
                        Delivery Status
                    </span>
                    <span class="text-sm text-gray-900">${emailData.deliveryStatus}</span>
                </div>
                <div class="bg-gray-50 p-2.5 rounded-lg">
                    <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <i data-lucide="file-text" class="w-3.5 h-3.5 mr-1"></i>
                        Type
                    </span>
                    <span class="text-sm text-gray-900">HTML Email</span>
                </div>
                <div class="bg-gray-50 p-2.5 rounded-lg">
                    <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <i data-lucide="at-sign" class="w-3.5 h-3.5 mr-1"></i>
                        Sent To
                    </span>
                    <span class="text-sm text-gray-900">${emailData.email}</span>
                </div>
            </div>
            
            <!-- Status Timeline Table -->
            <div class="mt-8">
                <span class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Status Timeline</span>
                <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date/Time</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${emailData.timeline.map(item => `
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <i data-lucide="${item.status.toLowerCase() === 'sent' ? 'send' : item.status.toLowerCase() === 'delivered' ? 'check' : 'mail-open'}" 
                                               class="w-4 h-4 text-gray-500 mr-2"></i>
                                            <span class="text-sm text-gray-900">${item.status}</span>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">${item.time || item.date}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Dot Indicators -->
            <div class="flex justify-center space-x-2 mt-6">
                ${Array.from({ length: totalEmails }, (_, i) => `
                    <button class="w-2 h-2 rounded-full transition-all duration-200 ${i === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'}"
                            onclick="navigateToEmail(${i})"
                            aria-label="Go to email ${i + 1}">
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function navigateToEmail(index) {
    const currentStep = document.querySelector('.step-content:not(.hidden)').getAttribute('data-step');
    const emails = emailsPerStep[currentStep];
    
    if (index === currentEmailIndex || index < 0 || index >= emails.length) {
        return;
    }

    const direction = index > currentEmailIndex ? 'next' : 'prev';
    const steps = Math.abs(index - currentEmailIndex);
    
    for (let i = 0; i < steps; i++) {
        navigateEmail(direction);
    }
}

function navigateEmail(direction) {
    const currentStep = document.querySelector('.step-content:not(.hidden)').getAttribute('data-step');
    const emails = emailsPerStep[currentStep];
    const container = document.getElementById('emailDetailsContainer');
    
    if ((direction === 'next' && currentEmailIndex >= emails.length - 1) || 
        (direction === 'prev' && currentEmailIndex <= 0)) {
        return;
    }

    const newIndex = direction === 'next' ? currentEmailIndex + 1 : currentEmailIndex - 1;
    const emailData = emails[newIndex];
    
    // Create new content
    const newContent = createEmailContent(emailData, newIndex, emails.length);
    
    // Create motion div for new content
    const motionDiv = document.createElement('div');
    motionDiv.className = 'absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out';
    motionDiv.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;
    motionDiv.innerHTML = newContent;

    // Add new content to container
    container.appendChild(motionDiv);

    // Trigger reflow
    motionDiv.offsetHeight;

    // Animate both cards
    const currentContent = container.children[0];
    if (currentContent) {
        currentContent.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`;
    }
    motionDiv.style.transform = 'translateX(0)';

    // Remove old content after animation
    setTimeout(() => {
        if (currentContent) {
            currentContent.remove();
        }
    }, 300);

    // Update current index
    currentEmailIndex = newIndex;
}

// Initialize first email content
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('emailDetailsContainer');
    if (container) {
        container.style.position = 'relative';
        container.style.overflow = 'hidden';
        const firstEmailData = emailsPerStep['email1'][0];
        container.innerHTML = createEmailContent(firstEmailData, 0, emailsPerStep['email1'].length);
        lucide.createIcons();
    }
});

// Notice Step Selection
function selectStep(element, stepId) {
    console.log('selectStep called with:', element, stepId);
    
    // Remove selected class from all steps in the same expanded row
    const expandedRow = element.closest('.expanded-row');
    if (expandedRow) {
        expandedRow.querySelectorAll('.selected-step').forEach(step => {
            step.classList.remove('selected-step');
        });
    }
    
    // Add selected class to clicked step
    element.classList.add('selected-step');
    
    // Update the step details content based on the selected step
    updateStepDetails(stepId);
    
    return false; // Prevent any further event propagation
}

function updateStepDetails(stepId) {
    // Find the expanded row containing the clicked step
    const expandedRow = document.querySelector('.expanded-row:not(.hidden)');
    if (!expandedRow) return;
    
    // Hide all step detail panels in this expanded row
    expandedRow.querySelectorAll('.step-details').forEach(panel => {
        panel.classList.add('hidden');
    });
    
    // Show the selected step detail panel
    const selectedPanel = expandedRow.querySelector(`#${stepId}`);
    if (selectedPanel) {
        selectedPanel.classList.remove('hidden');
    }
}

function getStepData(stepId) {
    // Sample data structure for different steps
    const stepData = {
        email1: {
            title: 'Email',
            icon: 'mail',
            iconColor: 'text-blue-600',
            status: 'Confirmed',
            statusClass: 'bg-green-100 text-green-800',
            totalSteps: 2,
            address: 'john.smith@example.com',
            sentDate: 'May 18, 2024 10:07 AM CST',
            timeline: [
                { status: 'Sent', icon: 'send', date: 'May 18, 2024 10:07 AM CST' },
                { status: 'Delivered', icon: 'check', date: 'May 18, 2024 10:15 AM CST' },
                { status: 'Confirmed', icon: 'check-circle', date: 'May 18, 2024 11:30 AM CST' }
            ]
        },
        email2: {
            title: 'Email Reminder',
            icon: 'mail',
            iconColor: 'text-blue-600',
            status: 'Confirmed',
            statusClass: 'bg-green-100 text-green-800',
            totalSteps: 2,
            address: 'john.smith@example.com',
            sentDate: 'May 20, 2024 10:07 AM CST',
            timeline: [
                { status: 'Sent', icon: 'send', date: 'May 20, 2024 10:07 AM CST' },
                { status: 'Delivered', icon: 'check', date: 'May 20, 2024 10:15 AM CST' },
                { status: 'Confirmed', icon: 'check-circle', date: 'May 20, 2024 11:30 AM CST' }
            ]
        },
        sms: {
            title: 'SMS',
            icon: 'message-circle',
            iconColor: 'text-red-600',
            status: 'Undeliverable',
            statusClass: 'bg-red-100 text-red-800',
            totalSteps: 1,
            address: '+1 (555) 123-4567',
            sentDate: 'May 22, 2024 10:07 AM CST',
            timeline: [
                { status: 'Sent', icon: 'send', date: 'May 22, 2024 10:07 AM CST' },
                { status: 'Failed', icon: 'x-circle', date: 'May 22, 2024 10:08 AM CST' }
            ]
        },
        mail: {
            title: 'First-Class Mail',
            icon: 'mail',
            iconColor: 'text-blue-600',
            status: 'Pending',
            statusClass: 'bg-yellow-100 text-yellow-800',
            totalSteps: 1,
            address: '123 Main St, Anytown, USA 12345',
            sentDate: 'May 24, 2024 10:07 AM CST',
            timeline: [
                { status: 'Sent', icon: 'send', date: 'May 24, 2024 10:07 AM CST' },
                { status: 'In Transit', icon: 'truck', date: 'May 24, 2024 10:30 AM CST' }
            ]
        }
    };

    return stepData[stepId];
}
