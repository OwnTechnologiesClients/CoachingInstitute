import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './ShippingPolicy.scss';
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import achievement from "../../assets/result/achievement-1293132__340.png"
import gateToppers from '../../assets/result/gatetoppers.jpg'
import iitjamToppers from '../../assets/result/iitjamtoppers.jpg'
import csirToppers from '../../assets/result/csirtoppers.jpg'
import { Link } from 'react-router-dom'
const ShippingPolicy = () => {
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
                <h1>Shipping Policy for ASAP Institute</h1><br></br>
                <p>Last updated: December 16, 2023</p>
                <p>Thank you for choosing ASAP Institute for your coaching materials. We are committed to ensuring a smooth and efficient delivery process for your purchased materials. Please read the following shipping policy carefully to understand how we handle the shipping of coaching materials.</p><br></br><br></br>


                <h3>1. Processing Time:</h3>
                <ul>
                    <li>
                        <p>• Orders are typically processed within 3-5 business days (excluding weekends and public holidays) after payment confirmation.</p>
                    </li>
                    <li>
                        <p>• Please note that due to the nature of our coaching institute, we may not have daily processing.</p>
                    </li>



                </ul><br></br>



                <h3>2. Shipping Methods:</h3>
                <ul>
                    <li>
                        <p>• We currently offer standard shipping for all orders throughout India.</p>
                    </li>
                    <li>
                        <p>• Shipping carriers may vary based on the nature of coaching materials.</p>
                    </li>



                </ul><br></br>



                <h3>3. Shipping Costs:</h3>
                <ul>
                    <li>
                        <p>• Shipping costs are calculated based on the weight of your order and the delivery address within India.</p>
                    </li>
                    <li>
                        <p>• Shipping costs will be displayed during the checkout process.</p>
                    </li>

                </ul><br></br>



                <h3>4. Shipping Destinations:</h3>
                <ul>
                    <li>
                        <p>• We proudly ship coaching materials to addresses throughout India.</p>
                    </li>
                    <li>
                        <p>• Delivery to remote or rural areas may take longer than the standard estimated delivery time.</p>
                    </li>
                </ul><br></br>


                <h3>5. Delivery Time:</h3>
                <ul>
                    <li>
                        <p>• Estimated delivery times throughout India range from 7-14 business days.</p>
                    </li>
                    <li>
                        <p>• Expedited shipping options are not available due to the nature of our delivery processes.</p>
                    </li>
                </ul><br></br>



                <h3>6. Tracking Information:</h3>
                <ul>
                    <li>
                        <p>• Once your order has been shipped, you will receive a confirmation email with tracking information.</p>
                    </li>
                    <li>
                        <p>• Tracking information is available for all shipping methods throughout India.</p>
                    </li>
                </ul><br></br>



                <h3>7. Missing or Delayed Shipments:</h3>
                <ul>
                    <li>
                        <p>• If your order is significantly delayed, please contact our customer support team at asapchemtime@gmail.com or +918595764714 for assistance.</p>
                    </li>
                    <li>
                        <p>• We will investigate and provide updates on the status of delayed shipments promptly.</p>
                    </li>
                </ul><br></br>


                <h3>8. Customs and Import Duties:</h3>
                <ul>
                    <li>
                        <p>• There are no customs or import duties for deliveries within India.</p>
                    </li>
                </ul><br></br>


                <h3>9. Address Accuracy:</h3>
                <ul>
                    <li>
                        <p>• Please ensure that your shipping address is accurate and complete to prevent delivery issues throughout India.</p>
                    </li>
                    <li>
                        <p>• If you realize you provided an incorrect address, please contact our customer support team immediately.</p>
                    </li>
                </ul><br></br>




                <h3>10. Returns and Refunds:</h3>
                <ul>
                    <li>
                        <p>• Please refer to our Returns and Refunds Policy for information on returning coaching materials throughout India.</p>
                    </li>

                </ul><br></br>

                <h3>11. Customer Support:</h3>
                <ul>
                    <li>
                        <p>• For any shipping-related inquiries or assistance, please contact our customer support team at asapchemtime@gmail.com or +918595764714.</p>
                    </li>
                    <li>
                        <p>• Our team aims to respond to customer queries within 48 hours.</p>
                    </li>

                </ul><br></br>

                <p>Thank you for choosing ASAP Institute. We appreciate your understanding of our delivery processes, and we are committed to providing quality coaching materials for your educational journey throughout India.</p>


                <br></br> <br></br>
            </div>


            <WhatsappIcon />
            <Footer />

        </div >
    )
}

export default ShippingPolicy