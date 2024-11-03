document.querySelector(".openbtn").addEventListener("click", openNav);
document.querySelector(".closebtn").addEventListener("click", closeNav);

function openNav() {
    if (window.innerWidth <= 600) {
        document.getElementById("sidebar").style.width = "100%";
    } else {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    document.querySelector(".openbtn").classList.add("hidden");
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    if (window.innerWidth > 600) {
        document.getElementById("main").style.marginLeft = "0";
    }
    document.querySelector(".openbtn").classList.remove("hidden");
}

document.addEventListener('DOMContentLoaded', function() {
    const selectedAlgorithm = localStorage.getItem('selectedAlgorithm');
    if (selectedAlgorithm) {
        loadContent(selectedAlgorithm, 'Objective');
    }

    document.getElementById('Objective').addEventListener('click', function() {
        loadContent(selectedAlgorithm, 'Objective');
    });
    document.getElementById('video-explanation').addEventListener('click', function() {
        loadContent(selectedAlgorithm, 'Video');
    });
    document.getElementById('animation').addEventListener('click', function() {
        loadContent(selectedAlgorithm, 'Animation');
    });
    document.getElementById('Theory').addEventListener('click', function() {
        loadContent(selectedAlgorithm, 'Theory');
    });
    document.getElementById('test').addEventListener('click', function() {
        loadContent(selectedAlgorithm, 'Test');
    });
});

function loadContent(algorithm, type) {
    let url;
    let cssFile;
    let jsFile;

    switch (type) {
        case 'Objective':
            url = `../HTML_Files/Aim & Objective/${algorithm}Objective.html`;
            cssFile = `../CSS_Files/${algorithm}Objective.css`;
            jsFile = `../JavaScript_Files/${algorithm}Objective.js`;
            break;
        case 'Video':
            url = `../HTML_Files/Video/${algorithm}.html`;
            cssFile = `../CSS_Files/${algorithm}Video.css`;
            jsFile = `../JavaScript_Files/${algorithm}Video.js`;
            break;
        case 'Animation':
            url = `../HTML_Files/Animation/${algorithm}Animation.html`;
            cssFile = `../CSS_Files/${algorithm}Animation.css`;
            jsFile = `../JavaScript_Files/${algorithm}Animation.js`;
            break;
        case 'Theory':
            url = `../HTML_Files/Theory/${algorithm}Theory.html`;
            break;
        case 'Test':
            url = `../HTML_Files/Test_Files/${algorithm}Test.html`;
            // cssFile = `../CSS_Files/${algorithm}Test.css`; // Uncomment if needed
            jsFile = `../JavaScript_Files/${algorithm}Test.js`;
            break;
    }

    console.log(`Fetching content from: ${url}`);
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log(`Fetched content: ${data}`);
            document.getElementById("content").innerHTML = data;

            // Load CSS if applicable
            if (cssFile) {
                loadCSS(cssFile);
            }

            // Load JS for Animation and Test
            if (type === 'Animation' || type === 'Test') {
                loadJS(jsFile);
            } else if (jsFile) {
                // Load JS for other types if applicable
                loadJS(jsFile);
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

function loadJS(file) {
    if (file) {
        const script = document.createElement('script');
        script.src = file;
        script.onload = () => {
            console.log(`${file} loaded successfully.`);
        };
        script.onerror = () => {
            console.error(`Error loading script: ${file}`);
        };
        document.body.appendChild(script);
    }
}
