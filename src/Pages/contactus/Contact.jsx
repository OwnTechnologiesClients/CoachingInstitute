import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './Contact.scss';
import Footer from '../../components/footer/Footer'
import locationIcon from '../../assets/icons/location.png'
import callIcon from '../../assets/icons/call.png'
import mailIcon from '../../assets/icons/mail.png'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'

const Contact = () => {
    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection
                imgSrc={bg5}
                hd1={"CONTACT US"}
                hd2={"FOR YOUR BETTER FUTURE"}
            />

            <div className="contact-page-section">
                <div className="contact-cards">
                    <div className="card">
                        <img src={locationIcon} alt="" />
                        <div>
                            <h2>OUR OFFICE LOCATION</h2>
                            <p>#405, Lan Streen, Los Vegas, USA</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={callIcon} alt="" />
                        <div>
                            <h2>OUR CONTACT NUMBER</h2>
                            <p>+91 9999888777</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={mailIcon} alt="" />
                        <div>
                            <h2>OUR CONTACT EMAIL</h2>
                            <p>support@chemtime.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Interested in discussing?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum enim dolorem. Praesentium quaerat nesciunt voluptatem sit odio dolorum, aliquid expedita veniam sapiente earum natus</p>

                    <div className="form-fields">
                        <input name='name' placeholder='Enter Name'/>
                        <input type="email" name="email" id="email" placeholder='Enter Email' />
                        <input type="number" name="contactnumber" id="contactnumber" placeholder='Enter Contact Number' />
                        <textarea name="message" rows="10" placeholder='Enter Message'></textarea>
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </div>

            <WhatsappIcon/>
            <Footer />

        </div>
    )
}

export default Contact