import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import darrow from '../../assets/down-arrow.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav>
      <div className="menu">
        <div className="menu">
          <div className={`menu-item ${activeItem === 'Home' ? 'active' : ''}`}>
            <Link to="/" onClick={() => handleItemClick('Home')}>Home</Link>
          </div>
          <div className={`menu-item ${activeItem === 'Courses' ? 'active' : ''}`}>
            <Link to="courses" onClick={() => handleItemClick('Courses')}>
              Courses <img src={darrow} alt="" />
              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="#">Course 1</Link>
                  <Link to="#">Course 2</Link>
                  <Link to="#">Course 3</Link>
                </div>
              </div>
            </Link>
          </div>
          <div className={`menu-item ${activeItem === 'Videos' ? 'active' : ''}`}>
            <Link to="/videos" onClick={() => handleItemClick('Videos')}>Videos</Link>
          </div>
          <div className={`menu-item ${activeItem === 'Contact' ? 'active' : ''}`}>
            <Link to="/contact" onClick={() => handleItemClick('Contact')}>Contact Us</Link>
          </div>
          <div className={`menu-item ${activeItem === 'About' ? 'active' : ''}`}>
            <Link to="/about" onClick={() => handleItemClick('About')}>About Us</Link>
          </div>
          <div className={`menu-item ${activeItem === 'TestSeries' ? 'active' : ''}`}>
            <Link to="/testseries" onClick={() => handleItemClick('TestSeries')}>Test Series</Link>
          </div>
          <div className={`menu-item ${activeItem === 'StudyMaterial' ? 'active' : ''}`}>
            <Link to="/studymaterial" onClick={() => handleItemClick('StudyMaterial')}>Study Material</Link>
          </div>
          <div className={`menu-item ${activeItem === 'StudentLogin' ? 'active' : ''}`}>
            <Link to="/studentlogin" onClick={() => handleItemClick('StudentLogin')}>Student Login</Link>
          </div>
          <div className={`menu-item ${activeItem === 'Blog' ? 'active' : ''}`}>
            <Link to="/blog" onClick={() => handleItemClick('Blog')}>Blog</Link>
          </div>
        </div>
      </div>
      <div className="new-batch">NEW BATCH</div>
    </nav>
  );
};

export default Navbar;
