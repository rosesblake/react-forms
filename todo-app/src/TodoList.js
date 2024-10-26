import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(({ id, task }) => (
          <li key={id}>
            <Todo task={task} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
