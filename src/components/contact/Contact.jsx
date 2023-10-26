import React from 'react'
import './contact.css'
import {FaUserAlt} from 'react-icons/fa'
import {MdMarkEmailRead} from 'react-icons/md'
import {BiMobileVibration} from 'react-icons/bi'

const Contact = () => {
  return (
    <section id = "contact">
      <h2>Contact</h2>

      <div className='contact_details'>
        <div className="info_box">
          <FaUserAlt/>
          <p>Rinki Singh</p>
        </div>

        <div className="info_box">
          <MdMarkEmailRead/>
          <p>rinki9414@gmail.com</p>
        </div>

        

      </div>
    </section>
  )
}

export default Contact