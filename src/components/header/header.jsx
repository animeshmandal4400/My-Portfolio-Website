import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Animesh Mandal</h1>
        <h5 className="text-light typing" >And i'am   <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'Web Developer', 'Game Developer', 'Graphics Designer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h5>
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