import React from 'react'
import './about.css'
import ME from '../../assets/증명사진.jpg'
import {FaAward} from 'react-icons/fa' 
import {VscFolderLibrary} from 'react-icons/vsc' 


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="내 이미지"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nisi unde delectus qui quia recusandae tempore, iusto nemo, 
            autem officia doloremque, distinctio sunt voluptatum quae necessitatibus culpa? 
            Possimus cupiditate non eum?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
      </section>
  )
}

export default About