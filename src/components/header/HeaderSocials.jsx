import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
     <a href="https://www.linkedin.com/in/animesh-mandal-5b55b61a7/" target="_blank"><BsLinkedin/></a>
     <a href="https://github.com/animeshmandal4400" target="_blank"><FiGithub/></a>
     <a href="https://www.instagram.com/_a.n.im.e.s.h_/" target="_blank"><BsTwitter/></a>
     <a href="https://www.instagram.com/_a.n.im.e.s.h_/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials