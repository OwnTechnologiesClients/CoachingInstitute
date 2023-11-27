import React, { useState } from 'react'
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

    const [activePlaylist, setactivePlaylist] = useState('Quantum Chemistry');
    const [activePlaylistLink, setactivePlaylistLink] = useState('PL2EYCqZ7oXvLKiyVMg6AaWFNYVkmmOEZj');

    let videoLinks = [
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R",
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",

    ]

    let playlists = [
        {
            name: "Chemical Science",
            numberofvideos: 5,
            playlistLink: "https://www.youtube.com/playlist?list=PL2EYCqZ7oXvLKiyVMg6AaWFNYVkmmOEZj"
        },
        {
            name: "Atomic Science",
            numberofvideos: 25,
            playlistLink: "https://www.youtube.com/playlist?list=PL2EYCqZ7oXvLlQZbB8xVJh0mwomAiJeGF"
        },
        {
            name: "Physical Science",
            numberofvideos: 15,
            playlistLink: "https://www.youtube.com/playlist?list=PL2EYCqZ7oXvLKiyVMg6AaWFNYVkmmOEZj"
        },
    ]

    const handleActivePlaylist = (item) => {

        const pllink = item.playlistLink

        const regex = /[?&]list=([^&]+)/;
        const match = pllink.match(regex);

        if (match) {
            const playlistId = match[1];
            setactivePlaylistLink(playlistId);
        } else {
            console.error('Invalid YouTube playlist link');
        }

        setactivePlaylist(item.name);
    }

    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            {/* <HeroSection
                imgSrc={bg5}
                hd1={"POPULAR VIDEOS"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}

            <div className="popular-videos-section">
                <h2 className='under-bar'><span>POPULAR</span> VIDEOS</h2>
                <div className="video-cards">
                    {videoLinks.map((link, index) => {
                        return <VideoCard key={index} videourl={link} />
                    })}
                </div>

                <h2 className='under-bar'><span>ALL PLAYLIST</span> VIDEOS</h2>
                <div className='playlist-cards'>
                    {
                        playlists.map((item, index) => {
                            return <div key={index} className="card"
                                onClick={() => handleActivePlaylist(item)}>
                                <h1>{item.numberofvideos}+ Videos</h1>
                                <iframe width='370' height="220" src={`https://www.youtube.com/embed/videoseries?si=Z02FiG3_6G0HTb2M&amp;list=${activePlaylistLink}`} title="YouTube video player" frameborder="0" ></iframe>
                                <h3>{item.name}</h3>
                            </div>
                        })
                    }
                </div>

                <div className="main-video-section">
                    <h2 className='under-bar'>{activePlaylist}</h2>
                    <iframe height="690" src={`https://www.youtube.com/embed/videoseries?si=Z02FiG3_6G0HTb2M&amp;list=${activePlaylistLink}`} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen showinfo={1}></iframe>
                </div>
            </div>

            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default PopularVideos