import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/img1.jpg'
import AVTR2 from '../../assets/img2.jpg'
import AVTR3 from '../../assets/img3.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
    {
        avatar: AVTR1,
        name: 'Name1',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum repudiandae dolore fugit, rem rerum laboriosam error velit vero quis accusamus eaque, quidem, debitis ducimus sit laudantium omnis ea sunt.'
    },
    {
        avatar: AVTR2,
        name: 'Name2',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum repudiandae dolore fugit, rem rerum laboriosam error velit vero quis accusamus eaque, quidem, debitis ducimus sit laudantium omnis ea sunt.'
    },
    {
        avatar: AVTR3,
        name: 'Name3',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum repudiandae dolore fugit, rem rerum laboriosam error velit vero quis accusamus eaque, quidem, debitis ducimus sit laudantium omnis ea sunt.'
    },
    

]




const Testimonials = () => {
  return (
      <section id='testimonials'>
          <h5>Review from clients</h5>
          <h2>Testimonials</h2>

          <Swiper className="container testimonials__container"
             modules={[Pagination,]}
             spaceBetween={40}
             slidesPerView={1}
             pagination={{ clickable: true }}
          >
              {
                  data.map(({avatar,name, review}, index) => {
                      return (
                          <SwiperSlide key={index} className="testimonials">
                              <div className='client__avatar'>
                                <img src={avatar} alt="" />
                              </div>
                              <h5 className='client__name'> {name} </h5>
                              <small className='client__review'>{review}</small>
                          </SwiperSlide>
                      )
                  } )
              }
      </Swiper>
      </section>
     
  )
}

export default Testimonials