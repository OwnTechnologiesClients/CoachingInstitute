import React from 'react'
import Videoimg from '../../assets/video.png'
import { VideoCard } from '../cards/Cards';
import { useNavigate } from 'react-router-dom';
import './video.scss'

const VideoSection = () => {
    const navigate = useNavigate();
    
    const navigateTo = ()=>{
        navigate('/videos')
    }

    let videoLinks = [
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R",
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R"
    ]

    return (
        <div className="videos-section">
            
            <div className='top-heading'>
                <h1>
                    POPULAR <span className='under-bar'>VIDEOS</span>
                </h1>
                <button onClick={navigateTo}>
                    View All
                </button>
            </div>

            <div className="cards">

                {videoLinks.map((link,index)=>{
                   return <VideoCard key={index} videourl={link}/>
                })}

            </div>
        </div>
    )
}

export default VideoSection