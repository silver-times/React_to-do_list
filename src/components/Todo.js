import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = (props) => {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((el) => {
        if (el.id === props.todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
