import React from "react";
import ReactDOM from "react-dom";
import PlayMusic from "./components/PlayMusic";
import  Aboutus from "./components/Aboutus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/playMusic" element={<PlayMusic />}></Route>
        <Route path="/playMusic/Aboutus" element={<Aboutus />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("anujproject")
);
