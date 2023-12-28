import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CoursePageList.scss";

const CoursePageList = ({
  hd1,
  hd2,
  links,
  activeLink,
  onLinkClick,
  url1,
  handleLinksOpen,
}) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const navigate = useNavigate();
  const handleCourseName = (id) => {
    if (id === "CSIR-NET Chemical Sciences") {
      setCurrentUrl(id);
      navigate(`${url1}/csir-net`);
    } else if (id === "GATE Chemistry") {
      setCurrentUrl(id);
      navigate(`${url1}/gate`);
    } else if (id === "IIT-JAM Chemistry") {
      setCurrentUrl(id);
      navigate(`${url1}/iit-jam`);
    } else if (id === "CUET (PG) Chemistry") {
      setCurrentUrl(id);
      navigate(`${url1}/cuet`);
    } else if (id === "BARC (Chemistry)") {
      setCurrentUrl(id);
      navigate(`${url1}/barc`);
    } else if (id === "TIFR (Chemistry)") {
      setCurrentUrl(id);
      navigate(`${url1}/tifr`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="course-list">
      <h2>
        {hd1} <span className="under-bar">{hd2}</span>
      </h2>
      <div className="course-links">
        {links.map((item, index) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => {
                handleCourseName(item);
                // onLinkClick(item)
                handleLinksOpen();
              }}
            >
              <div
                className={`course-link ${
                  activeLink === `/onlinecourses/${item}` ||
                  activeLink === `/offlinecourses/${item}`
                    ? "active"
                    : ""
                }`}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const StudyPageList = ({
  hd1,
  hd2,
  links,
  activeLink,
  onLinkClick,
  url1,
  handleLinksOpen,
}) => {
  const navigate = useNavigate();
  const handleCourseName = (id) => {
    if (id === "CSIR-NET Chemical Sciences") navigate(`${url1}/csir-net`);
    else if (id === "GATE Chemistry") navigate(`${url1}/gate`);
    else if (id === "IIT-JAM Chemistry") navigate(`${url1}/iit-jam`);
    else if (id === "CUET (PG) Chemistry") navigate(`${url1}/cuet`);
    else if (id === "BARC (Chemistry)") navigate(`${url1}/barc`);
    else if (id === "TIFR (Chemistry)") navigate(`${url1}/tifr`);
    else {
      navigate("/");
    }
  };

  return (
    <div className="course-list">
      <h2>
        {hd1} <span className="under-bar">{hd2}</span>
      </h2>
      <div className="course-links">
        {links.map((item, index) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => {
                handleCourseName(item);
                // onLinkClick(item)
                handleLinksOpen();
              }}
            >
              <div
                className={`course-link ${
                  activeLink === `/studymaterial/${item}` ? "active" : ""
                }`}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const TestPageList = ({
  hd1,
  hd2,
  links,
  activeLink,
  onLinkClick,
  url1,
  handleLinksOpen,
}) => {
  const navigate = useNavigate();
  const handleCourseName = (id) => {
    if (id === "CSIR-NET Chemical Sciences") navigate(`${url1}/csir-net`);
    else if (id === "GATE Chemistry") navigate(`${url1}/gate`);
    else if (id === "IIT-JAM Chemistry") navigate(`${url1}/iit-jam`);
    else if (id === "CUET (PG) Chemistry") navigate(`${url1}/cuet`);
    else if (id === "BARC (Chemistry)") navigate(`${url1}/barc`);
    else if (id === "TIFR (Chemistry)") navigate(`${url1}/tifr`);
    else {
      navigate("/");
    }
  };

  return (
    <div className="course-list">
      <h2>
        {hd1} <span className="under-bar">{hd2}</span>
      </h2>
      <div className="course-links">
        {links.map((item, index) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => {
                handleCourseName(item);
                // onLinkClick(item)
                handleLinksOpen();
              }}
            >
              <div
                className={`course-link ${
                  activeLink === `/testseries/${item}` ? "active" : ""
                }`}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CoursePageList, StudyPageList, TestPageList };
