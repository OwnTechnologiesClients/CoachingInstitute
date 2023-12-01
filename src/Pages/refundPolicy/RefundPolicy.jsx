import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './RefundPolicy.scss';
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import achievement from "../../assets/result/achievement-1293132__340.png"
import WelcomeSection from '../../components/welcomeSection/WelcomeSection'
import topper1 from "../../assets/result/Toppers Rank-02.png"
import topper2 from "../../assets/result/Toppers Rank-03.png"
import topper3 from "../../assets/result/Toppers Rank-04.png"
import topper4 from "../../assets/result/Toppers Rank-05.png"
import topper5 from "../../assets/result/Toppers Rank-06.png"
import topper6 from "../../assets/result/Toppers Rank-07.png"
import topper7 from "../../assets/result/Toppers Rank-07.png"
import topper8 from "../../assets/result/Toppers Rank-08.png"
import topper9 from "../../assets/result/Toppers Rank-09.png"
import gateToppers from '../../assets/result/gatetoppers.jpg'
import iitjamToppers from '../../assets/result/iitjamtoppers.jpg'
import csirToppers from '../../assets/result/csirtoppers.jpg'
import { Link } from 'react-router-dom'
const RefundPolicy = () => {
    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection
                imgSrc={bg5}
                hd1={"REFUND POLICY"}
                hd2={"FOR YOUR BETTER FUTURE"}
            />

            <div className='refund-policy-section'>

                <br></br><br></br>
                <h1>Return and Refund Policy</h1><br></br>
                <p>The Chemtime Academy works in a transparent manner. Our refund policy ensures that all the refunds are processed in a fair manner. In case, where a student expresses his intention of not attending the institute, and withdrawing his admission, he/she will have to visit the branch/ centre in person and submit his/her application in writing stating the reason for seeking a refund. The date of submission of written application for refund at the branch/ centre will be considered for the purpose of calculation of the refund amount.</p><br></br>
                <p>1. No Fee Refund Policy for seat booking into Classroom coaching program & Online class program.</p><br></br>
                <p>2. Fee paid against seat booking ( Classroom or Online program) are non-transferable.</p><br></br>
                <p>3. In case of excess fee payment, refund stands within 10 working days of receiving such complain.</p><br></br>
                <p>4. No Fee Refund Policy is available for Postal/Distance Learning/Booklet/Study Materials/Online Test Series/Pen-Drive Video lectures course.</p><br></br>
                <p>5. In case you feel that the service/product details provided to you are not as per your expectations, you must bring it to the notice of our administrator <br /> &nbsp;&nbsp;&nbsp; Email : hr@chemacademy.co.in Phone : +91-9136597244</p><br></br>


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
            </div>


            <WhatsappIcon />
            <Footer />

        </div >
    )
}

export default RefundPolicy