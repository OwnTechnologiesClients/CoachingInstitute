import React from 'react';
import CoursePageList from '../../components/coursePageList/CoursePageList';
import './CourseLinks.scss';

const CourseLinks = ({activeLink,handleLinkClick}) => {    

    return (
        <div className="course-page-left-nav">
            <CoursePageList
                hd1={"Courses"}
                hd2={"List"}
                link1={"Chemical Science Coaching"}
                link2={"GATE Chemistry Coaching"}
                link3={"UPSC Chemistry Coaching"}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={'/courses'}
            />
            <CoursePageList
                hd1={"Study"}
                hd2={"Material"}
                link1={"Chemical Science Study Material"}
                link2={"GATE Chemistry Study Material"}
                link3={"UPSC Chemistry Study Material"}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={'/studymaterial'}

            />
            <CoursePageList
                hd1={"Test"}
                hd2={"Series"}
                link1={"Chemical Science Test Series"}
                link2={"GATE Chemistry Test Series"}
                link3={"UPSC Chemistry Test Series"}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={'/testseries'}

            />

            <div className="opening-hours-list">
                <h2>Opening <span className='under-bar'>Hours</span></h2>
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
                <h2>Quick <span className='under-bar'>Contact</span></h2>
                <div className="form-fields">
                    <input type="email" name="contact-email" id="contact-email" placeholder='Enter Email' />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Message'></textarea>
                    <button type="submit">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default CourseLinks