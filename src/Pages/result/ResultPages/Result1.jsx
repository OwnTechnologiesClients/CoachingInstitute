import React, { useEffect, useState } from "react";
import "./Result1.scss";
//libraries
import { useNavigate, useParams } from "react-router-dom";
//components
import { Header1, Header2 } from "../../../components/header/Header";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
// import results from "./Result.json";
//assets
import gate from "../../../assets/result/gate.jpg";
import iitjam from "../../../assets/result/iitjam.jpg";
import csir from "../../../assets/result/allresult.jpg";

const Result1 = () => {
  const { course } = useParams();
  const navigate = useNavigate()

  const [resultImage, setResultImage] = useState();
  useEffect(() => {
    // Use a switch statement for multiple courses
    switch (course) {
      case "gate":
        setResultImage(gate);
        break;
      case "iit-jam":
        setResultImage(iitjam);
        break;
      case "flutter":
        setResultImage(csir);
        break;
      default:
        setResultImage(null);
        break;
    }
  }, [course]);

  //   const [filterOption, setFilterOption] = useState({
  //     year: "2019",
  //     course: "IITJAM",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFilterOption({
  //       ...filterOption,
  //       [name]: value,
  //     });
  //   };

  return (
    <div className="result-explore">
      <Header1 />
      <Header2 />
      <Navbar />
      <div className="result-page-section">


        {resultImage ? <img src={resultImage} alt="" /> : navigate('/result')}

        {/* <div className="filter">
                    <h2>Explore Our Prestigious Students</h2>

                    <div>
                        <select name="year" value={filterOption.year} onChange={handleChange}>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                        </select>

                        <select name="course" value={filterOption.course} onChange={handleChange}>
                            <option value="IITJAM">IIT-JAM</option>
                            <option value="CSIRNET">CSIR</option>
                        </select>
                    </div>

                </div>
                <div className="result-cards">
                    <div className="result-badges">

                        {results[filterOption.year][filterOption.course].map((item, index) => {
                            return <div key={index} className="badge">
                                <img src={item[0]} alt="" />
                                <p><b>{item[1]}</b></p>
                                <p>{item[2]}</p>
                                <p>{item[3]}</p>
                            </div>
                        })}



                    </div>
                </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Result1;
