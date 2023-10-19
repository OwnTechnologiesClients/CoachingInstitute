import React from 'react'
import "./History.scss"
import courseImg from '../../../assets/course-img.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const History = () => {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        window.localStorage.clear();
        navigate('/student-login');
    }
    
    axios.get('https://backend-k.onrender.com/api/student/history')
    .then((response)=>console.log(response.data))
    return (
        <div>
            <div className='ph-appbar'>
                <h2>Purchased History</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <div className='ph-course-parent'>
                <img src={courseImg} alt="" />

                <div className='ph-course-detail'>
                    <h3>Chemical Science Coaching</h3>


                    <p>Type: Online Course</p>
                    <p>Amount: 299</p>
                    <p>Amount: 299</p>
                    <p>Payment: Online</p>
                    <p>Date: 03/10/2023</p>



                </div>

            </div>


            <div className='ph-course-parent'>
                <img src={courseImg} alt="" />

                <div className='ph-course-detail'>
                    <h3>Chemical Science Coaching</h3>


                    <p>Type: Online Course</p>
                    <p>Amount: 299</p>
                    <p>Amount: 299</p>
                    <p>Payment: Online</p>
                    <p>Date: 03/10/2023</p>



                </div>

            </div>

            <div className='ph-course-parent'>
                <img src={courseImg} alt="" />

                <div className='ph-course-detail'>
                    <h3>Chemical Science Coaching</h3>


                    <p>Type: Online Course</p>
                    <p>Amount: 299</p>
                    <p>Amount: 299</p>
                    <p>Payment: Online</p>
                    <p>Date: 03/10/2023</p>



                </div>

            </div>

        </div>


    )
}

export default History