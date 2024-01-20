import React, { useEffect, useState } from "react";
import "./Course.scss";
import { Header1, Header2 } from "../../components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import bg7 from "../../assets/bg11.png";
// import HeroSection from '../../components/heroSection/HeroSection'
// import bg3 from '../../assets/bg3.png'
// import CourseDetail from '../../components/courseDetail/CourseDetail'
// import courseDetailImg from '../../assets/courseDetail.png'
// import CourseTable from '../../components/courseTable/CourseTable';
// import courseData from './Course.json'
import CourseLinks from "../../components/courseLinks/CourseLinks";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import { SetActiveCourse } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import FlutterOffline from "../../components/courseDetail/offline/FlutterOffline";
import ReactJsOffline from "../../components/courseDetail/offline/ReactJsOffline";
import NextJsOffline from "../../Components/courseDetail/offline/NextJsOffline";
import NodeJsOffline from "../../Components/courseDetail/offline/NodeJsOffline";
import CourseHeroSection from "../../components/courseHeroSection/CourseHeroSection";
import { useNavigate, useParams } from "react-router-dom";
import MernStackOffline from "../../Components/courseDetail/offline/MernStackOffline";
// import NextJsOffline from "../../Components/courseDetail/offline/NextJsOffline";

const OfflineCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coursesOpened, setCoursesOpened] = useState(false);
  const [activeLink, setActiveLink] = useState("/offlinecourses/Flutter");
  const { course } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    if (id === "flutter") setActiveLink("/offlinecourses/Flutter");
    else if (id === "reactjs") setActiveLink("/offlinecourses/ReactJS");
    else if (id === "nextjs") setActiveLink("/offlinecourses/NextJs");
    else if (id === "nodejs") setActiveLink("/offlinecourses/NodeJs");
    else if (id === "mern-stack") setActiveLink("/offlinecourses/MERN Stack");

    else {
      navigate("/");
    }
  }, [id]);

  const componentMapping = {
    "/offlinecourses/Flutter": <FlutterOffline />,
    "/offlinecourses/ReactJS": <ReactJsOffline />,
    "/offlinecourses/NextJs": <NextJsOffline />,
    "/offlinecourses/NodeJs": <NodeJsOffline />,
    "/offlinecourses/MERN Stack": <MernStackOffline />,

  };
  const handleLinksOpen = () => {
    setCoursesOpened(!coursesOpened);
  };
  useEffect(() => {
    if (course) {
      setActiveLink(course);
      dispatch(SetActiveCourse(""));
    }
  }, []);

  return (
    <div className="course-page">
      <Header1 />
      <Header2 />
      <Navbar />

      {/* <CourseHeroSection
        imgSrc={bg7}
        hd1={"OFFLINE COURSES"}
        hd2={"FOR YOUR BETTER FUTURE"}
      /> */}

      <div className="course-page-section">
        {console.log(activeLink)}
        <CourseLinks
          activeLink={activeLink}
          coursesOpened={coursesOpened}
          handleLinkClick={handleLinkClick}
          handleLinksOpen={handleLinksOpen}
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
  );
};

export default OfflineCourse;
