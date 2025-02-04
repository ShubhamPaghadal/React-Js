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
import Login from "./Componets/Login page/Login";
import Protected from "./Componets/Protected";
import Admin from "./Componets/User/Admin";
import User_Au from "./Componets/User/User_Au";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" Component={Home} />
            {/* <Route path="/" element={<Protected Component={Home} />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/about" element={<Protected Component={About} />} />
            <Route path="/admin" element={<Protected Component={Admin} />} />
            <Route path="/user" element={<Protected Component={User_Au} />} />

            <Route path="/about" element={<Protected Component={About} />} />
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
