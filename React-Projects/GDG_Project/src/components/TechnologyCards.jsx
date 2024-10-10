import React from 'react';
import '../CssFiles/TechnologyCards.css';

const TechnologyCards = ({ technologies }) => {
    return (
        <div className="technology-section">
            <div className="LineSetup">
                <hr />
                <h1>Technologies</h1>
                <hr />
            </div>
            <p>Domains That Excite Us to Collaborate and Teach!</p>
            <div className="card-container">
                {technologies.map((tech, index) => (
                    <div key={index} className="tech-card">
                        <div className={`tech-icon ${tech.iconClass}`}></div>
                        <h2>{tech.name}</h2>
                        <div className="arrow-down">↓</div>
                        <p>{tech.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologyCards;
