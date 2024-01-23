import React from 'react'
import './Online.scss'
import courseImage from '../../../assets/flutter-online.png'
import CourseTable from '../../courseTable/OnlineCourseTable'
import { Helmet } from "react-helmet";


const FlutterOnline = () => {

  let tableFields = [
    [
      "Flutter Trainee",
      "3 Months",
      "3 Days in Week",
      24990
    ],
    [
      "Flutter Hustler",
      "5 Months",
      "3 Days in Week",
      34990
    ],
    [
      "Flutter Expert",
      "7 Months",
      "3 Days in Week",
      44990
    ]
  ]

  let recorded = [
    [
      "Flutter Trainee",
      "3 Months",
      "3 Days in Week",
      8990
    ],
    [
      "Flutter Hustler",
      "5 Months",
      "3 Days in Week",
      13990
    ],
    [
      "Flutter Expert",
      "7 Months",
      "3 Days in Week",
      17990
    ]
  ]
  return (

    <div className='online'>

      <Helmet>
        <meta charSet="utf-8" />
        <title>TECH FEVER: CSIR NET Chemical Sciences Online Courses</title>
        <meta name="description" content="Expert faculty, flexible schedules, and comprehensive syllabus coverage. Enroll in our CSIR NET Chemical Sciences online Coaching for success in chemical sciences" />
        <meta name="keywords" content="Online Classes for CSIR NET Chemical Sciences, CSIR NET Chemical Sciences Online Courses, Online Csir Net Coaching, Csir Net Coaching In Delhi, Csir Net Chemical Science Coaching" />
      </Helmet>

      <img src={courseImage} alt="" /><br></br><br></br><br></br>
      <h1>India’s Best Flutter Online Course With Certificate & 3-month Internship</h1>
      <p>Are you looking to master Flutter app development and land a high-paying job as a Flutter developer? We offer India's best Flutter online course with certification and a 3-month internship opportunity.</p>
      <p>Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter is trending and in high demand, with over 200,000+ Flutter apps on the Play Store. Learning Flutter can open you up to many career opportunities as a Flutter developer.
        Top companies are hiring Flutter devs at excellent salaries.So it's the perfect time to skill up with our online Flutter course - the most comprehensive training program in India!
      </p>
      <p>Our comprehensive Flutter course covers everything from basics to advanced topics. You will learn Flutter from scratch and build real-world apps. The course curriculum is designed by industry experts and covers:</p>

      <h3>What you'll learn:</h3>
      <ul>
        <li> • <h6>Flutter basics :</h6> Learn about widgets, themes, animations, etc.</li>
        <li> • <h6>Dart programming : </h6> Master the language used to build Flutter apps</li>
        <li> • <h6>Responsive layouts : </h6> Build apps that work on multiple screen sizes</li>
        <li> • <h6>State management : </h6> Learn about ChangeNotifier, GetX, BLoC, SetState etc.</li>
        <li> • <h6>Firebase integration : </h6> Connect your Flutter apps to Firebase</li>
        <li> • <h6>Native functionality : </h6> Access platform-specific features</li>
        <li> • <h6>And much more!</h6></li>

      </ul>

      <p>Upon completing the course, you get a course completion certificate to showcase your new skills. You will also get an opportunity to intern with us for 3 months and gain valuable work experience.</p>
      <p>This is a unique opportunity to learn Flutter from the best and kickstart your career as a Flutter developer. Enroll now and get started with India's best Flutter course today!</p>

      <p>Enroll now and get flat 50% OFF on our online Flutter course. Limited seats available!</p>


      {/* <h3>Batch Details:</h3>
      <ol>
        <li> • <h6>CSIR NET (Chemical Science) - 6 Months - Regular - Online Live + Recorded</h6><br />A 6-months intensive course with regular live classes and access to recorded lectures for flexible learning.</li>
        <li> • <h6>flutter (Chemical Science) - 1 Year - Weekend - Online Live + Recorded</h6><br />A 1-year course designed for weekend learning, featuring live online classes and recorded lectures for convenient studying.</li>
        <li> • <h6>flutter (Chemical Science) - 6 Months, 1 Year, and 2 Years - Recorded</h6><br />Choose from 6-months, 1-year, or 2-year durations to access recorded lectures that allow you to study at your own pace.</li>
      </ol> */}



      <CourseTable mode={"Online Dashboard With Internship"} tableFields={tableFields} />
      <CourseTable mode={"Online Dashboard Without Internship"} tableFields={recorded} /><br></br><br></br>
      {/* <p>Note: 18% GST is applicable extra on above fees as per govt. norms.</p> <br></br><br></br> */}

      <h3>Registration Procedure:</h3>
      <ol>
        <li> • <h6>Online Registration:</h6> Click on the "Enroll Now" link provided on our website to register online.</li>
        {/* <li> • <h6>In-Person Registration:</h6> You may also visit the TECH FEVER office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
        <li> • <h6>Fee Payment:</h6> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li> */}
      </ol>

      {/* <p>Join TECH FEVER's CSIR NET Chemical Sciences online course to embark on your journey to success in the field of chemical sciences.</p> */}

      <h3>For inquiries and assistance, please contact us at:</h3>
      <ul>
        <li> • <h6>Phone:</h6> <h5>9910765616, 9650636804</h5></li>
      </ul>

      <h3>Frequently Asked Questions (FAQs):</h3>
      <ol>
        <li><h6>Q1: What is Flutter, and why should I learn it for mobile app development?</h6><br /><h6>A:</h6> Flutter is an open-source UI software development toolkit by Google, known for its fast development, expressive UI, and single-codebase efficiency. Learning Flutter allows you to create high-quality mobile applications for both Android and iOS platforms simultaneously.</li><br></br>
        <li><h6>Q2: Is this course suitable for beginners in mobile app development?</h6><br /><h6>A:</h6> Absolutely! Our Flutter Development Course is designed for beginners, providing step-by-step guidance and hands-on projects to ensure a smooth learning experience.</li><br></br>
        <li><h6>Q3: Do I need prior programming experience to enroll in the course?</h6><br /><h6>A:</h6> While some programming knowledge is beneficial, the course covers fundamental concepts, making it accessible for beginners. Basic understanding of any programming language would be an advantage.</li><br></br>
        <li><h6>Q4: What will I learn from this Flutter course?</h6><br /><h6>A:</h6> This course covers everything from Flutter basics to advanced topics. You will learn widget creation, state management, API integration, and even deploy your apps on both Android and iOS platforms.</li><br></br>
        <li><h6>Q5: Are there any prerequisites for the Flutter Development Course?</h6><br /><h6>A:</h6> A computer with Flutter installed is necessary. The course will guide you through the installation process. Familiarity with any programming language is helpful but not mandatory.</li><br></br>
        <li><h6>Q6: Is the course available online, and can I learn at my own pace?</h6><br /><h6>A:</h6> Yes, the course is available online, offering the flexibility to learn at your own pace. Once enrolled, you'll have access to the course materials 24/7.</li><br></br>
        <li><h6>Q7: Are there any hands-on projects or assessments in the course?</h6><br /><h6>A:</h6> Absolutely! The course includes hands-on projects and assessments to reinforce your learning. You'll have the opportunity to apply your knowledge in real-world scenarios.</li><br></br>
        <li><h6>Q8: Can I ask questions and seek help during the course?</h6><br /><h6>A:</h6> Yes, we encourage active participation. You can ask questions, seek clarification, and interact with both instructors and fellow learners through dedicated forums or discussion platforms.</li><br></br>
        <li><h6>Q9: Is there any certification upon completing the Flutter Development Course?</h6><br /><h6>A:</h6> Yes, upon successful completion of the course, you will receive a certificate, validating your skills in Flutter mobile app development.</li><br></br>
        <li><h6>Q10: Is there internship upon completing the Flutter Development Course?</h6><br /><h6>A:</h6> Yes, upon successful completion of the course, you will receive a certificate, and start internship on real world projects in Flutter mobile app development.</li>

      </ol>

      <p>We're here to support you on your journey to success in the Flutter Development Course. If you have any more questions or need further assistance, please feel free to reach out to our team.</p>
    </div>
  )
}

export default FlutterOnline