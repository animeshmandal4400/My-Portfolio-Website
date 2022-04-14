import React from 'react'
import Header from './components/header/header.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
    <Header />
    <About/>
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App