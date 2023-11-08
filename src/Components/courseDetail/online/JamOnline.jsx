import React from 'react'
import courseImage from '../../../assets/courseDetail.png'
import OnlineCourseTable from '../../courseTable/OnlineCourseTable'

const JamOnline = () => {

  let tableFields = [
    [
        "IIT-JAM (Chemistry)",
        "6 Month",
        "Regular",
        "✔",
        "✔",
        399
    ],
    [
        "IIT-JAM (Chemistry)",
        "1 Year",
        "Weekend",
        "✔",
        "✔",
        399
    ],
    
    [
        "IIT-JAM (Chemistry)",
        "2 Year",
        "Weekend",
        "✔",
        "✔",
        399
    ],
    
    [
        "IIT-JAM + CUET(PG) (Chemistry)",
        "6 Month",
        "Recorded",
        "✖",
        "✔",
        399
    ],
    [
        "IIT-JAM + CUET(PG) (Chemistry)",
        "1 Year",
        "Recorded",
        "✖",
        "✔",
        2499
    ],
    [
        "IIT-JAM + CUET(PG) (Chemistry)",
        "2 Year",
        "Recorded",
        "✖",
        "✔",
        2499
    ]
]

  return (
    <div className='online'> 
      <img src={courseImage} alt="" /><br></br><br></br><br></br>

      <h1>IIT-JAM Chemistry Online Batch: Igniting Your Path to Excellence</h1>
      <p>Welcome to the IIT-JAM Chemistry Online Batch by ASAP Institute, a transformative voyage towards conquering the IIT-JAM Chemistry examination. Our courses are carefully crafted to cater to a diverse audience, be it a dedicated student, a working professional, or an eager learner with aspirations to excel in IIT-JAM Chemistry.</p>

      <h3>Course Features:</h3>
      <ul>
        <li> • <h6>Syllabus Mastery:</h6> Our IIT-JAM Chemistry Online Batch covers the complete IIT-JAM Chemistry syllabus. We strive to equip you with a robust understanding of every topic, ensuring you're thoroughly prepared to tackle the examination.</li>
        <li> • <h6>Interactive Learning:</h6> Immerse yourself in the world of interactive learning through our live online classes. Engage actively with our experienced faculty and fellow students during these sessions, fostering a collaborative learning environment and deeper comprehension of complex subjects.</li>
        <li> • <h6>Recorded Content:</h6> For your convenience, we've curated a rich repository of recorded lectures for our online batch students. These recordings offer flexibility in your learning journey, enabling you to revisit lectures and study at your own pace.</li>
        <li> • <h6>Practice and Assessments:</h6> Success in the IIT-JAM exam depends on rigorous practice. Our course provides an array of practice materials, encompassing questions, quizzes, and mock tests. These resources are carefully designed to help you sharpen your problem-solving skills and measure your progress effectively.</li>
        <li> • <h6>Flexible Batches:</h6> Tailor your learning experience to your schedule. We offer a 6-month regular batch, a 1-year weekend batch with live online classes, and recorded content options spanning 6 months, 1 year, and 2 years. Each option accommodates your unique learning style and pace.</li>
      </ul>

      <h3>Batch Details:</h3>
      <ul>
        <li> • IIT-JAM Chemistry Online Batch (6 months - Regular)</li>
        <li> • IIT-JAM Chemistry Online Batch (1 Year - Weekend)</li>
        <li> • IIT-JAM Chemistry Online Batch (6 Months, 1 year, and 2 years Recorded)</li>
      </ul>

      <h3>Registration Procedure:</h3>
      <p>To enroll in our IIT JAM CHEMISTRY online course, you can follow these simple steps:</p>
      <ul>
        <li> • <h6>Online Registration:</h6> Click on the "Enroll Now" link provided on our website to register online.</li>
        <li> • <h6>In-Person Registration:</h6> You may also visit the ASAP Institute office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
        <li> • <h6>Fee Payment:</h6> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li>
      </ul>

      <p>Let your journey to academic success begin with us.</p>

      <h3>For inquiries and assistance, please contact us at:</h3>
      <ul>
        <li> • Phone: <h5>8595764714, 7011767872, 9026800325</h5></li>
      </ul>
      
      <OnlineCourseTable mode={"Online Dashboard"} tableFields={tableFields} />

      <h3>Frequently Asked Questions (FAQs):</h3>
      <ol>
        <li><h6>Q1: What is the IIT-JAM Chemistry examination, and why is it significant?</h6><br /><h6>A:</h6> The IIT-JAM Chemistry exam stands as a gateway to esteemed educational institutions. Qualifying IIT-JAM Chemistry can open doors to admissions in IITs, IISc, and IISERs, and enhance your prospects as a scientist in renowned organizations such as DRDO and BARC.</li>
        <li><h6>Q2: How do the recorded lectures enhance the learning experience?</h6><br /><h6>A:</h6> Recorded lectures offer flexibility and convenience to students, allowing them to revisit lessons and study at their own pace. This resource reinforces their understanding of complex subjects.</li>
        <li><h6>Q3: What are the career benefits of excelling in the IIT-JAM Chemistry exam?</h6><br /><h6>A:</h6> Success in the IIT-JAM Chemistry exam can unlock opportunities to pursue postgraduate programs at prestigious institutions. It can also lead to exciting career options in research, academia, and prestigious government organizations.</li>
        <li><h6>Q4: How does the 1-year weekend batch cater to working professionals and students?</h6><br /><h6>A:</h6> Our 1-year weekend batch offers the flexibility to attend live online classes during weekends, accommodating the schedules of working professionals and students without compromising the quality of education.</li>
        <li><h6>Q5: Can I switch between batches during my enrollment?</h6><br /><h6>A:</h6> While batch switching is possible, it is subject to availability and approval. We encourage students to discuss their requirements with our team to ensure a smooth transition.</li>
        <li><h6>Q6: How can I access practice materials and assessments for IIT-JAM Chemistry preparation?</h6><br /><h6>A:</h6> Upon enrollment, you will gain access to an extensive collection of practice questions, quizzes, and mock tests. These resources are designed to refine your problem-solving skills and provide a clear evaluation of your readiness.</li>
        <li><h6>Q7: What is the duration of the IIT-JAM Chemistry Online Batch at ASAP Institute?</h6><br /><h6>A:</h6> The duration of our IIT-JAM Chemistry Online Batch varies depending on your choice of batch. Options include a 6-month regular batch and a 1-year weekend batch with live online classes, along with recorded content choices spanning 6 months, 1 year, and 2 years, catering to a spectrum of learning styles and paces.</li>
        <li><h6>Q8: How can I interact with the faculty during the live online classes?</h6><br /><h6>A:</h6> Engaging in interactive discussions and seeking clarifications for doubts is highly encouraged during our live online classes. Additionally, our faculty members are readily available during designated hours to address any additional queries you may have.</li>
        <li><h6>Q9: Are the recorded lectures accessible at any time?</h6><br /><h6>A:</h6> Yes, for students enrolled in the IIT-JAM Chemistry Online Batch with recorded content (available for 6 months, 1 year, and 2 years), the recorded lectures are at your disposal whenever you wish. This flexibility allows you to shape your learning journey according to your personal rhythm.</li>
        <li><h6>Q10: What are the advantages of the weekend batch for working professionals and students?</h6><br /><h6>A:</h6> Our 1-year weekend batch is meticulously designed to accommodate the busy schedules of working professionals and students. It grants you the flexibility to partake in live online classes during weekends, ensuring that your education remains uncompromised despite your bustling life.</li>
      </ol>

      <p>We're here to support you on your journey to success in the IIT-JAM Chemistry examination. If you have any more questions or need further assistance, please feel free to reach out to our team.</p>
    </div>
  )
}

export default JamOnline