import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Form from './pages/form/Form';
import Course from './pages/course/Course';

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Course />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App