function initializePage() {
    // Form Validation Setup
    function setupFormValidation() {
        const form = document.querySelector("form");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            clearErrors();
            if (validateForm()) {
                addGrievance(nameInput.value, emailInput.value, messageInput.value);
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

    // Grievance Management
    const grievances = [];

    function addGrievance(name, email, grievance) {
        const date = new Date();
        grievances.push({ name, email, grievance, date });
        renderTable(grievances);
    }

    function renderTable(filteredGrievances) {
        const tableBody = document.querySelector("#grievance-table tbody");
        tableBody.innerHTML = '';
        filteredGrievances.forEach(({ name, email, grievance, date }) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${grievance}</td>
                <td>${date.toLocaleDateString()}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Filter Grievances
    function setupFilter() {
        const filterSelect = document.getElementById("filter");
        filterSelect.addEventListener("change", function () {
            const selectedFilter = filterSelect.value;
            const today = new Date();
            const filteredGrievances = grievances.filter(({ date }) => {
                if (selectedFilter === "weekly") {
                    const oneWeekAgo = new Date(today);
                    oneWeekAgo.setDate(today.getDate() - 7);
                    return date >= oneWeekAgo;
                } else if (selectedFilter === "monthly") {
                    return (
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear()
                    );
                } else if (selectedFilter === "yearly") {
                    return date.getFullYear() === today.getFullYear();
                } else {
                    return true;
                }
            });
            renderTable(filteredGrievances);
        });
    }

    // Initialize all features
    setupFormValidation();
    setupFilter();
}

// Initialize everything when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializePage);
