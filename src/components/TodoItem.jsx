import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleTitleClick = () => {
    if (!completed) {
      setIsEditing(true);
    }
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
    if (editedTitle.trim() !== "") {
      dispatch(editTodo({ id: id, title: editedTitle }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <>
      <li className={completed ? "complete" : ""}>
        <div className="task-container">
          <input
            type="checkbox"
            name="tasks"
            id={id}
            checked={completed}
            onChange={handleCompleteClick}
          />
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
          ) : (
            <span className="todos-title" onClick={handleTitleClick}>{title}</span>
          )}
          <button
            onClick={handleDeleteClick}
            title={`Remove the '${title}' task`}
            className="remove-task"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M17.25 6.75L6.75 17.25"
                stroke="#A4D0E3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.25 17.25L6.75 6.75"
                stroke="#A4D0E3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
