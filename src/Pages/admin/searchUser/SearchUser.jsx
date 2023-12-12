import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import './SearchUser.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import courseImg from '../../../assets/course-img.png'
import pdficon from '../../../assets/icons/pdf.png'
import { Header1, Header2 } from '../../../components/header/Header'
import Navbar from '../../../Components/navbar/Navbar'

const SearchUser = () => {

    const uniqueId = useRef();
    const idNumber = useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [fetchedData, setFetchedData] = useState([]);

    const getDetails = async (e) => {
        e.preventDefault();

        let CN = "";
        let RN = "";

        if (uniqueId.current.value === "phonenumber") {
            CN = idNumber.current.value;
        }
        else {
            RN = idNumber.current.value;
        }
        const response = await
            axios({
                method: 'post',
                url: 'http://localhost:9000/api/admin/get-adminpage-details',
                data: {
                    contactnumber: CN,
                    registrationnumber: RN
                },
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

        setFetchedData(response.data.data)

    }

    const handlePrint = (e, item) => {
        e.preventDefault();

        dispatch(SetCurrentUser(item));
        navigate('/form-print')
    }

    // useEffect(()=>{
    //     if(!localStorage.getItem('adminToken')){
    //         navigate("/")
    //     }
    // },[])

    return (
        <div className="search-user">
            <Header1 />
            <Header2 />
            <Navbar />
            <div className='ph-appbar'>
                <h2>Check Student Form</h2>
            </div>

            <div className="form-fields">
                <div className="row">

                    <div>
                        <label htmlFor="course">Choose unique Id</label>
                        <select ref={uniqueId} name="course" id="course" required>
                            <option value="registrationnumber">Registration ID</option>
                            <option value="phonenumber">Phone Number</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="uniqueId">Enter unique Id</label>
                        <input ref={idNumber} type="text" name="uniqueId" id="uniqueId" required />
                    </div>

                </div>

                <div className="search-user-button">
                    <button onClick={getDetails}>Continue</button>
                </div>
                {fetchedData.map((item, index) => {
                    const { coursename, date, coursetype, price, modeofpayment } = item;

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
                            <div className='pdfLogo'>
                                <img src={pdficon} onClick={(e) => handlePrint(e, item)} height={35} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default SearchUser