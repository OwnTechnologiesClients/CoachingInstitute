import React, { useState } from 'react'
import './WelcomeSection.scss'
import ss3 from '../../assets/ss3.png'
import ss2 from '../../assets/ss2.png'
import ss1 from '../../assets/ss1.jpg'
import { WelcomeCard } from '../cards/Cards';
import { Link, useNavigate } from 'react-router-dom';


const WelcomeSection = () => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/about')
    }
    
    const notifications = [
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/courses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
    ]

    const [isPaused, setPaused] = useState(false);

    const handleMouseOver = () => {
        setPaused(true);
    };

    const handleMouseOut = () => {
        setPaused(false);
    };
    return (
        <div className="welcome-section">
            <div>
                <div className="message">
                    <h1>WELCOME TO OUR </h1>
                    <p className='under-bar'>COACHING CENTER</p>
                    <h3>Welcome to ASAP Chemtime, a premier educational institute that provides high-quality coaching classes for competitive exams in Chemistry and Mathematics</h3>
                    <h4>Our institute is committed to providing the best education to students and helping them achieve their goals.</h4>
                    <button onClick={navigateTo}>View Details</button>
                </div>
                <div className="cards">
                    <WelcomeCard imgSrc={ss2} title="EXPERIENCE YOURSELF" description="Experience Yourself at our coaching center, where personalized guidance, cutting-edge resources, and a supportive learning environment combine to nurture your success. Unleash your full potential with us" />
                    <WelcomeCard imgSrc={ss3} title="ONLINE LEARNING" description="Discover the power of Online Learning at our coaching center. Our interactive, flexible, and engaging courses bring quality education to your fingertips. Embrace a new era of learning and advance your future with us" />
                    <WelcomeCard imgSrc={ss1} title="MASTERY LEARNING" description="At our coaching center, we believe in Mastery Learning. Our tailored programs, expert instructors, and personalized support empower you to master subjects and achieve academic excellence. " />
                </div>
            </div>

            <div className='notification-panel'>

                <h2 >NEWS & UPDATES</h2>

                <div className="marquee-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <div className={`marquee ${isPaused ? 'paused' : ''}`}>
                        {
                            notifications.map((item, index) => {
                                return <div className='notification' key={index}>
                                    <Link to={item.url}> <div>⚫</div> <div className='content'>{item.content}</div></Link>
                                </div>
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WelcomeSection