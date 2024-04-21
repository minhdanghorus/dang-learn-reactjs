import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card></Card>
        <Card2 secondary></Card2>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
};

export default App;
