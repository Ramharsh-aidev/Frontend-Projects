document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    const generateButton = document.getElementById('generateCaptcha');
    const verifyButton = document.getElementById('verifyCaptcha');
    const inputField = document.getElementById('captchaInput');
    const message = document.getElementById('message');

    let captchaCode = '';

    function generateCaptcha() {
        captchaCode = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const captchaLength = 6;
        
        for (let i = 0; i < captchaLength; i++) {
            captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(captchaCode, canvas.width / 2, canvas.height / 2 + 10);
    }

    function verifyCaptcha() {
        if (inputField.value === captchaCode) {
            message.textContent = 'CAPTCHA verified successfully!';
            message.style.color = 'green';
        } else {
            message.textContent = 'CAPTCHA verification failed. Try again.';
            message.style.color = 'red';
        }
    }

    generateButton.addEventListener('click', generateCaptcha);
    verifyButton.addEventListener('click', verifyCaptcha);

    // Generate initial CAPTCHA
    generateCaptcha();
});
