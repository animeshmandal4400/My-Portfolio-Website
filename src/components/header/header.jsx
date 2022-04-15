import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, i'm</h5>
        <h1>Animesh Mandal</h1>
        <h5 className="text-light">And i'am a Web Developer</h5>
        <CTA />
        <div className="ME">
          <img src={ME} alt="" />
        </div>
        <HeaderSocials/>
        <div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      </div>
      
    </header>
  )
}

export default header