const questions = [
    {
        question: "What is Kadane's Algorithm primarily used for?",
        options: ["Finding the maximum element in an array", "Finding the maximum subarray sum", "Sorting an array", "Finding the minimum element in an array"],
        answer: "Finding the maximum subarray sum"
    },
    {
        question: "In which of the following scenarios does Kadane's Algorithm operate optimally?",
        options: ["When all elements are negative", "When all elements are positive", "When the array contains both positive and negative numbers", "When the array is sorted"],
        answer: "When the array contains both positive and negative numbers"
    },
    {
        question: "What is the time complexity of Kadane's Algorithm?",
        options: ["O(n^2)", "O(n log n)", "O(n)", "O(1)"],
        answer: "O(n)"
    },
    {
        question: "Which of the following best describes the core idea behind Kadane's Algorithm?",
        options: ["Divide and conquer", "Dynamic programming", "Greedy approach", "Backtracking"],
        answer: "Dynamic programming"
    },
    {
        question: "Given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], what is the maximum subarray sum using Kadane's Algorithm?",
        options: ["6", "4", "7", "5"],
        answer: "6"
    },
    {
        question: "What do you initialize the maximum sum (max_sum) to when implementing Kadane's Algorithm?",
        options: ["The first element of the array", "Zero", "Negative infinity", "Positive infinity"],
        answer: "Negative infinity"
    },
    {
        question: "In the context of Kadane's Algorithm, what does the variable current_sum represent?",
        options: ["The maximum sum found so far", "The sum of the current subarray being considered", "The total sum of the array", "The sum of the last subarray"],
        answer: "The sum of the current subarray being considered"
    },
    {
        question: "If the input array consists entirely of negative numbers, what will Kadane's Algorithm return?",
        options: ["The largest negative number", "Zero", "The sum of all negative numbers", "An error"],
        answer: "The largest negative number"
    },
    {
        question: "How does Kadane's Algorithm handle negative numbers in the array?",
        options: ["It ignores them completely.", "It resets the current sum to zero if it becomes negative.", "It always adds them to the maximum sum.", "It skips over them without checking."],
        answer: "It resets the current sum to zero if it becomes negative."
    },
    {
        question: "Which of the following statements is true about Kadane's Algorithm?",
        options: ["It can only be applied to one-dimensional arrays.", "It finds the maximum sum of non-contiguous subarrays.", "It is not suitable for large arrays.", "It can be modified to find the minimum subarray sum."],
        answer: "It can be modified to find the minimum subarray sum."
    },
    {
        question: "What will be the maximum subarray sum for the array [1, 2, 3, -2, 5] using Kadane's Algorithm?",
        options: ["10", "8", "6", "7"],
        answer: "10"
    },
    {
        question: "Which of the following is a necessary step in Kadane's Algorithm?",
        options: ["Keeping track of indices", "Comparing current sums with maximum sums", "Sorting the array", "Using recursion"],
        answer: "Comparing current sums with maximum sums"
    },
    {
        question: "In a modification of Kadane's Algorithm, how can you find the starting and ending indices of the maximum subarray?",
        options: ["By using a stack to track indices", "By updating indices when a new max is found", "By recursively checking all subarrays", "By iterating twice over the array"],
        answer: "By updating indices when a new max is found"
    },
    {
        question: "If you have an array of size n and apply Kadane's Algorithm, how many iterations will it take to find the maximum subarray sum?",
        options: ["n/2", "n", "log(n)", "n^2"],
        answer: "n"
    },
    {
        question: "Which of the following scenarios can be optimized using Kadane's Algorithm?",
        options: ["Finding the longest increasing subsequence", "Finding the maximum product subarray", "Finding the maximum sum of a contiguous subarray", "Finding the smallest number in an array"],
        answer: "Finding the maximum sum of a contiguous subarray"
    }
];

let currentQuestions = [];
let score = 0;

function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

function renderQuestions() {
const questionList = document.getElementById("questionList");
questionList.innerHTML = "";

for (let i = 0; i < 5; i++) {
    const question = currentQuestions[i];
    const questionHTML = `
        <li class="list-group-item">
            ${question.question}
            <div class="container"> 
                ${question.options.map((option, index) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="q${i + 1}" id="q${i + 1}-option${index + 1}">
                        <label class="form-check-label" for="q${i + 1}-option${index + 1}">${option}</label>
                    </div>
                `).join("")}
            </div>
        </li>
        <hr>
    `;
    questionList.innerHTML += questionHTML;
}
}

function reattempt() {
currentQuestions = shuffle([...questions]).slice(0, 5);
renderQuestions();
score = 0;
document.getElementById("scoreDisplay").innerText = "";
}

reattempt();

document.getElementById("submitButton").addEventListener("click", function() {
    for (let i = 0; i < 5; i++) {
        const question = currentQuestions[i];
        const answer = question.answer;
        const selectedOption = document.querySelector(`input[name="q${i + 1}"]:checked`);
        if (selectedOption) {
            const selectedAnswer = selectedOption.id.split("-")[1].slice(6);
            if (question.options[parseInt(selectedAnswer) - 1] === answer) {
                score++;
                document.querySelectorAll(`#q${i + 1}-option${selectedAnswer} ~ label`).forEach(label => label.classList.add("correct"));
            } else {
                document.querySelectorAll(`#q${i + 1}-option${selectedAnswer} ~ label`).forEach(label => label.classList.add("incorrect"));
            }
        }
    }

    document.getElementById("scoreDisplay").innerText = `Your score: ${score} out of 5`;
});

document.getElementById("reattemptButton").addEventListener("click", reattempt);
