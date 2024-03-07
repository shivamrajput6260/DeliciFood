import React, { useState } from 'react';
import './Menusection.css';
import { menuData, menuData1, menuData2, menuData3 } from './menuSectionData';

const MenuSection = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [showData, setShowData] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
    setShowData(index);

  };


  function renderData(mapData) {
    return (
      mapData.map((item, index) => (
        <div className="left-col" key={index}>
          <div className="my-effect">


            <div className='dish-img'>
              <div className="img-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
            <div>
              <div className="conts">
                <div className="title">
                  <h3 className='text-white'>{item.title} </h3>
                  <span>{item.new} </span>
                </div>
                <div className='line'></div>
                <div className="prices">
                  <h3 className='gold'>{item.price}</h3>
                </div>
              </div>
              <div className="texts desc">
                <p className='text-gray'>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))
    );
  }

  return (
    <>
      <section className='menu-section'>
        <div className="main-menu">
          <div className=" right-tops">
            <img src='https://mediacity.co.in/delici/static/media/bg-6.c1e0ae1fefd7dd68d5c6.png' alt='leef-img' />
          </div>

          <div className="left-bot">
            <img src='https://mediacity.co.in/delici/static/media/bg-5.aada0ae02d8a7acdeaf7.png' alt='leef-img' />
          </div>

          <div className="menu-container">
            <div className="title-box">
              <div className="subtitles">
                <span>SPECIAL SELECTION</span>
              </div>
              <div className="petterns-imges">
                <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg' />
              </div>
              <h2 className='de-menu'>Delicious Menu</h2>
              <div className='tabs-box menu-tabs'>
                <div className='buttons'>
                  <ul className='tab-buttons clearfix'>
                    <li className={`tab-btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}><span>MORNING</span></li>
                    <li className={`tab-btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}><span>WEEKDAY LUNCH</span></li>
                    <li className={`tab-btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}><span>DINNER</span></li>
                    <li className={`tab-btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}><span>WINES</span></li>
                  </ul>
                </div>

                <div className="tabs-content">
                  {showData === 0 ? renderData(menuData) : null}
                  {showData === 1 ? renderData(menuData1) : null}
                  {showData === 2 ? renderData(menuData2) : null}
                  {showData === 3 ? renderData(menuData3) : null}
                </div>
              </div>
            </div>
            <div className='open-timing'>
              <div class="hours">During winter daily from
                <span class="theme_color">7:00 pm</span> to
                <span class="theme_color">9:00 pm</span>
              </div>
              <div className="menu-spe center">
                <span className='btn-menu'>view all menu</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;
