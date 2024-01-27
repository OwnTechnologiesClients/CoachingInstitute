import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import imgSrc1 from '../../assets/bg1.jpg'
import imgSrc2 from '../../assets/bg2.jpg'
import imgSrc3 from '../../assets/bg3.jpg'
import imgSrc4 from '../../assets/bg4.jpg'
import imgSrc6 from '../../assets/flutter-banner-mobile.jpg'
import imgSrc7 from '../../assets/frontend-banner-mobile.jpg'
import imgSrc8 from '../../assets/backend-banner-mobile.jpg'
import imgSrc9 from '../../assets/mern-banner-mobile.jpg'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.scss'

const HeroSection = ({ imgSrc, hd1, hd2 }) => {
    const [autoplay, setAutoplay] = useState(true);

    const startAutoplay = () => {
        setAutoplay(true);
    };

    const toggleAutoplay = () => {
        setAutoplay((prevAutoplay) => !prevAutoplay);
    };

    return (
        <div className="hero-section">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={
                    autoplay
                        ? {
                            delay: 2500,
                        }
                        : false
                }
                pagination={{
                    clickable: true,
                }}
                disableOnInteraction={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                onClick={toggleAutoplay} // Toggle autoplay on click
                onMouseLeave={startAutoplay}

            >
                {/* <SwiperSlide>
                    <img src={imgSrc1} className="heroimage" alt="" />
                </SwiperSlide> */}
                {/* <SwiperSlide>
                    <img src={imgSrc2} className="heroimage" alt="" />
                </SwiperSlide> */}
                {console.log(window.innerWidth)}
                {
                    window.innerWidth > 600 ? (
                        <>
                            <SwiperSlide>
                                <img src={imgSrc1} className="heroimage" alt="flutter course banner" caption="flutter course banner image" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={imgSrc2} className="heroimage" alt="frontend development banner" caption="frontend development course banner image"  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={imgSrc3} className="heroimage" alt="backend development banner" caption="backend development course banner image" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={imgSrc4} className="heroimage" alt="MERN stack development banner" caption="MERN development course banner image" />
                            </SwiperSlide>
                        </>
                    ) : (
                        <>
                            <SwiperSlide>
                                <img src={imgSrc6} className="heroimage" alt="flutter mobile version banner" caption="flutter development course banner image for mobile version website" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={imgSrc7} className="heroimage" alt="frontend mobile version banner" caption="frontend development course banner image for mobile version website"  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={imgSrc8} className="heroimage" alt="backend mobile version banner" caption="backend development course banner image for mobile version website" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={imgSrc9} className="heroimage" alt="mern-stack mobile version banner" caption="mern-stack development course banner image for mobile version website" />
                            </SwiperSlide>
                        </>
                    )
                }

            </Swiper>

            {/* <div className="detail">
                <h1>{hd1}</h1>
                <h2>{hd2}</h2>
                <p>Our institute is committed to providing the best education to students</p>
                <p>and helping them achieve their goals</p>
            </div> */}
        </div>
    );
};

export default HeroSection;
