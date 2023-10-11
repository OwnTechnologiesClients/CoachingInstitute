import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import HeroSection from '../Home/HeroSection';
import RegistrationSection from '../Home/RegistrationSection'
import StudentSignup from './studentSignup/StudentSignup';



const StudentZone = () => {
  return (
    <div>
      
      <Navbar />
      <HeroSection />
      <RegistrationSection />
      <StudentSignup/>

    </div>

  )
}

export default StudentZone