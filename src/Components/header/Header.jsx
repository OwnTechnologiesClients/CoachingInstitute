import React from "react";
import fbicon from "../../assets/icons/facebook.png";
import yticon from "../../assets/icons/youtube.png";
import linkedinicon from "../../assets/icons/linkedin.png";
import igicon from "../../assets/icons/instagram.png";
import logo from "../../assets/logo.png";
import phoneIcon from "../../assets/icons/newcall.png";
import clockIcon from "../../assets/clockIcon.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <div className="top-bar">
      <div className="top-links">
        <span>
          <Link to="/onlinecourses/flutter">Popular Courses &nbsp;&nbsp;| </Link>
        </span>
        <span>
          <Link to="/contact">Help Desk</Link>
        </span>
        {/* <span>
          <Link
            to={`${
              localStorage.getItem("token") ? "/history" : "/student-login"
            }`}
          >
            Login
          </Link>
        </span> */}
      </div>
      <div className="top-icons">
        <a
          href=""
          target="_blank"
        >
          <img src={fbicon} width={"17vw"} alt="facebook" caption="facebook icon" />
        </a>
        {/* <a href="https://www.youtube.com/@ASAPCHEMTIME" target="_blank">
          <img src={yticon} width={"17vw"} alt="" />
        </a> */}
        <a href="https://www.linkedin.com/company/99327442/admin/feed/posts/" target="_blank">
          <img src={linkedinicon} width={"17vw"} alt="linkedin" caption="linkedin icon"/>
        </a>

        <a
          href="https://www.instagram.com/techfever_official/"
          target="_blank"
        >
          <img src={igicon} width={"17vw"} alt="instagram" caption="instagram icon" />
        </a>
      </div>
    </div>
  );
};
const Header2 = () => {
  const handleTelephoneClick = () => {
    const phoneNumber = "tel:+918595764714";
    window.location.href = phoneNumber;
  };
  return (
    <div className="top-contact">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" caption="TechFever Logo" />
        </Link>
      </div>
      <div className="contact-header-2" onClick={handleTelephoneClick}>
        <div className="img">
          <img src={phoneIcon} alt="call" caption="dialing call icon"/>
        </div>
        <div className="detail-header-2">
          <h2>9910765616</h2>
          <h4>Call To Question</h4>
        </div>

        {/* <div className="call">
                    <a href="tel:+918595764714"><img src={phoneIcon} alt="" /></a>
                    <div>
                        <p className='h1'>CALL US TODAY</p>
                        <p className='h2'>+91 8595764714 / {window.innerWidth < 600 ? <br /> : ''} 7011767872</p>
                    </div>
                </div>
                <div className="time">
                    <img src={clockIcon} alt="" />
                    <div>
                        <p className='h1'>WE ARE OPEN</p>
                        <p className='h2'>Mon - Sun {window.innerWidth < 600 ? <br /> : ''} 9:00AM - 8:00PM</p>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export { Header1, Header2 };
