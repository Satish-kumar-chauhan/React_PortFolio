import React from 'react'
import {FaPhone,FaLocationArrow,FaGlobe} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr'
export default function contact({phead}) {
  return (
    <div className='section'>
      {phead}
      <div className="sectionSub contact">
        <div className="contactInner">
          <div className="contactData">
            <h4>Have you any Question?</h4>
            <p>I,M AT YOUR SERVICE</p>
            <div className="contactWay">
              <div className="contactWayItem">
                <div className="icon">
                  <FaPhone />
                </div>
                <p><strong>Call us on</strong></p>
                  <p>+91 9416-748-749</p>
              </div>
              <div className="contactWayItem">
                <div className="icon">
                  <FaLocationArrow />
                </div>
                <p><strong>Call us on</strong></p>
                  <p>+91 9416-748-749</p>
              </div>
              <div className="contactWayItem">
                <div className="icon">
                  <GrMail />
                </div>
                <p><strong>Call us on</strong></p>
                  <p>+91 9416-748-749</p>
              </div>
              <div className="contactWayItem">
                <div className="icon">
                  <FaGlobe />
                </div>
                <p><strong>Call us on</strong></p>
                  <p>+91 9416-748-749</p>
              </div>
            </div>
            <div className="contactForm">
              <h4>SEND ME AN EMAIL</h4>
              <p>I'M VERY RESPONSIVE TO MESSAGES</p>
              <div className="form">
                <form action="">
                  <div>
                  <input type="text" placeholder='Enter your name'/>
                  <input type="email" placeholder='Enter your mail'/>
                  </div>
                  <textarea placeholder='Enter your message'></textarea>
                  <input type="submit" value="Send Message" />
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
