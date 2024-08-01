import React from 'react'

const Hedaer = ({ title, description }) => {
    return (
        <div className='container-fluid header p-lg-5 p-md-3 p-3 d-flex justify-content-center align-items-center'>
            <div className='text-center w-50'>
                <h1 className='fw-bold text-white'>{title}</h1>
                <p className='text-white header-text'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Hedaer