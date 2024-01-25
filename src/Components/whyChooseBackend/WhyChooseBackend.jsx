import React from 'react'
import './WhyChooseBackend.scss'
// import img1 from '../../assets/homepage/course/courseimage1.png'
// import img2 from '../../assets/course.png'
// import img3 from '../../assets/course.png'
// import img4 from '../../assets/course.png'
// import { CourseCard } from '../cards/Cards';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';


const WhyChooseBackend = () => {


    return (
        <div className="mastering-section">
            <div className='top-heading'>
                <h2>
                    WHY DO YOU CHOOSE NODEJS AND MONGODB FOR <span className='under-bar'> BACKEND DEVELOPMENT?</span>
                </h2>
                {/* <button>
                    <Link to='/onlinecourses'> View All</Link>
                </button> */}
            </div>
            <div className="parent-cards">

                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>Non-blocking Asynchronous Nature of Node.js</h2>
                        <p>Node.js is renowned for its non-blocking, asynchronous architecture. This allows for handling a large number of concurrent connections efficiently, ensuring optimal performance and responsiveness.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Unified Language (JavaScript)</h2>
                        <p>Both Node.js and MongoDB utilize JavaScript, creating a cohesive and seamless development environment. This language consistency simplifies the development process and promotes better collaboration between frontend and backend developers</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Fast Execution with V8 Engine</h2>
                        <p>Node.js leverages the V8 JavaScript engine, renowned for its speed and efficiency. This results in fast execution of code, making Node.js suitable for building scalable and high-performance backend applications.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Extensive Package Ecosystem</h2>
                        <p>Node.js has a vast ecosystem of packages and modules available through npm (Node Package Manager). This extensive collection simplifies the integration of third-party libraries and accelerates the development process.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Real-time Application Capabilities</h2>
                        <p>Node.js excels in real-time application development, making it an ideal choice for applications that require features such as chat applications, gaming servers, and collaborative tools.</p>
                    </div>







                </div>



                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>MongoDB's NoSQL Database Model</h2>
                        <p>MongoDB's NoSQL document-oriented database model is well-suited for flexible and scalable data storage. It accommodates dynamic schemas, allowing developers to adapt quickly to evolving application requirements</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>JSON-Like Document Structure</h2>
                        <p>MongoDB stores data in a JSON-like BSON (Binary JSON) format. This aligns seamlessly with the JavaScript Object Notation (JSON) used in Node.js, simplifying data manipulation and exchange between the backend and frontend.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Scalability and Flexibility</h2>
                        <p>Both Node.js and MongoDB are designed with scalability in mind. They offer horizontal scaling options, allowing the system to grow as the application's demands increase.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Community Support and Active Development</h2>
                        <p>Node.js and MongoDB enjoy widespread community support and are actively developed. This ensures continuous updates, security patches, and a wealth of resources, contributing to their long-term viability.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Open-Source Nature</h2>
                        <p>The open-source nature of both Node.js and MongoDB fosters collaboration, innovation, and adaptability. This openness encourages the development community to contribute and improve the technologies.</p>
                    </div>







                </div>




            </div>
        </div>

    )
}

export default WhyChooseBackend