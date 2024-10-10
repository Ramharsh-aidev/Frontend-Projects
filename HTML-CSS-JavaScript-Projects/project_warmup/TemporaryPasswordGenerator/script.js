const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");
const inputSize = document.getElementById("passwordLength");

const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*)(}{][!/><=-`+_|^~";
    let lengthOfPassword = Number(inputSize.value);
    
    // Validation of password length
    if (isNaN(lengthOfPassword)) {
        alert("Enter a number.");
        return;
    }
    if (lengthOfPassword < 4) {
        alert("Enter a valid password size of at least 4.");
        return;
    }
    if (lengthOfPassword > 17) {
        alert("Enter a valid password size of at most 17.");
        return;
    }

    let password = "";
    // Generate password
    for (let i = 0; i < lengthOfPassword; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    passwordBox.value = password;
}

button.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
    const passwordCopy = passwordBox.value.trim();
    
    if (!passwordCopy) {
        alert("No password to copy. Please generate a password first.");
        return;
    }

    navigator.clipboard.writeText(passwordCopy).then(() => {
        alert("Password copied to clipboard.");
    }).catch((err) => {
        alert("Failed to copy password: " + err);
    });
});
