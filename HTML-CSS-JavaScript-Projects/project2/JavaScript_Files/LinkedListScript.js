let boxCount = 0;

function countBoxes() {
    const container = document.getElementById('container');
    const boxes = container.getElementsByClassName('box');
    const totalBoxes = boxes.length; 
    console.log(`Total boxes on screen: ${totalBoxes}`); 
    return totalBoxes; 
}

// for use of all elements 
Element.prototype.insertAfter = function(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
};


function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
}

function addBoxAtIndex() {
    const addInput = document.getElementById('addInput');
    const addIndexInput = document.getElementById('addIndexInput');
    const number = addInput.value;
    let index = parseInt(addIndexInput.value);

    if (boxCount>23) {
        alert("Limit Exceeded Can't add more Nodes");
    }
    if (number === '') {
        alert("Enter a element to add in Node");
        return;
    }
    if (index < 0 || index > 22 || index>boxCount) {
        alert("Invalid Index Added at last index by default");
    }
    if (isNaN(index) || index < 0 || index > boxCount) {
        index = boxCount; // Default adding at the end
    }

    const container = document.getElementById('container');
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box-${boxCount}`;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = number;
    input.readOnly = true;
    box.appendChild(input);

    const randomNumber = document.createElement('span');
    randomNumber.textContent = generateRandomNumber(); // Generate random number
    box.appendChild(randomNumber);

    // Insert the new node and its arrow
    if (index === 0 && boxCount > 0) {
        // If inserting at the first position, ensure the arrow is created before the box
        const firstArrow = document.createElement('span');
        firstArrow.className = 'arrow';
        firstArrow.innerHTML = '→';
        container.insertBefore(firstArrow, container.firstChild);
        container.insertBefore(box, firstArrow);
    } else {
        container.insertBefore(box, container.children[index * 2]);
        
        // Create the arrow if necessary
        if (index > 0) {
            const arrow = document.createElement('span');
            arrow.className = 'arrow';
            arrow.innerHTML = '→';
            container.insertBefore(arrow, box);
        }
    }

    boxCount++;

    // Ensure the "NULL" arrow is always at the end
    updateNullArrow(container);

    addInput.value = '';
    addIndexInput.value = '';
}


function deleteBox() {
    const deleteInput = document.getElementById('deleteInput');
    let position = parseInt(deleteInput.value);
    const container = document.getElementById('container');
    const boxes = container.getElementsByClassName('box');

    if (boxCount == 0) {
        alert("No Node present Can't delete node");
    }
    
    if (isNaN(position) || position < 0 || position >= boxCount) {
        alert("Invalid Index Deleted the last element by default");
        position = boxCount - 1; // Default to deleting the last box
    }

    // Delete the node at the specified position
    const box = boxes[position];
    const arrow = box.previousElementSibling;

    // Remove the arrow if it exists and is located before the node
    if (arrow && arrow.className === 'arrow') {
        container.removeChild(arrow);
    }

    // If deleting the first node, check if there's an arrow after it
    if (position === 0 && boxes.length > 1) {
        const nextArrow = boxes[1].previousElementSibling;
        if (nextArrow && nextArrow.className === 'arrow') {
            container.removeChild(nextArrow);
        }
    }

    container.removeChild(box);
    boxCount--;

    // Update IDs of remaining nodes
    for (let i = position; i < boxes.length; i++) {
        boxes[i].id = `box-${i}`;
    }

    // check that "NULL" arrow is always at the end
    updateNullArrow(container);

    deleteInput.value = '';
}

// Function to ensure the "NULL" arrow is correctly positioned
function updateNullArrow(container) {
    // Remove existing "NULL" arrow if present as the arrow got double while adding the new nodes
    const existingNullArrow = container.querySelector('.null-arrow');
    if (existingNullArrow) {
        container.removeChild(existingNullArrow);
    }

    // Add the "NULL" arrow if there are nodes on screen
    if (boxCount > 0) {
        const nullArrow = document.createElement('span');
        nullArrow.className = 'arrow null-arrow';
        nullArrow.innerHTML = '→ NULL';
        container.appendChild(nullArrow);
    }
}