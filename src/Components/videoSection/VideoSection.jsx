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
                <VideoCard imgSrc={Videoimg} />
                <VideoCard imgSrc={Videoimg} />
                <VideoCard imgSrc={Videoimg} />
                <VideoCard imgSrc={Videoimg} />
            </div>
        </div>
    )
}

export default VideoSection