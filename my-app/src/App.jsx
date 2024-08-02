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
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#ff6bcb",
//   },
//   orange: "#ffa400",
// };

const App = () => {
  const timerRef = React.useRef();
  const [count, setCount] = React.useState(0);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  console.log("==render App");

  // Khi chúng ta chuyển trang (coponent re-render) thì useEffect sẽ chạy để clear interval cái timerRer đi, tránh trường hợp memory leak do chạy hoài.
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <h3>Timer: {count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
    // <div>
    //   {/* <Photos></Photos> */}
    //   {/* <Counter></Counter> */}
    //   {/* <Timer></Timer> */}
    //   {/* <Header></Header> */}
    //   {/* <Photos></Photos> */}
    //   {/* <HackerNews></HackerNews> */}
    //   {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
    // </div>
  );
};

export default App;
