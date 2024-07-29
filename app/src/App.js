import React from 'react'
import Navbar from './Components/Navbar.js'
import Header from './Components/Header.js'
import Ab from './Components/Ab.js'
import Contact from './Components/Contact.js'
import Footer from './Components/Footer.js'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <hr></hr>
      <h2 className='about'>HOSTEL  IMAGES</h2>
      <hr></hr>
      <div className='ab'>
      <Ab/>
      </div>
      <hr></hr>
      <h2 className='about'>Contact Us</h2>
      <hr></hr>
      <Contact/>
   
      
        <Footer/>
    
    </div>
  )
}

export default App
