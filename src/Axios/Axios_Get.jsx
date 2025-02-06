import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios_Get() {
  const [api, setapi] = useState();
  const getdata = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = response.data;
    setapi(data);
    console.log(data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      Axios_Get
      {api &&
        api.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })}
    </div>
  );
}
export default Axios_Get;
