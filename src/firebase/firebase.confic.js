// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDGLVcclB2sQGp0oDgQl2KQ0WJBrfKATE",
    authDomain: "car-mechanic-66bbf.firebaseapp.com",
    projectId: "car-mechanic-66bbf",
    storageBucket: "car-mechanic-66bbf.appspot.com",
    messagingSenderId: "378633477393",
    appId: "1:378633477393:web:8e35c50503834695ef40b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;