import React, { useEffect,useRef } from 'react'
import axios from 'axios';
import './StudentSignup.scss';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header1, Header2 } from '../../../components/header/Header';
import WhatsappIcon from '../../../components/whatsappIcon/WhatsappIcon';
import Navbar from '../../../Components/navbar/Navbar';
import Footer from '../../../Components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StudentSignup = () => {

    const fileInputRef = useRef(null);

    const [firstname, setFirstname] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        const data = {
            studentname: firstname,
            email: emailAddress,
            fathername

        }
        try {

            const response = await
                axios({
                    method: 'post',
                    url: 'https://backend-k.onrender.com/api/student/signup',
                    data: {
                        studentname: firstname,
                        email: emailAddress,
                        fathername: "fathername",
                        dateofbirth: '01/10/2001',
                        contactnumber: contactNumber,
                        city: city,
                        state: "state",
                        pincode: pincode,
                        address: address,
                    },
                });
            console.log(response.data);

        } catch (error) {
            console.error('Error sending data:', error);
        }
        toast.success('Login successful', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
    }

    const handleButtonClick = () => {
        // Trigger the click event on the file input element
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        // Handle the file change event here
        const selectedFile = e.target.files[0];
        console.log('Selected File:', selectedFile);
    };

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
                    <div className='query-card-parent'>

                        {/* ------------ First name Input textfield -------------------- */}
                        <input type="text" className="form-control" name="title"
                            value={firstname}
                            onChange={(e) => { setFirstname(e.target.value) }}
                            placeholder="First Name" />


                        {/* ------------ emailAddress Input textfield -------------------- */}
                        <input type="text" className="form-control" name="title"
                            value={emailAddress}
                            onChange={(e) => { setEmailAddress(e.target.value) }}
                            placeholder="Email Address" />


                        {/* ------------ contact Number Input textfield -------------------- */}
                        <input type="text" className="form-control" name="title"
                            value={contactNumber}
                            onChange={(e) => { setContactNumber(e.target.value) }}
                            placeholder="Contact Number" />

                        {/* ------------ City Input textfield -------------------- */}
                        <input type="text" className="form-control" name="title"
                            value={city}
                            onChange={(e) => { setCity(e.target.value) }}
                            placeholder="Enter City" />

                        {/* ------------ Pincode Input textfield -------------------- */}
                        <input type="text" className="form-control" name="title"
                            value={pincode}
                            onChange={(e) => { setPincode(e.target.value) }}
                            placeholder="Enter Pincode" />

                        {/* ------------ Address Input textfield -------------------- */}
                        <input type="text" className="form-control" name="title"
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                            placeholder="Enter Address" />

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
                            type="file"
                            id="getfile"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />


                        <div className='signup-button'>
                            <button className="button" onClick={handleSignup}>Sign Up</button>


                        </div>

                        <p>Already Memeber? Sign In</p>

                    </div>
                </div>
            </div>
            <WhatsappIcon />
            <Footer />
            <ToastContainer closeButton={false} />
        </div>
    )
}

export default StudentSignup