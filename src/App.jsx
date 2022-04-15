import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App