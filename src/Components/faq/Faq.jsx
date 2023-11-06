import React, { useState } from 'react'
import './Faq.scss'
import ss3 from '../../assets/ss3.png'
import ss2 from '../../assets/ss2.png'
import ss1 from '../../assets/ss1.jpg'
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

                    <h1>Welcome to Excellence in Chemistry Education</h1><br></br>
                    <p1>At ASAP Institute, we invite you to explore the world of chemistry through our comprehensive coaching programs. We understand that chemistry is more than just a subject; it's the key to unlocking scientific advancements and innovation.<br></br><br></br>
                        Your journey to excellence begins here. Contact us today to embark on your chemistry exam preparation with ASAP Institute.
                    </p1>
                    <div className='top-heading'>
                        <br></br>
                        
                        <h1>
                            Frequently Asked Questions <span className='under-bar'>(FAQs)</span>
                        </h1>

                    </div>
                    
                    <br></br>
                    <br></br>

                    <strong>Admissions Process:</strong><br></br><br></br>
                    <h5>Q: How can I enroll in ASAP Institute's courses? </h5>
                    <p1>A: Enrolling in our courses is a straightforward process. You can visit our website and find the "Admissions" section, where you'll get detailed instructions on how to register for the course of your choice.</p1>

                    <br></br>
                    <br></br>
                    <strong>Study Materials:</strong><br></br><br></br>
                    <h5>Q: Are study materials provided for all courses? </h5>
                    <p1>A: Yes, we provide meticulously crafted study materials for all our courses. These materials are designed to align with the respective exam syllabi and serve as valuable resources during your preparation.</p1>

                    <br></br>
                    <br></br>
                    <strong>Class Schedules:</strong><br></br><br></br>
                    <h5>Q: Can I access live classes and recorded sessions for all courses? </h5>
                    <p1>A: Yes, you have the flexibility to choose between live classes and recorded sessions for most of our courses. This allows you to adapt your learning to your own schedule and preferences.</p1>

                    <br></br>


                </div>






            </div>


        </div>
    )
}

export default Faq