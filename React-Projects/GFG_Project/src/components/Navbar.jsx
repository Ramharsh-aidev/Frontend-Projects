import React, { useState } from 'react';
import '../CSS_Files/Navbar.css';
import GFGNavbarLogo from '../components/GFGRCOEMChapterLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

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
                <img src={GFGNavbarLogo} alt="Logo" />
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
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/events">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/alumni">Alumni</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Open App">Open App</a>
                    </li>
                </ul>
                <form className="d-flex me-4">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="form-check form-switch">
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
