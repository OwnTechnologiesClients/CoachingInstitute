import React from 'react'
import './Cards.scss'
import { useNavigate } from 'react-router-dom'

const WelcomeCard = ({ imgSrc }) => {
    return (
        <div className='welcome-card'>
            <img src={imgSrc} alt="" />
            <div >
                <h2 className='under-bar'>EXPERIENCE YOURSELF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future</p>
            </div>
        </div>
    )
}
const CourseCard = ({ imgSrc }) => {
    const navigate = useNavigate()
    const navigateTo = () => {
        navigate('/courses')
    }
    return (
        <div className='course-card'>
            <div className="price">
                ₹299
            </div>
            <img src={imgSrc} alt="" />
            <div >
                <h2 className='under-bar'>CSIR-NET/JRF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future</p>
            </div>
            <button onClick={navigateTo}>VIEW DETAILS</button>
        </div>
    )
}
const VideoCard = ({ imgSrc, hrefLink }) => {
    return (
        <div className='video-card'>
            <a href={hrefLink} target='_blank'><img src={imgSrc} alt="" /></a>
            <div >
                <h2 className='under-bar'>CSIR-NET/JRF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future</p>
            </div>
            <button>WATCH NOW</button>
        </div>
    )
}

export { WelcomeCard, CourseCard, VideoCard }