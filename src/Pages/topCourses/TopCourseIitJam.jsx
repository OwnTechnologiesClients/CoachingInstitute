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


const TopCourseIitJam = () => {
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
      linkName: "IIT-JAM ONLINE",
      link: "/onlinecourses/iit-jam"
    },
    {
      linkName: "IIT-JAM OFFLINE",
      link: "/offlinecourses/iit-jam"
    },
    {
      linkName: "IIT-JAM TEST SERIES",
      link: "/testseries/iit-jam"
    },
    {
      linkName: "IIT-JAM STUDY MATERIAL",
      link: "/studymaterial/iit-jam"
    },
  ]

  return (
    <div className="top-courses">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top IIT-JAM Chemistry Coaching in Delhi, India - TECH FEVER</title>
        <meta name="description" content="Discover unparalleled IIT-JAM Chemistry coaching in Delhi at TECH FEVER our expert faculty, comprehensive study materials, and strategic approach empowers students for success in the IIT-JAM Chemistry exam." />
        <meta name="keywords" content="IIT-JAM Chemistry Coaching, Best IIT-JAM Chemistry Coaching in Delhi, IIT-JAM Chemistry Classes, Top Coaching Institutes for IIT-JAM Chemistry, Coaching Centers for IIT-JAM Chemistry, IIT-JAM Chemistry Preparation in Delhi." />
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
            <h2>
              Best IIT-JAM Chemistry Coaching in Jia Sarai, Delhi - ASAP
              Institute
            </h2>
          </header>

          <section id="introduction">
            <p>
              Welcome to TECH FEVER, your trusted partner for mastering the
              Joint Admission Test for M.Sc. (IIT-JAM) Chemistry. With over 5
              years of experience as CHEMTIME, we take pride in being the top
              IIT-JAM coaching institute in Jia Sarai, Delhi.
            </p>
          </section>

          <section id="why-asap">
            <h3>Why Choose TECH FEVER for IIT-JAM Chemistry Coaching?</h3>
            <ul>
              <li>
                <strong>Best Coaching in India:</strong> Recognized as the
                premier IIT-JAM coaching institute located in Jia Sarai and Hauz
                Khas, our legacy of excellence sets us apart.
              </li>
              <li>
                <strong>Online Coaching Excellence:</strong> Explore the
                flexibility of the best online coaching for IIT-JAM Chemistry.
                Our virtual classes ensure that quality education is accessible
                from anywhere.
              </li>
              <li>
                <strong>Expert Faculty for IIT-JAM Chemistry:</strong> Our
                experienced faculty, well-versed in the IIT-JAM syllabus,
                employs effective teaching methods to make learning engaging and
                productive.
              </li>
            </ul>
          </section>

          <section id="key-features">
            <h3>Key Features of Our IIT-JAM Chemistry Coaching:</h3>
            <ul>
              <li>
                <strong>Comprehensive Study Materials:</strong> Access
                meticulously curated study materials designed to enhance your
                understanding of complex topics, complementing classroom
                learning.
              </li>
              <li>
                <strong>Mock Tests and Practice Sessions:</strong> Hone your
                problem-solving skills with our mock tests and practice
                sessions, replicating the real exam environment for optimal
                preparedness.
              </li>
              <li>
                <strong>Online Classes and Test Series:</strong> Whether
                attending offline at our center in Delhi or joining our online
                classes, benefit from a robust test series and interactive
                sessions for effective learning.
              </li>
            </ul>
          </section>

          <section id="coaching-products">
            <h3>Coaching Products at TECH FEVER:</h3>
            <ol>
              <li>
                <strong>Offline Coaching:</strong> Join our regular or weekend
                batches at our center in Jia Sarai, Delhi, for an immersive
                learning experience.
              </li>
              <li>
                <strong>Online Live Classes:</strong> Experience the best online
                coaching for IIT-JAM Chemistry, featuring regular morning
                batches, evening batches, and weekend batches for flexible
                learning.
              </li>
              <li>
                <strong>Online Recorded Courses:</strong> Access our recorded
                courses for self-paced learning, offering flexibility without
                compromising on quality.
              </li>
              <li>
                <strong>Study Material:</strong> Our comprehensive study
                material includes subtopic-wise PYQs, assignments, and theory
                booklets to support your preparation.
              </li>
              <li>
                <strong>Test Series:</strong> Hone your exam readiness with our
                meticulously designed test series, providing a thorough
                evaluation of your progress.
              </li>
            </ol>
          </section>

          <section id="admission-process">
            <h3>Admission Process and Fees:</h3>
            <p>
              Enrolling in our IIT-JAM Chemistry coaching is a seamless process.
              Visit our institute in Jia Sarai or Hauz Khas for in-person
              registration or register online.
            </p>
          </section>

          <section id="iit-jam-chemistry">
            <h3>IIT-JAM Chemistry - Your Gateway to Postgraduate Success:</h3>
            <p>
              TECH FEVER, formerly CHEMTIME, invites you to embark on your
              IIT-JAM Chemistry preparation journey with confidence and
              determination. Join us, and let's achieve success together!
            </p>
          </section>
        </div>
      </div>

      <WhatsappIcon />

      <Footer />
    </div>
  );
};

export default TopCourseIitJam;
