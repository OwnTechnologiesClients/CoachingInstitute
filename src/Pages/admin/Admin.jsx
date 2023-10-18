import React from 'react'
import { useState } from "react";
import './Admin.scss';
import { Header1, Header2 } from '../../components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Admin = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const response = await
                axios({
                    method: 'post',
                    url: 'https://backend-k.onrender.com/api/student/login',
                    data: {
                        email: 'vipul1243@gmail.com',
                        dateofbirth: '01/09/2001'
                    },
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
            console.log(response.data);
            if (response.data.success) {
                localStorage.setItem('token', response.data.data);
            }
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error, maybe show an error message to the user
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
                                placeholder="" />
                        </div>

                        <div className='student-login-userid-section'>
                            <p>Password</p>

                            {/* ------------ Password Input textfield -------------------- */}
                            <input type="text" className="form-control" name="title"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="" />
                        </div>


                        <div className='login-button'>
                            <button className="button" onClick={handleLogin}>Login</button>
                        </div>

                    </div>
                </div>


            </div>
            <WhatsappIcon />
            <Footer />
            <ToastContainer closeButton={false}/>
        </div>

    )
}

export default Admin