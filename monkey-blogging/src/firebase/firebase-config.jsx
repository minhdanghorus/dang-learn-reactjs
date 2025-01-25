// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAegS-zXaQoU4KxcNpJIz8LbDZMVzl33E",
  authDomain: "monkey-blogging-7fe9d.firebaseapp.com",
  projectId: "monkey-blogging-7fe9d",
  storageBucket: "monkey-blogging-7fe9d.firebasestorage.app",
  messagingSenderId: "796323085778",
  appId: "1:796323085778:web:6c4fe42e47e5481d291c0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
