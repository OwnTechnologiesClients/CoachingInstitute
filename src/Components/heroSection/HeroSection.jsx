import React from 'react'
import './Hero.scss'

const HeroSection = ({imgSrc,hd1,hd2}) => {
    return (
        <div className="hero-section">
            <img src={imgSrc} className='heroimage' alt="" />

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