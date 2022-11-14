import React from "react";
import "./Banner.css"

function Banner() {
    return (
        <div className="container">
            <section className="section-1" id="home">
                <div className="banner">
                    <h1 className="banner-heading">
                        <span className="heading-1">Business Ideas</span>
                        <span className="heading-2">Consulting</span>
                        <span className="heading-3">Digital Marketing</span>
                        <span className="heading-4">Strategy</span>
                    </h1>
                    <p className="banner-paragraph">Lorem ipsum dolor sit.</p>
                    <button className="banner-btn">Discover Now</button>
                </div>
            </section>
        </div>
    )
}

export default Banner;