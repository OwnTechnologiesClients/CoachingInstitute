import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Form from './pages/form/Form';
import StudentSignup from './pages/studentZone/studentSignup/StudentSignup';
import Login from './pages/studentZone/login/Login';
import History from './pages/studentZone/history/History';
import Course from './pages/course/Course';
import TestSeries from './pages/testSeries/TestSeries';

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Course />} />
          <Route path='/testseries' element={<TestSeries />} />
          <Route path='/form' element={<Form />} />
          <Route path='/student-login' element={<Login />} />
          <Route path='/student-signup' element={<StudentSignup />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App