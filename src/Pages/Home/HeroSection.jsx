import React from 'react'
import heroImage from '../../assets/bg4.png'


const HeroSection = () => {
    return (
        <div className="hero-section">
            <img src={heroImage} className='heroimage' alt="" />

            <div className='detail'>
                <h1>BEST EDUCATION </h1>
                <h2>FOR YOUR BETTER FUTURE</h2>
                <p>We provide always our best service of our clients always </p>
                <p>Try to client's trust satisfaction</p>
            </div>
        </div>
    )
}

export default HeroSection