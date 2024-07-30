import React from "react";

const Header = () => {
  React.useEffect(() => {
    const handleFixedHeader = () => {
      console.log("fixed header");
      const header = document.getElementById("header");
      if (window.scrollY > 100) {
        // "fixed" is a class in CSS to make the header fixed
        header.classList.add("fixed");
      }
      else {
        header.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    }
  }, []);

  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default Header;
