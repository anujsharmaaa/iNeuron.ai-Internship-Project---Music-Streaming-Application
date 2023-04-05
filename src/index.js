import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./components/Home";
import AboutUs from "./components/AboutUs";

const root = ReactDOM.createRoot(document.getElementById("anujproject"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
