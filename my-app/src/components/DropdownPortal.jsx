import React from "react";
import { useClickOutSide } from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { node, show, setShow } = useClickOutSide();

  const [coordinates, setCoordinates] = React.useState({});
  const handleClick = () => {
    console.log(node.current.getBoundingClientRect());
    setCoordinates(node.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className=" relative w-full max-w-[400px]" ref={node}>
      <div
      className=" p-5 border border-gray-400 rounded-lg w-full cursor-pointer overflow-hidden"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && <DropdownList coordinates={coordinates} />}
    </div>
  );
};

function DropdownList({ coordinates }) {
  if (document === undefined) return null;

  return ReactDOM.createPortal(
    <div
      className=" p-5 border border-gray-400 rounded-lg w-full absolute top-full left-0 bg-white"
      style={{
        top: coordinates.top + coordinates.height,
        left: coordinates.left,
        width: coordinates.width,
      }}
    >
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">ReactJS</div>
      <div className="p-5 cursor-pointer">VueJS</div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
