import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

function Router_pra() {
  return (
    <div>
      <h1>Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router_pra;
