// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT0Bs08CMrzqUEshHF5EZwxCJz5RnAi5Y",
  authDomain: "learn-firebase-7de91.firebaseapp.com",
  projectId: "learn-firebase-7de91",
  storageBucket: "learn-firebase-7de91.firebasestorage.app",
  messagingSenderId: "291757377946",
  appId: "1:291757377946:web:480ac55bc2408c038e9223",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
export const db = getFirestore(app);
