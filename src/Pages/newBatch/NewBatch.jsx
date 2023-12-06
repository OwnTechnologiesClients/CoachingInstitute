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
                "CSIR NET + GATE (Chemical Science)",
                "6 Months",
                "Regular",
                29000
            ],
            [
                "CSIR NET + GATE (Chemical Science)",
                "1 Year",
                "Weekend",
                35000
            ],
            [
                "CUET",
                "6 Months",
                "Regular",
                12000
            ],
            [
                "GATE",
                "6 Months",
                "Regular",
                29000
            ],
            [
                "GATE",
                "1 Year",
                "Weekend",
                35000
            ],
            [
                "IIT-JAM",
                "6 Months",
                "Regular",
                25000
            ],
            [
                "IIT-JAM",
                "1 Year",
                "Weekend",
                25000
            ],

            [
                "IIT-JAM",
                "2 Year",
                "Weekend",
                30000
            ]
        ],
        "online": [
            [
                "CSIR NET (Chemical Science)",
                "6 Months",
                "Regular",
                17700
            ],
            [
                "CSIR NET (Chemical Science)",
                "1 Year",
                "Weekend",
                20000
            ],
            [
                "CUET",
                "6 Months",
                "Regular",
                8000
            ],
            [
                "GATE",
                "6 Months",
                "Regular",
                15000
            ],
            [
                "GATE",
                "1 Year",
                "Weekend",
                20000
            ],
            [
                "IIT-JAM",
                "6 Months",
                "Regular",
                12000
            ],
            [
                "IIT-JAM",
                "1 Year",
                "Weekend",
                12000
            ],

            [
                "IIT-JAM",
                "2 Year",
                "Weekend",
                15000
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
            url: "/testseries",
            content: "Test Series for CSIR NET Dec 2023 is now live. Sharpen your skills and boost your preparation by joining now!            "
        },
        {
            url: "/testseries",
            content: "Test Series for GATE 2024 is live. Don't miss this opportunity to practice and enhance your exam readiness. Join now!            "
        },
        {
            url: "/testseries",
            content: "Test Series for IIT JAM 2024 is now available. Enroll today to assess your preparation and improve your performance!"
        },
        {
            url: "/offlinecourses",
            content: "CSIR NET June 2024 Offline Batch is set to commence on January 5, 2023. Register now for in-person classes and personalized guidance."
        },
        {
            url: "/onlinecourses",
            content: "CSIR NET June 2024 Online Batch starts on January 5, 2023. Secure your place for online learning with our experienced faculty."
        },
        {
            url: "/offlinecourses",
            content: "GATE 2025 Offline Batch begins on February 18, 2023. Register early to reserve your spot for comprehensive offline coaching."
        },
        {
            url: "/onlinecourses",
            content: "GATE 2025 Online Batch also starts on February 18, 2023. Join our online classes for flexible and effective exam preparation."
        },
        {
            url: "/offlinecourse",
            content: "IIT JAM 2025 Offline Batch is scheduled to begin on February 18, 2023. Registration is open for in-person coaching sessions."
        },
        {
            url: "/onlinecourses",
            content: "IIT JAM 2025 Online Batch starts on February 18, 2023. Register now for our online classes and access quality education from the comfort of your home."
        },

    ]

    const notifications = [
        {
            url: "/testseries",
            content: "Test Series"
        },
        {
            url: "/studymaterial",
            content: "Study material"
        },
        {
            url: "/new-batch",
            content: "New Batches"
        },
        {
            url: "/student-login",
            content: "Student Login"
        },
        {
            url: "/offlinecourses",
            content: "Results"
        },
        {
            url: "https://blog.chemtime.co.in/",
            content: "Blogs"
        },
        {
            url: "/videos",
            content: "Popular Videos"
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
                        <CourseTable mode={'Recorded Dashboard'} tableFields={tableFields.recorded} />
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