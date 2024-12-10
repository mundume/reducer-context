import { useContext } from "react";
import { CountContext } from "./context";

export const Component1 = () => {
  const { addTodo, markCompmplete, removeTodo, todos } =
    useContext(CountContext);

  return (
    <div>
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
      <button onClick={() => addTodo("taylor swift")}>Add Todooo</button>
    </div>
  );
};
