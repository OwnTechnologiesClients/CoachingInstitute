import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import darrow from '../../assets/down-arrow.png';
import hamburger from '../../assets/icons/hamburger.png';
import rightarrow from '../../assets/icons/rightarrow.png';
import './navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const pathname = location.pathname.split('/')[1];
    setActiveItem(pathname || 'Home');
  }, [location]);

  const handleItemClick = (itemName) => {
    if(itemName==='Logout'){
      window.localStorage.clear();
      navigate('/student-login')
    }
    setActiveItem(itemName);
    closeMenu(); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav id='navbar'>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={hamburger} alt="" />
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>

        <Link to="/" onClick={() => handleItemClick('Home')}>
          <div className={`menu-item ${activeItem === 'Home' ? 'active' : ''}`}>
            Home
          </div>
        </Link>

        <Link className='courses' to="/courses" onClick={() => handleItemClick('Courses')}>
          <div className={`menu-item ${activeItem === 'courses' ? 'active' : ''}`}>
            Courses <img src={darrow} alt="" />
            <div className="dropdown">
              <div className="dropdown-content">
                <Link to="#">Online Courses <img style={{ paddingLeft: "1vw" }} src={rightarrow} /> </Link>
                <Link to="#">Offline Courses <img style={{ paddingLeft: "1vw" }} src={rightarrow} /> </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/testseries" onClick={() => handleItemClick('testseries')}>
          <div className={`menu-item ${activeItem === 'testseries' ? 'active' : ''}`}>
            Test Series
          </div>
        </Link>

        <Link to="/studymaterial" onClick={() => handleItemClick('studymaterial')}>
          <div className={`menu-item ${activeItem === 'studymaterial' ? 'active' : ''}`}>
            Study Material
          </div>
        </Link>

        <Link to="/videos" onClick={() => handleItemClick('videos')}>
          <div className={`menu-item ${activeItem === 'videos' ? 'active' : ''}`}>
            Videos
          </div>
        </Link>

        <Link to="/contact" onClick={() => handleItemClick('contact')}>
          <div className={`menu-item ${activeItem === 'contact' ? 'active' : ''}`}>
            Contact Us
          </div>
        </Link>

        <Link to="/about" onClick={() => handleItemClick('about')}>
          <div className={`menu-item ${activeItem === 'about' ? 'active' : ''}`}>
            About Us
          </div>
        </Link>

        <Link to="/student-login" onClick={() => handleItemClick(!localStorage.getItem('token')?'Student Login':'Logout')}>
          <div className={`menu-item ${activeItem === 'student-login' ? 'active' : ''}`}>
            {!localStorage.getItem('token')?'Student Login':'Logout'}
          </div>
        </Link>
        <Link to="https://blog.chemtime.co.in/" onClick={() => handleItemClick('blog')}>
          <div className={`menu-item ${activeItem === 'blog' ? 'active' : ''}`}>
            Blog
          </div>
        </Link>
        <Link to='/courses'>
          <div className="new-batch">
            NEW BATCH
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
