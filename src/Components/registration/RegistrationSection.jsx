import React, { useState, useRef } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Registration.scss'
import Loader from '../loaderSpinner/Loader'

const RegistrationSection = () => {
    const [inputType, setInputType] = useState('text');
    // const [isLoading, setIsLoading] = useState(true)

    const email = useRef();
    const course = useRef();
    const number = useRef();
    const dateofbirth = useRef();
    const form = useRef();

    //date of birth input functions
    const handleFocus = () => {
        setInputType('date');
    };

    const handleBlur = () => {
        setInputType('text');
    };

    //Function to handle and send details to backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // setIsLoading(true)

            const response = await
                axios({
                    method: 'post',
                    url: 'https://backend-k.onrender.com/api/student/free-registration',
                    data: {
                        email: email.current.value,
                        coursename: course.current.value,
                        phonenumber: number.current.value,
                        dateofbirth: dateofbirth.current.value,
                    },
                    headers: {

                    }
                });
            console.log(response);
            form.current.reset();

        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error, maybe show an error message to the user
        }
        // setIsLoading(false)
        toast.success('Registration successfully!', {
            position: 'bottom-right',
            autoClose: 2000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className="registration">
            {/* {isLoading ? <Loader /> : ""} */}
            <h1>Get A Free <span>Registration</span>! </h1>
            <form onSubmit={handleSubmit} ref={form}>
                <input ref={email} type="email" name="email" id="email" placeholder='Enter Email' />
                <select ref={course} name="course" id="course">
                    <option value="Select" disabled selected>Select Course</option>
                    <option value="CSIR-NET Chemical Sciences">CSIR-NET Chemical Sciences</option>
                    <option value="GATE Chemistry">GATE Chemistry</option>
                    <option value="IIT-JAM Chemistry">IIT-JAM Chemistry</option>
                    <option value="CUET (PG) Chemistry">CUET (PG) Chemistry</option>
                </select>
                <input ref={number} type="number" name="phone" id="phone" placeholder='Phone Number' />
                <input ref={dateofbirth} name="dob" id="dob"
                    placeholder='Date Of Birth'
                    type={inputType}
                    onFocus={handleFocus}
                    onBlur={handleBlur} />
                <button type="submit" id='submit'>Submit Now</button>
            </form>
            <ToastContainer closeButton={false} />
        </div>
    )
}

export default RegistrationSection