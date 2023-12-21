import React from 'react'
import './TopCourses.scss'
import { Header1, Header2 } from '../../components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import Footer from '../../Components/footer/Footer'

const TopCourses = () => {
  return (
    <div className='top-courses'>
        <Header1/>
        <Header2/>

        <Navbar/>

        <div className="top-courses-container">
            
        </div>

        <WhatsappIcon/>

        <Footer/>
    </div>
  )
}

export default TopCourses