import { createSlice } from "@reduxjs/toolkit";

// Retrieve todos from local storage
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state)); 
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
      localStorage.setItem("todos", JSON.stringify(state)); 
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(newState)); 
      return newState;
    },
    editTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
      localStorage.setItem("todos", JSON.stringify(state)); 
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
