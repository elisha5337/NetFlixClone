import React from "react";
import Share from "./Components/navigations/Share.jsx";
import Browse from "./Components/navigations/Browse.jsx";
import Homes from "./Components/navigations/Home.jsx";
import Movies from "./Components/navigations/Movies.jsx";
import Latest from "./Components/navigations/Latest.jsx";
import MyList from "./Components/navigations/MyList.jsx";
import { Route, Routes } from "react-router-dom";
import Tvshow from "./Components/navigations/Tvshow.jsx";
import NetFlix from "./Components/navigations/NetFlix.jsx";
import Four04 from "./Components/navigations/Four04.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Share />}>
          <Route path="/" element={<Homes />} /> {/* Default route for "/" */}
          <Route path="/Tvshow" element={<Tvshow />} />
          <Route path="/NetFlix" element={<NetFlix />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Latest" element={<Latest />} />
          <Route path="/Mylist" element={<MyList />} />
          <Route path="/Browse" element={<Browse />} />
          <Route path="*" element={<Four04 />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
