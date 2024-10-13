import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import here
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditor';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import htmlLogo from './Images/html-logo.png';
import cssLogo from './Images/css-logo.png';
import jsLogo from './Images/js-logo.png';

const App = () => {
    const initialSections = [
        {
            title: 'HTML',
            logo: htmlLogo,
            content: '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n<body>\n<h1>Jai Shri Ram</h1>\n</body>\n</html>',
            color: '#ff3333'
        },
        {
            title: 'CSS',
            logo: cssLogo,
            content: 'body {\n background-color: #f0f0f0; \n}\nh1 {\n color: #333;\n text-align: center;\n}',
            color: '#5f6deb'
        },
        {
            title: 'JavaScript',
            logo: jsLogo,
            content: 'console.log("Hello, world!");',
            color: '#eed548'
        }
    ];

    const [sections, setSections] = useState(initialSections);
    const [customSections, setCustomSections] = useState([]);
    const [activeSection, setActiveSection] = useState(initialSections[0].title);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const addSection = () => {
        if (customSections.length < 3) {
            const newSectionIndex = customSections.length + 1;
            const newSection = {
                title: `Note ${newSectionIndex}`,
                logo: '',
                content: '',
                color: '#ff8949'
            };
            setCustomSections([...customSections, newSection]);
        } else {
            alert("You can only add up to 3 note sections.");
        }
    };

    const updateContent = (title, newContent) => {
        const updateSection = (section) => 
            section.title === title ? { ...section, content: newContent } : section;

        setSections(sections.map(updateSection));
        setCustomSections(customSections.map(updateSection));
    };

    const deleteCustomSection = (title) => {
        setCustomSections(customSections.filter(section => section.title !== title));
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

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <Router>
            <div className="App">
                <Helmet>
                    <title>Online Code Editor - Compile HTML, CSS, and JavaScript</title>
                    <meta name="description" content="An online compiler and code editor for HTML, CSS, and JavaScript with a user-friendly interface." />
                    <meta name="keywords" content="code editor, online compiler, IDE, HTML, CSS, JavaScript" />
                    <meta name="author" content="Your Name" />
                    <meta property="og:title" content="Online Code Editor" />
                    <meta property="og:description" content="An online compiler and code editor for web technologies." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="twitter:title" content="Online Code Editor" />
                    <meta property="twitter:description" content="An online compiler and code editor for web technologies." />
                    <meta property="twitter:card" content="summary_large_image" />
                </Helmet>
                <Navbar />
                <hr style={{ margin: 0 }} /><br />

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/" element={
                        <>
                            <button onClick={toggleSidebar} className="toggle-sidebar-btn" aria-label={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}>
                                {isSidebarOpen ? 'Hide Menu' : 'Show Menu'}
                            </button>
                            <CodeEditor
                                sections={[...sections, ...customSections]}
                                addSection={addSection}
                                updateContent={updateContent}
                                deleteCustomSection={deleteCustomSection}
                                activeSection={activeSection}
                                setActiveSection={setActiveSection}
                                isSidebarOpen={isSidebarOpen}
                            />
                            <div className="output-area">
                                <h2 style={{ textAlign: 'center', fontFamily: 'Algerian', color: 'Highlight' }}>Output</h2>
                                <iframe
                                    title="output"
                                    srcDoc={generateOutput()}
                                    sandbox="allow-scripts"
                                    style={{ width: '100%', height: '300px', border: '1px solid #ccc' }}
                                    loading="lazy"
                                />
                            </div>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
