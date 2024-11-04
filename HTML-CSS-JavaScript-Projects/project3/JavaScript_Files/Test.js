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
    },
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
    },
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
    },
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
    },
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
    },
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
