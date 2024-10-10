document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const switchButton = document.querySelector('.switch');

    switchButton.addEventListener('click', function () {
        body.classList.toggle('on');
        switchButton.classList.toggle('on');
    });
});
