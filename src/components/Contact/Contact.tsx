import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className="container">
            <section className="section-4" id="contact">
                <h1 className="section-heading">Contact</h1>
                <div className="section-heading-line"></div>
                <div className="contact-wrapper">
                    <div className="contact-details">
                        <div className="phone">
                            <FontAwesomeIcon fontSize={48} color={"#7a1010"} icon={faMobileAlt} />
                            <h3>Phone</h3>
                            <p>+123 456 789</p>
                            <p>+987 654 321</p>
                        </div>
                        <div className="address">
                            <FontAwesomeIcon fontSize={48} color={"#7a1010"} icon={faMapMarkerAlt} />
                            <h3>Address</h3>
                            <p>Main Street #123</p>
                            <p>Wall Street #123</p>
                        </div>
                        <div className="email">
                            <FontAwesomeIcon fontSize={48} color={"#7a1010"} icon={faEnvelope} />
                            <h3>Email</h3>
                            <p>support@gmail.com</p>
                            <p>sales@gmail.com</p>
                        </div>
                    </div>
                    <h1>Get in Touch</h1>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;