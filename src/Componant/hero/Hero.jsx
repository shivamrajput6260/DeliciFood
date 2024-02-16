import React, { useState } from 'react';
import './hero.css'; // Assuming you have a separate CSS file;
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import bookicon from '../../Assets/bookicon.png'

const Hero = () => {
    const [slideNumber, setSlideNumber] = useState(0);

    const prevSlide = () => {
        setSlideNumber((prevSlideNumber) =>
            prevSlideNumber === 0 ? 2 : prevSlideNumber - 1
        );
    };

    const nextSlide = () => {
        setSlideNumber((prevSlideNumber) =>
            prevSlideNumber === 2 ? 0 : prevSlideNumber + 1
        );
    };

    return (
        <div className="main">
            <div className="slider" id="slider">

                <div className={slideNumber === 0 ? 'slides current' : 'slides'}>
                    <div className="slide-item">
                        <div className="slide-text">
                            <div className="hero-inner">
                                <div className="hero-content">
                                    <span className='hero-sp'>dilightful experience</span>
                                </div>

                                <div className="pattern-img">
                                    <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg' alt='pattern-img' />
                                </div>

                                <h1 className='flav'>
                                    <span>Flavors Inspired by</span> <br />
                                    <span className='sea'>the Seasons</span>
                                </h1>

                                <div className='text'>
                                    Come with family & feel the joy of mouthwatering food
                                </div>

                                <div class="button">
                                    <span className="simple-btn" >view our menu
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={slideNumber === 1 ? 'slides current' : 'slides'}>
                    <div className="slide-item">
                        <div className="slide-text">
                            <div className="hero-inner">
                                <div className="hero-content">
                                    <span className='hero-sp'>dilightful experience</span>
                                </div>
                                <div className="pattern-img">
                                    <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg' alt='pattern-img' />
                                </div>
                                <h1 className='flav'>
                                    <span>Flavors Inspired by</span> <br />
                                    <span className='sea'>the Seasons</span>
                                </h1>
                                <div className='text'>
                                    Come with family & feel the joy of mouthwatering food
                                </div>
                                <div class="button">
                                    <span className="simple-btn" target="_blank">view our menu
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={slideNumber === 2 ? 'slides current' : 'slides'}>
                    <div className="slide-item">
                        <div className="slide-text">
                            <div className="hero-inner">
                                <div className="hero-content">
                                    <span className='hero-sp'>dilightful experience</span>
                                </div>
                                <div className="pattern-img">
                                    <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg' alt='pattern-img' />
                                </div>
                                <h1 className='flav'>
                                    <span>Flavors Inspired by</span> <br />
                                    <span className='sea'>the Seasons</span>
                                </h1>
                                <div className='text'>
                                    Come with family & feel the joy of mouthwatering food
                                </div>
                                <div class="button">
                                    <span className="simple-btn" target="_blank">view our menu
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box1" >
                <SlArrowLeft className='arrow-icon' id="prev" onClick={prevSlide} />
            </div>
            <div className="box2">
                <SlArrowRight className='arrow-icon2' id="next" onClick={nextSlide} />
            </div>

            <div className='my-div-a'>
                <div className='book-rot'></div>
                <div className='book-icon'>
                    <img src={bookicon} />
                    <p > Book A Table</p>
                </div>
            </div>


        </div>
    );
};

export default Hero;

