import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditor';
import htmlLogo from './Images/html-logo.png';
import cssLogo from './Images/css-logo.png';
import jsLogo from './Images/js-logo.png';

const App = () => {
    const initialSections = [
        {
            title: 'HTML',
            logo: htmlLogo,
            content: '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n<body>\n<h1>Hi friend, try edit me!</h1>\n</body>\n</html>'
        },
        {
            title: 'CSS',
            logo: cssLogo,
            content: 'body { background-color: #f0f0f0; }\nh1 { color: #333; text-align: center; }'
        },
        {
            title: 'JavaScript',
            logo: jsLogo,
            content: 'console.log("Hello, world!");'
        }
    ];

    const [sections, setSections] = useState(initialSections);

    const addSection = (title, logo) => {
        setSections([...sections, { title, logo, content: '' }]);
    };

    const updateContent = (title, newContent) => {
        setSections(sections.map(section => 
            section.title === title ? { ...section, content: newContent } : section
        ));
    };

    const generateOutput = () => {
        const htmlContent = sections.find(section => section.title === 'HTML')?.content || '';
        const cssContent = sections.find(section => section.title === 'CSS')?.content || '';
        const jsContent = sections.find(section => section.title === 'JavaScript')?.content || '';

        return `
            <html>
            <head>
                <style>${cssContent}</style>
            </head>
            <body>
                ${htmlContent}
                <script>${jsContent}</script>
            </body>
            </html>
        `;
    };

    return (
        <div className="App">
            <Navbar />
            <h1>Code Editor</h1>
            <CodeEditor sections={sections} addSection={addSection} updateContent={updateContent} />
            <div className="output-area">
                <h2>Output:</h2>
                <iframe
                    title="output"
                    srcDoc={generateOutput()}
                    sandbox="allow-scripts"
                    style={{ width: '100%', height: '300px', border: '1px solid #ccc' }}
                />
            </div>
        </div>
    );
};

export default App;
