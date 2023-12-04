import React from 'react'
import courseImage from '../../../assets/iit-jam-offline.jpg'
import CourseTable from '../../courseTable/CourseTable'

const JamOffline = () => {

    let tableFields = [
        [
            "IIT-JAM",
            "6 Months",
            "Regular",
            25000
        ],
        [
            "IIT-JAM",
            "1 Year",
            "Weekend",
            25000
        ],

        [
            "IIT-JAM",
            "2 Year",
            "Weekend",
            30000
        ]
    ]


    return (
        <div className='online'>
            <img src={courseImage} alt="" /><br></br><br></br><br></br>

            <h1>IIT JAM Chemistry: Fueling Your Path to Success</h1>
            <p>Welcome to the IIT JAM Chemistry program at ASAP Institute (formerly CHEMTIME), your gateway to academic excellence. Our IIT JAM Chemistry course is meticulously designed to provide you with an unparalleled learning experience. Here are the key highlights and answers to your frequently asked questions about our IIT JAM Chemistry program:</p>

            <h3>Course Features and Batch Details:</h3>
            <ul>
                <li> • <h6>Expert Instructors:</h6> At ASAP Institute, we take pride in our highly experienced and dedicated faculty members. Our educators bring years of teaching expertise and in-depth subject knowledge to ensure you receive top-notch guidance.</li>
                <li> • <h6>Comprehensive Syllabus Coverage:</h6> Our program delves into every facet of the IIT JAM Chemistry syllabus, offering a deep understanding of core concepts. We believe in building a solid foundation to tackle even the most challenging questions.</li>
                <li> • <h6>Effective Teaching Approaches:</h6> We utilize various teaching methods, including lectures, problem-solving sessions, and interactive discussions, to make learning engaging and effective.</li>
                <li> • <h6>Regular Practice:</h6> Practice is key to success in the IIT JAM exam. We offer a wide range of practice questions, quizzes, and mock tests to help you hone your problem-solving skills and gain confidence.</li>
                <li> • <h6>Quality Study Materials:</h6>  Our study materials are designed to complement your classroom learning. They are carefully curated to facilitate better comprehension of complex topics.</li>
                <li> • <h6>Tailored Teaching Strategies:</h6> At ASAP Institute, we recognize that each student is unique. Our educators adopt a flexible teaching approach that caters to your specific learning style.</li>
                <li> • <h6>Regular Assessments:</h6> We provide frequent topic-wise assessments to gauge your progress. These assessments are followed by detailed discussions to help you understand your strengths and areas for improvement.</li>
            </ul>

            <h3>Batch Details:</h3>
            <ul>
                <li> • <h6>IIT-JAM (Chemistry) - 6 Months - Regular</h6></li>
                <li> • <h6>IIT-JAM (Chemistry) - 1 Year - Weekend</h6></li>
                <li> • <h6>IIT-JAM (Chemistry) - 2 Years – Weekend</h6></li>
            </ul>



            <CourseTable mode={"Offline Dashboard"} tableFields={tableFields} />
            <p>Note: 18% GST is applicable extra on above fees as per govt. norms.</p> <br></br><br></br>

            <h3>Registration Procedure:</h3>
            <p>To Enroll in our IIT JAM CHEMISTRY offline course, you can follow these simple steps:</p>
            <ul>
                <li> • <h6>Online Registration:</h6> Click on the "Enroll Now" link provided on our website to register online.</li>
                <li> • <h6>In-Person Registration:</h6> You may also visit the ASAP Institute office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
                <li> • <h6>Fee Payment:</h6> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li>
            </ul>

            {/* <p>Join ASAP Institute's CUET(PG) Chemistry offline course to embark on your journey to get the admissions in Central Universities for pursuing postgraduation.</p> */}

            <h3>Contact Information:</h3>
            <ul>
                <li> • <h6>Phone:</h6> 8595764714, 7011767872, 9026800325</li>
            </ul>
            <h3>Frequently Asked Questions (FAQs):</h3>
            <ol>
                <li>
                    <h6>Q1: What is IIT JAM, and why is it important?</h6>
                    <p><h6>A:</h6> The IIT JAM (Joint Admission Test for M.Sc.) is an entrance exam conducted for admission to various postgraduate programs, including M.Sc., Joint M.Sc.-Ph.D., M.Sc.-Ph.D. Dual Degree, and other post-bachelor degree programs at the Indian Institutes of Technology (IITs). It's important as it opens doors to prestigious institutions and research opportunities.</p>
                </li>
                <li>
                    <h6>Q2: How can I enroll in the IIT JAM Chemistry program at ASAP Institute?</h6>
                    <p><h6>A:</h6> To enroll, visit our office in New Delhi and complete the necessary formalities by filling out a detailed application form. Please bring two passport-size photographs and a self-attested copy of an identity proof, such as an Aadhar Card or Voter ID Card.</p>
                </li>
                <li>
                    <h6>Q3: What are the benefits of the IIT JAM exam?</h6>
                    <p><h6>A:</h6> The IIT JAM exam offers a platform to access exceptional postgraduate programs at IITs, fostering academic and research growth. It provides opportunities for quality education and future prospects in the field of science.</p>
                </li>
                <li>
                    <h6>Q4: How can I make the course fee payment?</h6>
                    <p><h6>A:</h6> Check the above mentioned Registration Procedure.</p>
                </li>
                <li>
                    <h6>Q5: What is the duration of the IIT JAM Chemistry program at ASAP Institute?</h6>
                    <p><h6>A:</h6> The IIT JAM Chemistry program spans several months, offering an intensive learning experience.</p>
                </li>
                <li>
                    <h6>Q6: Are there any mock tests or practice materials included in the program?</h6>
                    <p><h6>A:</h6> Yes, we provide mock tests, practice questions, and quizzes as part of the program. These are crucial for enhancing your problem-solving skills and overall preparation.</p>
                </li>
                <li>
                    <h6>Q7: How can I get in touch with the faculty for doubts and queries?</h6>
                    <p><h6>A:</h6> We actively encourage interactive discussions during classes. You can also reach out to our faculty members during designated hours for doubt clarification and guidance.</p>
                </li>
                <li>
                    <h6>Q8: Is financial assistance available for the IIT JAM Chemistry program?</h6>
                    <p><h6>A:</h6> Yes, we offer financial assistance options. Please contact our office for more information regarding scholarships or installment plans.</p>
                </li>
                <li>
                    <h6>Q9: How can I track my progress during the program?</h6>
                    <p><h6>A:</h6> We provide regular assessments, progress reports, and one-on-one counseling sessions to help you monitor your performance and make necessary improvements.</p>
                </li>
                <li>
                    {/* <h6>Q10: What is the success rate of students who enroll in CUET(PG) Chemistry coaching at ASAP Institute?</h6> */}
                    <p> Your academic aspirations meet reality with our IIT JAM Chemistry program at ASAP Institute. Join us today, and let's embark on your journey to success.
                        Start Your IIT JAM Journey with ASAP Institute!</p>
                </li>
            </ol>
        </div>
    )
}

export default JamOffline