import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(() => count * 2);
  }, [count]);

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={() => setCount(() => test + 1)}>ADD</button>
      <h1>test is : {test}</h1>
    </div>
  );
}

export default UseEffect;
