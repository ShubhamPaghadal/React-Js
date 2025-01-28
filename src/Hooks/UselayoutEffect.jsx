import React, { useEffect, useLayoutEffect, useState } from "react";

function UselayoutEffect() {
  const [value, setvalue] = useState(0);

  useLayoutEffect(() => {
    console.log("useLayoutEffects");
    if (value == 0) setvalue(value + Math.random() * 50);
  }, [value]);
  return (
    <div>
      UselayoutEffect
      <h2>{value}</h2>
      <button
        style={{ borderColor: "red green white pink" }}
        onClick={() => setvalue(0)}
      >
        Change
      </button>
    </div>
  );
}

export default UselayoutEffect;
