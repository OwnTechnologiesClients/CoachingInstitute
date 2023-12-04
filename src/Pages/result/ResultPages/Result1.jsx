import React, { useState } from 'react'
import { Header1, Header2 } from '../../../components/header/Header'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import results from './Result.json'
import allResult from "../../../assets/result/allresult.jpg"
import './Result1.scss'

const Result1 = () => {

    const [filterOption, setFilterOption] = useState({
        year: '2019',
        course: 'IITJAM',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterOption({
            ...filterOption,
            [name]: value,
        });
    };

    
    return (
        <div className='result-explore'>
            <Header1 />
            <Header2 />
            <Navbar />
            <div className="result-page-section">

                <img src={allResult} alt="" />

                {/* <div className="filter">
                    <h2>Explore Our Prestigious Students</h2>

                    <div>
                        <select name="year" value={filterOption.year} onChange={handleChange}>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                        </select>

                        <select name="course" value={filterOption.course} onChange={handleChange}>
                            <option value="IITJAM">IIT-JAM</option>
                            <option value="CSIRNET">CSIR</option>
                        </select>
                    </div>

                </div>
                <div className="result-cards">
                    <div className="result-badges">

                        {results[filterOption.year][filterOption.course].map((item, index) => {
                            return <div key={index} className="badge">
                                <img src={item[0]} alt="" />
                                <p><b>{item[1]}</b></p>
                                <p>{item[2]}</p>
                                <p>{item[3]}</p>
                            </div>
                        })}



                    </div>
                </div> */}
            </div>

            <Footer/>
        </div>
    )
}

export default Result1