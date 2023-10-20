import React, { useEffect, useState } from 'react'
import "./History.scss"
import courseImg from '../../../assets/course-img.png'
import { Header1, Header2 } from '../../../components/header/Header'
import Navbar from '../../../components/navbar/Navbar'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const History = () => {
    // const navigate = useNavigate();
    const [history,setHistory] = useState([])
    // const handleLogout = () => {
    //     window.localStorage.clear();
    //     navigate('/student-login');
    // }

    const getData = async () => {
        const response = await
            axios({
                method: 'get',
                url: 'http://localhost:5000/api/student/get-current-user',
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            // console.log(response.data.data)

        const Data = await
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/student/get-history-data',
                data:response.data.data,
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            setHistory(Data.data.data)
    }

    useEffect(() => {
        getData();
    }, [])
    

    return (
        <div>

            <Header1 />
            <Header2 />
            <Navbar />
            <div className='ph-appbar'>
                <h2>Purchased History</h2>
                {/* <button onClick={handleLogout}>Logout</button> */}
            </div>

            {history.map((item, index) => {
                const { coursename, date, coursetype, price ,modeofpayment} = item;

                return (
                    <div key={index} className='ph-course-parent'>
                        <img src={courseImg} alt="" />
                        <div className='ph-course-detail'>
                            <h3>{coursename}</h3>
                            <p>Type: {coursetype}</p>
                            <p>Amount: {price}</p>
                            <p>Payment: {modeofpayment}</p>
                            <p>Date: {date}</p>
                        </div>
                    </div>
                )
            })}

        </div>


    )
}

export default History