import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='container-fluid footer p-5'>
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className='fw-bold h-font'>ADZ</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nostrum odio quo porro commodi iusto, dolorem eius qui quae inventore animi
                            quis magnam recusandae aliquam excepturi nam quaerat architecto alias exercitationem.
                        </p>
                    </div>
                    <div className="col-lg-8 my-lg-0 my-md-3 my-3">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-4 mb-lg-0 mb-md-3 mb-3">
                                <h6 className='fw-bold'>About</h6>
                                <ul>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Who are we?</Link></li>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Our history</Link></li>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Our Works</Link></li>
                                    <li><Link to="/about" className='nav-link'>Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-4 mb-lg-0 mb-md-3 mb-3">
                                <h6 className='fw-bold'>About</h6>
                                <ul>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Who are we?</Link></li>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Our history</Link></li>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Our Works</Link></li>
                                    <li><Link to="/about" className='nav-link'>Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-4 mb-lg-0 mb-md-3 mb-3">
                                <h6 className='fw-bold'>About</h6>
                                <ul>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Who are we?</Link></li>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Our history</Link></li>
                                    <li className='mb-2'><Link to="/about" className='nav-link'>Our Works</Link></li>
                                    <li><Link to="/about" className='nav-link'>Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 col-md-12 col-12'>
                                <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49567.60613583696!2d88.31639360458638!3d22.574077269492697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40941f9444f3bb69%3A0xbb7eb9b5f5f2b97c!2sAdz%20Click%20Media%20%7C%7C%20Google%20Certified%20Agency%20%7C%7C%20SEO%20agency%20%7C%7C%20Digital%20Marketing%20Agency%20in%20Kolkata!5e0!3m2!1sen!2sin!4v1722511927556!5m2!1sen!2sin" title='footer-map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='after-footer text-center py-3'>
                &copy;2021 All Rights Reserved || ADZ Click Media
            </div>
        </>
    )
}

export default Footer