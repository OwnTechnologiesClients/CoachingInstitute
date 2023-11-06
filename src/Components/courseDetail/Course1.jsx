import React from 'react'
import courseJson from './Couse1.json'
import './AllCourse.scss'
const Course1 = ({ courseName = "GATE" }) => {

    const cname = courseJson[courseName];
    return (
        <div className='specific-course'>
            {
                <div>
                    <h2>{cname.Heading}</h2>
                    <p>{cname.content}</p>

                    <h3>Course Features</h3>
                    {
                        Object.keys(cname.points).map((a, i) => {
                            return <div key={i} className='points'>
                                <h4>• {a} :</h4>
                                <span>{cname.points[a]}</span>
                            </div>
                        })
                    }

                    <div className="reg-procedure">
                        <h3>Registration Procedure</h3>

                        <p>To Enroll in our GATE CHEMISTRY online course, you can follow these simple steps:</p>
                        <div className="points">
                            <h4>• Online Registration</h4>
                            <span>Click on the "Enroll Now" link provided on our website to register online.</span>
                        </div>
                        <div className="points">
                            <h4>• In-Person Registration</h4>
                            <span>You may also visit the ASAP Institute office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</span>
                        </div>
                        <div className="points">
                            <h4>• Fee Payment</h4>
                            <span>: Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi</h5></span>
                        </div>



                        <p>{cname.featureFooter}
                            <br /> <br />
                            For inquiries and assistance, please contact us at:
                        </p>

                        <div className="points">
                            <h4>• Phone: <h5>8595764714, 7011767872, 9026800325</h5></h4>
                        </div>
                    </div>

                    <div className="faq-container">
                        <h3>Frequently Asked Questions (FAQs)</h3>
                        <div className="faq">
                            {Object.keys(cname.faq).map((q, i) => {
                                return <div key={i} className="faq-qn">
                                    <h4>{q}</h4>
                                    <span><b>A :</b> {cname.faq[q]}</span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            }

        </div>
    )
}

export default Course1