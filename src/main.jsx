import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMxUL8ofGITzuuDB7uGf1oop06I8eaajQ",
    authDomain: "orpack-e-commerce.firebaseapp.com",
    projectId: "orpack-e-commerce",
    storageBucket: "orpack-e-commerce.appspot.com",
    messagingSenderId: "554336183251",
    appId: "1:554336183251:web:58cedffc05de09c7640526",
    measurementId: "G-VDNSDY09K4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)