import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            <div className="navbar-link">
                <h2>Rakib</h2>
            </div>
            <ul className="navbar-links">
                <li><Link exact to="">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blogs</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
            <div className="hamburger-menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;