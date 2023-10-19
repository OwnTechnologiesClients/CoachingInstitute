import React from 'react'
import './Form.scss';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import teacher from '../../assets/teacher1.png';
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRazorpay from "react-razorpay";
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({
        registrationnumber: "",
        courseduration: "",
        session: "",
        coursetype: "",
        coursename: "",
        subject: "",
        studentname: "",
        dateofbirth: "",
        category: "",
        gender: "",
        fathername: "",
        fatheroccupation: "",
        designation: "",
        address: "",
        state: "",
        pincode: "",
        phonenumber: "",
        mobilenumber: "",
        email: "",
        modeofpayment: "",
        knowaboutus: "",
        date: "",
        place: "",
        xyearpassing: "",
        xcgpa: "",
        xdivision: "",
        xcollege: "",
        xuniversity: "",
        xiiyearpassing: "",
        xiicgpa: "",
        xiidivision: "",
        xiicollege: "",
        xiiuniversity: "",
        graduationyearpassing: "",
        graduationcgpa: "",
        graduationdivision: "",
        graduationcollege: "",
        graduationuniversity: "",
        postgraduationyearpassing: "",
        postgraduationcgpa: "",
        postgraduationdivision: "",
        postgraduationcollege: "",
        postgraduationuniversity: ""
    })


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        if (event.target.name === 'coursetype') {
            setFormData((prevData) => ({
                ...prevData,
                [event.target.name]: event.target.value
            }));
        }
        if (event.target.name === 'gender') {
            setFormData((prevData) => ({
                ...prevData,
                [event.target.name]: event.target.value
            }));
        }
        if (event.target.name === 'courseduration') {
            setFormData((prevData) => ({
                ...prevData,
                [event.target.name]: event.target.value
            }));
        }
        if (event.target.name === 'modeofpayment') {
            setFormData((prevData) => ({
                ...prevData,
                [event.target.name]: event.target.value
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
console.log("first")
        try {

            const response = await
                axios({
                    method: 'post',
                    url: 'https://backend-k.onrender.com/api/student/registration-form',

                    data: formData,
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
            console.log(response.data);

            if (response.data.success) {
                toast.success('Saved Successful', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            }
            else {
                toast.warn(response.data.message, {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            }

        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error, maybe show an error message to the user
        }
    }

    //Function to handle razorpay
    const handlePayment = async (params) => {
    };

    return (

        <form>
            <div className='sf-header-parent'>
                <div className='sf-header'>
                    <img src={logo} />
                </div>
                <div className='sf-contact-details' >
                    <p>Reg, Orice: 28-B/71- Jia Sara (Hauz Khas) Near IT Delhi - 110016</p>
                    <p>Tel.: +91-8595764714</p>
                    <p>E-mail: info@asapchemtime.com</p>
                </div>
            </div>

            <div className='sf-form-parent'>

                <div className='sf-register-profile-img-parent'>
                    <div className='sf-register-field'>
                        <p className='sf-form-text'>Reg. No</p>

                        <input
                            type="text"
                            name='registrationnumber'
                            value={formData.registrationnumber}
                            onChange={handleChange} />
                    </div>
                    <img src={teacher} />

                </div>

            </div>


            {/*---------------------- Course Duration ---------------------- */}

            <div className='sf-course-section'>

                <div className='sf-course-radio-button-form'>
                    <label>

                        <span>Course Duration: </span>

                    </label>
                    <label>

                        <span>6 Month</span>
                        <input
                            name='courseduration'
                            type="radio"
                            value="6 Month"
                            // checked={selectedOption === "6 Month"}
                            onChange={handleChange} />
                    </label>


                    <label>
                        <span>1 Year</span>
                        <input
                            name='courseduration'
                            type="radio"
                            value="1 Year"
                            // checked={selectedOption === "1 Year"}
                            onChange={handleChange} />
                    </label>


                    <label>

                        <span>2 Year</span>
                        <input
                            name='courseduration'
                            type="radio"
                            value="2 Year"
                            // checked={selectedOption === "2 Year"}
                            onChange={handleChange} />
                    </label>

                </div>

                {/* ------- Session field -------- */}
                <div className='sf-register-field'>
                    <p className='sf-form-text'>Session: </p>

                    <input
                        type="text"
                        name='session'
                        value={formData.session}
                        onChange={handleChange} />
                </div>

            </div>




            {/*---------------------- Course Mode ---------------------- */}

            <div className='sf-course-section'>

                <div className='sf-course-radio-button-form'>

                    <label>

                        <span>Demo</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="Demo"
                            // Checking this radio button if the selected option is "Male"
                            // checked={selectedOption === "Demo"}
                            onChange={handleChange} />
                    </label>


                    <label>
                        <span>Regular</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="Regular"
                            // Checking this radio button if the selected option is "Female"
                            // checked={selectedOption === "Regular"}
                            onChange={handleChange} />
                    </label>


                    <label>
                        <span>Weekend</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="Weekend"
                            // Checking this radio button if the selected option is "Other"
                            // checked={selectedOption === "Weekend"}
                            onChange={handleChange} />
                    </label>

                    <label>
                        <span>Correspondance</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="correspondance"
                            // checked={selectedOption === "correspondance"}
                            onChange={handleChange} />
                    </label>

                    <label>
                        <span>Test Series</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="Test Series"
                            // Checking this radio button if the selected option is "Other"
                            // checked={selectedOption === "Test Series"}
                            onChange={handleChange} />
                    </label>

                </div>



            </div>

            {/*---------------------- Name of examination ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Name of Examination</p>

                    <input
                        type="text"
                        name='coursename'
                        value={formData.coursename}
                        onChange={handleChange} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Name of Subject</p>

                    <input
                        type="text"
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange} />
                </div>


            </div>


            {/*---------------------- Student Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-student-name'>
                    <p>Name: </p>

                    <input
                        type="text"
                        name='studentname'
                        value={formData.studentname}
                        onChange={handleChange} />
                </div>
            </div>



            {/*---------------------- Date of birth ---------------------- */}
            <div className='sf-date-of-birth'>

                <div className='sf-date-of-birth'>
                    <p>Date Of Birth (DD/MM/YY): </p>

                    <input
                        type="text"
                        name='dateofbirth'
                        value={formData.dateofbirth}
                        onChange={handleChange} />
                </div>


                <div className='sf-date-of-birth'>
                    <p>Category: </p>

                    <input
                        type="text"
                        name='category'
                        value={formData.category}
                        onChange={handleChange} />
                </div>


                <label>
                    <span>Gender: </span>
                </label>
                <label>

                    <span>Male</span>
                    <input
                        name='gender'
                        type="radio"
                        value="Male"
                        // Checking this radio button if the selected option is "Male"
                        // checked={selectedOption === "Male"}
                        onChange={handleChange} />
                </label>

                <label>
                    <span>Female</span>
                    <input
                        name='gender'
                        type="radio"
                        value="Female"
                        // Checking this radio button if the selected option is "Male"
                        // checked={selectedOption === "Female"}
                        onChange={handleChange} />
                </label>
            </div>



            {/*---------------------- Father Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-father-name'>
                    <p>Father Name: </p>

                    <input
                        type="text"
                        name='fathername'
                        value={formData.fathername}
                        onChange={handleChange} />
                </div>
            </div>



            {/*---------------------- Guardians Occupation ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Guardians Occupation: </p>

                    <input
                        type="text"
                        name='fatheroccupation'
                        value={formData.fatheroccupation}
                        onChange={handleChange} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Designation: </p>

                    <input
                        type="text"
                        name='designation'
                        value={formData.designation}
                        onChange={handleChange} />
                </div>


            </div>


            {/*---------------------- Address Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-father-name'>
                    <p>Address: </p>

                    <input
                        type="text"
                        name='address'
                        value={formData.address}
                        onChange={handleChange} />
                </div>
            </div>



            {/*---------------------- State - pin - phoneno ---------------------- */}
            <div className='sf-date-of-birth'>

                <div className='sf-date-of-birth'>
                    <p>State: </p>

                    <input
                        type="text"
                        name='state'
                        value={formData.state}
                        onChange={handleChange} />
                </div>


                <div className='sf-date-of-birth'>
                    <p>Pin: </p>

                    <input
                        type="text"
                        name='pincode'
                        value={formData.pincode}
                        onChange={handleChange} />
                </div>

                <div className='sf-date-of-birth'>
                    <p>Phone (Res): </p>

                    <input
                        type="text"
                        name='phonenumber'
                        value={formData.phonenumber}
                        onChange={handleChange} />
                </div>



            </div>


            {/*---------------------- Mobile No / Email ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Mobile No: </p>

                    <input
                        type="text"
                        name='mobilenumber'
                        value={formData.mobilenumber}
                        onChange={handleChange} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Email: </p>

                    <input
                        type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleChange} />
                </div>


            </div>





            <div className='sf-result-border'></div>

            <div className='sf-result-heading-parent'>
                <div className='sf-result-heading'>
                    <p1>Examination</p1>

                </div>
                <div>
                    <p1>Year of Passing</p1>
                </div>

                <div>
                    <p1>% C.G.P.A</p1>
                </div>

                <div>
                    <p1>Division</p1>
                </div>

                <div>
                    <p1>College</p1>
                </div>
                <div>
                    <p1>University/Institution</p1>
                </div>


            </div>
            <div className='sf-result-border'></div>


            {/* ///---------- result X --------------------- */}

            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p1>X</p1>
                </div>
                <div>
                    <input
                        type="text"
                        name='xyearpassing'
                        value={formData.xyearpassing}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='xcgpa'
                        value={formData.xcgpa}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='xdivision'
                        value={formData.xdivision}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='xcollege'
                        value={formData.xcollege}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='xuniversity'
                        value={formData.xuniversity}
                        onChange={handleChange} />
                </div>


            </div>

            <div className='sf-result-border-2'></div>

            {/* ///---------- result XI --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p1>XII</p1>
                </div>
                <div>
                    <input
                        type="text"
                        name='xiiyearpassing'
                        value={formData.xiiyearpassing}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='xiicgpa'
                        value={formData.xiicgpa}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='xiidivision'
                        value={formData.xiidivision}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='xiicollege'
                        value={formData.xiicollege}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='xiiuniversity'
                        value={formData.xiiuniversity}
                        onChange={handleChange} />
                </div>


            </div>

            <div className='sf-result-border-2'></div>


            {/* ///---------- result Graduation --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p1>Graduation</p1>
                </div>
                <div>
                    <input
                        type="text"
                        name='graduationyearpassing'
                        value={formData.graduationyearpassing}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='graduationcgpa'
                        value={formData.graduationcgpa}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='graduationdivision'
                        value={formData.graduationdivision}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='graduationcollege'
                        value={formData.graduationcollege}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='graduationuniversity'
                        value={formData.graduationuniversity}
                        onChange={handleChange} />
                </div>


            </div>

            <div className='sf-result-border-2'></div>


            {/* ///---------- result Post Graduation --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p1>Post Graduation</p1>
                </div>
                <div>
                    <input
                        type="text"
                        name='postgraduationyearpassing'
                        value={formData.postgraduationyearpassing}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='postgraduationcgpa'
                        value={formData.postgraduationcgpa}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='postgraduationdivision'
                        value={formData.postgraduationdivision}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='postgraduationcollege'
                        value={formData.postgraduationcollege}
                        onChange={handleChange} />
                </div>

                <div>
                    <input
                        type="text"
                        name='postgraduationuniversity'
                        value={formData.postgraduationuniversity}
                        onChange={handleChange} />
                </div>


            </div>


            <div className='sf-result-border-2'></div>


            {/*---------------------- Course Mode ---------------------- */}

            <div className='sf-course-section'>

                <div className='sf-course-radio-button-form'>
                    <label>

                        <span>Mode Of Payment: </span>

                    </label>
                    <label>

                        <span>Online</span>
                        <input
                            name='modeofpayment'
                            type="radio"
                            value="Online"
                            // Checking this radio button if the selected option is "Male"
                            // checked={selectedOption === "Male"}
                            onChange={handleChange} />
                    </label>


                    <label>
                        <span>Offline</span>
                        <input
                            name='modeofpayment'
                            type="radio"
                            value="Offline"
                            // Checking this radio button if the selected option is "Female"
                            // checked={selectedOption === "Female"}
                            onChange={handleChange} />
                    </label>

                </div>



            </div>

            {/*---------------------- How did you know about us ---------------------- */}
            <div className='sf-know-about-us'>

                <div className='sf-know-about-us'>
                    <p>How did you know about us? </p>

                    <input
                        type="text"
                        name='knowaboutus'
                        value={formData.knowaboutus}
                        onChange={handleChange} />
                </div>
            </div>



            {/*---------------------- Registration Procedure  ---------------------- */}
            <div className='sf-registration-procedure'>
                <p1>Registration Procedure:- </p1>
                <p>Send your duly signed application form with one photograph and original copy of Online/Cash Deposit Slip/Transaction Slip drawn in favour of “ASAP CHEM TIME Pvt. Ltd.” payable at New Delhi, to Head. Office only as mentioned in the top right corner of this form. Students are required to mention their Name, Course and Subject on the back side of Demand Draft.</p>
            </div>

            {/*---------------------- DECLARATION  ---------------------- */}
            <div className='sf-declaration'>
                <p1>DECLARATION</p1>
                <p>I have no objection for my result being published by the ASAP CHEM TIME Pvt. Ltd. if I succeed in the entrance examinations. For disciplinary action, the decision of the managing body of the Institute will be final. Any request for refund/interchange of material will not be entertained. The study material supplied to the student is our copyright and is meant for the use of student himself/herself only.
                    All disputes are subject to Delhi Jurisdiction only.</p><br></br>
                <p>I have read the declaration mention above and information given are true to the best of my knowledge.</p>
            </div>


            {/*---------------------- Date / place ---------------------- */}
            <div className='sf-date-place-parent'>

                <div className='sf-name-of-examination'>
                    <p>Date</p>

                    <input
                        type="text"
                        name='date'
                        value={formData.date}
                        onChange={handleChange} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Place</p>

                    <input
                        type="text"
                        name='place'
                        value={formData.place}
                        onChange={handleChange} />
                </div>


            </div>


            <div className='sf-paynow'>
                <button className="button" onClick={() => print()}>Print As PDF</button>
                <button className="button" onClick={handleSubmit}>Save</button>
                <button className="button" onClick={handlePayment}>Pay Now</button>

            </div>
            <ToastContainer closeButton={false} />
            <WhatsappIcon />
        </form>

    )
}

export default Form