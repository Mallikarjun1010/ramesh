import React from 'react'
//import {Link} from 'react-router-dom'
import { SiGooglemaps } from "react-icons/si";

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='navleft'>
        <p className='navapara'>Nithyasree Men's PG Hostel</p>
      </div>
      <div className='navright'>
        <a href="https://maps.app.goo.gl/4kVPGvNrX8yMv3VA6" className='animi'><SiGooglemaps size={20} className='animi'/>
        </a>
      </div>
    </div>
  )
}
export default Navbar
