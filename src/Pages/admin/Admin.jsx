import React, { useEffect } from 'react'
import { useState } from "react";
import './Admin.scss';
import { Link, useNavigate } from "react-router-dom"
import { Header1, Header2 } from '../../components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Admin = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {
            console.log(userId, password)
            const response = await
                axios({
                    method: 'post',
                    url: 'https://backend-k.onrender.com/api/student/login',
                    data: {
                        email: userId,
                        dateofbirth: password
                    },
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
            console.log(response.data);
            if (response.data.success) {
                localStorage.setItem('token', response.data.data);
                toast.success('Login successful', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                setTimeout(() => {
                    navigate('/searchuser');
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
            // Handle error, maybe show an error message to the user
        }

    }
    useEffect(() => {
        if(localStorage.getItem('token')){
          navigate('/searchuser')
        }
      }, [])
    return (
        <div>
            <Header1 />
            <Header2 />
            <Navbar />

            <div className='student-login-section'>

                <div className='student-login-square'>
                    <div className='student-login-square-header'>
                        <h2>Admin Login</h2>
                    </div>
                    <div className='student-login-card-parent'>
                        {/* <h2>BECOME A MEMBER</h2> */}
                        <div className='student-login-userid-section'>
                            <p>User ID</p>

                            {/* ------------ User Id Input textfield -------------------- */}
                            <input type="text" className="form-control" name="title"
                                value={userId}
                                onChange={(e) => { setUserId(e.target.value) }}
                                placeholder="Enter Email"
                                required />
                        </div>

                        <div className='student-login-userid-section'>
                            <p>DOB</p>

                            {/* ------------ Password Input textfield -------------------- */}
                            <input type="date" className="form-control" name="dateofbirth"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="DD/MM/YYYY"
                                required />
                        </div>


                        <div className='login-button'>
                            <button className="button" onClick={handleLogin}>Login</button>
                        </div>

                    </div>
                </div>


            </div>
            <WhatsappIcon />
            <Footer />
            <ToastContainer closeButton={false} />
        </div>

    )
}

export default Admin