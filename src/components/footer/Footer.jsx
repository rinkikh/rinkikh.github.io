import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer'>
            <h2>Find me on</h2>
            <div class="social">
                <a href="https://www.linkedin.com/in/rinki-singh-a01bb8257/"
                    target="_blank"><BsLinkedin size='30px' /></a>
                <a href="https://github.com/rinkikh"
                    target="_blank"><BsGithub size='30px' /></a>
            </div>

            <div >
               <p class="copyright"> Designed and developed by Rinki Singh</p>
        </div>
        </div >
    )
}

export default Footer