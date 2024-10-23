import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/blog"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Blog
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Nav;
