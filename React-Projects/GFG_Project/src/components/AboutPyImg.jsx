import React from 'react';
import '../CSS_Files/AboutPyImg.css';
import FlipImg from '../Images/FlipImg.png';
import AboutPy1 from '../Images/AboutPy1.png';
import AboutPy2 from '../Images/AboutPy2.png';

const AboutPyImg = () => {
    return (
        <div className="about-py-img-container">
            <div className="about-py-img-big">
                <img src={FlipImg} alt="Flipping Big" className="flipping-updown" />
            </div>
            <div className="about-py-img-small-container">
                <div className="about-py-img-small">
                    <img src={AboutPy1} alt="Small 1" />
                </div>
                <div className="about-py-img-small">
                    <img src={AboutPy2} alt="Small 2" className="flipping" />
                </div>
            </div>
        </div>
    );
};

export default AboutPyImg;
