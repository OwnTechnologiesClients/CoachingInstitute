import React from "react";
import './Success.css';
import { useNavigate } from "react-router-dom"

const Success = () => {
  const navigate = useNavigate();

  const formPayment = () => {
    navigate("/form", { state: { isPayment: true } })
  }


  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="alert alert-success text-center">
            <h4 className="alert-heading">Payment Successfull</h4>
          </div>
          {/* <a href="/">Back to Home</a> */}
          <button onClick={() => formPayment()}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
