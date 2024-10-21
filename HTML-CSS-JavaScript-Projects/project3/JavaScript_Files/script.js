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

// Default feedback entries
const defaultFeedbacks = [
    { name: "John Doe", email: "john@example.com", message: "Great animations! They really bring the concepts to life." },
    { name: "Jane Smith", email: "jane@example.com", message: "I love the practice problems! They reinforce what I've learned." },
    { name: "Sam Wilson", email: "sam@example.com", message: "The explanations are clear and concise, which makes it easy to follow along." },
    { name: "Emma Brown", email: "emma@example.com", message: "This site has transformed my learning experience." }
];

// Load existing feedback from localStorage
function loadFeedback() {
    const userFeedbacks = JSON.parse(localStorage.getItem('userFeedbacks')) || [];
    existingFeedback.innerHTML = ''; // Clear existing feedback

    defaultFeedbacks.forEach(({ name, email, message }) => {
        addFeedbackCard(name, email, message);
    });


    userFeedbacks.forEach(({ name, email, message }, index) => {
        addFeedbackCard(name, email, message, index + defaultFeedbacks.length); // Adjust index for user feedback
    });
}

// Function to add feedback card to the DOM
function addFeedbackCard(name, email, message, index) {
    const newFeedback = document.createElement('div');
    newFeedback.className = 'feedback-card';
    newFeedback.innerHTML = `
        <strong>${name}</strong>
        <p>${message}</p>
        ${index >= defaultFeedbacks.length ? '<i class="fas fa-trash delete-icon" data-index="' + (index - defaultFeedbacks.length) + '" title="Delete Feedback"></i>' : ''}
    `;
    existingFeedback.appendChild(newFeedback);

    // Add event listener for the delete icon, only if it's user feedback
    if (index >= defaultFeedbacks.length) {
        const deleteIcon = newFeedback.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', function() {
            const emailInput = prompt("Please enter your email to confirm deletion:");
            if (emailInput && emailInput.trim().toLowerCase() === email.toLowerCase()) {
                deleteFeedback(index - defaultFeedbacks.length);
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
            userFeedbacks.shift();
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
        loadFeedback();
        feedbackResponse.innerText = 'All feedback has been cleared.';
    }
});

// Load feedback when the page is loaded
window.onload = loadFeedback;
