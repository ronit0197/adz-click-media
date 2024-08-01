import React from 'react'
import HeroImage from '../Assets/Backgrounds/hero-image.png'
import HeroSection from '../Components/HeroSection'
import HeroGrid from '../Components/HeroGrid'
import HeroGif from '../Assets/Backgrounds/hero-gif.gif'
import { Link } from 'react-router-dom'
import Subscription from '../Components/Subscription'

const Home = () => {
  return (
    <>
      <div className='container-fluid header p-lg-5 p-md-3 p-3'>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 p-lg-5 mt-lg-0 mt-md-4 mt-5">
              <h2 className='text-white fw-bold'>Buisness Strategy Customized to Perfection!</h2>
              <p className='text-white header-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor, unde facilis accusantium qui quibusdam doloremque ab voluptatibus commodi laboriosam repudiandae similique reprehenderit hic sunt, nostrum recusandae minima dolore itaque!
              </p>
              <button className='customised-button mt-4'>Discover more</button>
            </div>
            <div className="col-lg-6 p-lg-5 mt-lg-0 mt-4">
              <img src={HeroImage} alt="hero-image" className='header-image' />
            </div>
          </div>
        </div>
      </div>
      <HeroSection />
      <HeroGrid />
      <div className='container p-3 my-5'>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-4">
            <h4 className='fw-bold text-dark'>Boost Up</h4>
            <h1 className='fw-bold h-font'>Your Business with Us</h1>
            <p className='gif-text mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto blanditiis, 
              incidunt eos soluta enim reprehenderit natus commodi ea accusantium perspiciatis esse 
              repellendus inventore! Voluptatum dolorum rerum fugiat explicabo aspernatur?
            </p>
            <Link to="/services" className='nav-link mt-lg-5 mt-2'>Our services...</Link>
          </div>
          <div className="col-lg-6 col-md-6 col-8">
            <img src={HeroGif} alt="gif" className='w-100' />
          </div>
        </div>
      </div>
      <Subscription />
    </>
  )
}

export default Home