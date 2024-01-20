import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import darrow from "../../assets/down-arrow.png";
import hamburger from "../../assets/icons/hamburger.png";
import rightarrow from "../../assets/icons/rightarrow.png";
import "./navbar.scss";
import { SetIsClOpen } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyClass = isSticky ? "sticky" : "";

  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const pathname = location.pathname.split("/")[1];
    setActiveItem(pathname || "Home");
  }, [location]);

  const handleItemClick = (itemName) => {
    if (itemName === "Logout") {
      navigate("/history");
    }
    setActiveItem(itemName);
    closeMenu(); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isClOpen = useSelector((state) => state.users.isClOpen);

  const handleClopen = () => {
    dispatch(SetIsClOpen(!isClOpen));
  };

  return (
    <nav id="navbar" className={stickyClass}>
      <div className="menu-icon">
        <img src={hamburger} onClick={toggleMenu} alt="" />
        {!["Home", "videos", "contact", "about"].includes(activeItem) ? (
          <div onClick={handleClopen}> All Courses</div>
        ) : (
          ""
        )}
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => handleItemClick("Home")}>
          <div className={`menu-item ${activeItem === "Home" ? "active" : ""}`}>
            Home
          </div>
        </Link>

        <Link
          className="courses"
          to="/onlinecourses/flutter"
          onClick={() => handleItemClick("Courses")}
        >
          <div
            className={`menu-item ${activeItem === "onlinecourses" || activeItem === "offlinecourses"
                ? "active"
                : ""
              }`}
          >
            Courses <img src={darrow} alt="" />
            <div className="dropdown">
              <div className="dropdown-content">
                <Link to="/onlinecourses/flutter">
                  Online Courses{" "}
                  <img style={{ paddingLeft: "1vw" }} src={rightarrow} />{" "}
                </Link>
                <Link to="/offlinecourses/flutter">
                  Offline Courses{" "}
                  <img style={{ paddingLeft: "1vw" }} src={rightarrow} />{" "}
                </Link>
              </div>
            </div>
          </div>
        </Link>

        {/* <Link
          to="/testseries/flutter"
          onClick={() => handleItemClick("testseries")}>
          <div
            className={`menu-item ${
              activeItem === "testseries" ? "active" : ""
            }`}
          >
            Test Series
          </div>
        </Link> */}

        {/* <Link
          to="/studymaterial/flutter"
          onClick={() => handleItemClick("studymaterial")}>
          <div
            className={`menu-item ${
              activeItem === "studymaterial" ? "active" : ""
            }`}
          >
            Study Material
          </div>
        </Link> */}

        {/* <Link to="/videos" onClick={() => handleItemClick("videos")}>
          <div
            className={`menu-item ${activeItem === "videos" ? "active" : ""}`}
          >
            Videos
          </div>
        </Link> */}

        {/* <Link
          className="courses top-course-nav"
          to="/iit-jam"
          onClick={() => handleItemClick("iit-jam")}
        >
          <div
            className={`menu-item ${
              activeItem === "iit-jam" ||
              activeItem === "gate" ||
              activeItem === "flutter-jrf"
                ? "active"
                : ""
            }`}
          >
            Top Courses <img src={darrow} alt="" />
            <div className="dropdown">
              <div className="dropdown-content">
                <Link to="/flutter-jrf">
                  CSIR{" "}
                  <img
                    style={{ paddingLeft: "1vw", float: "right" }}
                    src={rightarrow}
                  />{" "}
                </Link>
                <hr />
                <Link to="/iit-jam">
                  IIT JAM{" "}
                  <img
                    style={{ paddingLeft: "1vw", float: "right" }}
                    src={rightarrow}
                  />{" "}
                </Link>
                <hr />
                <Link to="/gate">
                  Gate Chemistry{" "}
                  <img
                    style={{ paddingLeft: "1vw", float: "right" }}
                    src={rightarrow}
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </Link> */}

        <Link to="/contact" onClick={() => handleItemClick("contact")}>
          <div
            className={`menu-item ${activeItem === "contact" ? "active" : ""}`}
          >
            Contact Us
          </div>
        </Link>

        <Link to="/about" onClick={() => handleItemClick("about")}>
          <div
            className={`menu-item ${activeItem === "about" ? "active" : ""}`}
          >
            About Us
          </div>
        </Link>

        <Link
          to={`${localStorage.getItem("token") ? "/history" : "/student-login"
            }`}
          onClick={() => handleItemClick("Student Login")}
        >
          <div
            className={`menu-item ${activeItem === "student-login" ? "active" : ""
              }`}
          >
            Student Login
          </div>
        </Link>
        <Link
          to="https://blog.chemtime.co.in/"
          onClick={() => handleItemClick("blog")}
        >
          <div className={`menu-item ${activeItem === "blog" ? "active" : ""}`}>
            Blog
          </div>
        </Link>
        <Link to="/new-batch">
          <div className="new-batch">NEW BATCH</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
