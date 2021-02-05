import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',

  initialState: 'SHOW_ALL',

  reducers: {
    setVisibilityFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = filterSlice.actions;

export default filterSlice.reducer;
