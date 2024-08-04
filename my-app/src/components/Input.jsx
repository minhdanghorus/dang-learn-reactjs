import React, { useEffect } from "react";

const Input = () => {
  const divRef = React.useRef(null);
  const inputRef = React.useRef(null);

  useEffect(() => {
    // console.log('divRef: ', divRef.current);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  console.log("divRef: ", divRef.current);

  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className=" inline-block p-5 borde forcus: border-blue-400"
      />
    </div>
  );
};

export default Input;
