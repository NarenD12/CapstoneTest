import React, { useState, useEffect } from "react";
//import Service from "./Service";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function PersonalInfo() {
    const [table, setComponent] = useState([])
 //   const {userid} = useParams();
    useEffect(() => {
        getComponent()
    }, [])
    const getComponent = () => {
        axios.get("http://localhost:8080/api/user/1").then((response) => {
            setComponent(response.data)
            console.log(response.data);
        });
    }
    return (
        <div>
            <h1>Table</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Mobile Number</td>
                        <td>Address</td>
                        <td>DateofBirth</td>
                        <td>State</td>
                        <td>PinCode</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        table.map(
                            table =>
                                <tr key={table.userid}>
                                    <td>{table.firstname}</td>
                                    <td>{table.lastname}</td>
                                    <td>{table.email}</td>
                                    <td>{table.mobileno}</td>
                                    <td>{table.address}</td>
                                    <td>{table.dob}</td>
                                    <td>{table.state}</td>
                                    <td>{table.pincode}</td>
                                </tr>
                        )
                    }
                    <tr><td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editproduct/${table.userid}`}
                  >
                    Update
                  </Link></td></tr>
                </tbody>
            </table >
        </div >
    );
}
export default PersonalInfo;