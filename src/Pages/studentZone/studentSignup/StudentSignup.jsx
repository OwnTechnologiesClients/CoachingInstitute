import React from 'react'

import './StudentSignup.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom"



const StudentSignup = () => {
    const [firstname, setFirstname] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('/test-subjects');
    };

    return (
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


                    <div className='signup-button'>
                        <button class="button" onClick={navigateToContacts}>Sign Up</button>


                    </div>


                    <p>Already Memeber? Sign In</p>



                </div>
            </div>


        </div>
    )
}

export default StudentSignup