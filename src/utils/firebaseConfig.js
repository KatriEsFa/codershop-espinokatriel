// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZAfgH2o81yn55DbLHY9U5PkBM-6uue30",
    authDomain: "e-comercecoderhouse.firebaseapp.com",
    projectId: "e-comercecoderhouse",
    storageBucket: "e-comercecoderhouse.appspot.com",
    messagingSenderId: "25891552816",
    appId: "1:25891552816:web:eee62b32172ac969e3b7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;