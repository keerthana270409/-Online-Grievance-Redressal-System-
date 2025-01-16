// Logout function for User
function logout() {
    // Clear user session data (like 'userLoggedIn') when logging out
    sessionStorage.removeItem('userLoggedIn');
    window.location.href = "login.html";  // Redirect to login page
}
