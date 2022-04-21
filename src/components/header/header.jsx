import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
<script src='https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js'></script>

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, i'm</h5>
        <h1>Animesh Mandal</h1>
        <h5 className="text-light">And i'am Web Developer</h5>
        <CTA />
        <div className="ME">
          <img src={ME} alt="" />
        </div>
        <HeaderSocials/>
        <div>
        <a href="#footer" className='scroll__down'>Scroll Down</a>
      </div>
      </div>
      
    </header>
  )
}

export default header