import React from 'react'
import Footer from '../components/Footer'
import { About } from '../components/About' 
import Navbar from '../components/Navbar'

const Landingpage = () => {
  return (
    <div className='Landing'>
    <Navbar/>
    <About/>
    <Footer/>
    </div>
  )
}

export default Landingpage