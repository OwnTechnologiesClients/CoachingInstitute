import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import '../testSeries/TestSeries.scss';
import CourseLinks from '../../components/courseLinks/CourseLinks'
import TestSeriesTable from '../../components/courseTable/TestSeriesTable'
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import CourseTable from '../../components/courseTable/CourseTable';
import { Link, useNavigate } from 'react-router-dom';
import './NewBatch.scss'

const NewBatch = () => {

    const tableFields = {
        "offline": [
            [
                "Flutter Trainee",
                "2 Months",
                "3 Days in Week",
                25000
            ],
            [
                "Flutter Hustler",
                "4 Months",
                "3 Days in Week",
                35000
            ],
            [
                "Flutter Expert",
                "6 Months",
                "3 Days in Week",
                45000
            ],
            [
                "ReactJS Trainee",
                "2 Months",
                "3 days in week",
                25000
            ],
            [
                "ReactJS Hustler",
                "4 Months",
                "3 days in week",
                35000
            ],
            [
                "ReactJS Expert",
                "6 Months",
                "3 days in week",
                45000
            ],
            [
                "NextJS Trainee",
                "2 Months",
                "3 days in week",
                25000
            ],
            [
                "NextJS Hustler",
                "4 Months",
                "3 days in week",
                35000
            ],
            [
                "NextJS Expert",
                "6 Months",
                "3 days in week",
                45000
            ],
            [
                "NodeJS Trainee",
                "2 Months",
                "3 Days in Week",
                25000
            ],
            [
                "NodeJS Hustler",
                "4 Months",
                "3 Days in Week",
                35000
            ],
            [
                "NodeJS Expert",
                "6 Months",
                "3 Days in Week",
                45000
            ],
            [
                "MERN Stack Trainee",
                "2 Months",
                "3 Days in Week",
                25000
            ],
            [
                "MERN Stack Hustler",
                "4 Months",
                "3 Days in Week",
                35000
            ],
            [
                "MERN Stack Expert",
                "6 Months",
                "3 Days in Week",
                45000
            ]
        ],
        "online": [
            [
                "Flutter Trainee",
                "2 Months",
                "3 Days in Week",
                25000
            ],
            [
                "Flutter Hustler",
                "4 Months",
                "3 Days in Week",
                35000
            ],
            [
                "Flutter Expert",
                "6 Months",
                "3 Days in Week",
                45000
            ],
            [
                "ReactJS Trainee",
                "2 Months",
                "3 days in week",
                25000
            ],
            [
                "ReactJS Hustler",
                "4 Months",
                "3 days in week",
                35000
            ],
            [
                "ReactJS Expert",
                "6 Months",
                "3 days in week",
                45000
            ],
            [
                "NextJS Trainee",
                "2 Months",
                "3 days in week",
                25000
            ],
            [
                "NextJS Hustler",
                "4 Months",
                "3 days in week",
                35000
            ],
            [
                "NextJS Expert",
                "6 Months",
                "3 days in week",
                45000
            ],
            [
                "NodeJS Trainee",
                "2 Months",
                "3 Days in Week",
                25000
            ],
            [
                "NodeJS Hustler",
                "4 Months",
                "3 Days in Week",
                35000
            ],
            [
                "NodeJS Expert",
                "6 Months",
                "3 Days in Week",
                45000
            ],
            [
                "MERN Stack Trainee",
                "2 Months",
                "3 Days in Week",
                25000
            ],
            [
                "MERN Stack Hustler",
                "4 Months",
                "3 Days in Week",
                35000
            ],
            [
                "MERN Stack Expert",
                "6 Months",
                "3 Days in Week",
                45000
            ],
        ],
        "recorded": [
            [
                "IIT-JAM",
                "6 Months",
                "Recorded",
                2499
            ],
            [
                "IIT-JAM",
                "1 Year",
                "Recorded",
                3999
            ],
            [
                "IIT-JAM",
                "2 Year",
                "Recorded",
                4999
            ],
            [
                "GATE",
                "6 Months",
                "Recorded",
                4999
            ],
            [
                "GATE",
                "1 Year",
                "Recorded",
                8499
            ],
            [
                "GATE",
                "2 Year",
                "Recorded",
                10999
            ],
            [
                "CUET",
                "6 Months",
                "Recorded",
                2499
            ],
            [
                "CUET",
                "1 Year",
                "Recorded",
                3999
            ],
            [
                "CUET",
                "2 Year",
                "Recorded",
                4999
            ],
            [
                "CSIR NET (Chemical Science)",
                "6 Months",
                "Recorded",
                4999
            ],
            [
                "CSIR NET (Chemical Science)",
                "1 Year",
                "Recorded",
                8499
            ],
            [
                "CSIR NET (Chemical Science)",
                "2 Year",
                "Recorded",
                10999
            ]
        ]
    }


    const [isPaused, setPaused] = useState(false);

    const handleMouseOver = () => {
        setPaused(true);
    };

    const handleMouseOut = () => {
        setPaused(false);
    };

    const newsAndUpdates = [
        {
            url: "/onlinecourses/flutter",
            content: "Exclusive Offer! Register for Our Flutter Development Course at Just 9000/-"
        },
        {
            url: "/onlinecourses/reactjs",
            content: "Limited-Time Offer: Enroll in Our React Development Course for Only 9000/-"
        },
        {
            url: "/onlinecourses/flutter",
            content: "Special Notice: Register for Flutter Development Course and Receive 3 Months of Extra Internship!"
        },
        {
            url: "/onlinecourses/mern-stack",
            content: "Limited-Time Offer: Enroll in Our MERN Stack Development Course and Receive a 3-Month Paid Internship!"
        },
        {
            url: "/onlinecourses/nodejs",
            content: "Exclusive Offer: Enroll in Our Offline Backend Development Course and Unlock a 3-Month Paid Internship!"
        },


    ]


    const notifications = [
        {
            url: "/onlinecourses/flutter",
            content: "Flutter Online Course"
        },
        {
            url: "/onlinecourses/reactjs",
            content: "ReactJs Online Course"
        },
        {
            url: "/onlinecourses/nextjs",
            content: "NextJs Online Course"
        },
        {
            url: "/onlinecourses/nodejs",
            content: "NodeJs Online Course"
        },
        {
            url: "/onlinecourses/mern-stack",
            content: "MERN Stack Online Course"
        },
        {
            url: "onlinecourses/flutter",
            content: "All Internship Courses"
        },
        {
            url: "/offlinecourses/flutter",
            content: "All Offline Courses"
        },
        {
            url: "/onlinecourses/flutter",
            content: "All Online Courses"
        },
        {
            url: "/onlinecourses/flutter",
            content: "All Low-Cost Courses"
        },
        {
            url: "/videos",
            content: "Blogs"
        },

    ]
    return (
        <div className='test-series-page new-batch-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            {/* <HeroSection
                imgSrc={bg3}
                hd1={"TEST SERIES"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}
            <div className="test-series-section">
                {/* <CourseLinks 
                    activeLink={activeLink}
                    handleLinkClick={handleLinkClick}
                /> */}
                <div className="test-series-section-right-nav">


                    <div className="course-idea" >
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum ducimus blanditiis assumenda iste aliquid sapiente deleniti soluta in ratione officiis odit deserunt quaerat repellendus quasi aut repudiandae totam accusamus, reprehenderit possimus. Aliquam, dolorem!</p>
                        <h2 className='under-bar'>New Batch</h2> */}
                        <CourseTable mode={'Online Dashboard'} tableFields={tableFields.online} />
                        <CourseTable mode={'Offline Dashboard'} tableFields={tableFields.offline} />
                        {/* <CourseTable mode={'Recorded Dashboard'} tableFields={tableFields.recorded} /> */}
                    </div>

                </div>

                <div className="marqueess">
                    <div className='notification-panel'>

                        <h2 >NOTICE</h2>

                        <div className="marquee-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div className={`marquee ${isPaused ? 'paused' : ''}`}>
                                {
                                    newsAndUpdates.map((item, index) => {
                                        return <div className='notification' key={index}>
                                            <Link to={item.url}> <div>⚫</div> <div className='content'>{item.content}</div></Link>
                                        </div>
                                    })
                                }
                            </div>

                        </div>
                    </div>

                    <div className='quick-panel'>

                        <h2 >QUICK LINKS</h2>

                        <div className="quick-link-marquee-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div>
                                {
                                    notifications.map((item, index) => {
                                        return <div className='notification' key={index}>
                                            <Link to={item.url}> <div>➠</div> <div className='content'>{item.content}</div></Link>
                                        </div>
                                    })
                                }
                            </div>

                        </div>
                    </div>

                </div>



            </div>
            <WhatsappIcon />
            <Footer />
        </div>
    )
}

export default NewBatch