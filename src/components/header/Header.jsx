import React from 'react'
import './header.css'
import RESUME from './RESUME'
import ME from '../../assets/프로필.jpg'
import HeaderSocial from './HeaderSocial'

const Hader = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'M</h5>
        <h1>SUJIN LEE</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <RESUME />
        <HeaderSocial />

        <div className="Me">
          <img src={ME} alt='me'/>
        </div>

        <a href="#contact" className="scroll_down">Scroll_Down</a>
      </div>

    </header>
  )
}

export default Hader