import React from 'react'
import './skills.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiThealgorithms, SiTypescript } from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'

import { VscSymbolInterface, VscSymbolStructure } from 'react-icons/vsc'



const Skills = () => {
  return (
    <section id='skills'>
      <h2>What skills I have</h2>

      <div className=' skills_container'>

        <div>
          <article className='skills_details'>
            <AiFillHtml5 className='skill_icon' />
            <h4>HTML</h4>
          </article>
        </div>





        <div>
          <article className='skills_details'>
            <DiCss3 className='skill_icon' />
            <h4>CSS</h4>
          </article>
        </div>





        <div>
          <article className='skills_details'>
            <SiJavascript className='skill_icon' />
            <h4>JAVASCRIPT</h4>
          </article>
        </div>

        <div>
          <article className='skills_details'>
            <FaReact className='skill_icon' />
            <h4>REACT</h4>
          </article>
        </div>
        
        <div>
          <article className='skills_details'>
            <FaNodeJs className='skill_icon' />
            <h4>NODE JS</h4>
          </article>
        </div>

        <div>
          <article className='skills_details'>
            <SiTypescript className='skill_icon' />
            <h4>TYPESCRIPT</h4>
          </article>
        </div>

        <div>
          <article className='skills_details'>
            <VscSymbolInterface className='skill_icon' />
            <h4>CHAKRA UI</h4>
          </article>
        </div>

        <div>
          <article className='skills_details'>
            <VscSymbolStructure className='skill_icon' />
            <h4>DSA</h4>
          </article>
        </div>


      </div>

    </section>
  )
}

export default Skills