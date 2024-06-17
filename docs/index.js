const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn'); 

let isExpanded = false;

// Function to expand sidebar
function expandSidebar() {
    sidebar.style.width = '260px';
    sidebar.querySelector('.logo').style.opacity = '1';
    sidebar.querySelectorAll('.link_name').forEach((link, index) => {
        link.style.opacity = '1';
        link.style.pointerEvents = 'auto';
        link.style.transitionDelay = `calc(.1s * ${index + 1})`;
    });
    toggleBtn.style.left = '90%';
    isExpanded = true;
}

// Function to collapse sidebar
function collapseSidebar() {
    sidebar.style.width = '80px';
    sidebar.querySelector('.logo').style.opacity = '0';
    sidebar.querySelectorAll('.link_name').forEach(link => {
        link.style.opacity = '0';
        link.style.pointerEvents = 'none';
        link.style.transitionDelay = '0s'; // Reset transition delay
    });
    toggleBtn.style.left = '50%';
    isExpanded = false;
}

// Event listener for toggle button click
toggleBtn.addEventListener('click', () => {
    if (isExpanded) {
        collapseSidebar();
    } else {
        expandSidebar();
    }
});

// Detect if the device is mobile
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Add hover effect for desktop devices only
if (!isMobileDevice()) {
    sidebar.addEventListener('mouseenter', expandSidebar);
    sidebar.addEventListener('mouseleave', collapseSidebar);
}
