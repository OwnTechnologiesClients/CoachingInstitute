import React from 'react'
import nextjsImage from '../../../assets/nextjs-online.jpg'
import OnlineCourseTable from '../../courseTable/OnlineCourseTable'
import { Helmet } from "react-helmet";

const NextJsOnline = () => {

  let tableFields = [
    [
      "NextJS Trainee",
      "3 Months",
      "3 days in week",
      24990
    ],
    [
      "NextJS Hustler",
      "5 Months",
      "3 days in week",
      34990
    ],
    [
      "NextJS Expert",
      "7 Months",
      "3 days in week",
      44990
    ],
  ]

  let recorded = [
    [
      "NextJS Trainee",
      "3 Months",
      "3 days in week",
      8990
    ],
    [
      "NextJS Hustler",
      "5 Months",
      "3 days in week",
      13990
    ],
    [
      "NextJS Expert",
      "7 Months",
      "3 days in week",
      17990
    ]
  ]

  return (
    <div className='online'>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Best NextJS Development Course in Delhi - TechFever</title>
        <meta name="description" content="Discover the best and most affordable NextJS development course in Delhi at TechFever. Get guaranteed 3 months internship and 100% refund guarantee" />
        <meta name="keywords" content="nextjs development course, Delhi, best, cheapest, guaranteed 3 months internship, 100% refund guarantee, TechFever" />
      </Helmet>

      <img src={nextjsImage} alt="" /><br></br><br></br><br></br>

      <h1>India's Best Nextjs Online Course With Certificate & 3-month Internship</h1>
      <p>Are you looking to master Nextjs and become a world-class frontend developer? We have the perfect course for you - India's Best Nextjs Online Course. </p>
      <p>This comprehensive course will teach you everything you need to know to build robust web applications using Nextjs, a popular React framework. Over the course of this course, </p>

      <h3>You will learn:</h3>
      <ul>
        <li> • <h6>The fundamentals of Nextjs including pages, components, state management, routing, and more.</h6></li>
        <li> • <h6>How to build server-side rendered React apps for improved SEO and performance.</h6></li>
        <li> • <h6>Advanced topics like data fetching, caching, internationalization, and deployment.</h6></li>
        <li> • <h6>Real-world projects to build your own blog, e-commerce store, and dashboard app from scratch.</h6></li>

      </ul>

      <p>Upon completing the course, you will receive a certificate of completion and a guaranteed 3-month internship at a leading tech company. The internship will provide invaluable real-world experience to kickstart your career as a Nextjs developer.</p>
      <p>This is a unique opportunity to learn Nextjs from industry experts through online sessions. The course curriculum is constantly updated to keep up with the latest updates in the React ecosystem. </p>
      <p>Don't miss out on India's Best Nextjs Online & Offline Course and the chance to land a high-paying job as a Nextjs developer. Enroll now!</p>

      {/* <h3>Batch Details:</h3>
      <ul>
        <li> • IIT-JAM Chemistry Online Batch (6 months - Regular)</li>
        <li> • IIT-JAM Chemistry Online Batch (1 Year - Weekend)</li>
        <li> • IIT-JAM Chemistry Online Batch (6 Months, 1 year, and 2 years Recorded)</li>
      </ul> */}


      <OnlineCourseTable mode={"Online Dashboard With Internship"} tableFields={tableFields} />
      <OnlineCourseTable mode={"Online Dashboard Without Internship"} tableFields={recorded} />
      {/* <p>Note: 18% GST is applicable extra on above fees as per govt. norms.</p> <br></br><br></br> */}

      <h3>Registration Procedure:</h3>
      {/* <p>To enroll in our IIT JAM CHEMISTRY online course, you can follow these simple steps:</p> */}
      <ul>
        <li> • <h6>Online Registration:</h6> Click on the "Enroll Now" link provided on our website to register online.</li>
        {/* <li> • <h6>In-Person Registration:</h6> You may also visit the TECH FEVER office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
        <li> • <h6>Fee Payment:</h6> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li> */}
      </ul>

      {/* <p>Let your journey to academic success begin with us.</p> */}

      <h3>For inquiries and assistance, please contact us at:</h3>
      <ul>
        <li> • Phone: <h5>9910765616, 9650636804</h5></li>
      </ul>

      <h3>Frequently Asked Questions (FAQ) - Next.js Development Course:</h3>
      <ol>
        <li><h6>Q1: What is Next.js, and why should I consider learning it for web development?</h6><br /><h6>A:</h6> Next.js is a React framework for building server-rendered applications. It simplifies the creation of robust, performant, and SEO-friendly web applications. Learning Next.js is valuable for those looking to enhance their React skills for server-side rendering.</li>
        <li><h6>Q2: Is this Next.js course suitable for beginners in web development?</h6><br /><h6>A:</h6> Yes, our Next.js Development Course is designed for both beginners and those familiar with web development concepts. It provides a structured path for understanding and implementing Next.js in your projects.</li>
        <li><h6>Q3: Do I need prior experience with React to enroll in the course?</h6><br /><h6>A:</h6> While some familiarity with React is beneficial, the course covers essential React concepts and progressively introduces Next.js features. Basic knowledge of HTML, CSS, and JavaScript is recommended.</li>
        <li><h6>Q4: What specific topics will be covered in the Next.js course?</h6><br /><h6>A:</h6> The course covers fundamental Next.js concepts, including routing, data fetching, server-side rendering, and deployment. You'll work on practical projects to gain hands-on experience.</li>
        <li><h6>Q5: Are there any prerequisites for the Next.js Development Course?</h6><br /><h6>A:</h6> A computer with Node.js and a code editor is necessary. The course will guide you through the installation process. Familiarity with React, HTML, CSS, and basic JavaScript is recommended.</li>
        <li><h6>Q6: Can I learn at my own pace, and is the course available online?</h6><br /><h6>A:</h6> Yes, the course is available online, allowing you to learn at your own pace. Once enrolled, you'll have 24/7 access to course materials and resources.</li>
        <li><h6>Q7: Will there be hands-on projects or assessments in the course?</h6><br /><h6>A:</h6> Certainly! The course includes hands-on projects and assessments to reinforce your learning. You'll have the opportunity to apply Next.js concepts to real-world scenarios.</li>
        <li><h6>Q8: Can I interact with instructors and fellow learners during the course?</h6><br /><h6>A:</h6> Yes, active participation is encouraged. You can ask questions, seek clarification, and interact with both instructors and fellow learners through dedicated forums or discussion platforms.</li>
        <li><h6>Q9: Is there a certification upon completing the Next.js Development Course?</h6><br /><h6>A:</h6> Yes, upon successfully completing the course, you will receive a certificate, validating your proficiency in Next.js web development.</li>
        <li><h6>Q10: Is there internship upon completing the Flutter Development Course?</h6><br /><h6>A:</h6> Yes, upon successful completion of the course, you will receive a certificate, and start internship on real world projects in NextJs development.</li>
        <li><h6>Q11: Is this course is recorded?</h6><br /><h6>A:</h6> No, It's one to one coaching with our expert</li>
      </ol>

      <p>We're here to support you on your journey to success in the NextJs Development. If you have any more questions or need further assistance, please feel free to reach out to our team.</p>
    </div>
  )
}

export default NextJsOnline