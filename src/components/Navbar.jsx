import {  React  } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({sendList}) => {
  const navigate = useNavigate()

  const sendState = (value) => {
    navigate('/', {state: {value : value}})
  }

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
            <li  onClick={() => {sendState("alltimefav")}} > All time fav </li> 
            <li onClick={() => {sendList("mymusic")}}> My Music Song </li>
          <li  onClick={() => {sendList("trending")}}> Trending Song </li>
          <li onClick={() =>
                navigate("/playMusic/contactus")
              }> Contact Us </li>
        </ul>
      </div>
      <div className="hambugger">
        <img
          src="./imgs/hamburger.png"
          alt="Not Found"
        />
      </div>
    </div>
  );
};

export default Navbar;
