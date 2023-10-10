import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss';
import darrow from '../../assets/down-arrow.png';

const Navbar = () => {
  return (
    <nav>
      <div className="menu">

        <div class="menu">
          <div class="menu-item active">
            <Link to="/">Home</Link>
          </div>
          <div class="menu-item">
            <Link to="#">Courses <img src={darrow} alt="" /></Link>
          </div>
          <div class="menu-item">
            <Link to="/videos">Videos</Link>
          </div>
          <div class="menu-item">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div class="menu-item">
            <Link to="/about">About Us</Link>
          </div>
          <div class="menu-item">
            <Link to="/testseries">Test Series</Link>
          </div>
          <div class="menu-item">
            <Link to="/studymaterial">Study Material</Link>
          </div>
          <div class="menu-item">
            <Link to="/studentlogin">Student Login</Link>
          </div>
          <div class="menu-item">
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>
      <div className="new-batch">
        NEW BATCH
      </div>
    </nav>
  )
}

export default Navbar