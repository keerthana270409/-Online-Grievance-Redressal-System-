// Function to handle logout
function logout() {
    // Clear any session data (for example, user role or token) if applicable
    sessionStorage.removeItem('userLoggedIn'); // Removes the login state
    window.location.href = "login.html";  // Redirect to login page
}

// Function to resolve a grievance
function resolveGrievance(grievanceId) {
    alert('Grievance ' + grievanceId + ' has been resolved.');
    // After resolving, we can update the UI or send a request to the backend to update the grievance status
    // For now, we just add a new "Resolved" status to the list
    document.getElementById('adminGrievanceList').innerHTML += `<li>Grievance ${grievanceId}: Resolved</li>`;
}
