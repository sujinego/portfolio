import React from 'react'
import './experience.css'
import {AiOutlineCheckSquare} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skilled I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend"> 
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience_backend"> 
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>JAVA</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <AiOutlineCheckSquare />
              <h4>JSP</h4>
              <small className="text-light">Experienced</small>
            </article>
            
          </div>
        </div>
        </div>
      </section>
  )
}

export default Experience