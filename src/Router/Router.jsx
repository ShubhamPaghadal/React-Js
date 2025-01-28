import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Header from "./Componets/Header";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
