import React from 'react'
import './BenefitSection.scss'
import img1 from '../../assets/homepage/course/courseimage1.png'
import img2 from '../../assets/course.png'
import img3 from '../../assets/course.png'
import img4 from '../../assets/course.png'
import { CourseCard } from '../cards/Cards';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';


const BenefitsSection = () => {



    const courseCardDetails = [
        {
            courseImg: img1,
            cardHeading: "CSIR-NET/JRF",
            cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
            price: 299
        },
        {
            courseImg: img2,
            cardHeading: "CSIR-NET/JRF",
            cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
            price: 299
        },
        {
            courseImg: img3,
            cardHeading: "CSIR-NET/JRF",
            cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
            price: 299
        },
        {
            courseImg: img4,
            cardHeading: "CSIR-NET/JRF",
            cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
            price: 299
        }
    ]


    // const CourseCard = ({ imgSrc, price, homeCourseHeading, homeCourseDetail }) => {

    //     const navigate = useNavigate()
    //     const dispatch = useDispatch();
    //     const navigateTo = (homeCourseHeading) => {
    //         dispatch(SetActiveCourse(homeCourseHeading))
    //         navigate('/onlinecourses')
    //     }
    //     return (
    //         <div className='course-card'>
    //             <div className="price">
    //                 ₹{price}
    //             </div>
    //             <img src={imgSrc} alt="" />
    //             <div >
    //                 <h2 className='under-bar'>{homeCourseHeading}</h2>
    //                 <p>{homeCourseDetail}</p>
    //             </div>
    //             <button onClick={() => navigateTo(homeCourseHeading)}>VIEW DETAILS</button>
    //         </div>
    //     )
    // }

    return (
        <div className="fact-section">
            <div className='top-heading'>
                <h1>
                    WHY <span className='under-bar'>CHEMISTRY</span>
                </h1>
                {/* <button>
                    <Link to='/onlinecourses'> View All</Link>
                </button> */}
            </div>
            <div className="parent-cards">

                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>Why Choose Chemistry as Your Field of Study?</h2>
                        <p>Chemistry is the science of matter and its transformations, and it plays an indispensable role in our daily lives. From understanding the composition of matter to creating new materials and medicines, chemistry is at the heart of countless scientific and technological advancements.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>What Is the Importance of Chemistry Entrance Exams?</h2>
                        <p>Entrance exams in chemistry are gateways to some of the most prestigious institutions and career opportunities. Whether you aim to pursue research, teaching, or a career in industry, excelling in these exams can open doors to a world of possibilities.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>How to Begin Preparing for CSIR NET Chemistry?  </h2>
                        <p>Preparing for CSIR NET Chemistry requires a well-structured approach. It is essential to start with a comprehensive syllabus review, followed by in-depth study, regular practice, and mock tests. Enrolling in a reputable coaching institute, like ASAP Institute, can provide the guidance and resources you need to excel.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>The Best Coaching for IIT-JAM and GATE Chemistry</h2>
                        <p>When it comes to preparing for competitive exams like IIT-JAM and GATE, finding the right coaching institute is crucial. At ASAP Institute, we are dedicated to providing you with the best IIT JAM coaching in Delhi, and our success rates speak for themselves.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>How to Begin Preparing for CSIR NET Chemistry?  </h2>
                        <p>Preparing for CSIR NET Chemistry requires a well-structured approach. It is essential to start with a comprehensive syllabus review, followed by in-depth study, regular practice, and mock tests. Enrolling in a reputable coaching institute, like ASAP Institute, can provide the guidance and resources you need to excel.</p>
                    </div>


                </div>



                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>The Best Coaching for IIT-JAM and GATE Chemistry</h2>
                        <p>When it comes to preparing for competitive exams like IIT-JAM and GATE, finding the right coaching institute is crucial. At ASAP Institute, we are dedicated to providing you with the best IIT JAM coaching in Delhi, and our success rates speak for themselves.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>IIT-JAM Chemistry Coaching with a Difference</h2>
                        <p>Our IIT-JAM chemistry coaching programs are designed to ensure you receive comprehensive preparation, guidance, and ample practice opportunities. We offer 1-year and 2-year programs, giving you the flexibility to choose the duration that suits your needs.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Understanding the Fees for IIT JAM Coaching in Delhi</h2>
                        <p>We understand that course fees are an essential consideration for students. That's why we offer competitive pricing for our IIT-JAM coaching in Delhi. Whether you opt for weekend or regular classes, our fees are designed to be accessible without compromising on the quality of education.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>The Advantage of Online Coaching for IIT JAM Chemistry</h2>
                        <p>In today's digital age, online coaching has become a game-changer. At ASAP Institute, we offer online coaching for IIT-JAM chemistry that combines the flexibility of recorded classes with the interactivity of live sessions. This means you can access the best coaching from anywhere in the world.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>CSIR NET Chemistry Coaching - Your Gateway to Success</h2>
                        <p>The CSIR NET exam is highly competitive, and a well-structured coaching program can make all the difference. At ASAP Institute, we offer both online and offline coaching, allowing you to choose the mode that suits you best.</p>
                    </div>


                </div>




            </div>
        </div>

    )
}

export default BenefitsSection