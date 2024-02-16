import React, { useState } from 'react'
import "./Header.css";
// import { IoMenu } from 'react-icons/io5';
import { RxCrossCircled } from "react-icons/rx";
import { GoDiamond } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import Delicifood from "../Assets/Delicifood.png"
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);

  const [home, sethome] = useState(false)
  const homehandler = () => sethome(!home)

  const [menu1, setmenu1] = useState(false)
  const menuhandler = () => setmenu1(!menu1)

  const [pages, setpages] = useState(false)
  const pageshandler = () => setpages(!pages)

  const [subpage, setsubpage] = useState(false)
  const subpageshandler = () => setsubpage(!subpage)
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <>

      <div className="header-section">
        <div className="main-header">
          <div className="menu">
            <div onClick={() => setToggle(!toggle)} className='menu-inner'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={toggle ? "sidebar-show" : "sidebar-hide"}>
              <span className='close-icon' onClick={() => setToggle(!toggle)}> <RxCrossCircled /> </span>
              <div className="sidebar-inner">
                <div className='sidebar-img'>
                  <img src={Delicifood} />
                </div>
                <div className="inner-contant">
                  <div className="home-list">

                    <div class="dropdown">

                      <button className="dropbtn border" onClick={homehandler}>  <span className='home'><GoDiamond className='diamond-icon' />Home</span>   <SlArrowDown className='arrow' /></button>

                      <div className={home ? "dropdown-content" : "dropdown-content-none"}>
                        <ul>
                          <li className='menu__list border'> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>HOME 1 LEFT HEADER</span></a>
                          </li>

                          <li className='menu__list border'> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>HOME 1 CENTER HEADER</span></a></li>

                          <li className='menu__list border'> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>HOME 3 VIDEO HERO</span></a></li>
                        </ul>
                      </div>

                      {/* /////////////////////////// menu sttart////////////// */}

                      <button onClick={menuhandler} className="dropbtn border container">  <span><GoDiamond className='dia' /></span> <span className='menus' onClick={handleClick} >MENUS</span>   <SlArrowDown className='arrow ' /></button>



                      <div className={menu1 ? "dropdown-content" : "dropdown-content-none"}>
                        <ul>
                          <li className='menu__list border'>
                            <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>menu list 1</span></a>
                          </li>

                          <li className='menu__list border'>  <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>menu list 2</span></a>
                          </li>

                          <li className='menu__list border'> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>menu list 3</span></a>
                          </li>

                          <li className='menu__list border'> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>menu list 4</span></a>
                          </li>

                        </ul>
                      </div>

                      <li className=" border menu__list"><a
                        href="#home">  <GoDiamond className='menu__list__diamond' /><span className='list__containt'> ABOUT US</span> </a>
                      </li>

                      <li className=" border menu__list"><a
                        href="#home">  <GoDiamond className='menu__list__diamond' /><span className='list__containt'> OUR CHEFS</span> </a>
                      </li>

                      <button onClick={pageshandler} className="dropbtn border  container ">  <span ><GoDiamond className='dia' /></span> <span className='menus'>PAGES</span>   <SlArrowDown className='arrow' /></button>

                      <div className={pages ? "dropdown-content" : "dropdown-content-none"}>
                        <ul>
                          <li className='menu__list border' > <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>DROPDOWN MENU 1 </span></a>
                          </li>

                          <li className='menu__list border' > <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>DROPDOWN MENU 2</span></a><br /></li>

                          <li className='menu__list border con-bor' > <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>DROPDOWN MENU3</span></a><br /></li>

                          <li >
                            <button onClick={subpageshandler} className="dropbtn container con-bor"> <a href="#home"> <GoDiamond className='dia' /><span className='menus'>DROPDOWN MENU 4</span><SlArrowDown className='arrow4' /> </a> </button>

                            <ul className={subpage ? "subpages" : "subpages-display-none"}>
                              <li className='menu__list con-bor '> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>DROPDOWN MENU LEVEL 2</span></a><br /></li>

                              <li className='menu__list con-bor'> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>DROPDOWN MENU LEVEL 2</span></a></li>

                              <li className='menu__list con-bor'> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt'>DROPDOWN MENU LEVEL 3</span></a></li>
                            </ul>

                          </li>

                          <li className='menu__list  '> <a href="#home"> <GoDiamond className='menu__list__diamond' /><span className='list__containt pad '>DROPDOWN LOREM 5</span></a></li>
                        </ul>
                      </div>

                      <li className=" border con-bor menu__list"><a
                        href="#home">  <GoDiamond className='menu__list__diamond' /><span className='list__containt'> CONTACT</span> </a>
                      </li>
                    </div>

                  </div>
                </div>
                <div className="visit">
                  <h2>Visit Us</h2>
                  <p>Restaurant St, Delicious City,<br />
                    <span>London 9578, UK</span></p>
                  <h3>Open: 9.30 am - 2.30pm</h3>
                  <a href='booking@domainame.com'>booking@domainame.com</a>
                  <p><GoDiamond className='visit-dia' /></p>
                  <p className='book'>Booking Request</p>
                  <p className='cont'>+88-123-123456</p>
                </div>
              </div>
            </div>
          </div>

          <div className="header-cont">
            <img src={Delicifood} />
          </div>

          <div className="find">
            <span className='btn-find'>FIND A TABLE</span>
          </div>

        </div>
      </div>



    </>
  )
}

export default Header
