import React, { useRef, useState } from 'react'
import axios from 'axios';
import './SearchUser.scss'

const SearchUser = () => {

    const uniqueId = useRef();
    const idNumber = useRef();

    const [fetchedData, setFetchedData] = useState([]);

    const getDetails = async (e) => {
        e.preventDefault();

        let CN = "";
        let RN = "";

        if (uniqueId.current.value === "phonenumber") {
            CN = idNumber.current.value;
        }
        else {
            RN = idNumber.current.value;
        }
        const response = await
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/admin/get-adminpage-details',
                data: {
                    contactnumber: CN,
                    registrationnumber: RN
                },
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

        setFetchedData(response.data.data)

    }

    return (
        <div className="search-user">

            <div className="heading">
                <h1>Check Student Form</h1>
            </div>

            <div className="form-fields">
                <div className="row">

                    <div>
                        <label htmlFor="course">Choose unique Id</label>
                        <select ref={uniqueId} name="course" id="course" required>
                            <option value="registrationnumber">Registration ID</option>
                            <option value="phonenumber">Phone Number</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="uniqueId">Enter unique Id</label>
                        <input ref={idNumber} type="text" name="uniqueId" id="uniqueId" required />
                    </div>

                    <div>
                        {fetchedData.map((item, index) => {
                            return <h1 key={index}>{item.coursename}</h1>
                        })}
                    </div>
                </div>

                <div className="search-user-button">
                    <button onClick={getDetails}>Continue</button>
                </div>
            </div>


        </div>
    )
}

export default SearchUser