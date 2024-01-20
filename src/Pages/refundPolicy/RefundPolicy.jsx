import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './RefundPolicy.scss';
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import achievement from "../../assets/result/achievement-1293132__340.png"
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
                <h1>Refund Policy for TechFever.in</h1><br></br>
                <p>At TechFever.in, we understand that circumstances may arise that could prevent students from attending our classes. We aim to be transparent and fair in our refund policy to ensure the best experience for all participants. Please read the following refund policy carefully:</p><br></br>
                <h3>1. Eligibility for Refund:</h3><br></br>
                <p>• If a student is unable to attend our classes due to unforeseen circumstances, they may be eligible for a refund.</p><br></br>
                <p>• To be eligible, students must notify us of their inability to attend within the first two weeks of the course start date.</p><br></br>

                <h3>2. Non-Refundable Situations:</h3><br></br>
                <p>• After the initial two-week period, refunds will not be granted for any reason, including but not limited to changes in personal circumstances, work commitments, or other unforeseen events.</p><br></br>

                <h3>3. Refund Amount:</h3><br></br>
                <p>• If eligible for a refund, the student will receive a 100% refund of the course fee.</p><br></br>
                <p>• Refunds will be processed within 30 days of receiving the refund request.</p><br></br>


                <h3>4. How to Request a Refund:</h3><br></br>
                <p>• To request a refund, students must submit a written notice explaining the circumstances preventing attendance.</p><br></br>
                <p>• The request should be sent to support@techfever.in with the subject line "Refund Request - [StudentName]."</p><br></br>


                <h3>5. Documentation Requirement:</h3><br></br>
                <p>• Depending on the circumstances, supporting documentation (e.g., medical certificates, legal documents) may be required to process the refund request.</p><br></br>

                <h3>6. Refund Processing:</h3><br></br>
                <p>• Once the refund request is received, it will be reviewed by our team.</p><br></br>
                <p>• If approved, the refund will be processed using the original payment method."</p><br></br>

                <h3>7. Contact Information:</h3><br></br>
                <p>• For any questions or concerns regarding the refund policy, please contact our support team at support@techfever.in or 9910765616.</p><br></br>


                <p><b>Note:</b> TechFever.in reserves the right to make exceptions to this policy in extenuating circumstances. All decisions regarding refunds are at the discretion of TechFever.in management.</p><br></br>
                <p>By enrolling in our courses, students acknowledge and agree to abide by the terms outlined in this refund policy.

</p><br></br>




            </div>


            <WhatsappIcon />
            <Footer />

        </div >
    )
}

export default RefundPolicy