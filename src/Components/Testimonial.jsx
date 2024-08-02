import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';
import HeroImg from '../Assets/Backgrounds/hero-image2.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import * as Icon from 'react-bootstrap-icons'

const Testimonial = () => {
  return (
    <div className='container p-3 my-5 hero-grid'>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12">
          <img src={HeroImg} alt="gif" className='w-100' />
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <h4 className='fw-bold text-light'>Reviews</h4>
          <h1 className='fw-bold text-white mb-4'>Our Hapy Client Says!</h1>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className='p-3 bg-white'>
                <div className="review-icon mb-3">
                  <Icon.Person color='white' size={25} />
                </div>
                <h6 className='fw-bold h-font'>Test Name</h6>
                <p className='review-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='p-3 bg-white'>
                <div className="review-icon mb-3">
                  <Icon.Person color='white' size={25} />
                </div>
                <h6 className='fw-bold h-font'>Test Name</h6>
                <p className='review-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='p-3 bg-white'>
                <div className="review-icon mb-3">
                  <Icon.Person color='white' size={25} />
                </div>
                <h6 className='fw-bold h-font'>Test Name</h6>
                <p className='review-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='p-3 bg-white'>
                <div className="review-icon mb-3">
                  <Icon.Person color='white' size={25} />
                </div>
                <h6 className='fw-bold h-font'>Test Name</h6>
                <p className='review-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='p-3 bg-white'>
                <div className="review-icon mb-3">
                  <Icon.Person color='white' size={25} />
                </div>
                <h6 className='fw-bold h-font'>Test Name</h6>
                <p className='review-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='p-3 bg-white'>
                <div className="review-icon mb-3">
                  <Icon.Person color='white' size={25} />
                </div>
                <h6 className='fw-bold h-font'>Test Name</h6>
                <p className='review-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </p>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial