import React, { useEffect } from "react";
import "./App.css";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
import CardTailwind from "./components/card/CardTailwind";
import CardList from "./components/card/CardList";
import Photos from "./components/photo/Photos";
import Counter from "./components/counter/Counter";
import Header from "./components/Header";
import Timer from "./components/Timer";
import HackerNews from "./components/news/HackerNews";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
import StopWatch from "./components/StopWatch";
import Input from "./components/Input";
import TextareaAutoResize from "./components/TextareaAutoResize";
import Dropdown from "./components/Dropdown";
import Blog from "./components/Blogs";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#ff6bcb",
//   },
//   orange: "#ffa400",
// };

const App = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <Photos></Photos> */}
      {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
      {/* <StopWatch></StopWatch> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <div className="p-5">
        <Dropdown></Dropdown>
      </div> */}
      {/* <Blog></Blog> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <HackerNews></HackerNews>}
    </div>
  );
};

export default App;
