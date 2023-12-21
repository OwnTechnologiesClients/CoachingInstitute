import React from "react";
import "./TopCourses.scss";
import { Header1, Header2 } from "../../components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../Components/footer/Footer";
import courseImg from "../../assets/bg3.png";

const TopCourseIitJam = () => {
  return (
    <div className="top-courses">
      <Header1 />
      <Header2 />

      <Navbar />

      <div className="top-courses-container">
        <img src={courseImg} alt="" />
        <header>
          <h2>
            Best IIT-JAM Chemistry Coaching in Jia Sarai, Delhi - ASAP Institute
          </h2>
        </header>

        <section id="introduction">
          <p>
            Welcome to ASAP Institute, your trusted partner for mastering the
            Joint Admission Test for M.Sc. (IIT-JAM) Chemistry. With over 5
            years of experience as CHEMTIME, we take pride in being the top
            IIT-JAM coaching institute in Jia Sarai, Delhi.
          </p>
        </section>

        <section id="why-asap">
          <h3>Why Choose ASAP Institute for IIT-JAM Chemistry Coaching?</h3>
          <ul>
            <li>
              <strong>Best Coaching in India:</strong> Recognized as the premier
              IIT-JAM coaching institute located in Jia Sarai and Hauz Khas, our
              legacy of excellence sets us apart.
            </li>
            <li>
              <strong>Online Coaching Excellence:</strong> Explore the
              flexibility of the best online coaching for IIT-JAM Chemistry. Our
              virtual classes ensure that quality education is accessible from
              anywhere.
            </li>
            <li>
              <strong>Expert Faculty for IIT-JAM Chemistry:</strong> Our
              experienced faculty, well-versed in the IIT-JAM syllabus, employs
              effective teaching methods to make learning engaging and
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
              understanding of complex topics, complementing classroom learning.
            </li>
            <li>
              <strong>Mock Tests and Practice Sessions:</strong> Hone your
              problem-solving skills with our mock tests and practice sessions,
              replicating the real exam environment for optimal preparedness.
            </li>
            <li>
              <strong>Online Classes and Test Series:</strong> Whether attending
              offline at our center in Delhi or joining our online classes,
              benefit from a robust test series and interactive sessions for
              effective learning.
            </li>
          </ul>
        </section>

        <section id="coaching-products">
          <h3>Coaching Products at ASAP Institute:</h3>
          <ol>
            <li>
              <strong>Offline Coaching:</strong> Join our regular or weekend
              batches at our center in Jia Sarai, Delhi, for an immersive
              learning experience.
            </li>
            <li>
              <strong>Online Live Classes:</strong> Experience the best online
              coaching for IIT-JAM Chemistry, featuring regular morning batches,
              evening batches, and weekend batches for flexible learning.
            </li>
            <li>
              <strong>Online Recorded Courses:</strong> Access our recorded
              courses for self-paced learning, offering flexibility without
              compromising on quality.
            </li>
            <li>
              <strong>Study Material:</strong> Our comprehensive study material
              includes subtopic-wise PYQs, assignments, and theory booklets to
              support your preparation.
            </li>
            <li>
              <strong>Test Series:</strong> Hone your exam readiness with our
              meticulously designed test series, providing a thorough evaluation
              of your progress.
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
            ASAP Institute, formerly CHEMTIME, invites you to embark on your
            IIT-JAM Chemistry preparation journey with confidence and
            determination. Join us, and let's achieve success together!
          </p>
        </section>
      </div>

      <WhatsappIcon />

      <Footer />
    </div>
  );
};

export default TopCourseIitJam;
