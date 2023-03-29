import {  React  } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({sendList}) => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <a href="http://localhost:3000/">
          Creative <span className="m"> Music </span>
          <span className="p"> P </span>
          </a>
        </h1>
      </div>
      <div className="menu">
        <ul>
        <li onClick={() => {sendList("alltimefav")}}> All time fav </li>
            <li onClick={() => {sendList("mymusic")}}> My Music Song </li>
          <li onClick={() => {sendList("trending")}}> Trending Song </li>
          <li onClick={() =>
                navigate("./contactus")
              }> Contact Us </li>
        </ul>
      </div>
      <div className="hambugger">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/hamburger-menu-1667904-2039427.png?f=avif&w=75"
          alt="Not Found"
        />
      </div>
    </div>
  );
};

export default Navbar;
