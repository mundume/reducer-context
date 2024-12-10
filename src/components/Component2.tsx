import React, { useContext } from "react";
import { CountContext } from "./context";

export function Component2() {
  const { add } = useContext(CountContext);
  return (
    <div className="">
      {/* <h3>Component 2 will add</h3>
      <button onClick={add}>Component2</button>; */}
    </div>
  );
}
