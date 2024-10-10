// Initialize variables
let currentInput = '';
let previousInput = '';
let operator = '';
let shouldResetScreen = false;

const display = document.getElementById('display');

function updateDisplay() {
    // Display previous input, operator, and current input
    if (operator) {
        display.textContent = `${previousInput} ${operator} ${currentInput}`;
    } else {
        display.textContent = currentInput || '0';
    }
}

function clearEntry() {
    // Clear the current input only
    currentInput = '';
    updateDisplay();
}

function clearAll() {
    // Clear all inputs and reset calculator state
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function backspace() {
    // Remove the last digit from current input
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0'; // Display zero if input is empty
    }
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = String(number);
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDot() {
    if (shouldResetScreen) {
        currentInput = '0.';
        shouldResetScreen = false;
        return;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function operate(op) {
    if (currentInput === '' && op !== '1/x' && op !== 'x²' && op !== '√') return;

    if (operator && !shouldResetScreen) {
        calculate();
    }

    switch (op) {
        case '+/-':
            currentInput = currentInput ? String(-parseFloat(currentInput)) : '';
            break;
        case '%':
            currentInput = currentInput ? String(parseFloat(currentInput) / 100) : '';
            break;
        case '1/x':
            currentInput = currentInput ? String(1 / parseFloat(currentInput)) : '';
            break;
        case 'x²':
            currentInput = currentInput ? String(Math.pow(parseFloat(currentInput), 2)) : '';
            break;
        case '√':
            currentInput = currentInput ? String(Math.sqrt(parseFloat(currentInput))) : '';
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            if (previousInput && operator) {
                calculate();
            }
            previousInput = currentInput;
            operator = op;
            currentInput = '';
            shouldResetScreen = false;
            break;
    }
    updateDisplay();
}

function calculate() {
    if (!operator || shouldResetScreen) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            result = prev / current;
            break;
    }

    currentInput = String(result);
    operator = '';
    previousInput = '';
    shouldResetScreen = true;
    updateDisplay();
}

// Attach event listeners to the buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-action');
        const value = e.target.getAttribute('data-value');

        if (action === 'appendNumber') {
            appendNumber(value);
        } else if (action === 'appendDot') {
            appendDot();
        } else if (action === 'operate') {
            operate(value);
        } else if (action === 'calculate') {
            calculate();
        } else if (action === 'clearEntry') {
            clearEntry();
        } else if (action === 'clearAll') {
            clearAll();
        } else if (action === 'backspace') {
            backspace();
        }
    });
});

updateDisplay();
