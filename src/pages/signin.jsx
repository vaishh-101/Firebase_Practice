import React, {useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {app} from "../firebase"

const auth = getAuth(app)

const Signin = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const signinUser = () => (
    signInWithEmailAndPassword(auth, email, password)
    .then(value => alert('successfully signedIn '))
    .catch((err) => console.log(err))
);

    return (
        <div className = "signin-page">
            <h1>Sign IN Page</h1>
            <br/>
            <br/>
            <label>Enter your Email</label>
            <input 
            onChange={(e) => setEmail(e.target.value)} 
            value ={email}
             required 
             placeholder="Enter Your Email"/>
             <br/>
             <br/>
            <label>Enter your Password</label>
            <input onChange={(e) => setPassword(e.target.value)} 
            value ={password}
            required 
            placeholder="Enter Your password"/>
            <br/>
            <br/>
            <button onClick={signinUser}>Sign me IN</button>
            
        </div>
    )
}

export default Signin;