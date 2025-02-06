import React, { useEffect, useState } from "react";

function Fetch() {
  const [api, setApi] = useState();
  const getdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setApi(data);
    console.log(data);
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      Axios_Get
      <div>
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
    </div>
  );
}

export default Fetch;
