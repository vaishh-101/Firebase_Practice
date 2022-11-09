import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBgB3Ej2NrajKEwstB_XUGmhsb1N2px3Rw",
    authDomain: "refined-haven-292507.firebaseapp.com",
    projectId: "refined-haven-292507",
    storageBucket: "refined-haven-292507.appspot.com",
    messagingSenderId: "667137939640",
    appId: "1:667137939640:web:bd0de85d32fd52b86cfc4d",
    databaseURL: "https://refined-haven-292507-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);