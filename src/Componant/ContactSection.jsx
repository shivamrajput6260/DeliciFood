import React from 'react'
import "./Contactsection.css";
import { VscAccount } from "react-icons/vsc";
import { SlArrowDown } from "react-icons/sl";
import { SlClock } from "react-icons/sl";
import { FaUser, FaAngleDown, FaRegClock } from "react-icons/fa"
const ContactSection = () => {
    return (
        <section className='contact-section'>
            <div className="contact-main">
                <div className="inner-contianer">
                    <div className="online-res">
                        <div className="titles">
                            <h1>
                                Online Reservation
                            </h1>

                            <div className="requ-info">
                                Booking request
                                <span>
                                    +88-123-123456
                                </span>
                                or fill out the order form
                            </div>
                            <form >
                                <div className='contact__form'>


                                    <div className='phone'>
                                        <input type="text" placeholder='name' />
                                        <input type="number" placeholder='phone' />
                                    </div>
                                    <div className='user_person'>
                                        <div className='user'>
                                            <select >
                                                <option value="someOption">1 Person</option>
                                                <option value="otherOption"> 2 Person</option>
                                                <option value="someOption"> 3 Person</option>
                                                <option value="someOption"> 4 Person</option>
                                                <option value="someOption">5 Person</option>
                                                <option value="someOption">6 Person</option>
                                                <option value="someOption">7 Person</option>

                                            </select>
                                            <div className='flexii'>
                                                <span><FaUser className='fa-user' /></span>

                                            </div>
                                        </div>

                                        <div className='date__field'>
                                            <input type="date" placeholder=""
                                            />
                                            <p className='datesss'>DD-MM-YY <span><FaAngleDown className='fa-Arrow' /></span> </p>
                                        
                                            <div>
                                                
                                            </div>
                                        </div>
                                        <div className='time__field'>


                                            <select >
                                                <option value="someOption">08:00 am</option>
                                                <option value="otherOption">09:00 am</option>
                                                <option value="someOption"> 10:00 am</option>
                                                <option value="someOption">11:00 am</option>
                                                <option value="someOption">12:00 pm</option>
                                                <option value="someOption">01:00 pm</option>
                                                <option value="someOption">02:00 pm</option>
                                                <option value="someOption">03:00 pm</option>
                                                <option value="someOption">04:00 pm</option>
                                                <option value="someOption">05:00 pm</option>
                                                <option value="someOption">06:00 pm</option>
                                                <option value="someOption">07:00 pm</option>
                                                <option value="someOption">08:00 pm</option>
                                                <option value="someOption">09:00 pm</option>
                                                <option value="someOption">10:00 pm</option>
                                            </select>
                                            <div className='clock-icon'>
                                                <span><FaRegClock className='Fa-clock' /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='message__fields'>
                                    <div className='message__field'>
                                        <input type="text" name="text" placeholder="Message" />
                                    </div>

                                    <div className="  cont-btn ">
                                        <span className='btn-menus'>BOOK A TABLE </span>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="cont-us">
                        <div className="online-cont">
                            <div className="cont-data">
                                <h1>
                                    Contact Us
                                </h1>

                                <div className="requ-infor">
                                    <div className='req-book'>Booking request
                                    </div>
                                    
                                    <a href='' className='num'>
                                        +88-123-123456
                                    </a>
                                    <div className='squre-icon'>
                                        <span></span>
                                    </div>
                                   
                                </div>
                                </div>
                                </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactSection

