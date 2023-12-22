import React,{useState} from "react";
import "./TopCourses.scss";
import { Header1, Header2 } from "../../components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../Components/footer/Footer";
import courseImg from "../../assets/bg3.png";
import CourseLinks from "../../components/courseLinks/CourseLinks";

const TopCourseGate = () => {
  const [activeLink, setActiveLink] = useState('CSIR NET (Chemical Sciences)');
    const [coursesOpened,setCoursesOpened] = useState(false);
    const handleLinksOpen = () => {
        setCoursesOpened(!coursesOpened)
    };
    const handleLinkClick = (link) => {

        setActiveLink(link);
    };

  return (
    <div className="top-courses">
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
          <header>
            <h2>
              GATE Chemistry Coaching at ASAP Institute: Your Path to Success
            </h2>
          </header>

          <section id="introduction">
            <p>
              Welcome to ASAP Institute, your trusted destination for GATE
              Chemistry coaching. With over 5+ years of experience as CHEMTIME,
              we have consistently delivered excellence in GATE exam
              preparation. Explore our GATE Chemistry coaching program designed
              to empower you with knowledge, skills, and confidence.
            </p>
          </section>

          <section id="why-asap">
            <h3>Why Choose ASAP Institute for GATE Chemistry Coaching?</h3>
            <ul>
              <li>
                <strong>Comprehensive Syllabus Coverage:</strong> Our coaching
                program ensures in-depth coverage of the GATE Chemistry
                syllabus. We build a strong foundation to tackle even the most
                challenging questions.
              </li>
              <li>
                <strong>Expert Faculty:</strong> Benefit from the guidance of
                experienced faculty members dedicated to providing top-notch
                education. Our educators bring years of teaching expertise and
                subject knowledge.
              </li>
              <li>
                <strong>Interactive Learning Environment:</strong> Immerse
                yourself in an interactive learning environment with live online
                classes. Engage actively with faculty and fellow students,
                enhancing your grasp of complex topics.
              </li>
            </ul>
          </section>

          <section id="key-features">
            <h3>Key Features of Our GATE Chemistry Coaching:</h3>
            <ul>
              <li>
                <strong>Thorough Study Materials:</strong> Access meticulously
                curated study materials designed to complement classroom
                learning and facilitate better comprehension of complex topics.
              </li>
              <li>
                <strong>Practice and Assessments:</strong> Success in the GATE
                Chemistry exam is achieved through practice. Our course provides
                a wide array of practice materials, including questions,
                quizzes, and mock tests.
              </li>
              <li>
                <strong>Flexible Batches:</strong> Choose from various batch
                options, including regular, weekend, and recorded courses
                spanning different durations. Find a batch that aligns with your
                schedule.
              </li>
            </ul>
          </section>

          <section id="deliverables">
            <h3>Coaching Deliverables at ASAP Institute:</h3>
            <ol>
              <li>
                <strong>Offline Coaching:</strong> Join our regular or weekend
                batches at our center in Delhi for an intensive learning
                experience.
              </li>
              <li>
                <strong>Online Live Classes:</strong> Experience the best online
                coaching for GATE Chemistry with live online classes. Benefit
                from live classes available in regular morning, regular evening,
                and weekend modes, complemented by recorded content for flexible
                learning.
              </li>
              <li>
                <strong>Online Recorded Courses:</strong> Access recorded
                courses spanning different durations for Self-paced learning.
              </li>
              <li>
                <strong>Study Material:</strong> Our study material is designed
                to complement your preparation, covering subtopic-wise PYQs,
                assignments, and theory booklets.
              </li>
              <li>
                <strong>Test Series:</strong> Evaluate your progress with our
                meticulously designed test series, replicating the GATE exam
                environment.
              </li>
            </ol>
          </section>

          <section id="admission-procedure">
            <h3>Admission Procedure:</h3>
            <p>
              Enrolling in our GATE Chemistry coaching is simple. Register
              online or visit our institute in Jia Sarai, Delhi, for in-person
              registration. Secure your seat for a comprehensive GATE
              preparation journey.
            </p>
          </section>

          <section id="elevate-aspirations">
            <h3>GATE Chemistry - Elevate Your Academic Aspirations:</h3>
            <p>
              ASAP Institute, formerly CHEMTIME, invites you to embark on your
              GATE Chemistry preparation journey. Join us and pave your way to
              success in the GATE exam.
            </p>
          </section>
        </div>
      </div>

      <WhatsappIcon />

      <Footer />
    </div>
  );
};

export default TopCourseGate;
