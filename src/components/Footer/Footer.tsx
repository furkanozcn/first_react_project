import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="container">
        <footer className="footer">
        <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </div>
        <p className="copyright">
            Copyright &copy; CodeAndCreate All Rights Reserved
        </p>
    </footer>
    </div>
    );
}

export default Footer;