import React from 'react'
import { Link } from 'react-router-dom'
import './CoursePageList.scss'
const CoursePageList = ({ hd1, hd2, link1, link2, link3 }) => {
    return (
        <div className="course-list">
            <h2>{hd1} <span>{hd2}</span></h2>
            <div className="course-links">
                <div className="course-link active">
                    <Link to="#">{link1}</Link>
                </div>
                <div className="course-link">
                    <Link to="#">{link2}</Link>
                </div>
                <div className="course-link">
                    <Link to="#">{link3}</Link>
                </div>
            </div>
        </div>
    )
}

export default CoursePageList