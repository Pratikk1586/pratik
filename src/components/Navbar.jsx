import React from 'react'
import './Navbar.css';
import Google from './google-logo-transparent-background-free-png.webp'

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>

    <div className='logo-conatiner'>
      <div className='image-conatiner'>
      <img src={Google}></img>
      </div>
    </div>
    <ul className='navbarItems' >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

    </div>
    </header>
  )
}

export default Navbar