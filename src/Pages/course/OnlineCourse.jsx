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
import { SetActiveCourse } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import CsirOnline from '../../components/courseDetail/online/CsirOnline';
import GateOnline from '../../components/courseDetail/online/GateOnline';
import JamOnline from '../../components/courseDetail/online/JamOnline';
import CuetOnline from '../../components/courseDetail/online/CuetOnline';
import CourseHeroSection from '../../components/courseHeroSection/CourseHeroSection';

const OnlineCourse = () => {
    const [activeLink, setActiveLink] = useState('CSIR NET Chemical Sciences');
    const { course } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const componentMapping = {
        'CSIR NET Chemical Sciences': <CsirOnline />,
        'CUET (PG) Chemistry': <CuetOnline />,
        'GATE Chemistry': <GateOnline />,
        'IIT JAM Chemistry': <JamOnline />,
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
                hd1={"ONLINE COURSES"}
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
                        <CourseTable mode={"Online Dashboard"} tableFields={tableFields} />
                    </div> */}
                </div>
            </div>
            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default OnlineCourse