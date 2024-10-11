import React from 'react';
import '../CSS_Files/CodeEditor.css'

const CodeEditor = ({ sections = [], addSection, updateContent }) => {
    return (
        <div className="code-editor-container">
            <div className="sidebar">
                <button onClick={() => addSection('New Section', 'path/to/logo.png')}>
                    Add Section
                </button>
            </div>
            <div className="editor-sections">
                {sections.map(section => (
                    <div key={section.title} className="code-editor-section">
                        <h2>{section.title}</h2>
                        <img src={section.logo} alt={`${section.title} logo`} className="section-logo" />
                        <textarea
                            value={section.content}
                            onChange={(e) => updateContent(section.title, e.target.value)}
                            placeholder={`Write your ${section.title} code here...`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CodeEditor;
