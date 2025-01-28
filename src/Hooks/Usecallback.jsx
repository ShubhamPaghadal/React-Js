import React, { useMemo, useCallback, useState } from "react";
// import { memo } from "react";
// import Child from "./Child";

export default function Usecallback() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    console.log("usecallback");

    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

// function Usecallback() {
//   const [valueA, setValueA] = useState(10);
//   const [valueB, setValueB] = useState(10);

//   // Memoized function
//   const changedata = useCallback(() => {
//     console.log("changeA");
//     return valueA;
//   }, [valueA]);

//   // const change = () => {
//   //   setValueA(valueA + 1);
//   // };

//   // Store the result of changedata() in a variable

//   return (
//     <div>
//       <Child />
//       <h1>A : {valueA}</h1>
//       <h1>B : {valueB}</h1>
//       <h1>fn : {changedata()}</h1>

//       <button onClick={() => setValueA(valueA + 1)}>ChangeA</button>
//       <button onClick={() => setValueB(valueB + 1)}>ChangeB</button>
//     </div>
//   );
// }

// export default Usecallback;
