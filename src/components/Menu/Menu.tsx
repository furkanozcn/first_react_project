import React, { useState } from "react";
import "./Menu.css"

function Menu() {
    return (
            <div className="nav-list">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Pricing</a>
                <a href="#" className="nav-link">Blog</a>
                <a href="#" className="nav-link">Contact</a>
            </div>
    )
}

export default Menu;