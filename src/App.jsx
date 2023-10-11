import React from 'react'
import videoImg from './assets/video.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Form from './Pages/form/Form';

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App