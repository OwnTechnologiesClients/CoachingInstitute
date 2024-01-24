import React, { useState } from 'react'
import './CourseTable.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import axios from 'axios';
import { SetCurrentUser } from "../../redux/userSlice";
import Loader from '../loaderSpinner/Loader'

const CourseTable = ({ mode, tableFields }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    // const handleEnroll = async (courseItem) => {
    //     if (!localStorage.getItem('token')) {
    //         navigate('/student-login')
    //     }
    //     setIsLoading(true);
    //     const response = await
    //         axios({
    //             method: 'get',
    //             url: 'https://chemtime-backend-0duz.onrender.com/api/student/get-current-user',
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem("token")}`
    //             }
    //         });
    //     console.log(response.data.data);
    //     const { studentname, contactnumber, dateofbirth, email, city, state, pincode, address, fathername, myfilename } = response.data.data;

    //     const courseData = {}
    //     courseData['coursename'] = courseItem[0];
    //     courseData['courseduration'] = courseItem[2];
    //     courseData['price'] = courseItem[3];

    //     if (localStorage.getItem('token')) {
    //         courseData['studentname'] = studentname;
    //         courseData['contactnumber'] = contactnumber;
    //         courseData['dateofbirth'] = dateofbirth;
    //         courseData['email'] = email;
    //         courseData['city'] = city;
    //         courseData['state'] = state;
    //         courseData['pincode'] = pincode;
    //         courseData['address'] = address;
    //         courseData['fathername'] = fathername;
    //         courseData['filename'] = myfilename;
    //         dispatch(SetCurrentUser(courseData));
    //         navigate('/form')
    //     }
    //     else {
    //         navigate('/student-login')
    //     }
    // }


    const handleEnroll = async (courseItem) => {
        if (courseItem[3] === 29990 && courseItem[0] === "Flutter Trainee") {
            window.open("https://rzp.io/l/pTd9HkI0", '_blank');
        } else if (courseItem[3] === 39990 && courseItem[0] === "Flutter Hustler") {
            window.open("https://rzp.io/l/Gbfn9ak8i2", '_blank');
        } else if (courseItem[3] === 49990 && courseItem[0] === "Flutter Expert") {
            window.open("https://rzp.io/l/xCjvGIbjY", '_blank');
        } else if (courseItem[3] === 14990 && courseItem[0] === "Flutter Trainee") {
            window.open("https://rzp.io/l/NhpSmA2m", '_blank');
        } else if (courseItem[3] === 19990 && courseItem[0] === "Flutter Hustler") {
            window.open("https://rzp.io/l/gd5EYXmP", '_blank');
        } else if (courseItem[3] === 23990 && courseItem[0] === "Flutter Expert") {
            window.open("https://rzp.io/l/XxXQU7Jl", '_blank');
        }

        else if (courseItem[3] === 29990 && courseItem[0] === "ReactJS Trainee") {
            window.open("https://rzp.io/l/odlafQNmQ0", '_blank');
        } else if (courseItem[3] === 39990 && courseItem[0] === "ReactJS Hustler") {
            window.open("https://rzp.io/l/ZtUNbLk", '_blank');
        } else if (courseItem[3] === 49990 && courseItem[0] === "ReactJS Expert") {
            window.open("https://rzp.io/l/1p8CNeDQ", '_blank');
        } else if (courseItem[3] === 14990 && courseItem[0] === "ReactJS Trainee") {
            window.open("https://rzp.io/l/sstQTjLuD", '_blank');
        } else if (courseItem[3] === 19990 && courseItem[0] === "ReactJS Hustler") {
            window.open("https://rzp.io/l/tecNKE6Bt", '_blank');
        } else if (courseItem[3] === 23990 && courseItem[0] === "ReactJS Expert") {
            window.open("https://rzp.io/l/LqfkdQE", '_blank');
        }

        else if (courseItem[3] === 29990 && courseItem[0] === "NextJS Trainee") {
            window.open("https://rzp.io/l/p9fF6AD1", '_blank');
        } else if (courseItem[3] === 39990 && courseItem[0] === "NextJS Hustler") {
            window.open("https://rzp.io/l/OzvrZUruN", '_blank');
        } else if (courseItem[3] === 49990 && courseItem[0] === "NextJS Expert") {
            window.open("https://rzp.io/l/fUC6QNlty2", '_blank');
        } else if (courseItem[3] === 14990 && courseItem[0] === "NextJS Trainee") {
            window.open("https://rzp.io/l/xPPKnGxvV", '_blank');
        } else if (courseItem[3] === 19990 && courseItem[0] === "NextJS Hustler") {
            window.open("https://rzp.io/l/G8Cj9sPY", '_blank');
        } else if (courseItem[3] === 23990 && courseItem[0] === "NextJS Expert") {
            window.open("https://rzp.io/l/v3d5Qoqfgv", '_blank');
        }

        else if (courseItem[3] === 29990 && courseItem[0] === "NodeJS Trainee") {
            window.open("https://rzp.io/l/kDpjJYPEY", '_blank');
        } else if (courseItem[3] === 39990 && courseItem[0] === "NodeJS Hustler") {
            window.open("https://rzp.io/l/WG7i19Z54", '_blank');
        } else if (courseItem[3] === 49990 && courseItem[0] === "NodeJS Expert") {
            window.open("https://rzp.io/l/qEdrMPCuk", '_blank');
        } else if (courseItem[3] === 14990 && courseItem[0] === "NodeJS Trainee") {
            window.open("https://rzp.io/l/j2Yteu4RhZ", '_blank');
        } else if (courseItem[3] === 19990 && courseItem[0] === "NodeJS Hustler") {
            window.open("https://rzp.io/l/rNEfn0dB", '_blank');
        } else if (courseItem[3] === 23990 && courseItem[0] === "NodeJS Expert") {
            window.open("https://rzp.io/l/gaEbqTv", '_blank');
        }

        else if (courseItem[3] === 34990 && courseItem[0] === "MERN Stack Trainee") {
            window.open("https://rzp.io/l/58tHBk7rB", '_blank');
        } else if (courseItem[3] === 44990 && courseItem[0] === "MERN Stack Hustler") {
            window.open("https://rzp.io/l/83qgAL517", '_blank');
        } else if (courseItem[3] === 54990 && courseItem[0] === "MERN Stack Expert") {
            window.open("https://rzp.io/l/JalAhDMEd6", '_blank');
        } else if (courseItem[3] === 17990 && courseItem[0] === "MERN Stack Trainee") {
            window.open("https://rzp.io/l/el3F1U4T", '_blank');
        } else if (courseItem[3] === 23990 && courseItem[0] === "MERN Stack Hustler") {
            window.open("https://rzp.io/l/CIozZ3sCLM", '_blank');
        } else if (courseItem[3] === 27990 && courseItem[0] === "MERN Stack Expert") {
            window.open("https://rzp.io/l/MC4SFkdn8", '_blank');
        }

        else {
            console.log("====<<>>>OFFLINE  ", courseItem[3] + courseItem[0]);
        }
    }




    return (
        <div className='course-table'>
            {isLoading ? <Loader /> : ""}
            <div className="dashboard">
                <h1>{mode}</h1>
                <div className="parent-row">
                    <span>Course</span>
                    <span>Class Time</span>
                    <span>Course Duration</span>
                    <span>Price</span>
                    <span>Registration</span>
                </div>
                {
                    tableFields.map((item, index) => {
                        return (
                            <div className="child-row" key={index}>
                                <span>{item[0]}</span>
                                <span>{item[1]}</span>
                                <span>{item[2]}</span>
                                <span>₹ {item[3]}</span>
                                <button onClick={() => handleEnroll(item)}>Enroll Now</button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default CourseTable