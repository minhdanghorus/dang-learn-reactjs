import React, { useEffect, useState } from "react";

const Counter = () => {
  // stale state
  // const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 3000);
  // };
  // return <div onClick={handleIncrement}>Increment {count}</div>;
  const [infor , setInfor] = useState({
    firstName: "Tran Minh Dang",
    lastName: "Nguyen",
  })
  useEffect(() => {
    console.log("input form");
  }, [infor.lastName]);

  return <div className=" p-5 flex gap-x-4 items-center">
    {/* <span className=" text-2xl font-bold">{count}</span> */}
    <input type="text" value={infor.firstName} onChange={(e) => setInfor({...infor, firstName: e.target.value})} className=" px-4 py-2 border border-gray-300 rounded-lg" />
    {/* <button onClick={() => setCount(count + 1)} className=" px-4 py-2 bg-blue-500 text-white rounded-lg">Increment</button> */}
  </div>;
};

export default Counter;
