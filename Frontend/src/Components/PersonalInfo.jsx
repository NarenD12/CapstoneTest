import React, { useState, useEffect } from "react";
//import Service from "./Service";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function PersonalInfo(){

    const [datas, setData]=useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://localhost:8080/api/user/1').then((response) => {
            setData(response.data)
            console.log(response.data);
        });
    };
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Personal Details</h1>
            <table border="1" style={{marginLeft:"auto",marginRight:"auto"}}>
                <thead>
                    {
                        datas.map(
                            data =>
                                <tr key={data.userid}>
                                    <tr><td>First Name</td><td>{data.firstname}</td></tr>
                                    <tr><td>Last Name</td><td>{data.lastname}</td></tr>
                                    <tr><td>Email</td><td>{data.email}</td></tr>
                                    <tr><td>Mobile Number</td><td>{data.mobileno}</td></tr>
                                    <tr><td>Address</td><td>{data.address}</td></tr>
                                    <tr><td>DateofBirth</td><td>{data.dob}</td></tr>
                                    <tr><td>State</td><td>{data.state}</td></tr>
                                    <tr><td>PinCode</td><td>{data.pincode}</td></tr>
                                </tr>
                        )
                    }
                </thead>
                <tbody>
                    <tr><td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editproduct/${datas.userid}`}
                  >
                    Update
                  </Link>
                  </td></tr>
                </tbody>
            </table >
        </div >
    );
}
export default PersonalInfo;