import React, { useState } from "react";

function Use_sate() {
  const [color, setColor] = useState("green");
  // let change_bc = () => {};
  return (
    <div>
      {/* <h1>wall is {color}</h1> */}
      <div
        className="w-full h-screen  duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixex flex  flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white  rounded-3xl ">
            <button
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
              className="outline-none px-4 rounded-full text-white"
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
              className="outline-none px-4 rounded-full text-white"
            >
              green
            </button>
            <button
              onClick={() => setColor("purple")}
              style={{ backgroundColor: "purple" }}
              className="outline-none px-4 rounded-full text-white"
            >
              purple
            </button>
            <button
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
              className="outline-none px-4 rounded-full text-white"
            >
              yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
              className="outline-none px-4 rounded-full text-white"
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Use_sate;
