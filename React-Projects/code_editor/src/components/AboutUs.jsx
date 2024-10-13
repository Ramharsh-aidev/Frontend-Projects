import React from 'react';
import '../CSS_Files/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2>About Us</h2>
            <p>
                Welcome to our Online Code Editor! Our mission is to provide a user-friendly platform for developers
                and learners alike to write, compile, and test HTML, CSS, and JavaScript code in real-time.
            </p>
            <p>
                Whether you're a beginner looking to learn the basics of web development or an experienced developer 
                in need of a quick testing environment, our tool is designed to meet your needs.
            </p>
            <p>
                Features:
            </p>
            <ul>
                <li>Real-time code preview</li>
                <li>Support for HTML, CSS, JavaScript programming languages</li>
                <li>Custom note sections for your convenience</li>
                <li>Dark and light theme toggle</li>
            </ul>
            <p>
                Thank you for choosing our platform! Happy coding!
            </p>
        </div>
    );
};

export default AboutUs;
