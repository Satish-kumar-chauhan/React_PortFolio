import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome,FaUser,FaComment,FaListUl, FaBriefcase,FaBars} from 'react-icons/fa'
export default function Sidenav() {
    const handleToogleMenu = (e) =>{
    document.querySelector(".aside").classList.toggle('active')
    }
  return (
    <div className='aside'>
        <div className="smallScreenOpen" onClick={handleToogleMenu}>
            <FaBars />
        </div>
        <div className='logo'>
            <NavLink to="/">S<span>atish</span></NavLink>
        </div>
        <ul className="navLinks">
            <li>
                <NavLink to="/"><FaHome /> Home</NavLink>
            </li>
            <li>
                <NavLink to="/about"><FaUser /> About</NavLink>
            </li>
            <li>
                <NavLink to="/skills"><FaListUl /> Skills</NavLink>
            </li>
            <li>
                <NavLink to="/services"><FaBriefcase /> Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact"><FaComment /> Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}
