import React from 'react';
import '../styles/styles.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Mobishaala.com</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
