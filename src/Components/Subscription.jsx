import React from 'react'

const Subscription = () => {
  return (
    <div className='container-fluid subscribe'>
        <div className="container p-5">
            <h3 className='mb-4 text-white'>Subscribe for better experiance</h3>
            <form action="" className='d-flex align-items-center'>
                <input type="text" placeholder='Email' className='form-control shadow-none' />
                <button type='submit' className='btn btn-danger ms-4'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Subscription