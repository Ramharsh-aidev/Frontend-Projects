import React, { useState } from 'react';
import '../CssFiles/Navbar.css';
import GDGNavbarLogo from '../components/GDGNavbarLogo.png'; // Import the image
// import DarkThemeLogo from '../components/darkThemeLogo.png'; // Import the dark theme image

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
                <img src={theme === 'light' ? GDGNavbarLogo : GDGNavbarLogo} alt="Logo" /> 
            </a>
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
                        <i className={theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'}></i>
                    </label>
                </div>
            </div>
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
        </nav>
    );
};

export default Navbar;
