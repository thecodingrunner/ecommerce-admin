// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "dickiemellie.firebaseapp.com",
    projectId: "dickiemellie",
    storageBucket: "dickiemellie.appspot.com",
    messagingSenderId: "701138105243",
    appId: "1:701138105243:web:da670b26c6c53e381fa73e"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);