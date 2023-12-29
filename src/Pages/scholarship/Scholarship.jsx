import React, { useState } from "react";
import "./Scholarship.scss";
import { Header1, Header2 } from "../../components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import Loader from "../../components/loaderSpinner/Loader";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import { ToastContainer } from "react-toastify";

const Scholarship = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = ()=>{

  }
  
  return (
    <div className="scholarship-page">
      <Header1 />
      <Header2 />
      <Navbar />
      <div className="student-login-section">
        <div className="student-login-square">
          {loader ? <Loader /> : ""}
          <div className="student-login-square-header">
            <h2>Login</h2>
          </div>
          <div className="student-login-card-parent">
            <div className="student-login-userid-section">
              <p>Email ID</p>

              {/* ------------ User Id Input textfield -------------------- */}
              <input
                type="text"
                className="form-control"
                name="title"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="student-login-userid-section">
              <p>DOB</p>

              {/* ------------ Password Input textfield -------------------- */}
              <input
                type="date"
                className="form-control"
                name="dateofbirth"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="DD/MM/YYYY"
                required
              />
            </div>

            <div className="login-button">
              <button className="button" onClick={handleLogin}>
                Login
              </button>
            </div>

            <div className="already-member">
              <p className="signupnow">
                Don't have Account? <Link to="/student-signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer closeButton={false} />
    </div>
  );
};

export default Scholarship;
