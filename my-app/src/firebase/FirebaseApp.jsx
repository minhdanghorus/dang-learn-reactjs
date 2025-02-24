import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { v4 } from "uuid";

const FirebaseApp = () => {
  // colRef
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState("null");
  //   console.log("colRef", colRef);
  useEffect(() => {
    // 1. Get collection data (posts)
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     // console.log("snapshot", snapshot);
    //     let posts = [];
    //     snapshot.docs.forEach((doc) => {
    //       posts.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     console.log("posts", posts);
    //     setPosts(posts);
    //   })
    //   .catch((error) => {
    //     console.log("Error getting documents: ", error);
    //   });

    //2. Realtime listener
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // console.log("posts", posts);
      setPosts(posts);
    });

    const docRefSingle = doc(db, "posts", "zfwrOu3QV4CPspEA09KS");
    // getDoc(docRefSingle).then((doc) => {
    //   console.log("doc:", doc.data());
    // }).catch((error) => {
    //   console.log("Error getting document:", error);
    // });

    onSnapshot(docRefSingle, (doc) => {
      console.log("Current data: ", doc.data());
    });
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      //   title: title,
      //   author: author,

      // In ES6, if the key and value are the same, you can just write the key
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then(
        console.log("Document successfully written!")
        //reset form
      )
      .catch((error) => {
        console.error("Error writing document: ", error);
        //reset form
      });
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);
    await updateDoc(colRefUpdate, {
      title: title,
    });
    console.log("Document successfully updated!");
  };

  const handleRemovePost = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("Document successfully deleted!");
  };

  useEffect(() => {
    const q = query(
      colRef,
      limit(3),
      orderBy("author"),
      orderBy("title", "desc"),
      where("author", "==", "Huy"),
    );
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log("query posts: ", posts);
    });
  });
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form action="" onSubmit={handleAddPost} className="mb-10">
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Add post
          </button>
        </form>

        <form action="" onSubmit={handleRemovePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="PostId"
            onChange={(e) => setPostId(e.target.value)}
          ></input>
          <button
            type="submit"
            className="p-3 bg-red-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Delete post
          </button>
        </form>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        {posts.length > 0 &&
          posts.map((item) => {
            return (
              <div className="p-1" key={item.id}>
                {item.title} - {item.author}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FirebaseApp;
