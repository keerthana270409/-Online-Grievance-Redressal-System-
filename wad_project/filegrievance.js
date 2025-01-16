function initializePage() {
    // Form Validation Setup
    function setupFormValidation() {
        const form = document.querySelector("form");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const categorySelect = document.getElementById("category");
        const messageInput = document.getElementById("message");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            clearErrors();
            if (validateForm()) {
                alert("Grievance submitted successfully!");
                form.reset();
            } else {
                alert("Please correct the highlighted errors and try again.");
            }
        });

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
            if (!validatePhone(phoneInput.value)) {
                showError(phoneInput, "Invalid phone number.");
                isValid = false;
            }
            if (categorySelect.value === "") {
                showError(categorySelect, "Please select a grievance category.");
                isValid = false;
            }
            if (messageInput.value.trim().length < 10) {
                showError(messageInput, "Grievance message must be at least 10 characters.");
                isValid = false;
            }
            return isValid;
        }

        function validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email);
        }

        function validatePhone(phone) {
            const phonePattern = /^[0-9]{10}$/;
            return phonePattern.test(phone);
        }

        function showError(input, message) {
            const errorElement = document.createElement("span");
            errorElement.classList.add("error");
            errorElement.textContent = message;
            input.parentElement.appendChild(errorElement);
            input.classList.add("error-border");
        }

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
