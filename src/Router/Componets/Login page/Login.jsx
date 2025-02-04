import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [uname, setuname] = useState("");
  const [pass, setPass] = useState("");
  const navigator = useNavigate();
  const datastore = {
    uname: uname,
    pass: pass,
    role: "user",
  };

  // let arr = [];
  // let DATA = JSON.parse(datastore);
  // const storeData = (e) => {
  //   arr.push(DATA);
  //   localStorage.setItem("information", arr);
  //   e.preventDefault();

  //   // localStorage.setItem("username", e.target.username.value);
  //   console.log("username", uname);
  //   // navigator("/");
  //   setPass("");
  //   setuname("");
  // };

  let arr = JSON.parse(localStorage.getItem("information")) || [];
  const storeData = (e) => {
    arr.push(datastore);
    localStorage.setItem("information", JSON.stringify(arr));
    e.preventDefault();

    // localStorage.setItem("username", e.target.username.value);
    console.log("username", uname);
    navigator("/");
    setPass("");
    setuname("");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={storeData}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={uname}
            onChange={(e) => setuname(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
