import React from 'react'
import './CourseDetail.scss'
const TestSeriesCourseDetail = ({ imgSrc, heading1, detailData }) => {
    return (
        <div className='course-detail'>
            <div className="course-img">
                <img src={detailData[heading1].image} alt="" />
            </div>
            <div className="content">
                <h2>{heading1}</h2>

                <p>{detailData[heading1]?.coursedHeading}</p>
                <p style={{ color: "#000" }}>Enroll Today and Embrace Success in {heading1.replace('(', '').replace(')', '')}!</p>

                <div className="why-join-container">
                    <h2>Why Opt for TECH FEVER's {heading1.replace('(', '').replace(')', '')} Test Series?</h2>
                    {Object.keys(detailData[heading1].courseLines).map((item, index) => {
                        return <div key={index} className='why-join'>
                            <p><strong>{item}</strong>:  {detailData[heading1].courseLines[item]}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TestSeriesCourseDetail