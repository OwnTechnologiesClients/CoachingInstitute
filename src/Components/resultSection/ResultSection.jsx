import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ResultSection.scss'
import topper1 from "../../assets/result/h1.jpg"
import topper2 from "../../assets/result/h2.jpg"
import topper3 from "../../assets/result/h3.jpg"
import topper4 from "../../assets/result/h4.jpg"
import topper5 from "../../assets/result/h5.jpg"

const ResultSection = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/result')
    }

    return (
        <div className="videos-section" style={{backgroundColor:"#fff"}}>

            <div className='top-heading'>
                <h1>
                    OUR <span className='under-bar'>RESULT</span>
                </h1>
                <button onClick={navigateTo}>
                    View All
                </button>
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
        </div>
    )
}

export default ResultSection