import React, { useRef, useState } from "react";

function UseRef() {
  const [value, setvalue] = useState(0);

  const refElemenr = useRef(0);

  const Change = (e) => {
    setvalue(e.target.value);
    refElemenr.current = refElemenr.current + 1;
  };

  //   useEffect(() => {
  //     setvalue(value + 1);
  //   }, );

  return (
    <div>
      UseRef
      <br />
      <input type="text" onChange={Change} />
      <h1> count:- {refElemenr.current}</h1>
      <br />
    </div>
  );
}

export default UseRef;
