import React, { useState, useRef } from 'react';
import "./Bestspece.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const BestSpece = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        prevArrow: <SlArrowLeft className="arrow-icon" />,
        nextArrow: <SlArrowRight className="arrow-icon2" />,
        autoplaySpeed: 1000,
        beforeChange: (current, next) => setCurrentIndex(next),
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="bestspace-section">
            <div className="best-main">
                <div className="best-container">
                    <div className="title-box">
                        <div className="subtitles">
                            <span>SPECIAL SELECTION</span>
                        </div>
                        <div className="petterns-imges">
                            <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg' />
                        </div>
                        <h2 className='de-menu'>Best Specialties</h2>
                    </div>

                    <div className="best-inner">
                    <Slider ref={sliderRef} {...settings}>
                        <div className="card-first  ">
                            <div className='cross-patterns'>
                                <div className="first-img">
                                    <img src="https://mediacity.co.in/delici/static/media/menu-image-13.def913c8d8e23413a075.jpg" />
                                    <div className="blur-overlay"></div>
                                </div>
                            </div>
                            <h2 className='views'>Butternut pumpkin</h2>
                            <div className='contes'>
                                <p>
                                    Avocados with crab meat, red onion, crab salad stuffed bell pepper...
                                </p>
                            </div>
                            <div className="pri">
                                $15.00
                            </div>
                        </div>

                        <div className="card-first mar ">
                            <div className='cross-patterns'>
                                <div className="first-img">
                                    <img src="https://mediacity.co.in/delici/static/media/menu-image-14.cc993aeb8cae1e7c3ae7.jpg" />
                                    <div className="blur-overlay"></div>
                                </div>
                            </div>
                            <h2 className='views'>Opu Fish </h2>
                            <div className='contes'>
                                <p>
                                    Vegetables, cheeses, ground meats, tomato sauce, seasonings...
                                </p>
                            </div>
                            <div className="pri">
                                $12.00
                            </div>
                        </div>

                        <div className="card-first ">
                            <div className='cross-patterns'>
                                <div className="first-img">
                                    <img src="https://mediacity.co.in/delici/static/media/menu-image-11.7be629d8a04827b964cc.jpg" />
                                    <div className="blur-overlay"></div>
                                </div>
                            </div>
                            <h2 className='views'>Greek Salad</h2>
                            <div className='contes'>
                                <p>
                                    Avocados with crab meat, red onion, crab salad red bell pepper...
                                </p>
                            </div>
                            <div className="pri">
                                $39.00
                            </div>
                        </div>

                        <div className="card-first mar ">
                            <div className='cross-patterns'>
                                <div className="first-img">
                                    <img src="	https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg" />
                                    <div className="blur-overlay"></div>
                                </div>
                            </div>
                            <h2 className='views'>Tokusen Wagyu </h2>
                            <div className='contes'>
                                <p>
                                    Tomatoes, green bell pepper, sliced cucumber onion, olives...
                                </p>
                            </div>
                            <div className="pri">
                                $45.00
                            </div>
                        </div>
                    </Slider>
                </div>

                    <div className="box1" onClick={prevSlide}>
                        <SlArrowLeft className='arrow-icon' />
                    </div>
                    <div className="box2" onClick={nextSlide}>
                        <SlArrowRight className='arrow-icon2' />
                    </div>
                    <div className="menu-spe cent ">
                        <span className='btn-menu'>view all menu</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSpece;
