import React from 'react'
import './HowToClearExam.scss'
import img1 from '../../assets/homepage/course/courseimage1.png'
import img2 from '../../assets/course.png'
import img3 from '../../assets/course.png'
import img4 from '../../assets/course.png'
import { CourseCard } from '../cards/Cards';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';


const HowToClearExam = () => {





    return (
        <div className="exam-section">
            <div className='top-heading'>
                <h1>
                    HOW TO CLEAR <span className='under-bar'>EXAMS</span>
                </h1>
                {/* <button>
                    <Link to='/onlinecourses'> View All</Link>
                </button> */}
            </div>
            <div className="parent-cards">

                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>Can You Clear CSIR NET Chemistry Without Coaching?</h2>
                        <p>While self-study is an option, it's important to note that CSIR NET is a challenging exam with a vast syllabus. Many successful candidates attribute their success to the guidance and resources provided by coaching institutes like ASAP Institute.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>Finding the Best Online Coaching for CSIR NET Chemistry in Delhi</h2>
                        <p>ASAP Institute is recognized for providing the best online coaching for CSIR NET chemistry in Delhi, and our stellar success rates and experienced faculty are a testament to our commitment to excellence.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Choosing the Right Coaching Institute in Delhi for CSIR NET</h2>
                        <p>Delhi is home to numerous coaching institutes, but choosing the right one is paramount. When searching for the best coaching for CSIR NET in Delhi, it's crucial to consider factors like faculty expertise, study materials, and track record.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>Why Chemistry Matters</h2>
                        <p>Chemistry is more than a subject; it's a foundation for scientific advancement. From understanding the composition of matter to the development of life-saving medicines and cutting-edge technologies, chemistry plays a pivotal role.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>The Role of Online Coaching in Chemistry</h2>
                        <p>Online coaching has revolutionized the way students prepare for competitive exams. It provides flexibility, accessibility, and the opportunity to learn from top educators, making it an invaluable resource for aspiring chemists.</p>
                    </div>


                </div>



                <div className='fact-card'>

                    <div className='fact-card-content'>
                        <h2>The Best Online Coaching for IIT JAM Chemistry - A Quora Perspective</h2>
                        <p>As you explore the options for IIT JAM chemistry coaching, you may come across questions on platforms like Quora. The answer is clear: ASAP Institute is recognized as the best online coaching for IIT JAM chemistry by a consensus of students and professionals.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>How to Study Chemistry for IIT JAM - A Proven Approach</h2>
                        <p>Studying for IIT-JAM chemistry involves a methodical approach. Begin with a comprehensive review of the syllabus, followed by in-depth study, regular practice, and timely mock tests. A trusted coaching institute can provide the structure you need.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>Choosing the Right Study Material for IIT JAM Chemistry</h2>
                        <p>Selecting the best study material is pivotal for success in IIT-JAM chemistry. At ASAP Institute, our comprehensive study materials are designed to align with the exam syllabus, providing students with the resources they need.</p>
                    </div>


                    <div className='fact-card-content'>
                        <h2>The Challenge of IIT JAM Chemistry</h2>
                        <p>IIT-JAM chemistry is renowned for its high difficulty level. It requires a strong foundation in the subject and comprehensive preparation. However, with the right coaching and resources, this challenge can be overcome.</p>
                    </div>

                    <div className='fact-card-content'>
                        <h2>What Are the Fees for CSIR NET Chemical Science Coaching?</h2>
                        <p>The fees for CSIR NET Chemical Science coaching can vary based on factors like course duration and format. At ASAP Institute, we offer competitive pricing to ensure our coaching is accessible to aspiring students.</p>
                    </div>

                </div>




            </div>
        </div>

    )
}

export default HowToClearExam