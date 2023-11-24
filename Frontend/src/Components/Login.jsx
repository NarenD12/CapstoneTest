import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Captcha from "./Captcha";
//import { useNavigate } from "react-router-dom";
function Login() {

    const [email, setemailId] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");
    
    const handleLogin = () => {
        if (!email.trim()) {
            setError("*Please Enter your Email");
            return;
        }
        if (!password.trim()) {
            setError("*Please Enter your Password");
            return;
        }
        setLoggedIn(true);
    };
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const navigate = useNavigate();
     function login(event) {
        event.preventDefault();
        try {
             axios.post("http://localhost:8080/api/user/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message == "emailId not exist") {
                    alert("Please Enter Valid Email");
                }
                else if (res.data.message == "Login Success") {
                    navigate('/home');
                }
                else {
                    alert("Incorrect Email or Password");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <h2>Login</h2>
                    <hr />
                </div>

                <div class="row">
                    <div class="col-sm-6">

                        <form>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name="emailId" id="emailId" placeholder="Enter Email"

                                    value={email}
                                    onChange={(event) => {
                                        setemailId(event.target.value);
                                    }}

                                />

                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="Password" class="form-control" id="lastName" placeholder="Enter Password"

                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}

                                />
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
                        </form>
                        <br></br>
                        <Captcha/>
                        <a href="/Register" style={{color:"#41FF59"}}>Not Member? Register.</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;