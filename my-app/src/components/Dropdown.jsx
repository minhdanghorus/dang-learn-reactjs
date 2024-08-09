import React from "react";
import { useClickOutSide } from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { node, show, setShow } = useClickOutSide();
  return (
    <div className=" relative w-full max-w-[400px]" ref={node}>
      <div
        className=" p-5 border border-gray-400 rounded-lg w-full cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        Selected
      </div>
      {show && (
        <div className=" p-5 border border-gray-400 rounded-lg w-full absolute top-full left-0 bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
