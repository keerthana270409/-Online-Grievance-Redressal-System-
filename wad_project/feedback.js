function initializePage() {
    // Form Validation Setup
    function setupFormValidation() {
        const form = document.querySelector(".feedback-form");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const grievanceTypeSelect = document.getElementById("grievance-type");
        const feedbackInput = document.getElementById("feedback");

        // Form submission event
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            clearErrors();
            if (validateForm()) {
                alert(
                    `Thank you, ${nameInput.value}!\nYour feedback on "${grievanceTypeSelect.value}" has been submitted successfully.`
                );
                form.reset();
            } else {
                alert("Please correct the errors and try again.");
            }
        });

        // Validate entire form
        function validateForm() {
            let isValid = true;
            if (nameInput.value.trim() === "") {
                showError(nameInput, "Name is required.");
                isValid = false;
            }
            if (!validateEmail(emailInput.value)) {
                showError(emailInput, "Invalid email address.");
                isValid = false;
            }
            if (grievanceTypeSelect.value === "") {
                showError(grievanceTypeSelect, "Please select a grievance category.");
                isValid = false;
            }
            if (feedbackInput.value.trim().length < 10) {
                showError(feedbackInput, "Feedback must be at least 10 characters.");
                isValid = false;
            }
            return isValid;
        }

        // Email validation
        function validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email);
        }

        // Show error message
        function showError(input, message) {
            const errorElement = document.createElement("span");
            errorElement.classList.add("error");
            errorElement.textContent = message;
            input.parentElement.appendChild(errorElement);
            input.classList.add("error-border");
        }

        // Clear all previous errors
        function clearErrors() {
            document.querySelectorAll(".error").forEach(error => error.remove());
            document.querySelectorAll(".error-border").forEach(input => input.classList.remove("error-border"));
        }
    }

    // Initialize form validation
    setupFormValidation();
}

// Initialize everything when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializePage);
