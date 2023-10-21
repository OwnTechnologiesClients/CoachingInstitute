import React from 'react'
import axios from 'axios';
import './SearchUser.scss'
const SearchUser = () => {

    const getDetails = async (e) => {
        e.preventDefault();

        const response = await
            axios({
                method: 'post',
                url: 'https://backend-k.onrender.com/api/student/login',
                data: {
                    email: userId,
                    dateofbirth: password
                },
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

        console.log(response)

    }

    return (
        <div className="search-user">

            <div className="heading">
                <h1>Check Student Form</h1>
            </div>

            <div className="form-fields">
                <div className="row">
                    <div>
                        <label htmlFor="course">Course Name</label>
                        <select name="course" id="course" required>
                            <option value="DCA">Diploma in Computer Application (DCA)</option>
                            <option value="DCA">Diploma in Computer Application (DCA)</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="regNo">Registration ID</label>
                        <input type="number" name="regNo" id="regNo" />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <select name="subject" id="subject">
                            <option value="FOC">Fundamentals of Computer</option>
                            <option value="FOC">Fundamentals of Computer</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="phoneNo">Phone Number</label>
                        <input type="number" maxLength={10} name="phoneNo" id="phoneNo" required/>
                    </div>
                </div>

                <div className="search-user-button">
                    <button >Continue</button>
                </div>
            </div>


        </div>
    )
}

export default SearchUser