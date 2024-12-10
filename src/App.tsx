import { useContext } from "react";
import "./App.css";
import { Component1 } from "./components/component1";
import { CountContext } from "./components/context";
import { Component2 } from "./components/Component2";
import { Component3 } from "./components/Component3";

function App() {
  const { count, markCompmplete, removeTodo, todos } = useContext(CountContext);

  return (
    <>
      <h2 style={{ color: "red" }}>our context : {count}</h2>
      <p>Our Todos</p>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3
            style={todo.completed ? { color: "green" } : { color: "red" }}
            onClick={() =>
              markCompmplete({ isCompleted: !todo.completed, id: todo.id })
            }
            onDoubleClick={() => removeTodo(todo.id)}
          >
            {todo.title}
          </h3>
          <p style={{ color: todo.completed ? "green" : "red" }}>
            {todo.completed ? "completed" : "not completed"}
          </p>
        </div>
      ))}

      <Component1 />
      <Component2 />
      <Component3 />
    </>
  );
}

export default App;
