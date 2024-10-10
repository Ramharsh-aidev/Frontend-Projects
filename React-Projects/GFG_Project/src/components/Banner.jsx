import React from 'react';
import '../CSS_Files/Banner.css';

const Banner = () => {
    return (
        <div className="banner">
        <div className="intro-box">
            <p>Introducing an era of new and exciting game development. <a href="../App.js">Read more →</a></p>
        </div>
        <h1>Access the full power of Python Game Development</h1>
        <p>The ultimate game dev workshop for Python enthusiasts. Learn, create, and innovate with the most versatile platform.</p>
        <button>Get Started →</button>
        </div>
    );
};

export default Banner;
