// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Quiz elements
    const checkAnswerButton = document.getElementById("checkAnswer");
    const quizFeedback = document.getElementById("quizFeedback");

    // Contact form elements
    const contactForm = document.getElementById("contactForm");
    const fullName = document.getElementById("fullName");
    const emailAddress = document.getElementById("emailAddress");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");

    // Quiz logic
    checkAnswerButton.addEventListener("click", function () {
        const selectedAnswer = document.querySelector('input[name="productQuiz"]:checked');

        if (!selectedAnswer) {
            quizFeedback.textContent = "Please select an answer first.";
            quizFeedback.style.color = "#f87171";
            return;
        }

        if (selectedAnswer.value === "correct") {
            quizFeedback.textContent = "Correct! Wireless Headphones are the best choice for music on the go.";
            quizFeedback.style.color = "#22c55e";
        } else {
            quizFeedback.textContent = "Incorrect. Try again and choose the most suitable audio product.";
            quizFeedback.style.color = "#f87171";
        }
    });

    // Form validation logic
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear old messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";

        let isValid = true;

        // Name validation
        if (fullName.value.trim() === "") {
            nameError.textContent = "Full Name is required.";
            isValid = false;
        }

        // Email validation
        const emailValue = emailAddress.value.trim();
        if (emailValue === "") {
            emailError.textContent = "Email Address is required.";
            isValid = false;
        } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message validation
        if (message.value.trim() === "") {
            messageError.textContent = "Message is required.";
            isValid = false;
        }

        // Success message
        if (isValid) {
            formSuccess.textContent = "Your message has been sent successfully.";
            contactForm.reset();
        }
    });
});