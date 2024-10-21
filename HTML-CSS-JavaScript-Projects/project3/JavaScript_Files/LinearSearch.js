document.getElementById('startButton').addEventListener('click', function() {
    const arrayInput = document.getElementById('arrayInput').value;
    const searchInput = document.getElementById('searchInput').value;
    const arrayContainer = document.getElementById('arrayContainer');
    const messageContainer = document.getElementById('message');

    arrayContainer.innerHTML = '';
    messageContainer.textContent = '';

    const array = arrayInput.split(',').map(Number);
    const searchElement = Number(searchInput);

    if (array.length < 3 || array.length > 10 || array.some(isNaN)) {
        alert('Please enter between 3 to 10 valid numbers.');
        return;
    }

    array.forEach(num => {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = num;
        arrayContainer.appendChild(box);
    });

    linearSearch(array, searchElement);
});

function linearSearch(array, target) {
    const boxes = document.querySelectorAll('.box');
    
    function search(index) {
        if (index >= array.length) {
            displayMessage(`Element ${target} not found in the array.`);
            return;
        }

        setTimeout(() => {
            boxes.forEach(b => b.classList.remove('highlight'));
            boxes[index].classList.add('highlight');

            if (array[index] === target) {
                boxes[index].classList.add('found');
                displayMessage(`Element ${target} found at index ${index}!`);
            } else {
                // Continue searching
                search(index + 1);
            }
        }, index * 1000);
    }

    search(0); // Start the search at index 0
}

function displayMessage(message) {
    const messageContainer = document.getElementById('message');
    messageContainer.textContent = message;
}
