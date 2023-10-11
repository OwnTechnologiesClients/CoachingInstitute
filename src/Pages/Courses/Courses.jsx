import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import heroImage from '../../assets/bg3.png'
import Footer from '../../Components/Footer'

const Courses = () => {
  return (
    <div className='course-page'>
        <Navbar/>
        
        <div className="hero-section">
            <img src={heroImage} className='heroimage' alt="" />

            <div className='detail'>
                <h1>OFFLINE/ONLINE COURSES </h1>
                <h2>FOR YOUR BETTER FUTURE</h2>
                
            </div>
        </div>

        <div className="frame-1">

        </div>

        <div className="frame-2">

        </div>

        <Footer/>
    </div>
  )
}

export default Courses