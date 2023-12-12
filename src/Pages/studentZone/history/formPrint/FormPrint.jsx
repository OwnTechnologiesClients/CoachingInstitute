import React, { useEffect, useState } from 'react'
import './FormPrint.scss';
import logo from '../../../../assets/logo.png';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
function FormPrint() {

    const { currentUser } = useSelector((state) => state.users);
    const [imagefilename, setImageFileName] = useState(null);
    const handlePrint = (e) => {
        e.preventDefault();
        print();
    }

    const getImage = async () => {
        const response = await
            axios({
                method: 'get',
                url: 'http://localhost:9000/api/student/get-current-user',
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        setImageFileName(response.data.data.myfilename)
    }

    useEffect(() => {
        getImage()
    }, [])
    return (

        <form className='form-pay-printing'>
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
                            value={currentUser.registrationnumber}
                        />
                    </div>
                    <div className='form-profilepic'>
                        <img src={`http://localhost:9000/public/${imagefilename}`} />
                    </div>

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
                            value="6 Months"
                            checked={currentUser.courseduration === "6 Months"}
                        />
                    </label>


                    <label>
                        <span>1 Year</span>
                        <input
                            name='courseduration'
                            type="radio"
                            value="1 Year"
                            checked={currentUser.courseduration === "1 Year"}
                        />
                    </label>


                    <label>

                        <span>2 Years</span>
                        <input
                            name='courseduration'
                            type="radio"
                            value="2 Years"
                            checked={currentUser.courseduration === "2 Years"}
                        />
                    </label>

                </div>

                {/* ------- Session field -------- */}
                <div className='sf-register-field'>
                    <p className='sf-form-text'>Session: </p>

                    <input
                        type="text"
                        name='session'
                        value={currentUser.session}
                    />
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
                            checked={currentUser.coursetype === "Demo"}
                        />
                    </label>


                    <label>
                        <span>Regular</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="Regular"
                            // Checking this radio button if the selected option is "Female"
                            checked={currentUser.coursetype === "Regular"}
                        />
                    </label>


                    <label>
                        <span>Weekend</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="Weekend"
                            // Checking this radio button if the selected option is "Other"
                            checked={currentUser.coursetype === "Weekend"}
                        />
                    </label>

                    <label>
                        <span>Correspondance</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="correspondance"
                            checked={currentUser.coursetype === "correspondance"}
                        />
                    </label>

                    <label>
                        <span>Test Series</span>
                        <input
                            name='coursetype'
                            type="radio"
                            value="Test Series"
                            // Checking this radio button if the selected option is "Other"
                            checked={currentUser.coursetype === "Test Series"}
                        />
                    </label>

                </div>



            </div>

            {/*---------------------- Name of examination ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Name of Course</p>

                    <input
                        type="text"
                        name='coursename'
                        value={currentUser.coursename}
                    />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Name of Subject</p>

                    <input
                        type="text"
                        name='subject'
                        value={currentUser.subject}
                    />
                </div>


            </div>


            {/*---------------------- Student Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-student-name'>
                    <p>Name: </p>

                    <input
                        type="text"
                        name='studentname'
                        value={currentUser.studentname} />
                </div>
            </div>



            {/*---------------------- Date of birth ---------------------- */}
            <div className='sf-date-of-birth'>

                <div className='sf-date-of-birth'>
                    <p>Date Of Birth (DD/MM/YY): </p>

                    <input
                        type="date"
                        name='dateofbirth'
                        value={currentUser.dateofbirth} />
                </div>


                <div className='sf-date-of-birth'>
                    <p>Category: </p>

                    <input
                        type="text"
                        name='category'
                        value={currentUser.category}
                    />
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
                        checked={currentUser.gender === "Male"}
                    />
                </label>

                <label>
                    <span>Female</span>
                    <input
                        name='gender'
                        type="radio"
                        value="Female"
                        // Checking this radio button if the selected option is "Male"
                        checked={currentUser.gender === "Female"}
                    />
                </label>
            </div>



            {/*---------------------- Father Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-father-name'>
                    <p>Father Name: </p>

                    <input
                        type="text"
                        name='fathername'
                        value={currentUser.fathername} />
                </div>
            </div>



            {/*---------------------- Guardians Occupation ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Guardians Occupation: </p>

                    <input
                        type="text"
                        name='fatheroccupation'
                        value={currentUser.fatheroccupation}
                    />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Designation: </p>

                    <input
                        type="text"
                        name='designation'
                        value={currentUser.designation}
                    />
                </div>


            </div>


            {/*---------------------- Address Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-father-name'>
                    <p>Address: </p>

                    <input
                        type="text"
                        name='address'
                        value={currentUser.address} />
                </div>
            </div>



            {/*---------------------- State - pin - phoneno ---------------------- */}
            <div className='sf-date-of-birth'>

                <div className='sf-date-of-birth'>
                    <p>State: </p>

                    <input
                        type="text"
                        name='state'
                        value={currentUser.state} />
                </div>


                <div className='sf-date-of-birth'>
                    <p>Pin: </p>

                    <input
                        type="text"
                        name='pincode'
                        value={currentUser.pincode} />
                </div>

                <div className='sf-date-of-birth'>
                    <p>Phone (Res): </p>

                    <input
                        type="text"
                        name='phonenumber'
                        value={currentUser.phonenumber}
                    />
                </div>



            </div>


            {/*---------------------- Mobile No / Email ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Mobile No: </p>

                    <input
                        type="text"
                        name='mobilenumber'
                        value={currentUser.mobilenumber} />
                </div>


                <div className='sf-name-of-subject'>
                    <p>Email: </p>

                    <input
                        type="text"
                        name='email'
                        value={currentUser.email}
                    />
                </div>


            </div>

            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Amount: </p>

                    <input
                        type="text"
                        name='price'
                        value={currentUser.price} />
                </div>
            </div>


            <div className='sf-result-border'></div>

            <div className='sf-result-heading-parent'>
                <div className='sf-result-heading'>
                    <p>Examination</p>

                </div>
                <div>
                    <p>Year of Passing</p>
                </div>

                <div>
                    <p>% C.G.P.A</p>
                </div>

                <div>
                    <p>Division</p>
                </div>

                <div>
                    <p>College</p>
                </div>
                <div>
                    <p>University/Institution</p>
                </div>


            </div>
            <div className='sf-result-border'></div>


            {/* ///---------- result X --------------------- */}

            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p>X</p>
                </div>
                <div>
                    <input
                        type="text"
                        name='xyearpassing'
                        value={currentUser.xyearpassing}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='xcgpa'
                        value={currentUser.xcgpa}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='xdivision'
                        value={currentUser.xdivision}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='xcollege'
                        value={currentUser.xcollege}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='xuniversity'
                        value={currentUser.xuniversity}
                    />
                </div>


            </div>

            <div className='sf-result-border-2'></div>

            {/* ///---------- result XI --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p>XII</p>
                </div>
                <div>
                    <input
                        type="text"
                        name='xiiyearpassing'
                        value={currentUser.xiiyearpassing}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='xiicgpa'
                        value={currentUser.xiicgpa}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='xiidivision'
                        value={currentUser.xiidivision}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='xiicollege'
                        value={currentUser.xiicollege}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='xiiuniversity'
                        value={currentUser.xiiuniversity}
                    />
                </div>


            </div>

            <div className='sf-result-border-2'></div>


            {/* ///---------- result Graduation --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p>Graduation</p>
                </div>
                <div>
                    <input
                        type="text"
                        name='graduationyearpassing'
                        value={currentUser.graduationyearpassing}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='graduationcgpa'
                        value={currentUser.graduationcgpa}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='graduationdivision'
                        value={currentUser.graduationdivision}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='graduationcollege'
                        value={currentUser.graduationcollege}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='graduationuniversity'
                        value={currentUser.graduationuniversity}
                    />
                </div>


            </div>

            <div className='sf-result-border-2'></div>


            {/* ///---------- result Post Graduation --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p>Post Graduation</p>
                </div>
                <div>
                    <input
                        type="text"
                        name='postgraduationyearpassing'
                        value={currentUser.postgraduationyearpassing}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='postgraduationcgpa'
                        value={currentUser.postgraduationcgpa}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='postgraduationdivision'
                        value={currentUser.postgraduationdivision}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='postgraduationcollege'
                        value={currentUser.postgraduationcollege}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name='postgraduationuniversity'
                        value={currentUser.postgraduationuniversity} />
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
                            checked={currentUser.modeofpayment === "Online"}
                        />
                    </label>


                    <label>
                        <span>Offline</span>
                        <input
                            name='modeofpayment'
                            type="radio"
                            value="Offline"
                            // Checking this radio button if the selected option is "Female"
                            checked={currentUser.modeofpayment === "Offline"}
                        />
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
                        value={currentUser.knowaboutus} />
                </div>
            </div>



            {/*---------------------- Registration Procedure  ---------------------- */}
            <div className='sf-registration-procedure'>
                <p>Registration Procedure:- </p>
                <p>Send your duly signed application form with one photograph and original copy of Online/Cash Deposit Slip/Transaction Slip drawn in favour of “ASAP CHEM TIME Pvt. Ltd.” payable at New Delhi, to Head. Office only as mentioned in the top right corner of this form. Students are required to mention their Name, Course and Subject on the back side of Demand Draft.</p>
            </div>

            {/*---------------------- DECLARATION  ---------------------- */}
            <div className='sf-declaration'>
                <p>DECLARATION</p>
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
                        value={currentUser.date} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Place</p>

                    <input
                        type="text"
                        name='place'
                        value={currentUser.place} />
                </div>


            </div>

            <div>
                <div className='after-payment-bar'>
                    <div className="d2">
                        Payment Amount : ₹ {currentUser.price}
                    </div>
                    <div className="d1">Registration Status :{' '}
                        <span className='d3'>
                            Successful
                        </span>
                    </div>
                </div>
                <div className='download-as-pdf'>
                    <button className='button' onClick={handlePrint}>Download As PDF</button>
                    <Link className='button-home' to="/">Home</Link>
                </div>
            </div>

        </form>

    )
}

export default FormPrint