import React from "react";
import "./App.css";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
import CardTailwind from "./components/card/CardTailwind";
import CardList from "./components/card/CardList";
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
    // <ThemeProvider theme={theme}>
    //   <GlobalStyles></GlobalStyles>
    //   <CardList>
    //     <Card></Card>
    //     <Card2 secondary></Card2>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //   </CardList>
    // </ThemeProvider>
    <div>
      <CardList>
        <CardTailwind></CardTailwind>
        <CardTailwind primary={true} fontSize="text-2xl"></CardTailwind>
      </CardList>
    </div>
  );
};

export default App;
