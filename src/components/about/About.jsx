import React from 'react'
import './about.css'
import ME from '../../Assets/propic_b.jpg'

const About = () => {
  return (
    <section id="about">
      <h2>Get to know</h2>
      <div className='container about_container'>
        <div className='about_me-image'>
          <img src={ME} alt="" />
        </div>
  
      <div className='about_content'>
        <p>
          Front End Developer, Having  a unique combination of skills,with  in-depth knowledge of programming languages such as HTML, CSS,
          JavaScript, and React. Ability to design and develop complex web applications from scratch.
          Expertise in creating responsive and user-friendly interfaces like chakra UI, building highly functional and scalable web applications.
        </p>
        </div>
        </div>

        <a href="#contact"
          className='btn btn-primary'>Connect here!</a>

    </section>
  )
}

export default About