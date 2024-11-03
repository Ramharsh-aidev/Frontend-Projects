    const questions = [
        {
            question: "What is a hash table primarily used for?",
            options: ["Storing data in sorted order", "Associating keys with values for quick access", "Storing data in a linear format", "Implementing a stack"],
            answer: "Associating keys with values for quick access"
        },
        {
            question: "What is linear probing in hash tables?",
            options: ["A method for chaining elements", "A technique for resolving collisions", "A sorting algorithm", "A method for data retrieval"],
            answer: "A technique for resolving collisions"
        },
        {
            question: "What happens when a collision occurs in a hash table using linear probing?",
            options: ["The program stops", "The new element is discarded", "The element is placed in the next available slot", "The hash table is resized"],
            answer: "The element is placed in the next available slot"
        },
        {
            question: "Given a hash table of size 10, what is the maximum number of items that can be stored before resizing is necessary using linear probing?",
            options: ["5", "10", "9", "8"],
            answer: "9"
        },
        {
            question: "If a hash function returns an index of 3 for an item, but that index is already occupied, where will the item be placed in linear probing?",
            options: ["Index 0", "Index 2", "Index 4", "Index 5"],
            answer: "Index 4"
        },
        {
            question: "What is the time complexity of searching for an element in a hash table using linear probing in the worst case?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            answer: "O(n)"
        },
        {
            question: "What is the primary disadvantage of linear probing?",
            options: ["It requires additional memory", "It can lead to clustering", "It is slower than other probing methods", "It cannot handle deletions"],
            answer: "It can lead to clustering"
        },
        {
            question: "In a hash table with linear probing, what happens when an item is deleted?",
            options: ["The index is left empty", "The item is permanently removed, which may affect future searches", "The item is marked as deleted, and its index is reused", "The hash table must be rehashed"],
            answer: "The item is marked as deleted, and its index is reused"
        },
        {
            question: "Which of the following is a good hash function property for a hash table?",
            options: ["It always returns the same index for the same key", "It spreads keys uniformly across the table", "It minimizes collisions at all costs", "It is computationally expensive"],
            answer: "It spreads keys uniformly across the table"
        },
        {
            question: "When should you consider resizing a hash table?",
            options: ["When the load factor exceeds a certain threshold", "When the table is completely filled", "When the hash function becomes inefficient", "When the table size is smaller than a predefined limit"],
            answer: "When the load factor exceeds a certain threshold"
        },
        {
            question: "What is the load factor of a hash table?",
            options: ["The ratio of the number of elements to the table size", "The number of collisions in the table", "The size of the table", "The efficiency of the hash function"],
            answer: "The ratio of the number of elements to the table size"
        },
        {
            question: "Which probing method can be used as an alternative to linear probing?",
            options: ["Quadratic probing", "Double hashing", "Chaining", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "In linear probing, if the initial index calculated by the hash function is occupied, how is the next index calculated?",
            options: ["By hashing the key again", "By moving to the next sequential index", "By multiplying the index by a prime number", "By using a binary search"],
            answer: "By moving to the next sequential index"
        },
        {
            question: "What will happen if you insert an element into a hash table with linear probing and the load factor exceeds 1?",
            options: ["The insertion will fail", "The hash table will resize", "The element will overwrite an existing one", "The hash table will become slower"],
            answer: "The hash table will resize"
        },
        {
            question: "How can you improve the performance of a hash table using linear probing?",
            options: ["Use a better hash function", "Increase the size of the hash table", "Use a lower load factor", "All of the above"],
            answer: "All of the above"
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