import React from 'react'
import logo from '../../assets/logo-white.png'
import fbicon from '../../assets/icons/facebook.png'
import yticon from '../../assets/icons/youtube.png'
import igicon from '../../assets/icons/instagram.png'
import linkedinicon from "../../assets/icons/linkedin.png";
import checkbox from '../../assets/icons/checkbox.png'
import down from '../../assets/icons/down.png'
import call from '../../assets/icons/call-blue.png'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  const handleTelephoneClick = () => {
    const phoneNumber = 'tel:+919910765616';
    window.location.href = phoneNumber;
  };
  return (
    <div>
      <div className='footer'>
        <div className="detail">
          <Link to="/" ><img src={logo} alt="" /></Link><br></br><br></br>
          <div className="message">
            Embrace innovation with TECH FEVER, the best technology coaching center in India. Elevate your skills with cutting-edge courses, expert instructors, and hands-on projects. Join a dynamic learning environment, backed by a proven track record of success. Fuel your tech aspirations at TECH FEVER and shape your future in the digital world!
          </div>
          <div className="footer-icons">
            <a href="" target='_blank'><img src={fbicon} width={"25vw"} alt="" /></a>
            <a href="https://www.linkedin.com/company/99327442/admin/feed/posts/" target='_blank'><img src={linkedinicon} width={"25vw"} alt="" /></a>
            <a href="https://www.instagram.com/techfever_official/" target='_blank'><img src={igicon} width={"25vw"} alt="" /></a>

          </div>
        </div>
        <div className="courses">
          <h4>Courses</h4>
          <Link to="/onlinecourses/flutter">
            <li>Mobile App Development</li>
          </Link>
          <Link to="/onlinecourses/reactjs">
            <li>Frontend Development</li>
          </Link>
          {/* <Link to="/onlinecourses/nextjs">
            <li>NextJs Development</li>
          </Link> */}
          <Link to="/onlinecourses/nodejs">
            <li>Backend Development</li>
          </Link>
          <Link to="/onlinecourses/mern-stack">
            <li>FullStack Development</li>
          </Link>
          <Link to="/offlinecourses/flutter">
            <li>Offline Courses</li>
          </Link>
          <Link to="/onlinecourses/flutter">
            <li>Internship Courses</li>
          </Link>
        </div>
        <div className="links ">
          <h4>Useful Links</h4>

          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/about">About us</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="https://blog.techfever.in/">Blog</Link>
          </div>
          {/* <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/shipping-policy">Shipping Policy</Link>
          </div> */}
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/terms-condition">Terms & Condition</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/privacy-policy">Privacy & Policy</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/refund-policy">Refund Policy</Link>
          </div>

        </div>
        <div className="box" >
          <img src={call} alt="" onClick={handleTelephoneClick} />
          <div onClick={handleTelephoneClick}>
            <p className='forMoreDetail'>For More Details</p>
            <p className='h2'>+91 9910765616 <br></br>+91 9650636804</p>
          </div>
        </div>
      </div>
      <div className='bottom-footer' >
        <div className='bottom'>
          <li><Link to='/onlinecourses/flutter'>Popular Courses |</Link></li>
          <li><Link to='/contact'>Help Desk</Link></li>
          {/* <li><Link to='/student-login'>Login</Link></li> */}
        </div>
        <div className='rights'>
          <p style={{ marginLeft: "-6rem" }}>© 2023 All Rights Reserved. Created with ❤️ by TechFever</p>
        </div>
        <div className='smooth-up'>
          <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img src={down} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer