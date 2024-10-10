import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../CssFiles/SubHeading.css';

const SubHeading = ({ title, borderColor1, borderColor2, textColor1, textColor2 }) => {
    return (
        <center>
            <br /><br />
            <h2 
                className="sub-heading2" 
                style={{
                    '--border-color1': borderColor1,
                    '--border-color2': borderColor2,
                    '--text-color1': textColor1,
                    '--text-color2': textColor2
                }}
            >
                {title}
            </h2>
        </center>
    );
};

export default SubHeading;
