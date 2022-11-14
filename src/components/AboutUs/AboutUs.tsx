import React from "react";
import "./AboutUs.css";

function AboutUs() {
    return (
        <div className="container">
            <section className="section-2" id="about-us">
                <h1 className="section-heading">About Us</h1>
                <div className="section-heading-line"></div>
                <div className="video-wrapper">
                    <video className="video" src="../src/images/about-us-video.mp4"></video>
                    <div className="controls">
                        <div className="video-bar-wrapper">
                            <div className="video-bar"></div>
                        </div>
                        <div className="buttons">
                            <button>
                                <i className="far fa-play-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <p className="section-2-paragraph">
                    <i className="fas fa-quote-left"></i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil voluptatibus perferendis consectetur cum beatae, possimus deleniti maxime impedit distinctio veritatis ad laboriosam quis dolores adipisci nesciunt voluptate recusandae neque expedita cupiditate. Id, nemo quia enim quaerat natus dicta libero!
                    <i className="fas fa-quote-right"></i>
                </p>
            </section>
        </div>)
}

export default AboutUs;