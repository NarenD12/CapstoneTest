import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
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
                            <div>
                            <label> Type of Transaction &nbsp; &nbsp; &nbsp;</label>
                                             <select id="sel"
                                                name="Select the Bill Type"
                                                value={typeofTrans}
                                                onChange={(event) => {
                                                    settypeofTrans(event.target.value);
                                                    }}
                                            >
                                                <option value="DTHPaymentBill">DTH payment</option>
                                                <option value="ElectricityBill">Electricity Bill</option>
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