import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import "./Navbar1.css";
import { LuClock } from "react-icons/lu";
import { GoDiamond } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { TbMail } from "react-icons/tb";
const Navbar1 = () => {
    return (
        <>
            <header className='header-section'>
                <div className="header-main">
                    <div className="header-first">

                        <div className="left-top">
                            <ul className='left-ul'>
                                <li className='left1'> <span><FaLocationDot /></span>
                                    Restaurant St, Delicious City, London 9578, UK</li>
                                <li className='left2'>
                                    <span className='dia'><GoDiamond /></span>
                                    <span className='clock'><LuClock /></span>
                                       Daily : 8.00 am to 10.00 pm
                                </li>
                            </ul>
                        </div>

                        <div className="right-top">
                            <ul className='right-ul'>
                                <li className='right1'>
                                    <span><IoCallOutline /> </span>
                                    <a href=''> +1 123 456 7890</a>
                                   
                                </li>
                                <li className='right'>
                                    <span className='dia'> <GoDiamond /> </span> 
                                    <span className='clock'><TbMail  /></span>
                                    <a href=''>booking@restaurant.com</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </header>

        </>
    )
}

export default Navbar1
