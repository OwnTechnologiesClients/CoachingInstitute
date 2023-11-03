import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import imgSrc1 from '../../assets/bg1.jpg'
import imgSrc2 from '../../assets/bg2.jpg'
// import imgSrc3 from '../../assets/bg5.png'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.scss'

const HeroSection = ({ imgSrc, hd1, hd2 }) => {
    return (
        <div className="hero-section">
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter:true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide><img src={imgSrc1} className='heroimage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgSrc2} className='heroimage' alt="" /></SwiperSlide>
                {/* <SwiperSlide><img src={imgSrc3} className='heroimage' alt="" /></SwiperSlide> */}
            </Swiper>

            <div className='detail'>
                <h1>{hd1}</h1>
                <h2>{hd2}</h2>
                <p>Our institute is committed to providing the best education to students</p>
                <p>and helping them achieve their goals</p>
            </div>
        </div>
    )
}

export default HeroSection