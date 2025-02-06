import React, { useEffect } from "react";
import axios from "axios";

//using fetch

function Task() {
  const getdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("fetch", data);
  };

  getdata();

  //Using axios

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("axios", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>pra</div>;
}
export default Task;
