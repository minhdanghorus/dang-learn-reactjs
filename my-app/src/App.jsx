import React, { Fragment } from "react";
import { CountProvider, useCount } from "./contexts/countContext";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { GalleryProvider } from "./contexts/gallery-context";
import PhotoList from "./components/gallery/PhotoList";
import CartList from "./components/gallery/CartList";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
import BlogPageDetails from "./components/BlogPageDetails";

function Counter() {
  const [count] = useCount();
  return <div className="">The count is: {count}</div>;
}

function CoundDisplay() {
  // const setCount = () => {};
  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 rounded-lg bg-purple-500 text-white font-semibold"
    >
      Increment count
    </button>
  );
}

const App = () => {
  // return (
  //   <Fragment>
  //     {/* <div className="p-5 flex justify-center items-center gap-x-5">
  //       <CountProvider>
  //         <Counter></Counter>
  //         <CoundDisplay></CoundDisplay>
  //       </CountProvider>
  //     </div> */}
  //     <AuthProvider>
  //       <GalleryProvider>
  //         <HeaderMain></HeaderMain>
  //         <PhotoList></PhotoList>
  //         <CartList></CartList>
  //       </GalleryProvider>
  //     </AuthProvider>
  //   </Fragment>
  // );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="blog/:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>404 Not Found</>}></Route>
      </Routes>
    </div>
  );
};

export default App;
