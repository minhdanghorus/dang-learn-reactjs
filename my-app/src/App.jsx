import React, { Fragment } from "react";
import { CountProvider, useCount } from "./contexts/countContext";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { GalleryProvider } from "./contexts/gallery-context";
import PhotoList from "./components/gallery/PhotoList";

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
  return (
    <Fragment>
      {/* <div className="p-5 flex justify-center items-center gap-x-5">
        <CountProvider>
          <Counter></Counter>
          <CoundDisplay></CoundDisplay>
        </CountProvider>
      </div> */}
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
