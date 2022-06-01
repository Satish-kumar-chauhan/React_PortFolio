import React from 'react'

export default function about({phead}) {
  return (
    <div className='section'>
    {phead}  
    <div className="sectionSub about">
      <h4>I'm Satish Kumar Chauhan (UX / Front-End Developer)</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vitae labore quae veniam totam voluptatibus nesciunt dolorum ipsam, reprehenderit ad ducimus numquam quod fuga tempore, nemo cum similique dignissimos ratione?</p>
      <div className="myDetails">
        <div className="personalDetails">
          <div className="personDetailsInner">
          <div className="pDetailItem">
            <p><strong>Birthday:</strong><span> 05 April 1996</span></p>
          </div>
          <div className="pDetailItem">
            <p><strong>Age:</strong><span> 26 Years</span></p>
          </div>
          <div className="pDetailItem">
            <p><strong>Website:</strong><span> github</span></p>
          </div>
          <div className="pDetailItem">
            <p><strong>Email:</strong><span> chauhansatish6363@gmail.com</span></p>
          </div>
          <div className="pDetailItem">
            <p><strong>Phone:</strong><span> +91 9416-748-749</span></p>
          </div>
          <div className="pDetailItem">
            <p><strong>City:</strong><span> Palwal</span></p>
          </div>
          </div>
        </div>
        <div className="educationDetails">
          <div className="eDetailInner">
            <div className="eDetailItem">
              <h4>B.Tech (CSE)</h4>
              <p>2013 - 2018</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ex corporis dolores nobis exercitationem aliquid nisi iste, libero rerum amet est voluptatum quisquam minus ad laboriosam labore unde beatae maiores.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}
