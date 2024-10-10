import React from 'react';
import '../CssFiles/HeroSection.css';
import '../CssFiles/Navbar.css';
import Imag2 from './Imag2.png'; // Import the image

const HeroSection = () => {
    return (
        <div className="hero-section text-center">
            <h1 className="hero-heading">
                <span className="yellow">G</span>
                <span className="green">o</span>
                <span className="red">o</span>
                <span className="blue">g</span>
                <span className="yellow">l</span>
                <span className="green">e</span>
                <span className="black"> Developer Group</span>
            </h1>
            <h2 className="sub-heading">RBU Chapter</h2>
            <img src={Imag2} alt="Group" className="hero-image" />
            <p className="hero-description">
                Google Developer Groups are community groups for college and university students interested in Google developer technologies.
            </p>
            <button className="join-button">Join Us</button>
        </div>
    );
};

export default HeroSection;
