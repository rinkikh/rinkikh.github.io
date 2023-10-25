import React from 'react'
import './projects.css'
import PROJ from "../../Assets/indbuy.jpeg"
import PROJ_a from "../../Assets/Pharma.png"
import PROJ_b from "../../Assets/blackjack.png"
import PROJ_c from "../../Assets/weather.png"
import PROJ_d from "../../Assets/cart.png"


import { SiNetlify } from "react-icons/si"
import { AiOutlineGithub } from "react-icons/ai"


const Projects = () => {
  return (
    <section id='projects'>
      <h2>MY PROJECTS</h2>

      <div className="project_container">

        <div className='project_details'>
          <h3>Add-to-cart Application</h3>
          <img src={PROJ_d} alt="" />
          <p>Adding items to cart and displaying it on screen, deleting any item
            no longer needed with single click,storing and retrieving data on Firebase , real-time database by Google.</p>
          <h5>HTML | CSS | JAVASCRIPT</h5>
          <div className='links'>
            <a href="https://add-to-cart-mobapp.netlify.app/" target="_blank">
              <SiNetlify size='30px' />
            </a>
            <a href="https://github.com/rinkikh/mobile_app" target="_blank">
              <AiOutlineGithub size='30px' />
            </a>
          </div>

        </div>

        <div className='project_details'>
          <h3>Weather Application</h3>
          <img src={PROJ_c} alt="" />
          <p>Accurate Weather Data prediction uses OpenWeaher API to fetch real-time data
            and provide global coverage, detailed weather insights from temperature
            and humidity to wind speed, with changing climate icons as per climate with responsive design(desktop and mobile-friendly)</p>
          <h5>HTML | CSS | JAVASCRIPT</h5>
          <div className='links'>
            <a href="https://weather-app-cli.netlify.app/" target="_blank">
              <SiNetlify size='30px' />
            </a>
            <a href="https://github.com/rinkikh/weather-app" target="_blank">
              <AiOutlineGithub size='30px' />
            </a>
          </div>

        </div>

        <div className='project_details'>
          <h3>Ayu-pharma</h3>
          <img src={PROJ_a} alt="" />
          <p>Ayu-pharma is an online selling medicine website,delivering authentic medicines pan India</p>
          <h5>HTML | CSS | JAVASCRIPT</h5>
          <div className='links'>
            <a href="https://grand-manatee-04a9e0.netlify.app/" target="_blank">
              <SiNetlify size='30px' />
            </a>
            <a href="https://github.com/rinkikh/PharmEasy-Clone" target="_blank">
              <AiOutlineGithub size='30px' />
            </a>
          </div>

        </div>

        <div className='project_details'>
          <h3>IndustryBuying</h3>
          <img src={PROJ} alt="" />
          <p>IndustryBuying is an e-commerce website which sells machinery related tools and equipments across India</p>
          <h5>HTML | CSS | REACT | CHAKRA UI</h5>
          <div className='links'>
            <a href="https://industrybuying.netlify.app/" target="_blank">
              <SiNetlify size='30px' />
            </a>
            <a href="https://github.com/rinkikh/mindless-wool-6764" target="_blank">
              <AiOutlineGithub size='30px' />
            </a>
          </div>

        </div>

        <div className='project_details'>
          <h3>BLACK JACK </h3>
          <img src={PROJ_b} alt="" />
          <p>An interesting online Black Jack game developed using concepts of JavaScript.</p>
          <h5>HTML | CSS | JAVASCRIPT</h5>
          <div className='links'>
            <a href="https://clever-sfogliatella-625252.netlify.app/" target="_blank">
              <SiNetlify size='30px' />
            </a>
            <a href="https://github.com/rinkikh/Scrimba-Projects/tree/main/Black-jack%20game" target="_blank">
              <AiOutlineGithub size='30px' />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects