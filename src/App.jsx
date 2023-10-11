import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<Courses/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App