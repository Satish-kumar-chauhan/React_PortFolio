import React from 'react';
import UserImg from '../assets/images/userProfile.jpg';
import {NavLink} from 'react-router-dom'
export default function home() {
  return (
    <div className='section'>
      <div className="sectionSub home">
        <div className="homeInner">
          <div className="myDescription">
            <h4>Hello, My name is <span className='artistName'>Satish Chauhan</span></h4>
            <h4 className="typing">I'm a <span>web developer</span></h4>
            <p>I'm a web UX / Front-end developer with extensive experience for over 2 and half year. My experience is to create and website design, Javascript functionality and many more...</p>
            <button><NavLink to='/about'>More About Me</NavLink></button>
          </div>
          <div className="myImg">
            <div className="myImgInner">
            <img src={UserImg} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
