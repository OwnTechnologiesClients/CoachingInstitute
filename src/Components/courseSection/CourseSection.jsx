import React from 'react'
import './CourseSection.scss'
import img1 from '../../assets/homepage/course/courseimage1.png'
import img2 from '../../assets/course.png'
import img3 from '../../assets/course.png'
import img4 from '../../assets/course.png'
import { CourseCard} from '../cards/Cards';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

const CourseSection = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateTo = () => {
        dispatch(SetActiveCourse())
        navigate('/courses')
    }

    const courseCardDetails = [
        {
            courseImg:img1,
            cardHeading:"CSIR-NET/JRF",
            cardDetail:"We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
            price:299
        },
        {
            courseImg:img2,
            cardHeading:"CSIR-NET/JRF",
            cardDetail:"We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
            price:299
        },
        {
            courseImg:img3,
            cardHeading:"CSIR-NET/JRF",
            cardDetail:"We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
            price:299
        },
        {
            courseImg:img4,
            cardHeading:"CSIR-NET/JRF",
            cardDetail:"We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
            price:299
        }
    ]
    return (
        <div className="course-section">
            <div className='top-heading'>
                <h1>
                    OUR <span className='under-bar'>COURSES</span>
                </h1>
                <button onClick={navigateTo}>
                    View All
                </button>
            </div>
            <div className="cards">

                {courseCardDetails.map((item,index)=>{
                    return <CourseCard key={index} imgSrc={item.courseImg} price={item.price} homeCourseHeading={item.cardHeading} homeCourseDetail={item.cardDetail} />
                })}
                
            </div>
        </div>

    )
}

export default CourseSection