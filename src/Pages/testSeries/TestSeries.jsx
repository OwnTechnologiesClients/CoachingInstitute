import React, { useState } from "react";
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
const TestSeries = () => {
  const [activeLink, setActiveLink] = useState("CSIR NET (Chemical Sciences)");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const modeOfTable = {
    "CSIR NET (Chemical Sciences)": "Test Series for Dec 2023",
    "GATE (Chemistry)": "Test Series for GATE 2024",
    "IIT-JAM (Chemistry)": "Test Series for IIT-JAM 2024",
    "BARC (Chemistry)": "Test Series for BARC",
    "TIFR (Chemistry)": "Test Series for TIFR",
  };

  const tableFields = {
    "CSIR NET (Chemical Sciences)": [
      ["Inorganic Chemistry + Full Length Tests", "d.pdf", "1 Year", 499],
      ["Organic Chemistry + Full Length Tests", "d.pdf", "2 Years", 499],
      ["Physical Chemistry + Full Length Tests", "d.pdf", "6 Months", 499],
      ["General Aptitude + Full Length Tests", "d.pdf", "1 Year", 399],
      ["Full Length Tests", "d.pdf", "1 Year", 299],
      ["CSIR NET Complete Test Series", "d.pdf", "1 Year", 1499],
      ["CSIR NET & GATE Complete Test Series", "d.pdf", "1 Year", 2499],
    ],
    "GATE (Chemistry)": [
      ["Inorganic Chemistry + Full Length Tests", "d.pdf", "1 Year", 499],
      ["Organic Chemistry + Full Length Tests", "d.pdf", "2 Years", 499],
      ["Physical Chemistry + Full Length Tests", "d.pdf", "6 Months", 499],
      ["General Aptitude + Full Length Tests", "d.pdf", "1 Year", 399],
      ["Full Length Tests", "d.pdf", "1 Year", 299],
      ["GATE Complete Test Series", "d.pdf", "1 Year", 1499],
      ["CSIR NET & GATE Complete Test Series", "d.pdf", "1 Year", 2499],
    ],
    "IIT-JAM (Chemistry)": [
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
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
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
