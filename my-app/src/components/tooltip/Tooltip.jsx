import React from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coordinates, setCoordinates] = React.useState({});
  const handleHover = (e) => {
    setCoordinates(nodeRef.current.getBoundingClientRect());
  };

  return (
    <div className="">
      {hovered && (
        <TooltipContent coordinates={coordinates}>{children}</TooltipContent>
      )}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </div>
  );
};

const TooltipContent = ({ children, coordinates }) => {
  return ReactDOM.createPortal(
    <div
      className="p-3 bg-black text-white rounded-xl inline-block absolute"
      style={{
        top: coordinates.top + coordinates.height + window.scrollY,
        left: coordinates.left,
      }}
    >
      <span>{children}</span>
    </div>,
    document.querySelector("body")
  );
};

export default Tooltip;
