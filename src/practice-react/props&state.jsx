import React from "react";
import { useState } from "react";

// function Car(props) {
//   return (
//     <>
//       <h1>Helo</h1>
//       <h1>hii {props.name}</h1>
//     </>
//   );
// }

function Car() {
  // here do not change value using variable
  function Update() {
    // setCarName((Carname) => Carname - 1);
    // setCarName((Carname) => Carname - 1);
    // setCarName((Carname) => Carname - 1);
    setCarName(Carname - 3);
  }
  const [Carname, setCarName] = useState(55);
  return (
    <>
      <h2 style={{ color: "red" }}>This is state</h2>
      <input
        type="text"
        value={Carname}
        // onChange={(e) => setCarName(e.target.value)}
      />
      <h2>my name is{Carname}</h2>
      <button onClick={Update}>Click To change value</button>
    </>
  );
}

export default Car;
