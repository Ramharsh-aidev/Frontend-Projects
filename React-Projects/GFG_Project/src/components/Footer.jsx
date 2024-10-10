import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../CSS_Files/Footer.css';
import GFGLogo from '../Images/GFGLogo.png';
import FooterTextLogo from '../Images/FooterTextLogo.jpeg'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-description">
                    <div className="footer-logo-container">
                        <img src={GFGLogo} alt="Logo" className="footer-logo" />
                        <div className="footer-text-logo">
                            <img src={FooterTextLogo} alt="Footer Text Logo" className="footer-text-logo-img" />
                        </div>
                    </div>
                    <p>PyHack provides a wide range of resources and hands-on experience to help you master Python-based game development. Explore new techniques, share your creations, and collaborate with fellow developers. Whether you're looking to build indie games or start a career in the gaming industry, PyHack is the place to begin.</p>
                <div className="footer-social-icons">
                        <a href="https://twitter.com" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://facebook.com" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://discord.com" aria-label="Discord">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a href="https://github.com" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
<br></br>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="/blog">BRAND</a></li>
                            <li><a href="/blog">FAQ</a></li>
                            <li><a href="/blog">Help & Support</a></li>
                            <li><a href="/blog">Governance</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Developers</h3>
                        <ul>
                            <li><a href="/blog">Technical Paper</a></li>
                            <li><a href="/blog">Security</a></li>
                            <li><a href="/blog">Game Design</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/blog">Privacy Policy</a></li>
                            <li><a href="/blog">Terms of Use</a></li>
                            <li><a href="/blog">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
