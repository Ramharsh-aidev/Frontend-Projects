import { GOOGLE_GEMINI_API } from './api.env.js';

let innerUploadImage = document.querySelector(".inner-upload-image");
let input = innerUploadImage.querySelector("input");
let image = document.querySelector("#image");
let loadingSection = document.querySelector("#loadingSection");
let btn = document.querySelector("#submitBtn");
let text = document.querySelector("#text");
let outputSection = document.querySelector("#outputSection");
let uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'));
let confirmUploadBtn = document.getElementById('confirmUpload');
let themeToggle = document.getElementById('themeToggle');
let themeLabel = document.getElementById('themeLabel');
let noImageModal = new bootstrap.Modal(document.getElementById('noImageModal'));

const Api_url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_GEMINI_API}`;

let fileDetails = {
    mime_type: null,
    data: null
};

// Function to toggle theme
function toggleTheme() {
    if (themeToggle.checked) {
        document.body.classList.add("dark-mode");
        themeLabel.innerHTML = '<i class="fas fa-moon"></i>';  // Change the label to Light Mode icon
    } else {
        document.body.classList.remove("dark-mode");
        themeLabel.innerHTML = '<i class="fas fa-sun"></i>';  // Change the label to Dark Mode icon
    }
}

// Listen for toggle change event to switch themes
themeToggle.addEventListener('change', toggleTheme);

// Function to generate response from the API
async function generateResponse() {
    const RequestOption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "contents": [{
                "parts": [
                    { "text": "solve the mathematical problem with proper steps of solution" },
                    {
                        "inline_data": {
                            "mime_type": fileDetails.mime_type,
                            "data": fileDetails.data
                        }
                    }
                ]
            }]
        })
    };

    try {
        let response = await fetch(Api_url, RequestOption);
        let data = await response.json();
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

        text.innerHTML = apiResponse;
        outputSection.style.display = "block";  // Show the output box

        // Render math formulas
        renderMathInElement(text, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "\\(", right: "\\)", display: false }
            ]
        });

    } catch (e) {
        console.log(e);
    } finally {
        loadingSection.style.display = "none";
    }
}

input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = (e) => {
        let base64data = e.target.result.split(",")[1];
        fileDetails.mime_type = file.type;
        fileDetails.data = base64data;

        innerUploadImage.querySelector("span").style.display = "none";
        innerUploadImage.querySelector("#uploadIcon").style.display = "none";
        image.style.display = "block";
        image.src = `data:${fileDetails.mime_type};base64,${fileDetails.data}`;
        outputSection.style.display = "none";
    };

    reader.readAsDataURL(file);
});

btn.addEventListener("click", () => {
    // Check if an image is uploaded
    if (!fileDetails.data) {
        noImageModal.show(); // Show prompt if no image is uploaded
        return;
    }

    loadingSection.style.display = "block";
    generateResponse();
});

innerUploadImage.addEventListener("click", () => {
    if (image.style.display !== "none") {
        uploadModal.show();
    } else {
        input.click();
    }
});

confirmUploadBtn.addEventListener("click", () => {
    uploadModal.hide();
    input.click();
});

// Initialize the theme based on the current toggle state
toggleTheme();
