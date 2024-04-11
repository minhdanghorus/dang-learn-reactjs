import React from "react";
import "./App.css";
import Button from "./components/button/Button";

const App = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Button className="button--secondary">Click me</Button>
    </div>
  );
};

export default App;
