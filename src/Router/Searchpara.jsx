import React from "react";
import { useSearchParams } from "react-router-dom";

function Searchpara() {
  const [searchparams, setSearchparams] = useSearchParams();
  const age = searchparams.get("age");
  console.log(age);

  return <div>Searchpara</div>;
}

export default Searchpara;
