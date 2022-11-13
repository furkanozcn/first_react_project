import React from 'react';
import './Header.css';

function Header(){
    return(
        <nav className="navbar">
        <div className="logo">
            <a href="#">
                <span>C</span>ode<span>A</span>nd<span>C</span>reate
            </a>
        </div>
        <div className="nav-list">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact</a>
        </div>
    </nav>
    );
}

export default Header;