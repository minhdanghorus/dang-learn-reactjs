import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  useEffect(() => {
    // colRef
    const colRef = collection(db, "posts");
    console.log("colRef", colRef);
    // 1. Get collection data (posts)
    getDocs(colRef)
      .then((snapshot) => {
        // console.log("snapshot", snapshot);
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("posts", posts);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return <div></div>;
};

export default FirebaseApp;
