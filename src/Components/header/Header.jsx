import React from 'react'
import fbicon from '../../assets/icons/facebook.png'
import yticon from '../../assets/icons/youtube.png'
import igicon from '../../assets/icons/igfigmaicon.png'
import logo from '../../assets/logo.png'
import phoneIcon from '../../assets/phoneIcon.png'
import clockIcon from '../../assets/clockIcon.png'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header1 = () => {

    return (
        <div className="top-bar">
            <div className='top-links'>
                <span><Link to='/onlinecourses'>Popular Courses &nbsp;&nbsp;| </Link></span>
                <span><Link to='/contact'>Help Desk &nbsp;&nbsp;| </Link></span>
                <span><Link to={`${localStorage.getItem('token')?'/history':"/student-login"}`} >Login</Link></span>
            </div>
            <div className="top-icons">
                <a href="https://www.facebook.com/chmtime?mibextid=ZbWKwL" target='_blank'><img src={fbicon} width={"17vw"} alt="" /></a>
                <a href="https://www.youtube.com/@ASAPCHEMTIME" target='_blank'><img src={yticon} width={"17vw"} alt="" /></a>
                <a href="https://www.instagram.com/asapchemtime?igshid=YmMyMTA2M2Y%3D" target='_blank'><img src={igicon} width={"17vw"} alt="" /></a>
            </div>
        </div>
    )
}
const Header2 = () => {
    const handleTelephoneClick = () => {
        const phoneNumber = 'tel:+918595764714'; 
        window.location.href = phoneNumber;
      };
    return (
        <div className="top-contact">
            <div className="logo">
                <Link to="/" ><img src={logo} alt="" /></Link>
            </div>
            <div className="contact" onClick={handleTelephoneClick}>
                <div className="call">
                    <a href="tel:+918595764714"><img src={phoneIcon} alt="" /></a>
                    <div>
                        <p className='h1'>CALL US TODAY</p>
                        <p className='h2'>+91 8595764714 / 7011767872</p>
                    </div>
                </div>

                <div className="time">
                    <img src={clockIcon} alt="" />
                    <div>
                        <p className='h1'>WE ARE OPEN</p>
                        <p className='h2'>Mon-Sun 9:00AM - 8:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Header1, Header2 }