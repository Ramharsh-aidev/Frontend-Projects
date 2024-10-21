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

    document.getElementById('aim-objective').addEventListener('click', function() {
        loadContent(selectedAlgorithm, 'Objective');
    });
    document.getElementById('video-explanation').addEventListener('click', function() {
        loadContent(selectedAlgorithm, 'Video');
    });
    document.getElementById('animation').addEventListener('click', function() {
        loadContent(selectedAlgorithm, 'Animation');
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
            url = `../HTML_Files/Objective/${algorithm}Objective.html`;
            cssFile = `../CSS_Files/${algorithm}Objective.css`;
            jsFile = `../JavaScript_Files/${algorithm}Objective.js`;
            break;
        case 'Video':
            url = `../HTML_Files/Video/${algorithm}Animation.mp4`;
            break;
        case 'Animation':
            url = `../HTML_Files/Animation/${algorithm}Animation.html`;
            cssFile = `../CSS_Files/${algorithm}Animation.css`;
            jsFile = `../JavaScript_Files/${algorithm}.js`;
            break;
        case 'Test':
            url = `../HTML_Files/Test.html`;
            cssFile = `../CSS_Files/Test.css`;
            jsFile = `../JavaScript_Files/Test.js`;
            break;
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            loadCSS(cssFile);
            loadJS(jsFile);
        })
        .catch(error => console.error('Error loading content:', error));
}

function loadCSS(file) {
    if (file) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        document.head.appendChild(link);
    }
}

function loadJS(file) {
    if (file) {
        const script = document.createElement('script');
        script.src = file;
        document.body.appendChild(script);
    }
}
