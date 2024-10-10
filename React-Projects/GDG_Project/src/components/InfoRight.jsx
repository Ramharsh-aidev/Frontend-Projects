import React from 'react';
import '../CssFiles/InfoRight.css'; 

const InfoRight = ({ imagePath, missionText }) => {
    return (
        <div className="info-right">
            <div className="info-image">
                <img src={imagePath} alt="Info" />
            </div>
            <div className="info-text">
                <p>{missionText}</p>
            </div>
        </div>
    );
};

export default InfoRight;