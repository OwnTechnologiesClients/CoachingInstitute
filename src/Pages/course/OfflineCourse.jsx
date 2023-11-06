import React, { useEffect, useState } from 'react'
import './Course.scss';
import { Header1, Header2 } from '../../components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'
import HeroSection from '../../components/heroSection/HeroSection'
import bg3 from '../../assets/bg3.png'
import CourseDetail from '../../components/courseDetail/CourseDetail'
import courseDetailImg from '../../assets/courseDetail.png'
import CourseTable from '../../components/courseTable/CourseTable';
import CourseLinks from '../../components/courseLinks/CourseLinks';
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import courseData from './Course.json'
import {SetActiveCourse} from '../../redux/userSlice' 
import { useDispatch, useSelector } from 'react-redux';
import CsirOffline from '../../components/courseDetail/offline/CsirOffline';
import GateOffline from '../../components/courseDetail/offline/GateOffline';
import JamOffline from '../../components/courseDetail/offline/JamOffline';
import CuetOffline from '../../components/courseDetail/offline/CuetOffline';
import CourseHeroSection from '../../components/courseHeroSection/CourseHeroSection';

const OfflineCourse = () => {
    const [activeLink, setActiveLink] = useState('CSIR NET Chemical Sciences');
    const { course } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const handleLinkClick = (link) => {        
            setActiveLink(link);
    };

    const componentMapping = {
        'CSIR NET Chemical Sciences': <CsirOffline />,
        'CUET (PG) Chemistry': <CuetOffline />,
        'GATE Chemistry': <GateOffline />,
        'IIT JAM Chemistry': <JamOffline />,
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

    useEffect(() => {
        if (course) {
            setActiveLink(course);
            dispatch(SetActiveCourse(""))
        }
    }, [])
    
    return (
        <div className="course-page">

            <Header1 />
            <Header2 />
            <Navbar />

            <CourseHeroSection
                imgSrc={bg3}
                hd1={"OFFLINE COURSES"}
                hd2={"FOR YOUR BETTER FUTURE"}
            />

            <div className="course-page-section">
                <CourseLinks
                    activeLink={activeLink}
                    handleLinkClick={handleLinkClick}
                />
                <div className="course-page-right-nav">
                {componentMapping[activeLink]}
                    
                    <div className="course-idea">
                        <h2 className='under-bar'>CoursesIdea</h2>
                        <CourseTable mode={"Offline Dashboard"} tableFields={tableFields}/>
                        {/* <CourseTable mode={"Online Dashboard"} tableFields={tableFields}/> */}
                    </div>
                </div>
            </div>
            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default OfflineCourse