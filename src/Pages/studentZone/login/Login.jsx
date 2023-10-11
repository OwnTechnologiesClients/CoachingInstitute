import React from 'react'
import { useState } from "react";
import './Login.scss';
import { useNavigate } from "react-router-dom"




const Login = () => {
    const navigate = useNavigate();

    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/select-course');
    };

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div>


            <div className='student-login-section'>

                <div className='student-login-square'>
                    <div className='student-login-square-header'>
                        <h2>Login</h2>
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
                            <button class="button" onClick={navigateToContacts}>Login</button>
                        </div>

                        <div className='already-member'>
                            <p1>Already Memeber? Sign In</p1>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Login