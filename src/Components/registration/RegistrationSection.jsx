import React, { useState } from 'react'
import './Registration.scss'

const RegistrationSection = () => {
    const [inputType, setInputType] = useState('text');

    const handleFocus = () => {
        setInputType('date');
    };

    const handleBlur = () => {
        setInputType('text');
    };
  return (
    <div className="registration">
                <h1>Get A Free <span>Registration</span>! </h1>
                <form>
                    <input type="email" name="email" id="email" placeholder='Enter Email' />
                    <select name="course" id="course">
                        <option value="Select" disabled selected>Select Course</option>
                        <option value="course1">course1</option>
                        <option value="course2">course2</option>
                    </select>
                    <input type="number" name="phone" id="phone" placeholder='Phone Number' />
                    <input name="dob" id="dob"
                        placeholder='Date Of Birth'
                        type={inputType}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />
                    <button type="submit" id='submit'>Submit Now</button>
                </form>
            </div>
  )
}

export default RegistrationSection