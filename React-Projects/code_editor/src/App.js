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
            content: '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n<body>\n<h1>Jai Shri Ram</h1>\n</body>\n</html>',
            color: 'red'
        },
        {
            title: 'CSS',
            logo: cssLogo,
            content: 'body { background-color: #f0f0f0; }\nh1 { color: #333; text-align: center; }',
            color: 'blue'
        },
        {
            title: 'JavaScript',
            logo: jsLogo,
            content: 'console.log("Hello, world!");',
            color: 'yellow'
        }
    ];

    const [sections, setSections] = useState(initialSections);
    const [customSections, setCustomSections] = useState([]);
    const [activeSection, setActiveSection] = useState(initialSections[0].title);

    const addSection = () => {
        if (customSections.length < 2) {
            const newSectionIndex = customSections.length + 1;
            const newSection = {
                title: `Custom Section ${newSectionIndex}`,
                logo: '',
                content: '',
                color: 'purple'
            };
            setCustomSections([...customSections, newSection]);
        } else {
            alert("You can only add up to 2 custom sections.");
        }
    };

    const updateContent = (title, newContent) => {
        const updateSection = (section) => 
            section.title === title ? { ...section, content: newContent } : section;

        setSections(sections.map(updateSection));
        setCustomSections(customSections.map(updateSection));
    };

    const generateOutput = () => {
        const htmlContent = sections.find(section => section.title === 'HTML')?.content || '';
        const cssContent = sections.find(section => section.title === 'CSS')?.content || '';
        const jsContent = sections.find(section => section.title === 'JavaScript')?.content || '';
        const customContent = customSections.map(section => section.content).join('\n');

        return `
            <html>
            <head>
                <style>${cssContent}</style>
            </head>
            <body>
                ${htmlContent}
                ${customContent}
                <script>${jsContent}</script>
            </body>
            </html>
        `;
    };

    return (
        <div className="App">
            <Navbar /><hr></hr>
            <CodeEditor 
                sections={[...sections, ...customSections]} 
                addSection={addSection} 
                updateContent={updateContent} 
                activeSection={activeSection}
                setActiveSection={setActiveSection} 
            />
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
