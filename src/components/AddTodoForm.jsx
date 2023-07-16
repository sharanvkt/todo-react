import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import AppTitle from "./AppTitle";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue(""); // Clear the input value
  };

  return (
    <>
      <div id="main-header">
        <div className="container">
        <AppTitle>Todo Matic</AppTitle>
          <h3>Hi there, what needs to be done?</h3>
          <form onSubmit={onSubmit} action="" id="todo-form">
            <input
              type="text"
              name="task-name"
              placeholder="e.g write a book on how to center a div"
              value={value} // Set the input value
              onChange={(e) => setValue(e.target.value)}
              autoFocus
            />
            <button type="submit" style={{ color: "white" }}>
              Add Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTodoForm;
