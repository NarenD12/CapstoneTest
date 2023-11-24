import React, { useState, useEffect } from "react";
//import Service from "./Service";
import axios from "axios";
function Successful() {

    const [table, setComponent] = useState([])
    //const { userid} = useParams();
    useEffect(() => {
        getComponent()
    }, [])
    const getComponent = () => {
        axios.get('http://localhost:8080/api/transactions/details').then((response) => {

            setComponent(response.data)
            console.log(response.data);
        });
    }
    return(
        <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <img src="Images/success.png" alt="Centered Image" />
      </div>
<div>
{/* <h1>Table</h1> */}
<table border="0.01" align="center">
    {/* <thead>
        <tr>
            <td>Balance:</td>
        </tr>
    </thead> */}
    <tbody>
        {
            table.map(
                table =>
                    <tr key={table.accountid} style={{fontSize:"30px", fontFamily:"fantasy"}}>
                      Balance : <td>{table.balance}</td>
                        
                    </tr>
                    
            )
        }
        <br></br><tr style={{fontSize:"20px", fontFamily:"fantasy"}}><td><a href="/home" style={{alignContent:"center"}}>Back to Home</a></td></tr>
    </tbody>
    
</table >

</div>
</>
    )
}
export default Successful