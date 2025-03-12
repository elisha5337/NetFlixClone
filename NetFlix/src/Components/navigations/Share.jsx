import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "./Home";
import { Outlet } from "react-router-dom";

function Share() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Home /> */} <Outlet />
      <Footer />
    </>
  );
}
export default Share;
