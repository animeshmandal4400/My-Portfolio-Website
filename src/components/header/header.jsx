import React from 'react'
import './header.css'
import CTA from './CTA'
/*import HeaderSocials from './HeaderSocials'*/
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>Animesh Mandal</h1>
        <h5 className="text-light">And i'am a Web Developer</h5>
        <CTA />
     
      </div>
      <div>

      </div>
    </header>
  )
}

export default header