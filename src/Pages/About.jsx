import React from 'react'
import Hedaer from '../Components/Hedaer'
import HeroGif from '../Assets/Backgrounds/hero-gif2.gif'
import { Link } from 'react-router-dom'
import Testimonial from '../Components/Testimonial'

const About = () => {
  return (
    <>
      <Hedaer title="About Us" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <div className='container my-3'>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <h4 className='fw-bold text-dark'>Who are we?</h4>
            <h1 className='fw-bold h-font'>Why Choose Us?</h1>
            <p className='gif-text mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto blanditiis,
              incidunt eos soluta enim reprehenderit natus commodi ea accusantium perspiciatis esse
              repellendus inventore! Voluptatum dolorum rerum fugiat explicabo aspernatur?
            </p>
            <h1 className='fw-bold h-font'>Our Works</h1>
            <p className='gif-text mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto blanditiis,
              incidunt eos soluta enim reprehenderit natus commodi ea accusantium perspiciatis esse
              repellendus inventore! Voluptatum dolorum rerum fugiat explicabo aspernatur?
            </p>
            <Link to="/services" className='nav-link mt-lg-5 mt-2'>Our services...</Link>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <img src={HeroGif} alt="gif" className='w-100' />
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  )
}

export default About