import React, { useRef } from 'react';
import CoursePageList from '../../components/coursePageList/CoursePageList';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CourseLinks.scss';

const CourseLinks = ({ activeLink, handleLinkClick }) => {
    const form = useRef();
    const handleMessage = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        toast.success('We will contact you soon', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        if (form !== null) {
            emailjs.sendForm('service_k99s57e', 'template_2a0tus6', form.current, '7EjtnFEz-7ax6QsuK')
                .then((result) => {
                    console.log(result)
                }, (error) => {
                    console.log(error)
                });
            form.current.reset();
        }
    }

    const currentURL = window.location.href;

    // Split the URL by '/' and get the part after the last slash
    const parts = currentURL.split('/');
    const afterLastSlash = parts[parts.length - 1];

    const links = [
        [
            "CSIR-NET Chemical Sciences",
            "GATE Chemistry",
            "IIT-JAM Chemistry",
            "CUET (PG) Chemistry"
        ],
        [
            "Chemical Science Study Material",
            "GATE Chemistry Study Material",
            "UPSC Chemistry Study Material"
        ],
        [
            "Chemical Science Test Series",
            "GATE Chemistry Test Series",
            "UPSC Chemistry Test Series"
        ]
    ]
    return (
        <div className="course-page-left-nav">
            <CoursePageList
                hd1={"Courses"}
                hd2={"List"}
                links={links[0]}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={afterLastSlash === 'onlinecourses' || afterLastSlash === 'offlinecourses' ? `/${afterLastSlash}` : "/onlinecourses"}
            />
            <CoursePageList
                hd1={"Study"}
                hd2={"Material"}
                links={links[1]}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={'/studymaterial'}

            />
            <CoursePageList
                hd1={"Test"}
                hd2={"Series"}
                links={links[2]}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={'/testseries'}

            />

            <div className="opening-hours-list">
                <h2>Opening <span className='under-bar'>Hours</span></h2>
                <div className="timings">
                    <span>Monday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Tuesday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Wednesday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Thursday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Friday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Saturday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Sunday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>

            </div>

            <div className="contact-form">
                <h2>Quick <span className='under-bar'>Contact</span></h2>
                <form className="form-fields" ref={form} onSubmit={handleMessage}>
                    <input type="email" name="email" id="contact-email" placeholder='Enter Email' required />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Message' required></textarea>
                    <button type="submit" >Send Message</button>
                    <ToastContainer closeButton={false} />
                </form>
            </div>
        </div>
    )
}

export default CourseLinks