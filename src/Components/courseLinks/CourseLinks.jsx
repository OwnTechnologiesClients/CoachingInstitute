import React, { useRef, useState } from "react";
import {
  CoursePageList,
  TestPageList,
  StudyPageList,
} from "../../components/coursePageList/CoursePageList";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CourseLinks.scss";
import ham from "../../assets/icons/right-arrow-white.png";

import { useSelector } from "react-redux/es/hooks/useSelector";

const CourseLinks = ({
  activeLink,
  handleLinkClick,
  coursesOpened,
  handleLinksOpen,
}) => {
  const form = useRef();
  const handleMessage = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    toast.success("We will contact you soon", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
    if (form !== null) {
      emailjs
        .sendForm(
          "service_89es95f",
          "template_15vr48a",
          form.current,
          "VPawiZbhu5LiJfU63"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
      form.current.reset();
    }
  };

  const currentURL = window.location.href;

  // Split the URL by '/' and get the part after the last slash
  const parts = currentURL.split("/");
  const afterLastSlash = parts[parts.length - 2];

  const links = [
    [
      "Flutter",
      "ReactJS",
      "NextJs",
      "NodeJs",
      "MERN Stack",
    ],
    [
      "CSIR-NET Chemical Sciences",
      "GATE Chemistry",
      "IIT-JAM Chemistry",
      "CUET (PG) Chemistry",
    ],
    [
      "CSIR-NET Chemical Sciences",
      "GATE Chemistry",
      "IIT-JAM Chemistry",
      "BARC (Chemistry)",
      "TIFR (Chemistry)",
    ],
  ];

  const isclopen = useSelector(state => state.users.isClOpen)

  return (
    <div
      className={`course-page-left-nav ${isclopen ? "links-opened" : ""}`}
    >
      {/* {window.innerWidth < 600 ? (
        <div className="open-links" onClick={() => handleLinksOpen()}>
          Courses <img src={ham} alt="" />
        </div>
      ) : (
        ""
      )} */}
      <CoursePageList
        hd1={"Courses"}
        hd2={"List"}
        links={links[0]}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
        url1={
          afterLastSlash === "onlinecourses" ||
          afterLastSlash === "offlinecourses"
            ? `/${afterLastSlash}`
            : "/onlinecourses"
        }
        handleLinksOpen={handleLinksOpen}
      />
      {/* <StudyPageList
        hd1={"Study"}
        hd2={"Material"}
        links={links[1]}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
        url1={"/studymaterial"}
        handleLinksOpen={handleLinksOpen}
      /> */}
      {/* <TestPageList
        hd1={"Test"}
        hd2={"Series"}
        links={links[2]}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
        url1={"/testseries"}
        handleLinksOpen={handleLinksOpen}
      /> */}

      {/* <div className="opening-hours-list">
                <h2>Opening <span className='under-bar'>Hours</span></h2>
                <div className="timings">
                    <span>Monday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Tuesday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Wednesday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Thursday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Friday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Saturday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Sunday :</span>
                    <span>9:00 am - 8:00 pm</span>
                </div>

            </div> */}

      {/* <div className="contact-form">
        <h2>
          Quick <span className="under-bar">Contact</span>
        </h2>
        <form className="form-fields" ref={form} onSubmit={handleMessage}>
          <input
            type="email"
            name="email"
            id="contact-email"
            placeholder="Enter Email"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
          <ToastContainer closeButton={false} />
        </form>
      </div> */}
    </div>
  );
};

export default CourseLinks;
