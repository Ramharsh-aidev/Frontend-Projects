import React from 'react';
import '../CssFiles/InfoLeft.css'; 

const InfoLeft = ({ imagePath, missionText }) => {
    return (
        <div className="info-left">
            <div className="text-section">
                <p>{missionText}</p>
            </div>
            <div className="image-section">
                <img src={imagePath} alt="Info" />
            </div>
        </div>
    );
};

export default InfoLeft;