import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './PopularVideos.scss';
import Videoimg from '../../assets/video.png'
import { VideoCard } from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'

const PopularVideos = () => {
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
                <h2><span>POPULAR</span> VIDEOS</h2>
                <div className="video-cards">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12].map((item, index) => {
                        return (
                            <VideoCard key={index} imgSrc={Videoimg} />
                        )
                    })}
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default PopularVideos