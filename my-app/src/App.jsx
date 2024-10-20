import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}

function Counter() {
  const [count] = useContext(CountContext);
  return <div className="">The count is: {count}</div>;
}

function CoundDisplay() {
  // const setCount = () => {};
  const [, setCount] = useContext(CountContext);
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
