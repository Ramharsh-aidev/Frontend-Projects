class Stack {
    constructor(maxSize) {
        this.items = [];
        this.maxSize = maxSize;
    }

    push(element) {
        if (this.items.length >= this.maxSize) {
            alert("Stack Overflow");
            return;
        }
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            alert("Stack Underflow");
            return null;
        }
        return this.items.pop();
    }

    peek() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return this.items.join(', ');
    }
}

const stack = new Stack(8); // Set maximum size to 11
const container = document.getElementById('container');
const stackInput = document.getElementById('stackInput');
const pushButton = document.getElementById('pushButton');
const popButton = document.getElementById('popButton');
const peekButton = document.getElementById('peekButton');
const peekDisplay = document.getElementById('peekDisplay');

pushButton.addEventListener('click', () => {
    const value = stackInput.value.trim();
    if (value) {
        stack.push(value);
        displayStack();
        stackInput.value = '';
        hidePeekDisplay(); // Hide peek display after other operations
    }
});

popButton.addEventListener('click', () => {
    stack.pop();
    displayStack();
    hidePeekDisplay();
});

peekButton.addEventListener('click', () => {
    updatePeekDisplay();
    peekDisplay.hidden = false; // Show peek display on peek button click
});

function displayStack() {
    container.innerHTML = '';
    stack.items.forEach(item => {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = item;
        container.appendChild(box);
        
        // Trigger animation after adding to the DOM
        setTimeout(() => {
            box.classList.add('show');
        }, 10);
    });
}

function updatePeekDisplay() {
    const topElement = stack.peek();
    peekDisplay.textContent = `Top Element: ${topElement ? topElement : 'None'}`;
}

function hidePeekDisplay() {
    peekDisplay.hidden = true;
}
