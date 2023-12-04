import React from 'react'
import './ChemistryEducationChoices.scss'
import img1 from '../../assets/homepage/course/courseimage1.png'
import img2 from '../../assets/course.png'
import img3 from '../../assets/course.png'
import img4 from '../../assets/course.png'
// import { CourseCard } from '../cards/Cards';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';


const ChemistryEducationChoices = () => {



    // const courseCardDetails = [
    //     {
    //         courseImg: img1,
    //         cardHeading: "CSIR-NET/JRF",
    //         cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
    //         price: 299
    //     },
    //     {
    //         courseImg: img2,
    //         cardHeading: "CSIR-NET/JRF",
    //         cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
    //         price: 299
    //     },
    //     {
    //         courseImg: img3,
    //         cardHeading: "CSIR-NET/JRF",
    //         cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
    //         price: 299
    //     },
    //     {
    //         courseImg: img4,
    //         cardHeading: "CSIR-NET/JRF",
    //         cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
    //         price: 299
    //     }
    // ]


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
                    CHEMISTRY EDUCATION <span className='under-bar'>CHOICES</span>
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
                        <h2>Why Chemistry Matters</h2>
                        <p>Chemistry is more than a subject; it's a foundation for scientific advancement. From understanding the composition of matter to the development of life-saving medicines and cutting-edge technologies, chemistry plays a pivotal role.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>What Is the Importance of Chemistry Entrance Exams?</h2>
                        <p>Entrance exams in chemistry are gateways to some of the most prestigious institutions and career opportunities. Whether you aim to pursue research, teaching, or a career in industry, excelling in these exams can open doors to a world of possibilities.</p>
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

export default ChemistryEducationChoices