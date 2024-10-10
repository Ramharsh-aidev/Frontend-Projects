import React from 'react';
import GDGFooterLogo from './GDGFooterLogo.png';
import '../CssFiles/Footer.css'; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <img src={GDGFooterLogo} alt="College Logo" />
            </div>
            <div className="footer-right">
                <div className="location">
                    <i className="fas fa-map-marker-alt" />
                    <span>
                        Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,
                        Katol Road, Nagpur- 440013
                    </span>
                </div>
                <div className="gmail">
                    <i className="fas fa-envelope" />
                    <span>dsc.rknec@gmail.com</span>
                </div>
                <div className="social-media">
                    <span>Follow us:</span>
                    <i className="fab fa-instagram" />
                    <i className="fab fa-linkedin" />
                    <i className="fab fa-twitter" />
                </div>
            </div>
        </div>
    );
};

export default Footer;