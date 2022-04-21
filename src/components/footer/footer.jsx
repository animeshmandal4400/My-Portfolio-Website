import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer__logo'><img src={Logo} alt="" /></a>

    <ul className='parmalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className='footer__socials'>
      <a href=""><BsFacebook/></a>
      <a href="https://www.instagram.com/_a.n.im.e.s.h_/"><FaInstagram/></a> 
      <a href=""><BsTwitter/></a> 
    </div>
    </footer>
  )
}

export default Footer