import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>what skill i've</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='skills'>
          <h3>Skills</h3> 
          <div className='experience_content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NODE.JS</h4>
              <small className='text-light'>intermidiate</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>

  )
}

export default experience