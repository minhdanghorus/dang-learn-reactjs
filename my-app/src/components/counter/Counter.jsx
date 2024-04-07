import React, { useState } from "react";

const Counter = () => {
  // stale state
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 3000);
  };
  return <div onClick={handleIncrement}>Increment {count}</div>;
};

export default Counter;
