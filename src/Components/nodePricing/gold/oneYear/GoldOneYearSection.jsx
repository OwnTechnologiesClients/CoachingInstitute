import React, { useState } from "react";
import "../GoldSection.scss";
import Tick from "../../../../assets/icons/gold-tick.png";
import Cross from "../../../../assets/icons/gold-cross.png";
import { Link } from 'react-router-dom';

const GoldOneYearSection = () => {
  const [showAll, setShowAll] = useState(false);

  const handleReadMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <main className="node-gold-price-container">
      <div className="price-template">
      <section className="head-section">
          <h3 className="text-head">GOLD 6 Months</h3>
        </section>

        <section className="col-section">
          <div className="value">
            <span className="right-value">₹ 4,749 / Month</span>
            <span className="left-value">₹ 7,749</span>
          </div>

          <Link to='https://rzp.io/l/kT4g9Ed' target="_blank">
            <div className="button-data">
              Enroll Now
            </div>
          </Link>

          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Live Classes</p>
            </div>
            {/* <p className="inr">₹ 6999</p> */}
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>2 Months Internship </p>
            </div>
            {/* <p className="inr">₹ 6999</p> */}
          </div>

          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Certificate of Course Completion</p>
            </div>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Internship Certificate </p>
            </div>
            {/* <p className="inr">₹ 6999</p> */}
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Amazon, Airbnb & multiple projects </p>
            </div>
            {/* <p className="inr">₹ 6999</p> */}
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Industry standard curriculum by expert</p>
            </div>
            {/* <p>₹ 9999</p> */}
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>1:1 live doubt support (Unlimited)</p>
            </div>
            {/* <p>₹ 7999</p> */}
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Live Doubt Class</p>
            </div>
            {/* <p className="inr">₹ 999</p> */}
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Dedicated relationship manager		</p>
            </div>
            {/* <p className="inr">₹ 1999</p> */}
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Cancel anytime in first 14 days, full refundable.</p>
            </div>
            {/* <p className="inr">₹ 499</p> */}
          </div>

          {showAll && (
            <>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>
                    Dedicated, focused, personalised placement assistance.
                  </p>
                </div>
                {/* <p>₹ 2999</p> */}
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>Peer Interaction and network building</p>
                </div>
                {/* <p>₹ 499</p> */}
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>1:1 Domain Expert Sessions</p>
                </div>
                {/* <p className="inr">
              ₹ 499 Per <br /> 39*1 Tests
            </p> */}
              </div>

              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>
                    Real Life and Industry Grade Projects
                  </p>
                </div>
                {/* <p>₹ 499</p> */}
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>
                    LIVE sessions on how to get a job, resume, freelance, open source & more
                  </p>
                </div>
                {/* <p className="inr">₹ 600</p> */}
              </div>

            </>
          )}
          <div className="btns">
            <button className="read-more-btn" onClick={handleReadMoreClick}>
              {showAll ? "Read Less" : "Read More..."}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GoldOneYearSection;
