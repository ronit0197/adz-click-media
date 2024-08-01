import React, { useState } from 'react'
import AnimatedButton from './AnimatedButton'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menuSystem, setSystem] = useState("close");
  const [menu, setMenu] = useState("home");

  return (
    <div className='contauner-fluid custom-navbar p-3'>
      <div className="row">
        <div className="col-2">
          <h2 className='fw-bold'>ADZ</h2>
        </div>
        <div className="col-10 nav-menu">
          <ul className={`navbar-links d-lex justify-content-end me-5 ${menuSystem === 'open' && 'open'}`}>
            <Link to="/" className='nav-link' onClick={() => { setSystem("close") }}><li className='me-lg-4 me-0 mb-lg-0 mb-3' onClick={() => { setMenu("home") }}>Home<span className={`menu-active ${menu === 'home' && 'active'}`}></span></li></Link>
            <Link to="/about" className='nav-link' onClick={() => { setSystem("close") }}><li className='me-lg-4 me-0 mb-lg-0 mb-3' onClick={() => { setMenu("about") }}>About<span className={`menu-active ${menu === 'about' && 'active'}`}></span></li></Link>
            <Link to="/services" className='nav-link' onClick={() => { setSystem("close") }}><li className='me-lg-4 me-0 mb-lg-0 mb-3' onClick={() => { setMenu("services") }}>Services<span className={`menu-active ${menu === 'services' && 'active'}`}></span></li></Link>
            <Link to="/contact" className='nav-link' onClick={() => { setSystem("close") }}><li onClick={() => { setMenu("contact") }}>Contact Us<span className={`menu-active ${menu === 'contact' && 'active'}`}></span></li></Link>
            <Icon.XCircle className='menu-close' size={35} onClick={() => { setSystem("close") }} />
          </ul>
          <Icon.List size={30} color='white' className='me-4 menu-open' onClick={() => { setSystem("open") }} />
          <AnimatedButton>
            Call us<Icon.Phone className='ms-2' />
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar