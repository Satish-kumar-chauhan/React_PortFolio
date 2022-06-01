import React from 'react';
import {FaMoon,FaPalette} from 'react-icons/fa';
import {FcServices} from 'react-icons/fc'
export default function themeChanger() {
    const handleThemeChange = (e) =>{
        document.documentElement.style.setProperty('--skin-color', `${e.target.style.backgroundColor}`);
        document.querySelectorAll('.themespan').forEach((d)=>d.classList.remove("active"))
        e.target.classList.add('active');

    }
    const handleThemeOpener = (e) =>{
        document.querySelector('.themeChanger').classList.toggle("active")
    }
    const handleDarkMode = () =>{
        document.querySelector('.aside').classList.toggle('dark');
        document.querySelector('.main-content').classList.toggle('dark');
        document.querySelector('.themeChanger').classList.toggle('dark');
    }
  return (
    <div className='themeChanger'>
        <div className="themeChangerInner">
        <div className="modeChanger">
                <FcServices onClick={handleThemeOpener}/>
                <FaMoon onClick={handleDarkMode} style={{color:'#fff'}}/>
            </div>
            <div className="colorChanger">
                <span className="themespan active" onClick={handleThemeChange} style={{backgroundColor:'#F24C4C'}}></span>
                <span className="themespan" onClick={handleThemeChange} style={{backgroundColor:'#ff6f05'}}></span>
                <span className="themespan" onClick={handleThemeChange} style={{backgroundColor:'#249583'}}></span>
                <span className="themespan" onClick={handleThemeChange} style={{backgroundColor:'#0b52c0'}}></span>
                <span className="themespan" onClick={handleThemeChange} style={{backgroundColor:'#ff56b8'}}></span>
            </div>
        </div>
    </div>
  )
}
