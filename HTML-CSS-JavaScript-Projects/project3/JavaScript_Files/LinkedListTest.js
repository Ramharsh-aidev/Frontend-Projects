    const questions = [
        {
            question: "What is the time complexity for inserting a node at the beginning of a singly linked list?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            answer: "O(1)"
        },
        {
            question: "Which of the following is a valid scenario for choosing a linked list over an array?",
            options: ["Fast random access to elements", "Frequent insertions and deletions", "Fixed size known in advance", "When memory overhead is minimal"],
            answer: ["Frequent insertions and deletions", "When memory overhead is minimal"]
        },
        {
            question: "Which of the following statements about a singly linked list are true? (Choose 2 options)",
            options: ["Each node contains two pointers", "The last node’s next pointer is set to NULL.", "Linked lists allow random access to elements.", "Traversing a linked list takes O(n) time"],
            answer: ["The last node’s next pointer is set to NULL.", "Traversing a linked list takes O(n) time"]
        },
        {
            question: "What will happen if you try to access the next pointer of the last node in a singly linked list?",
            options: ["The program will crash.", "You will get a segmentation fault.", "It will return NULL.", "It will print garbage values."],
            answer: "It will return NULL."
        },
        {
            question: "You have a circular linked list where the last node points to the head. What happens if you try to traverse the list using the same logic as for a singly linked list?",
            options: ["The list will be traversed successfully.", "The program will enter an infinite loop.", "The program will crash.", "The traversal will stop at the last node."],
            answer: "The program will enter an infinite loop."
        },
        {
            question: "Which of the following operations can be done in O(1) time in a linked list?",
            options: ["Insertion at the beginning", "Insertion at the end", "Deletion of a node", "Traversal of the list"],
            answer: ["Insertion at the beginning", "Traversal of the list"]
        },
        {
            question: "What is a common disadvantage of linked lists compared to arrays?",
            options: ["Dynamic size", "Memory overhead due to pointers", "F aster access to elements", "Easier to implement"],
            answer: "Memory overhead due to pointers"
        },
        {
            question: "In which scenario would you prefer a linked list over an array?",
            options: ["When you need fast access by index", "When the number of elements can change", "When you need a fixed size", "When memory usage must be minimized"],
            answer: "When the number of elements can change"
        },
        {
            question: "What is a key feature of a circular linked list?",
            options: ["No head node", "The last node points to the head", "Each node has two pointers", "Random access is possible"],
            answer: "The last node points to the head"
        },
        {
            question: "Which of the following operations is not efficient in a singly linked list?",
            options: ["Insertion at the head", "Insertion at the tail", "Deletion of a node", "Access by index"],
            answer: "Access by index"
        },
        {
            question: "What will happen if you try to remove a node from an empty linked list?",
            options: ["Nothing happens", "An error occurs", "The program crashes", "Nothing will change"],
            answer: "An error occurs"
        },
        {
            question: "In a doubly linked list, what can be done in O(1) time?",
            options: ["Insertion at the head", "Traversal", "Searching for an element", "Deletion of the tail"],
            answer: "Insertion at the head"
        },
        {
            question: "Which of the following is true about linked lists?",
            options: ["They allow dynamic memory allocation.", "They use contiguous memory locations.", "They are always faster than arrays.", "They are simpler to implement than arrays."],
            answer: "They allow dynamic memory allocation."
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
                if (Array.isArray(answer)) {
                    if (answer.includes(question.options[parseInt(selectedAnswer) - 1])) {
                        score++;
                        document.querySelectorAll(`#q${i + 1}-option${selectedAnswer} ~ label`).forEach(label => label.classList.add("correct"));
                    } else {
                        document.querySelectorAll(`#q${i + 1}-option${selectedAnswer} ~ label`).forEach(label => label.classList.add("incorrect"));
                    }
                } else if (question.options[parseInt(selectedAnswer) - 1] === answer) {
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
