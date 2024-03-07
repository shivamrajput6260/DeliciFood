import React, { useEffect } from 'react';
import "./StorySection.css";
import logo from "../Assets/logo.png";

const StorySection = () => {
  useEffect(() => {
    const text = document.querySelector('.text p');
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map((char, i) => `<span style="transform:rotate(${i * 6.1}deg)">${char}</span>`)
        .join("");
    }
  }, []);
  return (
    <>
      <section className='story-section'>

        <div className="story-main">
          <div className="left-img">
            <img src='https://mediacity.co.in/delici/static/media/bg-3.b3be8b2e8a3d049196ab.png' alt='bg-img' />
          </div>
          <div className="content">
            <div className="our-story">
              <div className='our'>
                our story
              </div>
              <div className="pattern-imgs">
                <img src='https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg' />
              </div>
              <h2 className='every'>Every Flavor <br /> Tells a Story</h2>
              <div className="pera">
                Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.
              </div>
              <div className="booking-info">
                <div className="book-thro">
                  Book Through Call<br />
                  <a href=''>
                    +80 (400) 123 4567
                  </a>

                  <div className=" read">
                    <span className='btn-read'>read more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-storyimg">
              <div className="first-imgs">
                <img src='https://mediacity.co.in/delici/static/media/image-1.661483ecb5620eb91605.jpg' alt='people-img' />
              </div>
              <div className="circle">
                <div class="img-logo">
                  <img src={logo} />
                </div>
                <div className="text">
                  <p>Fresh Enviornment . Quality Food .</p>
                </div>
              </div>
              <div className="img-cont">
                <div className="img-over">
                  <div className="cross-img">
                    <img className='img-1' src='https://mediacity.co.in/delici/static/media/pattern-8.c0d26fdff7722980ba6f.svg' alt='cross-pattern-img' />
                  </div>
                  <div className="second-img">
                    <img src='	https://mediacity.co.in/delici/static/media/image-2.1561d09bd2af250694ab.jpg' alt='man-img' />
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

export default StorySection
