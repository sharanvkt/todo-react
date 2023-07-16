import React, { useState } from "react";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";

const TodoList = () => {
  const allTodos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };

  const getFilteredTodos = () => {
    if (filter === "remaining") {
      return allTodos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return allTodos.filter((todo) => todo.completed);
    } else {
      return allTodos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="container" id="main-content">
      <ul className="stats">
        <li>
          <button
            data-filter="remaining"
            onClick={() => handleFilterClick("remaining")}
            className={filter === "remaining" ? "selected" : ""}
          >
            Remaining
          </button>
          <span id="remaining-tasks">
            {allTodos.filter((todo) => !todo.completed).length}
          </span>
        </li>
        <li>
          <button
            data-filter="completed"
            onClick={() => handleFilterClick("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </button>
          <span id="completed-tasks">
            {allTodos.filter((todo) => todo.completed).length}
          </span>
        </li>
        <li>
          <button
            data-filter="total"
            onClick={() => handleFilterClick("all")}
            className={filter === "all" ? "selected" : ""}
          >
            All tasks
          </button>
          <span id="total-tasks">{allTodos.length}</span>
        </li>
      </ul>

      <ul className="todos">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
