import React from 'react'
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

const TestSeries = () => {
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
                <CourseLinks defaultLink={'Chemical Science Test Series'}/>
                <div className="test-series-section-right-nav">
                    <CourseDetail imgSrc={courseDetailImg} heading1={"Chemical Science Study Material"} />

                    <div className="course-idea">
                        <h2>CourseIdea</h2>
                        <CourseTable mode={"Offline Dashboard"} />
                        <CourseTable mode={"Online Dashboard"} />
                    </div>

                </div>

            </div>
            <WhatsappIcon />
            <Footer />
        </div>
    )
}

export default TestSeries