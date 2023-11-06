import React from 'react'
import './CourseHeroSection.scss'

const CourseHeroSection = ({imgSrc,hd1,hd2}) => {
    return (
        <div className="course-hero-section">
            <img src={imgSrc} className='heroimage' alt="" />

            <div className='detail'>
                <h1>{hd1}</h1>
                <h2>{hd2}</h2><br></br>
                <p>Our institute is committed to providing the best education to students</p>
                <p>and helping them achieve their goals</p>
            </div>
        </div>
    )
}

export default CourseHeroSection