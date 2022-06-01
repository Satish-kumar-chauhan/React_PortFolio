import React from 'react'

export default function skills({phead}) {
  const skillItem = [
    {
      skillName:'HTML',
      knowledge:'80%'
    },
    {
      skillName:'CSS',
      knowledge:'80%'
    },
    {
      skillName:'BOOTSTRAP',
      knowledge:'80%'
    },
    {
      skillName:'JAVASCRIPT',
      knowledge:'80%'
    },
    {
      skillName:'JQUERY',
      knowledge:'80%'
    },
    {
      skillName:'REACT',
      knowledge:'80%'
    },
    {
      skillName:'REACT_REDUX',
      knowledge:'80%'
    },
    {
      skillName:'MATERIAL UI',
      knowledge:'80%'
    },
  ]
  return (
    <div className='section'>
      {phead}
      <div className="sectionSub skills">
        <div className="skillsInner">
          {
            skillItem.map((skill,index)=>{
              return <div key={index} className="skillItem">
              <div className="progress">
                <div className="progressItemDetail">
                  <span>{skill.skillName}</span><span>{skill.knowledge}</span>
                </div>
                <progress value='80' max='100'></progress>
              </div>
            </div>
            })
          }
          
        </div>
      </div>
    </div>
  )
}
