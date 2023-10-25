import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg3 from '../../assets/bg3.png'
import './TestSeries.scss';
import CourseLinks from '../../components/courseLinks/CourseLinks'
import CourseDetail from '../../components/courseDetail/CourseDetail'
import courseDetailImg from '../../assets/courseDetail.png'
import CourseTable from '../../components/courseTable/CourseTable'
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import testSeriesData from './TestSeriesData.json'
const TestSeries = () => {
    const [activeLink, setActiveLink] = useState('Chemical Science Test Series');

    const handleLinkClick = (link) => {

        setActiveLink(link);
    };
    const tableFields = [
        [
            "NET Chemical Science",
            "45 minutes",
            "1 Year",
            399
        ],
        [
            "Gate Chemical Science",
            "45 minutes",
            "2 Years",
            2499
        ],
        [
            "UPSC Chemical Science",
            "45 minutes",
            "6 Month",
            699
        ],
        [
            "SSC Chemical Science",
            "45 minutes",
            "1 Year",
            999
        ],
    ]
    return (
        <div className='test-series-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection
                imgSrc={bg3}
                hd1={"TEST SERIES"}
                hd2={"FOR YOUR BETTER FUTURE"}
            />
            <div className="test-series-section">
                <CourseLinks
                    activeLink={activeLink}
                    handleLinkClick={handleLinkClick}
                />
                <div className="test-series-section-right-nav">
                    <CourseDetail
                        imgSrc={courseDetailImg}
                        heading1={activeLink}
                        detailData={testSeriesData} />

                    <div className="course-idea">
                        <h2 className='under-bar'>CourseIdea</h2>
                        <CourseTable mode={"Offline Dashboard"} tableFields={tableFields}/>
                        <CourseTable mode={"Online Dashboard"} tableFields={tableFields}/>
                    </div>

                </div>

            </div>
            <WhatsappIcon />
            <Footer />
        </div>
    )
}

export default TestSeries