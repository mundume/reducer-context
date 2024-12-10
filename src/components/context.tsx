import { createContext, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type InitialState = {
  todos: Todo[];
  count: number;
  add: () => void;
  substract: () => void;
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  markCompmplete: (todo: { isCompleted: boolean; id: number }) => void;
};

const initialState: InitialState = {
  count: 0,
  add: () => {},
  substract: () => {},
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  markCompmplete: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const CountContext = createContext<InitialState>(initialState);

export const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        completed: false,
        id: Math.random(),
        title,
      },
    ]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markCompmplete = ({
    isCompleted,
    id,
  }: {
    isCompleted: boolean;
    id: number;
  }) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: isCompleted } : todo
      )
    );
  };

  const add = () => {
    setCount(count + 1);
  };

  const substract = () => {
    setCount(count - 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        add,
        substract,
        todos,
        addTodo,
        removeTodo,
        markCompmplete,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
