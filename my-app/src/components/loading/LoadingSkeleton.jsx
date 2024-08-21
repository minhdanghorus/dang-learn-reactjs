import React from "react";

const LoadingSkeleton = (props) => {
  return <div className="skeleton" style={{
    width: props.width || "100%",
    height: props.height,
    borderRadius: props.borderRadius
  }}></div>;
};

export default LoadingSkeleton;
