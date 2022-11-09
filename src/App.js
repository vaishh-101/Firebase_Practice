import './App.css';
import { useEffect, useState } from "react";
import { getAuth, 
  onAuthStateChanged,
  signOut
  // createUserWithEmailAndPassword 
} from "firebase/auth";
import { app } from "./firebase";


import SignupPage from "./pages/signup";
import Signin from './pages/signin';

// import {getDatabase, ref, set} from "firebase/database";
// const db = getDatabase(app);




const auth = getAuth(app);

function App(){

  const [user, setUser] = useState(null);

// const signupUser = () => {
// createUserWithEmailAndPassword(
//   auth, 
//      "vaishnavi23456@gmail.com",
//      "vaishnavisgfd123" 
//     ).then((value) => console.log(value));
//   };
  

    // const putData = () => {
    //     set(ref(db, "users/Vaishnavi"), {
    //        id:1,
    //        name : "Vaishnavi Choudhary",
    //        age: 21,
    //     });
    // };

useEffect(() => {
  onAuthStateChanged(auth, user => {
    if(user) {
     // console.log("Hello", user);
     setUser(user);
    }else {
      console.log("You are logged out");
      setUser(null);
    }
  });
}, []);

if (user === null) {
  return (
    <div className="container">
    <SignupPage/>
    <Signin/>
   </div>
  );
} 

    return(
        <div className="container">

<h1>Hello    {user.email}</h1>

        {/* <h1>  Firebase Connection with our Project  </h1> */}
         {/* <button onClick={putData}>Put the Data in realtime database</button> */}
         
         {/* <button onClick={signupUser}>Create User</button> */}

<button onClick={() => signOut(auth)}>Logout</button>


        </div>
    );
}
export default App;
