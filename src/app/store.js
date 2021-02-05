import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/todoSlice';
import filterReducer from './filterSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
});
