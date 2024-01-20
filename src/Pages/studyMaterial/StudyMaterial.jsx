import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg3 from '../../assets/bg3.jpg'
import CourseLinks from '../../components/courseLinks/CourseLinks'
import CourseDetail from '../../components/courseDetail/CourseDetail'
import courseDetailImg from '../../assets/study-material.jpg'
import courseDetailBanner from '../../assets/study-material.jpg'
import CourseTable from '../../components/courseTable/CourseTable'
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import './StudyMaterial.scss';
import studyMaterialData from './Studymaterial.json'
import { useNavigate, useParams } from 'react-router-dom'

const StudyMaterial = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState("flutter Chemical Sciences");
    const [activeUrl, setActiveUrl] = useState("");
    const [coursesOpened, setCoursesOpened] = useState(false);

    const handleLinkClick = (link) => {

        setActiveLink(link);
    };
    const handleLinksOpen = () => {
        setCoursesOpened(!coursesOpened)
    };
    const tableFields =
    {
        "flutter Chemical Sciences": [
            [
                "Lakshya- Subtopic wise PYQ Booklets",
                "45 minutes",
                "1 Year",
                1100
            ],
            [
                "Abhyas-  Assignments and Practice Booklets",
                "45 minutes",
                "2 Years",
                1100
            ],
            [
                "Abhyaas- Theories Booklets",
                "45 minutes",
                "6 Months",
                6000
            ],
            [
                "Combined",
                "45 minutes",
                "1 Year",
                7500
            ],
        ],
        "GATE Chemistry": [
            [
                "Lakshya- Subtopic wise PYQ Booklets",
                "45 minutes",
                "1 Year",
                1100
            ],
            [
                "Abhyas-  Assignments and Practice Booklets",
                "45 minutes",
                "2 Years",
                1100
            ],
            [
                "Abhyaas- Theories Booklets",
                "45 minutes",
                "6 Months",
                6000
            ],
            [
                "Combined",
                "45 minutes",
                "1 Year",
                7500
            ],
        ],
        "IIT-JAM Chemistry": [
            [
                "Lakshya- Topicwise PYQ Booklets",
                "45 minutes",
                "1 Year",
                250
            ],
            [
                "Abhyas-  Assignments and Practice Booklets",
                "45 minutes",
                "2 Years",
                1100
            ],
            [
                "Abhyaas- Theories Booklets",
                "45 minutes",
                "6 Months",
                4500
            ],
            [
                "Combined",
                "45 minutes",
                "1 Year",
                5000
            ],
        ],
        "CUET (PG) Chemistry": [
            [
                "Lakshya- Topicwise PYQ Booklets",
                "45 minutes",
                "1 Year",
                250
            ],
            [
                "Abhyas-  Assignments and Practice Booklets",
                "45 minutes",
                "2 Years",
                1100
            ],
            [
                "Abhyaas- Theories Booklets",
                "45 minutes",
                "6 Months",
                4500
            ],
            [
                "Combined",
                "45 minutes",
                "1 Year",
                5000
            ],
        ],
    }
    useEffect(() => {
        if (id === "flutter") {
            setActiveUrl("/studymaterial/flutter Chemical Sciences");
            setActiveLink("flutter Chemical Sciences");
        } else if (id === "gate") {
            setActiveUrl("/studymaterial/GATE Chemistry");
            setActiveLink("GATE Chemistry");
        } else if (id === "iit-jam") {
            setActiveUrl("/studymaterial/IIT-JAM Chemistry");
            setActiveLink("IIT-JAM Chemistry");
        } else if (id === "cuet") {
            setActiveUrl("/studymaterial/CUET (PG) Chemistry");
            setActiveLink("CUET (PG) Chemistry");
        } else {
            navigate("/");
        }
    }, [id]);
    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            {/* <HeroSection
                imgSrc={bg3}
                hd1={"STUDY MATERIAL"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}
            <div className="study-material-section">
                <CourseLinks
                    activeLink={activeUrl}
                    coursesOpened={coursesOpened}
                    handleLinkClick={handleLinkClick}
                    handleLinksOpen={handleLinksOpen}
                />
                <div className="study-material-section-right-nav">
                    <CourseDetail imgSrc={courseDetailImg} heading1={activeLink} detailData={studyMaterialData} />

                    <div className="course-idea">
                        <h2 className='under-bar'>CourseIdea</h2>
                        <CourseTable mode={"DASHBOARD"} tableFields={tableFields[activeLink]} />
                    </div>

                </div>

            </div>
            <WhatsappIcon />
            <Footer />
        </div>
    )
}

export default StudyMaterial