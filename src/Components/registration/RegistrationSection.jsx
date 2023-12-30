import React, { useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registration.scss";
import Loader from "../loaderSpinner/Loader";
import emailjs from "@emailjs/browser";

const RegistrationSection = () => {
  const [inputType, setInputType] = useState("text");
  const [isLoading, setIsLoading] = useState(false);

  const email = useRef();
  const course = useRef();
  const number = useRef();
  const dateofbirth = useRef();
  const form = useRef();

  //date of birth input functions
  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  //Function to handle and send details to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      email.current.value &&
      course.current.value &&
      number.current.value &&
      dateofbirth.current.value
    ) {
      try {
        // const response = await axios({
        //   method: "post",
        //   url: "https://backend-k.onrender.com/api/student/free-registration",
        //   data: {
        //     email: email.current.value,
        //     coursename: course.current.value,
        //     phonenumber: number.current.value,
        //     dateofbirth: dateofbirth.current.value,
        //   },
        //   headers: {},
        // });
        // console.log(response);

        const tempparamas = {
          email:email.current.value ,
          course: course.current.value ,
          phone: number.current.value ,
          dob: dateofbirth.current.value
        }
        emailjs
          .send(
            "service_89es95f",
            "template_15vr48a",
            tempparamas,
            "VPawiZbhu5LiJfU63"
          )
          .then(
            (result) => {
              console.log(result)
            },
            (error) => {
              console.log("emailerrpor", error);
            }
          );
        form.current.reset();
        setIsLoading(false);
        toast.success("Registration successfully!", {
          position: "bottom-right",
          autoClose: 2000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
        toast.warning("some error occured");
        setIsLoading(false);

        console.error("Error sending data:", error);
        // Handle error, maybe show an error message to the user
      }
    } else {
      toast.warning("Enter All fields");
      setIsLoading(false);
      return;
    }
  };
  return (
    <div className="registration">
      {isLoading ? <Loader /> : ""}
      <h1>
        Get A Free <span>Registration</span>!{" "}
      </h1>
      <form onSubmit={handleSubmit} ref={form}>
        <input
          ref={email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
        />
        <select ref={course} name="course" id="course">
          <option value="" disabled selected>
            Select Course
          </option>
          <option value="CSIR-NET Chemical Sciences">
            CSIR-NET Chemical Sciences
          </option>
          <option value="GATE Chemistry">GATE Chemistry</option>
          <option value="IIT-JAM Chemistry">IIT-JAM Chemistry</option>
          <option value="CUET (PG) Chemistry">CUET (PG) Chemistry</option>
          <option value="Scholarship Program">Scholarship Program</option>
        </select>
        <input
          ref={number}
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone Number"
        />
        <input
          ref={dateofbirth}
          name="dob"
          id="dob"
          placeholder="Date Of Birth"
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button type="submit" id="submit">
          Submit Now
        </button>
      </form>
      <ToastContainer closeButton={false} />
    </div>
  );
};

export default RegistrationSection;
