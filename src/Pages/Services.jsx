import React from 'react'
import Hedaer from '../Components/Hedaer'
import ServicesGrid from '../Components/ServicesGrid'
import Testimonial from '../Components/Testimonial'

const Services = () => {
  return (
    <>
      <Hedaer title="What we offer?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <ServicesGrid />
      <Testimonial />
    </>
  )
}

export default Services