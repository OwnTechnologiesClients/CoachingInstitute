import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import '../testSeries/TestSeries.scss';
import CourseLinks from '../../components/courseLinks/CourseLinks'
import TestSeriesTable from '../../components/courseTable/TestSeriesTable'
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import CourseTable from '../../components/courseTable/CourseTable';

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

    return (
        <div className='test-series-page'>

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


                    <div className="course-idea">
                        <h2 className='under-bar'>New Batch</h2>
                        <CourseTable mode={'Online Dashboard'} tableFields={tableFields.online}/>
                        <CourseTable mode={'Offline Dashboard'} tableFields={tableFields.offline}/>
                        <CourseTable mode={'Recorded Dashboard'} tableFields={tableFields.recorded} />
                    </div>

                </div>

            </div>
            <WhatsappIcon />
            <Footer />
        </div>
    )
}

export default NewBatch