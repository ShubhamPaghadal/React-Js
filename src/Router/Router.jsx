import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componets/Home";
import About from "./Componets/About";
import User from "./Componets/User";
import Page404 from "./Componets/Page404";
import Git_hub from "./Componets/Git_hub";
import Layout from "./Componets/Layout";
import Contect from "./Componets/Contect";
import Searchpara from "./Searchpara";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contect />} />
            <Route path="/github" element={<Git_hub />} />
            <Route path="/user/:userid" element={<User />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Searchpara />
      </BrowserRouter>
    </div>
  );
}

export default Router;
