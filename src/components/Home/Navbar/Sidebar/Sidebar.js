import { Link } from '@material-ui/core';
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
        <div className={`${sideDrawerClass.join(' ')}`}>
            <div className="cross-btn" onClick={click}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className="sidebar-links" onClick={click}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="menu-icons">
                <Link className="menu-icon" to="/"><FontAwesomeIcon className="s-icon" icon={faFacebookF} /></Link>
                <Link className="menu-icon" to="/"><FontAwesomeIcon className="s-icon" icon={faLinkedinIn} /></Link>
                <Link className="menu-icon" to="/"> <FontAwesomeIcon className="s-icon" icon={faGithub} /></Link>
            </div>
        </div>
    );
};

export default Sidebar;