import React, { useState, useEffect } from "react";
import axios from "axios";
function PastTransactions(){
    const [datas, setData]=useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://localhost:8080/api/past/details').then((response) => {
            setData(response.data)
            console.log(response.data);
        });
    };
    return(
        <div>
            {/* <form>
                <input className="accountid" type="number" placeholder="Enter AccountId"></input>
                <button type="submit">Submit</button>
            </form> */}
            <h1 style={{textAlign:"center"}}>Transactions</h1>
            <table border="1" style={{marginLeft:"auto",marginRight:"auto"}}>
                <thead>
                    <tr>
                        <th> Account_id</th>
                        <th> Bill Number</th>
                        <th> Type Of Transaction</th>
                        <th> Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map(
                            data =>
                                <tr key={data.billid}>
                                    <td>{data.accountid}</td>
                                    <td>{data.billid}</td>
                                    <td>{data.typeofTrans}</td>
                                    <td>{data.amount}</td>
                                    {/* <td>{data.username}</td> */}
                                    {/* <td>{data.balance}</td> */}
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PastTransactions;