import React from 'react';
import '../CSS_Files/CodeEditor.css';
import deleteIcon from '../Images/delete-icon.png';

const CodeEditor = ({ sections = [], addSection, updateContent, deleteCustomSection, activeSection, setActiveSection, isSidebarOpen }) => {
    return (
        <div className="code-editor-container">
            {isSidebarOpen && (
                <div className="sidebar">
                    <div className="add-note-container">
                        <button className="add-note-button" onClick={addSection}>Add Note Section</button>
                    </div>
                    {sections.map((section, index) => (
                        <div key={index} className="section-item">
                            <button 
                                onClick={() => setActiveSection(section.title)} 
                                style={{ backgroundColor: section.color }} // Set button color
                            >
                                {section.title}
                            </button>
                            {section.title.startsWith('Note') && (
                                <img 
                                    src={deleteIcon} 
                                    alt="Delete" 
                                    className="delete-icon" 
                                    onClick={() => deleteCustomSection(section.title)} 
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div className="editor-sections" style={{ flex: 1 }}>
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
                                placeholder={`Write your ${section.title} here...`}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default CodeEditor;
