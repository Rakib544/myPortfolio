import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            <div className="navbar-link">
                <h2>Rakib</h2>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><Link to="#about">About</Link></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
            <div className="nav-btn">
            <a href="https://drive.google.com/uc?export=download&id=1eUvphegNNU-4YWLSw6HIe-vj9isQICKn" target='_blank' rel="noreferrer" className="resume-button">Get Resume  <FontAwesomeIcon icon={faDownload} /></a>
            </div>
            <div className="hamburger-menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;