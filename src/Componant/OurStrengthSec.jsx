import React from 'react'
import "./Ourstrength.css";
import Leaf from "../Assets/Leaf.png";
import temple from "../Assets/temple.png";
import conticon from "../Assets/conticon.png";
import chefsicon from "../Assets/chefsicon.png";
const OurStrengthSec = () => {
  return (
    <>
          <div className="strength-section">
              <div className="strength-main">
              <div className="left-our">
                      <img src='	https://mediacity.co.in/delici/static/media/bg-8.11bc61489e11b03a92c1.png'/>
              </div>
                  <div className="right-our">  
                      <img src='	https://mediacity.co.in/delici/static/media/bg-7.b534b54c0ed20ec92dcf.png
' />
                  </div>
                  <div className="strengtht-container">
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
                      <div className="our-card">
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
                      <div className="cards-one back">
                          <div className='cros-patterns'>
                              <div className="first-image">
                                      <img src={temple} alt="Leaf Image" className="image" />
                              </div>
                          </div>
                              <h2 className='hygi'>Fresh Environment</h2>
                          <div className='contes'>
                              <p>
                                      Lorem Ipsum is simply dummy<br/> printing and typesetting.
                              </p>
                          </div>
                      </div>
                      <div className="cards-one">
                          <div className='cros-patterns'>
                              <div className="first-image">
                                      <img src={chefsicon} alt="Leaf Image" className="image" />
                              </div>
                          </div>
                              <h2 className='hygi'>Skilled Chefs</h2>
                          <div className='contes'>
                              <p>
                                  Lorem Ipsum is simply dummy<br /> printing and typesetting.
                              </p>
                          </div>
                      </div>
                      <div className="cards-one back">
                          <div className='cros-patterns'>
                              <div className="first-image">
                                      <img src={conticon} alt="Leaf Image" className="image" />
                              </div>
                          </div>
                              <h2 className='hygi'>Event & Party</h2>
                          <div className='contes'>
                              <p>
                                  Lorem Ipsum is simply dummy<br /> printing and typesetting.
                              </p>
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default OurStrengthSec
