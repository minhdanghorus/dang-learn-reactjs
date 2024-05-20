import React from "react";
import "./App.css";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
import CardTailwind from "./components/card/CardTailwind";
import CardList from "./components/card/CardList";
import Photos from "./components/photo/Photos";
import Counter from "./components/counter/Counter";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#ff6bcb",
//   },
//   orange: "#ffa400",
// };

const App = () => {
  return (
    <div>
      {/* <Photos></Photos> */}
      <Counter></Counter>
    </div>
  );
};

export default App;
