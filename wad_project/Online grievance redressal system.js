document.addEventListener("DOMContentLoaded", () => {
    function setupFormValidation() {
        const form = document.querySelector("#signupForm");
        const username = document.querySelector("#username");
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirmpassword");
        const roleInputs = document.querySelectorAll('input[name="role"]');

        form.addEventListener("submit", handleFormSubmit);

        function handleFormSubmit(event) {
            event.preventDefault();
            clearErrors();

            const errors = validateForm();
            if (errors.length > 0) {
                alert(errors.join("\n"));
            } else {
                alert(`Sign-up successful!\nUsername: ${username.value}\nRole: ${getSelectedRole()}`);
                form.reset();
            }
        }

        function validateForm() {
            const errors = [];

            if (!username.value.trim()) {
                errors.push("Username is required.");
                highlightError(username);
            }

            if (!password.value) {
                errors.push("Password is required.");
                highlightError(password);
            }

            if (!confirmPassword.value) {
                errors.push("Confirm Password is required.");
                highlightError(confirmPassword);
            }

            if (password.value !== confirmPassword.value) {
                errors.push("Passwords do not match.");
                highlightError(password);
                highlightError(confirmPassword);
            }

            const roleSelected = Array.from(roleInputs).some((input) => input.checked);
            if (!roleSelected) {
                errors.push("Please select a role.");
            }

            return errors;
        }

        function clearErrors() {
            document.querySelectorAll("input").forEach((input) => {
                input.style.borderColor = ""; 
            });
        }

        function highlightError(input) {
            input.style.borderColor = "red";
        }

        function getSelectedRole() {
            const selected = Array.from(roleInputs).find((input) => input.checked);
            return selected ? selected.value : null;
        }
    }

    // Initialize the form validation setup
    setupFormValidation();
});
