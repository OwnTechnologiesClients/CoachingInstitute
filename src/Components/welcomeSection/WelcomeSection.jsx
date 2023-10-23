import React from 'react'
import './WelcomeSection.scss'
import ss3 from '../../assets/ss3.png'
import ss2 from '../../assets/ss2.png'
import ss1 from '../../assets/ss1.jpg'
import { WelcomeCard } from '../cards/Cards';
import { useNavigate } from 'react-router-dom';


const WelcomeSection = () => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/about')
    }

    const notifications = [
        "this is a notification",
        "this is a notification",
        "this is a notification",
        "this is a notification",
        "this is a notification",
        "this is a notification",
    ]
    return (
        <div className="welcome-section">
            <div className="message">
                <h1>WELCOME TO OUR</h1>
                <p className='under-bar'>COACHING CENTER</p>
                <h3>Welcome to ASAP Chemtime, a premier educational institute that provides high-quality coaching classes for competitive exams in Chemistry and Mathematics</h3>
                <h4>Our institute is committed to providing the best education to students and helping them achieve their goals.</h4>
                <button onClick={navigateTo}>View Details</button>
            </div>
            <div className="cards">
                <WelcomeCard imgSrc={ss2} title="EXPERIENCE YOURSELF" description="Experience Yourself at our coaching center, where personalized guidance, cutting-edge resources, and a supportive learning environment combine to nurture your success. Unleash your full potential with us" />
                <WelcomeCard imgSrc={ss3} title="ONLINE LEARNING" description="Discover the power of Online Learning at our coaching center. Our interactive, flexible, and engaging courses bring quality education to your fingertips. Embrace a new era of learning and advance your future with us" />
                {/* <WelcomeCard imgSrc={ss1} title="MASTERY LEARNING" description="At our coaching center, we believe in Mastery Learning. Our tailored programs, expert instructors, and personalized support empower you to master subjects and achieve academic excellence. "/> */}
                <div className='notification-panel'>

                    <h2 className='under-bar'>LATEST <span>UPDATES</span></h2>
                    <marquee direction="up" scrollamount="2" onmouseover="this.stop()" onmouseout="this.start()" height="250">

                        {
                            notifications.map((item,index)=>{
                                return <ul key={index} className="list-info--1">

                                <li><a href="#" target="_blank">{item}</a></li>
    
                            </ul>
                            })
                        }
                        
                    </marquee>
                </div>

            </div>
        </div>
    )
}

export default WelcomeSection