// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYg7gNAchrp54BrcLSlE5t0LkVwM5wVng",
  authDomain: "fir-b397d.firebaseapp.com",
  projectId: "fir-b397d",
  storageBucket: "fir-b397d.firebasestorage.app",
  messagingSenderId: "465269718872",
  appId: "1:465269718872:web:255b769507dc3cecb72f2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app,firebaseConfig} 