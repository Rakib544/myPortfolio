import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = ({ show, click }) => {
    const sideDrawerClass = ['side-drawer']

    if (show) {
        sideDrawerClass.push('show')
    }
    return (
        <div className={`${sideDrawerClass.join(' ')}`} style={{zIndex: '10000'}}>
            <div className="cross-btn" onClick={click}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className="sidebar-links" onClick={click}>
                <li><a href="#home">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blogs">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="menu-icons">
                <a href='https://www.facebook.com/profile.php?id=100018966190023' target="_blank" rel="noreferrer" className="menu-icon"><FontAwesomeIcon className="s-icon" icon={faFacebookF} /></a>
                <a href="https://www.linkedin.com/in/md-rakib-3666891b2/" className="menu-icon" target="_blank" rel="noreferrer"><FontAwesomeIcon className="s-icon" icon={faLinkedinIn} /></a>
                <a href="https://github.com/Rakib544" target="_blank" rel="noreferrer" className="menu-icon" to="/"> <FontAwesomeIcon className="s-icon" icon={faGithub} /></a>
            </div>
        </div>
    );
};

export default Sidebar;