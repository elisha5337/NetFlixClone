import React from "react";
import Share from "../../Components/navigations/Share.jsx";
import Browse from "../../Components/navigations/Browse.jsx";
import Homes from "../../Components/navigations/Home.jsx";
import Movies from "../../Components/navigations/Movies.jsx";
import Latest from "../../Components/navigations/Latest.jsx";
import { Route, Routes } from "react-router-dom";
import MyList from "../../Components/navigations/MyList.jsx";
import Tvshow from "../../Components/navigations/Tvshow.jsx";
import NetFlix from "../../Components/navigations/NetFlix.jsx";
import Header from "../../Components/Header/Header.jsx";
function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Share />}>
          <Route path="/" element={<Homes />} />
          <Route path="/Tvshow" element={<Tvshow />} />
          <Route path="/NetFlix" element={<NetFlix />} />
          <Route path="/MyList" element={<MyList />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Latest" element={<Latest />} />
          <Route path="/Browse" element={<Browse />} />
        </Route>
      </Routes>
      <MyList />
    </>
  );
}

export default Home;
