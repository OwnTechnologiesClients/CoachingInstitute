import React from 'react'
import './Result.scss'
import { Header1, Header2 } from '../../components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import HeroSection from '../../components/heroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import achievement from "../../assets/result/achievement-1293132__340.png"
import gateToppers from '../../assets/result/gatetoppers.jpg'
import iitjamToppers from '../../assets/result/iitjamtoppers.jpg'
import csirToppers from '../../assets/result/csirtoppers.jpg'
import topper1 from "../../assets/result/Toppers Rank-02.png"
import topper2 from "../../assets/result/Toppers Rank-03.png"
import topper3 from "../../assets/result/Toppers Rank-04.png"
import topper4 from "../../assets/result/Toppers Rank-05.png"
import topper5 from "../../assets/result/Toppers Rank-06.png"
import topper6 from "../../assets/result/Toppers Rank-07.png"
import topper7 from "../../assets/result/Toppers Rank-07.png"
import topper8 from "../../assets/result/Toppers Rank-08.png"
import topper9 from "../../assets/result/Toppers Rank-09.png"
import { Link } from 'react-router-dom'

const Result = () => {
    return (
        <div className='result-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection hd1={"RESULTS"} hd2={"FOR YOUR BETTER FUTURE"} />


            <div className="row">

                <div className="col-md-12 mainimg">
                    <div className="col-md-3 tpmainimg">
                        <center><img className='result-img' src={achievement} /></center><br />
                        <h3>GATE</h3>
                        <Link to='/result-explore' >
                            <button className='explore-results'>Explore</button>
                        </Link>
                    </div>

                    {/* <div className="col-md-3 tpimages1">
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
                    </div> */}
                    <img src={gateToppers} alt="" />
                </div>
                <div className="col-md-12 mainimg">
                    <div className="col-md-3 tpmainimg">
                        <center><img className='result-img' src={achievement} /></center><br />
                        <h3>IIT-JAM </h3>
                        <Link to='/result-explore' >
                            <button className='explore-results'>Explore</button>
                        </Link>
                    </div>
                    <img src={iitjamToppers} alt="" />
                    {/* <div className="col-md-3 tpimages1">
                        <div className="toppersimg">
                            <center><img className='result-img' src={topper4} /></center><br />
                            <p ><b>AIR-1</b></p>
                            <p >AMARDEEP KUMAR
                            </p>
                            <p >Kirorimal College</p>
                        </div>
                    </div>
                    <div className="col-md-3 tpimages">
                        <div className="toppersimg">
                            <center><img className='result-img' src={topper5} /></center><br />
                            <p ><b>AIR-2</b></p>
                            <p >AOSHEEN ANAND
                            </p>
                            <p >Daulatram College</p>
                        </div>
                    </div>
                    <div className="col-md-3 tpimages">
                        <div className="toppersimg">
                            <center><img className='result-img' src={topper6} /></center><br />
                            <p ><b>AIR-3</b></p>
                            <p >ROHAN GUPTA
                            </p>
                            <p >St. Stephen College</p>
                        </div>
                    </div> */}
                </div>
                <div className="col-md-12 mainimg1">
                    <div className="col-md-3 tpmainimg">
                        <center><img className='result-img' src={achievement} /></center><br />
                        <h3>CSIR-NET | JRF</h3>
                        <Link to='/result-explore' >
                            <button className='explore-results'>Explore</button>
                        </Link>
                    </div>
                    {/* <div className="col-md-3 tpimages1">
                        <div className="toppersimg">
                            <center><img className='result-img' src={topper7} /></center><br />
                            <p ><b>AIR-3</b></p>
                            <p >ROHAN GUPTA
                            </p>
                            <p >JRF (Jun.2019)</p>
                        </div>
                    </div>
                    <div className="col-md-3 tpimages">
                        <div className="toppersimg">
                            <center><img className='result-img' src={topper8} /></center><br />
                            <p ><b>AIR-5</b></p>
                            <p >SAHIL JAIN
                            </p>
                            <p >JRF (Dec.2016)</p>
                        </div>
                    </div>
                    <div className="col-md-3 tpimages">
                        <div className="toppersimg">
                            <center><img className='result-img' src={topper9} /></center><br />
                            <p ><b>AIR-5</b></p>
                            <p >ARJU</p>
                            <p >NET (Dec.2016)</p>
                        </div>
                    </div> */}
                    <img src={csirToppers} alt="" />

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Result