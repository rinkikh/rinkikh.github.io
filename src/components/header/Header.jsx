import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../Assets/propic.jpeg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rinki Singh</h1>
        <h3 className='text-light'>Software Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        {/* <a href="#contact" className='scroll_down'>Scroll Down</a> */}

      </div>
    </header>)
}

export default Header