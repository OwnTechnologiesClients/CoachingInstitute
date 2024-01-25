import React, { useState } from 'react'
import './Faq.scss'

import { WelcomeCard } from '../cards/Cards';
import { Link, useNavigate } from 'react-router-dom';


const Faq = () => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/about')
    }



    return (
        <div className="faq-section">
            <div>
                <div className="message">

                    <h2>Welcome to TECH FEVER Coaching Institute</h2><br></br>
                    <p1>Where Innovation Meets Education! At our institute, we are committed to providing a transformative learning experience in the dynamic realm of technology. Get ready to embark on a journey of skill enhancement, innovation, and success. Let's unlock your full potential together! </p1>
                    <div className='top-heading'>
                        <br></br>

                        <h2>
                            Frequently Asked Questions <span className='under-bar'>(FAQs)</span>
                        </h2>

                    </div>

                    <br></br>
                    <br></br>

                    {/* <strong>Admissions Process:</strong><br></br><br></br> */}
                    <h5>Q: What are the steps to sign up for classes at TECH FEVER?</h5>
                    <p1>A: To enroll in TECH FEVER's courses, visit our website, choose your desired program, and complete the online application form. Submit any required documentation, review terms, and process payment. Upon confirmation, access learning resources and engage in an enriching educational experience. Welcome to TECH FEVER!</p1>

                    <br></br>
                    <br></br>

                    <h5>Q: Does completing the course certificate guarantee that I will receive a 3-month internship?</h5>
                    <p1>A: Once you complete your program at TECH FEVER, you will have the opportunity to participate in a 3-month internship.</p1>

                    <br></br>
                    <br></br>
                    <h5>Q: Am I receiving compensation for my internship, or is it an unpaid position?</h5>
                    <p1>A: You will get paid for your internship at the rate that is standard for the industry.</p1>

                    <br></br>
                    <br></br>

                    <h5>Q: Will I be awarded a certificate upon finishing the course, in addition to an internship certificate?</h5>
                    <p1>A: Upon completing the course, you will receive a certificate of completion. Additionally, after finishing the entire internship program, you will be given an internship certificate as well.</p1>

                    <br></br>
                    <br></br>




                </div>






            </div>


        </div>
    )
}

export default Faq