import React from 'react'
import Navbar from './components/Navbar'
import * as ic from 'react-bootstrap-icons';
import heroImage from './assets/bg4.png';
import logo from './assets/logo.png';
import './App.scss'
import { Details, Courses, PopularVideosCard } from './components/Card';
import ss2 from './assets/ss2.png'
import ss3 from './assets/ss3.png'
import courseImg from './assets/course.png'
import videoImg from './assets/video.png'


function App() {
  return (
    <div className='app'>

      {/* Top Links */}
      <div className="top-links d-flex justify-content-between p-1 text-white">

        <div className='left-nav d-flex ps-md-5 ms-md-5'>
          <li className='p-1'>FAQ |</li>
          <li className='p-1'>Help Desk |</li>
          <li className='p-1'>Login</li>
        </div>

        <div className="right-nav d-flex me-md-5 pe-md-5">
          <ic.Facebook className='fs-5 my-auto mx-2' />
          <ic.Youtube className='fs-5 my-auto mx-2' />
          <ic.Instagram className='fs-5 my-auto mx-2' />
        </div>

      </div>

      {/* Contact Section */}
      <div className="contact-section row g-0">
        <div className="logo-img ps-md-5 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center">
          <img src={logo} className='ps-md-5 p-0' alt="Logo" height={"90px"} />
        </div>

        <div className="contact d-flex justify-content-end ms-md-0 pe-md-5 ms-4  col-md-6">

          <div className="call p-3 d-flex align-items-center">
            <ic.TelephoneFill className='fs-1 m-2 p-1  text-white bg-dark rounded' />
            <div className="mt-md-3">
              <span className='text-secondary'>CALL US TODAY</span>
              <p>+91 9999988877</p>
            </div>
          </div>

          <div className="available-time p-3 me-5 d-flex align-items-center">
            <ic.Clock className='fs-1 m-2 p-1 fw-bold' />
            <div className="mt-md-3">
              <span className='text-secondary'>WE ARE OPEN</span>
              <p>Mon-Fri 8:00-16:00</p>
            </div>
          </div>

        </div>

      </div>

      {/* Navbar section */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section position-relative">
        <div className="">
          <img src={heroImage} alt="" className="start-0 top-0" />
        </div>
        <div className='hero-detail position-absolute'>
          <p className='d1'>BEST EDUCATION</p>
          <p className='d2'>FOR YOUR BETTER FUTURE</p>
          <p className='d3'>We provide always our best service of our clients always</p><br />
          <p className='d4'>Try to client's trust satisfaction</p>
        </div>
      </div>

      {/* Registration */}
      <div className="register px-5 py-5">
        <div className="container">
          <h2 className='text-white fs-3'>Get a Free <span className="blue">Registration</span>!</h2>
          <form className="register-form text-secondary row">
            <input className='col-md-2' type="text" placeholder='Enter Email' />
            <select className='col-md-2' >
              <option value="Courses">Courses</option>
            </select>
            <input className='col-md-2' type="number" placeholder='Phone Number' />
            <input className='col-md-2' type="date" placeholder='Date of Birth' />
            <button className='col-md-2' type="submit">Submit Now</button>
          </form>
        </div>
      </div>

      {/* welcome section */}
      <div className="welcome container row pt-5 mx-auto">
        <div className="detail p-3 col-md-3">
          <p className='fs-3'>WELCOME TO OUR <br />
            <span className='fs-3 blue'>UNIVERSITY</span>
          </p>
          <p className=' text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quidem suscipit? Cum earum eius debitis</p>
          <p className='fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo provident ut eveniet unde nobis vel voluptatem, ea perferendis! Facilis aliquam laborum</p>
          <button className='details-button text-white p-1 px-2' style={{ backgroundColor: "rgba(7,26,63)" }}>View Details</button>
        </div>
        <div className="cards col-md-9 row pt-4">
          <Details imgSrc={ss2} />
          <Details imgSrc={ss2} />
          <Details imgSrc={ss3} />
        </div>
      </div>

      {/* Courses Section */}
      <div className="courses mt-5 pt-5 bg-light">
        <div className="container mt-5 py-5">
          <div className="d-flex justify-content-between">
            <h1 className='fs-3 ms-3'><span className='border-bottom blue-border border-2'>OUR</span> <span className='blue'>COURSE</span></h1>
            <button className='text-white px-md-4 me-md-3 px-1' style={{ backgroundColor: "rgba(7,26,63)" }}>View All</button>
          </div>
          <div className="row py-5 mx-auto">
            {[1, 2, 3, 4].map((item) => {
              return <Courses key={item} imgSrc={courseImg} />
            })}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="statistics theme-bg p-5 gx-0 text-white row">

        <div className="col-md-3 pt-2 m-auto d-flex justify-content-md-center">
          <div className='mt-2'><ic.EmojiSmile className='text-white fs-1' /></div>
          <div className="px-4">
            <h4 className='text-bold mb-0'>2450+</h4>
            <p>HAPPY STUDENTS</p>
          </div>
        </div>
        <div className="col-md-3 pt-2 m-auto d-flex justify-content-md-center">
          <div className='mt-2'><ic.EmojiSmile className='text-white fs-1' /></div>
          <div className="px-4">
            <h4 className='text-bold mb-0'>10+</h4>
            <p>TOTAL TEACHERS</p>
          </div>
        </div>
        <div className="col-md-3 pt-2 m-auto d-flex justify-content-md-center">
          <div className='mt-2'><ic.EmojiSmile className='text-white fs-1' /></div>
          <div className="px-4">
            <h4 className='text-bold mb-0'>500+</h4>
            <p>CERTIFICATION</p>
          </div>
        </div>
        <div className="col-md-3 pt-2 m-auto d-flex justify-content-md-center">
          <div className='mt-2'><ic.EmojiSmile className='text-white fs-1' /></div>
          <div className="px-4">
            <h4 className='text-bold mb-0'>2000+</h4>
            <p>EXAMS</p>
          </div>
        </div>

      </div>

      {/* Popular videos section */}
      <div className="videos py-5 bg-light">
        <div className="container mt-5">
          <div className="d-flex justify-content-between">
            <h1 className='fs-3 ms-2'><span className='border-bottom blue-border border-2'>POPULAR</span> <span className='blue'>VIDEOS</span></h1>
            <button className='text-white px-4 my-1 me-2 rounded-1' style={{ backgroundColor: "rgba(7,26,63)" }}>View All</button>
          </div>
          <div className="row py-5">
            {[1, 2, 3, 4].map((item) => {
              return <PopularVideosCard key={item} imgSrc={videoImg} />
            })}

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textDecoration: "none" }} className='theme-bg'>
        <div className="container row text-white p-5 mx-auto">
          <div className="col-md-3">
            <img src={logo} height={"100px"} alt="LOGO" />
            <p className="mx-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam quisquam beatae sunt reprehenderit delectus ipsam libero tenetur, magni saepe, debitis 
            </p>
            <div className="d-flex col-md-6 mx-2">
              <ic.Facebook className='fs-2 blue ms-2 me-3 footer-icon' />
              <ic.Instagram className='fs-2 blue me-3 footer-icon' />
              <ic.Youtube className='fs-2 blue me-3 footer-icon' />
            </div>
          </div>
          <div className="courses-footer col-md-3 py-3 mx-md-0 mx-3">
            <h4 className='text-bold'>Courses</h4>
            <a href="">
              <li className='py-1'>HTML & CSS</li>
            </a>
            <a href="">
              <li className='py-1'>Java</li>
            </a>
            <a href="">
              <li className='py-1'>Python</li>
            </a>
            <a href="">
              <li className='py-1'>Power Point</li>
            </a>
            <a href="">
              <li className='py-1'>MS-Office</li>
            </a>
          </div>
          <div className="usefulLinks col-md-3 py-3 col-sm-6 mx-md-0 mx-3">
            <h4 className='text-bold'>Useful Links</h4>

            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 blue-bg text-' />
              <a href="">About us</a>
            </div>
            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 blue-bg text-' />
              <a href="">Videos</a>
            </div>
            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 blue-bg text-' />
              <a href="">Blog</a>
            </div>
            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 blue-bg text-' />
              <a href="">Students</a>
            </div>
            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 blue-bg text-' />
              <a href="">Content</a>
            </div>
          </div>
          <div className='blue-bg col-md-3 mt-4'>
            <div className="call d-flex m-auto my-5 ps-md-5 pt-md-4">
              <ic.TelephoneFill className='fs-1 my-2 mx-1 p-2 blue bg-white rounded rounded-5' />
              <div className="">
                <span className=''>For More Details</span>
                <p>+91 9999988877</p>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4 text-white d-flex justify-content-between footer-color' >
          <div className='d-flex ps-5 ms-5'>
            <li className='p-1'>FAQ |</li>
            <li className='p-1'>Help Desk |</li>
            <li className='p-1'>Login</li>
          </div>
          <div className="pe-5">
            <a href="#navbar"><ic.ChevronUp className='blue-bg p-1 fs-2 rounded rounded-5' /></a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App