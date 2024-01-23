import React, { useState } from 'react'
import './OnlineCourseTable.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import axios from 'axios';
import { SetCurrentUser } from "../../redux/userSlice";
import Loader from '../loaderSpinner/Loader'

const OnlineCourseTable = ({ mode, tableFields }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    // const handleEnroll = async (courseItem) => {
    //     if (!localStorage.getItem('token')) {
    //         navigate('/student-login')
    //     }
    //     setIsLoading(true)
    //     const response = await
    //         axios({
    //             method: 'get',
    //             url: 'https://chemtime-backend-0duz.onrender.com/api/student/get-current-user',
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem("token")}`
    //             }
    //         });
    //     // console.log(response.data.data);
    //     if (!response.data.success) {
    //         localStorage.removeItem("token");
    //         navigate("/student-login");
    //     }
    //     const { studentname, contactnumber, dateofbirth, email, city, state, pincode, address, fathername, myfilename } = response.data.data;

    //     const courseData = {}
    //     courseData['coursename'] = courseItem[0];
    //     courseData['courseduration'] = courseItem[1];
    //     courseData['coursetype'] = courseItem[2];
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
    //         // navigate('/form')
    //         navigate("/form", { state: { currentUser: courseData } });
    //     }
    //     else {
    //         navigate('/student-login')
    //     }
    // }

    const handleEnroll = async (courseItem) => {
        if (courseItem[3] === 24990 && courseItem[0] === "Flutter Trainee") {
            window.open("https://rzp.io/l/wiCpyknClr", '_blank');
        } else if (courseItem[3] === 34990 && courseItem[0] === "Flutter Hustler") {
            window.open("https://rzp.io/l/FnHJEFekJP", '_blank');
        } else if (courseItem[3] === 44990 && courseItem[0] === "Flutter Expert") {
            window.open("https://rzp.io/l/zWVdx8h61", '_blank');
        }else if (courseItem[3] === 8990 && courseItem[0] === "Flutter Trainee") {
            window.open("https://rzp.io/l/cK3rOYyTOf", '_blank');
        }else if (courseItem[3] === 13990 && courseItem[0] === "Flutter Hustler") {
            window.open("https://rzp.io/l/qjQm0IuQ3E", '_blank');
        }else if (courseItem[3] === 17990 && courseItem[0] === "Flutter Expert") {
            window.open("https://rzp.io/l/PsS8yssqBR", '_blank');

        }else if (courseItem[3] === 24990 && courseItem[0] === "ReactJS Trainee") {
            window.open("https://rzp.io/l/MC7qxEp7Sd", '_blank');
        }else if (courseItem[3] === 34990 && courseItem[0] === "ReactJS Hustler") {
            window.open("https://rzp.io/l/EFHiwJgtn", '_blank');
        }else if (courseItem[3] === 44990 && courseItem[0] === "ReactJS Expert") {
            window.open("https://rzp.io/l/oUnG3mhw", '_blank');
        }else if (courseItem[3] === 8990 && courseItem[0] === "ReactJS Trainee") {
            window.open("https://rzp.io/l/jQo0ftpQeB", '_blank');
        }else if (courseItem[3] === 13990 && courseItem[0] === "ReactJS Hustler") {
            window.open("https://rzp.io/l/026Nf4gz61", '_blank');
        }else if (courseItem[3] === 17990 && courseItem[0] === "ReactJS Expert") {
            window.open("https://rzp.io/l/uaMmExqy7", '_blank');
        }

        else if (courseItem[3] === 24990 && courseItem[0] === "NextJS Trainee") {
            window.open("https://rzp.io/l/3Wvj3Vta", '_blank');
        }else if (courseItem[3] === 34990 && courseItem[0] === "NextJS Hustler") {
            window.open("https://rzp.io/l/jaqLunXBb", '_blank');
        }else if (courseItem[3] === 44990 && courseItem[0] === "NextJS Expert") {
            window.open("https://rzp.io/l/1ZD585NjGb", '_blank');
        }else if (courseItem[3] === 8990 && courseItem[0] === "NextJS Trainee") {
            window.open("https://rzp.io/l/rFNKPD5NY5", '_blank');
        }else if (courseItem[3] === 13990 && courseItem[0] === "NextJS Hustler") {
            window.open("https://rzp.io/l/lJlJiY816", '_blank');
        }else if (courseItem[3] === 17990 && courseItem[0] === "NextJS Expert") {
            window.open("https://rzp.io/l/ufJ92yX", '_blank');
        }

        else if (courseItem[3] === 24990 && courseItem[0] === "NodeJS Trainee") {
            window.open("https://rzp.io/l/mYbONQMJm", '_blank');
        }else if (courseItem[3] === 34990 && courseItem[0] === "NodeJS Hustler") {
            window.open("https://rzp.io/l/Ony1mKjk", '_blank');
        }else if (courseItem[3] === 44990 && courseItem[0] === "NodeJS Expert") {
            window.open("https://rzp.io/l/kpPmZOT", '_blank');
        }else if (courseItem[3] === 8990 && courseItem[0] === "NodeJS Trainee") {
            window.open("https://rzp.io/l/fsfgErB7", '_blank');
        }else if (courseItem[3] === 13990 && courseItem[0] === "NodeJS Hustler") {
            window.open("https://rzp.io/l/614PU39gH", '_blank');
        }else if (courseItem[3] === 17990 && courseItem[0] === "NodeJS Expert") {
            window.open("https://rzp.io/l/9glqYkUfqT", '_blank');
        }

        else if (courseItem[3] === 29990 && courseItem[0] === "MERN Stack Trainee") {
            window.open("https://rzp.io/l/xGSu7OeL", '_blank');
        }else if (courseItem[3] === 39900 && courseItem[0] === "MERN Stack Hustler") {
            window.open("https://rzp.io/l/vorfvw8yFF", '_blank');
        }else if (courseItem[3] === 49900 && courseItem[0] === "MERN Stack Expert") {
            window.open("https://rzp.io/l/251cPY3", '_blank');
        }else if (courseItem[3] === 13990 && courseItem[0] === "MERN Stack Trainee") {
            window.open("https://rzp.io/l/FuNMUqTY", '_blank');
        }else if (courseItem[3] === 19990 && courseItem[0] === "MERN Stack Hustler") {
            window.open("https://rzp.io/l/l2Ha7qA", '_blank');
        }else if (courseItem[3] === 23990 && courseItem[0] === "MERN Stack Expert") {
            window.open("https://rzp.io/l/k7AFFpmj", '_blank');
        }

        else{
            console.log("====<<>>>  ",courseItem[3] + courseItem[0]);
        }
    }

    return (
        <div className='course-table'>
            {isLoading ? <Loader /> : ""}

            <div className="dashboard">
                <h1>{mode}</h1>
                <div className="parent-row">
                    <span>Course</span>
                    <span>Duration</span>
                    <span>Batch Type</span>
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
                                <button onClick={() => {

                                    // if (item[3] === 25000) {
                                    //     // <a href="https://www.facebook.com/chmtime?mibextid=ZbWKwL"target="_blank"/>
                                    //     <Link href="https://rzp.io/l/wiCpyknClr" />

                                    //     console.log("---->>>>", item[3]);
                                    // } else {
                                    //     console.log("====<<>>>", "flase");
                                    // }
                                    handleEnroll(item)
                                }}
                                >Enroll Now</button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default OnlineCourseTable