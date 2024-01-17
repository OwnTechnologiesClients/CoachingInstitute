import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ResultSection.scss'
import topper1 from "../../assets/result/amazon.png"
import topper2 from "../../assets/result/google.png"
import topper3 from "../../assets/result/paypal.png"
import topper4 from "../../assets/result/salesforce.png"
import topper5 from "../../assets/result/samsung.png"
import topper6 from "../../assets/result/deloitee.png"
import topper7 from "../../assets/result/airtel.png"
import topper8 from "../../assets/result/hitachi.png"
import topper9 from "../../assets/result/microsoft.png"
import topper10 from "../../assets/result/ibm.png"

const ResultSection = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/result')
    }

    return (
        <div className="result-section">

            <div className='top-heading'>
                <h1>
                A large number of students attained their desired <span className='under-bar'>career at</span>
                </h1>
                {/* <button onClick={navigateTo}>
                    View All
                </button> */}
            </div>

            <div className="result-row">

                <div className="col-md-3 tpimages1">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper1} /></center><br />
                    </div>

                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper2} /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper3} /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper4} /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper5} /></center><br />
                    </div>
                </div>

            </div>

            <div className="result-row">

                <div className="col-md-3 tpimages1">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper6} /></center><br />
                    </div>

                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper7} /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper8} /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper9} /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper10} /></center><br />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResultSection