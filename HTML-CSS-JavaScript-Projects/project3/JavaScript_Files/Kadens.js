let array = [];
let maxSoFar = -Infinity;
let maxEndingHere = 0;
let currentIndex = 0;
let animationSpeed = 1500; 

function createArrayElements() {
    const arrayContainer = document.getElementById('array');
    arrayContainer.innerHTML = '';
    array.forEach((value, index) => {
        const element = document.createElement('div');
        element.className = 'element';
        element.id = `element-${index}`;
        element.innerText = value;
        arrayContainer.appendChild(element);
    });
}

function updateInfo() {
    const infoContainer = document.getElementById('info');
    infoContainer.innerHTML = `maxSoFar: ${maxSoFar}, maxEndingHere: ${maxEndingHere}`;
}

function animateKadaneStep() {
    if (currentIndex < array.length) {
        document.getElementById(`element-${currentIndex}`).classList.add('current');

        maxEndingHere += array[currentIndex];
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }

        updateInfo();

        setTimeout(() => {
            document.getElementById(`element-${currentIndex}`).classList.remove('current');
            currentIndex++;
            animateKadaneStep();
        }, animationSpeed);
    } else {
        document.getElementById('info').innerText = `Final maxSoFar: ${maxSoFar}`;
    }
}

function startKadane() {
    const input = document.getElementById('arrayInput').value;
    array = input.split(',').map(Number);
    
    if (array.some(isNaN)) {
        alert("Please enter a valid array of numbers.");
        return;
    }

    maxSoFar = -Infinity;
    maxEndingHere = 0;
    currentIndex = 0;
    createArrayElements();
    updateInfo();
    animateKadaneStep();
}

document.addEventListener('DOMContentLoaded', () => {
    createArrayElements();
});
