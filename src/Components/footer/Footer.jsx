import React from 'react'
import logo from '../../assets/logo.png'
import fbicon from '../../assets/icons/facebook.png'
import yticon from '../../assets/icons/youtube.png'
import igicon from '../../assets/icons/igfigmaicon.png'
import checkbox from '../../assets/icons/checkbox.png'
import down from '../../assets/icons/down.png'
import call from '../../assets/call.png'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="detail">
          <img src={logo} alt="" />
          <div className="message">
            Our vision at ASAP Chemtime is to be the most trusted and respected educational institute for competitive exams in Chemistry and Mathematics.
          </div>
          <div className="footer-icons">
            <a href="https://www.facebook.com/chmtime?mibextid=ZbWKwL" target='_blank'><img src={fbicon} width={"25vw"} alt="" /></a>
            <a href="https://www.youtube.com/@ASAPCHEMTIME" target='_blank'><img src={yticon} width={"25vw"} alt="" /></a>
            <a href="https://www.instagram.com/asapchemtime?igshid=YmMyMTA2M2Y%3D" target='_blank'><img src={igicon} width={"25vw"} alt="" /></a>

          </div>
        </div>
        <div className="courses">
          <h4>Courses</h4>
          <Link to="#">
            <li>CSIR-NET/JRF</li>
          </Link>
          <Link to="#">
            <li>GATE</li>
          </Link>
          <Link to="#">
            <li>IIT-JAM</li>
          </Link>
          <Link to="#">
            <li>CUET(PG)</li>
          </Link>
          <Link to="#">
            <li>TEST SERIES</li>
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
            <Link to="/videos">Videos</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/blog">Blog</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/student-login">Students</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/courses">Courses</Link>
          </div>
        </div>
        <div className="box">
          <img src={call} alt="" />
          <div>
            <p className='h1'>For More Details</p>
            <p className='h2'>+91 8595764714 <br></br>+91 7011767872</p>
          </div>
        </div>
      </div>
      <div className='bottom-footer' >
        <div className='bottom'>
          <li><Link to='/courses'>Popular Courses |</Link></li>
          <li><Link to='/contact'>Help Desk |</Link></li>
          <li><Link to='/student-login'>Login</Link></li>
        </div>
        <div>
          <a href="#navbar"><img src={down} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer