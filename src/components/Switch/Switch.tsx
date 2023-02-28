import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "../../Pages/Detail/Detail";
import Today from "../../Pages/Today/Today";
import Trending from "../../Pages/Trending/TrendingPage";
import Home from "../Home/Home";

function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gif/:id" element={<Detail />} />
      <Route path="/today" element={<Today />} />
      <Route path="/trending/:trending" element={<Trending />} />
    </Routes>
  );
}

export default Switch;
