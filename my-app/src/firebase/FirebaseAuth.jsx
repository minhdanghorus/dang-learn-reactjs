import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "./firebase-config";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState("");
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
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    if (user) {
      setUserInfo(user);
    }
    console.log("user: ", user);
    console.log("create user successfully");
  };
  return (
    <div>
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
            type="text"
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
      </div>
    </div>
  );
};

export default FirebaseAuth;
