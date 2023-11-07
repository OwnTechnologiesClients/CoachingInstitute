import React from 'react'
import courseImage from '../../../assets/courseDetail.png'
import OnlineCourseTable from '../../courseTable/OnlineCourseTable'

const GateOnline = () => {
  let tableFields = [
    [
      "CSIR NET + GATE (Chemical Science)",
      "6 Month",
      "Regular",
      "✔",
      "✔",
      399
    ],
    [
      "CSIR NET + GATE (Chemical Science)",
      "1 Year",
      "Weekend",
      "✔",
      "✔",
      2499
    ],
    [
      "CSIR NET + GATE (Chemical Science)",
      "6 Month",
      "Recorded",
      "✖",
      "✔",
      399
    ],
    [
      "CSIR NET + GATE (Chemical Science)",
      "1 Year",
      "Recorded",
      "✖",
      "✔",
      2499
    ],
    [
      "CSIR NET + GATE (Chemical Science)",
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

      <h1>GATE Chemistry Online Batch: Your Path to Success</h1>
      <p>At ASAP Institute (formerly CHEMTIME), we understand the importance of quality education and flexible learning options. Our GATE Chemistry Online Batch offers a comprehensive and flexible approach to GATE exam preparation. Whether you are a working professional, a student, or someone seeking to master GATE Chemistry, our courses are designed to meet your specific needs.</p>

      <h3>Course Features:</h3>
      <ul>
        <li> • <h6>In-Depth Coverage:</h6> Our GATE Chemistry Online Batch covers the complete GATE Chemistry syllabus, ensuring you have a strong foundation in every topic. We believe in providing a comprehensive understanding of core concepts.</li>
        <li> • <h6>Interactive Learning:</h6> Our live online classes provide an interactive learning environment. You can actively engage with experienced faculty and fellow students during these sessions. This approach enhances your understanding of complex topics.</li>
        <li> • <h6>Recorded Content:</h6> We offer recorded lectures for our online batch students, making learning accessible at your convenience. These recordings are a valuable resource for revisiting lectures and studying at your own pace.</li>
        <li> • <h6>Practice and Assessments:</h6> GATE exam success requires practice. Our course includes a vast array of practice materials, including questions, quizzes, and mock tests. These resources are designed to help you refine your problem-solving skills and gauge your progress.</li>
        <li> • <h6>Flexible Batches:</h6> We offer a 6-month regular batch, a 1-year weekend batch, and recorded content options spanning 6 months, 1 year, and 2 years to cater to your scheduling preferences.</li>
      </ul>

      <h3>Additional Benefits:</h3>
      <ul>
        <li> • <h6>Career Opportunities:</h6> GATE Chemistry opens doors to a wide array of career opportunities. You can explore roles in research and development, academia, government organizations, and more. The GATE score is widely recognized by top companies, and qualifying candidates often receive job offers from prestigious organizations.</li>
        <li> • <h6>Higher Education:</h6> A valid GATE score is also allow for admission to master's and doctoral programs in renowned institutes in India. It paves the way for a successful academic career.</li>
      </ul>

      <h3>Registration Procedure:</h3>
      <p>To enroll in our GATE CHEMISTRY online course, you can follow these simple steps:</p>
      <ul>
        <li> • <h6>Online Registration:</h6> Click on the "Enroll Now" link provided on our website to register online.</li>
        <li> • <h6>In-Person Registration:</h6> You may also visit the ASAP Institute office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
        <li> • <h6>Fee Payment:</h6> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li>
      </ul>

      <p>Enroll in ASAP Institute's GATE Chemistry online course and pave the way for admission to prestigious institutions like IITs, IISc, and IISERs. You can also unlock opportunities to become a scientist in esteemed organizations like DRDO and BARC. Your journey to success begins here.</p>

      <h3>For inquiries and assistance, please contact us at:</h3>
      <ul>
        <li> • Phone: <h5>8595764714, 7011767872, 9026800325</h5></li>
      </ul>

      <OnlineCourseTable mode={"Online Dashboard"} tableFields={tableFields} />

      <h3>Frequently Asked Questions (FAQs):</h3>
      <ol>
        <li><h6>Q1: What is the duration of the GATE Chemistry Online Batch at ASAP Institute?</h6><br /><h6>A:</h6> The duration of our GATE Chemistry Online Batch varies based on your choice of batch. We offer a 6-month regular batch and a 1-year weekend batch for live online classes with recorded content. We also provide recorded course options spanning 6 months, 1 year, and 2 years for self-paced learning.</li>
        <li><h6>Q2: How can I interact with the faculty during the online classes?</h6><br /><h6>A:</h6> We encourage interactive discussions and doubt-solving during the live online classes. You can also reach out to our faculty members during designated hours for any additional queries or clarifications.</li>
        <li><h6>Q3: Are the recorded lectures available to access at any time?</h6><br /><h6>A:</h6> Yes, for the GATE Chemistry Online Batch with recorded content (6 months, 1 year, and 2 years), you can access the recorded lectures at your convenience. This flexible option allows you to learn at your own pace.</li>
        <li><h6>Q4: What is the advantage of the weekend batch for working professionals and students?</h6><br /><h6>A:</h6> Our 1-year weekend batch is tailored to accommodate the schedules of working professionals and students. It offers the opportunity to attend live online classes during weekends, providing flexibility without compromising on the quality of education.</li>
        <li><h6>Q5: How do I access practice materials and assessments for GATE Chemistry preparation?</h6><br /><h6>A:</h6> Upon enrollment, you will receive access to our comprehensive collection of practice questions, quizzes, and mock tests. These resources are available to help you hone your problem-solving skills and assess your progress.</li>
        <li><h6>Q6: Can I switch from one batch to another during my enrollment?</h6><br /><h6>A:</h6> Our enrollment process allows you to choose the batch that best suits your needs. Switching between batches may be possible, but it's subject to availability and approval. We recommend discussing your requirements with our team for a seamless transition.</li>
        <li><h6>Q7: How does the recorded content benefit GATE Chemistry aspirants?</h6><br /><h6>A:</h6> The recorded content is a valuable resource for students who prefer self-paced learning. It allows you to revisit lectures and study materials at your convenience, reinforcing your understanding of complex topics.</li>
      </ol>

      <p>We're here to support you on your journey to success in the GATE Chemistry examination. If you have any more questions or need further assistance, please feel free to reach out to our team.</p>

    </div>
  )
}

export default GateOnline