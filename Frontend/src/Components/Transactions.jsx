import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Transactions() {
    const [typeofTrans, settypeofTrans] = useState("");
    const [amount, setamount] = useState("");
    const [balance, setbalance] = useState("");
    const [username, setusername] = useState("");
    const [accountid, setaccountid] = useState("");
    const navigate = useNavigate();

    // function loginNavi(event) {
    //     event.preventDefault();
    //     navigate('/login');
    // }
    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/transactions/save", {
                accountid: accountid,
                typeofTrans: typeofTrans,
                amount: amount,
                username: username,
                balance: balance,
            });
            navigate('/home');
        } catch (err) {
            alert(err);
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
                    <div class="col-sm-6">

                        <form>
                            <div class="form-group">
                                <label>accountid</label>
                                <input type="number" class="form-control" name="bill_num" id="bill_num" placeholder="Enter bill_num"
                                    value={accountid}
                                    onChange={(event) => {
                                        setaccountid(event.target.value);
                                    }}
                                />
                            </div>
                            <div class="form-group">
                                <label>type of Trans</label>
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
                        <label>amount</label>
                        <input type="number" class="form-control" id="lastName" placeholder="Enter Password"

                            value={amount}
                            onChange={(event) => {
                                setamount(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>balance</label>
                        <input type="number" class="form-control" id="lastName" placeholder="Enter Password"

                            value={balance}
                            onChange={(event) => {
                                setbalance(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>username</label>
                        <input type="Password" class="form-control" id="lastName" placeholder="Enter Password"

                            value={username}
                            onChange={(event) => {
                                setusername(event.target.value);
                            }}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={save} >Pay</button>
                </form>

            </div>
        </div>
            </div >
        </div >
    );
}
export default Transactions;