import React from 'react';
import '../CssFiles/AnimatedCircles.css';

const AnimatedCircles = ({ circlesData }) => {
    return (
        <div className="circles-container">
            {circlesData.map((circle, index) => (
                <center>
                <div key={index} className="circle-wrapper">
                    <div className="circle">
                        <span className="circle-text">{circle.text}</span>
                    </div>
                    <center>
                        <p 
                            className="circle-info" 
                            dangerouslySetInnerHTML={{ __html: circle.info }} 
                        />
                    </center>
                    </div>
                </center>
            ))}
        </div>
    );
};

export default AnimatedCircles;