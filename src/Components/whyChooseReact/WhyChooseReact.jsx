import React from 'react'
import './WhyChooseReact.scss'

// import { CourseCard } from '../cards/Cards';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';


const WhyChooseReact = () => {



    // const courseCardDetails = [
    //     {
    //         courseImg: img1,
    //         cardHeading: "flutter/JRF",
    //         cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
    //         price: 299
    //     },
    //     {
    //         courseImg: img2,
    //         cardHeading: "flutter/JRF",
    //         cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
    //         price: 299
    //     },
    //     {
    //         courseImg: img3,
    //         cardHeading: "flutter/JRF",
    //         cardDetail: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future",
    //         price: 299
    //     },
    //     {
    //         courseImg: img4,
    //         cardHeading: "flutter/JRF",
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
                    WHY DID YOU CHOOSE REACTJS FOR <span className='under-bar'>FRONTEND DEVELOPMENT?</span>
                </h1>
                {/* <button>
                    <Link to='/onlinecourses'> View All</Link>
                </button> */}
            </div>
            <div className="parent-cards">

                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>SEO-Friendly Applications</h2>
                        <p>React enables server-side rendering, making applications more SEO-friendly. This ensures that search engines can easily index the content, enhancing the discoverability of web applications.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Strong Developer Tools</h2>
                        <p>React comes with powerful developer tools that aid in debugging and inspecting components. This facilitates a smoother development process and helps developers identify and address issues efficiently.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>JSX for Enhanced Readability</h2>
                        <p>JSX, a syntax extension for JavaScript used with React, enhances code readability. It allows developers to write HTML directly within JavaScript, making it more expressive and easier to understand.</p>
                    </div>
                    <div className='fact-card-content'>
                        <h2>React Native for Cross-Platform Development:</h2>
                        <p>The CSIR NET exam is highly competitive, and a well-structured coaching program can make all the difference. At TECH FEVER, we offer both online and offline coaching, allowing you to choose the mode that suits you best.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Wide Adoption and Community Support</h2>
                        <p>React has gained widespread adoption and boasts a large and active community of developers. This ensures continuous updates, a wealth of third-party libraries, and extensive documentation, making problem-solving and learning resources readily available.</p>
                    </div>



                </div>


                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>Efficient State Management</h2>
                        <p>React simplifies state management with a unidirectional data flow. The use of states and props ensures that data changes are handled consistently, reducing potential bugs and making the codebase more predictable.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Component-Based Architecture</h2>
                        <p>React's component-based architecture promotes modularity, reusability, and maintainability. Developers can create independent, self-contained components, facilitating efficient development and easier debugging.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Declarative Syntax</h2>
                        <p>React utilizes a declarative syntax, making it more intuitive and easier to understand. Developers can express how the UI should look, and React efficiently updates and renders the components as needed.</p>
                    </div>
                    <div className='fact-card-content'>
                        <h2>Virtual DOM for Efficiency</h2>
                        <p>React employs a virtual DOM, allowing it to update only the necessary components rather than the entire DOM. This results in faster rendering and improved application performance.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Backed by Facebook</h2>
                        <p>React is maintained by Facebook, ensuring constant updates, improvements, and long-term support. This backing adds credibility and stability to the framework.</p>
                    </div>



                </div>
            </div>


        </div>

    )
}

export default WhyChooseReact