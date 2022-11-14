import React, { useState } from "react";
import "./Menu.css"

export const isClicked = false;

function Menu() {
    const [isClicked, setClick] = useState(false);
    const click = () => {
        setClick(!isClicked);
    }


    return (
        <div className={isClicked ? "menu change" : "menu"} onClick={click} >
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
        </div>
    )
}

export default Menu;