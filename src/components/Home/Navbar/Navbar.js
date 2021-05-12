import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@material-ui/core';

const Navbar = ({ click }) => {
    const [changeNavColor, setChangeNavColor] = useState(false)

    window.addEventListener('scroll', () => {
        if(window.scrollY > 110) {
            setChangeNavColor(true)
        } else {
            setChangeNavColor(false)
        }
    })

    const goToSkill = () => {
        window.scrollTo(0, 600)
    }
    
    const goToPortfolio = () => {
        window.scrollTo(0,1300)
    }
    const goToBlogPage = () => {
        window.scrollTo(0, 1900)
    }
    const goToContactPage = () => {
        window.scrollTo(0,2500)
    }

    return (
        <nav className={changeNavColor ? 'navbar-active' : 'navbar'}>
            <div className="navbar-link">
                <h2>Rakib</h2>
            </div>
            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><Link onClick={goToSkill}>Skills</Link></li>
                <li><Link onClick={goToPortfolio}>Portfolio</Link></li>
                <li><Link onClick={goToBlogPage}>Blogs</Link></li>
                <li><Link onClick={goToContactPage}>Contact</Link></li>
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