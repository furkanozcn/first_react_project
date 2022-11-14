import React from "react";
import "./AboutUs.css";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUs() {
    const play =() =>{}
    return (
        <div className="container">
            <section className="section-2" id="about-us">
                <h1 className="section-heading">About Us</h1>
                <div className="section-heading-line"></div>
                <div className="video-wrapper">
                    <video className="video" src="https://www.youtube.com/watch?v=FvbmEmd6cHU&list=RDFvbmEmd6cHU&start_radio=1&ab_channel=AlperAyy%C4%B1ld%C4%B1z"></video>
                    <div className="controls">
                        <div className="video-bar-wrapper">
                            <div className="video-bar"></div>
                        </div>
                        <div className="buttons">
                            <button>
                                <FontAwesomeIcon color="white" size="2x" icon={faPlayCircle} />
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