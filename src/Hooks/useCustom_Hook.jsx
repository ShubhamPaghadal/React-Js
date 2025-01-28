import { useState } from "react";

function useCustom_Hook() {
  const [count, setcount] = useState(0);

  function setdata() {
    setcount(count + 1);
  }

  return {
    count,
    setdata,
  };

  // const [data, setdata] = useState();
  // async function gatedata() {
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   setdata(result);
  // }
  // useEffect(() => {
  //   gatedata();
  // }, []);
  // return data;
  // //   return <div>Custom_Hook</div>;
}

export default useCustom_Hook;
