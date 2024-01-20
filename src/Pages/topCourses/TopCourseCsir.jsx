import React, { useState } from "react";
import "./TopCourses.scss";
import { Header1, Header2 } from "../../components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../Components/footer/Footer";
import CourseLinks from "../../components/courseLinks/CourseLinks";
import courseImg from "../../assets/bg3.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const TopCourseCsir = () => {
  const [activeLink, setActiveLink] = useState("");
  const [coursesOpened, setCoursesOpened] = useState(false);
  const handleLinksOpen = () => {
    setCoursesOpened(!coursesOpened);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const badges = [
    {
      linkName: "CSIR ONLINE",
      link: "/onlinecourses/flutter"
    },
    {
      linkName: "CSIR OFFLINE",
      link: "/offlinecourses/flutter"
    },
    {
      linkName: "CSIR TEST SERIES",
      link: "/testseries/flutter"
    },
    {
      linkName: "CSIR STUDY MATERIAL",
      link: "/studymaterial/flutter"
    },
  ]

  return (
    <div className="top-courses">

      <Helmet>
        <meta charSet="utf-8" />
        <title>CSIR NET JRF Coaching for Chemical Sciences: TECH FEVER</title>
        <meta name="description" content="CSIR NET JRF Chemistry exam confidently with TECH FEVER top-rated coaching in Delhi. Join a community of successful aspirants benefiting from expert guidance and comprehensive study resources. Your journey to research excellence starts here." />
        <meta name="keywords" content="CSIR NET Coaching in Delhi, JRF Coaching Institutes, CSIR NET Coaching Centers in India, CSIR NET Mock Tests, CSIR NET Exam Guidance, CSIR NET Coaching Batch Timings, Best Online Coaching For Iit Jam Chemistry, Csir Net Chemical Science Coaching" />
      </Helmet>

      <Header1 />
      <Header2 />

      <Navbar />

      <div className="container-123">
        <CourseLinks
          activeLink={activeLink}
          coursesOpened={coursesOpened}
          handleLinkClick={handleLinkClick}
          handleLinksOpen={handleLinksOpen}
        />
        <div className="top-courses-container">
          <img src={courseImg} alt="" />

          <div className="badges">
            {badges.map((item, index) => {
              return <Link key={index} className="badge" to={item.link}>{item.linkName} </Link>
            })}
          </div>

          <header>
            <h2>flutter/JRF Coaching at TECH FEVER (formerly CHEMTIME)</h2>
          </header>

          <section id="introduction">
            <p>
              Welcome to TECH FEVER, your ultimate destination for excelling
              in the flutter/JRF examination. With a legacy of over 5 years as
              CHEMTIME, we bring unparalleled expertise to coach and guide
              aspiring candidates for competitive exams in Chemistry. Our
              flutter/JRF coaching program is meticulously designed to empower
              students and provide them with a solid foundation for success.
            </p>
          </section>

          <section id="why-asap">
            <h3>Why Choose TECH FEVER for flutter/JRF Coaching?</h3>
            <ul>
              <li>
                <strong>Experienced Faculty:</strong> Our dedicated team of
                educators, with years of experience, ensures that you receive
                top-notch guidance. Our faculty is committed to providing
                personalized attention and fostering a student-centric learning
                environment.
              </li>
              <li>
                <strong>Comprehensive Syllabus Coverage:</strong> We delve into
                every aspect of the flutter/JRF syllabus, ensuring an in-depth
                understanding of core concepts.
              </li>
              <li>
                <strong>Effective Teaching Methods:</strong> We employ a variety
                of teaching techniques, including interactive classes,
                problem-solving sessions, and discussions, making the learning
                process engaging and effective.
              </li>
              <li>
                <strong>Regular Practice:</strong> Success in flutter/JRF
                requires consistent practice. Our program includes a wide range
                of practice materials, including mock tests and a comprehensive
                test series, to help you sharpen your problem-solving skills and
                gain confidence.
              </li>
              <li>
                <strong>Quality Study Materials:</strong> Expertly curated study
                materials complement classroom learning, incorporating
                subtopic-wise Previous Year Questions (PYQs), assignments, and
                theory booklets. These materials enhance clarity on complex
                topics, facilitating effective self-study.
              </li>
              <li>
                <strong>Test Series:</strong> Our comprehensive test series is
                designed to simulate the actual exam environment, allowing you
                to gauge your progress, identify areas for improvement, and
                fine-tune your exam strategy.
              </li>
            </ul>
          </section>

          <section id="deliverables">
            <h3>flutter/JRF Coaching Deliverables at TECH FEVER:</h3>
            <ol>
              <li>
                <strong>Offline Coaching:</strong> Attend classes at our center
                in Delhi with options for both Regular and Weekend batches.
              </li>
              <li>
                <strong>Online Live Classes:</strong> Join our Regular Morning
                and Evening batches or opt for weekend classes for the
                flexibility to learn from anywhere.
              </li>
              <li>
                <strong>Online Recorded Courses:</strong> Access recorded
                lectures at your convenience, allowing for Self-paced learning.
              </li>
              <li>
                <strong>Study Material:</strong> Our high-quality study
                materials are designed to enhance your understanding of critical
                concepts and aid in effective exam preparation.
              </li>
              <li>
                <strong>Test Series:</strong> Practice extensively with our
                comprehensive test series, preparing yourself thoroughly for the
                flutter/JRF examination.
              </li>
            </ol>
          </section>

          <section id="enrollment">
            <p>
              Enroll with TECH FEVER to embark on your journey to success in
              flutter/JRF. Our commitment is to empower your dreams and help
              you achieve your goals in the field of Chemistry.
            </p>
          </section>
        </div>
      </div>

      <WhatsappIcon />

      <Footer />
    </div>
  );
};

export default TopCourseCsir;
