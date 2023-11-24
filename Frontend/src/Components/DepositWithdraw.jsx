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
        if(typeofTrans == "Deposit")
        try {
            await axios.post("http://localhost:8080/api/transactions/deposit/"+accountid, { 
                amount: amount
        }            
            );
            try {
                axios.post("http://localhost:8080/api/past/save", { 
                accountid:accountid,
                typeofTrans:typeofTrans,   
                amount: amount
            }            
                );
                navigate('/CardPay');
            } catch (err) {
                alert(err);
            }
            console.log("any");
            navigate('/Cardpay');
        } catch (err) {
            alert(err);
        }
        else if(typeofTrans == "Withdraw")
        try {
            await axios.post("http://localhost:8080/api/transactions/withdraw/"+accountid, { 
                amount: amount
        }            
            );
            try {
                axios.post("http://localhost:8080/api/past/save", { 
                accountid:accountid,
                typeofTrans:typeofTrans,   
                amount: amount
            }            
                );
                navigate('/CardPay');
            } catch (err) {
                alert(err);
            }
            navigate('/CardPay');
        } catch (err) {
            alert(err);
        }
        else{
            alert("Choose Valid Type of Transactions");
        }
        
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <h2>Deposit or Withdraw</h2>
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
                            <div class="form-group">
                                <label>Type of Transaction</label>
                             {/* <input type="number" class="form-control" id="lastName" placeholder="Enter Password"

                                    value={typeofTrans}
                                    onChange={(event) => {
                                        settypeofTrans(event.target.value);
                                    }}
                                />  */}
                                <select
                                        name="Select Transaction"
                                        value={typeofTrans}
                                        onChange={(event) => {
                                        settypeofTrans(event.target.value);
                                        }}>
                                            <option value="">Select</option>
                                            <option value="Deposit">Deposit</option>
                                            <option value="Withdraw">Withdraw</option>
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
                    <button type="submit" class="btn btn-primary" onClick={save}>Pay</button>
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