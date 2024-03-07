import React from 'react'
import "./Specialdish.css"
import bouncelogo from "../Assets/bouncelogo.png"
const SpecialDish = () => {
  return (
    <>
      <section className='specialdish-section'>

        <div className="specialdish-main">
          <div className="bottom-food">
            <img src='https://mediacity.co.in/delici/static/media/image-3.231c7c2566e54a4f4df4.png' />
          </div>
          <div className="center-img">
            <img src='https://mediacity.co.in/delici/static/media/bg-4.1919f4a0eda1ea89c32f.png' />
          </div>
          <div className="container-img">
            <div className="bg-img"></div>
            <div className="content-special">
            <span className='bounce'>
              <img src={bouncelogo}/>
            </span>
            <div className="content-right">
              <div className="subtitle">
                 <div className="inner">
                  <span>SPECIAL DISH</span>
                  <div className="patterns-img">
                    <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg'/>
                  </div>
                  <h2 className='lob'>Lobster Tortellini</h2>
                  <div className="pera">
                    <p>Lorem Ipsum is simply dummy text of the printingand<br />typesetting industry lorem Ipsum has been the industrys<br />standard dummy text ever since the when an unknown<br />printer took a galley of type.</p>
                  </div>
                  </div>
                  <div className="price">
                    <span className='old'>$40.00</span>
                    <span className='new'> $20.00</span>
                  </div>
                  <div className="menu-spe mar">
                    <span className='btn-menu'>view all menu</span>
                  </div>
              </div>
            </div>
          </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default SpecialDish
