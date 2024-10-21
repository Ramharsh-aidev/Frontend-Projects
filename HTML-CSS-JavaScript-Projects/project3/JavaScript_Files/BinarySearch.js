let array = [];
let target = null;

function setupArray() {
    const input = document.getElementById('arrayInput').value;
    array = input.split(',').map(num => parseInt(num.trim())).sort((a, b) => a - b);
    if (array.length < 3) {
        alert("Please enter at least 3 elements.");
        return;
    }
    displayArray();
}

function displayArray() {
    const arrayDisplay = document.getElementById('arrayDisplay');
    arrayDisplay.innerHTML = '';
    array.forEach(num => {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = num;
        arrayDisplay.appendChild(box);
    });
}

async function startBinarySearch() {
    const targetInput = document.getElementById('targetInput').value;
    target = parseInt(targetInput);
    const message = document.getElementById('message');
    message.textContent = '';

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        highlightMid(mid);
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // Pause for highlight

        if (array[mid] === target) {
            message.textContent = `Found ${target} at index ${mid}`;
            highlightFound(mid);
            return;
        } else if (array[mid] < target) {
            highlightLeft(mid + 1, right); // Highlight left side
            left = mid + 1; // Search right half
        } else {
            highlightRight(left, mid - 1); // Highlight right side
            right = mid - 1; // Search left half
        }

        await new Promise(resolve => setTimeout(resolve, 1000)); // Pause for animation
        resetHighlight();
    }

    message.textContent = `${target} not found in the array.`;
}

function highlightMid(mid) {
    const boxes = document.querySelectorAll('.box');
    boxes[mid].classList.add('highlight');
}

function highlightFound(mid) {
    const boxes = document.querySelectorAll('.box');
    boxes[mid].classList.add('found');
}

function highlightLeft(start, end) {
    const boxes = document.querySelectorAll('.box');
    for (let i = start; i <= end; i++) { // Highlight left side (including start)
        boxes[i].classList.add('highlight-left');
    }
}

function highlightRight(start, end) {
    const boxes = document.querySelectorAll('.box');
    for (let i = start; i <= end; i++) { // Highlight right side (including end)
        boxes[i].classList.add('highlight-right');
    }
}

function resetHighlight() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('highlight', 'highlight-left', 'highlight-right');
    });
}
