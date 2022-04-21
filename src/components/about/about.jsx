import React from 'react'
import './about.css'
import ME from '../../assets/aboutMe.jpg';
const About = () => {
  return (
    <section id='about'> 
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="about image" />
      </div>
      </div>
      
    <div className="about__content">
      
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odit natus quam nisi enim eaque, perferendis laborum voluptates quod minus dolorem eveniet assumenda pariatur sint exercitationem facere accusamus repellendus at! 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempore ullam nobis aspernatur, aliquid reprehenderit ipsum et sunt! Accusamus unde cumque totam provident dolor voluptatem expedita quia earum nostrum doloremque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi deserunt ipsum quis ex. Sapiente alias sequi placeat odit laboriosam, error ut ratione saepe aut quas doloremque aspernatur mollitia nesciunt? Explicabo.</p>
      
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
     </div>
     
    </div>
    </section>

  )
}

export default About

