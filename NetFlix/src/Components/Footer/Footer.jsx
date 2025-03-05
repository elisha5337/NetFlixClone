import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="outer">
        <div className="container">
          <div className="social">
            <ul>
              <li>
                <FacebookOutlinedIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li className="youtube">
                <YouTubeIcon />
              </li>
            </ul>
          </div>
          <div className="des">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Invester Relations</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help center</li>
                <li>Jobs</li>
                <li>Cookies preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Users</li>
                <li>Corporate Information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
