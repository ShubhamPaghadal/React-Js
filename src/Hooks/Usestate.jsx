import React, { useState } from "react";

function Usestate() {
  const [count, setcount] = useState(0);
  return (
    <div>
      useState
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 5)}>Update State </button>
    </div>
  );
}

export default Usestate;
