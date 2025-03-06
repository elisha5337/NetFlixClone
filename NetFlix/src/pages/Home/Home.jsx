import React from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Banner from "../../Components/banner/Banner.jsx";
import RowList from "../../Components/rows/RowList/RowList.jsx";
function home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default home;
