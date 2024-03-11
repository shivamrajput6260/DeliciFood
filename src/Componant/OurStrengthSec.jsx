import React from 'react'
import "./Ourstrength.css";
import Leaf from "../Assets/Leaf.png";
const OurStrengthSec = () => {
  return (
    <>
          <div className="bestspace-section">
              <div className="best-main">
                  <div className="best-container">
                      <div className="title-box">
                          <div className="subtitles">
                              <span>WHY CHOOSE US
</span>
                          </div>
                          <div className="petterns-imges">
                              <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg' />
                          </div>
                          <h2 className='de-menu'>Our Strength</h2>
                      </div>
                      <div className="cards-one">
                          <div className='cros-patterns'>
                              <div className="first-image">
                                  <img src={Leaf} alt="Leaf Image" className="image" />
                              </div>
                          </div>
                          <h2 className='hygi'>Hygienic Food</h2>
                          <div className='contes'>
                              <p>
                                  Lorem Ipsum is simply dummy<br /> printing and typesetting.
                              </p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
    </>
  )
}

export default OurStrengthSec
