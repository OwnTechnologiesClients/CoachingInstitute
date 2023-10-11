import React from 'react'
import { CourseCard, WelcomeCard,VideoCard } from './Cards';
import './Home.scss'
import './course.scss'
import './registration.scss'
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/Footer';

import fbicon from '../../assets/icons/facebook.png'
import yticon from '../../assets/icons/youtube.png'
import igicon from '../../assets/icons/instagram.png'
import logo from '../../assets/logo.png'
import phoneIcon from '../../assets/phoneIcon.png'
import clockIcon from '../../assets/clockIcon.png'
import HeroSection from './HeroSection';
import ss2 from '../../assets/ss2.png'
import courseimg from '../../assets/course.png'
import Videoimg from '../../assets/video.png'
import ss3 from '../../assets/ss3.png'
import smile from '../../assets/smile.png'
import RegistrationSection from './RegistrationSection';

const Home = () => {

    
    return (
        <div className='home'>

            <div className="top-bar">
                <div className='top-links'>
                    <span>FAQ |</span>
                    <span>Help Desk |</span>
                    <span>Login</span>
                </div>
                <div className="top-icons">
                    <img src={fbicon} width={"17vw"} alt="" />
                    <img src={yticon} width={"17vw"} alt="" />
                    <img src={igicon} width={"17vw"} alt="" />
                </div>
            </div>

            <div className="top-contact">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="contact">
                    <div className="call">
                        <img src={phoneIcon} alt="" />
                        <div>
                            <p className='h1'>CALL US TODAY</p>
                            <p className='h2'>+91 9999888777</p>
                        </div>
                    </div>

                    <div className="time">
                        <img src={clockIcon} alt="" />
                        <div>
                            <p className='h1'>WE ARE OPEN</p>
                            <p className='h2'>Mon-Fri 8:00-16:00</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Navbar />

            <HeroSection />

            <RegistrationSection/>

            <div className="welcome-section">
                <div className="message">
                    <h1>WELCOME TO OUR</h1>
                    <p>UNIVERSITY</p>
                    <h3>We care for children, protect their welfare, and prepare them for the future</h3>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi neque ex numquam, nulla autem quos, magnam qui iure ipsa minima necessitatibus</h4>
                    <button>View Details</button>
                </div>
                <div className="cards">
                    <WelcomeCard imgSrc={ss2} />
                    <WelcomeCard imgSrc={ss3} />
                    <WelcomeCard imgSrc={ss3} />
                </div>
            </div>

            <div className="course-section">
                <div className='top-heading'>
                    <h1>
                        OUR <span>COURSES</span>
                    </h1>
                    <button>
                        View All
                    </button>
                </div>
                <div className="cards">
                    <CourseCard imgSrc={courseimg}/>
                    <CourseCard imgSrc={courseimg}/>
                    <CourseCard imgSrc={courseimg}/>
                    <CourseCard imgSrc={courseimg}/>
                </div>
            </div>

            <div className="statistics">
                <div className="st-card">
                    <img src={smile} alt="" />
                    <div className="stats">
                        <h1>2450+</h1>
                        <p>HAPPY STUDENTS</p>
                    </div>
                </div>
                <div className="st-card">
                    <img src={smile} alt="" />
                    <div className="stats">
                        <h1>10+</h1>
                        <p>TOTAL TEACHERS</p>
                    </div>
                </div>
                <div className="st-card">
                    <img src={smile} alt="" />
                    <div className="stats">
                        <h1>500+</h1>
                        <p>CERTIFICATION</p>
                    </div>
                </div>
                <div className="st-card">
                    <img src={smile} alt="" />
                    <div className="stats">
                        <h1>2000+</h1>
                        <p>EXAMS</p>
                    </div>
                </div>
            </div>

            <div className="videos-section">
                <div className='top-heading'>
                    <h1>
                        POPULAR <span>VIDEOS</span>
                    </h1>
                    <button>
                        View All
                    </button>
                </div>
                <div className="cards">
                    <VideoCard imgSrc={Videoimg}/>
                    <VideoCard imgSrc={Videoimg}/>
                    <VideoCard imgSrc={Videoimg}/>
                    <VideoCard imgSrc={Videoimg}/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home