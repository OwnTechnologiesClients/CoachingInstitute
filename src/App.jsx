import React from 'react'
import videoImg from './assets/video.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Form from './Pages/form/Form';
import StudentSignup from './Pages/studentZone/studentSignup/StudentSignup';
import Login from './Pages/studentZone/login/Login';

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/student-login' element={<Login />} />
          <Route path='/student-signup' element={<StudentSignup />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App