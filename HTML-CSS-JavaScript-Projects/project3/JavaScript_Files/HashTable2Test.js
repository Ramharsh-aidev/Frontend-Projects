    const questions = [
        {
            question: "What is quadratic probing in the context of hash tables?",
            options: ["A method for chaining elements", "A technique for resolving collisions", "A method to sort elements", "A method for retrieving elements"],
            answer: "A technique for resolving collisions"
        },
        {
            question: "How does quadratic probing determine the next index when a collision occurs?",
            options: ["By adding 1 to the current index", "By adding the square of the attempt number to the original hash index", "By multiplying the current index by a prime number", "By randomly selecting any available index"],
            answer: "By adding the square of the attempt number to the original hash index"
        },
        {
            question: "Given a hash table of size 11, if a collision occurs at index 3 on the first insertion, what will be the next index checked using quadratic probing?",
            options: ["4", "5", "6", "7"],
            answer: "4"
        },
        {
            question: "What is a potential disadvantage of using quadratic probing?",
            options: ["It requires more memory than linear probing", "It can lead to secondary clustering", "It is slower than linear probing", "It cannot be implemented with open addressing"],
            answer: "It can lead to secondary clustering"
        },
        {
            question: "In quadratic probing, if the hash function gives an index of 2 and that index is occupied, which indices will be checked in subsequent attempts?",
            options: ["3, 4, 5", "3, 4, 6", "3, 5, 9", "3, 6, 7"],
            answer: "3, 5, 9"
        },
        {
            question: "What is the average time complexity for searching in a hash table with quadratic probing under normal load conditions?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            answer: "O(1)"
        },
        {
            question: "Which of the following scenarios can be optimized using quadratic probing?",
            options: ["Finding the maximum element in a list", "Storing non-unique keys", "Handling collisions in hash tables", "Implementing a stack"],
            answer: "Handling collisions in hash tables"
        },
        {
            question: "When resizing a hash table that uses quadratic probing, what must you consider?",
            options: ["The new size must be a prime number", "The original order of elements is maintained", "The original hash function will still be valid", "The resizing should double the capacity"],
            answer: "The new size must be a prime number"
        },
        {
            question: "If you have a load factor of 0.7 in a hash table with quadratic probing, when should you consider rehashing?",
            options: ["When the load factor reaches 1", "When the load factor reaches 0.5", "When the load factor reaches 0.9", "When the load factor reaches 0.7"],
            answer: "When the load factor reaches 0.9"
        },
        {
            question: "What is the load factor of a hash table?",
            options: ["The ratio of the number of elements to the table size", "The number of collisions in the table", "The size of the table", "The efficiency of the hash function"],
            answer: "The ratio of the number of elements to the table size"
        },
        {
            question: "In a hash table using quadratic probing, how are deleted entries typically handled?",
            options: ["They are removed completely, leaving gaps", "They are marked as deleted to allow future searches to continue", "They are always kept until the table is resized", "They must be rehashed immediately"],
            answer: "They are marked as deleted to allow future searches to continue"
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
