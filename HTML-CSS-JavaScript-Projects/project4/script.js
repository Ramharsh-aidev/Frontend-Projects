// script.js

document.getElementById('file-input').addEventListener('change', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    if (file) {
        // Hide upload icon and show uploaded image container
        document.querySelector('.custom-file-upload').style.display = 'none';
        document.getElementById('uploaded-image-container').classList.remove('d-none');
        
        // Display uploaded image in the div
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('uploaded-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    if (!file) {
        alert("Please upload an image first!");
        return;
    }

    // Show loading message until solution is fetched (you can replace this with an actual API request)
    document.getElementById('solution-container').classList.remove('d-none');
    const stepsContainer = document.getElementById('steps');
    stepsContainer.innerHTML = "<p>Loading solution...</p>";
    
    // Simulate API call to process the image and get a solution (replace this part with your API call)
    setTimeout(() => {
        // Example response
        const solutionSteps = [
            "Step 1: Identify the given equation.",
            "Step 2: Simplify both sides.",
            "Step 3: Solve for the unknown variable.",
            "Step 4: Verify the solution."
        ];

        // Clear previous solution and insert the new one
        stepsContainer.innerHTML = "";
        solutionSteps.forEach(step => {
            const stepElement = document.createElement('p');
            stepElement.textContent = step;
            stepsContainer.appendChild(stepElement);
        });
    }, 2000);  // Simulate API response delay
});
