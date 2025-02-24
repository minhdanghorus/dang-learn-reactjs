import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    // Setup the listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserInfo(currentUser);
      } else {
        setUserInfo("");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [userInfo]); // only run once on mount
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log("values: ", values);
  };
  console.log("values: ", values);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("user: ", credential);

      await updateProfile(auth.currentUser, {
        displayName: "Jane Q. User",
      });
      setUserInfo(credential);

      const userRef = collection(db, "users");
      await addDoc(userRef, {
        "email": values.email,
        "password": values.password,
        "id": credential.user.uid,
    })
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const handleSignOut = () => {
    signOut(auth);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // credential
    const cred = await signInWithEmailAndPassword(auth, values.email, values.password);
    setUserInfo(cred);
    console.log("cred: ", cred);
    console.log("Login Successfully")
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form action="" className="mb-10" onSubmit={handleCreateUser}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
          ></input>
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          ></input>
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Sign up
          </button>
        </form>
        <div className="mt-10 flex items-center gap-x-5">
          <span>{userInfo?.displayName}</span>
          <button
            className="p-3 bg-purple-500 text-white text-sm font-medium rounded-lg"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form action="" className="mb-10" onSubmit={handleLogin}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
          ></input>
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          ></input>
          <button
            type="submit"
            className="p-3 bg-pink-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseAuth;
