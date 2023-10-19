import React from 'react'
import './CourseTable.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { SetCurrentUser } from "../../redux/userSlice";

const CourseTable = ({ mode }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleEnroll = (courseItem) => {
        if (!localStorage.getItem('token')) {
            navigate('/student-login')
        }
        const courseData = {}
        courseData['coursename'] = courseItem[0];
        courseData['courseduration'] = courseItem[2];
        courseData['price'] = courseItem[3];

        dispatch(SetCurrentUser(courseData));
        navigate('/form');
    }
    const tableFields = [
        [
            "NET Chemical Science",
            "45 minutes",
            "1 Year",
            399
        ],
        [
            "Gate Chemical Science",
            "45 minutes",
            "2 Years",
            2499
        ],
        [
            "UPSC Chemical Science",
            "45 minutes",
            "6 Month",
            699
        ],
        [
            "SSC Chemical Science",
            "45 minutes",
            "1 Year",
            999
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
                                <span>{item[0]}</span>
                                <span>{item[1]}</span>
                                <span>{item[2]}</span>
                                <span>₹ {item[3]}</span>
                                <button onClick={() => handleEnroll(item)}>Enroll Now</button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default CourseTable