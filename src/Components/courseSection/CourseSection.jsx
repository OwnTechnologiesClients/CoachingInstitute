import React from 'react'
import './CourseSection.scss'
import img1 from '../../assets/homepage/course/c1.jpg'
import img2 from '../../assets/homepage/course/c2.jpg'
import img3 from '../../assets/homepage/course/c3.jpg'
import img4 from '../../assets/homepage/course/c4.jpg'
import { CourseCard } from '../cards/Cards';
import { Link } from 'react-router-dom';

const CourseSection = () => {

    const courseCardDetails = [
        {
            courseImg: img2,
            cardHeading: "Flutter",
            cardDetail: "Welcome to ASAP Institute's CSIR NET Chemical Sciences Online Batches, designed to pave your way to success in the CSIR NET Chemical Sciences examination.",
            price: 299
        },
        {
            courseImg: img1,
            cardHeading: "ReactJS",
            cardDetail: "Whether you are a working professional, a student, or someone seeking to master GATE Chemistry, our courses are designed to meet your specific needs.",
            price: 299
        },
        {
            courseImg: img4,
            cardHeading: "NextJs Online",
            cardDetail: "Welcome to the IIT-JAM Chemistry Online Batch by ASAP Institute, a transformative voyage towards conquering the IIT-JAM Chemistry examination.",
            price: 299
        },
        {
            courseImg: img3,
            cardHeading: "NodeJs Online",
            cardDetail: "Whether you are a working professional, a dedicated student, or someone looking to conquer the CUET(PG) Chemistry exam, our courses are tailored to meet your unique needs.",
            price: 299
        },
        {
            courseImg: img3,
            cardHeading: "MERN Stack Online",
            cardDetail: "Whether you are a working professional, a dedicated student, or someone looking to conquer the CUET(PG) Chemistry exam, our courses are tailored to meet your unique needs.",
            price: 299
        },


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