import React, { createContext } from "react";
import Context_Child from "./Context_Child";

const fristname = createContext();
function Usecontext() {
  return (
    <div>
      Usecontext
      <fristname.Provider value={"shubham"}>
        <Context_Child />
      </fristname.Provider>
    </div>
  );
}

export default Usecontext;
export { fristname };
