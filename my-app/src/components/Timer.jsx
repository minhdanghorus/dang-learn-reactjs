import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Hello");
  
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 1000);

    // clean up
    return () => {
      clearInterval(timer);
    }
  }, [message]);

  return (
    <div>
      <input
        type="text"
        className="border border-gray-300 rounded-lg px-4 py-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
