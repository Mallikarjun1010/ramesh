import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaMobileRetro } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <div className='contact'>
    
      <div className='com'>
      
        <p className='para'><IoCall size={20} className='icons' /> +91 9494308914        </p>
        <p className='para'><FaMobileRetro size={20} className='icons'/> +91 8374656096  </p>
        <p className='para'> <CiMail size={20} className='icons'/> ramesh.8374656096@gmail.com</p>
      </div>
      <div>
      <h3 className='green para'>Get In Touch</h3>
      <a href="https://maps.app.goo.gl/4kVPGvNrX8yMv3VA6" className='map'>
        <img src='https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=600' alt='googlemap' className='map'/> </a>
      </div>
    </div>
  )
}

export default Contact
