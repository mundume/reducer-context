import React, { useContext, useState } from "react";
import { CountContext } from "./context";

export const Component3 = () => {
  const { addTodo } = useContext(CountContext);
  const [input, setInput] = useState("string");
  return (
    <div className="">
      enter your todo
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={() => addTodo(input)}>Component3</button>;
    </div>
  );
};
