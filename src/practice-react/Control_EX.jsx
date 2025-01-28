import React, { useRef, useState } from "react";

function Control() {
  const [val, setVal] = useState("");

  let inputRef = useRef("");
  let inputRef2 = useRef("");

  function submitForm(e) {
    e.preventDefault();
    console.log("name", inputRef.current.value);
    console.log("company", inputRef2.current.value);
  }
  console.log({ val });
  return (
    // Controlled
    <>
      {/* <input type="text" onChange={(e) => setVal(e.target.value)} />
      <h1>{val}</h1> */}

      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" />
        <input ref={inputRef2} type="text" />
        <button>Click</button>
      </form>
    </>
  );
}

export default Control;
