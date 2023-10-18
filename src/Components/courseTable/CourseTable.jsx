import React from 'react'
import './CourseTable.scss'
import { useNavigate } from 'react-router-dom'
const CourseTable = ({ mode }) => {
    const navigate = useNavigate();
    const handleEnroll = (courseItem) => {
        console.log(courseItem)
        navigate('/form');
    }
    const tableFields = [
        [
            "NET Chemical Science",
            "45 minutes",
            "1 years",
            "₹399"
        ],
        [
            "Gate Chemical Science",
            "45 minutes",
            "3 years",
            "₹2499"
        ],
        [
            "UPSC Chemical Science",
            "45 minutes",
            "6 months",
            "₹699"
        ],
        [
            "SSC Chemical Science",
            "45 minutes",
            "3 months",
            "₹999"
        ],
    ]
    return (
        <div className='course-table'>
            <div className="dashboard">
                <h1>{mode}</h1>
                <div className="parent-row">
                    <span>Course</span>
                    <span>Class Time</span>
                    <span>Course Duration</span>
                    <span>Price</span>
                    <span>Registration</span>
                </div>
                {
                    tableFields.map((item, index) => {
                        return (
                            <div className="child-row" key={index}>
                                {item.map((textvalue, index1) => {
                                    return <span key={index1}>{textvalue}</span>
                                })}
                                <button onClick={()=>handleEnroll(item)}>Enroll Now</button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default CourseTable