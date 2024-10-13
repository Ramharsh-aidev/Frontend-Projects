import React, { useState } from 'react';
import '../CSS_Files/Navbar.css';
import ScriptNext from '../Images/ScriptNest-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            setTheme('light');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <img src={ScriptNext} alt="Logo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Open App">Open App</Link>
                    </li>
                </ul>
                <div className="me-2">
                    <Link className="btn btn-primary" to="/login">Login</Link>
                </div>
                <div>
                    <Link className="btn btn-success" to="/signup">Sign Up</Link>
                </div>
                <div className="form-check form-switch ms-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="themeSwitch"
                        onChange={handleTheme}
                    />
                    <label className="form-check-label" htmlFor="themeSwitch">
                        <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
