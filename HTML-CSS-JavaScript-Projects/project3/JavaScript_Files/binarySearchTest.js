
    const questions = [
        {
            question: "What is the primary condition for applying binary search on an array?",
            options: ["The array must be sorted.", "The array must contain unique elements.", "The array must be of fixed size.", "The array must be multidimensional."],
            answer: "The array must be sorted."
        },
        {
            question: "What is the time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: "O(log n)"
        },
        {
            question: "In a binary search algorithm, if the target value is not found, what does it typically return?",
            options: ["The index of the closest value", "-1", "0", "The middle index of the last checked range"],
            answer: "-1"
        },
        {
            question: "Given a sorted array [2, 4, 6, 8, 10], what is the result of searching for the value 6 using binary search?",
            options: ["0", "1", "2", "3"],
            answer: "2"
        },
        {
            question: "What is the first step of the binary search algorithm?",
            options: ["Find the median of the array.", "Initialize the search boundaries.", "Check if the array is sorted.", "Return the first element."],
            answer: "Initialize the search boundaries."
        },
        {
            question: "Which of the following is true about the binary search algorithm?",
            options: ["It can be used on unsorted arrays.", "It always finds the smallest element.", "It divides the search space in half with each iteration.", "It requires more space than linear search."],
            answer: "It divides the search space in half with each iteration."
        },
        {
            question: "In binary search, if the target value is less than the middle element, what should be the next search range?",
            options: ["The entire array", "The left half of the array", "The right half of the array", "The middle element only"],
            answer: "The left half of the array"
        },
        {
            question: "What is the maximum number of comparisons needed to find a value in a sorted array of size n using binary search?",
            options: ["n", "n/2", "log n", "n^2"],
            answer: "log n"
        },
        {
            question: "Which of the following scenarios would NOT be suitable for binary search?",
            options: ["Searching for a value in a sorted array", "Finding the square root of a number", "Finding an element in an unsorted list", "Finding the position of a specific character in a string"],
            answer: "Finding an element in an unsorted list"
        },
        {
            question: "What happens if the target value is equal to the middle element during a binary search?",
            options: ["The search continues in the left half.", "The search continues in the right half.", "The search terminates and returns the index of the middle element.", "An error is raised."],
            answer: "The search terminates and returns the index of the middle element."
        },
        {
            question: "When implementing binary search iteratively, what is typically updated after each comparison?",
            options: ["The entire array", "The middle index", "The search boundaries (low and high)", "The target value"],
            answer: "The search boundaries (low and high)"
        },
        {
            question: "How would you modify binary search to find the first occurrence of a duplicate element?",
            options: ["By using a stack to track indices", "By updating indices when a new max is found", "By recursively checking all subarrays", "By iterating twice over the array"],
            answer: "By updating indices when a new max is found"
        },
        {
            question: "What is a common application of binary search in real-world problems?",
            options: ["Finding the minimum number in a list", "Searching in databases", "Sorting an array", "Performing graph traversal"],
            answer: "Searching in databases"
        },
        {
            question: "In which scenario would you prefer binary search over linear search?",
            options: ["When the data is unordered", "When you need to find multiple occurrences of a value", "When the data is sorted and you need to minimize the number of comparisons", "When the data is small"],
            answer: "When the data is sorted and you need to minimize the number of comparisons."
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
