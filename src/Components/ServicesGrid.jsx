import React from 'react'
import CardImage1 from '../Assets/Cards/digitalmarketing.png'
import { Link } from 'react-router-dom'

const HeroGrid = () => {
    return (
        <div className='container-fluid p-5'>
            <div className="row">
                <div className="col-12 text-center mx-auto">
                    <h5 className='text-dark mb-4'>Choose Our Best</h5>
                    <span className='px-1 bg-secondary rounded'></span>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3 mb-lg-3 mb-md-3 mb-3">
                            <div className="service-card text-center p-3 shadow">
                                <img src={CardImage1} alt="card-img" />
                                <h3 className='my-3'>Avdertisement</h3>
                                <div className='divider mx-auto w-25'></div>
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rerum sit nam illum ea provident placeat repellat fugit quae facere sequi quidem minus laborum nulla voluptas,
                                    odio temporibus iusto quam cumque!
                                </p>
                                <Link to="/services" className='nav-link'>See more...</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-lg-3 mb-md-3 mb-3">
                            <div className="service-card text-center p-3 shadow">
                                <img src={CardImage1} alt="card-img" />
                                <h3 className='my-3'>Avdertisement</h3>
                                <div className='divider mx-auto w-25'></div>
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rerum sit nam illum ea provident placeat repellat fugit quae facere sequi quidem minus laborum nulla voluptas,
                                    odio temporibus iusto quam cumque!
                                </p>
                                <Link to="/services" className='nav-link'>See more...</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-lg-3 mb-md-3 mb-3">
                            <div className="service-card text-center p-3 shadow">
                                <img src={CardImage1} alt="card-img" />
                                <h3 className='my-3'>Avdertisement</h3>
                                <div className='divider mx-auto w-25'></div>
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rerum sit nam illum ea provident placeat repellat fugit quae facere sequi quidem minus laborum nulla voluptas,
                                    odio temporibus iusto quam cumque!
                                </p>
                                <Link to="/services" className='nav-link'>See more...</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-lg-3 mb-md-3 mb-3">
                            <div className="service-card text-center p-3 shadow">
                                <img src={CardImage1} alt="card-img" />
                                <h3 className='my-3'>Avdertisement</h3>
                                <div className='divider mx-auto w-25'></div>
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rerum sit nam illum ea provident placeat repellat fugit quae facere sequi quidem minus laborum nulla voluptas,
                                    odio temporibus iusto quam cumque!
                                </p>
                                <Link to="/services" className='nav-link'>See more...</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-lg-3 mb-md-3 mb-3">
                            <div className="service-card text-center p-3 shadow">
                                <img src={CardImage1} alt="card-img" />
                                <h3 className='my-3'>Avdertisement</h3>
                                <div className='divider mx-auto w-25'></div>
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rerum sit nam illum ea provident placeat repellat fugit quae facere sequi quidem minus laborum nulla voluptas,
                                    odio temporibus iusto quam cumque!
                                </p>
                                <Link to="/services" className='nav-link'>See more...</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-lg-3 mb-md-3 mb-3">
                            <div className="service-card text-center p-3 shadow">
                                <img src={CardImage1} alt="card-img" />
                                <h3 className='my-3'>Avdertisement</h3>
                                <div className='divider mx-auto w-25'></div>
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rerum sit nam illum ea provident placeat repellat fugit quae facere sequi quidem minus laborum nulla voluptas,
                                    odio temporibus iusto quam cumque!
                                </p>
                                <Link to="/services" className='nav-link'>See more...</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-lg-3 mb-md-3 mb-3">
                            <div className="service-card text-center p-3 shadow">
                                <img src={CardImage1} alt="card-img" />
                                <h3 className='my-3'>Avdertisement</h3>
                                <div className='divider mx-auto w-25'></div>
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rerum sit nam illum ea provident placeat repellat fugit quae facere sequi quidem minus laborum nulla voluptas,
                                    odio temporibus iusto quam cumque!
                                </p>
                                <Link to="/services" className='nav-link'>See more...</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-card text-center p-3 shadow">
                                <img src={CardImage1} alt="card-img" />
                                <h3 className='my-3'>Avdertisement</h3>
                                <div className='divider mx-auto w-25'></div>
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rerum sit nam illum ea provident placeat repellat fugit quae facere sequi quidem minus laborum nulla voluptas,
                                    odio temporibus iusto quam cumque!
                                </p>
                                <Link to="/services" className='nav-link'>See more...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroGrid