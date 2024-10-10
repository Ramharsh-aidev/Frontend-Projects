// src/components/Features.jsx
import React from 'react';
import '../CSS_Files/Features.css'; // Import your CSS file
import feature1 from '../Images/Feature1.png'; // Update the extension if needed
import feature2 from '../Images/Feature2.png';
import feature3 from '../Images/Feature3.png';
import feature4 from '../Images/Feature4.png';

const Features = () => {
    return (
        <div className="features-container">
            <div className="feature-item">
                <img src={feature1} alt="Feature 1" />
            </div>
            <div className="feature-item">
                <img src={feature2} alt="Feature 2" />
            </div>
            <div className="feature-item">
                <img src={feature3} alt="Feature 3" />
            </div>
            <div className="feature-item">
                <img src={feature4} alt="Feature 4" />
            </div>
        </div>
    );
};

export default Features;
