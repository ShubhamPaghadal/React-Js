import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

function Git_hub() {
  // const data = useLoaderData();

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ShubhamPaghadal")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);
  return (
    <div>
      Folowers{data.following}
      {/* <img src={data.avatar_url} alt="Git_Hub image" width={300} /> */}
    </div>
  );
}

export default Git_hub;

// export githubLoader = async () => {
//         fetch('https://api.github.com/users/ShubhamPaghadal')
// }
