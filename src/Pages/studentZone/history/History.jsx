import React, { useEffect, useState } from 'react'
import "./History.scss"
import courseImg from '../../../assets/course-img.png'
import { Header1, Header2 } from '../../../components/header/Header'
import Navbar from '../../../components/navbar/Navbar'
import axios from 'axios'
import pdficon from '../../../assets/icons/pdf.png'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SetCurrentUser } from '../../../redux/userSlice'
import CourseImages from '../../../components/courseTable/courseImages.json'

const History = () => {
    const [history, setHistory] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handlePrint = (e, item) => {
        e.preventDefault();

        dispatch(SetCurrentUser(item));
        navigate('/form-print')
    }
    const handleLogout = ()=>{
        window.localStorage.clear();
        navigate('/student-login');
    }

    const getData = async () => {

        const response = await
            axios({
                method: 'get',
                url: 'https://chemtime-backend.onrender.com/api/student/get-current-user',
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        // console.log(response.data.data)

        const Data = await
            axios({
                method: 'post',
                url: 'https://chemtime-backend.onrender.com/api/student/get-history-data',
                data: response.data.data,
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

        setHistory(Data.data.data)
    }

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/student-login')
        }
        getData();
    }, [])


    return (
        <div>

            <Header1 />
            <Header2 />
            <Navbar />
            <div className='ph-appbar'>
                <h2>Purchased History</h2>
                <div>
                <Link to="/onlinecourses"><button >Enroll Course</button></Link>
                <button onClick={handleLogout}>Logout</button>
                </div>
            </div>

            {
                history.length===0?<h2 className='no-course-message'>You have not purchased any course</h2>: (history.map((item, index) => {
                    const { coursename, date, coursetype, price, modeofpayment } = item;
    
                    return (
                        <div key={index} className='ph-course-parent'>
                            {console.log(CourseImages[coursename])}
                            <img className='course-image' src={CourseImages[coursename]} alt="" />
                            <div className='ph-course-detail'>
                                <h3>{coursename}</h3>
                                <p>Type: {coursetype}</p>
                                <p>Amount: {price}</p>
                                <p>Payment: {modeofpayment}</p>
                                <p>Date: {date}</p>
                            </div>
                            <div className='pdfLogo'>
                                <img src={pdficon} onClick={(e) => handlePrint(e, item)} height={35} alt="" />
                            </div>
                        </div>
                    )
                }))
            }

        </div>


    )
}

export default History