import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',

  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      console.log(action);

      state.push({
        id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
