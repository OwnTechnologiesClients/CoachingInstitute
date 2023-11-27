import React, { useEffect, useState } from 'react'
import './Course.scss';
import { Header1, Header2 } from '../../components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'
import bg7 from '../../assets/bg7.png'
// import HeroSection from '../../components/heroSection/HeroSection'
// import bg3 from '../../assets/bg3.png'
// import CourseDetail from '../../components/courseDetail/CourseDetail'
// import courseDetailImg from '../../assets/courseDetail.png'
// import CourseTable from '../../components/courseTable/CourseTable';
// import courseData from './Course.json'
import CourseLinks from '../../components/courseLinks/CourseLinks';
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import {SetActiveCourse} from '../../redux/userSlice' 
import { useDispatch, useSelector } from 'react-redux';
import CsirOffline from '../../components/courseDetail/offline/CsirOffline';
import GateOffline from '../../components/courseDetail/offline/GateOffline';
import JamOffline from '../../components/courseDetail/offline/JamOffline';
import CuetOffline from '../../components/courseDetail/offline/CuetOffline';
import CourseHeroSection from '../../components/courseHeroSection/CourseHeroSection';

const OfflineCourse = () => {
    const [activeLink, setActiveLink] = useState('CSIR-NET Chemical Sciences');
    const { course } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const handleLinkClick = (link) => {        
            setActiveLink(link);
    };

    const componentMapping = {
        'CSIR-NET Chemical Sciences': <CsirOffline />,
        'GATE Chemistry': <GateOffline />,
        'IIT-JAM Chemistry': <JamOffline />,
        'CUET (PG) Chemistry': <CuetOffline />,
        
      };

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
                imgSrc={bg7}
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
                    
                    {/* <div className="course-idea">
                        <h2 className='under-bar'>CoursesIdea</h2>
                        <CourseTable mode={"Offline Dashboard"} tableFields={tableFields}/>
                        <CourseTable mode={"Online Dashboard"} tableFields={tableFields}/>
                    </div> */}
                </div>
            </div>
            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default OfflineCourse