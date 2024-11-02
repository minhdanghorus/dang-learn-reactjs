import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default Main;
