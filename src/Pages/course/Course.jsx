import React from 'react'
import './Course.scss';
import { Header1, Header2 } from '../../components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'
import HeroSection from '../../components/heroSection/HeroSection'
import bg3 from '../../assets/bg3.png'
import CoursePageList from '../../components/coursePageList/CoursePageList'
import CourseDetail from './courseComponents/courseDetail/CourseDetail'
import courseDetail from '../../assets/courseDetail.png'
import CourseTable from './courseComponents/courseIdea/CourseTable';

const Course = () => {
    return (
        <div className="course-page">

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection imgSrc={bg3} hd1={"OFFLINE/ONLINE COURSES"} hd2={"FOR YOUR BETTER FUTURE"} />

            <div className="course-page-section">
                <div className="course-page-left-nav">
                    <CoursePageList
                        hd1={"Courses"}
                        hd2={"List"}
                        link1={"Chemical Science Coaching"}
                        link2={"GATE Chemistry Coaching"}
                        link3={"GATE Chemistry Coaching"}
                    />
                    <CoursePageList
                        hd1={"Study"}
                        hd2={"Material"}
                        link1={"Chemical Science Coaching"}
                        link2={"GATE Chemistry Coaching"}
                        link3={"GATE Chemistry Coaching"}
                    />
                    <CoursePageList
                        hd1={"Test"}
                        hd2={"Series"}
                        link1={"Chemical Science Study Material"}
                        link2={"GATE Chemistry Study Material"}
                        link3={"GATE Chemistry Study Material"}
                    />

                    <div className="opening-hours-list">
                        <h2>Opening <span>Hours</span></h2>
                        <div className="timings">
                            <span>Monday :</span>
                            <span>6:00 am - 8:00 pm</span>
                        </div>
                        <div className="timings">
                            <span>Tuesday :</span>
                            <span>6:00 am - 8:00 pm</span>
                        </div>
                        <div className="timings">
                            <span>Wednesday :</span>
                            <span>6:00 am - 8:00 pm</span>
                        </div>
                        <div className="timings">
                            <span>Thursday :</span>
                            <span>6:00 am - 8:00 pm</span>
                        </div>
                        <div className="timings">
                            <span>Friday :</span>
                            <span>6:00 am - 8:00 pm</span>
                        </div>
                        <div className="timings">
                            <span>Saturday :</span>
                            <span>6:00 am - 8:00 pm</span>
                        </div>
                        <div className="timings">
                            <span>Sunday :</span>
                            <span style={{ width: "50%" }}>Closed</span>
                        </div>

                    </div>

                    <div className="contact-form">
                        <h2>Quick <span>Contact</span></h2>
                        <div className="form-fields">
                            <input type="email" name="contact-email" id="contact-email" placeholder='Enter Email' />
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Message'></textarea>
                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="course-page-right-nav">
                    <CourseDetail imgSrc={courseDetail} heading1={"Chemical Science Coaching"} />
                    <div className="course-idea">
                        <h2>CourseIdea</h2>
                        <CourseTable mode={"Offline Dashboard"}/>
                        <CourseTable mode={"Online Dashboard"}/>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Course