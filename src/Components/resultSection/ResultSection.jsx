import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ResultSection.scss'
import amazonImg from "../../assets/result/amazon.png"
import googleImg from "../../assets/result/google.png"
import paypalImg from "../../assets/result/paypal.png"
import salesforceImg from "../../assets/result/salesforce.png"
import samsungImg from "../../assets/result/samsung.png"
import deloiteeImg from "../../assets/result/deloitee.png"
import airtelImg from "../../assets/result/airtel.png"
import hitachiImg from "../../assets/result/hitachi.png"
import microsoftImg from "../../assets/result/microsoft.png"
import ibmImg from "../../assets/result/ibm.png"
import goldmanImg from "../../assets/result/goldman.png"
import isroImg from "../../assets/result/isro.png"
import jpmorganImg from "../../assets/result/jpmorgan.png"
import mercedesBenzImg from "../../assets/result/mercedes-benz.png"
import netapp from "../../assets/result/netapp.png"

const ResultSection = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/result')
    }

    return (
        <div className="result-section">

            <div className='top-heading'>
                <p>
                    A large number of students attained their desired <span className='under-bar'>career at</span>
                </p>
                {/* <button onClick={navigateTo}>
                    View All
                </button> */}
            </div>

            <div className="result-row">

                <div className="col-md-3 tpimages1">
                    <div className="toppersimg">
                        <center><img className='result-img' src={amazonImg} alt="amazon logo" caption="amazon logo to show techfever company placement" /></center><br />
                    </div>

                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={googleImg} alt="google logo" caption="google logo to show techfever company placement" /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={paypalImg} alt="paypal logo" caption="paypal logo to show techfever company placement"/></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={salesforceImg} alt="salesforce logo" caption="salesforce logo to show techfever company placement"/></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={samsungImg} alt="samsung logo" caption="samsung logo to show techfever company placement"/></center><br />
                    </div>
                </div>

            </div>

            <div className="result-row">

                <div className="col-md-3 tpimages1">
                    <div className="toppersimg">
                        <center><img className='result-img' src={deloiteeImg} alt="deloitee logo" caption="deloitee logo to show techfever company placement"/></center><br />
                    </div>

                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={airtelImg} alt="airtel logo" caption="airtel logo to show techfever company placement"/></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={hitachiImg} alt="hitachi logo" caption="hitachi logo to show techfever company placement"/></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={microsoftImg} alt="microsoft logo" caption="microsoft logo to show techfever company placement" /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={ibmImg} alt="ibm logo" caption="ibm logo to show techfever company placement"/></center><br />
                    </div>
                </div>

            </div>


            <div className="result-row">

                <div className="col-md-3 tpimages1">
                    <div className="toppersimg">
                        <center><img className='result-img' src={goldmanImg} alt="goldman logo" caption="goldman logo to show techfever company placement" /></center><br />
                    </div>

                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={isroImg} alt="isro logo" caption="isro logo to show techfever company placement" /></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={jpmorganImg} alt="jpmorgan logo" caption="jpmorgan logo to show techfever company placement"/></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={mercedesBenzImg} alt="mercedes benz logo" caption="mercedes benz logo to show techfever company placement"/></center><br />
                    </div>
                </div>
                <div className="col-md-3 tpimages">
                    <div className="toppersimg">
                        <center><img className='result-img' src={netapp} alt="netapp logo" caption="netapp logo to show techfever company placement" /></center><br />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResultSection