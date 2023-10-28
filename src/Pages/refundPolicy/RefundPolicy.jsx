import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './RefundPolicy.scss';
import Footer from '../../components/footer/Footer'
import WelcomeSection from '../../components/welcomeSection/WelcomeSection'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'

const RefundPolicy = () => {
    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection
                imgSrc={bg5}
                hd1={"REFUND POLICY"}
                hd2={"FOR YOUR BETTER FUTURE"}
            />

            <div className='refund-policy-section'>

                <br></br><br></br>
                <h1>Return and Refund Policy</h1><br></br>
                <p>The Chemtime Academy works in a transparent manner. Our refund policy ensures that all the refunds are processed in a fair manner. In case, where a student expresses his intention of not attending the institute, and withdrawing his admission, he/she will have to visit the branch/ centre in person and submit his/her application in writing stating the reason for seeking a refund. The date of submission of written application for refund at the branch/ centre will be considered for the purpose of calculation of the refund amount.</p><br></br>
                <p>1. No Fee Refund Policy for seat booking into Classroom coaching program & Online class program.</p><br></br>
                <p>2. Fee paid against seat booking ( Classroom or Online program) are non-transferable.</p><br></br>
                <p>3. In case of excess fee payment, refund stands within 10 working days of receiving such complain.</p><br></br>
                <p>4. No Fee Refund Policy is available for Postal/Distance Learning/Booklet/Study Materials/Online Test Series/Pen-Drive Video lectures course.</p><br></br>
                <p>5. In case you feel that the service/product details provided to you are not as per your expectations, you must bring it to the notice of our administrator Email : hr@chemacademy.co.in Phone : +91-9136597244</p><br></br>

            </div>
            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default RefundPolicy