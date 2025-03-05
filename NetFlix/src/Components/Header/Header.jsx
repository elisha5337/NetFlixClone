import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import img1 from "../../../../assets/logo (1).png";
// api=a4997c5de6dad8e94b670186ec06979d
function Header() {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="left">
          <ul>
            <li>
              <img src={img1} alt="logo" width={70} />
            </li>
            <li>NetFlix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
