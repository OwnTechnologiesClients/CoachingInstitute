import React, { useEffect, useState } from "react";
import "./Course.scss";
import { Header1, Header2 } from "../../components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import bg3 from "../../assets/bg12.png";
// import HeroSection from '../../components/heroSection/HeroSection'
// import CourseDetail from '../../components/courseDetail/CourseDetail'
// import courseDetailImg from '../../assets/courseDetail.png'
// import CourseTable from '../../components/courseTable/CourseTable';
// import courseData from './Course.json'
import CourseLinks from "../../components/courseLinks/CourseLinks";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import { SetActiveCourse } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import FlutterOnline from "../../Components/courseDetail/online/FlutterOnline";
import ReactJsOnline from "../../Components/courseDetail/online/ReactJsOnline";
import NextJsOnline from "../../Components/courseDetail/online/NextJsOnline";
import NodeJsOnline from "../../Components/courseDetail/online/NodeJsOnline";
import CourseHeroSection from "../../components/courseHeroSection/CourseHeroSection";
import { useNavigate, useParams } from "react-router-dom";
import MernStackOnline from "../../Components/courseDetail/online/MernStackOnline";

const OnlineCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coursesOpened, setCoursesOpened] = useState(false);
  const [activeLink, setActiveLink] = useState("onlinecourses/Flutter Online");
  const { course } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleLinksOpen = () => {
    setCoursesOpened(!coursesOpened);
  };

  useEffect(() => {
    if (id === "csir-net") setActiveLink("/onlinecourses/Flutter Online");
    else if (id === "gate") setActiveLink("/onlinecourses/ReactJS Online");
    else if (id === "iit-jam") setActiveLink("/onlinecourses/NextJs Online");
    else if (id === "cuet") setActiveLink("/onlinecourses/NodeJs Online");
    else if (id === "mern-stack") setActiveLink("/onlinecourses/MERN Stack Online");
    else {
      navigate("/");
    }
  }, [id]);

  const componentMapping = {
    "/onlinecourses/Flutter Online": <FlutterOnline />,
    "/onlinecourses/ReactJS Online": <ReactJsOnline />,
    "/onlinecourses/NextJs Online": <NextJsOnline />,
    "/onlinecourses/NodeJs Online": <NodeJsOnline />,
    "/onlinecourses/MERN Stack Online": <MernStackOnline />,
  };

  const tableFields = [
    ["NET Chemical Science", "45 minutes", "1 Year", 399],
    ["Gate Chemical Science", "45 minutes", "2 Years", 2499],
    ["UPSC Chemical Science", "45 minutes", "6 Months", 699],
    ["SSC Chemical Science", "45 minutes", "1 Year", 999],
  ];

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
        imgSrc={bg3}
        hd1={"ONLINE COURSES"}
        hd2={"FOR YOUR BETTER FUTURE"}
      /> */}

      <div className="course-page-section">
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
                        <CourseTable mode={"Online Dashboard"} tableFields={tableFields} />
                    </div> */}
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default OnlineCourse;
