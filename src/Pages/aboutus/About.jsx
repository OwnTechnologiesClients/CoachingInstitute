import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './About.scss';
import Footer from '../../components/footer/Footer'
import WelcomeSection from '../../components/welcomeSection/WelcomeSection'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import { Helmet } from "react-helmet";


const About = () => {
    return (
        <div className='study-material-page'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
                <meta name="description" content="Description content" />
            </Helmet>
            <Header1 />
            <Header2 />
            <Navbar />

            {/* <HeroSection
                imgSrc={bg5}
                hd1={"ABOUT US"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}

            {/* <WelcomeSection /> */}

            <div className="who-we-are"><br></br><br></br>
                <h2 className='under-bar'><span>WHO</span> WE ARE</h2>
                <div className="description">
                    <p>Discover excellence at TECH FEVER, India's premier technology coaching center. We specialize in mobile application, frontend, backend, and MERN stack development. With a unique 3-month internship guarantee, our commitment extends to your success. Experience a risk-free journey with our 100% refund policy if not satisfied with our coaching and internship promise. </p><br />
                    {/* <p>Our vision at ASAP Chemtime is to be the most trusted and respected educational institute for competitive exams in Chemistry and Mathematics. We aim to provide high-quality education that empowers students to achieve their full potential and build successful careers in their chosen fields.</p><br />
                    <p>Our mission at ASAP Chemtime is to provide a comprehensive and personalized learning experience to students who aspire to crack competitive exams in Chemistry and Mathematics. We offer coaching classes, study material, and test series for exams such as:</p><br /> */}

                    <h3>What you'll learn:</h3>
                    <ul>
                        <li> • <h6>Premier Technology Coaching: </h6> TECH FEVER stands as India's best technology coaching center, offering specialized courses in mobile application, frontend, backend, and MERN stack development.</li>
                        <li> • <h6>3-Month Internship Guarantee: </h6> Elevate your skills with our unique 3-month internship guarantee, ensuring practical experience for a seamless transition into the professional sphere.</li>
                        <li> • <h6>Comprehensive Development Courses: </h6> Master the intricacies of mobile application, frontend, backend, and MERN stack development through our comprehensive and industry-focused courses.</li>
                        <li> • <h6>Expert Instructors: </h6> Learn from seasoned professionals and experts in the field, ensuring a top-notch education and practical insights into real-world scenarios.</li>
                        <li> • <h6>Risk-Free Learning Experience: </h6> Experience a risk-free journey with TECH FEVER. We back our coaching and internship promise with a 100% refund policy if you're not completely satisfied.</li>
                        <li> • <h6>Transformative Learning Environment: </h6> Immerse yourself in a dynamic learning environment that fosters innovation, collaboration, and continuous growth.</li>
                        <li> • <h6>Career-Ready Skills: </h6> Acquire the skills needed to excel in today's tech landscape, ensuring you're well-prepared for a successful and fulfilling career.</li>
                        <li> • <h6>Industry-Aligned Curriculum: </h6> Our courses feature a curriculum aligned with industry demands, ensuring relevance and keeping you ahead of the curve.</li>
                        <li> • <h6>Personalized Support: </h6> Benefit from personalized support and guidance from our dedicated team, ensuring your success throughout the learning journey.</li>
                        <li> • <h6>Join TECH FEVER Today: </h6> Transform your aspirations into reality. Join TECH FEVER, the epitome of technology education in India, and embark on a journey of skill enhancement and career excellence.

                        </li>
                        <li> • <h6>And much more!</h6></li>

                    </ul>

                    {/* <p>Join us at ASAP Chemtime and take the first step towards a successful career in Chemistry and Mathematics. We are committed to helping you achieve your goals and empowering your dreams.</p> */}
                </div>
            </div>
            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default About