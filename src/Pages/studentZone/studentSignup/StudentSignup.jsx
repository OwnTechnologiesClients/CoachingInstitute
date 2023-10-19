import React, { useEffect, useRef } from 'react'
import axios from 'axios';
import './StudentSignup.scss';
import { useNavigate } from 'react-router-dom';
import { Header1, Header2 } from '../../../components/header/Header';
import WhatsappIcon from '../../../components/whatsappIcon/WhatsappIcon';
import Navbar from '../../../Components/navbar/Navbar';
import Footer from '../../../Components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentSignup = () => {

    // const fileInputRef = useRef(null);

    const formSignupRef = useRef();

    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();

        const formData = new FormData(formSignupRef.current);
        const formObject = {};

        //converting formData to object
        formData.forEach((value, key) => {
            // Use 'set' to handle multiple values for the same key (e.g., checkboxes)
            formObject[key] = formObject[key] ? [...formObject[key], value] : value;
        });

        console.log('Form Data:', formObject);

        formObject['fathername'] = 'fathernamed';
        formObject['state'] = 'stated';

        try {

            const response = await
                axios({
                    method: 'post',
                    url: 'https://backend-k.onrender.com/api/student/register',
                    data: formObject,
                });
            console.log(response.data);

            if (response.data.success) {
                localStorage.setItem('token', response.data.data);
                toast.success('Registration Successful', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                setTimeout(() => {
                    navigate('/student-login');
                }, 2000);
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
        }

    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        // Trigger the click event on the file input element
        fileInputRef.current.click();
    };


    const handleFileChange = (e) => {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        console.log('Selected File:', selectedFile);
    }



    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])

    return (
        <div >
            <Header1 />
            <Header2 />
            <Navbar />

            <div className='student-detail-parent'>
                <div className='query-square'>
                    <div className='square-header'>
                        <h2>Student Details</h2>
                    </div>
                    <form className='query-card-parent' ref={formSignupRef}>

                        {/* ------------ First name Input textfield -------------------- */}
                        <input type="text" className="form-control" name="studentname"
                            value={firstname}
                            onChange={(e) => { setFirstname(e.target.value) }}
                            placeholder="First Name" required />


                        {/* ------------ emailAddress Input textfield -------------------- */}
                        <input type="text" className="form-control" name="email"
                            value={emailAddress}
                            onChange={(e) => { setEmailAddress(e.target.value) }}
                            placeholder="Email Address" required />


                        {/* ------------ contact Number Input textfield -------------------- */}
                        <input type="text" className="form-control" name="contactnumber"
                            value={contactNumber}
                            maxLength='10'
                            onChange={(e) => { setContactNumber(e.target.value) }}
                            placeholder="Contact Number" required />

                        {/* ------------ City Input textfield -------------------- */}
                        <input type="text" className="form-control" name="city"
                            value={city}
                            onChange={(e) => { setCity(e.target.value) }}
                            placeholder="Enter City" required />

                        {/* ------------ City Input textfield -------------------- */}
                        <input type="date" className="form-control" name="dateofbirth"
                            value={dob}
                            onChange={(e) => { setDOB(e.target.value) }}
                            placeholder="Enter Date of Birth : yyyy-mm-dd" required />

                        {/* ------------ Pincode Input textfield -------------------- */}
                        <input type="text" className="form-control" name="pincode"
                            value={pincode}
                            onChange={(e) => { setPincode(e.target.value) }}
                            placeholder="Enter Pincode" required />

                        {/* ------------ Address Input textfield -------------------- */}
                        <input type="text" className="form-control" name="address"
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                            placeholder="Enter Address" required />

                        {/* ------------ Upload Image Button -------------------- */}
                        {/* Button to trigger file input click */}
                        <button
                            className="form-control img-button"
                            onClick={handleButtonClick}
                        >
                            Upload Image
                        </button>

                        {/* Hidden file input */}
                        <input
                            name='profileimage'
                            type="file"
                            id="getfile"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />

                        <div className='signup-button'>
                            <button className="button" onClick={handleSignup}>Sign Up</button>
                        </div>

                        <p>Already Memeber? Sign In</p>

                    </form>
                </div>
            </div>

            <WhatsappIcon />
            <Footer />
            <ToastContainer closeButton={false} />
        </div>
    )
}

export default StudentSignup