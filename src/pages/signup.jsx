import React, {useState} from "react";
import {getAuth, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import {app} from "../firebase"


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const createUser = () => (
    createUserWithEmailAndPassword(auth, email, password).then(value => alert('successfully Created a User'))
);
const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
}


    return (
        <div className = "signup-page">
            <h1>Sign Up Page</h1>
            <br/>
            <br/>
            <label>Email</label>
            <input 
            onChange={(e) => setEmail(e.target.value)} 
            value ={email}
             required 
             placeholder="Enter Your Email"/>
             <br/>
             <br/>
            <label>PassWord</label>
            <input 
            onChange={(e) => setPassword(e.target.value)} 
            value ={password}
            required 
            placeholder="Enter Your password"/>
            <br/>
            <br/>
            <button onClick={createUser}>Signup</button>
            <br/>
            <br/>
            <button onClick={signupWithGoogle} > Sign in With Google </button>
            
        </div>
    )
}

export default SignupPage;