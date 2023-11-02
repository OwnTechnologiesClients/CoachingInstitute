import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ResultSection.scss'
import topper1 from "../../assets/result/Toppers Rank-02.png"
import topper2 from "../../assets/result/Toppers Rank-03.png"
import topper3 from "../../assets/result/Toppers Rank-04.png"

const ResultSection = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/result')
    }

    return (
        <div className="videos-section">

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
                        <p ><b>AIR-1</b></p>
                        <p >RAVI MAURYA
                        </p>
                        <p >BHU</p>
                    </div>

                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper2} /></center><br />
                        <p ><b>AIR-3</b></p>
                        <p >VIVEK BHARDWAJ
                        </p>
                        <p >Hindu College</p>
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper3} /></center><br />
                        <p ><b>AIR-6</b></p>
                        <p >BALDEEP SINGH
                        </p>
                        <p >Hindu College</p>
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper3} /></center><br />
                        <p ><b>AIR-6</b></p>
                        <p >BALDEEP SINGH
                        </p>
                        <p >Hindu College</p>
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={topper3} /></center><br />
                        <p ><b>AIR-6</b></p>
                        <p >BALDEEP SINGH
                        </p>
                        <p >Hindu College</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResultSection