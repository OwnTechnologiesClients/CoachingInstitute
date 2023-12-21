import React, { useRef } from 'react'
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
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Contact = () => {
    // const form = useRef();
    const formRef = useRef();


    const handleSubmit = async (e) => {
        e.preventDefault();

        //creating form entries object
        const formData = new FormData(formRef.current);
        const formObject = {};

        formData.forEach((value, key) => {
            // Use 'set' to handle multiple values for the same key (e.g., checkboxes)
            formObject[key] = formObject[key] ? [...formObject[key], value] : value;
        });

        // console.log('Form Data:', formObject);

        //sending data to backend
        // const response = await
        // axios({
        //     method: 'post',
        //     url: 'https://localhost:5000/api/student/discussing',
        //     data: formObject,
        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem("token")}`
        //     }
        // });

        //sending email
        emailjs.sendForm('service_89es95f', 'template_9s6e5ki', formRef.current, 'VPawiZbhu5LiJfU63')
            .then((result) => {
                console.log(result)
                toast.success('We will contact you soon', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            }, (error) => {
                console.log(error)
                toast.warn(response.data.message, {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            });

        // toast on successful sending
        // if(response.data.success){

        //     toast.success('We will contact you soon', {
        //         position: 'bottom-right',
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: false,
        //         draggable: false,
        //         progress: undefined,
        //     });
        // }
        // else{
        //     toast.warn(response.data.message, {
        //         position: 'bottom-right',
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: false,
        //         draggable: false,
        //         progress: undefined,
        //     });
        // }
        formRef.current.reset();

    }
    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            {/* <HeroSection
                imgSrc={bg5}
                hd1={"CONTACT US"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}

            <div className="contact-page-section">
                <div className="contact-cards">
                    <div className="card">
                        <img src={locationIcon} alt="" />
                        <div>
                            <h2>OUR OFFICE LOCATION</h2>
                            <p>28 B/7/1, Lalitaksh Singh Lakra Marg, Jia Sarai, Hauz Khas, New Delhi, Delhi 110016</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={callIcon} alt="" />
                        <div>
                            <h2>OUR CONTACT NUMBER</h2>
                            <p>+91 8595764714 / 7011767872</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={mailIcon} alt="" />
                        <div>
                            <h2>OUR CONTACT EMAIL</h2>
                            <p>chemtimeinstitute@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h2 className='under-bar'>Interested in discussing?</h2>
                    <p>Have questions or need assistance? Contact us today. We're here to help and eager to hear from you. Your feedback and inquiries are valuable to us. We look forward to connecting with you!</p>

                    <form className="form-fields" ref={formRef} onSubmit={handleSubmit} >
                        <input name='name' placeholder='Enter Name' required />
                        <input type="email" name="email" id="email" placeholder='Enter Email' required />
                        <input type="number" name="contactnumber" id="contactnumber" placeholder='Enter Contact Number' required />
                        <textarea name="message" rows="10" placeholder='Enter Message' required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    <ToastContainer closeButton={false} />
                </div>
            </div>

            <div className="google-map-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7593345109117!2d77.18681967533229!3d28.546952675711545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d408a72ee1d%3A0x59c4a843f22c5df3!2sASAP%20Chemtime%20Institute%20-%20Best%20coaching%20for%20csir%20net%20%2C%20gate%2C%20iit%20jam%20chemistry%20in%20Delhi.!5e0!3m2!1sen!2sin!4v1698921931108!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>

            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default Contact