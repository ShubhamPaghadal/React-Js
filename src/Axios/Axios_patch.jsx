import axios from "axios";
import React, { useEffect } from "react";

function Axios_patch() {
  useEffect(() => {
    axios
      .patch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log("Resource updated:", response.data);
      });
  }, []);

  return (
    <>
      <div>Axios_patch</div>
    </>
  );
}

export default Axios_patch;
