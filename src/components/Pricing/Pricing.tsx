import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Pricing.css";
import 'swiper/css';
import { Navigation, Pagination } from "swiper";
import json from "./PricingCard.json"

function Pricing() {
    return (
        <div className="container">
            <section className="section-3" id="pricing">
                <h1 className="section-heading">Pricing</h1>
                <div className="section-heading-line"></div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    className="swiper-container"
                    navigation
                    pagination={{ clickable: true }}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 70,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                >

                    {json.map((data) => {
                        return (
                            <SwiperSlide>
                                <div className="pricing-card swiper-slide">
                                    <div className="pricing-card-front">
                                        <h1 className={"pricing-card-heading heading-" + data.class}>{data.type}</h1>
                                        <h3 className="pricing-card-price">{data.price}</h3>
                                        <ul className={"pricing-card-list list-" + data.class}>
                                            <li>
                                                <i className="fas fa-check"></i>
                                                <span>{data.item1}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check"></i>
                                                <span>{data.item2}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-times"></i>
                                                <span>{data.item3}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-times"></i>
                                                <span>{data.item4}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-times"></i>
                                                <span>{data.item5}</span>
                                            </li>
                                        </ul>
                                        <button className={"pricing-card-btn btn-" + data.class}>{data.choose}</button>
                                    </div>
                                    <div className={"pricing-card-back back-" + data.class}>
                                        <a href="#">{data.order}</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
            </section>
        </div>
    )
}

export default Pricing;
