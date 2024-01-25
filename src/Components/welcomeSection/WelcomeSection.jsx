import React, { useState } from 'react'
import './WelcomeSection.scss'
import ss3 from '../../assets/welcome/flexible-learning.jpg'
import ss2 from '../../assets/welcome/hands-on-projects.jpg'
import ss1 from '../../assets/welcome/expert-instructors.jpg'
import ss4 from '../../assets/welcome/guranteed-internship.jpg'
import ss5 from '../../assets/welcome/personalized-attention.jpg'
import ss6 from '../../assets/welcome/cutting-edge-curriculum.jpg'
import { WelcomeCard } from '../cards/Cards';
import { Link, useNavigate } from 'react-router-dom';


export const WelcomeSubSection = () => {
    const [isPaused, setPaused] = useState(false);

    const handleMouseOver = () => {
        setPaused(true);
    };

    const handleMouseOut = () => {
        setPaused(false);
    };
    const notifications = [
        {
            url: "/onlinecourses/flutter",
            content: "Flutter Online Course"
        },
        {
            url: "/onlinecourses/reactjs",
            content: "ReactJs Online Course"
        },
        {
            url: "/onlinecourses/nextjs",
            content: "NextJs Online Course"
        },
        {
            url: "/onlinecourses/nodejs",
            content: "NodeJs Online Course"
        },
        {
            url: "/onlinecourses/mern-stack",
            content: "MERN Stack Online Course"
        },
        {
            url: "onlinecourses/flutter",
            content: "All Internship Courses"
        },
        {
            url: "/offlinecourses/flutter",
            content: "All Offline Courses"
        },
        {
            url: "/onlinecourses/flutter",
            content: "All Online Courses"
        },
        {
            url: "/onlinecourses/flutter",
            content: "All Low-Cost Courses"
        },
        {
            url: "https://blog.techfever.in/",
            content: "Blogs"
        },

    ]
    return (
        <div className='welcome-section'>
            <div>
                <div className="message">
                    <strong>Elaboration on Course Features</strong><br></br>
                    <p1>TECH FEVER prides itself on offering a cutting-edge learning experience with a range of features designed to empower and prepare students for success in the ever-evolving tech landscape. Here's an elaboration on our key course features:</p1>

                    <div className="cards">
                        <WelcomeCard imgSrc={ss1} title="EXPERT INSTRUCTORS" description="Learn from seasoned industry professionals with extensive real-world experience. Benefit from their insights, practical knowledge, and guidance throughout the course." />
                        <WelcomeCard imgSrc={ss2} title="HANDS-ON PROJECTS" description="Translate theoretical knowledge into practical skills with hands-on projects. Build a robust portfolio showcasing your ability to apply concepts to real-world scenarios." />
                        <WelcomeCard imgSrc={ss3} title="FLEXIBLE LEARNING" description="Life can be busy; that's why we offer flexible learning options, including online courses and part-time schedules." />
                    </div>


                    <strong>Why we are best as technology institute</strong><br></br>
                    <p1>At our technology institute, we go beyond education – we cultivate an environment that nurtures innovation, fosters collaboration, and prepares you for a successful and fulfilling career in the dynamic world of technology.</p1>

                    <div className="cards">
                        <WelcomeCard imgSrc={ss4} title="GURANTEED INTERNSHIP" description="Our internship program is unmatched. We have direct partnerships with innovative companies and fast-growing startups across industries. Through our connections, we are able to place students into meaningful intern roles where they gain valuable on-the-job experience." />
                        <WelcomeCard imgSrc={ss5} title="PERSONALIZED ATTENTION" description="Enjoy a personalized learning experience with smaller class sizes and individualized attention from instructors. Receive tailored feedback to ensure your understanding and progress throughout the program." />
                        <WelcomeCard imgSrc={ss6} title="CUTTING-EDGE CURRICULUM" description="Our curriculum is meticulously designed to encompass the latest trends and advancements in technology. Stay ahead of the curve with a syllabus that reflects the ever-evolving industry landscape." />
                    </div>
                </div>
            </div>
            <div className='quick-panel'>

                <h2 >QUICK LINKS</h2>

                <div className="quick-link-marquee-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <div>
                        {
                            notifications.map((item, index) => {
                                return <div className='notification' key={index}>
                                    <Link to={item.url}> <div>➠</div> <div className='content'>{item.content}</div></Link>
                                </div>
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}


const WelcomeSection = () => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/onlinecourses/flutter')
    }

    const newsAndUpdates = [
        {
            url: "/onlinecourses/flutter",
            content: "Exclusive Offer! Register for Our Flutter Development Course at Just 9000/-"
        },
        {
            url: "/onlinecourses/reactjs",
            content: "Limited-Time Offer: Enroll in Our React Development Course for Only 9000/-"
        },
        {
            url: "/onlinecourses/flutter",
            content: "Special Notice: Register for Flutter Development Course and Receive 3 Months of Extra Internship!"
        },
        {
            url: "/onlinecourses/mern-stack",
            content: "Limited-Time Offer: Enroll in Our MERN Stack Development Course and Receive a 3-Month Paid Internship!"
        },
        {
            url: "/onlinecourses/nodejs",
            content: "Exclusive Offer: Enroll in Our Offline Backend Development Course and Unlock a 3-Month Paid Internship!"
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
                    <h1>Welcome to TECHFEVER: Your Top-Ranked Destination for Expert Coaching in App Development & Web Development! Unlock Your Full Potential with Our </h1>
                    <p className='under-bar'>COMPREHENSIVE PROGRAMS</p>
                    <p1>Elevate your career with TECH FEVER! Gain expertise in app and web development through our industry-focused coaching. Our comprehensive programs include a unique opportunity: a 3-month internship with top-grade companies and startups. Learn from seasoned professionals, work on hands-on projects, and build a stellar portfolio. Our flexible learning options and dedicated career guidance ensure you're job-ready. Join TECH FEVER to not only master development skills but also secure valuable real-world experience. Shape your future with a blend of cutting-edge education and hands-on internships. Explore the possibilities at TECH FEVER – where careers take flight!</p1>
                    {/* <p1>We specialize in delivering high-quality coaching for a diverse range of chemistry-related entrance exams, which include CSIR NET Chemical Sciences, GATE Chemistry, TIFR Chemistry, and more.</p1> */}

                    <br></br>
                    <br></br>


                    <strong>Master the Future with TECH FEVER: Premier Coaching for App Development & Web Development Excellence</strong><br></br>
                    <p1>Our commitment to your success is unwavering. We prioritize your growth and achievement in every facet of our engagement. From tailored solutions to continuous support, we invest in your journey towards success. Our dedicated team ensures personalized attention, fostering an environment where your goals are not just met but exceeded. Join us in realizing your full potential - where commitment meets accomplishment. Your success is our priority at TECH FEVER.</p1>

                    <br></br>
                    <br></br>
                    <strong>Course Information</strong><br></br>
                    <p1>Dive into the Future of Tech with TECH FEVER's Affordable Courses! Explore App Development using Flutter, Web Development with React.js and Next.js, and Backend Development with Node.js and MERN Stack. Our pocket-friendly programs ensure quality education with a unique 3-month internship opportunity. Master the latest technologies and gain hands-on experience at an unbeatable price. Elevate your skills, build a robust portfolio, and launch your career in just a few months. Join TECH FEVER for a transformative journey where low cost meets high value. Unleash your potential in the dynamic realms of app and web development!</p1>
                    <br></br>
                    <button onClick={navigateTo}>View Details</button>
                    <br></br>
                    <br></br>

                </div>






            </div>

            <div className="marqueess">
                <div className='notification-panel'>

                    <h2 >NOTICE</h2>

                    <div className="marquee-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <div className={`marquee ${isPaused ? 'paused' : ''}`}>
                            {
                                newsAndUpdates.map((item, index) => {
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