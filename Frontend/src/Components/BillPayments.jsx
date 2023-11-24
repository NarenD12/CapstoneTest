    // import React from "react";
    // import "./BillPayments.css";
    // import axios from "axios";
    // import { useState } from "react";
    // import { useNavigate } from "react-router-dom";


    // class BillPayments extends React.Component {
    //     constructor() {
    //         super();
    //         this.state = {
    //             fields: {},
    //             errors: {},
    //         };
    //         this.handleChange = this.handleChange.bind(this);
    //         this.submituserRegistrationForm =
    //             this.submituserRegistrationForm.bind(this);
    //     }
    //     navigate=useNavigate();
       
    //     handleChange(e) {
    //         let fields = this.state.fields;
    //         fields[e.target.name] = e.target.value;
    //         this.setState({
    //             fields,
    //         });
    //     }
    //     submituserRegistrationForm(e) {
    //         e.preventDefault();
    //         if (this.validateForm()) {
    //             try {
    //              axios.post("http://localhost:8080/api/transactions/withdraw/"+this.state.fields.accountid, { 
    //                     amount: amount
    //             }            
    //                 );
    //                 navigate('/CardPay');
    //             } catch (err) {
    //                 alert(err);
    //             }
    //             alert("Success");
    //         }
    //     }
    //     validateForm() {
    //         let fields = this.state.fields;
    //         let fvalid = true;
    //         let errors = {};
        
    //         if (!fields["accountid"]) {
    //         fvalid = false;
    //         errors["accountid"] = "*this field cannot be empty";
    //         }
    //         if (fields["accountid"] > 6) {
    //             fvalid = false;
    //             errors["accountid"] = "*Please Enter Valid Account id";
    //         }
    //         if (!fields["accountid"]) {
    //             fvalid = false;
    //             errors["accountid"] = "*Please Enter Valid Account id";
    //         }
    //         if (!fields["Amount"]) {
    //         fvalid = false;
    //         errors["Amount"] = "*field cannot be empty.";
    //         }
        
    //         this.setState({
    //         errors: errors,
    //         });
    //         return fvalid;
    //     }
    //     render() {
    //         return (
    //             <div id="main-registration-container">
    //                 <center><h1>Bill Payments</h1></center>
    //                 <center>
    //                     <table>
    //                         <tr>
    //                             <td>
    //                                 <div id="register">
    //                                     <form
    //                                         method="post"
    //                                         name="userRegistrationForm"
    //                                         onSubmit={this.submituserRegistrationForm}
    //                                     >

    //                                         <label> Type of Transaction &nbsp; &nbsp; &nbsp;</label>
    //                                         <select id="sel"
    //                                             name="Select the Bill Type"
    //                                             value={this.state.fields.username}
    //                                             onChange={this.handleChange}
    //                                         >
    //                                             <option value="option1">DTH payment</option>
    //                                             <option value="option2">Electricity Bill</option>
    //                                             <option value="option2">Phone Bill</option>
    //                                             {/* Add more options as needed */}
    //                                         </select>
    //                                         <div className="errorMsg">
    //                                             {this.state.errors.transaction}
    //                                         </div>
    //                                         <br></br>
    //                                         <br></br>
    //                                         <label>Bill Number</label>
    //                                         <input
    //                                             type="text"
    //                                             name="accountid"
    //                                             value={this.state.fields.accountid}
    //                                             onChange={this.handleChange}
    //                                         />
    //                                         <div className="errorMsg">
    //                                             {this.state.errors.accountid}
    //                                         </div>
    //                                         <label>Amount </label>
    //                                         <input
    //                                             type="number"
    //                                             name="Amount"
    //                                             value={this.state.fields.mobileno}
    //                                             onChange={this.handleChange}
    //                                         />
    //                                         <div className="errorMsg">{this.state.errors.Amount}</div>

    //                                         <button type="submit" className="button"><a href="/Card">Pay Now</a></button>
    //                                     </form>
    //                                 </div>
    //                             </td><td></td><td>
    //                                 <img src="/images/form3.png" height="370px" width="350px" />
    //                             </td>
    //                         </tr>
    //                     </table>
    //                 </center>
    //             </div>
    //         );
    //     }
    // }

    // export default BillPayments;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function DepositWithdraw() {
    const [typeofTrans, settypeofTrans] = useState("");
    const [amount, setamount] = useState("");
    const [balance, setbalance] = useState("");
    const [accountid, setaccountid] = useState("");
    const navigate = useNavigate();

    async function save(event) {
        console.log("Pay")
        event.preventDefault();
       
        try {
            await axios.post("http://localhost:8080/api/transactions/withdraw/"+accountid, { 
                amount: amount
        }            
            );
            navigate('/CardPay');
        } catch (err) {
            alert(err);
        }
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <h2>Bill Payment</h2>
                    <hr />
                </div>

                <div class="row">
                    <div class="col-sm-6" style={{float:"left"}}>
                        <form>
                            <div class="form-group">
                                <label> Account Id</label>
                                <input type="number" class="form-control" name="accountid" id="accountid" placeholder="Enter Account Id"
                                    value={accountid}
                                    onChange={(event) => {
                                        setaccountid(event.target.value);
                                    }}
                                />
                            </div>
                            {/* <div class="form-group">
                                <label>Type of Transaction</label> */}
                             {/* <input type="number" class="form-control" id="lastName" placeholder="Enter Password"

                                    value={typeofTrans}
                                    onChange={(event) => {
                                        settypeofTrans(event.target.value);
                                    }}
                                />  */}
                                {/* <select
                                        name="Select Transaction"
                                        value={typeofTrans}
                                        onChange={(event) => {
                                        settypeofTrans(event.target.value);
                                        }}>
                                            <option value="">Select</option>
                                            <option value="Deposit">Deposit</option>
                                            <option value="Withdraw">Withdraw</option>
                                        </select>
                            </div> */}
                            <div>
                            <label> Type of Transaction &nbsp; &nbsp; &nbsp;</label>
                                             <select id="sel"
                                                name="Select the Bill Type"
                                                value={typeofTrans}
                                                onChange={(event) => {
                                                    settypeofTrans(event.target.value);
                                                    }}
                                            >
                                                <option value="DTHPayment">DTH payment</option>
                                                <option value="Electricity">Electricity Bill</option>
                                                <option value="PhoneBill">Phone Bill</option>
                                                 {/* {/* Add more options as needed */}
                                            </select> 
                            </div>
                    <div class="form-group">
                        <label>Amount</label>
                        <input type="number" class="form-control" id="amount" placeholder="Enter Amount"

                            value={amount}
                            onChange={(event) => {
                                setamount(event.target.value);
                            }}
                        />
                    </div>
                    {/* <div class="form-group">
                        <label>balance</label>
                        <input type="number" class="form-control" id="lastName" placeholder="Enter Password"

                            value={balance}
                            onChange={(event) => {
                                setbalance(event.target.value);
                            }}
                        />
                    </div> */}
                    {/* <div class="form-group">
                        <label>username</label>
                        <input type="Password" class="form-control" id="lastName" placeholder="Enter Password"

                            value={username}
                            onChange={(event) => {
                                setusername(event.target.value);
                            }}
                        />
                    </div> */}
                    <button type="submit" class="btn btn-primary" onClick={save}>Deposit/Withdraw</button>
                </form>
            </div>
            <div class="col-sm-6" style={{float:"right",marginTop:"20px"}}>
            <img src="https://bettingscanner-com.imgix.net/assets/local/_1200x630_crop_center-center_82_none/top-3-safest-sportsbook-deposit-withdrawal-methods.jpg?mtime=1619519717" style={{float:"right"}}></img>

            </div>
        </div>
            </div >
        </div >
    );
}
export default DepositWithdraw;