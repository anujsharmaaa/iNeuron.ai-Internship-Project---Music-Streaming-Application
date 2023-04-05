import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ cb }) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <a href="/">
            Creative <span className="m"> Music </span>
            <span className="p"> P </span>
          </a>
        </h1>
      </div>
      <div className="menu">
        <ul>
          <li
            onClick={() => {
              cb("alltimefav");
            }}
          >
            {" "}
            All time fav{" "}
          </li>
          <li
            onClick={() => {
              cb("myMusic");
            }}
          >
            {" "}
            My Music Song{" "}
          </li>
          <li
            onClick={() => {
              cb("trendingMusic");
            }}
          >
            {" "}
            Trending Song{" "}
          </li>
          <li onClick={() => navigate("/aboutus")}> About Us </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
