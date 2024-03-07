import React from 'react'
import "./Offer.css"
const Offer = () => {
    return (
        <>
            <section className='offer-section'>
                <div className="offer-inner">
                    <div className=" right-tops">
                        <img src='https://mediacity.co.in/delici/static/media/bg-2.8bae21f85dd8fdf29a8d.png' alt='leef-img' />
                    </div>

                    <div className="left-bot">
                        <img src='https://mediacity.co.in/delici/static/media/bg-1.8f7891ade2cf907c12b1.png' alt='leef-img' />
                    </div>


                    <div className=" offer-content">
                        <div className="offer-title">
                            FLAVORS FOR ROYALTY
                        </div>
                        <div className="pattern-img">
                            <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg' alt='pattern-img' />
                        </div>
                        <div className="inner-content">
                            We Offer Top Notch
                        </div>
                        <div className='para-con'>
                            <p >Lorem Ipsum is simply dummy text of the printing and</p>
                            <p >typesetting industry lorem Ipsum has been the</p>
                            <p >industrys standard dummy text ever.</p>
                        </div>
                    </div>
                </div>



                <div div className="offer-card">

                    <div className="first-card ">
                        <div className='cross-pattern'>
                            <div className='first__img'>
                                <img src="https://mediacity.co.in/delici/static/media/pattern-8.c0d26fdff7722980ba6f.svg" />
                            </div>
                            <div className="first-img11">
                                <img src='https://mediacity.co.in/delici/static/media/offer-image-1.c020474aea0ed9a09d2a.jpg' />
                            </div>
                        </div>
                        <h3>Breakfast</h3>
                        <div className='view'>
                            <span>view Menu</span>
                        </div>
                    </div>

                    <div className="first-card second">
                        <div className='cross-pattern'>
                            <div className='first__img'>
                                <img src="https://mediacity.co.in/delici/static/media/pattern-8.c0d26fdff7722980ba6f.svg" />
                            </div>
                            <div className="first-img11">
                                <img src=	'https://mediacity.co.in/delici/static/media/offer-image-2.d655d2ba6f4b2c6f7ac9.jpg' />
                            </div>
                        </div>
                        <h3>Appetizers</h3>
                        <div className='view'>
                            <span>view Menu</span>
                        </div>
                    </div>

                    <div className="first-card ">
                        <div className='cross-pattern'>
                            <div className='first__img'>
                                <img src="https://mediacity.co.in/delici/static/media/pattern-8.c0d26fdff7722980ba6f.svg" />
                            </div>
                            <div className="first-img11">
                                <img src='https://mediacity.co.in/delici/static/media/offer-image-3.2220579532c7ff25ef9c.jpg' />
                            </div>
                        </div>
                        <h3>Drinks</h3>
                        <div className='view'>
                            <span>view Menu</span>
                        </div>
                    </div>

                </div>



            </section>

        </>
    )
}

export default Offer
