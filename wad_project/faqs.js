function initializePage() {
    // FAQ Toggle Setup
    function setupFaqToggle() {
        const faqItems = document.querySelectorAll(".faq-item");

        faqItems.forEach(item => {
            const question = item.querySelector("h2");
            const answer = item.querySelector("p");

            // Initially hide all answers
            answer.style.display = "none";

            // Toggle visibility on question click
            question.addEventListener("click", () => {
                const isVisible = answer.style.display === "block";
                answer.style.display = isVisible ? "none" : "block";
                toggleQuestionHighlight(question, isVisible);
            });

            // Add cursor pointer to questions
            question.style.cursor = "pointer";
        });

        function toggleQuestionHighlight(question, isVisible) {
            question.style.color = isVisible ? "#2c3e50" : "#007bff";
        }
    }

    // Call the FAQ toggle function
    setupFaqToggle();
}

// Initialize everything when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializePage);
