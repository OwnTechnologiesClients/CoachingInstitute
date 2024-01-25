import React from 'react'
import './WhyChooseMern.scss'

// import { CourseCard } from '../cards/Cards';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';


const WhyChooseMern = () => {


    return (
        <div className="fact-section">
            <div className='top-heading'>
                <h2>
                    WHY DO YOU CHOOSE <span className='under-bar'>MERN STACK  DEVELOPMENT?</span>
                </h2>
                {/* <button>
                    <Link to='/onlinecourses'> View All</Link>
                </button> */}
            </div>
            <div className="parent-cards">

                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>Unified JavaScript Language</h2>
                        <p>MERN stack employs JavaScript across the entire development stack, fostering a cohesive and streamlined development process. This language consistency enhances code readability and eases collaboration between frontend and backend teams.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Full-Stack JavaScript Development</h2>
                        <p>MERN encompasses both frontend (React.js) and backend (Node.js) development in JavaScript. This full-stack capability reduces context-switching for developers and promotes efficient coding practices.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>React.js for Dynamic UIs</h2>
                        <p>React.js, a part of the MERN stack, is renowned for building dynamic and interactive user interfaces. Its component-based architecture allows for modular and reusable code, enhancing frontend development efficiency.</p>
                    </div>
                    <div className='fact-card-content'>
                        <h2>Express.js for Backend Simplification</h2>
                        <p>Express.js is a minimalist backend framework for Node.js that simplifies the creation of robust APIs. Its lightweight nature allows for quick development without sacrificing functionality.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Node.js for Scalable Server-Side Development</h2>
                        <p>Node.js, as the backend runtime, is known for its non-blocking, asynchronous architecture, enabling scalable and high-performance server-side development. It efficiently handles concurrent connections, making it suitable for real-time applications</p>
                    </div>



                </div>


                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>NoSQL Database with MongoDB</h2>
                        <p>MongoDB, a NoSQL database, seamlessly integrates into the MERN stack. Its flexible document-oriented structure allows for efficient handling of dynamic and evolving data, making it well-suited for modern applications.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>JSON-Based Data Exchange</h2>
                        <p>Both React.js and MongoDB store data in JSON-like formats. This facilitates smooth data exchange between the frontend and backend components, ensuring a consistent data structure.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Rich Ecosystem and Libraries</h2>
                        <p>The MERN stack benefits from a rich ecosystem of libraries and packages available through npm. This extensive collection simplifies development, as developers can leverage pre-built solutions to expedite the coding process.</p>
                    </div>
                    <div className='fact-card-content'>
                        <h2>Rapid Development with Hot Reload</h2>
                        <p>MERN stack supports hot reload functionality, enabling developers to see real-time updates without restarting the entire application. This accelerates the development process and aids in faster iterations.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Community Support and Continuous Improvement</h2>
                        <p>Each component of the MERN stack enjoys strong community support and is actively developed. This ensures continuous updates, security patches, and a wealth of resources for developers.</p>
                    </div>



                </div>
            </div>


        </div>

    )
}

export default WhyChooseMern