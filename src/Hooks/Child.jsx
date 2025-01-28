import React, { memo } from "react";

function Child() {
  console.log("child");

  return <div></div>;
}

export default memo(Child);
