import React from "react";

const Button = ({
  onClick,
  className = "",
  full = false,
  type = "button",
  bgColor = "primary",
  children = "Watch now",
  ...props
}) => {
  let bgClassname = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassname = "bg-primary";
      break;
    case "secondary":
      bgClassname = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize ${bgClassname} mt-auto ${
        full ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
