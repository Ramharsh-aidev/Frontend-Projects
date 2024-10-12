import React from 'react';
import '../CSS_Files/CodeEditor.css';

const CodeEditor = ({ sections = [], addSection, updateContent, activeSection, setActiveSection }) => {
    return (
        <div className="code-editor-container">
            <div className="sidebar">
                <button onClick={addSection}>Add Section</button>
                {sections.map((section, index) => (
                    <button key={index} onClick={() => setActiveSection(section.title)}>
                        {section.title}
                    </button>
                ))}
            </div>
            <div className="editor-sections">
                {sections.map((section) => 
                    section.title === activeSection && (
                        <div key={section.title} className="code-editor-section" style={{ backgroundColor: section.color }}>
                            <h2 className="section-title">{section.title}</h2>
                            {section.logo && (
                                <img src={section.logo} alt={`${section.title} logo`} className="section-logo" />
                            )}
                            <textarea
                                value={section.content}
                                onChange={(e) => updateContent(section.title, e.target.value)}
                                placeholder={`Write your ${section.title} code here...`}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default CodeEditor;
