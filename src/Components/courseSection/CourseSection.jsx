import React from 'react'
import './CourseSection.scss'
import courseImg from '../../assets/course.png'
import { CourseCard} from '../cards/Cards';
import { useNavigate } from 'react-router-dom';

const CourseSection = () => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/courses')
    }
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
                <CourseCard imgSrc={courseImg} />
                <CourseCard imgSrc={courseImg} />
                <CourseCard imgSrc={courseImg} />
                <CourseCard imgSrc={courseImg} />
            </div>
        </div>

    )
}

export default CourseSection