function initializePage() {
    // Smooth scrolling to sections when links are clicked
    function enableSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Confirmation alert when clicking on "File a Grievance"
    function setupGrievanceButton() {
        const grievanceButton = document.querySelector('.btn');
        if (grievanceButton) {
            grievanceButton.addEventListener('click', (e) => {
                const confirmation = confirm('Are you sure you want to file a grievance?');
                if (!confirmation) {
                    e.preventDefault();
                }
            });
        }
    }

    // Update footer year dynamically
    function updateFooterYear() {
        const footerYear = new Date().getFullYear();
        document.querySelector('footer p').innerHTML = `&copy; ${footerYear} Grievance Redressal System | All Rights Reserved`;
    }

    // Highlight active navigation links
    function highlightActiveLinks() {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    // Show a pop-up message when clicking "Contact Us"
    function setupContactPopup() {
        const contactLink = document.querySelector('a[href="con.html"]');
        if (contactLink) {
            contactLink.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Contact us at: support@grievancesystem.com');
            });
        }
    }

    // Initialize all functions
    enableSmoothScrolling();
    setupGrievanceButton();
    updateFooterYear();
    highlightActiveLinks();
    setupContactPopup();
}

// Call the function to initialize the page
initializePage();
