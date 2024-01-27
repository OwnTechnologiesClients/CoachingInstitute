import React from 'react'
import reactjsImage from '../../../assets/reactjs-offline.jpg'
import OnlineCourseTable from '../../courseTable/OfflineCourseTable'
import { Helmet } from "react-helmet";

const ReactJsOffline = () => {
    let tableFields = [
        [
            "ReactJS Trainee",
            "3 Months",
            "3 days in week",
            29990
        ],
        [
            "ReactJS Hustler",
            "5 Months",
            "3 days in week",
            39990
        ],
        [
            "ReactJS Expert",
            "7 Months",
            "3 days in week",
            49990
        ],
    ]

    let recorded = [
        [
            "ReactJS Trainee",
            "3 Months",
            "3 days in week",
            14990
        ],
        [
            "ReactJS Hustler",
            "5 Months",
            "3 days in week",
            19990
        ],
        [
            "ReactJS Expert",
            "7 Months",
            "3 days in week",
            23990
        ]
    ]
    return (
        <div className='online'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>The Best Offline ReactJS Development Course in Delhi: TechFever</title>
                <meta name="description" content="Join TechFever for the best and cheapest offline ReactJS Development course in Delhi. Get a 3-month guaranteed internship and 100% refund guarantee" />
                <meta name="keywords" content="best, cheapest, offline, ReactJS Development, course, Delhi, TechFever, internship, best, cheapest, offline, ReactJS Development, course, Delhi, TechFever, internship, 100% refund guarantee" />
            </Helmet>

            <img src={reactjsImage} alt="ReactJS offline course" caption="Showing TechFever reactjs offline course image" /><br></br><br></br><br></br>

            <h1>India's Best Reactjs Offline Course With Certificate & 3-month Internship</h1>
            <p>Are you looking to learn Reactjs and launch your career as a front-end developer?</p>
            <p>We offer India's best Reactjs offline course with a job-ready curriculum, project work, a completion certificate, and a guaranteed 3-month internship.</p>
            <p>Reactjs is one of the most in-demand front-end frameworks, and companies are hiring Reactjs developers at an incredible rate. Our comprehensive Reactjs course will teach you everything you need to know to become a Reactjs expert and land a high-paying job.</p>

            <h3>The course covers:</h3>
            <ul>
                <li> • <h6>Reactjs fundamentals:</h6> JSX, components, props, state, lifecycle methods</li>
                <li> • <h6>Handling events, forms, and user input</h6></li>
                <li> • <h6>React Hooks:</h6> useState, useEffect, custom hooks</li>
                <li> • <h6>Styling React apps with CSS, Sass, and Styled Components</h6></li>
                <li> • <h6>React Router for navigation</h6></li>
                <li> • <h6>Redux for state management</h6></li>
                <li> • <h6>And much more through hands-on projects!</h6></li>

            </ul>


            <h3>Upon completing the course, you get:</h3>
            <ul>
                <li> • <h6>A certificate of completion from us to showcase your new skills</h6></li>
                <li> • <h6>3 months of guaranteed internship at a tech startup</h6></li>
                <li> • <h6>Lifetime access to course materials and updates</h6></li>
                <li> • <h6>Exclusive job referrals and career coaching</h6></li>


            </ul>

            <p>Don't miss out on this opportunity to become a Reactjs expert and land an amazing job. Enroll today in India's best Reactjs course and fast track your career as a front-end developer!</p>



            <OnlineCourseTable mode={"Offline Dashboard With Internship"} tableFields={tableFields} />
            <OnlineCourseTable mode={"Offline Dashboard Without Internship"} tableFields={recorded} />
            {/* <p>Note: 18% GST is applicable extra on above fees as per govt. norms.</p> <br></br><br></br> */}

            <h3>Registration Procedure:</h3>
            {/* <p>To enroll in our GATE CHEMISTRY online course, you can follow these simple steps:</p> */}
            <ul>
                <li> • <h6>Offline Registration:</h6> Click on the "Enroll Now" link provided on our website to register online.</li>
                {/* <li> • <h6>In-Person Registration:</h6> You may also visit the TECH FEVER office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
        <li> • <h6>Fee Payment:</h6> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li> */}
            </ul>

            {/* <p>Enroll in TECH FEVER's GATE Chemistry online course and pave the way for admission to prestigious institutions like IITs, IISc, and IISERs. You can also unlock opportunities to become a scientist in esteemed organizations like DRDO and BARC. Your journey to success begins here.</p> */}

            <h3>For inquiries and assistance, please contact us at:</h3>
            <ul>
                <li> • Phone: <h5>9910765616, 9650636804</h5></li>
            </ul>

            <h3>Frequently Asked Questions (FAQs):</h3>
            <ol>
                <li><h6>Q1: What is ReactJS, and why should I consider learning it for web development?</h6><br /><h6>A:</h6> ReactJS is a popular JavaScript library for building user interfaces. It allows for efficient, modular, and scalable development. Learning ReactJS is valuable for creating interactive and dynamic web applications.</li><br></br>
                <li><h6>Q2: Is this ReactJS course suitable for beginners in web development?</h6><br /><h6>A:</h6> Absolutely! Our ReactJS Development Course is tailored for beginners, providing a structured learning path and hands-on projects to ensure a smooth introduction to web development with React.</li><br></br>
                <li><h6>Q3: Do I need prior programming experience to enroll in the course?</h6><br /><h6>A:</h6> While some programming knowledge is beneficial, the course covers fundamental concepts, making it accessible for beginners. Basic understanding of HTML, CSS, and JavaScript would be advantageous.</li><br></br>
                <li><h6>Q4: What specific topics will be covered in the ReactJS course?</h6><br /><h6>A:</h6> The course covers essential ReactJS concepts, including component-based architecture, state and props, hooks, routing, and integrating with APIs. You'll also work on real-world projects to reinforce your learning.</li><br></br>
                <li><h6>Q5: Are there any prerequisites for the ReactJS Development Course?</h6><br /><h6>A:</h6> A computer with Node.js and a code editor is necessary. The course will guide you through the installation process. Familiarity with HTML, CSS, and basic JavaScript is recommended but not mandatory.</li><br></br>
                <li><h6>Q6: Can I learn at my own pace, and is the course available offline?</h6><br /><h6>A:</h6> Yes, the course is available online, allowing you to learn at your own pace. Once enrolled, you'll have 24/7 access to course materials and resources.</li><br></br>
                <li><h6>Q7: Will there be hands-on projects or assessments in the course?</h6><br /><h6>A:</h6> Certainly! The course includes hands-on projects and assessments to reinforce your learning. You'll have the opportunity to apply your skills to real-world scenarios.</li><br></br>
                <li><h6>Q8: Can I interact with instructors and fellow learners during the course?</h6><br /><h6>A:</h6> Yes, active participation is encouraged. You can ask questions, seek clarification, and interact with both instructors and fellow learners through dedicated forums or discussion platforms.</li><br></br>
                <li><h6>Q9: Is there a certification upon completing the ReactJS Development Course?</h6><br /><h6>A:</h6> Yes, upon successfully completing the course, you will receive a certificate, validating your proficiency in ReactJS web development.</li><br></br>
                <li><h6>Q10: Is there internship upon completing the Flutter Development Course?</h6><br /><h6>A:</h6> Yes, upon successful completion of the course, you will receive a certificate, and start internship on real world projects in ReactJs development.</li>
            </ol>

            <p>We're here to support you on your journey to success in the ReactJS Development. If you have any more questions or need further assistance, please feel free to reach out to our team.</p>

        </div>
    )
}

export default ReactJsOffline