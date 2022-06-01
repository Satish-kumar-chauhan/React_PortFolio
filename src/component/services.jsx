import React from 'react'
import {FaMobile,FaDesktop,FaPalette,FaHtml5,FaSearch,FaSpeakerDeck} from 'react-icons/fa'
export default function services({phead}) {
  return (
    <div className='section'>
      {phead}
      <div className="sectionSub serviceSub">
        <div className="service-item">
          <div className="service-item-inner">
            <div className='icon'><FaMobile /></div>
            <p><strong>Web Design</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a repudiandae dolores quasi cum quibusdam?  Minima voluptate consequatur natus ipsa debitis vitae!</p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-item-inner">
          <div className='icon'><FaDesktop /></div>
            <p><strong>Web Design</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a repudiandae dolores quasi cum quibusdam?  Minima voluptate consequatur natus ipsa debitis vitae!</p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-item-inner">
          <div className='icon'><FaPalette /></div>
            <p><strong>Web Design</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a repudiandae dolores quasi cum quibusdam?  Minima voluptate consequatur natus ipsa debitis vitae!</p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-item-inner">
          <div className='icon'><FaHtml5 /></div>
            <p><strong>Web Design</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a repudiandae dolores quasi cum quibusdam?  Minima voluptate consequatur natus ipsa debitis vitae!</p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-item-inner">
          <div className='icon'><FaSearch /></div>
            <p><strong>Web Design</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a repudiandae dolores quasi cum quibusdam?  Minima voluptate consequatur natus ipsa debitis vitae!</p>
        </div>
        </div>
        <div className="service-item">
          <div className="service-item-inner">
          <div className='icon'><FaSpeakerDeck /></div>
            <p><strong>Web Design</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a repudiandae dolores quasi cum quibusdam?  Minima voluptate consequatur natus ipsa debitis vitae!</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
