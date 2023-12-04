import React from 'react'
import './CourseDetail.scss'
const CourseDetail = ({ imgSrc, heading1, detailData}) => {
    return (
        <div className='course-detail'>
            <div className="course-img">
                <img src={detailData[heading1].image} alt="" />
            </div>
            <div className="content">
                <h2>{heading1}</h2>
                {detailData[heading1].courseLines.map((item,index)=>{
                    return <p key={index} >{item}</p>
                })}
            </div>
        </div>
    )
}

export default CourseDetail