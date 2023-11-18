import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOVEerZHELWa9j6j4GUIVlysFYR7nQFw8",
  authDomain: "proyectoreact-escaray.firebaseapp.com",
  projectId: "proyectoreact-escaray",
  storageBucket: "proyectoreact-escaray.appspot.com",
  messagingSenderId: "672559557808",
  appId: "1:672559557808:web:14d21d521b485ca7799f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
