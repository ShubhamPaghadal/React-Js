import React, { useState, useMemo } from "react";

function Usememo() {
  const [value, setValue] = useState(10);
  const [number, setNumber] = useState(10);

  const getdata = useMemo(() => {
    console.log("THIS");
    return value;
  }, [value]);

  //   const getdata = () => {
  //     console.log("usememo");
  //     return number;

  //     // return "number is" + number;
  //   };
  return (
    <div>
      <h2>value: {value}</h2>
      <h2>Number: {number}</h2>
      <h1>{getdata}</h1>

      <button onClick={() => setValue(value + 2)}>change Value</button>
      <button onClick={() => setNumber(number + 2)}>change Number</button>
    </div>
  );
}

export default Usememo;

// function Usememo() {
//   const [number, setNumber] = useState(0);
//   const [counter, setCounter] = useState(0);

//   function cubeNumber(num) {
//     console.log("Calculation done!");
//     return Math.pow(num, 3);
//   }

//   const result = useMemo(() => cubeNumber(number), [number]);

//   return (
//     <>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => {
//           setNumber(e.target.value);
//         }}
//       />
//       <h2>Cube of the number is : {result}</h2>
//       <br />
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         counter++
//       </button>
//       <h2>Counter: {counter}</h2>
//     </>
//   );
// }

// export default Usememo;
