import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Axios.css";

function Axios_Post() {
  //   const data = { username: "", password: "" };
  const [api, setApi] = useState("");
  const [selectuser, setselectuser] = useState(null);
  const handaldata = (e) => {
    setselectuser({ ...selectuser, [e.target.name]: e.target.value });
    console.log(e.target);
  };
  console.log("selectuser", selectuser);

  console.log("apiiii", api.users);

  //   const hsndalsubmit = (e) => {
  //     e.preventDefault();
  //     const response = axios
  //       .post("https://jsonplaceholder.typicode.com/users", api)
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  const getdata = async () => {
    const response = await axios.get("https://dummyjson.com/users/");
    const data = response.data;
    setApi(data);
    console.log("api", data);
  };
  useEffect(() => {
    getdata();
  }, []);

  const handalupdate = (e) => {
    e.preventDefault();
    let data = { firstName: selectuser?.firstName, email: selectuser?.email };
    const response = axios
      .put(`https://dummyjson.com/users/${selectuser?.id}`, data, {
        headers: { "Content-Type": "application/json" },
      })

      .then((response) => {
        console.log("response data", response.data);
        getdata();
        setselectuser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("selectuser", selectuser);

  return (
    <div>
      Axios_Post
      <div className="login-container">
        <h1>Login</h1>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="firstName"
            value={selectuser?.firstName ? selectuser?.firstName : ""}
            onChange={handaldata}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={selectuser?.email ? selectuser?.email : ""}
            onChange={handaldata}
            required
          />
        </div>

        <button className="red" onClick={handalupdate}>
          Update
        </button>
      </div>
      {api?.users?.length > 0 &&
        api?.users?.map((item) => {
          return (
            <div key={item?.id}>
              <h1>{item?.firstName}</h1>
              <p>{item?.email}</p>
              <button onClick={() => setselectuser(item)}>Edit</button>
            </div>
          );
        })}
    </div>
  );
}

export default Axios_Post;
