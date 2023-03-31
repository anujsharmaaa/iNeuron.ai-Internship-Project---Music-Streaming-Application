import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayMusic from "./components/PlayMusic";
import Contact from "./components/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/playMusic" element={<PlayMusic />}></Route>
        <Route path="/playMusic/contactus" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("anujproject")
);
