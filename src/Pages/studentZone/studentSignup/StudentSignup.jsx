import React, { useEffect } from 'react';
import axios from 'axios';
import './StudentSignup.scss';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Header1, Header2 } from '../../../components/header/Header';
import WhatsappIcon from '../../../components/whatsappIcon/WhatsappIcon';
import Navbar from '../../../Components/navbar/Navbar';
import Footer from '../../../Components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../components/loaderSpinner/Loader';

const StudentSignup = () => {
    const [loader, setLoader] = useState(false);
    const [img, setImg] = useState("");
    const [firstname, setFirstname] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [address, setAddress] = useState("");
    const [mage, setMage] = useState();
    const [stat, setStat] = useState("");
    const [fathername, setFatherName] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate();

    const onInputChange = async (e) => {
        console.log(e.target.files[0]);
        setMage(e.target.files[0]);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoader(true)
        const formData = new FormData();
        formData.append("myFile", mage);
        formData.append("studentname", firstname);
        formData.append("email", emailAddress);
        formData.append("fathername", fathername);
        formData.append("dateofbirth", date);
        formData.append("contactnumber", contactNumber);
        formData.append("city", city);
        formData.append("state", stat);
        formData.append("pincode", pincode);
        formData.append("address", address);
        console.log(formData)
        const result = await axios.post(
            "http://localhost:9000/api/student/register",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" }
            }
        )
        // console.log(result.data.data)
        // console.log(result);
        if (result.data.success) {
            setImg(result.data.data.myfilename)
        }
        console.log(img)

        if (result.data.success) {

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
            if (result.data.message === "Registration already have been done") {
                toast.warn("Email already exists", {
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
                console.log("=====>>>>>", result.data);
                toast.warn("Please fill all details", {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            }
        }
        setLoader(false)

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
                <img src={img}></img>

                <div className='query-square'>
                    {loader ? <Loader /> : ""}

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

                        {/* ------------ Father Name Input textfield -------------------- */}
                        <input type="text" className="form-control" name="title"
                            value={fathername}
                            onChange={(e) => { setFatherName(e.target.value) }}
                            placeholder="Father Name" />

                        {/* ------------ emailAddress Input textfield -------------------- */}
                        <input type="date" className="form-control" name="dob"
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }}
                            placeholder="Date of Birth" />


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

                        {/* ------------ State Input textfield -------------------- */}
                        <input type="text" className="form-control" name="title"
                            value={stat}
                            onChange={(e) => { setStat(e.target.value) }}
                            placeholder="Enter State" />

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

                        {/* ------------ Upload image Input textfield -------------------- */}
                        <button
                            className="form-control img-button"
                            onClick={() => document.getElementById("myFile").click()}
                        >
                            Upload Image
                        </button>

                        <input className="form-control" type="file" id="myFile" name="myFile"
                            onChange={onInputChange}
                        />



                        <div className='signup-button'>

                            <button classButton="button" onClick={handleSignup}>Sign Up</button>

                        </div>

                        <p>Already Memeber? <Link to='/student-login'>Sign In</Link></p>

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