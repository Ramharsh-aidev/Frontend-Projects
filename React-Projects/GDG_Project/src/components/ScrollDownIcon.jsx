import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../CssFiles/ScrollDownIcon.css';

const ScrollDownIcon = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
            <> 
                <div className="scroll-down-icon" onClick={handleScroll}>
                    <i className="fas fa-chevron-down"></i>
                    <i className="fas fa-chevron-down"></i>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <center><br></br><br></br><h2 className="sub-heading">GET KNOW TO US</h2></center>
            </>
    );
};

export default ScrollDownIcon;
