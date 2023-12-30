import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import { Header1, Header2 } from "../../components/header/Header";
import "./TestSeries.scss";
import CourseLinks from "../../components/courseLinks/CourseLinks";
import courseDetailImg from "../../assets/courseDetail.png";
import TestSeriesTable from "../../components/courseTable/TestSeriesTable";
import Footer from "../../Components/footer/Footer";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import testSeriesData from "./TestSeriesData.json";
import TestSeriesCourseDetail from "../../components/courseDetail/TestSeriesCourseDetail";
import { useNavigate, useParams } from "react-router-dom";
const TestSeries = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("CSIR-NET Chemical Sciences");
  const [activeUrl, setActiveUrl] = useState("");
  const [coursesOpened, setCoursesOpened] = useState(false);
  const handleLinksOpen = () => {
    setCoursesOpened(!coursesOpened);
  };
  const handleLinkClick = (link) => {
    setActiveUrl(link);
  };

  const modeOfTable = {
    "CSIR-NET Chemical Sciences": "Test Series",
    "GATE Chemistry": "Test Series for GATE 2024",
    "IIT-JAM Chemistry": "Test Series for IIT-JAM 2024",
    "BARC (Chemistry)": "Test Series for BARC",
    "TIFR (Chemistry)": "Test Series for TIFR",
  };

  const tableFields = {
    "CSIR-NET Chemical Sciences": [
      ["Inorganic Chemistry + Full Length Tests", "d.pdf", "1 Year", 499],
      ["Organic Chemistry + Full Length Tests", "d.pdf", "2 Years", 499],
      ["Physical Chemistry + Full Length Tests", "d.pdf", "6 Months", 499],
      ["General Aptitude + Full Length Tests", "d.pdf", "1 Year", 399],
      ["Full Length Tests", "d.pdf", "1 Year", 299],
      ["CSIR NET Complete Test Series", "d.pdf", "1 Year", 1499],
      ["CSIR NET & GATE Complete Test Series", "d.pdf", "1 Year", 2499],
    ],
    "GATE Chemistry": [
      ["Inorganic Chemistry + Full Length Tests", "d.pdf", "1 Year", 499],
      ["Organic Chemistry + Full Length Tests", "d.pdf", "2 Years", 499],
      ["Physical Chemistry + Full Length Tests", "d.pdf", "6 Months", 499],
      ["General Aptitude + Full Length Tests", "d.pdf", "1 Year", 399],
      ["Full Length Tests", "d.pdf", "1 Year", 299],
      ["GATE Complete Test Series", "d.pdf", "1 Year", 1499],
      ["CSIR NET & GATE Complete Test Series", "d.pdf", "1 Year", 2499],
    ],
    "IIT-JAM Chemistry": [
      ["Inorganic Chemistry + Full Length Tests", "d.pdf", "1 Year", 399],
      ["Organic Chemistry + Full Length Tests", "d.pdf", "2 Years", 399],
      ["Physical Chemistry + Full Length Tests", "d.pdf", "6 Months", 399],
      ["Full Length Tests", "d.pdf", "1 Year", 199],
      ["IIT JAM Complete Test Series", "d.pdf", "1 Year", 499],
    ],
    "BARC (Chemistry)": [
      ["BARC Complete Test Series", "d.pdf", "1 Year", 1099],
    ],
    "TIFR (Chemistry)": [["TIDR Complete Test Series", "d.pdf", "1 Year", 499]],
  };

  useEffect(() => {
    if (id === "csir-net") {
      setActiveUrl("/testseries/CSIR-NET Chemical Sciences");
      setActiveLink("CSIR-NET Chemical Sciences");
    } else if (id === "gate") {
      setActiveUrl("/testseries/GATE Chemistry");
      setActiveLink("GATE Chemistry");
    } else if (id === "iit-jam") {
      setActiveUrl("/testseries/IIT-JAM Chemistry");
      setActiveLink("IIT-JAM Chemistry");
    } else if (id === "barc") {
      setActiveUrl("/testseries/BARC (Chemistry)");
      setActiveLink("BARC (Chemistry)");
    } else if (id === "tifr") {
      setActiveUrl("/testseries/TIFR (Chemistry)");
      setActiveLink("TIFR (Chemistry)");
    } else {
      navigate("/");
    }
  }, [id]);

  return (
    <div className="test-series-page">
      <Header1 />
      <Header2 />
      <Navbar />

      {/* <HeroSection
                imgSrc={bg3}
                hd1={"TEST SERIES"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}
      <div className="test-series-section"> 
        <CourseLinks
          activeLink={activeUrl}
          coursesOpened={coursesOpened}
          handleLinkClick={handleLinkClick}
          handleLinksOpen={handleLinksOpen}
        />
        <div className="test-series-section-right-nav">
          <TestSeriesCourseDetail
            imgSrc={courseDetailImg}
            heading1={activeLink}
            detailData={testSeriesData}
          />

          <div className="course-idea">
            <h2 className="under-bar">CourseIdea</h2>
            <TestSeriesTable
              mode={modeOfTable[activeLink]}
              tableFields={tableFields[activeLink]}
            />
            <p>
              Note: 18% GST is applicable extra on above fees as per govt.
              norms.
            </p>{" "}
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default TestSeries;
