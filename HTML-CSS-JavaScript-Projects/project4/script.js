// script.js

let imageUploaded = false; // Track if an image has been uploaded

document.getElementById('file-input').addEventListener('change', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    if (file) {
        if (imageUploaded) {
            // Show confirmation modal if an image has already been uploaded
            const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
            confirmModal.show();
        } else {
            uploadImage(file);
        }
    }
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    if (!file) {
        alert("Please upload an image first!");
        return;
    }

    // Show loading message until solution is fetched
    document.getElementById('solution-container').classList.remove('d-none');
    const stepsContainer = document.getElementById('steps');
    stepsContainer.innerHTML = "<p>Loading solution...</p>";
    
    // Simulate API call to process the image and get a solution
    setTimeout(() => {
        const solutionSteps = [
            "Step 1: Identify the given equation.",
            "Step 2: Simplify both sides.",
            "Step 3: Solve for the unknown variable.",
            "Step 4: Verify the solution."
        ];

        stepsContainer.innerHTML = "";
        solutionSteps.forEach(step => {
            const stepElement = document.createElement('p');
            stepElement.textContent = step;
            stepsContainer.appendChild(stepElement);
        });
    }, 2000);
});

// Handle confirmation for uploading a new image
document.getElementById('confirm-upload').addEventListener('click', function() {
    // Reset the upload state and allow uploading a new image
    resetUploadState();

    // Hide the modal
    const confirmModal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
    confirmModal.hide();
});

// Function to handle image upload
function uploadImage(file) {
    // Hide upload icon and show uploaded image container
    document.querySelector('.custom-file-upload').style.display = 'none';
    document.getElementById('uploaded-image-container').classList.remove('d-none');
    
    // Display uploaded image in the div
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('uploaded-image').src = e.target.result;
    };
    reader.readAsDataURL(file);
    
    // Set imageUploaded to true
    imageUploaded = true;
}

// Reset the upload state to default
function resetUploadState() {
    const fileInput = document.getElementById('file-input');
    fileInput.value = ''; // Clear the file input
    document.querySelector('.custom-file-upload').style.display = 'block'; // Show upload icon
    document.getElementById('uploaded-image-container').classList.add('d-none'); // Hide uploaded image container
    document.getElementById('uploaded-image').src = ''; // Clear the image source
    document.getElementById('solution-container').classList.add('d-none'); // Hide solution container
    document.getElementById('steps').innerHTML = ''; // Clear previous solution steps
    imageUploaded = false; // Reset the upload state
}

// Reset the upload state when the user clicks on the uploaded image
document.getElementById('uploaded-image-container').addEventListener('click', function() {
    if (imageUploaded) {
        const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
        confirmModal.show();
    }
});