import React from "react";
import { useSearchParams } from "react-router-dom";

function Searchpara() {
  const [searchparams, setSearchparams] = useSearchParams();
  const name = searchparams.get("name");
  console.log(name);

  return <div></div>;
}

export default Searchpara;
