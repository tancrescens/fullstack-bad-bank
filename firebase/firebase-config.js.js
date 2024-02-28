// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXOExulJBaP8dxgSkcE7cDz15dUbwtsVE",
  authDomain: "fullstack-badbank-9c6ea.firebaseapp.com",
  projectId: "fullstack-badbank-9c6ea",
  storageBucket: "fullstack-badbank-9c6ea.appspot.com",
  messagingSenderId: "226041539995",
  appId: "1:226041539995:web:2a0b9e3a2819969c7c453e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
