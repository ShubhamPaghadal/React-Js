import React from "react";
import { useReducer } from "react";

function Usereduce() {
  const reduse = (state, action) => {
    switch (action) {
      case "++":
        return state + 1;
        break;

      case "--":
        return state - 1;
        break;

      default:
        break;
    }
    return state;
  };

  const [count, dispatch] = useReducer(reduse, 0);
  //   console.log(useReducer());

  return (
    <div>
      Usereduce
      <h1>{count}</h1>
      <button onClick={() => dispatch("++")}>increment</button>
      <button onClick={() => dispatch("--")}>decrement</button>
    </div>
  );
}

export default Usereduce;
