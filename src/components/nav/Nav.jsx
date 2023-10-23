import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlineSettingsSuggest } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import { BiMessageAltDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '# ' ? 'active' : ''}><FaHome /></a>

      <a href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><FaUserCircle /></a>

      <a href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}><MdOutlineSettingsSuggest /></a>

      <a href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}><CgWebsite /></a>

      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail /></a>

    </nav>
  )
}

export default Nav