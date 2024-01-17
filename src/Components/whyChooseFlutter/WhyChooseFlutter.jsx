import React from 'react'
import './WhyChooseFlutter.scss'
// import img1 from '../../assets/homepage/course/courseimage1.png'
// import img2 from '../../assets/course.png'
// import img3 from '../../assets/course.png'
// import img4 from '../../assets/course.png'
// import { CourseCard } from '../cards/Cards';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';


const WhyChooseFlutter = () => {





    return (
        <div className="exam-section">
            <div className='top-heading'>
                <h1>
                    WHY DID YOU CHOOSE FLUTTER  FOR MOBILE <span className='under-bar'> APP DEVELOPMENT?</span>
                </h1>
                {/* <button>
                    <Link to='/onlinecourses'> View All</Link>
                </button> */}
            </div>
            <div className="parent-cards">

                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>Single Codebase, Multi-Platform?</h2>
                        <p>Flutter's unique ability to use a single codebase for both iOS and Android development streamlines the development process, reducing time and effort.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>Hot Reload</h2>
                        <p>The Hot Reload feature facilitates real-time code changes, enabling developers to see instant results without restarting the entire application. This enhances efficiency and accelerates development cycles.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Rich, Customizable UI</h2>
                        <p>Flutter provides a comprehensive set of customizable widgets, allowing developers to create visually appealing and consistent UI across different platforms, contributing to a seamless user experience.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Expressive UI with Dart</h2>
                        <p>Dart, Flutter's programming language, is known for its simplicity and expressiveness. This contributes to a clean and concise codebase, making development more efficient and readable.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Native Performance</h2>
                        <p>Flutter compiles to native ARM code, ensuring high performance on both iOS and Android platforms. This results in smooth animations and a responsive user interface.</p>
                    </div>




                </div>



                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>Strong Community Support</h2>
                        <p>Flutter boasts a vibrant and engaged community of developers, providing a wealth of resources, packages, and support. This community-driven approach ensures ongoing improvements and a rich ecosystem.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Ideal for MVP Development</h2>
                        <p>For startups and businesses aiming for rapid development and testing, Flutter is an excellent choice. Its efficiency in creating Minimum Viable Products (MVPs) accelerates time-to-market.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>Backed by Google</h2>
                        <p>Google's backing provides confidence in the long-term viability and support for Flutter. Regular updates, improvements, and integration with Google's ecosystem contribute to its credibility.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Consistent Performance Across Devices</h2>
                        <p>Flutter ensures a consistent performance across various devices, reducing fragmentation issues that can arise in mobile app development.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Open-Source Nature</h2>
                        <p>Being open-source, Flutter encourages collaboration and innovation. The community's contributions enhance the framework's capabilities and ensure it stays relevant in the ever-evolving tech landscape.</p>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default WhyChooseFlutter