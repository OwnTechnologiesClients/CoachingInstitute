import React from 'react'
import './CourseSection.scss'
import flutterCourseImg from '../../assets/homepage/course/flutter-course.jpg'
import reactAndNextJsImg from '../../assets/homepage/course/reactjs-nextjs-course.jpg'
import nodejsMongodbImg from '../../assets/homepage/course/nodejs-mongodb.jpg'
import mernStackImg from '../../assets/homepage/course/mern-stack.jpg'
import { CourseCard } from '../cards/Cards';
import { Link } from 'react-router-dom';

const CourseSection = () => {

    const courseCardDetails = [
        {
            courseImg: flutterCourseImg,
            cardHeading: "Mobile Application Development",
            cardDetail: "Dive into the future of mobile app development with ASAP Institute's Flutter course. Master cross-platform app creation and UI design using this powerful framework. Elevate your skills, gain hands-on experience, and launch a rewarding career. Join us for a transformative learning journey in mobile app development with Flutter.",
            price: 299
        },
        {
            courseImg: reactAndNextJsImg,
            cardHeading: "Frontend Development",
            cardDetail: "Elevate your web development skills with ASAP Institute's Frontend Development course. Master React.js and Next.js, creating dynamic and responsive user interfaces. Gain hands-on experience in crafting cutting-edge web applications. Join us for an industry-focused, transformative learning experience in frontend development using React.js and Next.js",
            price: 299
        },
        {
            courseImg: nodejsMongodbImg,
            cardHeading: "Backend Development",
            cardDetail: "Fuel your backend development expertise with ASAP Institute's Node.js course. Master server-side scripting, API integration, and database management. Gain hands-on experience in building robust server-side applications. Join us for an industry-focused, transformative learning experience and propel your career in backend development with Node.js.",
            price: 299
        },
        {
            courseImg: mernStackImg,
            cardHeading: "Full Stack Development",
            cardDetail: "Unlock the full spectrum of development skills with ASAP Institute's Full Stack Development course. Master MongoDB, Express.js, React.js, and Node.js (MERN stack). Acquire the expertise to build dynamic and scalable applications. Join us for an industry-focused, transformative learning experience and excel in full-stack development",
            price: 299
        },
        // {
        //     courseImg: nodejsMongodbImg,
        //     cardHeading: "MERN Stack",
        //     cardDetail: "Elevate your career in full-stack development with ASAP Institute's MERN Stack course. Master MongoDB, Express.js, React.js, and Node.js to build dynamic and scalable applications. Gain hands-on experience and launch into a successful full-stack development career. Join us for an industry-focused, transformative learning experience.",
        //     price: 299
        // },


    ]
    return (
        <div className="course-section">
            <div className='top-heading'>
                <h1>
                    OUR <span className='under-bar'>COURSES</span>
                </h1>
                <button>
                    <Link to='/onlinecourses/csir-net'> View All</Link>
                </button>
            </div>
            <div className="cards">

                {courseCardDetails.map((item, index) => {
                    return <CourseCard key={index} imgSrc={item.courseImg} price={item.price} homeCourseHeading={item.cardHeading} homeCourseDetail={item.cardDetail} />
                })}

            </div>
        </div>

    )
}

export default CourseSection