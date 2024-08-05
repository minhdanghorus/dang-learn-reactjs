import React from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutDropdown = (e) => {
      console.log("e.target", e.target);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);
  return (
    <div className=" relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className=" p-5 border border-gray-400 rounded-lg w-full cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Selected
      </div>
      {showDropdown && (
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
