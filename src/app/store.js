import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filters/filterSlice";
import todosReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filterReducer,
  },
});
