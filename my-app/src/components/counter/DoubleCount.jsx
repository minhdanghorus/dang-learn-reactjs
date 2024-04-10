import React, { useState } from "react";

const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const handleDoubleNumber = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // setCount(count + 1);  lúc này 2 sự kiện setCount sẽ được đưa vào event loop chờ thực thi cho lần cập nhật state tiếp theo, nên giá trị count sẽ không được cập nhật ngay lập tức.
    // setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleDoubleNumber}>Double counter</button>
      <span className="count" style={{ paddingLeft: "10px" }}>
        {count}
      </span>
    </div>
  );
};

export default DoubleCounter;
