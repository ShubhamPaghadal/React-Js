import React, { useContext, useState } from "react";
import { fristname } from "./Usecontext";
import Prac_hooks from "./Prac_hooks";

function Context_Child() {
  const [first, setfirst] = useState();
  const name = useContext(fristname);

  return (
    <div>
      Context_Child
      <h1>my name is :: {name}</h1>
      <input type="text" />
      {/* <Prac_hooks name={first} /> */}
    </div>
  );
}

export default Context_Child;
