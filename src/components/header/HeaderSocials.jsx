import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/rinki-singh-a01bb8257/"
                target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/rinkikh"
                target="_blank"><BsGithub /></a>

        </div>
    )
}

export default HeaderSocials