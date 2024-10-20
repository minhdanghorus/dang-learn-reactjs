import React from "react";
import { CountProvider, useCount } from "./contexts/countContext";

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
    <div className="p-5 flex justify-center items-center gap-x-5">
      <CountProvider>
        <Counter></Counter>
        <CoundDisplay></CoundDisplay>
      </CountProvider>
    </div>
  );
};

export default App;
