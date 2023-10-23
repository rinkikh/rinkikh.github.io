import React from 'react'
import './projects.css'
import PROJ from "../../Assets/indbuy.jpeg"
import PROJ_a from "../../Assets/Pharma.png"
import PROJ_b from "../../Assets/blackjack.png"
import { SiNetlify } from "react-icons/si"
import { AiOutlineGithub } from "react-icons/ai"


const Projects = () => {
  return (
    <section id='projects'>
      <h2>MY PROJECTS</h2>

      <div className="project_container">

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