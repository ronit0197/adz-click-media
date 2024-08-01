import React from 'react'
import * as Icon from 'react-bootstrap-icons'

const HeroSection = () => {
    return (
        <div className="container hero-section my-lg-5 my-md-3 my-3">
            <div className="row p-lg-0 p-md-5 p-5">
                <div className="col-lg-3 mb-lg-0 mb-md-3 mb-3">
                    <div className='card p-2'>
                        <div className='hero-img mx-auto mb-4'>
                            <Icon.Code size={25} color='white'/>
                        </div>
                        <p className='text-center'>Web Design.</p>
                        <span className='hero-text'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nisi quasi minima consequatur.
                            Deserunt sequi dolorem labore libero ullam asperiores quisquam facere,
                            sint modi aut adipisci, doloremque iste nulla animi!
                        </span>
                    </div>
                </div>
                <div className="col-lg-3 mb-lg-0 mb-md-3 mb-3">
                    <div className='card p-2'>
                        <div className='hero-img mx-auto mb-4'>
                            <Icon.Search size={25} color='white'/>
                        </div>
                        <p className='text-center'>SEO.</p>
                        <span className='hero-text'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nisi quasi minima consequatur.
                            Deserunt sequi dolorem labore libero ullam asperiores quisquam facere,
                            sint modi aut adipisci, doloremque iste nulla animi!
                        </span>
                    </div>
                </div>
                <div className="col-lg-3 mb-lg-0 mb-md-3 mb-3">
                    <div className='card p-2'>
                        <div className='hero-img mx-auto mb-4'>
                            <Icon.Palette size={25} color='white'/>
                        </div>
                        <p className='text-center'>Graphics Design.</p>
                        <span className='hero-text'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nisi quasi minima consequatur.
                            Deserunt sequi dolorem labore libero ullam asperiores quisquam facere,
                            sint modi aut adipisci, doloremque iste nulla animi!
                        </span>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='card p-2'>
                        <div className='hero-img mx-auto mb-4'>
                            <Icon.CupHot size={25} color='white'/>
                        </div>
                        <p className='text-center'>Consultant.</p>
                        <span className='hero-text'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nisi quasi minima consequatur.
                            Deserunt sequi dolorem labore libero ullam asperiores quisquam facere,
                            sint modi aut adipisci, doloremque iste nulla animi!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection