let availableKeywords = [
    "LinkedList",
    "Queue",
    "Sorting",
    "Hashing",
    "Linear Search",
    "Searching",
    "Tree",
];

const feedbackForm = document.getElementById('feedback-form');
const existingFeedback = document.getElementById('existing-feedback');
const feedbackResponse = document.getElementById('feedback-response');
const addFeedbackBtn = document.getElementById('add-feedback-btn');
const clearFeedbackBtn = document.getElementById('clear-feedback-btn');

// New default feedback entries
const newDefaultFeedbacks = [
    { name: "Prathamesh Chikkali", message: "Great animations! They really bring the concepts to life and help me understand complex topics in a fun and engaging way. I always look forward to watching the videos!" },
    { name: "Ramharsh Dandekar", message: "The explanations are clear and concise, which makes it easy to follow along. I especially appreciate the visual aids that accompany the lessons—they make everything much easier to grasp." },
    { name: "Shantanu Anantawar", message: "This site has transformed my learning experience. The interactive elements keep me engaged, and I can learn at my own pace. I highly recommend it to anyone looking to improve their skills!" },
    { name: "Pranil Bankar", message: "I love the practice problems! They are thoughtfully designed to reinforce what I've learned in the lessons. Completing them gives me a real sense of accomplishment." },
    { name: "Shubham Fulwani", message: "I love the practice problems! They are thoughtfully designed to reinforce what I've learned in the lessons. Completing them gives me a real sense of accomplishment." }
];

// Load existing feedback from localStorage or use new defaults
function loadFeedback() {
    const userFeedbacks = JSON.parse(localStorage.getItem('userFeedbacks')) || [];
    existingFeedback.innerHTML = ''; // Clear existing feedback

    // Display default feedbacks
    newDefaultFeedbacks.forEach(({ name, message }) => {
        addFeedbackCard(name, "default@example.com", message); // Use a placeholder for email
    });

    // Display user feedbacks
    userFeedbacks.forEach(({ name, email, message }, index) => {
        addFeedbackCard(name, email, message, index + newDefaultFeedbacks.length); // Adjust index for user feedback
    });
}

// Function to add feedback card to the DOM
function addFeedbackCard(name, email, message, index) {
    const newFeedback = document.createElement('div');
    newFeedback.className = 'feedback-card';
    newFeedback.innerHTML = `
        <strong>${name}</strong>
        <p>${message}</p>
        ${index >= newDefaultFeedbacks.length ? '<i class="fas fa-trash delete-icon" data-index="' + (index - newDefaultFeedbacks.length) + '" title="Delete Feedback"></i>' : ''}
    `;
    existingFeedback.appendChild(newFeedback);

    // Add event listener for the delete icon, only if it's user feedback
    if (index >= newDefaultFeedbacks.length) {
        const deleteIcon = newFeedback.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', function() {
            const emailInput = prompt("Please enter your email to confirm deletion:");
            if (emailInput && emailInput.trim().toLowerCase() === email.toLowerCase()) {
                deleteFeedback(index - newDefaultFeedbacks.length);
            } else {
                feedbackResponse.innerText = 'Email does not match. Feedback not deleted.';
            }
        });
    }
}

function deleteFeedback(index) {
    // Load existing user feedback from localStorage
    const userFeedbacks = JSON.parse(localStorage.getItem('userFeedbacks')) || [];

    // Remove the feedback at the specified index
    userFeedbacks.splice(index, 1);

    localStorage.setItem('userFeedbacks', JSON.stringify(userFeedbacks));

    loadFeedback();

    feedbackResponse.innerText = 'Feedback deleted successfully.';
}

// Add event listener to the button
addFeedbackBtn.addEventListener('click', function() {
    feedbackForm.style.display = 'block';
    this.style.display = 'none';
});

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        // Load existing user feedback from localStorage
        const userFeedbacks = JSON.parse(localStorage.getItem('userFeedbacks')) || [];

        // Replace or add new feedback
        if (userFeedbacks.length < 6) {
            userFeedbacks.push({ name, email, message });
        } else {
            userFeedbacks.shift(); // Remove the oldest feedback
            userFeedbacks.push({ name, email, message });
        }

        // Save feedback back to localStorage
        localStorage.setItem('userFeedbacks', JSON.stringify(userFeedbacks));

        loadFeedback();

        feedbackResponse.innerText = 'Thank you for your feedback, ' + name + '!';

        // Reset form and hide it
        this.reset();
        this.style.display = 'none'; 
        addFeedbackBtn.style.display = 'block';
    } else {
        feedbackResponse.innerText = 'Please fill out all fields.';
    }
});

clearFeedbackBtn.addEventListener('click', function() {
    const confirmation = confirm("Are you sure you want to clear all feedback?");
    if (confirmation) {
        localStorage.clear(); // Clear all items from local storage
        loadFeedback(); // Load new default feedbacks
        feedbackResponse.innerText = 'All feedback has been cleared and reset to defaults.';
    }
});

// Load feedback when the page is loaded
window.onload = loadFeedback;
