import React from 'react'
import nodejsImage from '../../../assets/nodejs-offline.jpg'
import CourseTable from '../../courseTable/OfflineCourseTable'
import { Helmet } from "react-helmet";


const NodeJsOffline = () => {

    let tableFields = [
        [
            "NodeJS Trainee",
            "3 Months",
            "3 Days in Week",
            29990
        ],
        [
            "NodeJS Hustler",
            "5 Months",
            "3 Days in Week",
            39990
        ],
        [
            "NodeJS Expert",
            "7 Months",
            "3 Days in Week",
            49990
        ]
    ]

    let recorded = [
        [
            "NodeJS Trainee",
            "3 Months",
            "3 Days in Week",
            14990
        ],
        [
            "NodeJS Hustler",
            "5 Months",
            "3 Days in Week",
            19990
        ],
        [
            "NodeJS Expert",
            "7 Months",
            "3 Days in Week",
            23990
        ]
    ]
    return (
        <div className='online'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Best Offline NodeJS Development Course in Delhi | TechFever</title>
                <meta name="description" content="Join TechFever for the best and cheapest offline NodeJS development course in Delhi. Get a 3-month guaranteed internship and 100% refund guarantee" />
                <meta name="keywords" content="best, cheapest, offline, NodeJS Development, course, Delhi, TechFever, internship, 100% refund guarantee" />
            </Helmet>

            <img src={nodejsImage} alt="" /><br></br><br></br><br></br>

            <h1>Introducing The Ultimate Node.js Offline Course With Certificate & 3-Month Internship</h1>
            <p>Want to become a Node.js expert and land a high-paying job as a full-stack JavaScript developer? Look no further than our comprehensive Node.js online course.</p>
            <p>This course is designed to take you from beginner to advanced Node.js concepts. You'll learn everything from the fundamentals of Node.js to building complex real-world applications.</p>

            <h3>The course curriculum covers:</h3>
            <ul>
                <li> • <h6>Node.js basics and architecture</h6></li>
                <li> • <h6>Asynchronous programming with callbacks, promises and async/await</h6> </li>
                <li> • <h6>Building RESTful APIs and web servers with Express.js</h6></li>
                <li> • <h6>Database integration with MongoDB, MySQL and other DBs</h6></li>
                <li> • <h6>Authentication and security best practices</h6></li>
                <li> • <h6>Testing Node.js applications with Mocha, Chai and Sinon</h6></li>
                <li> • <h6>Deploying Node apps to production</h6></li>
            </ul>

            <h3>Don't miss out on this chance to master one of the most in-demand programming skills and launch your career. Enroll now and get:</h3>
            <ul>
                <li> • <h6>Coding exercises and projects</h6></li>
                <li> • <h6>1-on-1 mentorship</h6></li>
                <li> • <h6>Course completion certificate</h6></li>
                <li> • <h6>3-month internship opportunity</h6></li>
            </ul>

            <p>And much more! You'll build multiple projects to get hands-on practice and really cement your learning.</p>
            <p>The best part is the course comes with a certification of completion that you can proudly display on your resume. This certificate is recognized by top tech companies and will give you a major edge in the job market.</p>
            <p>Plus, after completing the course you'll get guaranteed placement in a 3-month paid Node.js internship at a leading tech firm. This is the perfect way to kickstart your career and get professional experience under your belt.</p>
            <p>So don't wait any longer! Enroll now in our Node.js offline course and get certified, land an internship, and start your journey to becoming a Node.js master.</p>
            <p>This is the fastest path to a lucrative career in one of today's most in-demand web development skills. Click below to get started!</p>


            <CourseTable mode={"Offline Dashboard With Internship"} tableFields={tableFields} />
            <CourseTable mode={"Offline Dashboard Without Internship"} tableFields={recorded} />
            {/* <p>Note: 18% GST is applicable extra on above fees as per govt. norms.</p> <br></br><br></br> */}

            <h3>Registration Procedure:</h3>
            {/* <p>To enroll in our CUET(PG) CHEMISTRY offline course, you can follow these simple steps:</p> */}
            <ol>
                <li> • <h6>Offline Registration:</h6> Click on the "Enroll Now" link provided on our website to register offline.</li>
                {/* <li> • <h6>In-Person Registration:</h6> You may also visit the TECH FEVER office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
                <li> • <h6>Fee Payment:</h6> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li> */}
            </ol>

            {/* <p>Join TECH FEVER's CUET(PG) Chemistry offline course to embark on your journey to get the admissions in Central Universities for pursuing postgraduation.</p> */}

            <h3>For inquiries and assistance, please contact us at:</h3>
            <ul>
                <li> • Phone: <h5>9910765616, 9650636804</h5></li>
            </ul>

            <h3>Frequently Asked Questions (FAQ) - Node.js Development Course:</h3>
            <ol>
                <li><h6>Q1: What is Node.js, and why is it important in web development?</h6><br /><h6>A:</h6> Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side execution. It's crucial for scalable and efficient web development, allowing developers to use JavaScript on both the client and server sides.</li><br></br>
                <li><h6>Q2: Is this Node.js course suitable for beginners in web development?</h6><br /><h6>A:</h6> Absolutely! Our Node.js Development Course is tailored for beginners, providing a solid foundation and practical skills needed for server-side JavaScript development.</li><br></br>
                <li><h6>Q3: Do I need prior programming experience to enroll in the course?</h6><br /><h6>A:</h6> While some programming knowledge is beneficial, the course covers fundamental concepts, making it accessible for beginners. Basic understanding of JavaScript is recommended but not mandatory.</li><br></br>
                <li><h6>Q4: What specific topics will be covered in the Node.js course?</h6><br /><h6>A:</h6> The course covers essential Node.js concepts, including asynchronous programming, server-side scripting, RESTful APIs, and database integration. Hands-on projects ensure practical application of the learned skills.</li><br></br>
                <li><h6>Q5: Are there any prerequisites for the Node.js Development Course?</h6><br /><h6>A:</h6> A computer with Node.js and a code editor is necessary. The course will guide you through the installation process. Familiarity with JavaScript is recommended but not mandatory.</li><br></br>
                <li><h6>Q6: Can I learn at my own pace, and is the course available online?</h6><br /><h6>A:</h6> Yes, the course is available online, providing the flexibility to learn at your own pace. Once enrolled, you'll have 24/7 access to course materials and resources.</li><br></br>
                <li><h6>Q7: Will there be hands-on projects or assessments in the course?</h6><br /><h6>A:</h6> Absolutely! The course includes hands-on projects and assessments to reinforce your learning. You'll have the opportunity to apply Node.js concepts to real-world scenarios.</li><br></br>
                <li><h6>Q8: Can I interact with instructors and fellow learners during the course?</h6><br /><h6>A:</h6> Yes, active participation is encouraged. You can ask questions, seek clarification, and interact with both instructors and fellow learners through dedicated forums or discussion platforms.</li><br></br>
                <li><h6>Q9: Is there a certification upon completing the Node.js Development Course?</h6><br /><h6>A:</h6> Yes, upon successfully completing the course, you will receive a certificate, validating your proficiency in Node.js web development.</li><br></br>
                <li><h6>Q10: Is there internship upon completing the Node.js Development Course?</h6><br /><h6>A:</h6> Yes, upon successful completion of the course, you will receive a certificate, and start internship on real world projects in Node.js development.</li>
            </ol>

            <p>We're here to support you on your journey to success in the Node.js Development. If you have any more questions or need further assistance, please feel free to reach out to our team.</p>

        </div>
    )
}

export default NodeJsOffline