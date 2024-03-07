import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SlArrowLeft className="arrow-icon" />,
        nextArrow: <SlArrowRight className="arrow-icon2" />,
    };
    return (
        <>
            <div className="testmonial-section">
                <div className="test-main">
                    <div className="test-bg"></div>
                    <div className="test-inner">
                        <div className="inner-cont">
                            <div className="quott">
                                ,,
                            </div>
                            <div className="peras-cont">
                                I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
                            </div>
                            <div className="sepater">
                                <span className='sap-btn'></span>
                                <span className='sap-btn'></span>
                                <span className='sap-btn'></span>
                            </div>
                            <div className="thumb-caro">

                                <div className="wrapper">
                                    <Slider {...settings}>
                                        <div className="per-first borders ">
                                            <img src='	https://mediacity.co.in/delici/static/media/author-thumb-3.e83894eedcbad091c25e.jpg' />
                                        </div>
                                        <div className="per-second
                                        borders">
                                            <img src='	https://mediacity.co.in/delici/static/media/author-thumb-1.aab523c54dd89962db1f.jpg' />
                                        </div>
                                        <div className="per-third borders">
                                            <img src='		https://mediacity.co.in/delici/static/media/author-thumb-2.c4665c85dc4694b6b4df.jpg' />
                                        </div>
                                    </Slider>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
