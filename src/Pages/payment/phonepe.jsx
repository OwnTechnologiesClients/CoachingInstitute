import React, { useEffect, useState } from "react";
import "./Phonepe.scss";
import axios from "axios";
import phonepe from "./image/phonepe.png";
import { useLocation, useNavigate } from "react-router-dom";


const Phonepe = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const totalCost = location?.state?.totalCost || 0;


  const [loading2, setLoading2] = useState(false);
  const [formData, setFormData] = useState({
    name: "vipul",
    amount: totalCost,
    number: "7015129103",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const data = {
    ...formData,
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };

  const handlePayment = async (e) => {
    // e.preventDefault();
    try {
      setLoading2(true);
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/v1/phonepe/payment",
        data: { ...data },
      });
      setLoading2(false);
      console.log(response.data.url);
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (totalCost === 0) {
      navigate("/");
    }
    else {
      handlePayment();
    }
  }, [])

  return (
    <>
      <div className="Phonepe">
        <div>
          <img width={300} src={phonepe} alt="" />
          <h2>
            <span>LIVE</span> Payment
            Integration
          </h2>
        </div>
        <div>
          <form onSubmit={handlePayment}>
            <div>
              <label>
                <strong>Name:</strong>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Number:</strong>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Amount:</strong>
                <span>{formData.amount}</span>
                Rs
              </label>
            </div>
            {!loading2 ? (
              <div>
                <button type="submit">Pay Now</button>
              </div>
            ) : (
              <div>
                <button type="submit">
                  <div role="status">
                    <span>Wait...</span>
                  </div>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Phonepe;
