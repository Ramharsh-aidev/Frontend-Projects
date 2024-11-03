    const questions = [
        {
            question: "What is Linear Search primarily used for?",
            options: ["Finding the maximum element in an array", "Searching for a specific value in an array", "Sorting an array", "Merging two arrays"],
            answer: "Searching for a specific value in an array"
        },
        {
            question: "What is the time complexity of Linear Search in the worst case?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: "O(n)"
        },
        {
            question: "In which scenario is Linear Search most effective?",
            options: ["When the data is sorted", "When searching for an element in a large dataset", "When searching for an element in an unsorted dataset", "When the dataset is small"],
            answer: "When searching for an element in an unsorted dataset"
        },
        {
            question: "Given the array [3, 5, 2, 8, 6], what will Linear Search return when searching for the value 8?",
            options: ["0", "1", "3", "-1"],
            answer: "3"
        },
        {
            question: "What will Linear Search return if the element is not found in the array?",
            options: ["The index of the last element", "-1", "The index of the first element", "An error"],
            answer: "-1"
        },
        {
            question: "Which of the following statements about Linear Search is true?",
            options: ["It requires the array to be sorted.", "It is faster than Binary Search.", "It checks each element in the array sequentially.", "It can only search in one-dimensional arrays."],
            answer: "It checks each element in the array sequentially."
        },
        {
            question: "Which data structure is most suitable for Linear Search?",
            options: ["Linked List", "Stack", "Queue", "Array"],
            answer: "Array"
        },
        {
            question: "What is the average case time complexity of Linear Search?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            answer: "O(n)"
        },
        {
            question: "What is a disadvantage of using Linear Search?",
            options: ["It requires a sorted array.", "It has a high time complexity for large datasets.", "It can only search for unique elements.", "It does not work on arrays."],
            answer: "It has a high time complexity for large datasets."
        },
        {
            question: "In which scenario would you prefer Linear Search over Binary Search?",
            options: ["When the array is sorted", "When the array is unsorted", "When performance is critical", "When the array size is very large"],
            answer: "When the array is unsorted"
        },
        {
            question: "What is the maximum number of comparisons needed to find an element in an array of size `n` using Linear Search?",
            options: ["n/2", "n", "log(n)", "n^2"],
            answer: "n"
        },
        {
            question: "If the input array consists of identical elements, how many comparisons will Linear Search make to find one of the elements?",
            options: ["1", "n", "log(n)", "n/2"],
            answer: "n"
        },
        {
            question: "Which of the following can Linear Search be used for?",
            options: ["Finding the index of an element", "Finding the minimum or maximum element", "Counting the occurrences of an element", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "If you have an array of size n and you apply Linear Search, how many iterations will it take in the worst case?",
            options: ["n/2", "n", "log(n)", "1"],
            answer: "n"
        },
        {
            question: "Which of the following is a practical application of Linear Search?",
            options: ["Searching in databases", "Finding a specific record in an unsorted list", "Finding the shortest path in a graph", "Sorting a list of items"],
            answer: "Finding a specific record in an unsorted list"
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
