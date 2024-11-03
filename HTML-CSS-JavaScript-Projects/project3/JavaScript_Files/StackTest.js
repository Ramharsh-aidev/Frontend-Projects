
    const questions = [
        {
            question: "What is the time complexity for pushing an element onto a stack?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            answer: "O(1)"
        },
        {
            question: "Which of the following operations is not typically associated with a stack?",
            options: ["Push", "Pop", "Peek", "Insert"],
            answer: "Insert"
        },
        {
            question: "What will happen if you try to pop an element from an empty stack?",
            options: ["Nothing happens", "An error occurs", "The program crashes", "It returns NULL"],
            answer: "An error occurs"
        },
        {
            question: "In which scenario would you prefer using a stack?",
            options: ["When you need fast access by index", "When you need to reverse items", "When elements need to be sorted", "When memory usage must be minimized"],
            answer: "When you need to reverse items"
        },
        {
            question: "Which of the following is a key feature of a stack?",
            options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Random access", "Dynamic size"],
            answer: "LIFO (Last In First Out)"
        },
        {
            question: "What is the main disadvantage of using a stack?",
            options: ["Limited size", "Memory overhead", "Complex implementation", "Slow access time"],
            answer: "Limited size"
        },
        {
            question: "What is a common application of stacks?",
            options: ["Undo mechanisms in text editors", "Storing large datasets", "Searching algorithms", "Sorting algorithms"],
            answer: "Undo mechanisms in text editors"
        },
        {
            question: "Which of the following data structures can be used to implement a stack?",
            options: ["Array", "Linked List", "Both Array and Linked List", "None of the above"],
            answer: "Both Array and Linked List"
        },
        {
            question: "What does the term 'stack overflow' refer to?",
            options: ["A stack that has too many elements", "A stack that has been popped too many times", "Exceeding the stack's memory limit", "None of the above"],
            answer: "Exceeding the stack's memory limit"
        },
        {
            question: "In a stack, what is the operation called that retrieves the top element without removing it?",
            options: ["Push", "Pop", "Peek", "Top"],
            answer: "Peek"
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
