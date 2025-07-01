import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you will create a separate CSS file for Navbar styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">My Portfolio</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;