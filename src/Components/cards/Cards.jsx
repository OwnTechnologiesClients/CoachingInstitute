import React from 'react'
import './Cards.scss'

const WelcomeCard = ({ imgSrc }) => {
    return (
        <div className='welcome-card'>
            <img src={imgSrc} alt="" />
            <div >
                <h2>EXPERIENCE YOURSELF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future</p>
            </div>
        </div>
    )
}
const CourseCard = ({ imgSrc }) => {
    return (
        <div className='course-card'>
            <div className="price">
            ₹299
            </div>
            <img src={imgSrc} alt="" />
            <div >
                <h2>CSIR-NET/JRF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future</p>
            </div>
            <button>WATCH NOW</button>
        </div>
    )
}
const VideoCard = ({ imgSrc }) => {
    return (
        <div className='video-card'>
            <img src={imgSrc} alt="" />
            <div >
                <h2>CSIR-NET/JRF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future</p>
            </div>
            <button>VIEW DETAILS</button>
        </div>
    )
}

export { WelcomeCard, CourseCard,VideoCard }