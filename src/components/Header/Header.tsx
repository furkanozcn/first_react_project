import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './Header.css';


function Header() {
    const [isClicked, setClick] = useState(false);
    const click = () => {
        setClick(!isClicked);
    }

    return (
        <nav className={isClicked ? "navbar change" : "navbar"}>
              <Menu/>
            <div className="logo">
                <a href="#">
                    <span>C</span>ode<span>A</span>nd<span>C</span>reate
                </a>
            </div>
            <div className={isClicked ? "menu change" : "menu"} onClick={click} >
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
        </nav>
    );
}

export default Header;