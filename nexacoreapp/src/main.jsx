import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvR8EkUnrwpfJs-vWv7M9iK48HmAcdkII",
  authDomain: "nexacore-503.firebaseapp.com",
  projectId: "nexacore-503",
  storageBucket: "nexacore-503.appspot.com",
  messagingSenderId: "346504263909",
  appId: "1:346504263909:web:7565e27cf37f63ceea7c0c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
