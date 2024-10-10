function scrollRight() {
    const container = document.querySelector('.mix');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function scrollLeft() {
    const container = document.querySelector('.mix');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}
