import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './PopularVideos.scss';
import Videoimg from '../../assets/video.png'
import { VideoCard } from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'

const PopularVideos = () => {
    let videoLinks = [
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R",
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R",
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R",
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R",
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R",
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R"
    ]
    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection
                imgSrc={bg5}
                hd1={"POPULAR VIDEOS"}
                hd2={"FOR YOUR BETTER FUTURE"}
            />

            <div className="popular-videos-section">
                <h2 className='under-bar'><span>POPULAR</span> VIDEOS</h2>
                <div className="video-cards">
                {videoLinks.map((link,index)=>{
                   return <VideoCard key={index} videourl={link}/>
                })}
                </div>
            </div>
            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default PopularVideos