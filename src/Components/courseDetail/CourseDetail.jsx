import React from 'react'
import './CourseDetail.scss'
const CourseDetail = ({ imgSrc, heading1 }) => {
    return (
        <div className='course-detail'>
            <div className="course-img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="content">
                <h2>{heading1}</h2>
                <p>ChemTime offers Csir Net Chemical Science Coaching. The classroom Study Course is designed for comprehensive preparation. The main feature of the course is that all the subjects are taught from very basic to advanced level. Due emphasis is given to solving conceptual and objective questions in class.</p>
                <p>Csir-Net Chemical Science Coaching will also help you with TIFR, GATE, and SET exams.</p>
                <p>Classes are taken by Subject-wise highly Experienced Educators, having long-time teaching experience in their respective fields. This course is specially designed under the time management method to provide maximum information in a limited time period.</p>
                <p>There will be approximately 4 to 5 hours of classes daily for 6 days a Week for around Five Months.</p>
                <p>The assessment of performance is done on a regular basis through Topic-wise Tests which are followed by discussion.</p>
            </div>
        </div>
    )
}

export default CourseDetail