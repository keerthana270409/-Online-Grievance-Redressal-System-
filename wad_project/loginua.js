document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const errorMessage = document.getElementById("errorMessage");

    // Dummy credentials
    const credentials = {
        user: { username: "user1", password: "user123" },
        admin: { username: "admin1", password: "admin123" }
    };

    if (
        credentials[role] &&
        credentials[role].username === username &&
        credentials[role].password === password
    ) {
        // Redirect to respective dashboard
        if (role === "user") {
            window.location.href = "user-dashboard.html";
        } else if (role === "admin") {
            window.location.href = "admin-dashboard.html";
        }
    } else {
        errorMessage.textContent = "Invalid username, password, or role.";
    }
});
