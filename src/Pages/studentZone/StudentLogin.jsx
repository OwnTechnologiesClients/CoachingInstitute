import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import HeroSection from '../Home/HeroSection';
import RegistrationSection from '../Home/RegistrationSection'
import StudentDetail from './studentDetail/StudentDetail';



const StudentLogin = () => {
  return (
    <div>
      
      <Navbar />
      <HeroSection />
      <RegistrationSection />
      <StudentDetail/>

    </div>

  )
}

export default StudentLogin