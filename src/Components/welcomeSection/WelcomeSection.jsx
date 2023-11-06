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
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
            content: "Free Spoken English or Special Discount for MP & HS Students"
        },
        {
            url: "/onlinecourses",
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
                    <h1>Welcome to ASAP Institute - Your Ultimate Destination for Excellence in</h1>
                    <p className='under-bar'>CHEMISTRY EXAMS</p>
                    <p1>Are you a dedicated student with your sights set on conquering chemistry-related entrance exams? Whether you're searching for premier IIT JAM coaching in Delhi, particularly in areas such as Jia Sarai and Hauz Khas, or if you're seeking expert guidance for CSIR NET Chemistry in Delhi, your search ends right here at ASAP Institute (formerly CHEMTIME)</p1>
                    <p1>We specialize in delivering high-quality coaching for a diverse range of chemistry-related entrance exams, which include CSIR NET Chemical Sciences, GATE Chemistry, TIFR Chemistry, and more.</p1>

                    <br></br>
                    <br></br>


                    <h5>Our Commitment to Your Success</h5>
                    <p1>At ASAP Institute (formerly CHEMTIME), our mission is to empower students like you with the knowledge and skills needed to excel in the competitive world of chemistry entrance exams. We understand that every student is unique, and that's why we offer a variety of coaching options to cater to your specific needs and preferences.</p1>

                    <br></br>
                    <br></br>
                    <h5>Course Information</h5>
                    <p1>ASAP Institute (Formerly CHEMTIME) offers a variety of courses designed to prepare students for chemistry-related entrance exams. Whether you are aiming to excel in CSIR NET Chemical Sciences, GATE Chemistry, IIT JAM, TIFR Chemistry, or other PhD entrances in Chemistry, we provide the ideal courses to meet your needs. Our courses are available in both online (live and recorded) and offline modes.</p1>
                    <br></br>
                    <button onClick={navigateTo}>View Details</button>
                    <br></br>
                    <br></br>
                    <h5>Elaboration on Course Features</h5>
                    <p1>At ASAP Institute (formerly CHEMTIME), we take immense pride in our courses that are meticulously designed to offer students a comprehensive and holistic preparation for various chemistry-related entrance exams. Our courses not only focus on academic excellence but also cater to the individual needs of our diverse student community.</p1>

                    <div className="cards">
                        <WelcomeCard imgSrc={ss2} title="TEACHING METHOD" description="Our experienced faculty, comprised of renowned scientists and professors, employ a unique teaching approach that emphasizes understanding chemistry in its purest form. Through live and recorded classes, they make complex concepts easy to grasp, ensuring that you gain a strong foundation." />
                        <WelcomeCard imgSrc={ss3} title="STUDY MATERIAL" description="We provide students with meticulously crafted study materials that are aligned with the exam syllabus. These materials are designed to solidify your understanding of key concepts and serve as valuable resources throughout your preparation journey." />
                        <WelcomeCard imgSrc={ss1} title="UNIQUE TEACHING" description="What sets ASAP Institute apart is our commitment to ensuring that all topics are comprehensively covered and delivered on schedule. This approach guarantees that you receive a well-rounded education and are well-prepared to tackle even the most challenging questions on your exams." />
                    </div>


                    <h5>Online Platform Benefits</h5>
                    <p1>Our online platform is designed to offer students a flexible and interactive learning experience that maximizes their success in chemistry entrance exams. Here are some of the key benefits</p1>

                    <div className="cards">
                        <WelcomeCard imgSrc={ss2} title="FLEXIBILITY" description="With our online platform, you have the freedom to choose your learning schedule. Access our live classes or recorded sessions at your convenience, allowing you to maintain a balance between your study and other commitments." />
                        <WelcomeCard imgSrc={ss3} title="ACCESS TO RECORDING" description="Never miss a class. Our online platform gives you access to recorded classes, ensuring that you can revisit lessons whenever you need to reinforce your understanding of specific topics." />
                        <WelcomeCard imgSrc={ss1} title="INTRACTIVE ELEMENTS" description="We believe that learning should be engaging. Our online platform incorporates interactive elements, such as quizzes and discussions, to keep students actively involved in their studies and to assess their progress." />
                    </div>
                </div>






            </div>

            <div className="marqueess">
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
                <div className='quick-panel'>

                    <h2 >QUICK LINKS</h2>

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

        </div>
    )
}

export default WelcomeSection